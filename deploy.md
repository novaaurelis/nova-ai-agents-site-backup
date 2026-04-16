Deploy instructions — варианты для Mac mini

1) Проверить публичный IP на Mac mini
- curl ifconfig.me
- curl https://ipinfo.io/ip
- dig +short myip.opendns.com @resolver1.opendns.com

Если IP динамический — рекомендую Cloudflare Tunnel (cloudflared) или ngrok.

2) Вариант A: Cloudflare Tunnel (без проброса портов)
- Установить cloudflared:
  brew install cloudflared
- Создать туннель и подключить к твоему домену в Cloudflare (см. docs):
  cloudflared tunnel login
  cloudflared tunnel create my-site
  cloudflared tunnel route dns my-site example.com
- Запустить куклу как сервис (launchd):
  sudo cloudflared service install

Преимущество: не нужно пробрасывать порты и работать со статическим IP.

3) Вариант B: Проброс портов + Caddy (автоматический TLS)
- Установить Caddy: brew install caddy
- Пробросить порты 80 и 443 в роутере на IP Mac mini (статический локальный IP)
- Создать Caddyfile:
  example.com {
    reverse_proxy localhost:3000
  }
- Запустить Caddy:
  sudo caddy run --config /path/to/Caddyfile

4) Запуск Next.js в production
- Собрать и запустить:
  npm run build
  npm run start
- Рекомендуется запускать через pm2 или launchd:
  npm i -g pm2
  pm2 start npm --name "ai-agents-site" -- start
  pm2 save
- Настроить автостарт pm2 при загрузке системы.

5) Безопасность и бэкапы
- Закрыть лишние порты в firewall, разрешить только нужные
- Регулярные бэкапы папки проекта и БД на внешний диск или облако
- Настроить логирование и мониторинг (simple healthcheck endpoint)

6) DNS на reg.ru
- Добавь A‑запись на IP (если используешь проброс портов): example.com -> <IP>
- Если используешь Cloudflare Tunnel — настрой route в Cloudflare и обнови NS у reg.ru

Если хочешь, я могу подготовить точные команды и systemd/launchd/pm2 конфиги под твою систему.