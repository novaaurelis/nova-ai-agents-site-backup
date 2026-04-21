import Link from 'next/link'
import Header from '../../../components/Header'

const modules = [
  { href: '/en/modules/first-steps', title: 'First steps' },
  { href: '/en/modules/installation-and-run', title: 'Installation & run' },
  { href: '/en/modules/deep-configuration', title: 'Deep configuration (paid)' },
  { href: '/en/modules/updates-and-support', title: 'Updates & support' },
  { href: '/en/modules/practical-cases', title: 'Practical cases' },
]

export default function ModulesIndexEn(){
  return (
    <div>
      <Header/>
      <main className="container">
        <h1>Modules</h1>
        <p className="muted">List of available modules and draft pages</p>
        <ul>
          {modules.map(m => (
            <li key={m.href}><Link href={m.href}>{m.title}</Link></li>
          ))}
        </ul>

        <p style={{marginTop:20}}><Link href="/en">← Home</Link></p>
      </main>

      <style jsx>{`
        .container { max-width:900px; margin:18px auto; padding:0 18px }
        ul { margin-top:12px }
      `}</style>
    </div>
  )
}
