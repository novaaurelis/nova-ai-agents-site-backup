import fs from 'fs'
import path from 'path'
import Link from 'next/link'

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

export default function ModulesIndex({list}){
  return (
    <main className="container">
      <h1>Modules</h1>
      <div className="grid">
        {list.map(m=> (
          <div key={m.slug} className="card">
            <h3>{m.slug.replace(/-/g,' ')} {m.langs.includes('ru') && <small>RU</small>}</h3>
            <p className="muted">Module skeleton and examples</p>
            <p><Link href={`/modules/${m.slug}`} className="button">Open</Link></p>
          </div>
        ))}
      </div>
      <style jsx>{`
        .grid{display:grid;grid-template-columns:repeat(auto-fit,minmax(220px,1fr));gap:12px;margin-top:18px}
        .card{padding:14px;border:1px solid #eee;border-radius:10px;background:#fff}
      `}</style>
    </main>
  )
}
