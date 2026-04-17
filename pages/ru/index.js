import Link from 'next/link'
import Header from '../../components/Header'

export default function RuHome(){
  return (
    <div>
      <Header/>
      <main className="container">
        <h1>AI‑агенты на основе OpenClaw</h1>
        <p>Коротко: бесплатная регистрация, инструкция по установке агента и платные модули с лайфхаками.</p>
        <ul>
          <li>Быстрая настройка</li>
          <li>Готовые сценарии</li>
          <li>Поддержка и обновления</li>
        </ul>
        <div className="cta">
          <Link href="/ru/dashboard" className="button">Зарегистрироваться</Link>
        </div>
      </main>
    </div>
  )
}
