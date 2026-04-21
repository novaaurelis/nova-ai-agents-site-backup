import Link from 'next/link'
import Header from '../../../components/Header'

export default function FirstSteps(){
  return (
    <div>
      <Header/>
      <main className="container">
        <article className="module">
          <a className="sr-only" id="top" />
          <header className="module-header">
            <h1>Первые шаги</h1>
            <p className="muted">Вводный модуль: быстро стартуем, настраиваем и запускаем OpenClaw</p>
          </header>



          <section id="about">
            <h2>О проекте OpenClaw</h2>
            <p>OpenClaw — инструмент для автоматизации повторяющихся процессов с помощью AI‑агентов. Удобный веб‑интерфейс, готовые интеграции и инструментарий для постановки задач позволяют быстро переходить от идеи к рабочему сценарию.</p>
          </section>

          <section id="what">
            <h2>Что делает этот модуль</h2>
            <p>Модуль демонстрирует типовой рабочий процесс: приём инструкции, запуск сценариев, подбор конфигураций и выдача отчётов. Подходит для локальной разработки и тестирования интеграций.</p>
          </section>

          <section id="scenarios">
            <h2>Ключевые сценарии</h2>
            <ul>
              <li>Пошаговый старт: установка, запуск, проверка</li>
              <li>Автоматизация рутинных задач: триггеры и расписания</li>
              <li>Интеграции: Telegram, Webhook, API</li>
            </ul>
          </section>

          <section id="prepare">
            <h2>Подготовка окружения</h2>
            <ul>
              <li>Система: Mac / Linux / WSL</li>
              <li>Node.js (рекомендуется v18+)</li>
              <li>git для работы с репозиторием</li>
              <li>Интернет для загрузки зависимостей</li>
            </ul>
          </section>

          <section id="install">
            <h2>Установка и запуск</h2>
            <ol>
              <li>Клонируйте репозиторий: <code>git clone &lt;repo&gt;</code></li>
              <li>Перейдите в папку: <code>cd ai-agents-site</code></li>
              <li>Установите зависимости: <code>npm install</code> (или <code>yarn</code>/<code>pnpm</code>)</li>
              <li>Запустите dev‑сервер: <code>npm run dev</code></li>
            </ol>
            <p>Сайт будет доступен по адресу <code>http://localhost:3000</code>. Dev‑сервер поддерживает hot‑reload.</p>
          </section>

          <section id="structure">
            <h2>Структура проекта</h2>
            <ul>
              <li><code>pages/</code> — маршруты и страницы</li>
              <li><code>public/</code> — статические файлы</li>
              <li><code>memory/</code> и <code>MEMORY.md</code> — локальные данные агента</li>
              <li><code>.env</code> — переменные окружения (не коммитить в публичные репозитории)</li>
            </ul>
          </section>

          <section id="security">
            <h2>Режимы работы и безопасность</h2>
            <p>Проект можно запускать локально для разработки и в продакшне через CI/CD. Следите за безопасностью: храните секреты в защищённых хранилищах и не публикуйте конфигурации с чувствительными данными.</p>
          </section>

          <section id="faq">
            <h2>Частые вопросы</h2>
            <ul>
              <li>Если порт 3000 занят — завершите процесс или поменяйте порт.</li>
              <li>Ошибки при установке — удалите <code>node_modules</code> и попробуйте снова.</li>
              <li>Проблемы сборки — смотрите логи и сообщения в консоли.</li>
            </ul>
          </section>

          <section id="next">
            <h2>Дальше</h2>
            <p>Рекомендуется: подключить авторизацию (NextAuth), настроить CI/CD, добавить MDX‑уроки и интерактивные примеры. Могу помочь с любым этапом — скажите приоритет.</p>
          </section>

          <p style={{marginTop:20}}><Link href="/ru">← На главную</Link></p>
        </article>

        <style jsx>{`
          .module { max-width:900px; margin:18px auto; padding:0 18px }
          .module-header { margin-bottom:12px }
          .module h2 { margin-top:16px }
          code { background:#f4f4f4; padding:2px 6px; border-radius:4px }
        `}</style>
      </main>
    </div>
  )
}
