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
        h1{font-size:clamp(20px,3vw,28px);margin:0 0 6px}
        .grid{display:grid;grid-template-columns:repeat(auto-fit,minmax(260px,1fr));gap:14px;margin-top:16px}
        .card{padding:18px;border:1px solid rgba(15,23,42,0.06);border-radius:12px;background:var(--surface);transition:transform .18s ease,box-shadow .18s ease}
        .card:hover{transform:translateY(-6px);box-shadow:0 10px 30px rgba(2,6,23,0.06)}
        .card-head{display:flex;justify-content:space-between;align-items:center;gap:8px;margin-bottom:6px}
        .card-head h3{margin:0;font-size:1.15rem;font-weight:800}
        .card .muted{margin-top:6px;color:var(--muted);line-height:1.45}
        .card-actions{display:flex;gap:8px;margin-top:12px}
        .button{display:inline-block;padding:9px 14px;background:linear-gradient(90deg,var(--accent),var(--accent-2));color:#fff;border-radius:10px;text-decoration:none;font-weight:700}
        .container { max-width:980px; margin:20px auto; padding:0 18px }
      `}</style>
    </div>
  )
}
