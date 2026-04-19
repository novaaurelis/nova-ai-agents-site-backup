import Link from 'next/link'
import Header from '../../components/Header'

export default function EnPrivacy(){
  return (
    <div>
      <Header/>
      <main className="container">
        <h1>Privacy Policy</h1>
        <p className="muted">Publication date: April 19, 2026 — effective from this date.</p>

        <h2>1. General provisions</h2>
        <p>1.1. This Privacy Policy (the "Policy") defines the procedures for collecting, storing, using and disclosing personal data of users of the website (the "Site").</p>
        <p>1.2. The personal data operator: LLC "Openclaw" (the "Operator"). Operator contact: opn-claw@yandex.ru.</p>
        <p>1.3. The Policy is developed in accordance with the Federal Law No. 152‑FZ of 27.07.2006 "On Personal Data" and other applicable Russian legislation.</p>
        <p>1.4. Registering on the Site or otherwise using the Site means that the User agrees to the terms of this Policy.</p>

        <h2>2. Definitions</h2>
        <p>2.1. "Personal data" means any information relating directly or indirectly to an identified or identifiable natural person.</p>
        <p>2.2. "Processing of personal data" means any action (operation) with personal data, including collection, recording, systematization, accumulation, storage, clarification, extraction, use, transfer, anonymization and destruction.</p>
        <p>2.3. "Interaction channel" means messengers, web interface and other technical channels through which an AI agent can interact with users.</p>

        <h2>3. Which data are collected</h2>
        <p>3.1. Data provided during registration and use of the service:</p>
        <ul>
          <li>email address;</li>
          <li>Telegram user identifier (if used);</li>
          <li>password (stored hashed).</li>
        </ul>
        <p>3.2. Data collected automatically:</p>
        <ul>
          <li>IP address;</li>
          <li>device and browser type;</li>
          <li>access time and duration;</li>
          <li>other technical metadata (e.g. session identifiers).</li>
        </ul>
        <p>3.3. Additionally, data provided by the user when contacting support or using functionality (messages, uploaded files, etc.) may be collected. By uploading files the user confirms they hold the necessary rights to such content.</p>

        <h2>4. Purposes of personal data processing</h2>
        <p>4.1. Personal data are processed to:</p>
        <ul>
          <li>provide and support the service;</li>
          <li>identify and authenticate the user;</li>
          <li>communicate with the user (notifications, technical support);</li>
          <li>improve service quality and analytics;</li>
          <li>fulfill legal obligations.</li>
        </ul>

        <h2>5. Legal grounds for processing</h2>
        <p>5.1. Legal bases for processing include:</p>
        <ul>
          <li>the User's consent (Articles 24–26 of Law No. 152‑FZ);</li>
          <li>performance of a contract or actions at the User's request;</li>
          <li>fulfillment of the Operator's legal obligations;</li>
          <li>the Operator's legitimate interests (to the extent they do not infringe the rights of the data subject).</li>
        </ul>

        <h2>6. Cookies and tracking technologies</h2>
        <p>6.1. The Site uses:</p>
        <ul>
          <li>session cookies — for authorization and session maintenance;</li>
          <li>analytics cookies — to collect anonymized visit statistics (for example, Yandex.Metrica and/or Google Analytics).</li>
        </ul>
        <p>6.2. The user can disable cookies in the browser settings, but some features of the Service may become unavailable.</p>
        <p>6.3. Third‑party scripts/plugins (CDNs, analytics) may operate on the Site — they may collect data according to their own policies.</p>

        <h2>7. Disclosure to third parties and processors</h2>
        <p>7.1. The Operator does not sell personal data. Disclosure is possible only in the following cases:</p>
        <ul>
          <li>in response to lawful requests of authorized bodies;</li>
          <li>to contractors and service providers (hosting, analytics, mailing) to the extent necessary to provide services; such contractors are required to ensure confidentiality and data protection.</li>
        </ul>
        <p>7.2. Personal data are not disclosed to third parties for advertising purposes without separate consent.</p>

        <h2>8. Storage and retention periods</h2>
        <p>8.1. Personal data are stored for the time necessary to achieve processing purposes and in accordance with Russian legislation.</p>
        <p>8.2. Example retention periods:</p>
        <ul>
          <li>account data — until account deletion by the user;</li>
          <li>access logs and service logs — up to 1 year.</li>
        </ul>

        <h2>9. Data security</h2>
        <p>9.1. The administration implements organizational and technical measures to protect personal data: password hashing, access restrictions, HTTPS, backups, etc.</p>
        <p>9.2. Absolute security cannot be guaranteed. In case of a data breach the Operator will notify affected users and competent authorities as required by law.</p>

        <h2>10. Data subject rights</h2>
        <p>10.1. The user has the right to:</p>
        <ul>
          <li>obtain information about processing of their personal data;</li>
          <li>request correction, blocking or deletion of data;</li>
          <li>withdraw consent to processing (if processing is based on consent);</li>
          <li>request restriction or object to processing where applicable;</li>
          <li>file a complaint with the competent authority (Roskomnadzor).</li>
        </ul>
        <p>10.2. To exercise these rights, the user may send a request to: opn-claw@yandex.ru. Requests are processed in accordance with the law.</p>

        <h2>11. Cross‑border transfers</h2>
        <p>11.1. If necessary, personal data may be transferred outside the Russian Federation to service providers. In such cases, the Operator ensures protection measures and compliance with applicable law.</p>

        <h2>12. Changes to the Policy</h2>
        <p>12.1. The Operator reserves the right to amend the Policy. The current version is published at: https://opn-claw.pro/policy (or another URL).</p>
        <p>12.2. Continued use of the Site after changes constitutes acceptance of the new version.</p>

        <p style={{marginTop:20}}><Link href="/en">← Home</Link></p>
      </main>
    </div>
  )
}
