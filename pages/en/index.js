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

        <section className="features">
          <h2>Why use OpenClaw agents</h2>
          <ul>
            <li>Easy install: step‑by‑step guide for any machine</li>
            <li>Ready automations: examples and templates to copy</li>
            <li>Extendable: plugins, integrations and pro tips</li>
          </ul>
        </section>

        <section className="what">
          <h3>What's included</h3>
          <ul>
            <li>Free registration and full installation guide</li>
            <li>Community examples and basic troubleshooting</li>
            <li>Paid modules (from 299 ₽) with advanced configs — coming soon</li>
          </ul>
        </section>

        <div className="cta">
          <Link href="/en/dashboard" className="button">Register — it's free</Link>
        </div>

        <footer className="muted">Questions? Contact: hello@opn-claw.pro</footer>
      </main>
    </div>
  )
}
