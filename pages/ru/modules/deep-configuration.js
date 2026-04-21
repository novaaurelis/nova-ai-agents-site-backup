import Link from 'next/link'
import Header from '../../../components/Header'

export default function DeepConfig(){
  return (
    <div>
      <Header/>
      <main className="container">
        <article className="module">
          <header className="module-header">
            <h1>Глубокая настройка (платный)</h1>
            <p className="muted">Продвинутые опции, конфиги и оптимизация для продакшна.</p>
          </header>

          <section>
            <h2>Оптимизация работы агента</h2>
            <p>Настройки производительности, кеширование и баланс токенов.</p>
          </section>

          <section>
            <h2>Архитектура и конфиги</h2>
            <p>Как строить "личности" агентов, разделение ролей и команда агентов.</p>
          </section>

          <section>
            <h2>Скиллы и расширения</h2>
            <p>Добавление сторонних модулей и расширений, примеры кода.</p>
          </section>

          <section>
            <h2>Безопасность и бэкапы</h2>
            <p>Создание безопасного контура данных и резервные копии.</p>
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
