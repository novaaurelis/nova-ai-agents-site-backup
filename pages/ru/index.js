import Link from 'next/link'
import Header from '../../components/Header'

export default function RuHome(){
  return (
    <div>
      <Header/>
      <main className="container">
        <h1>Создавай выдающееся прямо сейчас</h1>
        <p className="lead">Собирай, запускай и кастомизируй персональных AI‑агентов: быстрый старт, готовые сценарии и полезные советы.</p>

        <section className="features">
          <h2>Почему OpenClaw</h2>
          <ul>
            <li>Простая установка: пошаговая инструкция для любой машины</li>
            <li>Готовые сценарии: копируй и запускай</li>
            <li>Расширяемость: плагины и продвинутые настройки</li>
          </ul>
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

        <footer className="muted">Вопросы? Пиши: hello@opn-claw.pro</footer>
      </main>
    </div>
  )
}
