import Link from 'next/link'
import Header from 'components/Header'

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
            <h2>What is openclaw</h2>
            <img src="/images/1openclaw.jpeg" alt="OpenClaw" className="module-image" />
            <p>OpenClaw is a platform that runs AI‑based “agents” and gives them tools to do real work. These agents do more than answer questions: they can visit websites, collect and compare data, edit files, send messages to messengers and run scripts. In short: you provide the goal — the agent executes the steps and delivers the result.</p>

            <h2>A new paradigm</h2>
            <p>Instead of a single reply, OpenClaw builds a plan of actions. When you give a task the system splits it into steps, chooses the necessary tools and executes them in sequence. It's like a small team at work: one agent collects data, another analyses it, a third prepares a report and sends a notification. For the user this means less manual work: you don't have to download reports or check sites yourself - agents do it for you.</p>

            <h2>Hype on the market</h2>
            <p>There's a lot of noise around platforms like OpenClaw - companies, services and courses promise big gains. It's important to separate real value from marketing:</p>
            <ul>
              <li>Pros: fast prototyping of automations, open source, large ecosystem of plugins and integrations.</li>
              <li>Cons: many solutions require configuration and supervision; some vendors promise a "magical replacement for employees", which is rarely true.</li>
            </ul>
            <p className="callout">My advice: treat the hype critically - evaluate what exactly the agent will automate, how much integration will cost and who will maintain the system in real time.</p>

            <h2>Eliminating manual repetitive work</h2>
            <img src="/images/3openclaw.jpeg" alt="Automation" className="module-image" />
            <p>OpenClaw shines where there are repetitive, one-type actions. Real scenarios:</p>
            <ul>
              <li>Price collection from competitors and daily summary to Telegram or email.</li>
              <li>Monitoring brand mentions and creating tickets in a tracker.</li>
              <li>Automatic generation of sales reports and mailing them to managers.</li>
              <li>Updating site content on a schedule (for example, promotions or event date/time).</li>
            </ul>
            <p className="callout">Setting up a single scenario typically takes from a few hours to a couple of days - depending on the complexity of integrations.</p>

            <h2>Limitless possibilities</h2>
            <p>What you can connect and how it works:</p>
            <ul>
              <li>AI models: local and cloud (choose a trade-off between cost, speed and quality).</li>
              <li>Integrations: CRM, ad accounts, analytics, databases, mail, messengers, third-party web services.</li>
              <li>Tools: a built-in browser for automation, access to the project filesystem, running commands in the terminal (with explicit permission).</li>
            </ul>
            <p className="callout">An agent can collect data from several sources, compare them, apply rules and return the result in the required format (images, presentations, code, an email or a ticket in a tracker).</p>

            <h2>Context and memory</h2>
            <p>Agents can work with context: save intermediate results, remember the goal of the task and reuse previous steps. This is useful when a task unfolds over time - for example, multi-day monitoring or accumulating statistics.</p>
            <p>Advantages of context:</p>
            <ul>
              <li>You don't have to repeat instructions every time.</li>
              <li>An action log lets you see who did what.</li>
              <li>You can set long scenarios and return to them later.</li>
            </ul>

            <h2>Interaction via everyday messengers</h2>
            <img src="/images/2openclaw.jpeg" alt="Agents in messenger" className="module-image" />
            <p>A convenient option is to control agents through your favourite messenger: send a command → agent performs the task → sends the result to the chat. This lowers the entry barrier: no separate UI is required - the familiar chat format is enough.</p>

            <h2>Security</h2>
            <p>OpenClaw gets access to resources - so security is crucial. Simple but essential rules:</p>
            <ul>
              <li>Don't run the platform with full privileges on your personal machine.</li>
              <li>Use a separate server or a virtual machine - preferably with least-privilege access.</li>
              <li>Give agents only the keys and accesses they actually need (principle of least privilege).</li>
              <li>Store secrets in a protected vault, not in plain configuration files.</li>
              <li>Make regular backups and test restores.</li>
              <li>Logs and audit trails help detect suspicious activity quickly.</li>
            </ul>
            <p className="callout">If you're just starting - deploy to an isolated server first and test scenarios on test data.</p>

            <h2>Team of agents</h2>
            <img src="/images/openclaw_team.jpeg" alt="Team of agents" className="module-image" />
            <p>You can assemble a set of agents for specific roles: data collector, analyst, copywriter, scheduler/executor, etc. Role examples:</p>
            <ul>
              <li>Collector: periodically pulls data from sources.</li>
              <li>Analyst: processes and filters data, computes metrics.</li>
              <li>Report builder: prepares documents and spreadsheets.</li>
              <li>Executor: runs external processes (uploads, site updates).</li>
            </ul>
            <p className="callout">This approach simplifies support: if one scenario breaks, the others keep working.</p>

            <h2>The price of it. Smart people learn from others' mistakes.</h2>
            <p>What to consider when planning:</p>
            <ul>
              <li>Server and infrastructure (VMs, containers).</li>
              <li>Cloud model usage (pay per request) or investment in local compute.</li>
              <li>Integrations (setup and maintenance of third-party services).</li>
              <li>Development and ongoing support of scenarios.</li>
            </ul>

            <p className="callout">You're smart enough to figure this out yourself. We'll help you avoid mistakes that could cost you money.</p>

            <h2>Short summary</h2>
            <img src="/images/4openclaw.jpeg" alt="Summary illustration" className="module-image" />
            <p>OpenClaw is a tool that turns routine into automated processes, helps free a lot of your time and can bring measurable revenue. Properly configured it saves time, reduces mistakes and makes workflows predictable. But it's not a "magic button": you still need control, security and clarity on which tasks are worth automating.</p>

            <p className="callout">At the same time we'll help you navigate the nuances, minimize costs and avoid the common traps we've run into along the way.</p>

          </section>

          <div style={{display:'flex',justifyContent:'center',gap:12,marginTop:20}}>
            <Link href="/en" className="nav-button">Home</Link>
            <Link href="/en/dashboard" className="nav-button primary">Get started - it's free</Link>
          </div>

          <footer className="muted" style={{textAlign:'center',marginTop:18}}>
            <div style={{display:'flex',justifyContent:'center',gap:12,marginBottom:6}}>
              <Link href="/en/terms" className="muted">Terms of service</Link>
              <Link href="/en/privacy" className="muted">Privacy policy</Link>
              <Link href="/en/offer" className="muted">Offer</Link>
            </div>
            <div style={{fontSize:'0.95em'}}>© {new Date().getFullYear()} All rights reserved</div>
          </footer>
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
