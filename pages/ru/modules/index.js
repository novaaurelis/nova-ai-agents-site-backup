import fs from 'fs'
import path from 'path'
import Link from 'next/link'
import Header from '../../../components/Header'

export async function getStaticProps(){
  const dir = path.join(process.cwd(),'content/modules')
  const files = fs.readdirSync(dir).filter(f=>f.endsWith('.mdx'))
  const modules = files.map(f=>{
    const m = f.replace(/\.(ru|en)\.mdx$/,'')
    const lang = f.includes('.ru.mdx') ? 'ru' : 'en'
    return { slug: m, lang }
  })
  const map = {}
  modules.forEach(m=>{ if(!map[m.slug]) map[m.slug]=[]; map[m.slug].push(m.lang) })
  const list = Object.keys(map).map(k=>({slug:k,langs:map[k]}))
  return { props: { list } }
}

function slugToTitle(s){ return s.replace(/-/g,' ').replace(/\b\w/g, c=>c.toUpperCase()) }

export default function ModulesIndex({list}){
  // Simplified RU dashboard per request: remove progress, filter and mark-complete actions

  function titleFor(slug){
    if(slug === 'first-steps') return 'Первые шаги'
    // fallback: prettify
    return slug.replace(/-/g,' ').replace(/\b\w/g, c=>c.toUpperCase())
  }

  return (
    <div>
      <Header/>
      <main className="container">
        <header style={{marginBottom:12}}>
          <h1>Личный кабинет</h1>
        </header>

        <div className="grid">
          {list.map(m=> (
            <article key={m.slug} className="card">
              <div className="card-head">
                <h3>{titleFor(m.slug)}</h3>
              </div>

              <p className="muted">{m.slug === 'first-steps' ? 'Зачем тебе создавать супер‑команду из цифровых помощников, которые будут двигать тебя вперёд?' : 'Краткое описание модуля и цели обучения. Нажмите «Перейти», чтобы открыть материал.'}</p>

              <div className="card-actions">
                <Link href={`/modules/${m.slug}`} className="button">Перейти</Link>
              </div>
            </article>
          ))}
        </div>

        <p style={{marginTop:20}}><Link href="/ru">← На главную</Link></p>
      </main>

      <style jsx>{`
        header{margin-bottom:12px}
        .grid{display:grid;grid-template-columns:repeat(auto-fit,minmax(260px,1fr));gap:12px;margin-top:18px}
        .card{padding:14px;border:1px solid rgba(15,23,42,0.06);border-radius:10px;background:var(--surface)}
        .card-head{display:flex;justify-content:space-between;align-items:center;gap:8px}
        .langs{display:flex;gap:6px}
        .pill{background:#f3f4f6;padding:4px 8px;border-radius:999px;font-size:12px}
        .card-actions{display:flex;gap:8px;margin-top:12px}
        .button{display:inline-block;padding:8px 12px;background:linear-gradient(90deg,var(--accent),var(--accent-2));color:#fff;border-radius:8px;text-decoration:none}
        .muted{color:var(--muted)}
        .container { max-width:900px; margin:18px auto; padding:0 18px }
      `}</style>
    </div>
  )
}
