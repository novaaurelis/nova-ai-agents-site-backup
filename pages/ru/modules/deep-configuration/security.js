import Link from 'next/link'
import Header from 'components/Header'

export default function Security(){
  return (
    <div>
      <Header/>
      <main className="container">
        <article className="module">
          <header className="module-header">
            <h1>Безопасность и бэкапы</h1>
            <p className="muted">Скелетная страница — сюда добавим политики безопасности, бэкап-стратегии и советы по хранению данных.</p>
          </header>

          <section>
            <h2>Темы</h2>
            <p>Placeholder — разделы: шифрование, доступы, резервное копирование, инцидент-реплей.</p>
          </section>

          <div style={{marginTop:20,textAlign:'center'}}>
            <Link href="/ru/modules/deep-configuration" legacyBehavior><a className="button secondary">Назад</a></Link>
          </div>
        </article>

        <style jsx>{`
          .module{max-width:900px;margin:18px auto;padding:0 18px}
          .module-header{margin-bottom:8px}
          .module-header h1{margin:0 0 6px}
          .module-header p{margin:0}
          .button.secondary{background:transparent;color:var(--accent);border:1px solid rgba(15,23,42,0.06);padding:8px 12px;border-radius:8px;text-decoration:none;font-weight:600}
        `}</style>
      </main>
    </div>
  )
}
