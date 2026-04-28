import Link from 'next/link'
import Header from '../../../../components/Header'

export default function OllamaEn(){
  return (
    <div>
      <Header/>
      <main className="container">
        <article className="module">
          <header className="module-header">
            <h1>Ollama integration</h1>
            <p className="muted">We install Ollama and create pairing with your digital assistant</p>
          </header>

          <section>
            <h2>Steps</h2>
            <p>Skeleton page — installation and model connection instructions will go here.</p>
          </section>

          <div style={{marginTop:20,textAlign:'center'}}>
            <Link href="/en/modules/installation-and-run" legacyBehavior><a className="button secondary">Back</a></Link>
          </div>
        </article>

        <style jsx>{`
          .module{max-width:900px;margin:18px auto;padding:0 18px}
          .module-header{margin-bottom:8px}
          .module-header h1{margin:0 0 6px}
          .module-header p{margin:0}
          .button.secondary{background:transparent;color:var(--accent);border:1px solid rgba(15,23,42,0.06);padding:8px 12px;border-radius:8px;text-decoration:none;font-weight:600}
        `}</style>
      </main>
    </div>
  )
}
