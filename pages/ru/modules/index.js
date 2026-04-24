import fs from 'fs'
import path from 'path'
import Link from 'next/link'
import Header from '../../../components/Header'

export async function getStaticProps(){
  const dir = path.join(process.cwd(),'content/modules')
  // Only include modules that have a Russian MDX file
  const files = fs.readdirSync(dir).filter(f=>f.endsWith('.ru.mdx'))
  const list = files.map(f=>{
    const slug = f.replace(/\.ru\.mdx$/,'')
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
    // custom display titles for specific modules
    if(slug === 'first-steps') title = 'Базовый модуль. Первые шаги 🐾'
    if(slug === 'installation-and-run') title = 'Первый модуль. Установка и запуск 🚀'
    if(slug === 'deep-configuration') title = 'Второй модуль. Глубокая настройка 👨‍💻'
    if(slug === 'updates-and-support') title = 'Третий модуль. Обновления и поддержка 🦀'
    if(slug === 'practical-cases') title = 'Четвертый модуль. Практические кейсы 🧨'
    if(slug === 'skills-and-personas') title = 'Пятый модуль. Скиллы и образы 🎭'
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
    return a.title.localeCompare(b.title,'ru')
  })

  return { props: { list } }
}

function slugToTitle(s){ return s.replace(/-/g,' ').replace(/\b\w/g, c=>c.toUpperCase()) }

export default function ModulesIndex({list}){
  return (
    <div>
      <Header/>
      <main className="container">
        <header style={{marginBottom:12}}>
          <h1>Личный кабинет</h1>
        </header>

        <div className="grid">
          {list.map(m=> (
            <Link href={m.slug === 'first-steps' ? `/ru/modules/${m.slug}/preview` : `/ru/modules/${m.slug}`} key={m.slug} legacyBehavior>
              <a className="card" data-accent={(m.slug==='first-steps' || m.slug==='installation-and-run' || m.slug==='deep-configuration' || m.slug==='updates-and-support' || m.slug==='practical-cases' || m.slug==='skills-and-personas')} data-slug={m.slug} aria-label={m.title}>
                {/* paid badge for selected modules */}
                {(m.slug === 'deep-configuration' || m.slug === 'updates-and-support' || m.slug === 'practical-cases' || m.slug === 'skills-and-personas') && (
                  <span className="paid-badge" aria-hidden>💰</span>
                )}

                <div className="card-head">
                  <h3>{m.title}</h3>
                </div>

                <p className="muted">{m.slug === 'first-steps' ? 'Зачем тебе создавать супер‑команду из цифровых помощников, которые будут двигать тебя вперёд?' : (m.slug === 'installation-and-run' ? 'Пошаговая инструкция по установке на macOS, Windows и VPS, а также интеграция с Telegram.' : (m.slug === 'deep-configuration' ? 'Правильные параметры, оптимизационные конфиги, безопасность и интеграции.' : (m.slug === 'updates-and-support' ? 'Обновление системы, апгрейд дэшборда, пушим бэкапы и сопровождаем.' : (m.slug === 'practical-cases' ? 'Примеры использования, готовые шаблоны и пошаговые сценарии.' : (m.slug === 'skills-and-personas' ? 'Разборы агентов, прокачка навыков, промт‑инжениринг.' : 'Краткое описание модуля и цели обучения.')))))}</p>
              </a>
            </Link>
          ))}
        </div>

        <p style={{marginTop:20}}><Link href="/ru">← На главную</Link></p>
      </main>

      <style jsx>{`
        header{margin-bottom:12px}
        h1{font-size:clamp(20px,3vw,28px);margin:0 0 6px}
        .grid{display:flex;flex-direction:column;align-items:center;gap:14px;margin-top:14px} /* stack cards vertically so installation appears under first-steps */
        /* Flat card with left accent, no animation */
        .card{padding:16px;border:1px solid rgba(15,23,42,0.04);border-radius:10px;background:var(--surface);display:flex;flex-direction:column;width:100%;box-sizing:border-box;transition:transform .18s ease,box-shadow .18s ease,border-color .18s ease}
        .card:hover{transform:translateY(-4px);box-shadow:0 6px 18px rgba(2,6,23,0.06);border-color:rgba(15,23,42,0.08)}
        @media (min-width:900px){ .card{width:720px;margin:0 auto} }
        .card{border-left:6px solid transparent}
        /* first-steps gets a different color (gray) */
        .card[data-slug="first-steps"]{border-left-color:#9CA3AF}
        /* installation-and-run uses accent */
        .card[data-slug="installation-and-run"]{border-left-color:var(--accent)}
        /* new modules use accent */
        .card[data-slug="deep-configuration"], .card[data-slug="updates-and-support"], .card[data-slug="practical-cases"], .card[data-slug="skills-and-personas"]{border-left-color:var(--accent)}
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
        /* ensure titles inside links are visible and use site text color */
        a.card h3{color:var(--text);text-decoration:none}
        a.card .muted{color:var(--muted)}
        .button{display:inline-block;padding:9px 14px;border-radius:8px;text-decoration:none;font-weight:700}
        .button.subtle{background:transparent;color:var(--accent);border:1px solid rgba(15,23,42,0.06);padding:8px 12px}
        .container { max-width:980px; margin:18px auto; padding:0 18px }
      `}</style>
    </div>
  )
}
