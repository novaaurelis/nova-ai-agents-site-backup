import Link from 'next/link'
import Header from '../../components/Header'

export default function RuHome(){
  return (
    <div>
      <Header/>
      <main className="container">
        <section className="hero">
          <div className="hero-inner">
            <h1 className="hero-title">Твоя команда — твоя суперсила</h1>
            <p className="hero-sub">Собирай, запускай и кастомизируй персональных AI‑агентов: быстрый старт, готовые сценарии и полезные советы</p>
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
        <section className="what" aria-label="Что внутри" style={{marginBottom:12, position: 'relative', top: 12}}>
          <h3 style={{marginBottom:6}}>Что внутри</h3>
          <ul style={{marginTop:6}}>
            <li>Бесплатная регистрация — понятная инструкция по установке</li>
            <li>Простые примеры и готовые шаблоны сценариев применения</li>
            <li>Профессиональные лайфхаки, углублённые рецепты и конфиги</li>
            <li>Интерактивные пошаговые уроки для быстрого старта</li>
            <li>Готовые шаблоны интеграций (Telegram, Webhook, API)</li>
            <li>Поддержка и сообщество — обсуждения, советы и обмен конфигами</li>
          </ul>
        </section>

        <section className="models" aria-label="Модели">
          <h3 style={{textAlign: 'center'}}>Популярные модели</h3>
          <div style={{display:'flex',justifyContent:'center',marginTop:-12}}>
            <img src="/images/logos.png" alt="neurologos collage" className="popular-illustration" style={{maxWidth:'100%',height:'auto',background:'transparent'}} />
          </div>
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
