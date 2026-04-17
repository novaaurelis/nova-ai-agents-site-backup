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



        <section className="what">
          <h3>Что внутри</h3>
          <ul>
            <li>Бесплатная регистрация и полная инструкция по установке</li>
            <li>Примеры сообщества и базовый FAQ</li>
            <li>Платные модули (от 299 ₽) с продвинутыми конфигурациями — скоро</li>
          </ul>
        </section>

        <div className="cta">
          <Link href="/ru/dashboard" className="button">Зарегистрироваться — бесплатно</Link>
        </div>

        <footer className="muted">© {new Date().getFullYear()} All rights reserved</footer>
      </main>
    </div>
  )
}
