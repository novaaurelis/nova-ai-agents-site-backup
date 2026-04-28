import Link from 'next/link'
import Header from '../../../components/Header'

export default function PracticalCases(){
  return (
    <div>
      <Header/>
      <main className="container">
        <article className="module">
          <header className="module-header">
            <h1>Четвертый модуль. Практические кейсы 🧨</h1>
            <p className="muted">Примеры использования, готовые шаблоны и пошаговые сценарии.</p>
          </header>

          {/* Cards styled like second module */}
          <div className="grid" aria-hidden>
            <a href="#home" className="card" data-accent data-slug="practical-cases">
              <span className="paid-badge" title="Платный модуль" aria-hidden>💰</span>
              <div className="card-head"><h3>Домашние задачи</h3></div>
              <p className="muted">Планирование покупок, управление расписанием и автоматизация рутинных дел.</p>
            </a>

            <a href="#work" className="card">
              <span className="paid-badge" title="Платный модуль" aria-hidden>💰</span>
              <div className="card-head"><h3>Рабочие сценарии</h3></div>
              <p className="muted">Сбор данных, автоматические рассылки, подготовка черновиков и отчётов.</p>
            </a>

            <a href="#business" className="card">
              <span className="paid-badge" title="Платный модуль" aria-hidden>💰</span>
              <div className="card-head"><h3>Бизнес‑кейсы</h3></div>
              <p className="muted">Автоматизация продаж, обработка заявок и мониторинг конкурентов.</p>
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
