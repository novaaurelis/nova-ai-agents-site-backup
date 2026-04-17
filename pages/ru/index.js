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


        <div style={{height:24}} />
        <section className="what" aria-label="Что внутри">
          <h3>Что внутри</h3>
          <ul>
            <li>Бесплатная регистрация и понятная инструкция по установке</li>
            <li>Простые примеры и готовые шаблоны сценариев</li>
            <li>Платные модули (от 299 ₽) — углублённые рецепты и конфиги (по желанию)</li>
          </ul>
        </section>

        <section className="models" aria-label="Модели">
          <h3 style={{textAlign: 'center'}}>Популярные модели</h3>
          <div className="model-grid">
            <div className="model">GLM</div>
            <div className="model">Gemini</div>
            <div className="model">GPT‑5</div>
            <div className="model">Claude</div>
            <div className="model">Grok</div>
            <div className="model">и другие — 300+ вариантов</div>
          </div>
        </section>

        <footer className="muted">© {new Date().getFullYear()} All rights reserved</footer>
      </main>
    </div>
  )
}
