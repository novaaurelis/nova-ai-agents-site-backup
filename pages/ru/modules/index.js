import Link from 'next/link'
import Header from '../../../components/Header'

const modules = [
  { href: '/ru/modules/first-steps', title: 'Первые шаги' },
  { href: '/ru/modules/installation-and-run', title: 'Установка и запуск' },
  { href: '/ru/modules/deep-configuration', title: 'Глубокая настройка (платный)' },
  { href: '/ru/modules/updates-and-support', title: 'Обновление и поддержка' },
  { href: '/ru/modules/practical-cases', title: 'Практические кейсы' },
]

export default function ModulesIndex(){
  return (
    <div>
      <Header/>
      <main className="container">
        <h1>Модули</h1>
        <p className="muted">Список доступных модулей и черновые страницы</p>
        <ul>
          {modules.map(m => (
            <li key={m.href}><Link href={m.href}>{m.title}</Link></li>
          ))}
        </ul>

        <p style={{marginTop:20}}><Link href="/ru">← На главную</Link></p>
      </main>

      <style jsx>{`
        .container { max-width:900px; margin:18px auto; padding:0 18px }
        ul { margin-top:12px }
      `}</style>
    </div>
  )
}
