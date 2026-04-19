import Link from 'next/link'
import Header from '../../components/Header'

export default function EnTerms(){
  return (
    <div>
      <Header/>
      <main className="container">
        <h1>Terms of service</h1>
        <p className="muted">Placeholder: document will be added later.</p>
        <p><Link href="/en">← Home</Link></p>
      </main>
    </div>
  )
}
