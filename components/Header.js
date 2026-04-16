import Link from 'next/link'

export default function Header(){
  return (
    <header className="header">
      <div className="container nav">
        <h2 className="logo">AI Agents</h2>
        <nav>
          <Link href="/ru"><a>RU</a></Link>
          <Link href="/en"><a>EN</a></Link>
          <Link href="/modules"><a>Модули</a></Link>
        </nav>
      </div>
    </header>
  )
}
