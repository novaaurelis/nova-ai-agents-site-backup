import Link from 'next/link'

export default function Home() {
  return (
    <div className="container">
      <h1>AI Agents — choose language</h1>
      <div className="links">
        <Link href="/ru">Русский</Link>
        <Link href="/en">English</Link>
      </div>
    </div>
  )
}
