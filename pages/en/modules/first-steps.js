import Link from 'next/link'
import Header from '../../../components/Header'

export default function FirstStepsEn(){
  return (
    <div>
      <Header/>
      <main className="container">
        <article className="module">
          <a className="sr-only" id="top" />
          <header className="module-header">
            <h1>First steps</h1>
            <p className="muted">Intro module: quick start, configure and run OpenClaw</p>
          </header>

          <nav className="toc" aria-label="Contents">
            <strong>Contents</strong>
            <ul>
              <li><a href="#about">About the project</a></li>
              <li><a href="#what">What the module does</a></li>
              <li><a href="#scenarios">Key scenarios</a></li>
              <li><a href="#prepare">Prepare environment</a></li>
              <li><a href="#install">Install & run</a></li>
              <li><a href="#structure">Structure</a></li>
              <li><a href="#security">Modes & security</a></li>
              <li><a href="#faq">FAQ</a></li>
              <li><a href="#next">Next steps</a></li>
            </ul>
          </nav>

          <section id="about">
            <h2>About OpenClaw</h2>
            <p>OpenClaw is a tool for automating repetitive workflows with AI agents. The platform combines a friendly web interface, ready integrations and tooling to move from idea to working scenario quickly.</p>
          </section>

          <section id="what">
            <h2>What this module does</h2>
            <p>This module demonstrates a typical workflow: receive an instruction, run scenarios, select configurations and produce reports. Suitable for local development and integration testing.</p>
          </section>

          <section id="scenarios">
            <h2>Key scenarios</h2>
            <ul>
              <li>Quick start: install, run, verify</li>
              <li>Automate routine tasks: triggers and schedules</li>
              <li>Integrations: Telegram, Webhook, API</li>
            </ul>
          </section>

          <section id="prepare">
            <h2>Prepare environment</h2>
            <ul>
              <li>OS: Mac / Linux / WSL</li>
              <li>Node.js (recommended v18+)</li>
              <li>git for repo operations</li>
              <li>Internet for dependency installation</li>
            </ul>
          </section>

          <section id="install">
            <h2>Install & run</h2>
            <ol>
              <li>Clone the repo: <code>git clone &lt;repo&gt;</code></li>
              <li>cd into project: <code>cd ai-agents-site</code></li>
              <li>Install deps: <code>npm install</code> (or <code>yarn</code>/<code>pnpm</code>)</li>
              <li>Start dev server: <code>npm run dev</code></li>
            </ol>
            <p>Site available at <code>http://localhost:3000</code> with hot reload enabled.</p>
          </section>

          <section id="structure">
            <h2>Project structure</h2>
            <ul>
              <li><code>pages/</code> — routes and pages</li>
              <li><code>public/</code> — static assets</li>
              <li><code>memory/</code> and <code>MEMORY.md</code> — agent local memory</li>
              <li><code>.env</code> — environment variables (do not commit)</li>
            </ul>
          </section>

          <section id="security">
            <h2>Modes & security</h2>
            <p>Run locally for development or deploy with CI/CD for production. Keep secrets in secure storage and avoid committing environment files.</p>
          </section>

          <section id="faq">
            <h2>FAQ</h2>
            <ul>
              <li>Port 3000 in use — stop process or change port</li>
              <li>Install errors — try updating Node.js or deleting <code>node_modules</code></li>
              <li>Build issues — check server and console logs</li>
            </ul>
          </section>

          <section id="next">
            <h2>Next steps</h2>
            <p>Recommended: enable auth (NextAuth), set up CI/CD, add MDX lessons and interactive examples. I can help with any step — tell me the priority.</p>
          </section>

          <p style={{marginTop:20}}><Link href="/en">← Home</Link></p>
        </article>

        <style jsx>{`
          .module { max-width:900px; margin:18px auto; padding:0 18px }
          .module-header { margin-bottom:12px }
          .module h2 { margin-top:16px }
          code { background:#f4f4f4; padding:2px 6px; border-radius:4px }
        `}</style>
      </main>
    </div>
  )
}
