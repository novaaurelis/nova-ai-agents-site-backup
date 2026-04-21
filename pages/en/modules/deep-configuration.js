import Link from 'next/link'
import Header from '../../../components/Header'

export default function DeepConfigEn(){
  return (
    <div>
      <Header/>
      <main className="container">
        <article className="module">
          <header className="module-header">
            <h1>Deep configuration (paid)</h1>
            <p className="muted">Advanced options, configs and production optimizations.</p>
          </header>

          <section>
            <h2>Performance tuning</h2>
            <p>Settings for throughput, caching and token budget optimization.</p>
          </section>

          <section>
            <h2>Architecture & configs</h2>
            <p>How to design agent "personas", role separation and team composition.</p>
          </section>

          <section>
            <h2>Skills & extensions</h2>
            <p>Adding third‑party modules, extending capabilities and code examples.</p>
          </section>

          <section>
            <h2>Security & backups</h2>
            <p>Designing a secure data perimeter and backup/restore procedures.</p>
          </section>

          <p style={{marginTop:20}}><Link href="/en/modules/first-steps">← Back to First steps</Link></p>
        </article>

        <style jsx>{`
          .module { max-width:900px; margin:18px auto; padding:0 18px }
        `}</style>
      </main>
    </div>
  )
}
