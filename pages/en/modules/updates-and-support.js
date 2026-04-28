import Link from 'next/link'
import Header from '../../../components/Header'

export default function UpdatesSupportEn(){
  return (
    <div>
      <Header/>
      <main className="container">
        <article className="module">
          <header className="module-header">
            <h1>Third module. Updates & support 🦀</h1>
            <p className="muted">System updates, dashboard upgrades, backup pushes and maintenance.</p>
          </header>

          {/* Cards styled like second module */}
          <div className="grid" aria-hidden>
            <a href="#update" className="card" data-accent data-slug="updates-and-support">
              <span className="paid-badge" title="Paid module" aria-hidden>💰</span>
              <div className="card-head"><h3>Update procedures</h3></div>
              <p className="muted">Steps for updating, migrations and compatibility checks.</p>
            </a>

            <a href="#diag" className="card">
              <span className="paid-badge" title="Paid module" aria-hidden>💰</span>
              <div className="card-head"><h3>Automated diagnostics</h3></div>
              <p className="muted">Build a "doctor bot" for automated health checks and alerts.</p>
            </a>

            <a href="#faq" className="card">
              <span className="paid-badge" title="Paid module" aria-hidden>💰</span>
              <div className="card-head"><h3>Recovery & FAQ</h3></div>
              <p className="muted">How to act on failures and restore from backups.</p>
            </a>
          </div>


          <div style={{marginTop:20,textAlign:'center'}}>
            <a href="/en/modules" className="button secondary">Back to dashboard</a>
          </div>
        </article>

        <style jsx>{`
          .module { max-width:900px; margin:18px auto; padding:0 18px }
        `}</style>
      </main>
    </div>
  )
}
