import Link from 'next/link'
import Header from '../../components/Header'

export default function EnHome(){
  return (
    <div>
      <Header/>
      <main className="container">
        <h1>OpenClaw‑based AI agents</h1>
        <p>Brief: free registration, installation guide and paid modules with advanced tips.</p>
        <ul>
          <li>Quick setup</li>
          <li>Ready workflows</li>
          <li>Support & updates</li>
        </ul>
        <div className="cta">
          <Link href="/en/dashboard"><a className="button">Register</a></Link>
        </div>
      </main>
    </div>
  )
}
