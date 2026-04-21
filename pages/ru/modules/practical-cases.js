import Link from 'next/link'
import Header from '../../../components/Header'

export default function PracticalCases(){
  return (
    <div>
      <Header/>
      <main className="container">
        <article className="module">
          <header className="module-header">
            <h1>Практические кейсы</h1>
            <p className="muted">Реальные примеры использования агентов в быту и бизнесе.</p>
          </header>

          <section>
            <h2>Домашние задачи</h2>
            <p>Примеры: планирование покупок, управление расписанием, автоматизация рутинных домашних процессов.</p>
          </section>

          <section>
            <h2>Рабочие сценарии</h2>
            <p>Примеры автоматизации задач: сбор данных, рассылки, подготовка черновиков и отчётов.</p>
          </section>

          <section>
            <h2>Бизнес‑кейсы</h2>
            <p>Автоматизация продаж, обработка входящих заявок, мониторинг конкурентов.</p>
          </section>

          <p style={{marginTop:20}}><Link href="/ru/modules/first-steps">← Вернуться к Первым шагам</Link></p>
        </article>

        <style jsx>{`
          .module { max-width:900px; margin:18px auto; padding:0 18px }
        `}</style>
      </main>
    </div>
  )
}
