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


        <section className="what" aria-label="What's inside">
          <h3>What's inside</h3>
          <ul>
            <li>Free signup and a clear install guide</li>
            <li>Simple examples and ready scenario templates</li>
            <li>Paid modules (from 299 ₽) — deeper recipes and configs (optional)</li>
          </ul>
        </section>

        <section className="models" aria-label="Models">
          <h3 style={{textAlign: 'center'}}>Popular models</h3>
          <div style={{display:'flex',justifyContent:'center',marginTop:12}}>
            <img src="/popular_ai.png" alt="popular models" style={{maxWidth:'100%',height:'auto',borderRadius:12,boxShadow:'0 8px 24px rgba(2,6,23,0.08)'}} />
          </div>
        </section>

        <footer className="muted">© {new Date().getFullYear()} All rights reserved</footer>
      </main>
    </div>
  )
}
