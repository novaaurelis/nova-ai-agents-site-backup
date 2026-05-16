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
            </div>

            <div className="step">
              <div className="step-header"><h3>Шаг 2. Установка Homebrew</h3></div>

              <p>Пакетный менеджер Homebrew упрощает установку многих инструментов.<br/>Официальный сайт: <a href="https://brew.sh">https://brew.sh/</a></p>

              <p>Вызываем окно терминала. Для этого нажимаем в верхнем правом тулбара вашего рабочего стола значок лупы (поставить изображение лупы для удобства восприятия). Далее в поиске пишем Terminal и нажимаем Enter.</p>

              <p>Первый способ. Для установки пакетного менеджера скопируйте данную команду в терминал:</p>
              <CodeBlock>{`/bin/bash -c "$(curl -fsSL https://raw.githubusercontent.com/Homebrew/install/HEAD/install.sh)"`}</CodeBlock>

              <p>Второй способ. Скачать установщик .pkg. Его можно скачать в последнем релизе Homebrew на GitHub:<br/><a href="https://github.com/Homebrew/brew/releases/latest">https://github.com/Homebrew/brew/releases/latest</a></p>
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
          .step li{margin-bottom:6px;word-break:break-word}\n          pre{background:rgba(0,0,0,0.03);padding:8px;border-radius:6px;overflow:auto}\n          .figure{margin:8px 0}\n          .responsive{max-width:720px !important;width:100%;height:auto;display:block;margin:8px auto;border-radius:6px;object-fit:contain}\n          .image-grid{display:flex;flex-direction:column;align-items:center;gap:8px;margin:8px 0}
          .image-grid img{width:100%;max-width:720px;margin:0 auto;display:block;border-radius:6px;object-fit:contain}\n\n          .button.secondary{background:transparent;color:var(--accent);border:1px solid rgba(15,23,42,0.06);padding:6px 12px;border-radius:6px;text-decoration:none;font-weight:600}\n        `}</style>
      </main>
    </div>
  )
}
