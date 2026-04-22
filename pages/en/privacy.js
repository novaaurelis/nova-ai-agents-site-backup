import Link from 'next/link'
import Header from '../../components/Header'

export default function EnPrivacy(){
  return (
    <div>
      <Header/>
      <main className="container">
        <article className="policy">
          <a className="sr-only" id="top" />
          <header className="policy-header">
            <h1>Privacy Policy</h1>
            <p className="muted"><time dateTime="2026-04-19">Publication date: April 19, 2026</time> — effective from this date.</p>
          </header>

          <nav className="toc" aria-label="Table of contents">
            <strong>Contents</strong>
            <ul>
              <li><a href="#general">General provisions</a></li>
              <li><a href="#terms">Definitions</a></li>
              <li><a href="#collected">Which data are collected</a></li>
              <li><a href="#purposes">Purposes of processing</a></li>
              <li><a href="#legal">Legal grounds</a></li>
              <li><a href="#cookies">Cookies & technologies</a></li>
              <li><a href="#third">Disclosure to third parties</a></li>
              <li><a href="#storage">Storage periods</a></li>
              <li><a href="#security">Security</a></li>
              <li><a href="#rights">Data subject rights</a></li>
              <li><a href="#cross">Cross‑border transfers</a></li>
              <li><a href="#changes">Changes to the Policy</a></li>
              <li><a href="#contacts">Contacts</a></li>
            </ul>
          </nav>

          <section id="general">
            <h2>1. General provisions</h2>
            <p>1.1. This Privacy Policy (the "Policy") defines the procedures for collecting, storing, using and disclosing personal data of users of the website (the "Site").</p>
            <p>1.2. The personal data operator: LLC "Openclaw" (the "Operator"). Operator contact: openclaw.ai@ya.ru.</p>
            <p>1.3. The Policy is developed in accordance with the Federal Law No. 152‑FZ of 27.07.2006 "On Personal Data" and other applicable Russian legislation.</p>
            <p>1.4. Registering on the Site or otherwise using the Site means that the User agrees to the terms of this Policy.</p>
          </section>

          <section id="terms">
            <h2>2. Definitions</h2>
            <p>2.1. "Personal data" means any information relating directly or indirectly to an identified or identifiable natural person.</p>
            <p>2.2. "Processing of personal data" means any action (operation) with personal data, including collection, recording, systematization, accumulation, storage, clarification, extraction, use, transfer, anonymization and destruction.</p>
            <p>2.3. "Interaction channel" means messengers, web interface and other technical channels through which an AI agent can interact with users.</p>
          </section>

          <section id="collected">
            <h2>3. Which data are collected</h2>
            <h3>3.1. Data provided during registration and use of the service</h3>
            <ul>
              <li>email address;</li>
              <li>Telegram user identifier (if used);</li>
              <li>password (stored hashed).</li>
            </ul>

            <h3>3.2. Data collected automatically</h3>
            <ul>
              <li>IP address;</li>
              <li>device and browser type;</li>
              <li>access time and duration;</li>
              <li>other technical metadata (e.g. session identifiers).</li>
            </ul>

            <p>3.3. Additionally, data provided by the user when contacting support or using functionality (messages, uploaded files, etc.) may be collected. By uploading files the user confirms they hold the necessary rights to such content.</p>
          </section>

          <section id="purposes">
            <h2>4. Purposes of personal data processing</h2>
            <ul>
              <li>provide and support the service;</li>
              <li>identify and authenticate the user;</li>
              <li>communicate with the user (notifications, technical support);</li>
              <li>improve service quality and analytics;</li>
              <li>fulfill legal obligations.</li>
            </ul>
          </section>

          <section id="legal">
            <h2>5. Legal grounds for processing</h2>
            <ul>
              <li>the User's consent (Articles 24–26 of Law No. 152‑FZ);</li>
              <li>performance of a contract or actions at the User's request;</li>
              <li>fulfillment of the Operator's legal obligations;</li>
              <li>the Operator's legitimate interests (to the extent they do not infringe the rights of the data subject).</li>
            </ul>
          </section>

          <section id="cookies">
            <h2>6. Cookies and tracking technologies</h2>
            <p>6.1. The Site uses:</p>
            <ul>
              <li>session cookies — for authorization and session maintenance;</li>
              <li>analytics cookies — to collect anonymized visit statistics (for example, Yandex.Metrica and/or Google Analytics).</li>
            </ul>
            <p>6.2. The user can disable cookies in the browser settings, but some features of the Service may become unavailable.</p>
          </section>

          <section id="third">
            <h2>7. Disclosure to third parties and processors</h2>
            <p>7.1. The Operator does not sell personal data. Disclosure is possible only in the following cases:</p>
            <ul>
              <li>in response to lawful requests of authorized bodies;</li>
              <li>to contractors and service providers (hosting, analytics, mailing) to the extent necessary to provide services; such contractors are required to ensure confidentiality and data protection.</li>
            </ul>
            <p>7.2. Personal data are not disclosed to third parties for advertising purposes without separate consent.</p>
          </section>

          <section id="storage">
            <h2>8. Storage and retention periods</h2>
            <p>8.1. Personal data are stored for the time necessary to achieve processing purposes and in accordance with Russian legislation.</p>
            <p>8.2. Example retention periods:</p>
            <ul>
              <li>account data — until account deletion by the user;</li>
              <li>access logs and service logs — up to 1 year.</li>
            </ul>
          </section>

          <section id="security">
            <h2>9. Data security</h2>
            <p>9.1. The administration implements organizational and technical measures to protect personal data: password hashing, access restrictions, HTTPS, backups, etc.</p>
            <p>9.2. Absolute security cannot be guaranteed. In case of a data breach the Operator will notify affected users and competent authorities as required by law.</p>
          </section>

          <section id="rights">
            <h2>10. Data subject rights</h2>
            <p>10.1. The user has the right to:</p>
            <ul>
              <li>obtain information about processing of their personal data;</li>
              <li>request correction, blocking or deletion of data;</li>
              <li>withdraw consent to processing (if processing is based on consent);</li>
              <li>request restriction or object to processing where applicable;</li>
              <li>file a complaint with the competent authority (Roskomnadzor).</li>
            </ul>
            <p>10.2. To exercise these rights, the user may send a request to: openclaw.ai@ya.ru. Requests are processed in accordance with the law.</p>
          </section>

          <section id="cross">
            <h2>11. Cross‑border transfers</h2>
            <p>11.1. If necessary, personal data may be transferred outside the Russian Federation to service providers. In such cases, the Operator ensures protection measures and compliance with applicable law.</p>
          </section>

          <section id="changes">
            <h2>12. Changes to the Policy</h2>
            <p>12.1. The Operator reserves the right to amend the Policy. The current version is published at: https://openclaw.ai.ru.pro/policy (or another URL).</p>
            <p>12.2. Continued use of the Site after changes constitutes acceptance of the new version.</p>
          </section>

          <aside id="contacts" className="contacts">
            <h3>Contacts</h3>
            <p>For questions about personal data processing and to exercise rights contact:</p>
            <ul>
              <li>e‑mail: <a href="mailto:openclaw.ai@ya.ru">openclaw.ai@ya.ru</a></li>
            </ul>
          </aside>

          <p style={{marginTop:20}}><Link href="/en">← Home</Link></p>
        </article>

        <style jsx>{`
          :root { scroll-behavior: smooth; }
          .policy { max-width: 900px; margin: 18px auto; padding: 0 18px; }
          .policy-header { margin-bottom: 12px; }
          .toc { background: #fff; border:1px solid #eee; padding: 14px; margin: 8px 0 18px; border-radius: 8px; box-shadow: 0 1px 2px rgba(20,20,20,0.03); }
          .toc strong { display:block; margin-bottom:8px; font-size:15px }
          .toc ul { margin: 0; padding-left: 18px; list-style: disc; }
          .toc li { margin: 6px 0; }
          .toc a { color: #333; text-decoration: none; padding:4px 6px; border-radius:4px; display:inline-block; font-size:14px }
          .toc a:hover { background: #f3f4f6; }
          .policy h2 { margin-top: 18px; }
          .policy ul { margin: 8px 0 16px; padding-left: 20px; }
          .contacts { background:#fbfbfb; border:1px solid #eee; padding:12px; margin:18px 0; border-radius:6px }
          .sr-only { position: absolute; left: -9999px; top: auto; width: 1px; height: 1px; overflow: hidden; }
          @media (max-width: 640px) { .policy { padding: 0 12px } .toc ul { flex-direction:column; gap:6px } }
        `}</style>
      </main>
    </div>
  )
}
