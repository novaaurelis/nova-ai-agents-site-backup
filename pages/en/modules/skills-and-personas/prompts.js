import Link from 'next/link'
import Header from 'components/Header'

export default function PromptsPageEn(){
  return (
    <div>
      <Header/>
      <main className="container">
        <article className="module">
          <header className="module-header">
            <h1>Prompt engineering</h1>
            <p className="muted">Skeleton page — prompt templates, stepwise refinement, testing and debugging behavior.</p>
          </header>

          <section>
            <h2>Topics</h2>
            <p>Placeholder — prompt patterns, few-shot examples, evaluation and tuning.</p>
          </section>

          <div style={{marginTop:20,textAlign:'center'}}>
            <Link href="/en/modules/skills-and-personas" legacyBehavior><a className="button secondary">Back</a></Link>
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
