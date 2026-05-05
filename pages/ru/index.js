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
            .card{display:flex;flex-direction:column;align-items:center;justify-content:center;gap:10px;padding:20px;min-height:120px;border-radius:12px;background:var(--surface);box-shadow:0 6px 18px rgba(2,6,23,0.04);border:1px solid rgba(15,23,42,0.04)}
            .icon{font-size:32px;line-height:1;margin:0}
            .card-body{font-size:0.98rem;color:var(--text);text-align:center}
          `}</style>
        </section>

        <section className="models" aria-label="Модели">
          <h3 style={{textAlign: 'center'}}>Популярные модели</h3>
          <div style={{display:'flex',justifyContent:'center',marginTop:-12}}>
            <img src="/images/logos.png" alt="neurologos collage" className="popular-illustration" style={{maxWidth:'100%',height:'auto',background:'transparent'}} />
          </div>
        </section>

        <section className="integrations" aria-label="Интеграции" style={{marginTop:28}}>
          <h3 style={{textAlign:'center'}}>Программные интеграции</h3>
          <div style={{textAlign:'center',color:'var(--muted)',marginTop:6}}>Агент взаимодействует с тысячами сервисов</div>

          <div className="integration-rows" style={{marginTop:18}}>
            <div className="integration-row">
              <div className="icon">💬</div>
              <div className="content"><h4>Общается в мессенджерах</h4></div>
            </div>

            <div className="integration-row">
              <div className="icon">✉️</div>
              <div className="content"><h4>Проверяет почту и может ответить голосом</h4></div>
            </div>

            <div className="integration-row">
              <div className="icon">💻</div>
              <div className="content"><h4>Пишет сайты и программы</h4></div>
            </div>

            <div className="integration-row">
              <div className="icon">🎞️</div>
              <div className="content"><h4>Смотрит видео и делает анализ</h4></div>
            </div>

            <div className="integration-row">
              <div className="icon">📁</div>
              <div className="content"><h4>Работает с файлами и таблицами</h4></div>
            </div>

            <div className="integration-row">
              <div className="icon">🖼️</div>
              <div className="content"><h4>Генерирует фото и видео контент</h4></div>
            </div>

            <div className="integration-row">
              <div className="icon">⏰</div>
              <div className="content"><h4>Напоминает и следит за календарем</h4></div>
            </div>

            <div className="integration-row">
              <div className="icon">📝</div>
              <div className="content"><h4>Составляет заметки и расписание</h4></div>
            </div>

            <div className="integration-row">
              <div className="icon">🔎</div>
              <div className="content"><h4>Проводит глубокие исследования</h4></div>
            </div>

            <div className="integration-row">
              <div className="icon">📰</div>
              <div className="content"><h4>Следит за новостями и держит руку на пульсе</h4></div>
            </div>

            <div className="integration-row">
              <div className="icon">📊</div>
              <div className="content"><h4>Разработает финансовый и бизнес‑план</h4></div>
            </div>

            <div className="integration-row">
              <div className="icon">✨</div>
              <div className="content"><h4>и многое другое</h4></div>
            </div>
          </div>

          <style jsx>{`
            .integration-rows{display:flex;flex-direction:column;gap:14px;margin-top:12px}
            .integration-row{display:flex;align-items:center;gap:18px;padding:16px;border-radius:12px;background:linear-gradient(180deg, rgba(255,255,255,0.9), rgba(250,252,255,0.8));border:1px solid rgba(15,23,42,0.04)}
            .integration-row:nth-child(even){flex-direction:row-reverse}
            .integration-row .icon{font-size:28px;width:56px;height:56px;display:flex;align-items:center;justify-content:center;border-radius:10px;background:var(--surface);box-shadow:0 6px 18px rgba(2,6,23,0.04)}
            .integration-row .content h4{margin:0;font-size:1.05rem}
            @media(max-width:700px){ .integration-row{flex-direction:row;align-items:flex-start} .integration-row:nth-child(even){flex-direction:row} }
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
