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



        <section className="features" aria-label="Features">
          <div className="feature-card">
            <strong>Runs 24/7</strong>
            <div className="muted">Agent works while you do other things</div>
          </div>
          <div className="feature-card">
            <strong>Many models</strong>
            <div className="muted">Hundreds supported — pick what fits</div>
          </div>
          <div className="feature-card">
            <strong>Browser control</strong>
            <div className="muted">Open sites, fill forms, make purchases</div>
          </div>
          <div className="feature-card">
            <strong>Voice & recognition</strong>
            <div className="muted">Talk to the agent and listen to answers</div>
          </div>
        </section>

        <section className="demo" aria-label="Demo flow" >
          <h3>Demo: buy tickets</h3>
          <div className="chat-card">
            <div className="chat-line"><strong>You:</strong> Buy two tickets for Saturday evening</div>
            <div className="chat-line"><strong>Agent:</strong> OK. I'll open the site, please sign in and say "done"</div>
            <div className="chat-line muted"><em>User signed in — agent completed the purchase</em></div>
            <div className="chat-line"><strong>Agent:</strong> Done — tickets bought. Code: K-XXXX</div>
          </div>
        </section>

        <section className="what" aria-label="What's inside">
          <h3>What's inside</h3>
          <ul>
            <li>Free registration and a clear install guide</li>
            <li>Simple examples and scenario templates</li>
            <li>Paid modules (from 299 ₽) — deeper recipes & configs</li>
          </ul>
        </section>

        <section className="models" aria-label="Models">
          <h3>Supported models</h3>
          <div className="model-grid">
            <div className="model">GLM</div>
            <div className="model">Gemini</div>
            <div className="model">GPT‑5</div>
            <div className="model">Claude</div>
            <div className="model">Grok</div>
            <div className="model">and more (300+)</div>
          </div>
        </section>

        <footer className="muted">© {new Date().getFullYear()} All rights reserved</footer>
      </main>
    </div>
  )
}
