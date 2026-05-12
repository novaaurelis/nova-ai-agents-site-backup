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


          <section className="steps">

            <div className="step">
              <h3>Установка OpenClaw на macOS</h3>
              <p>Пошаговое руководство по установке цифрового ассистента на macOS. Рекомендуем выполнять команды в терминале — они готовы к копированию.</p>
            </div>

            <div className="step">
              <h3>Шаг 1. Проверяем системные требования</h3>
              <ul>
                <li>macOS 11+ (рекомендовано).</li>
                <li>Пакетный менеджер Homebrew.</li>
                <li>Git и менеджер версий Node (nvm).</li>
                <li>Свободное дисковое пространство ~300–500 МБ и нужные права доступа.</li>
                <li>Если планируете локальные языковые модели: минимум 8 ГБ RAM (минимум 2 ГБ, рекомендуемо 16 ГБ и дискретная GPU).</li>
              </ul>
            </div>

            <div className="step">
              <h3>Шаг 2. Установка Homebrew</h3>
              <p className="note">Homebrew упрощает установку инструментов. Официальный сайт: <a href="https://brew.sh">https://brew.sh</a></p>
              <p>Открой терминал (Spotlight → Terminal) и выполните одну из команд ниже.</p>
              <CodeBlock>{`/bin/bash -c "$(curl -fsSL https://raw.githubusercontent.com/Homebrew/install/HEAD/install.sh)"`}</CodeBlock>
              <p className="tip">Альтернативно скачайте .pkg с релиза Homebrew на GitHub: https://github.com/Homebrew/brew/releases/latest</p>
              <p className="tip">Если у вас Apple Silicon: <code>eval "$(/opt/homebrew/bin/brew shellenv)"</code></p>
            </div>

            <div className="step">
              <h3>Шаг 3. Установка nvm и Node.js</h3>
              <p>Официальные репозитории: <a href="https://github.com/nvm-sh/nvm">nvm</a>, <a href="https://nodejs.org/">Node.js</a></p>
              <CodeBlock>{`# Download and install nvm:
curl -o- https://raw.githubusercontent.com/nvm-sh/nvm/v0.40.4/install.sh | bash
# Затем (без перезапуска shell):
\. "$HOME/.nvm/nvm.sh"
# Установить Node.js (пример: v24):
nvm install 24
# Проверить версию:
node -v
npm -v`}</CodeBlock>
              <p className="tip">Альтернативный вариант — скачать .pkg инсталлер с https://nodejs.org/dist/</p>
            </div>

            <div className="step">
              <h3>Шаг 4. (Опционально) Установка Bun</h3>
              <p>Если хотите попробовать Bun (альтернатива Node.js): <a href="https://bun.sh">https://bun.sh</a></p>
              <CodeBlock>{`curl -fsSL https://bun.com/install | bash
# или через Homebrew
brew install oven-sh/bun/bun`}</CodeBlock>
            </div>

            <div className="step">
              <h3>Шаг 5. Устанавливаем Ollama</h3>
              <p>Ollama позволяет работать с локальными и приватными моделями. При желании этот шаг можно пропустить.</p>
              <p>Подробности: <a href="/ru/modules/installation-and-run/ollama">страница интеграции с Ollama</a></p>
            </div>

            <div className="step">
              <h3>Шаг 6. Установка OpenClaw</h3>
              <p>Репозиторий и документация:</p>
              <ul>
                <li><a href="https://github.com/openclaw/openclaw">https://github.com/openclaw/openclaw</a></li>
                <li><a href="https://docs.openclaw.ai/">https://docs.openclaw.ai/</a></li>
              </ul>

              <p>Варианты установки — выберите удобный для вас:</p>
              <CodeBlock>{`# Установка через инсталлятор
curl -fsSL https://openclaw.ai/install.sh | bash

# Установка через npm
npm install -g openclaw@latest
openclaw onboard --install-daemon

# Через pnpm
pnpm add -g openclaw@latest
pnpm approve-builds -g
openclaw onboard --install-daemon

# Через bun (если установлен)
bun add -g openclaw@latest
openclaw onboard --install-daemon`}</CodeBlock>

              <p className="tip">Флаг <code>--install-daemon</code> регистрирует сервис (launchd на macOS). Если мастер не запустится автоматически — выполните <code>openclaw onboard --install-daemon</code>.</p>

            </div>

            <div className="step">
              <h3>Шаг 7. Onboarding — кратко</h3>
              <ol>
                <li>Подтвердите лицензионные/вспомогательные запросы (Yes/Да).</li>
                <li>Выберите режим: <strong>QuickStart</strong> (рекомендуется) или Manual для тонкой настройки.</li>
                <li>При выборе провайдера модели укажите Ollama и вставьте API‑ключи.</li>
                <li>Выберите канал коммуникации (например, Telegram) и следуйте инструкциям по созданию бота.</li>
                <li>При завершении скопируйте Gateway Token — он понадобится для входа в Web UI.</li>
              </ol>
              <p className="tip">Адрес Web UI по умолчанию: <code>http://127.0.0.1:18789/</code></p>
            </div>

            <div className="step">
              <h3>Шаг 8. Скиллы, хуки и дополнительные настройки</h3>
              <p>Хуки (hooks) автоматизируют триггерные действия. Рекомендуется включить базовые хуки: boot-md, bootstrap-extra-files, command-logger, session-memory.</p>
              <p>Подробнее: <a href="https://docs.openclaw.ai/automation/hooks">https://docs.openclaw.ai/automation/hooks</a></p>
            </div>

            <div className="step">
              <h3>Шаг 9. Диагностика и запуск</h3>
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
              <p className="warning">Если видите ошибку «missing required error components» — возможно запущены несколько инстансов dev. Остановите лишние процессы.</p>
            </div>

            <div className="step">
              <h3>Шаг 10. Удаление</h3>
              <p>Если нужно удалить OpenClaw:</p>
              <CodeBlock>{`# Простая деинсталляция
openclaw uninstall

# Полный гайд по удалению см. документацию:
https://docs.openclaw.ai/install/uninstall`}</CodeBlock>
            </div>

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

          .steps{padding-left:0}
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
