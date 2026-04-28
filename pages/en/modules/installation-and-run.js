import Link from 'next/link'
import Header from '../../../components/Header'

export default function InstallationRunEn(){
  return (
    <div>
      <Header/>
      <main className="container">
        <article className="module">
          <a className="sr-only" id="top" />
          <header className="module-header">
            <h1>Installation & Run</h1>
            <p className="muted">Instructions to install OpenClaw on several platforms and verify functionality.</p>
          </header>

          {/* Cards styled like /en/modules (same as RU, but English) */}
          <div className="grid" aria-hidden>
            <a href="#mac" className="card" data-accent data-slug="installation-and-run">
              <div className="card-head"><h3>Install on macOS</h3></div>
              <p className="muted">Homebrew, Node, and common permissions</p>
            </a>

            <a href="#windows" className="card">
              <div className="card-head"><h3>Install on Windows</h3></div>
              <p className="muted">WSL or native, PATH and Node versions</p>
            </a>

            <a href="#vps" className="card">
              <div className="card-head"><h3>Install on VPS / Server</h3></div>
              <p className="muted">Deployment, security and backups</p>
            </a>

            <a href="#ollama" className="card">
              <div className="card-head"><h3>Ollama integration</h3></div>
              <p className="muted">Connect local models to OpenClaw</p>
            </a>

            <a href="#telegram" className="card">
              <div className="card-head"><h3>Create a Telegram bot</h3></div>
              <p className="muted">Token, webhook and testing</p>
            </a>

            <a href="#check" className="card">
              <div className="card-head"><h3>Checks & debugging</h3></div>
              <p className="muted">Logs, ports and typical errors</p>
            </a>
          </div>


          <div style={{marginTop:20,textAlign:'center'}}>
            <a href="/en/modules" className="button secondary">Back to dashboard</a>
          </div>
        </article>

        <style jsx>{`
          .module { max-width:900px; margin:18px auto; padding:0 18px }
          .module-header { margin-bottom:12px }
          .module h2 { margin-top:16px }
          .toc ul { padding-left:18px }

          /* Reuse module index card styles: vertical stacked cards centered */
          .grid{display:flex;flex-direction:column;align-items:center;gap:14px;margin-top:14px}
          .card{padding:16px;border:1px solid rgba(15,23,42,0.04);border-radius:10px;background:var(--surface);display:flex;flex-direction:column;width:100%;box-sizing:border-box;transition:transform .18s ease,box-shadow .18s ease,border-color .18s ease;text-decoration:none;color:inherit}
          .card:hover{transform:translateY(-4px);box-shadow:0 6px 18px rgba(2,6,23,0.06);border-color:rgba(15,23,42,0.08)}
          @media (min-width:900px){ .card{width:720px;margin:0 auto} }
          /* thin left accent: show by default (like modules index) */
          .card{border-left:4px solid var(--accent);position:relative}
          /* and explicitly ensure hover doesn't remove it */
          .card:hover{ border-left-color: var(--accent) }
          .card-head{display:block;margin-bottom:6px}
          .card-head h3{margin:0;font-size:1.1rem;font-weight:800}
          .card .muted{margin-top:4px;color:var(--muted);line-height:1.38;margin-bottom:0}
          a.card{display:block}
          a.card *{text-decoration:none;color:inherit}
          /* ensure smooth hardware-accelerated transform */
          .card{will-change:transform}

          /* Back button style (matches preview) */
          .button.secondary{background:transparent;color:var(--accent);border:1px solid rgba(15,23,42,0.06);padding:8px 12px;border-radius:8px;text-decoration:none;font-weight:600}
        `}</style>
      </main>
    </div>
  )
}
