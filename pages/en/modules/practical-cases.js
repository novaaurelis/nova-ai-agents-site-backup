import Link from 'next/link'
import Header from '../../../components/Header'

export default function PracticalCasesEn(){
  return (
    <div>
      <Header/>
      <main className="container">
        <article className="module">
          <header className="module-header">
            <h1>Fourth module. Practical cases 🧨</h1>
            <p className="muted">Usage examples, ready templates and step‑by‑step scenarios.</p>
          </header>

          {/* Cards styled like second module */}
          <div className="grid" aria-hidden>
            <a href="#home" className="card" data-accent data-slug="practical-cases">
              <span className="paid-badge" title="Paid module" aria-hidden>💰</span>
              <div className="card-head"><h3>Home tasks</h3></div>
              <p className="muted">Shopping planning, schedule management and automating routine home tasks.</p>
            </a>

            <a href="#work" className="card">
              <span className="paid-badge" title="Paid module" aria-hidden>💰</span>
              <div className="card-head"><h3>Work scenarios</h3></div>
              <p className="muted">Automating data collection, mailings, drafting and reporting.</p>
            </a>

            <a href="#business" className="card">
              <span className="paid-badge" title="Paid module" aria-hidden>💰</span>
              <div className="card-head"><h3>Business cases</h3></div>
              <p className="muted">Sales automation, handling incoming requests, competitor monitoring.</p>
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
