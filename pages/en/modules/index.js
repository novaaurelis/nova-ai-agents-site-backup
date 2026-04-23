import fs from 'fs'
import path from 'path'
import Link from 'next/link'
import Header from '../../../components/Header'

export async function getStaticProps(){
  const dir = path.join(process.cwd(),'content/modules')
  const files = fs.readdirSync(dir).filter(f=>f.endsWith('.mdx'))
  const modules = files.map(f=>{
    const m = f.replace(/\.(ru|en)\.mdx$/,'')
    const lang = f.includes('.en.mdx') ? 'en' : 'ru'
    return { slug: m, lang }
  })
  const map = {}
  modules.forEach(m=>{ if(!map[m.slug]) map[m.slug]=[]; map[m.slug].push(m.lang) })
  const list = Object.keys(map).map(k=>({slug:k,langs:map[k]}))
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
          {list.map(m=> (
            <Link href={`/en/modules/${m.slug}`} key={m.slug} legacyBehavior>
              <a className="card" data-accent={m.slug==='first-steps'} aria-label={titleFor(m.slug)}>
                <div className="card-head">
                  <h3>{titleFor(m.slug)}</h3>
                </div>

                <p className="muted">{m.slug === 'first-steps' ? 'Why build a team that will move you forward?' : 'Short module description and learning goals.'}</p>
              </a>
            </Link>
          ))}
        </div>

        <p style={{marginTop:20}}><Link href="/en">← Home</Link></p>
      </main>

      <style jsx>{`
        header{margin-bottom:12px}
        h1{font-size:clamp(20px,3vw,28px);margin:0 0 6px}
        .grid{display:grid;grid-template-columns:repeat(auto-fit,minmax(260px,1fr));gap:14px;margin-top:14px}
        /* match RU: card fills the available column (no extra max-width) */
        .card{padding:16px;border:1px solid rgba(15,23,42,0.04);border-radius:10px;background:var(--surface);display:flex;flex-direction:column;width:100%;box-sizing:border-box}
        @media (min-width:900px){ .card{width:720px;margin:0 auto} }
        .card{border-left:6px solid transparent}
        .card[data-accent="true"]{border-left-color:var(--accent)}
        .card-head{display:block;margin-bottom:6px}
        .card-head h3{margin:0;font-size:1.2rem;font-weight:800}
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
