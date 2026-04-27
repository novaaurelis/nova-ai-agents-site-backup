import Link from 'next/link'
import Header from '../../../components/Header'

export default function InstallationRun(){
  return (
    <div>
      <Header/>
      <main className="container">
        <article className="module">
          <a className="sr-only" id="top" />
          <header className="module-header">
            <h1>Первый модуль. Установка и запуск.</h1>
            <p className="muted">Пошаговая установка на различные платформы, а также интеграция с Ollama и телеграм.</p>
          </header>

          {/* Cards styled like /ru/modules */}
          <div className="grid" aria-hidden>
            <a href="#mac" className="card" data-accent data-slug="installation-and-run">
              <div className="card-head"><h3>Установка на macOS</h3></div>
              <p className="muted">Шаги и команды для macOS</p>
            </a>

            <a href="#windows" className="card">
              <div className="card-head"><h3>Установка на Windows</h3></div>
              <p className="muted">WSL или нативная установка</p>
            </a>

            <a href="#vps" className="card">
              <div className="card-head"><h3>Установка на виртуальный сервер</h3></div>
              <p className="muted">Развёртывание, безопасность и бэкапы</p>
            </a>

            <a href="#ollama" className="card">
              <div className="card-head"><h3>Интеграция с Ollama</h3></div>
              <p className="muted">Подключаем локальные модели</p>
            </a>

            <a href="#telegram" className="card">
              <div className="card-head"><h3>Создаём бота в Telegram</h3></div>
              <p className="muted">Токен, webhook и проверка</p>
            </a>

            <a href="#check" className="card">
              <div className="card-head"><h3>Проверка связи</h3></div>
              <p className="muted">Логи, порты и типичные ошибки</p>
            </a>
          </div>


          <p style={{marginTop:20}}><Link href="/ru/modules/first-steps">← Вернуться к Первым шагам</Link></p>
        </article>

        <style jsx>{`
          .module { max-width:900px; margin:18px auto; padding:0 18px }
          .module-header { margin-bottom:12px }
          .module h2 { margin-top:16px }
          .toc ul { padding-left:18px }

          /* Reuse module index card styles: vertical stacked cards centered */
          .grid{display:flex;flex-direction:column;align-items:center;gap:14px;margin-top:14px}
          .card{padding:16px;border:1px solid rgba(15,23,42,0.04);border-radius:10px;background:var(--surface);display:flex;flex-direction:column;width:100%;box-sizing:border-box;transition:transform .18s ease,box-shadow .18s ease,border-color .18s ease;text-decoration:none;color:inherit}
          .card:hover{transform:translateY(-4px);box-shadow:0 6px 18px rgba(2,6,23,0.06);border-color:rgba(15,23,42,0.08)}
          @media (min-width:900px){ .card{width:720px;margin:0 auto} }
          /* thin red accent on the left for every card */
          .card{border-left:4px solid var(--accent);position:relative}
          .card-head{display:block;margin-bottom:6px}
          .card-head h3{margin:0;font-size:1.1rem;font-weight:800}
          .card .muted{margin-top:4px;color:var(--muted);line-height:1.38;margin-bottom:0}
          a.card{display:block}
          a.card *{text-decoration:none;color:inherit}
          /* ensure smooth hardware-accelerated transform */
          .card{will-change:transform}
        `}</style>
      </main>
    </div>
  )
}
