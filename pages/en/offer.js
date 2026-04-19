import Link from 'next/link'
import Header from '../../components/Header'

export default function EnOffer(){
  return (
    <div>
      <Header/>
      <main className="container">
        <h1>Offer</h1>
        <p className="muted">Placeholder: document will be added later.</p>
        <p><Link href="/en">← Home</Link></p>
      </main>
    </div>
  )
}
