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
          <Link href="/ru/dashboard" className="button">Начни прямо сейчас — это бесплатно</Link>
        </div>

        <section className="features" aria-label="Преимущества">
          <div className="feature-card">
            <strong>Работает 24/7</strong>
            <div className="muted">Агент выполняет задачи пока ты занят</div>
          </div>
          <div className="feature-card">
            <strong>Множество моделей</strong>
            <div className="muted">Поддержка сотен моделей — выбери подходящую</div>
          </div>
          <div className="feature-card">
            <strong>Управляет браузером</strong>
            <div className="muted">Открывает сайты, заполняет формы, делает покупки</div>
          </div>
          <div className="feature-card">
            <strong>Голос и распознавание</strong>
            <div className="muted">Говори с агентом и слушай ответы</div>
          </div>
        </section>

        <section className="demo" aria-label="Пример работы" >
          <h3>Пример: купи билеты</h3>
          <div className="chat-card">
            <div className="chat-line"><strong>Ты:</strong> Купи два билета на субботу вечером</div>
            <div className="chat-line"><strong>Агент:</strong> Окей. Открываю сайт, авторизуйся и напиши «готово»</div>
            <div className="chat-line muted"><em>Пользователь авторизовался — агент оформил билеты</em></div>
            <div className="chat-line"><strong>Агент:</strong> Готово — билеты куплены. Код: K-XXXX</div>
          </div>
        </section>

        <section className="what" aria-label="Что внутри">
          <h3>Что внутри</h3>
          <ul>
            <li>Бесплатная регистрация и понятная инструкция по установке</li>
            <li>Простые примеры и шаблоны сценариев</li>
            <li>Платные модули (от 299 ₽) — углублённые рецепты и конфиги</li>
          </ul>
        </section>

        <section className="models" aria-label="Модели">
          <h3>Поддерживаемые модели</h3>
          <div className="model-grid">
            <div className="model">GLM</div>
            <div className="model">Gemini</div>
            <div className="model">GPT‑5</div>
            <div className="model">Claude</div>
            <div className="model">Grok</div>
            <div className="model">и др. (300+)</div>
          </div>
        </section>

        <footer className="muted">© {new Date().getFullYear()} All rights reserved</footer>
      </main>
    </div>
  )
}
