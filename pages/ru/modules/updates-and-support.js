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
        `}</style>
      </main>
    </div>
  )
}
