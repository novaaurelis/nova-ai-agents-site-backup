import Link from 'next/link'
import Header from '../../../components/Header'

export default function InstallationRun(){
  return (
    <div>
      <Header/>
      <main className="container">
        <article className="module">
          <a className="sr-only" id="top" />
          <header className="module-header">
            <h1>Установка и запуск</h1>
            <p className="muted">Инструкции по установке OpenClaw на разные платформы и проверке работоспособности.</p>
          </header>

          <nav className="toc" aria-label="Оглавление">
            <strong>Оглавление</strong>
            <ul>
              <li><a href="#mac">macOS</a></li>
              <li><a href="#windows">Windows</a></li>
              <li><a href="#vps">VPS / сервер</a></li>
              <li><a href="#ollama">Сопряжение с Ollama</a></li>
              <li><a href="#telegram">Подключение Telegram</a></li>
              <li><a href="#check">Проверка и отладка</a></li>
            </ul>
          </nav>

          <section id="mac">
            <h2>Установка на macOS</h2>
            <p>Шаги для установки Homebrew, Node.js и зависимостей. Команды и примечания по правам.</p>
          </section>

          <section id="windows">
            <h2>Установка на Windows</h2>
            <p>Инструкция для WSL и нативной установки: рекомендации по версии Node.js и PATH.</p>
          </section>

          <section id="vps">
            <h2>Установка на VPS / виртуальный сервер</h2>
            <p>Порядок действий для развёртывания на удалённом сервере, безопасность и советы по резервированию.</p>
          </section>

          <section id="ollama">
            <h2>Сопряжение с Ollama</h2>
            <p>Пример настройки Ollama (Kimi K2.5) и интеграции с OpenClaw для локальных моделей.</p>
          </section>

          <section id="telegram">
            <h2>Подключение Telegram</h2>
            <p>Мини‑блок: создание бота, получение токена, настройка webhook/long polling.</p>
          </section>

          <section id="check">
            <h2>Проверка и отладка</h2>
            <ul>
              <li>Проверка портов</li>
              <li>Логи сервера</li>
              <li>Типичные ошибки и как их решать</li>
            </ul>
          </section>

          <p style={{marginTop:20}}><Link href="/ru/modules/first-steps">← Вернуться к Первым шагам</Link></p>
        </article>

        <style jsx>{`
          .module { max-width:900px; margin:18px auto; padding:0 18px }
          .module-header { margin-bottom:12px }
          .module h2 { margin-top:16px }
          .toc ul { padding-left:18px }
        `}</style>
      </main>
    </div>
  )
}
