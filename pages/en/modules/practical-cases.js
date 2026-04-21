import Link from 'next/link'
import Header from '../../../components/Header'

export default function PracticalCasesEn(){
  return (
    <div>
      <Header/>
      <main className="container">
        <article className="module">
          <header className="module-header">
            <h1>Practical cases</h1>
            <p className="muted">Real use cases of AI agents for home and business.</p>
          </header>

          <section>
            <h2>Home tasks</h2>
            <p>Examples: shopping planning, schedule management, automating routine home tasks.</p>
          </section>

          <section>
            <h2>Work scenarios</h2>
            <p>Automating tasks like data collection, mailings, drafting and reporting.</p>
          </section>

          <section>
            <h2>Business cases</h2>
            <p>Sales automation, handling incoming requests, competitor monitoring.</p>
          </section>

          <p style={{marginTop:20}}><Link href="/en/modules/first-steps">← Back to First steps</Link></p>
        </article>

        <style jsx>{`
          .module { max-width:900px; margin:18px auto; padding:0 18px }
        `}</style>
      </main>
    </div>
  )
}
