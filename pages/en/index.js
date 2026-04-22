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
        <section className="what" aria-label="What's inside" style={{marginBottom:12, position: 'relative', top: 12}}>
          <h3 style={{marginBottom:6}}>What's inside</h3>
          <ul style={{marginTop:6}}>
            <li>Free signup — a clear install guide</li>
            <li>Simple examples and ready scenario templates</li>
            <li>Professional tips, deeper recipes and configs</li>
            <li>Interactive step‑by‑step lessons for a fast start</li>
            <li>Prebuilt integration templates (Telegram, Webhook, API)</li>
            <li>Support and community — discussions, tips and config sharing</li>
          </ul>
        </section>

        <section className="models" aria-label="Models">
          <h3 style={{textAlign: 'center'}}>Popular models</h3>
          <div style={{display:'flex',justifyContent:'center',marginTop:-32}}>
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
