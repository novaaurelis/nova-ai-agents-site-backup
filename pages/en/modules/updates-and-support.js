import Link from 'next/link'
import Header from '../../../components/Header'

export default function UpdatesSupportEn(){
  return (
    <div>
      <Header/>
      <main className="container">
        <article className="module">
          <header className="module-header">
            <h1>Updates & Support</h1>
            <p className="muted">How to update, monitor and keep the system healthy.</p>
          </header>

          <section>
            <h2>Update procedures</h2>
            <p>Steps for updating, migrations and compatibility checks.</p>
          </section>

          <section>
            <h2>Automated diagnostics</h2>
            <p>Build a "doctor bot" for automated health checks and alerts.</p>
          </section>

          <section>
            <h2>Recovery & FAQ</h2>
            <p>How to act on failures and restore from backups.</p>
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
