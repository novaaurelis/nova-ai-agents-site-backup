import React, {useEffect} from 'react'
import Header from 'components/Header'
import Link from 'next/link'
import CodeBlock from 'components/CodeBlock'

export default function MacInstall(){
  useEffect(()=>{
    // noop - placeholder if we need client effects
  },[])

  return (
    <div>
      <Header/>
      <main className="container">
        <article className="module">
          <header className="module-header">
            <h1>Установка OpenClaw на macOS</h1>
            <p className="muted">Пошаговое руководство — от окружения до запуска сервера. Команды готовы к копированию.</p>
          </header>

          <section className="intro">
            <p className="lead">Коротко: установим Homebrew, nvm/Node, клонируем репозиторий, установим зависимости и настроим постоянный запуск через pm2. Всё оформлено так, чтобы можно было копировать команды одной кнопкой.</p>
          </section>

          <section className="steps">
            <ol>
              <li className="step">
                <h3>1) Требования и подготовка</h3>
                <ul>
                  <li>macOS 11+ (рекомендовано).</li>
                  <li>Homebrew — пакетный менеджер.</li>
                  <li>Git и управление версиями Node через <strong>nvm</strong>.</li>
                  <li>Проверить свободное пространство и права.</li>
                </ul>
              </li>

              <li className="step">
                <h3>2) Установка Homebrew</h3>
                <p className="note">Homebrew упрощает установку многих инструментов.</p>
                <CodeBlock>{`/bin/bash -c "$(curl -fsSL https://raw.githubusercontent.com/Homebrew/install/HEAD/install.sh)"`}</CodeBlock>
              </li>

              <li className="step">
                <h3>3) Установка nvm и Node.js</h3>
                <p>Рекомендую LTS‑версию Node через nvm.</p>
                <CodeBlock>{`# Установить nvm
curl -fsSL https://raw.githubusercontent.com/nvm-sh/nvm/v0.39.3/install.sh | bash
# Перезапустите терминал или выполните
export NVM_DIR="$HOME/.nvm" && . "$NVM_DIR/nvm.sh"
# Установить LTS
nvm install --lts
nvm use --lts
node -v`}</CodeBlock>
              </li>

              <li className="step">
                <h3>4) Клонирование репозитория и установка зависимостей</h3>
                <p>Клонируем проект рядом с Documents и ставим зависимости.</p>
                <CodeBlock>{`git clone https://github.com/novaaurelis/ai-agents-site.git ~/Documents/ai-agents-site
cd ~/Documents/ai-agents-site
npm ci`}</CodeBlock>
                <p className="tip">Если не используешь npm ci (нет package-lock), используй <code>npm install</code>.</p>
              </li>

              <li className="step">
                <h3>5) .env.local</h3>
                <p>Создай <code>.env.local</code> и добавь переменные окружения (если нужны).</p>
                <CodeBlock>{`# .env.local
NEXT_PUBLIC_API_URL=http://localhost:3000
# TELEGRAM_BOT_TOKEN=...
# OTHER_KEY=...`}</CodeBlock>
              </li>

              <li className="step">
                <h3>6) Локальный запуск (dev)</h3>
                <p>Запускаем dev‑сервер и проверяем в браузере.</p>
                <CodeBlock>{`npm run dev
# Открой http://localhost:3000`}</CodeBlock>
                <p className="check">Логи проекта: <code>tail -n 200 ~/Documents/ai-agents-site-dev.log</code> или <code>pm2 logs ai-agents-site --lines 200</code></p>
              </li>

              <li className="step">
                <h3>7) Постоянный запуск: pm2</h3>
                <p>Для автоперезапуска удобно pm2. Не используем pm2 в prod с dev — лучше сборка и next start.</p>
                <CodeBlock>{`# Установить pm2
npm install -g pm2
# Запустить (dev)
pm2 start npm --name ai-agents-site --cwd /Users/$(whoami)/Documents/ai-agents-site -- run dev --watch --update-env
# Сохранить процессы
pm2 save
# Автозапуск при загрузке
pm2 startup`}</CodeBlock>
              </li>

              <li className="step">
                <h3>8) Production — кратко</h3>
                <CodeBlock>{`npm run build
npm run start
# или под pm2
pm2 start npm --name ai-agents-site -- run start`}</CodeBlock>
                <p className="tip">Рекомендуется поставить reverse proxy (Caddy/Nginx) и включить HTTPS.</p>
              </li>

              <li className="step">
                <h3>9) Диагностика и быстрые решения</h3>
                <div className="columns">
                  <div>
                    <h4>Проверка слушателя</h4>
                    <CodeBlock>{`lsof -iTCP:3000 -sTCP:LISTEN -Pn`}</CodeBlock>
                  </div>
                  <div>
                    <h4>Проверка ответа</h4>
                    <CodeBlock>{`curl -I http://localhost:3000`}</CodeBlock>
                  </div>
                </div>
                <p className="warning">Если в браузере видишь «missing required error components» — вероятно запущены несколько инстансов dev. Останови лишние процессы.</p>
              </li>

              <li className="step">
                <h3>10) Полезные команды для восстановления</h3>
                <ul className="checks">
                  <li><strong>Удалить артефакты:</strong> <code>rm -rf .next</code></li>
                  <li><strong>Переустановить зависимости:</strong> <code>rm -rf node_modules && npm ci</code></li>
                  <li><strong>Убить процесс по PID:</strong> <code>kill &lt;PID&gt;</code></li>
                </ul>
              </li>
            </ol>
          </section>

          <section className="resources">
            <h3>Полезные ссылки</h3>
            <ul>
              <li><a href="https://brew.sh">Homebrew</a></li>
              <li><a href="https://github.com/nvm-sh/nvm">nvm</a></li>
              <li><a href="https://pm2.keymetrics.io/">PM2</a></li>
              <li><a href="https://nextjs.org/docs">Next.js docs</a></li>
            </ul>
          </section>

          <div style={{marginTop:20,textAlign:'center'}}>
            <Link href="/ru/modules/installation-and-run" legacyBehavior><a className="button secondary">Назад</a></Link>
          </div>
        </article>

        <style jsx>{`
          .module{max-width:920px;margin:18px auto;padding:0 18px}
          .module-header{margin-bottom:12px}
          .module-header h1{margin:0 0 6px}
          .module-header p{margin:0;color:var(--muted)}
          .intro .lead{margin:10px 0 18px;font-size:1rem;color:var(--muted)}

          .steps ol{counter-reset:step; padding-left:0}
          .step{background:var(--surface);border-radius:12px;padding:14px;margin:12px 0;border:1px solid rgba(15,23,42,0.04);box-shadow:0 6px 18px rgba(2,6,23,0.03)}
          .step h3{margin:0 0 8px;color:var(--accent)}
          .step ul{margin:6px 0 0 18px}

          .note{background:rgba(99,102,241,0.06);border-left:3px solid var(--accent);padding:8px;border-radius:6px;margin:8px 0}
          .tip{color:var(--muted);font-size:0.95rem}
          .warning{background:rgba(255,69,58,0.06);border-left:3px solid #ff453a;padding:8px;border-radius:6px;margin-top:8px}

          .columns{display:flex;gap:12px}
          .columns > div{flex:1}

          .checks{list-style:none;padding-left:0}
          .checks li{margin:6px 0;padding-left:10px}

          .resources ul{padding-left:18px}

          .button.secondary{background:transparent;color:var(--accent);border:1px solid rgba(15,23,42,0.06);padding:8px 14px;border-radius:8px;text-decoration:none;font-weight:600}

          @media (max-width:720px){
            .columns{flex-direction:column}
          }
        `}</style>
      </main>
    </div>
  )
}
