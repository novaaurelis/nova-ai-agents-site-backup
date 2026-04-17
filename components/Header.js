import Link from 'next/link'

export default function Header(){
  return (
    <header className="header">
      <div className="container nav">
        <h2 className="logo">AI Agents</h2>
        <nav>
          <Link href="/ru">RU</Link>
          <Link href="/en">EN</Link>
          <Link href="/modules">Модули</Link>
        </nav>
      </div>
    </header>
  )
}
