import Link from 'next/link'
import Header from '../../components/Header'

export default function RuTerms(){
  return (
    <div>
      <Header/>
      <main className="container">
        <article className="policy">
          <a className="sr-only" id="top" />
          <header className="policy-header">
            <h1>Пользовательское соглашение</h1>
            <p className="muted"><time dateTime="2026-04-23">Дата вступления в силу: 23 апреля 2026 г.</time></p>
          </header>

          <nav className="toc" aria-label="Оглавление">
            <strong>Оглавление</strong>
            <ul>
              <li><a href="#intro">Введение</a></li>
              <li><a href="#definitions">Термины</a></li>
              <li><a href="#account">Регистрация и аккаунт</a></li>
              <li><a href="#use">Использование сервиса</a></li>
              <li><a href="#prohibited">Запрещённые действия</a></li>
              <li><a href="#content">Контент и права</a></li>
              <li><a href="#termination">Приостановка и прекращение</a></li>
              <li><a href="#liability">Ограничение ответственности</a></li>
              <li><a href="#changes">Изменения условий</a></li>
              <li><a href="#law">Применимое право</a></li>
              <li><a href="#contacts">Контакты</a></li>
            </ul>
          </nav>

          <section id="intro">
            <h2>Введение</h2>
            <p>Настоящее Пользовательское соглашение (далее — Соглашение) определяет условия использования веб‑сайта и сервиса, предоставляемого ООО «Опенкло» (далее — Оператор). Используя Сайт, вы подтверждаете, что принимаете условия Соглашения.</p>
          </section>

          <section id="definitions">
            <h2>Термины</h2>
            <p>В настоящем Соглашении термины используются в следующем значении:</p>
            <ul>
              <li><strong>Сайт / Сервис</strong> — веб‑интерфейс и сопутствующие сервисы, доступные по адресу проекта.</li>
              <li><strong>Пользователь</strong> — любое физическое лицо, использующее Сайт.</li>
              <li><strong>Контент</strong> — тексты, изображения, файлы и иная информация, размещаемая на Сайте или отправляемая Пользователем через Сайт.</li>
            </ul>
          </section>

          <section id="account">
            <h2>Регистрация и аккаунт</h2>
            <p>Для доступа к некоторым функциям Сервиса может потребоваться регистрация. При регистрации вы обязуетесь указывать корректные данные и сохранять конфиденциальность учётных данных.</p>
            <p>Вы отвечаете за все действия, выполненные под вашим аккаунтом. В случае подозрения об утечке пароля вы обязаны немедленно изменить пароль и уведомить службу поддержки.</p>
          </section>

          <section id="use">
            <h2>Использование сервиса</h2>
            <p>Сервис предоставляется для личного и/или коммерческого использования в соответствии с описанием функционала. Пользователь обязуется использовать Сервис в рамках применимого законодательства и настоящего Соглашения.</p>
          </section>

          <section id="prohibited">
            <h2>Запрещённые действия</h2>
            <p>Запрещается использовать Сайт для:</p>
            <ul>
              <li>нарушения прав других лиц;</li>
              <li>распространения вредоносного ПО, спама или фишинга;</li>
              <li>публикации незаконного, клеветнического, оскорбительного или иного незаконного контента;</li>
              <li>попыток несанкционированного доступа к инфраструктуре Сайта.</li>
            </ul>
          </section>

          <section id="content">
            <h2>Контент и права</h2>
            <p>Все материалы, размещённые на Сайте, являются собственностью Оператора или используются на законных основаниях. Пользователь сохраняет права на собственный загружаемый контент, при этом предоставляет Оператору неисключительную, бесплатную лицензию на использование, воспроизведение и отображение такого контента в рамках работы Сервиса.</p>
          </section>

          <section id="termination">
            <h2>Приостановка и прекращение</h2>
            <p>Оператор вправе приостанавливать или прекращать доступ к Сайту в случае нарушения Соглашения, по техническим причинам или в иных случаях по усмотрению Оператора с предварительным уведомлением, если это возможно.</p>
          </section>

          <section id="liability">
            <h2>Ограничение ответственности</h2>
            <p>Сервис предоставляется «как есть». Оператор не гарантирует бесперебойную работу, полную точность контента или безопасность от всех видов угроз. В максимально допустимой законом мере Оператор не несёт ответственности за косвенный ущерб, упущенную выгоду или иные убытки, возникшие в связи с использованием Сервиса.</p>
          </section>

          <section id="changes">
            <h2>Изменения условий</h2>
            <p>Оператор оставляет за собой право вносить изменения в настоящее Соглашение. Актуальная версия публикуется на Сайте. Продолжение использования Сайта после публикации изменений считается принятием новой редакции Соглашения.</p>
          </section>

          <section id="law">
            <h2>Применимое право</h2>
            <p>Настоящее Соглашение регулируется законодательством Российской Федерации. Все споры решаются в порядке, предусмотренном законодательством.</p>
          </section>

          <aside id="contacts" className="contacts">
            <h3>Контакты</h3>
            <p>По вопросам, связанным с Соглашением, обращайтесь: <a href="mailto:openclaw.ai@ya.ru">openclaw.ai@ya.ru</a></p>
          </aside>

          <p style={{marginTop:20}}><Link href="/ru">← На главную</Link></p>
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
          @media (max-width: 640px) { .policy { padding: 0 12px } .toc ul { flex-direction:column; gap:6px } }
        `}</style>

      </main>
    </div>
  )
}
