import Link from 'next/link'
import Header from '../../components/Header'

export default function EnTerms(){
  return (
    <div>
      <Header/>
      <main className="container">
        <article className="policy">
          <a className="sr-only" id="top" />
          <header className="policy-header">
            <h1>Terms of Service</h1>
            <p className="muted"><time dateTime="2026-04-19">Effective date: April 19, 2026</time></p>
          </header>

          <nav className="toc" aria-label="Table of contents">
            <strong>Contents</strong>
            <ul>
              <li><a href="#intro">Introduction</a></li>
              <li><a href="#definitions">Definitions</a></li>
              <li><a href="#account">Registration and account</a></li>
              <li><a href="#use">Use of the service</a></li>
              <li><a href="#prohibited">Prohibited actions</a></li>
              <li><a href="#content">Content and rights</a></li>
              <li><a href="#termination">Suspension and termination</a></li>
              <li><a href="#liability">Limitation of liability</a></li>
              <li><a href="#changes">Changes</a></li>
              <li><a href="#law">Governing law</a></li>
              <li><a href="#contacts">Contacts</a></li>
            </ul>
          </nav>

          <section id="intro">
            <h2>Introduction</h2>
            <p>This Terms of Service (the "Agreement") sets out the terms of use for the website and service provided by LLC "Openclaw" (the "Operator"). By using the Site you confirm acceptance of the Agreement.</p>
          </section>

          <section id="definitions">
            <h2>Definitions</h2>
            <p>In this Agreement, the following terms have the meanings set out below:</p>
            <ul>
              <li><strong>Site / Service</strong> — the web interface and related services available at the project address.</li>
              <li><strong>User</strong> — any natural person using the Site.</li>
              <li><strong>Content</strong> — texts, images, files and other information posted on the Site or submitted by the User through the Site.</li>
            </ul>
          </section>

          <section id="account">
            <h2>Registration and account</h2>
            <p>To access certain features you may need to register. You agree to provide accurate information and keep your credentials confidential.</p>
            <p>You are responsible for all actions taken under your account. If you suspect your password is compromised you must change it and notify support.</p>
          </section>

          <section id="use">
            <h2>Use of the service</h2>
            <p>The Service is provided for personal and/or commercial use as described by the functionality. You agree to use the Service in compliance with applicable law and this Agreement.</p>
          </section>

          <section id="prohibited">
            <h2>Prohibited actions</h2>
            <p>You must not use the Site to:</p>
            <ul>
              <li>infringe the rights of others;</li>
              <li>distribute malware, spam or phishing;</li>
              <li>publish illegal, defamatory or offensive content;</li>
              <li>attempt unauthorized access to the Site's infrastructure.</li>
            </ul>
          </section>

          <section id="content">
            <h2>Content and rights</h2>
            <p>All materials on the Site are owned by the Operator or used under license. Users retain rights to their uploaded content but grant the Operator a non-exclusive, royalty-free license to use, reproduce and display such content as necessary to operate the Service.</p>
          </section>

          <section id="termination">
            <h2>Suspension and termination</h2>
            <p>The Operator may suspend or terminate access to the Site in case of breaches, for maintenance, or otherwise at its discretion with prior notice where possible.</p>
          </section>

          <section id="liability">
            <h2>Limitation of liability</h2>
            <p>The Service is provided "as is". The Operator does not guarantee uninterrupted operation, complete accuracy of content, or protection from all threats. To the maximum extent permitted by law the Operator is not liable for indirect damages, lost profits or other losses arising from use of the Service.</p>
          </section>

          <section id="changes">
            <h2>Changes</h2>
            <p>The Operator may change this Agreement. The current version is published on the Site. Continued use of the Site after changes constitutes acceptance of the new version.</p>
          </section>

          <section id="law">
            <h2>Governing law</h2>
            <p>This Agreement is governed by the laws of the Russian Federation.</p>
          </section>

          <aside id="contacts" className="contacts">
            <h3>Contacts</h3>
            <p>For questions related to the Agreement contact: <a href="mailto:openclaw.ai@ya.ru">openclaw.ai@ya.ru</a></p>
          </aside>

          <p style={{marginTop:20}}><Link href="/en">← Home</Link></p>
        </article>

        <style jsx>{`
          :root { scroll-behavior: smooth; }
          .policy { max-width: 900px; margin: 18px auto; padding: 0 18px; text-align: justify; text-justify: inter-word; }
          .policy-header { margin-bottom: 12px; }
          .toc { background: #fff; border:1px solid #eee; padding: 14px; margin: 8px 0 18px; border-radius: 8px; box-shadow: 0 1px 2px rgba(20,20,20,0.03); text-align: left; }
          .toc strong { display:block; margin-bottom:8px; font-size:15px }
          .toc ul { margin: 0; padding-left: 18px; list-style: disc; }
          .toc li { margin: 6px 0; }
          .toc a { color: #333; text-decoration: none; padding:4px 6px; border-radius:4px; display:inline-block; font-size:14px }
          .toc a:hover { background: #f3f4f6; }
          .policy h2 { margin-top: 18px; }
          .policy ul { margin: 8px 0 16px; padding-left: 20px; text-align: left; }
          .contacts { background:#fbfbfb; border:1px solid #eee; padding:12px; margin:18px 0; border-radius:6px }
          .sr-only { position: absolute; left: -9999px; top: auto; width: 1px; height: 1px; overflow: hidden; }
          @media (max-width: 640px) { .policy { padding: 0 12px } }
        `}</style>

      </main>
    </div>
  )
}
