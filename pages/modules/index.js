import fs from 'fs'
import path from 'path'
import Link from 'next/link'
import { useEffect, useState } from 'react'

export async function getStaticProps(){
  const dir = path.join(process.cwd(),'content/modules')
  const files = fs.readdirSync(dir).filter(f=>f.endsWith('.mdx'))
  const modules = files.map(f=>{
    const m = f.replace(/\.(ru|en)\.mdx$/,'')
    const lang = f.includes('.ru.mdx') ? 'ru' : 'en'
    return { slug: m, lang }
  })
  // group unique
  const map = {}
  modules.forEach(m=>{ if(!map[m.slug]) map[m.slug]=[]; map[m.slug].push(m.lang) })
  const list = Object.keys(map).map(k=>({slug:k,langs:map[k]}))
  return { props: { list } }
}

function slugToTitle(s){ return s.replace(/-/g,' ').replace(/\b\w/g, c=>c.toUpperCase()) }

export default function ModulesIndex({list}){
  const [progress, setProgress] = useState({})
  const [filter, setFilter] = useState('all')

  useEffect(()=>{
    try{
      const raw = localStorage.getItem('modules-progress')
      if(raw) setProgress(JSON.parse(raw))
    }catch(e){console.warn(e)}
  },[])

  useEffect(()=>{
    try{ localStorage.setItem('modules-progress', JSON.stringify(progress)) }catch(e){}
  },[progress])

  function toggleDone(slug){
    setProgress(p=>{
      const next = {...p}
      next[slug] = !next[slug]
      return next
    })
  }

  const total = list.length
  const doneCount = list.filter(m=>progress[m.slug]).length

  const visible = list.filter(m=> filter==='all' ? true : (filter==='todo' ? !progress[m.slug] : progress[m.slug]))

  return (
    <main className="container">
      <header style={{display:'flex',justifyContent:'space-between',alignItems:'center',gap:12}}>
        <div>
          <h1>Личный кабинет — Модули</h1>
          <div className="muted">Прогресс: {doneCount}/{total} завершено</div>
        </div>
        <div style={{display:'flex',gap:8,alignItems:'center'}}>
          <label className="muted">Показать:</label>
          <select value={filter} onChange={(e)=>setFilter(e.target.value)}>
            <option value="all">Все</option>
            <option value="todo">Незавершённые</option>
            <option value="done">Завершённые</option>
          </select>
        </div>
      </header>

      <div className="grid">
        {visible.map(m=> (
          <article key={m.slug} className="card">
            <div className="card-head">
              <h3>{slugToTitle(m.slug)}</h3>
              <div className="langs">{m.langs.includes('ru') && <span className="pill">RU</span>} {m.langs.includes('en') && <span className="pill">EN</span>}</div>
            </div>
            <p className="muted">Краткое описание модуля и цели обучения. Нажмите «Открыть», чтобы перейти к шагам.</p>

            <div className="card-actions">
              <Link href={`/modules/${m.slug}`} className="button">Открыть</Link>
              <button onClick={()=>toggleDone(m.slug)} className={progress[m.slug] ? 'outline' : 'button secondary'}>
                {progress[m.slug] ? 'Отметить как неготово' : 'Отметить как пройдено'}
              </button>
            </div>
          </article>
        ))}
      </div>

      <style jsx>{`
        header{margin-bottom:12px}
        .grid{display:grid;grid-template-columns:repeat(auto-fit,minmax(260px,1fr));gap:12px;margin-top:18px}
        .card{padding:14px;border:1px solid rgba(15,23,42,0.06);border-radius:10px;background:var(--surface)}
        .card-head{display:flex;justify-content:space-between;align-items:center;gap:8px}
        .langs{display:flex;gap:6px}
        .pill{background:#f3f4f6;padding:4px 8px;border-radius:999px;font-size:12px}
        .card-actions{display:flex;gap:8px;margin-top:12px}
        .button{display:inline-block;padding:8px 12px;background:linear-gradient(90deg,var(--accent),var(--accent-2));color:#fff;border-radius:8px;text-decoration:none}
        .button.secondary{background:transparent;color:var(--accent);border:1px solid rgba(15,23,42,0.06)}
        .outline{background:transparent;border:1px solid rgba(15,23,42,0.06);padding:8px 12px;border-radius:8px}
        .muted{color:var(--muted)}
      `}</style>
    </main>
  )
}
