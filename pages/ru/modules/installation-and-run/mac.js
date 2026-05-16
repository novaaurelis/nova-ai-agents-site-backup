import React from 'react'
import Header from 'components/Header'
import CodeBlock from 'components/CodeBlock'

export default function MacInstall(){
  return (
    <div>
      <Header/>
      <main className="container">
        <article className="module">
          <header className="module-header">
            <h1>Установка OpenClaw на macOS</h1>
            <p className="muted">Пошаговое руководство по установке цифрового ассистента на операционную систему твоего Mac.<br/>Рекомендуем ставить все необходимое через терминал. Все команды готовы к копированию.</p>
          </header>

          <section className="steps">
            <div className="step">
              <div className="step-header"><h3>Шаг 1. Проверяем, подходят ли наши системные требования<br/>для установки цифрового ассистента</h3></div>
              <ul>
                <li>macOS 11+ (рекомендовано)</li>
                <li>наличие пакетного менеджера Homebrew</li>
                <li>наличие Git зависимостей и Node.js</li>
                <li>наличие свободного дискового пространства (300-500Мб) и необходимых прав</li>
                <li>если планируете скачивать и запускать локальные языковые модели,<br/>то желательно иметь минимум 8Гб оперативной памяти (чем больше, тем лучше).<br/>Абсолютный минимум 2 Гб. Наиболее предпочтительными параметрами являются<br/>оперативная память 16Гб и более и наличие дискретной графической карты.</li>
              </ul>

              <p>⚠️ Если у вас нет Homebrew и других зависимостей, то мы установим их далее.</p>

              <p style={{margin:0,height:'14px'}}></p>

            </div>

            <div className="step">
              <div className="step-header"><h3>Шаг 2. Установка Homebrew</h3></div>

              <p>Пакетный менеджер Homebrew упрощает установку многих инструментов.<br/>Официальный сайт: <a href="https://brew.sh">https://brew.sh/</a></p>

              <p>Вызываем окно терминала. Для этого нажимаем в верхнем правом тулбара вашего рабочего стола значок лупы (поставить изображение лупы для удобства восприятия). Далее в поиске пишем Terminal и нажимаем Enter.</p>

              <p>Первый способ. Для установки пакетного менеджера скопируйте данную команду в терминал:</p>
              <CodeBlock>{`/bin/bash -c "$(curl -fsSL https://raw.githubusercontent.com/Homebrew/install/HEAD/install.sh)"`}</CodeBlock>

              <p className="with-gap">Второй способ. Скачать установщик .pkg. Его можно скачать в <a href="https://github.com/Homebrew/brew/releases/latest">последнем релизе</a> Homebrew на GitHub.</p>
              <p style={{margin:0,height:'14px'}}></p>
            </div>

            <div className="step">
              <div className="step-header"><h3>Шаг 3. Установка Node Version Manager и Node.js</h3></div>

              <p>Официальный сайт (репозиторий): <a href="https://github.com/nvm-sh/nvm">https://github.com/nvm-sh/nvm</a><br/>Официальный сайт Node.js: <a href="https://nodejs.org/en/download">https://nodejs.org/en/download</a></p>

              <p>Установка NVM и Node.js. Скопируй команду в терминал</p>

              <CodeBlock>{`# Download and install nvm:
curl -o- https://raw.githubusercontent.com/nvm-sh/nvm/v0.40.4/install.sh | bash

# Download and install Node.js:
nvm install 24

# Verify the Node.js version:
node -v # Should print "v24.15.0".

# Verify npm version:
npm -v # Should print "11.12.1".
`}</CodeBlock>

              <p>Альтернативный способ: скачать инсталлер <a href="https://nodejs.org/dist/v24.15.0/node-v24.15.0.pkg">.pkg</a></p>

              <div className="note" role="note" aria-label="Примечание">
                ⚠️ Если по каким-либо причинам команды или ссылки на скачивание потеряли актуальность или были изменены разработчиками, пожалуйста, перейдите на официальные сайты для получения актуальной информации.
              </div>
              <p style={{margin:0,height:'14px'}}></p>
            </div>

            <div className="step">
              <div className="step-header"><h3>Шаг 4. (Опционально) Установка Bun</h3></div>

              <p>Bun — это современная, сверхбыстрая среда выполнения JavaScript и TypeScript, созданная как прямая, более эффективная альтернатива Node.js.<br/>Официальный сайт Bun: <a href="https://bun.com/">https://bun.com/</a></p>

              <p>Установка Bun. Скопируй команду в терминал</p>

              <CodeBlock>{`curl -fsSL https://bun.com/install | bash`}</CodeBlock>

              <p>Или альтернативная команда через Homebrew:</p>
              <CodeBlock>{`brew install oven-sh/bun/bun`}</CodeBlock>

              <p>Также на <a href="https://bun.com/">официальном сайте</a> можно скачать установщики для конкретной версии вашего компьютера для процессоров на базе ARM или Intel.</p>

              <p style={{margin:0,height:'14px'}}></p>
            </div>

            <div className="step">
                <div className="step-header"><h3>Шаг 5. Устанавливаем Ollama</h3></div>

                <p>Ollama — это бесплатная платформа с открытым исходным кодом, позволяющая использовать вашего агента с помощью облачных и локальных моделей, обеспечивая конфиденциальность данных.<br/>Для интеграции и установки смотри <a href="http://localhost:3000/ru/modules/installation-and-run/ollama">раздел об установке Ollama</a>.</p>

                <p style={{margin:0,height:'14px'}}></p>

                <p>⚠️ Если у вас уже есть подписка на другую нейросеть, или агрегатор нейросетей с доступом к API-ключам, то этот шаг можно пропустить. Используйте ваши ключи для корректного запуска Openclaw в процессе установки.</p>

                <p style={{margin:0,height:'14px'}}></p>

              </div>

            <div className="step">
              <div className="step-header"><h3>Шаг 6. Устанавливаем Openclaw</h3></div>

              <p>Официальный репозиторий Openclaw на Github: <a href="https://github.com/openclaw/openclaw">https://github.com/openclaw/openclaw</a><br/>Официальная документация: <a href="https://docs.openclaw.ai/">https://docs.openclaw.ai/</a></p>

              <p>Установка Openclaw. Выбери одну из команд и скопируй её в терминал</p>

              <CodeBlock>{`curl -fsSL https://openclaw.ai/install.sh | bash`}</CodeBlock>

              <p>Установка через npm</p>
              <CodeBlock>{`npm install -g openclaw@latest
openclaw onboard --install-daemon`}</CodeBlock>

              <p>Установка через pnpm</p>
              <CodeBlock>{`pnpm add -g openclaw@latest
pnpm approve-builds -g
openclaw onboard --install-daemon`}</CodeBlock>

              <p>Установка через bun (если устанавливал bun, шаг 4)</p>
              <CodeBlock>{`bun add -g openclaw@latest
openclaw onboard --install-daemon`}</CodeBlock>

              <p>⚠️ Если в процессе установки возникли какие-либо ошибки - используй официальную документацию.</p>

              <p style={{margin:0,height:'14px'}}></p>

              <p>В процессе копирования файлов установщик проверит необходимые составляющие (Homebrew, Node.js, Git) и при необходимости установит, если что-то было установлено не так.</p>

              <div className="figure"><img src="/images/install-script.svg" alt="Install script" className="responsive"/></div>

              <p style={{margin:0,height:'14px'}}></p>
              <p style={{margin:0,height:'14px'}}></p>

            </div>

            <div className="step">
              <div className="step-header"><h3>Шаг 7. Запуск онбординга - мастера настройки нашего ассистента</h3></div>

              <p>Если мастер настройки не запустится автоматически, то запускаем его через команду</p>
              <CodeBlock>{`openclaw onboard --install-daemon`}</CodeBlock>

              <p>Флаг <code>--install-daemon</code> автоматически регистрирует OpenClaw как системный сервис: на macOS это launchd, на Linux — systemd. После этого Gateway будет стартовать при загрузке системы.</p>

              <ol>
                <li>Нас спросят, что мы все делаем на свой страх и риск и тут мы отвечаем "Да" (Yes).</li>
                <li>Onboarding Mode. Выбираем QuickStart (автоматическая/упрощенная настройка).</li>
              </ol>

              <p>В этом режиме мастер берет на себя базовые конфигурации, минимизирует количество вопросов и подходит для стандартных сценариев использования. Режим Manual предназначен для опытных пользователей и тонкой настройки. Выбирайте его тогда, когда вам нужно изменить специфические параметры сети, пути установки или интегрировать OpenClaw в сложную существующую инфраструктуру.</p>

              <div className="figure"><img src="/images/intro.avif" alt="Intro" className="responsive"/></div>
            </div>

          </section>

        </article>

        <style jsx>{`\n          .module{--step-highlight-width:650px;max-width:720px !important;box-sizing:border-box;margin:12px auto;padding:0 18px 100px;overflow-wrap:break-word}
          @media (max-width:720px){.module{padding-bottom:60px}}
          @media (max-width:700px){
            .module-header, .steps { max-width:100%; margin:0 12px }
            .module { padding:0 12px 60px }
          }\n          .module-header{margin-bottom:0;text-align:center}
          /* align header and steps to the same visual guide (green lines) */
          .module-header, .steps{max-width:var(--step-highlight-width);margin:0 18px;box-sizing:border-box}\n          .module-header h1{margin:0;font-size:28px;line-height:1}\n          .module-header p{margin:0;padding:0;line-height:1.25;margin-top:-6px} .module-header h1 + p{margin-top:-6px;padding-top:0}\n          .steps{display:flex;flex-direction:column;align-items:center;padding-left:0}\n          .step{background:var(--surface);border-radius:10px;padding:12px;margin:12px 0;border:1px solid rgba(15,23,42,0.04);box-shadow:0 4px 12px rgba(2,6,23,0.03);width:100%;max-width:100%;box-sizing:border-box;overflow:hidden}
          /* prevent overflow and long‑word breaks */
          .step p, .step h3, .step li{overflow-wrap:break-word;word-break:break-word}
          /* ensure images inside steps follow the step width */
          .step .responsive, .step .image-grid img{max-width:100%;height:auto;display:block;margin:8px auto}\n          .step h3{margin:0 0 6px;color:#000;font-weight:700}
          .step-header{display:block;width:100%;box-sizing:border-box;padding:8px 12px;border-left:4px solid var(--accent);border-right:6px solid var(--accent);background:rgba(2,6,23,0.02);border-radius:6px;text-align:left;overflow:hidden}
          .step > ul, .step > p, .step pre, .step .responsive, .step .image-grid img{max-width:100%;width:100%;margin:0;padding:0;box-sizing:border-box}
          .step > ul{padding-left:18px;list-style-position:inside;margin:8px 0}
          .step li{margin-bottom:6px;word-break:break-word}
          .step li:last-child{margin-bottom:14px}\n          pre{background:rgba(0,0,0,0.03);padding:8px;border-radius:6px;overflow:auto}\n          .figure{margin:8px 0}\n          .responsive{max-width:720px !important;width:100%;height:auto;display:block;margin:8px auto;border-radius:6px;object-fit:contain}\n          .image-grid{display:flex;flex-direction:column;align-items:center;gap:8px;margin:8px 0}
          .image-grid img{width:100%;max-width:720px;margin:0 auto;display:block;border-radius:6px;object-fit:contain}\n\n
          .note{background:rgba(255,249,230,1);border-left:4px solid var(--accent);padding:10px 12px;border-radius:6px;margin:8px 0;display:flex;align-items:center;gap:8px}
          .note .icon{margin-right:8px;font-size:18px;line-height:1}
          .note span{display:inline-block}
          .step > p.with-gap{margin-bottom:14px !important}
          .button.secondary{background:transparent;color:var(--accent);border:1px solid rgba(15,23,42,0.06);padding:6px 12px;border-radius:6px;text-decoration:none;font-weight:600}\n        `}</style>
      </main>
    </div>
  )
}
