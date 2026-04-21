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

          <nav className="toc" aria-label="Contents">
            <strong>Contents</strong>
            <ul>
              <li><a href="#mac">macOS</a></li>
              <li><a href="#windows">Windows / WSL</a></li>
              <li><a href="#vps">VPS / Server</a></li>
              <li><a href="#ollama">Ollama integration</a></li>
              <li><a href="#telegram">Telegram bot</a></li>
              <li><a href="#check">Checks & debugging</a></li>
            </ul>
          </nav>

          <section id="mac">
            <h2>macOS</h2>
            <p>Steps for Homebrew, Node.js installation and common permissions notes.</p>
          </section>

          <section id="windows">
            <h2>Windows / WSL</h2>
            <p>Guidance for WSL or native setup, PATH tips and Node.js versions.</p>
          </section>

          <section id="vps">
            <h2>VPS / Server</h2>
            <p>How to deploy to a remote server, security hints and backup suggestions.</p>
          </section>

          <section id="ollama">
            <h2>Ollama integration</h2>
            <p>Example: setting up Ollama (Kimi K2.5) and connecting local models to OpenClaw.</p>
          </section>

          <section id="telegram">
            <h2>Telegram bot</h2>
            <p>Mini‑guide: create a bot, get token, configure webhook or long polling.</p>
          </section>

          <section id="check">
            <h2>Checks & debugging</h2>
            <ul>
              <li>Port checks</li>
              <li>Server logs</li>
              <li>Common errors and remediation</li>
            </ul>
          </section>

          <p style={{marginTop:20}}><Link href="/en/modules/first-steps">← Back to First steps</Link></p>
        </article>

        <style jsx>{`
          .module { max-width:900px; margin:18px auto; padding:0 18px }
          .module-header { margin-bottom:12px }
          .module h2 { margin-top:16px }
          .toc ul { padding-left:18px }
        `}</style>
      </main>
    </div>
  )
}
