import Link from 'next/link'
import Header from '../../components/Header'

export default function EnOffer(){
  return (
    <div>
      <Header/>
      <main className="container">
        <article className="policy">
          <a className="sr-only" id="top" />
          <header className="policy-header">
            <h1>Public Offer</h1>
            <p className="muted"><time dateTime="2026-04-19">Publication date: April 19, 2026</time> — effective from this date.</p>
          </header>

          <nav className="toc" aria-label="Contents">
            <strong>Contents</strong>
            <ul>
              <li><a href="#subject">Subject of the offer</a></li>
              <li><a href="#acceptance">Acceptance</a></li>
              <li><a href="#price">Services and payment</a></li>
              <li><a href="#delivery">Service provision</a></li>
              <li><a href="#warranty">Warranties and refunds</a></li>
              <li><a href="#liability">Liability</a></li>
              <li><a href="#personal">Personal data</a></li>
              <li><a href="#force">Force majeure</a></li>
              <li><a href="#termination">Termination</a></li>
              <li><a href="#law">Governing law</a></li>
              <li><a href="#contacts">Contacts</a></li>
            </ul>
          </nav>

          <section id="subject">
            <h2>1. Subject of the offer</h2>
            <p>1.1. This public offer (the "Offer") is addressed to any natural or legal person (the "Offeree") and contains LLC "Openclaw"'s (the "Provider") proposal to provide access to the web service and related services (the "Services") on the terms set out in this document.</p>
          </section>

          <section id="acceptance">
            <h2>2. Acceptance</h2>
            <p>2.1. Acceptance occurs upon registration on the Site or actual use of the Services by the Offeree. Acceptance is deemed complete and unconditional unless the Offeree notifies the Provider of refusal in writing before beginning to use the Services.</p>
          </section>

          <section id="price">
            <h2>3. Services and payment</h2>
            <p>3.1. Information on tariffs, prices and payment terms is posted on the Site and/or provided to the Offeree when ordering a service.</p>
            <p>3.2. Payment is made using the methods available on the Site. All payments are considered confirmed upon receipt by the Provider.</p>
            <p>3.3. Refund rules are set by tariff terms and applicable law.</p>
          </section>

          <section id="delivery">
            <h2>4. Service provision</h2>
            <p>4.1. The Provider provides access to the Services remotely via the web interface. The Provider takes reasonable efforts to ensure availability but does not guarantee uninterrupted operation.</p>
            <p>4.2. The Provider may temporarily suspend Services for maintenance with prior notice where possible.</p>
          </section>

          <section id="warranty">
            <h2>5. Warranties and refunds</h2>
            <p>5.1. Services are provided "as is" without additional warranties except as expressly set out in this Offer.</p>
            <p>5.2. The Offeree may withdraw from Services as set out on the Site and receive refunds where applicable under tariffs and law.</p>
          </section>

          <section id="liability">
            <h2>6. Liability</h2>
            <p>6.1. The parties are liable in accordance with the law. The Provider is not liable for indirect damages, lost profits or consequences arising from improper use of the Service by the client.</p>
            <p>6.2. The Provider's total liability under this Offer shall not exceed amounts actually received by the Provider from the Offeree in the 6 (six) months preceding the event giving rise to the loss.</p>
          </section>

          <section id="personal">
            <h2>7. Personal data</h2>
            <p>7.1. Personal data processing is carried out in accordance with the Privacy Policy posted on the Site. Registration and use of the Service constitute consent to personal data processing under the Policy.</p>
          </section>

          <section id="force">
            <h2>8. Force majeure</h2>
            <p>8.1. Parties are released from liability for partial or total non‑performance due to force majeure upon timely notice to the other party.</p>
          </section>

          <section id="termination">
            <h2>9. Termination</h2>
            <p>9.1. The Offer is effective until revoked by the Provider. The Provider may terminate Services in case of breach of the Offer by the Offeree.</p>
          </section>

          <section id="law">
            <h2>10. Governing law</h2>
            <p>10.1. This Offer is governed by the laws of the Russian Federation.</p>
          </section>

          <aside id="contacts" className="contacts">
            <h3>Contacts</h3>
            <p>For questions related to the Offer contact: <a href="mailto:opn-claw@yandex.ru">opn-claw@yandex.ru</a></p>
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
          @media (max-width: 640px) { .policy { padding: 0 12px } }
        `}</style>

      </main>
    </div>
  )
}
