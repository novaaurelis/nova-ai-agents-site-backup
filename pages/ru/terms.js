import Link from 'next/link'
import Header from '../../components/Header'

export default function RuTerms(){
  return (
    <div>
      <Header/>
      <main className="container">
        <h1>Пользовательское соглашение</h1>
        <p className="muted">Заглушка: документ будет добавлен позже.</p>
        <p><Link href="/ru">← На главную</Link></p>
      </main>
    </div>
  )
}
