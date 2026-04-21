import Link from 'next/link'
import Header from '../../../components/Header'

export default function FirstStepsEn(){
  return (
    <div>
      <Header/>
      <main className="container">
        <article className="module">
          <header className="module-header">
            <h1>First steps</h1>
            <p className="muted">Draft instruction and introductory text — converted from the uploaded file.</p>
          </header>

          <section>
            <h2>About OpenClaw</h2>
            <p>OpenClaw is a combined digital tool that enables automating repetitive workflows using AI agents. The project combines a convenient web interface, ready integrations and a set of tools for quick task setup and execution monitoring.</p>
          </section>

          <section>
            <h2>What this chatbot / module does</h2>
            <p>The chatbot in OpenClaw is designed to automate typical work processes: it can accept instructions, run scenarios, select and apply configurations, and generate reports and notifications. The platform is built for flexible configuration — from fast onboarding to complex integrations.</p>
          </section>

          <section>
            <h2>Key scenarios</h2>
            <ul>
              <li>Quick start — step‑by‑step installation and launch of a basic agent</li>
              <li>Automation of routine tasks — scripts and triggers</li>
              <li>Integration with external services — Telegram, Webhook, API</li>
            </ul>
          </section>

          <section>
            <h2>Environment preparation</h2>
            <ul>
              <li>Operating system: Mac / Linux / WSL</li>
              <li>Node.js (recommended v18+)</li>
              <li>git — for cloning the repository</li>
              <li>Internet connection for installing dependencies</li>
            </ul>
          </section>

          <section>
            <h2>Install & run</h2>
            <ol>
              <li>Clone the repo: <code>git clone &lt;repo&gt;</code></li>
              <li>Change to the project folder: <code>cd ai-agents-site</code></li>
              <li>Install dependencies: <code>npm install</code> (or <code>yarn</code>/<code>pnpm</code>)</li>
              <li>Start the dev server: <code>npm run dev</code></li>
            </ol>
            <p>After starting, the site will be available at <code>http://localhost:3000</code>. The dev server hot‑reloads on changes.</p>
          </section>

          <section>
            <h2>Architecture & config locations</h2>
            <p>Quick overview of important files and folders:</p>
            <ul>
              <li><code>pages/</code> — site content and routes</li>
              <li><code>public/</code> — static assets (images, policy texts)</li>
              <li><code>memory/</code> and <code>MEMORY.md</code> — agent local memory</li>
              <li><code>.env</code> (optional) — environment variables</li>
            </ul>
          </section>

          <section>
            <h2>Modes & security</h2>
            <p>OpenClaw supports flexible run modes: local for development and production deployments via CI/CD. Keep secrets safe and avoid committing .env to public repositories.</p>
          </section>

          <section>
            <h2>FAQ & common issues</h2>
            <ul>
              <li>Port 3000 occupied — stop the process or change the port</li>
              <li>Package install errors — try updating Node.js or removing <code>node_modules</code></li>
              <li>Build errors — inspect server and console logs for details</li>
            </ul>
          </section>

          <section>
            <h2>Next steps</h2>
            <p>Recommended next steps: enable authentication (NextAuth), set up CI/CD, add MDX lessons and interactive examples. I can help with any of these — tell me which is a priority.</p>
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
