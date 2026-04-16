# AI Agents Site — проект (Next.js)

Кратко: минимальный шаблон сайта на Next.js с поддержкой двух языков (ru/en), мобильной версткой и простыми страницами: главная, модуль(ы), дашборд. Файлы размещены в ~/Documents/ai-agents-site.

Цель сейчас: минимальное наполнение, чтобы можно было запустить локально и развернуть на Mac mini.

Структура проекта (минимум):
- package.json
- next.config.js (i18n)
- pages/
  - index.js (выбор языка)
  - ru/index.js
  - en/index.js
  - modules.js
  - dashboard.js
- components/Header.js
- styles/globals.css
- deploy.md — инструкции по развертыванию на Mac mini и опциям (Cloudflare Tunnel, Caddy, pm2)

Запуск локально
1. Открой терминал на Mac и перейди в папку проекта:
   cd ~/Documents/ai-agents-site
2. Установи зависимости и запусти dev сервер:
   npm install
   npm run dev
3. Открой http://localhost:3000

Примечания
- Аутентификация и платежи не реализованы — это минимальный шаблон. Позже добавим NextAuth / Prisma / SQLite/Postgres и webhooks для оплаты.
- Мобильная версия реализована базовой адаптивной в `styles/globals.css`.

Дальше я могу:
- добавить skeleton аутентификации (NextAuth + Credentials) — скажи, если нужно;
- подключить Markdown/MDX для контента;
- подготовить deploy скрипт и помощь по Cloudflare Tunnel/Caddy;
- инициализировать git-репозиторий и помочь с загрузкой на GitHub.

Если всё ок — я продолжу добавлять файлы и инструкцию deploy.md (дело уже сделано). Если хочешь изменить имя папки — скажи.