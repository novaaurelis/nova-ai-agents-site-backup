import fs from 'fs'
import path from 'path'
import Link from 'next/link'
import Header from '../../../components/Header'

export async function getStaticProps(){
  const dir = path.join(process.cwd(),'content/modules')
  // Only include modules that have an English MDX file
  const files = fs.readdirSync(dir).filter(f=>f.endsWith('.en.mdx'))
  const list = files.map(f=>{
    const slug = f.replace(/\.en\.mdx$/,'')
    const full = path.join(dir, f)
    const src = fs.readFileSync(full, 'utf8')
    // extract title from YAML frontmatter if present
    let title = null
    const fm = src.match(/^---\s*([\s\S]*?)---/)
    if(fm){
      const m = fm[1].match(/title:\s*(.+)/)
      if(m) title = m[1].trim().replace(/^['\"]|['\"]$/g,'')
    }
    if(!title){
      // fallback prettify
      title = slug.replace(/-/g,' ').replace(/\b\w/g, c=>c.toUpperCase())
    }
    // custom display titles for specific modules (EN)
    if(slug === 'first-steps') title = 'Base module. First steps 🐾'
    if(slug === 'installation-and-run') title = 'First module. Installation and run 🚀'
    if(slug === 'deep-configuration') title = 'Second module. Deep configuration 👨‍💻'
    if(slug === 'updates-and-support') title = 'Third module. Updates and support 🦀'
    if(slug === 'practical-cases') title = 'Fourth module. Practical cases 🧨'
    if(slug === 'skills-and-personas') title = 'Fifth module. Skills and personas 🎭'
    return { slug, title }
  })

  // Ensure preferred ordering: first-steps, installation-and-run, deep-configuration, updates-and-support, practical-cases, skills-and-personas
  const preferredOrder = ['first-steps','installation-and-run','deep-configuration','updates-and-support','practical-cases','skills-and-personas']
  list.sort((a,b)=>{
    const ia = preferredOrder.indexOf(a.slug)
    const ib = preferredOrder.indexOf(b.slug)
    if(ia !== -1 || ib !== -1){
      if(ia === -1) return 1
      if(ib === -1) return -1
      return ia - ib
    }
    return a.title.localeCompare(b.title,'en')
  })

  return { props: { list } }
}

function titleFor(slug){
  if(slug === 'first-steps') return 'Base module. First steps'
  return slug.replace(/-/g,' ').replace(/\b\w/g, c=>c.toUpperCase())
}

export default function ModulesIndex({list}){
  return (
    <div>
      <Header/>
      <main className="container">
        <header style={{marginBottom:12}}>
          <h1>Your Dashboard</h1>
        </header>

        <div className="grid">
          {list.map(m=> {
            const href = m.slug === 'first-steps' ? `/en/modules/${m.slug}/preview` : `/en/modules/${m.slug}`
            const isAccent = (m.slug==='first-steps' || m.slug==='installation-and-run' || m.slug==='deep-configuration' || m.slug==='updates-and-support' || m.slug==='practical-cases' || m.slug==='skills-and-personas')
            const isPaid = (m.slug === 'deep-configuration' || m.slug === 'updates-and-support' || m.slug === 'practical-cases' || m.slug === 'skills-and-personas')
            return (
              <Link href={href} key={m.slug} legacyBehavior>
                <a className="card" data-accent={isAccent ? true : undefined} data-slug={m.slug} aria-label={m.title}>
                  {isPaid && (
                    <span className="paid-badge" title="Paid module" aria-hidden>💰</span>
                  )}
                  <div className="card-head">
                    <h3>{m.title}</h3>
                  </div>

                  <p className="muted">{
                    m.slug === 'first-steps' ? 'Why build a team that will move you forward?' :
                    m.slug === 'installation-and-run' ? 'Step-by-step installation guide for macOS, Windows and VPS, plus Telegram integration.' :
                    m.slug === 'deep-configuration' ? 'Correct parameters, optimization configs, security and integrations.' :
                    m.slug === 'updates-and-support' ? 'System updates, dashboard upgrades, backup pushes and maintenance.' :
                    m.slug === 'practical-cases' ? 'Usage examples, ready templates and step-by-step scenarios.' :
                    m.slug === 'skills-and-personas' ? 'Agent breakdowns, skill upgrades, prompt-engineering and persona design.' :
                    'Short module description and goals.'
                  }</p>
                </a>
              </Link>
            )
          })}
        </div>

        <p style={{marginTop:20}}><Link href="/en">← Home</Link></p>
      </main>

      <style jsx>{`
        header{margin-bottom:12px}
        h1{font-size:clamp(20px,3vw,28px);margin:0 0 6px}
        .grid{display:flex;flex-direction:column;align-items:center;gap:14px;margin-top:14px} /* stack cards vertically to match RU order */
        /* match RU: card fills the available column (no extra max-width) */
        .card{padding:16px;border:1px solid rgba(15,23,42,0.04);border-radius:10px;background:var(--surface);display:flex;flex-direction:column;width:100%;box-sizing:border-box;transition:transform .18s ease,box-shadow .18s ease,border-color .18s ease}
        .card:hover{transform:translateY(-4px);box-shadow:0 6px 18px rgba(2,6,23,0.06);border-color:rgba(15,23,42,0.08)}
        /* keep the left accent visible on hover */
        .card[data-accent]:hover{ border-left-color: var(--accent) }
        .card[data-slug="first-steps"]:hover{ border-left-color: #9CA3AF }
        @media (min-width:900px){ .card{width:720px;margin:0 auto} }
        .card{border-left:6px solid transparent}
        .card[data-accent]{border-left-color:var(--accent)}
        /* first-steps gets a different color (gray) */
        .card[data-slug="first-steps"]{border-left-color:#9CA3AF}
        .card-head{display:block;margin-bottom:6px}
        .card-head h3{margin:0;font-size:1.2rem;font-weight:800}
        .paid-badge{position:absolute;top:12px;right:12px;font-size:16px}
        .card{position:relative}
        .card .muted{margin-top:4px;color:var(--muted);line-height:1.38;margin-bottom:10px}
        .card-actions{display:flex;gap:8px}
        /* make entire card a clean link: no underlines, inherit color */
        a.card{display:block;text-decoration:none;color:inherit}
        a.card *{text-decoration:none;color:inherit}
        a.card:focus{outline:none}
        .button{display:inline-block;padding:9px 14px;border-radius:8px;text-decoration:none;font-weight:700}
        .button.subtle{background:transparent;color:var(--accent);border:1px solid rgba(15,23,42,0.06);padding:8px 12px}
        .container { max-width:980px; margin:18px auto; padding:0 18px }
      `}</style>
    </div>
  )
}
