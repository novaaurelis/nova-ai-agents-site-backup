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
            <p className="muted">Why build a team that will move you forward?</p>
          </header>



          <section>
            <h2>What is it</h2>
            <p>OpenClaw is a modern digital assistant — not just a chat bot. While classic chat bots mainly hold conversations, OpenClaw is designed to perform tasks: act on user commands, integrate with external services, use a browser, run automations and drive processes to completion.</p>

            <h3>Not just another chat bot</h3>
            <p>OpenClaw’s agent logic lets it plan sequences of actions: break down tasks, pick tools and execute steps. Instead of only explaining how to do something, an agent can gather information, open sites, process data and prepare messages. It’s closer to a digital assistant that executes work.</p>

            <h3>Eliminate manual routine</h3>
            <p>OpenClaw focuses on practical automation — repeatability, speed and reliability. It’s ideal for handling similar requests, maintaining communications, monitoring events or executing scheduled tasks, useful for personal and business use.</p>

            <h3>Unlimited possibilities</h3>
            <p>Different AI models (fast / accurate / local / cloud), platform and messenger integrations, and access to external tools (browser, files, system commands) turn OpenClaw from a text assistant into a functional executor.</p>

            <h3>Context & memory</h3>
            <p>OpenClaw stores context and past steps, enabling complex workflows that standard chat models can’t sustain. From data collection to sequential UI actions — it’s automation, not just text generation.</p>

            <h3>Short summary</h3>
            <p>OpenClaw is a digital secretary: it understands requests and helps get work done. From conversation to execution — a step beyond classic chat bots.</p>

            <h3>Agent team</h3>
            <p>Build a team of agents: one collects data, another analyzes, another writes content, a fourth handles schedules. Together they form a system that saves time and frees people for higher‑value tasks.</p>

            <p>How to start? Register on the platform and begin creating your digital assistants — start for free.</p>
          </section>

          <p style={{marginTop:20}}><Link href="/en">← Home</Link></p>
        </article>

        <style jsx>{`
          .module { max-width:900px; margin:18px auto; padding:0 18px; text-align: justify; text-justify: inter-word; }
          .module-header { margin-bottom:12px }
          .module h2 { margin-top:16px }
          code { background:#f4f4f4; padding:2px 6px; border-radius:4px }
        `}</style>
      </main>
    </div>
  )
}
