import Link from 'next/link'
import Header from '../../../components/Header'

export default function UpdatesSupport(){
  return (
    <div>
      <Header/>
      <main className="container">
        <article className="module">
          <header className="module-header">
            <h1>Обновление и поддержка</h1>
            <p className="muted">Как обновлять, мониторить и поддерживать проект в рабочем состоянии.</p>
          </header>

          <section>
            <h2>Процедура обновления</h2>
            <p>Порядок обновлений, миграции и проверки совместимости.</p>
          </section>

          <section>
            <h2>Автоматизированная диагностика</h2>
            <p>Создание "бота‑доктора" и автоматических проверок</p>
          </section>

          <section>
            <h2>FAQ и восстановление</h2>
            <p>Как действовать при ошибках и восстановление из резервных копий.</p>
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
