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

                <p>Ollama — это бесплатная платформа с открытым исходным кодом, позволяющая использовать вашего агента с помощью облачных и локальных моделей, обеспечивая конфиденциальность данных.<br/>Для интеграции и установки смотри <a href="/ru/modules/installation-and-run/ollama">раздел об установке Ollama</a>.</p>

                <p style={{margin:0,height:'14px'}}></p>

                <p>⚠️ Если у вас уже есть подписка на другую нейросеть, или агрегатор нейросетей с доступом к API-ключам, то этот шаг можно пропустить. Используйте ваши ключи для корректного запуска OpenClaw в процессе установки.</p>

                <p style={{margin:0,height:'14px'}}></p>

              </div>

            <div className="step">
              <div className="step-header"><h3>Шаг 6. Устанавливаем OpenClaw</h3></div>

              <p>Официальный репозиторий OpenClaw на GitHub: <a href="https://github.com/openclaw/openclaw">https://github.com/openclaw/openclaw</a><br/>Официальная документация: <a href="https://docs.openclaw.ai/">https://docs.openclaw.ai/</a></p>

              <p>Установка OpenClaw. Выбери одну из команд и скопируй её в терминал</p>

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

              <p>⚠️ Если в процессе установки возникли какие-либо ошибки — используй официальную документацию.</p>

              <p style={{margin:0,height:'14px'}}></p>

              <p>В процессе копирования файлов установщик проверит необходимые составляющие (Homebrew, Node.js, Git) и при необходимости установит, если что-то было установлено не так.</p>

              <p style={{margin:0,height:'14px'}}></p>
              <p style={{margin:0,height:'14px'}}></p>

              <div className="figure"><img src="/images/install-script.svg" alt="Install script" className="responsive"/></div>

              <p style={{margin:0,height:'14px'}}></p>
              <p style={{margin:0,height:'14px'}}></p>

            </div>

            <div className="step">
              <div className="step-header"><h3>Шаг 7. Запуск онбординга - мастера настройки нашего ассистента</h3></div>

              <p>Если мастер настройки не запустится автоматически, то запускаем его через команду:</p>
              <CodeBlock>{`openclaw onboard --install-daemon`}</CodeBlock>

              <p>Флаг <code>--install-daemon</code> автоматически регистрирует OpenClaw как системный сервис: на macOS это launchd, на Linux — systemd. После этого Gateway будет стартовать при загрузке системы.</p>

              <ol>
                <li>Нас спросят, что мы все делаем на свой страх и риск и тут мы отвечаем "Да" (Yes).</li>
                <li>Onboarding Mode. Выбираем QuickStart (автоматическая/упрощенная настройка).</li>
              </ol>

              <p>В этом режиме мастер берет на себя базовые конфигурации, минимизирует количество вопросов и подходит для стандартных сценариев использования. Режим Manual предназначен для опытных пользователей и тонкой настройки. Выбирайте его тогда, когда вам нужно изменить специфические параметры сети, пути установки или интегрировать OpenClaw в сложную существующую инфраструктуру.</p>

              <p style={{margin:0,height:'14px'}}></p>
              <p style={{margin:0,height:'14px'}}></p>

              <div className="figure"><img src="/images/intro.avif" alt="Intro" className="responsive"/></div>

              <p style={{margin:0,height:'14px'}}></p>
              <p style={{margin:0,height:'14px'}}></p>

              <p>3. Выбираем языковую нейромодель, которую мы будем использовать и которую мы настроили через Ollama. Для этого на следующем шаге при выборе провайдера мы выбираем Ollama.</p>

              <p style={{margin:0,height:'14px'}}></p>
              <p style={{margin:0,height:'14px'}}></p>

              <div className="figure small"><img src="/images/ollama_window.png" alt="Ollama window" className="responsive"/></div>

              <p style={{margin:0,height:'14px'}}></p>
              <p style={{margin:0,height:'14px'}}></p>

              <p>Нажимаем Enter и выбираем языковую модель, по умолчанию стоит Kimi K2.5 (или возможно доступна более продвинутая Kimi K2.6). После выбора модели вставляем наши API-ключи, которые мы сгенерировали при регистрации в Ollama. Жмем Enter.</p>

              <p style={{margin:0,height:'14px'}}></p>

              <p>4. Устанавливаем связь с нашим ботом в мессенджере.</p>

              <p>На следующем шаге мастер спросит, какой канал вы хотите использовать для общения с OpenClaw. Вариантов много: Telegram, WhatsApp, Discord, Slack, Signal, LINE, iMessage, Google Chat, Microsoft Teams, Twitch и другие. Несмотря на блокировки и замедление Telegram в России, я рекомендую выбрать именно его, так как настройка достаточно простая, а интерфейс мессенджера привычен большинству пользователей.</p>

              <p style={{margin:0,height:'14px'}}></p>
              <p style={{margin:0,height:'14px'}}></p>

              <div className="figure small"><img src="/images/telegram_window.png" alt="Telegram window" className="responsive"/></div>

              <p style={{margin:0,height:'14px'}}></p>
              <p style={{margin:0,height:'14px'}}></p>

              <p>Нажмите Enter. После этого мастер настройки предложит вам зарегистрировать нового бота Telegram и предоставит все необходимые инструкции. Про то, как создать телеграмм-бота мы рассказали в отдельном разделе.</p>

              <p style={{margin:0,height:'14px'}}></p>
              <p style={{margin:0,height:'14px'}}></p>

              <div className="figure small"><img src="/images/telegrambot_setup.png" alt="Telegram bot setup" className="responsive"/></div>

              <p style={{margin:0,height:'14px'}}></p>
              <p style={{margin:0,height:'14px'}}></p>

              <p>На следующем шаге выбираем вставку токена нашего бота в терминале.</p>

              <p style={{margin:0,height:'14px'}}></p>
              <p style={{margin:0,height:'14px'}}></p>

              <div className="figure small"><img src="/images/telegram_token_window.png" alt="Telegram token window" className="responsive"/></div>

              <p style={{margin:0,height:'14px'}}></p>
              <p style={{margin:0,height:'14px'}}></p>

              <p>Вставляем наш токен и жмем Enter.</p>

              <p style={{margin:0,height:'14px'}}></p>
              <p style={{margin:0,height:'14px'}}></p>

              <div className="figure small"><img src="/images/telegram_token_window2.png" alt="Telegram token window 2" className="responsive"/></div>

              <p style={{margin:0,height:'14px'}}></p>
              <p style={{margin:0,height:'14px'}}></p>

              <p>Мастер настройки сообщит об успешно подключенном боте.</p>

              <p style={{margin:0,height:'14px'}}></p>
              <p style={{margin:0,height:'14px'}}></p>

              <p>5. Следующий шаг - выбор поискового провайдера. Он позволяет OpenClaw искать актуальную информацию в интернете, когда вы задаете вопросы, требующие свежих данных. Большинство сервисов требуют платных ключей, поэтому выбирайте для начала бесплатные варианты, например, DuckDuckGo.</p>

              <p style={{margin:0,height:'14px'}}></p>
              <p style={{margin:0,height:'14px'}}></p>

              <div className="figure small"><img src="/images/search_provider_window.png" alt="Search provider window" className="responsive"/></div>

              <p style={{margin:0,height:'14px'}}></p>
              <p style={{margin:0,height:'14px'}}></p>

              <p>В завершение нажмите Enter.</p>

              <p style={{margin:0,height:'14px'}}></p>
              <p style={{margin:0,height:'14px'}}></p>

              <p>6. Скиллы (умения) бота - это следующий шаг при установке. При первоначальной установке нет смысла устанавливать скиллы, поэтому на следующем шаге выбираем NO ("Нет").</p>

              <p style={{margin:0,height:'14px'}}></p>
              <p style={{margin:0,height:'14px'}}></p>

              <div className="figure small"><img src="/images/skills_window.png" alt="Skills window" className="responsive"/></div>

              <p style={{margin:0,height:'14px'}}></p>
              <p style={{margin:0,height:'14px'}}></p>

              <p>7. Еще одна важная настройка OpenClaw - это хуки. Это триггеры, которые автоматически запускают определенные действия в ответ на события в системе. Они позволяют автоматизировать рутину и интегрировать OpenClaw в ваш рабочий процесс без ручного ввода команд.</p>

              <p style={{margin:0,height:'14px'}}></p>
              <p style={{margin:0,height:'14px'}}></p>

              <div className="figure small"><img src="/images/hooks_window.png" alt="Hooks window" className="responsive"/></div>

              <p style={{margin:0,height:'14px'}}></p>
              <p style={{margin:0,height:'14px'}}></p>

              <p>Здесь мы рекомендуем с помощью пробела выбрать все четыре хука и нажать Enter.</p>

              <p style={{margin:0,height:'14px'}}></p>
              <p style={{margin:0,height:'14px'}}></p>

              <div className="figure small"><img src="/images/hooks_window2.png" alt="Hooks window 2" className="responsive"/></div>

              <p style={{margin:0,height:'14px'}}></p>
              <p style={{margin:0,height:'14px'}}></p>

              <p>Хуки — это небольшие скрипты, которые срабатывают при наступлении определённых событий. В OpenClaw они используются для автоматизации рабочих процессов: позволяют сохранять историю сессий, вести аудит действий агента, запускать фоновые задачи при старте и завершении работы, а также взаимодействовать с внешними API. По сути, это набор «автоправил», которые упрощают настройку системы и фиксируют важные события без ручного вмешательства. Подробнее о настройке можно узнать в <a href="https://docs.openclaw.ai/automation/hooks">документации</a>.</p>

              <p style={{margin:0,height:'14px'}}></p>
              <p style={{margin:0,height:'14px'}}></p>

              <p>В OpenClaw хуки можно включить при первичной настройке или через конфигурационный файл. Доступны следующие варианты:</p>

              <ul>
                <li><strong>boot-md</strong> (системный хук)<br/>Автоматически создаёт и обновляет файл boot.md в рабочей директории. Это своего рода шпаргалка для агента: файл с инструкциями, который всегда находится в проекте и помогает ИИ понимать контекст без дополнительных запросов.<br/><br/>При запуске агента или сбросе сессии в boot.md записывается:<br/><br/>- краткое описание проекта из настроек;<br/>- правила работы (например, стиль кода или поведение);<br/>- текущее состояние (где агент остановился ранее).<br/><br/>Благодаря этому агенту не нужно каждый раз перечитывать всю историю диалога — он просто обращается к boot.md. Это снижает расход токенов и помогает не путаться при работе с несколькими проектами.</li>
                <li><strong>bootstrap-extra-files</strong> (загрузка дополнительных файлов)<br/>Этот хук подгружает в рабочую среду агента дополнительные инструкции или конфигурации перед началом работы. Например, если есть файл .claws-rules агент автоматически прочитает его сразу после запуска.</li>
                <li><strong>command-logger</strong> (логирование команд)<br/>Записывает все команды, которые агент выполняет в терминале, а также ответы системы. Это полезно для отладки и анализа: можно точно увидеть, какие действия привели к ошибке. Также повышает безопасность, так как сохраняется полный журнал действий.</li>
                <li><strong>session-memory</strong> (память сессии)<br/>Отвечает за сохранение контекста между запусками и внутри длительных диалогов. Без него агент может терять нить работы. Хук помогает поддерживать актуальное состояние проекта и избегать повторения одних и тех же действий.</li>
              </ul>

              <p style={{margin:0,height:'14px'}}></p>
              <p style={{margin:0,height:'14px'}}></p>

              <p>8. На следующем шаге мастер настройки попросит вас выбрать интерфейс, в котором вы будете общаться с ИИ-агентом сразу после установки.</p>

              <p style={{margin:0,height:'14px'}}></p>
              <p style={{margin:0,height:'14px'}}></p>

              <div className="figure small"><img src="/images/hatch_window.png" alt="Interface selection window" className="responsive"/></div>

              <p style={{margin:0,height:'14px'}}></p>
              <p style={{margin:0,height:'14px'}}></p>

              <ul>
                <li><strong>Hatch in TUI</strong> — текстовый интерфейс прямо в вашем терминале (консоли). Это самый быстрый вариант: не нужно открывать браузер, всё происходит там же, где вы вводите команды настройки;</li>
                <li><strong>Open the Web UI</strong> — запуск полноценного графического интерфейса в браузере (по типу ChatGPT или Claude, но локально). Здесь удобнее работать со структурой файлов, есть боковая панель с логами и наглядное отображение того, как агент «думает» и изменяет код;</li>
                <li><strong>Do this later</strong> — пропустить этот шаг и выбрать позже.</li>
              </ul>

              <p>Выбираем Hatch in Tui и можно сразу же в терминале задать ему вопрос, чтобы проверить все ли правильно мы подключили.</p>

              <p style={{margin:0,height:'14px'}}></p>
              <p style={{margin:0,height:'14px'}}></p>

              <div className="figure small"><img src="/images/openclaw_start.png" alt="OpenClaw start" className="responsive"/></div>

              <p style={{margin:0,height:'14px'}}></p>
              <p style={{margin:0,height:'14px'}}></p>

              <p>Шаг 7. Запускаем цифрового ассистента в Веб-сессии и телеграме.</p>

              <p>Прежде чем мы выйдем из установщика в терминале я рекомендую найти токен нашего установленного ассистента и скопировать его. Для этого необходимо прокрутить немного вверх, найти раздел Control UI и эту строчку:</p>

              <p style={{margin:0,height:'14px'}}></p>
              <p style={{margin:0,height:'14px'}}></p>

              <div className="figure small"><img src="/images/openclaw_token.png" alt="OpenClaw token" className="responsive"/></div>

              <p style={{margin:0,height:'14px'}}></p>
              <p style={{margin:0,height:'14px'}}></p>

              <p>Это наш токен (выделил красным). Копируем его и сохраняем в безопасное место. Зеленым цветом выделен адрес гейта, на котором будет работать наш ассистент. После копирования нашего токена из установка можно выйти, нажав Ctrl+С дважды.</p>

              <p style={{margin:0,height:'14px'}}></p>
              <p style={{margin:0,height:'14px'}}></p>

              <p>Далее заходим в любой удобный браузер.</p>
              <p>Вставляем адрес нашего гейта: <a href="http://127.0.0.1:18789/">http://127.0.0.1:18789/</a> и наблюдаем как появляется интерфейс для входа в веб-сессию с нашим агентом.</p>

              <p style={{margin:0,height:'14px'}}></p>
              <p style={{margin:0,height:'14px'}}></p>

              <div className="figure small"><img src="/images/b3huwmir.jpg" alt="OpenClaw web session" className="responsive"/></div>

              <p style={{margin:0,height:'14px'}}></p>
              <p style={{margin:0,height:'14px'}}></p>

              <p>Вставляем в раздел Gateway Token наш токен и запускаем агента. Сразу же появляется диалоговое окно, в котором вы можете общаться с вашим агентом. Ура! Также вы можете общаться с вашим агентом через вашего бота, которого мы создали в телеграм.</p>

              <p style={{margin:0,height:'14px'}}></p>
              <p style={{margin:0,height:'14px'}}></p>

              <p>Шаг 8. (При необходимости) Удаление Openclaw.</p>

              <p>При необходимости удаления всех файлов цифрового помощника воспользуйся командой в терминале</p>
              <CodeBlock>{`openclaw uninstall`}</CodeBlock>

              <p>При возникновении ошибок или остаточных следов установки воспользуйся <a href="https://docs.openclaw.ai/install/uninstall">официальным гайдом по удалению</a>.</p>
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
          .figure.small img{max-width:480px;margin:0 auto;display:block}
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
