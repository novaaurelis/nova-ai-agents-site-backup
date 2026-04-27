import Link from 'next/link'
import Header from '../../components/Header'

export default function EnHome(){
  return (
    <div>
      <Header/>
      <main className="container">
        <section className="hero">
          <div className="hero-inner">
            <h1 className="hero-title">Your team — your superpower</h1>
            <p className="hero-sub">Build, run and customize personal AI agents: quick start, ready workflows and practical tips</p>
          </div>
        </section>



        <div className="hero-cta">
          <div style={{display:'flex',gap:12,justifyContent:'center',flexWrap:'wrap'}}>
            <Link href="/en/dashboard" className="button">Get started right now — it's free</Link>
          </div>
        </div>

        <section className="features" aria-label="Features">
          <div className="feature-card">
            <strong>Runs 24/7</strong>
            <div className="muted">Agent handles simple routine tasks while you're busy.</div>
          </div>
          <div className="feature-card">
            <strong>Many models</strong>
            <div className="muted">Support for different models — choose speed vs quality.</div>
          </div>
          <div className="feature-card">
            <strong>Browser control</strong>
            <div className="muted">Opens sites, fills forms and places orders on your command.</div>
          </div>
          <div className="feature-card">
            <strong>Voice & recognition</strong>
            <div className="muted">Talk to the agent and get spoken replies — handy on mobile.</div>
          </div>
          <div className="feature-card">
            <strong>Memory</strong>
            <div className="muted">Agent remembers previous chats and context.</div>
          </div>
          <div className="feature-card">
            <strong>Sub‑agents</strong>
            <div className="muted">Splits tasks into sub-jobs and runs them in parallel.</div>
          </div>
        </section>


        <div style={{height:12}} />
        <section className="what" aria-label="What's inside" style={{marginBottom:36, position: 'relative', top: 12}}>
          <h3 style={{marginBottom:12}}>What's inside</h3>

          <div className="grid-cards">
            <div className="card">
              <div className="icon" aria-hidden>🛠️</div>
              <div className="card-body">Clear, step-by-step installation and startup guide</div>
            </div>

            <div className="card">
              <div className="icon" aria-hidden>📦</div>
              <div className="card-body">Simple examples and ready-to-use scenario templates</div>
            </div>

            <div className="card">
              <div className="icon" aria-hidden>🧠</div>
              <div className="card-body">Professional tips, in-depth configuration recipes and best practices</div>
            </div>

            <div className="card">
              <div className="icon" aria-hidden>🔗</div>
              <div className="card-body">Integrations with popular services, dashboard upgrades, and agent personalization</div>
            </div>

            <div className="card">
              <div className="icon" aria-hidden>🎯</div>
              <div className="card-body">Effective prompts, detailed walkthroughs, and skill training</div>
            </div>

            <div className="card">
              <div className="icon" aria-hidden>📚</div>
              <div className="card-body">Continuously updated content and structured learning modules</div>
            </div>
          </div>

          <style jsx>{`
            .grid-cards{display:grid;grid-template-columns:repeat(1,1fr);gap:14px;margin-top:12px}
            @media(min-width:700px){ .grid-cards{grid-template-columns:repeat(2,1fr)} }
            @media(min-width:1100px){ .grid-cards{grid-template-columns:repeat(3,1fr)} }
            .card{display:flex;flex-direction:column;align-items:center;justify-content:center;gap:10px;padding:20px;min-height:120px;border-radius:12px;background:var(--surface);box-shadow:0 6px 18px rgba(2,6,23,0.04);border:1px solid rgba(15,23,42,0.04)}
            .icon{font-size:32px;line-height:1;margin:0}
            .card-body{font-size:0.98rem;color:var(--text);text-align:center}
          `}</style>
        </section>

        <section className="models" aria-label="Models">
          <h3 style={{textAlign: 'center'}}>Popular models</h3>
          <div style={{display:'flex',justifyContent:'center',marginTop:-12}}>
            <img src="/images/logos.png" alt="neurologos collage" className="popular-illustration" style={{maxWidth:'100%',height:'auto',background:'transparent'}} />
          </div>
        </section>

        <footer className="muted" style={{textAlign:'center'}}>
          <div style={{display:'flex',justifyContent:'center',gap:12,marginBottom:6}}>
            <Link href="/en/terms" className="muted">Terms of service</Link>
            <Link href="/en/privacy" className="muted">Privacy policy</Link>
            <Link href="/en/offer" className="muted">Offer</Link>
          </div>
          <div style={{fontSize: '0.95em'}}>© {new Date().getFullYear()} All rights reserved</div>
        </footer>
      </main>
    </div>
  )
}
