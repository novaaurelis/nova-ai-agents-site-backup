import Link from 'next/link'
import Header from '../../../components/Header'

export default function UpdatesSupport(){
  return (
    <div>
      <Header/>
      <main className="container">
        <article className="module">
          <header className="module-header">
            <h1>Третий модуль. Обновления и поддержка 🦀</h1>
            <p className="muted">Обновление системы, апгрейд дэшборда, пушим бэкапы и сопровождаем.</p>
          </header>

          {/* Cards styled like second module */}
          <div className="grid" aria-hidden>
            <a href="#update" className="card" data-accent data-slug="updates-and-support">
              <span className="paid-badge" title="Платный модуль" aria-hidden>💰</span>
              <div className="card-head"><h3>Процедура обновления</h3></div>
              <p className="muted">Порядок обновлений, миграции и проверки совместимости.</p>
            </a>

            <a href="#diag" className="card">
              <span className="paid-badge" title="Платный модуль" aria-hidden>💰</span>
              <div className="card-head"><h3>Автоматизированная диагностика</h3></div>
              <p className="muted">Создание "бота‑доктора" и автоматических проверок.</p>
            </a>

            <a href="#faq" className="card">
              <span className="paid-badge" title="Платный модуль" aria-hidden>💰</span>
              <div className="card-head"><h3>FAQ и восстановление</h3></div>
              <p className="muted">Действия при ошибках и восстановление из резервных копий.</p>
            </a>
          </div>


          <div style={{marginTop:20,textAlign:'center'}}>
            <a href="/ru/modules" className="button secondary">Назад в личный кабинет</a>
          </div>
        </article>

        <style jsx>{`
          .module { max-width:900px; margin:18px auto; padding:0 18px }

          .module-header{margin-bottom:8px}
          .module-header h1{margin:0 0 6px}
          .module-header p{margin:0}

          /* Reuse module index card styles: vertical stacked cards centered */
          .grid{display:flex;flex-direction:column;align-items:center;gap:14px;margin-top:14px}
          .card{padding:16px;border:1px solid rgba(15,23,42,0.04);border-radius:10px;background:var(--surface);display:flex;flex-direction:column;width:100%;box-sizing:border-box;transition:transform .18s ease,box-shadow .18s ease,border-color .18s ease;text-decoration:none;color:inherit}
          .card:hover{transform:translateY(-4px);box-shadow:0 6px 18px rgba(2,6,23,0.06);border-color:rgba(15,23,42,0.08)}
          @media (min-width:900px){ .card{width:720px;margin:0 auto} }
          /* thin left accent: show by default (like modules index) */
          .card{border-left:4px solid var(--accent);position:relative}
          /* and explicitly ensure hover doesn't remove it */
          .card:hover{ border-left-color: var(--accent) }
          .card-head{display:block;margin-bottom:6px}
          .card-head h3{margin:0;font-size:1.1rem;font-weight:800}
          .card .muted{margin-top:4px;color:var(--muted);line-height:1.38;margin-bottom:0}
          a.card{display:block}
          a.card *{text-decoration:none;color:inherit}
          /* ensure smooth hardware-accelerated transform */
          .card{will-change:transform}

          /* Back button style (matches preview) */
          .button.secondary{background:transparent;color:var(--accent);border:1px solid rgba(15,23,42,0.06);padding:8px 12px;border-radius:8px;text-decoration:none;font-weight:600}
          .paid-badge{position:absolute;top:12px;right:12px;font-size:16px}
        `}</style>
      </main>
    </div>
  )
}
