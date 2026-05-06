import Link from 'next/link'
import Header from 'components/Header'

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
              <div className="icon" aria-hidden>
                {/* wrench / tools */}
                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width="28" height="28" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" aria-hidden>
                  <path d="M22 12v2a2 2 0 0 1-2 2h-1l-3.5-3.5 1-1L19 15v-1a2 2 0 0 1 2-2z" />
                  <path d="M8.5 15.5L3 21l1.5-5.5L9 13l-0.5 2.5z" />
                </svg>
              </div>
              <div className="card-body">Clear, step-by-step installation and startup guide</div>
            </div>

            <div className="card">
              <div className="icon" aria-hidden>
                {/* package / box */}
                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width="28" height="28" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" aria-hidden>
                  <path d="M21 16V8a2 2 0 0 0-1-1.73L13 3l-7 3.27A2 2 0 0 0 5 8v8a2 2 0 0 0 1 1.73L11 21l7-3.27A2 2 0 0 0 21 16z" />
                  <path d="M12 3v8" />
                </svg>
              </div>
              <div className="card-body">Simple examples and ready-to-use scenario templates</div>
            </div>

            <div className="card">
              <div className="icon" aria-hidden>
                {/* brain */}
                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width="28" height="28" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" aria-hidden>
                  <path d="M12 3c-1 0-2 .5-2 1.5S11 7 12 7s2-1.5 2-2.5S13 3 12 3z" />
                  <path d="M6 9c-1 1-1 2-1 3s1 2 2 2" />
                  <path d="M18 9c1 1 1 2 1 3s-1 2-2 2" />
                  <path d="M8 21c2-1 4 0 8 0" />
                </svg>
              </div>
              <div className="card-body">Professional tips, in-depth configuration recipes and best practices</div>
            </div>

            <div className="card">
              <div className="icon" aria-hidden>
                {/* link/chain */}
                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width="28" height="28" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" aria-hidden>
                  <path d="M10 14a5 5 0 0 1 0-7l1.41-1.41a5 5 0 0 1 7.07 7.07L17.07 14" />
                  <path d="M14 10a5 5 0 0 1 0 7l-1.41 1.41a5 5 0 0 1-7.07-7.07L6.93 10" />
                </svg>
              </div>
              <div className="card-body">Integrations with popular services, dashboard upgrades, and agent personalization</div>
            </div>

            <div className="card">
              <div className="icon" aria-hidden>
                {/* target */}
                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width="28" height="28" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" aria-hidden>
                  <circle cx="12" cy="12" r="10" />
                  <circle cx="12" cy="12" r="6" />
                  <circle cx="12" cy="12" r="2" />
                </svg>
              </div>
              <div className="card-body">Effective prompts, detailed walkthroughs, and skill training</div>
            </div>

            <div className="card">
              <div className="icon" aria-hidden>
                {/* book */}
                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width="28" height="28" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" aria-hidden>
                  <path d="M3 6a2 2 0 0 1 2-2h12a2 2 0 0 1 2 2v12a1 1 0 0 1-1.3.95L12 16l-7.7 2.95A1 1 0 0 1 3 18V6z" />
                  <path d="M7 8h10M7 12h6" />
                </svg>
              </div>
              <div className="card-body">Continuously updated content and structured learning modules</div>
            </div>
          </div>

          <style jsx>{`
            .grid-cards{display:grid;grid-template-columns:repeat(1,1fr);gap:14px;margin-top:12px}
            @media(min-width:700px){ .grid-cards{grid-template-columns:repeat(2,1fr)} }
            @media(min-width:1100px){ .grid-cards{grid-template-columns:repeat(3,1fr)} }
            .card{display:flex;flex-direction:column;align-items:center;justify-content:center;gap:10px;padding:20px;min-height:120px;border-radius:12px;background:var(--surface);box-shadow:0 6px 18px rgba(2,6,23,0.04);border:1px solid rgba(15,23,42,0.04);min-width:200px;max-width:260px;text-align:center}
            .icon{width:56px;height:56px;display:inline-flex;align-items:center;justify-content:center;margin:0}
            .icon svg{width:28px;height:28px;stroke:currentColor}
            .card-body{font-size:0.98rem;color:var(--text);text-align:center}
          `}</style>
        </section>

        <div className="what-cta" style={{display:'flex',justifyContent:'center',marginTop:18,marginBottom:18}}>
          <Link href="/en/dashboard" className="button">Don't overthink it — act now</Link>
        </div>

        <section className="models" aria-label="Models">
          <h3 style={{textAlign: 'center'}}>Popular models</h3>
          <div style={{display:'flex',justifyContent:'center',marginTop:-12}}>
            <img src="/images/logos.png" alt="neurologos collage" className="popular-illustration" style={{maxWidth:'100%',height:'auto',background:'transparent'}} />
          </div>
        </section>

        <div className="integrations-cta" style={{display:'flex',flexDirection:'column',alignItems:'center',gap:12,justifyContent:'center',marginTop:12, marginBottom:6,maxWidth:'720px',marginLeft:'auto',marginRight:'auto',padding:'0 18px'}}>
          <p className="integrations-lead" style={{textAlign:'justify',maxWidth:'100%',lineHeight:1.6,color:'var(--muted)',margin:0,textAlignLast:'center'}}>
            Your digital assistant will run on cutting-edge neural models, act proactively, help you turn boring routine into automated processes, free up a lot of time for yourself, and bring you a steady income. Properly configured, it saves time and makes workflows predictable.
          </p>

          <div style={{display:'flex',gap:12,justifyContent:'center',flexWrap:'wrap'}}>
            <Link href="/en/dashboard" className="button">You're just one step away from magic</Link>
          </div>
        </div>

        <section className="integrations" aria-label="Integrations" style={{marginTop:28}}>
          <div style={{maxWidth:'720px',marginLeft:'auto',marginRight:'auto',padding:'0 18px'}}>
            <h3 style={{textAlign:'center'}}>Software integrations</h3>

            <ul className="integration-compact" style={{marginTop:14}}>
              <li className="integration-item">
                <span className="integration-icon" role="img" aria-label="Chats in messengers">
                  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width="18" height="18" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"><path d="M21 15a2 2 0 0 1-2 2H7l-4 4V5a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2z"/></svg>
                </span>
                <span className="integration-label">Chats in messengers</span>
              </li>

              <li className="integration-item">
                <span className="integration-icon" role="img" aria-label="Email and voice replies">
                  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width="18" height="18" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"><path d="M22 12v6a2 2 0 0 1-2 2H4a2 2 0 0 1-2-2V6a2 2 0 0 1 2-2h16"/><path d="M22 6l-10 7L2 6"/></svg>
                </span>
                <span className="integration-label">Checks email and can reply by voice</span>
              </li>

              <li className="integration-item">
                <span className="integration-icon" role="img" aria-label="Writes websites and programs">
                  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width="18" height="18" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"><rect x="2" y="7" width="20" height="14" rx="2"/><path d="M8 3h8v4H8z"/></svg>
                </span>
                <span className="integration-label">Writes websites and programs</span>
              </li>

              <li className="integration-item">
                <span className="integration-icon" role="img" aria-label="Watches and analyzes videos">
                  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width="18" height="18" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"><rect x="2" y="6" width="20" height="12" rx="2"/><path d="M10 9l6 3-6 3z"/></svg>
                </span>
                <span className="integration-label">Watches videos and analyzes them</span>
              </li>

              <li className="integration-item">
                <span className="integration-icon" role="img" aria-label="Works with files and spreadsheets">
                  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width="18" height="18" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"><path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z"/><path d="M14 2v6h6"/></svg>
                </span>
                <span className="integration-label">Works with files and spreadsheets</span>
              </li>

              <li className="integration-item">
                <span className="integration-icon" role="img" aria-label="Generates photo and video content">
                  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width="18" height="18" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"><rect x="3" y="3" width="18" height="14" rx="2"/><circle cx="8.5" cy="8.5" r="1.5"/><path d="M21 21l-5-5-4 4-6-6-1 1"/></svg>
                </span>
                <span className="integration-label">Generates photo and video content</span>
              </li>

              <li className="integration-item">
                <span className="integration-icon" role="img" aria-label="Reminders and calendar">
                  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width="18" height="18" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"><rect x="3" y="4" width="18" height="18" rx="2"/><path d="M16 2v4M8 2v4M3 10h18"/><path d="M12 13v5"/><path d="M14.5 16.5l-3-1"/></svg>
                </span>
                <span className="integration-label">Sends reminders and manages calendar</span>
              </li>

              <li className="integration-item">
                <span className="integration-icon" role="img" aria-label="Notes and scheduling">
                  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width="18" height="18" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"><path d="M3 7h18"/><path d="M5 11h14"/><path d="M7 15h10"/></svg>
                </span>
                <span className="integration-label">Takes notes and manages schedules</span>
              </li>

              <li className="integration-item">
                <span className="integration-icon" role="img" aria-label="Deep research">
                  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width="18" height="18" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"><circle cx="11" cy="11" r="6"/><path d="M21 21l-4.35-4.35"/></svg>
                </span>
                <span className="integration-label">Performs deep research</span>
              </li>

              <li className="integration-item">
                <span className="integration-icon" role="img" aria-label="News and monitoring">
                  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width="18" height="18" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"><rect x="3" y="4" width="18" height="16" rx="2"/><path d="M7 8h10"/><path d="M7 12h6"/></svg>
                </span>
                <span className="integration-label">Monitors news and keeps you updated</span>
              </li>

              <li className="integration-item">
                <span className="integration-icon" role="img" aria-label="Financial and business plans">
                  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width="18" height="18" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"><path d="M3 3v18h18"/><path d="M9 17V9"/><path d="M13 17v-4"/><path d="M17 17v-7"/></svg>
                </span>
                <span className="integration-label">Builds financial and business plans</span>
              </li>

              <li className="integration-item">
                <span className="integration-icon" role="img" aria-label="And much more">
                  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width="18" height="18" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"><path d="M12 2l1.7 4.3L18 8l-4 2.9L15.4 16 12 13.7 8.6 16 10 10.9 6 8l4.3-1.7L12 2z"/></svg>
                </span>
                <span className="integration-label">And much more</span>
              </li>

            </ul>

            <style jsx>{`
              .integration-compact{display:grid;grid-template-columns:repeat(1,1fr);gap:8px}
              @media(min-width:700px){ .integration-compact{grid-template-columns:repeat(2,1fr)} }
              @media(min-width:1100px){ .integration-compact{grid-template-columns:repeat(3,1fr)} }
              .integration-item{display:flex;align-items:center;gap:10px;padding:6px 8px;border-radius:8px}
              .integration-icon{width:32px;height:32px;display:inline-flex;align-items:center;justify-content:center;border-radius:8px;background:var(--surface);font-size:14px}
              .integration-label{font-weight:600;font-size:0.95rem}
            `}</style>
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
