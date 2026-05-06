import Link from 'next/link'
import Header from 'components/Header'

export default function RuHome(){
  return (
    <div>
      <Header/>
      <main className="container">
        <section className="hero">
          <div className="hero-inner">
            <h1 className="hero-title">Твоя команда — твоя суперсила</h1>
            <p className="hero-sub">Собери команду мечты, кастомизируй цифровых помощников и начни зарабатывать с искусственным интеллектом</p>
          </div>
        </section>

        <div className="hero-cta">
          <div style={{display:'flex',gap:12,justifyContent:'center',flexWrap:'wrap'}}>
            <Link href="/ru/dashboard" className="button">Начни прямо сейчас — это бесплатно</Link>
          </div>
        </div>

        <section className="features" aria-label="Преимущества">
          <div className="feature-card">
            <strong>Работает 24/7</strong>
            <div className="muted">Агент выполняет простые и рутинные задачи, пока ты занят.</div>
          </div>
          <div className="feature-card">
            <strong>Много моделей</strong>
            <div className="muted">Поддержка разных моделей: можно выбирать баланс скорости и качества.</div>
          </div>
          <div className="feature-card">
            <strong>Управляет браузером</strong>
            <div className="muted">Открывает сайты, заполняет формы, делает покупки по твоей команде.</div>
          </div>
          <div className="feature-card">
            <strong>Голос и распознавание</strong>
            <div className="muted">Говори с агентом и слушай ответы — удобно с мобильного.</div>
          </div>
          <div className="feature-card">
            <strong>Память</strong>
            <div className="muted">Агент помнит контекст беседы и предыдущие команды.</div>
          </div>
          <div className="feature-card">
            <strong>Суб‑агенты</strong>
            <div className="muted">Делит работу на подзадачи и выполняет их параллельно.</div>
          </div>
        </section>


        <div style={{height:12}} />
        <section className="what" aria-label="Что внутри" style={{marginBottom:36, position: 'relative', top: 12}}>
          <h3 style={{marginBottom:12}}>Что внутри</h3>

          <div className="grid-cards">
            <div className="card">
              <div className="icon" aria-hidden>🛠️</div>
              <div className="card-body">Понятная и пошаговая инструкция по установке и запуску</div>
            </div>

            <div className="card">
              <div className="icon" aria-hidden>📦</div>
              <div className="card-body">Простые примеры и готовые шаблоны сценариев применения</div>
            </div>

            <div className="card">
              <div className="icon" aria-hidden>🧠</div>
              <div className="card-body">Профессиональные лайфхаки, углублённые рецепты настройки и конфигурации</div>
            </div>

            <div className="card">
              <div className="icon" aria-hidden>🔗</div>
              <div className="card-body">Интеграции с популярными сервисами, апгрейды дэшборда и персонализация агентов</div>
            </div>

            <div className="card">
              <div className="icon" aria-hidden>🎯</div>
              <div className="card-body">Правильные запросы, детальные разборы, прокачка навыков</div>
            </div>

            <div className="card">
              <div className="icon" aria-hidden>📚</div>
              <div className="card-body">Обновляемый контент и структурируемые модули обучения</div>
            </div>
          </div>

          <style jsx>{`
            .grid-cards{display:grid;grid-template-columns:repeat(1,1fr);gap:14px;margin-top:12px}
            @media(min-width:700px){ .grid-cards{grid-template-columns:repeat(2,1fr)} }
            @media(min-width:1100px){ .grid-cards{grid-template-columns:repeat(3,1fr)} }
            .card{display:flex;flex-direction:column;align-items:center;justify-content:center;gap:10px;padding:20px;min-height:120px;border-radius:12px;background:var(--surface);box-shadow:0 6px 18px rgba(2,6,23,0.04);border:1px solid rgba(15,23,42,0.04);min-width:200px;max-width:260px;text-align:center}
            .icon{font-size:32px;line-height:1;margin:0}
            .card-body{font-size:0.98rem;color:var(--text);text-align:center}
          `}</style>
        </section>

        <div className="what-cta" style={{display:'flex',justifyContent:'center',marginTop:18,marginBottom:18}}>
          <Link href="/ru/dashboard" className="button">Начни прямо сейчас — это бесплатно</Link>
        </div>

        <section className="models" aria-label="Модели">
          <h3 style={{textAlign: 'center'}}>Популярные модели</h3>
          <div style={{display:'flex',justifyContent:'center',marginTop:-12}}>
            <img src="/images/logos.png" alt="neurologos collage" className="popular-illustration" style={{maxWidth:'100%',height:'auto',background:'transparent'}} />
          </div>
        </section>

        <div className="integrations-cta" style={{display:'flex',flexDirection:'column',alignItems:'center',gap:12,justifyContent:'center',marginTop:12, marginBottom:6,maxWidth:1160,marginLeft:'auto',marginRight:'auto',padding:'0 18px'}}>
          <p className="integrations-lead" style={{textAlign:'justify',maxWidth:1080,lineHeight:1.6,color:'var(--muted)',margin:0,textAlignLast:'center'}}>
            Твой цифровой ассистент помогает переводить рутину в автоматические процессы, может освободить вам кучу личного времени и принести приличный доход. При правильной настройке он экономит время и делает рабочие процессы предсказуемыми. Но это не «волшебная кнопка»: нужен контроль, безопасность и понимание, какие задачи действительно стоит автоматизировать.
          </p>

          <div style={{display:'flex',gap:12,justifyContent:'center',flexWrap:'wrap'}}>
            <Link href="/ru/dashboard" className="button">Начни прямо сейчас — это бесплатно</Link>
          </div>
        </div>

        <section className="integrations" aria-label="Интеграции" style={{marginTop:28}}>
          <h3 style={{textAlign:'center'}}>Программные интеграции</h3>

          <ul className="integration-compact" style={{marginTop:14}}>
            <li className="integration-item">
              <span className="integration-icon" role="img" aria-label="Чат в мессенджерах">
                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width="18" height="18" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"><path d="M21 15a2 2 0 0 1-2 2H7l-4 4V5a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2z"/></svg>
              </span>
              <span className="integration-label">Общается в мессенджерах</span>
            </li>

            <li className="integration-item">
              <span className="integration-icon" role="img" aria-label="Почта и голосовой ответ">
                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width="18" height="18" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"><path d="M22 12v6a2 2 0 0 1-2 2H4a2 2 0 0 1-2-2V6a2 2 0 0 1 2-2h16"/><path d="M22 6l-10 7L2 6"/></svg>
              </span>
              <span className="integration-label">Проверяет почту и может ответить голосом</span>
            </li>

            <li className="integration-item">
              <span className="integration-icon" role="img" aria-label="Создаёт сайты и программы">
                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width="18" height="18" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"><rect x="2" y="7" width="20" height="14" rx="2"/><path d="M8 3h8v4H8z"/></svg>
              </span>
              <span className="integration-label">Пишет сайты и программы</span>
            </li>

            <li className="integration-item">
              <span className="integration-icon" role="img" aria-label="Анализ видео">
                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width="18" height="18" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"><rect x="2" y="6" width="20" height="12" rx="2"/><path d="M10 9l6 3-6 3z"/></svg>
              </span>
              <span className="integration-label">Смотрит видео и делает анализ</span>
            </li>

            <li className="integration-item">
              <span className="integration-icon" role="img" aria-label="Файлы и таблицы">
                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width="18" height="18" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"><path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z"/><path d="M14 2v6h6"/></svg>
              </span>
              <span className="integration-label">Работает с файлами и таблицами</span>
            </li>

            <li className="integration-item">
              <span className="integration-icon" role="img" aria-label="Генерация фото и видео">
                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width="18" height="18" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"><rect x="3" y="3" width="18" height="14" rx="2"/><circle cx="8.5" cy="8.5" r="1.5"/><path d="M21 21l-5-5-4 4-6-6-1 1"/></svg>
              </span>
              <span className="integration-label">Генерирует фото и видео контент</span>
            </li>

            <li className="integration-item">
              <span className="integration-icon" role="img" aria-label="Календарь и напоминания">
                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width="18" height="18" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"><rect x="3" y="4" width="18" height="18" rx="2"/><path d="M16 2v4M8 2v4M3 10h18"/><path d="M12 13v5"/><path d="M14.5 16.5l-3-1"/></svg>
              </span>
              <span className="integration-label">Напоминает и следит за календарем</span>
            </li>

            <li className="integration-item">
              <span className="integration-icon" role="img" aria-label="Заметки и расписание">
                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width="18" height="18" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"><path d="M3 7h18"/><path d="M5 11h14"/><path d="M7 15h10"/></svg>
              </span>
              <span className="integration-label">Составляет заметки и расписание</span>
            </li>

            <li className="integration-item">
              <span className="integration-icon" role="img" aria-label="Глубокие исследования">
                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width="18" height="18" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"><circle cx="11" cy="11" r="6"/><path d="M21 21l-4.35-4.35"/></svg>
              </span>
              <span className="integration-label">Проводит глубокие исследования</span>
            </li>

            <li className="integration-item">
              <span className="integration-icon" role="img" aria-label="Новости и мониторинг">
                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width="18" height="18" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"><rect x="3" y="4" width="18" height="16" rx="2"/><path d="M7 8h10M7 12h6"/></svg>
              </span>
              <span className="integration-label">Следит за новостями и держит руку на пульсе</span>
            </li>

            <li className="integration-item">
              <span className="integration-icon" role="img" aria-label="Финансовые и бизнес‑планы">
                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width="18" height="18" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"><path d="M3 3v18h18"/><path d="M9 17V9"/><path d="M13 17v-4"/><path d="M17 17v-7"/></svg>
              </span>
              <span className="integration-label">Разработает финансовый и бизнес‑план</span>
            </li>

            <li className="integration-item">
              <span className="integration-icon" role="img" aria-label="И многое другое">
                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width="18" height="18" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"><path d="M12 2l1.7 4.3L18 8l-4 2.9L15.4 16 12 13.7 8.6 16 10 10.9 6 8l4.3-1.7L12 2z"/></svg>
              </span>
              <span className="integration-label">и многое другое</span>
            </li>
          </ul>

          <style jsx>{`
            .integration-compact{display:grid;grid-template-columns:repeat(1,1fr);gap:8px}
            @media(min-width:700px){ .integration-compact{grid-template-columns:repeat(2,1fr)} }
            @media(min-width:1100px){ .integration-compact{grid-template-columns:repeat(3,1fr)} }
            .integration-item{display:flex;align-items:center;gap:10px;padding:6px 8px;border-radius:8px}
            .integration-icon{width:32px;height:32px;display:inline-flex;align-items:center;justify-content:center;border-radius:8px;background:var(--surface);font-size:14px}
            .integration-label{font-weight:600;font-size:0.95rem}
          `}</style>
        </section>

        <footer className="muted" style={{textAlign:'center'}}>
          <div style={{display:'flex',justifyContent:'center',gap:12,marginBottom:6}}>
            <Link href="/ru/terms" className="muted">Пользовательское соглашение</Link>
            <Link href="/ru/privacy" className="muted">Политика конфиденциальности</Link>
            <Link href="/ru/offer" className="muted">Оферта</Link>
          </div>
          <div style={{fontSize: '0.95em'}}>© {new Date().getFullYear()} All rights reserved</div>
        </footer>
      </main>
    </div>
  )
}
