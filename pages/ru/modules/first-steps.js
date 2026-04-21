import Link from 'next/link'
import Header from '../../../components/Header'

export default function FirstSteps(){
  return (
    <div>
      <Header/>
      <main className="container">
        <article className="module">
          <header className="module-header">
            <h1>Первые шаги</h1>
            <p className="muted">Короткий гид по начальной настройке и первым шагам с OpenClaw</p>
          </header>

          <section>
            <h2>О модуле</h2>
            <p>Этот модуль поможет быстро запустить локальную версию, понять архитектуру и выполнить базовую настройку OpenClaw. Материал рассчитан на разработчика, знакомого с терминалом и Node.js.</p>
          </section>

          <section>
            <h2>1. Что нужно подготовить</h2>
            <ul>
              <li>Mac/Linux или WSL с установленным Node.js (v18+ рекомендуемо)</li>
              <li>git для клонирования репозитория</li>
              <li>Доступ в интернет для установки зависимостей и загрузки образов</li>
            </ul>
          </section>

          <section>
            <h2>2. Клонирование и установка</h2>
            <ol>
              <li>Клонируйте репозиторий: <code>git clone &lt;репо&gt;</code></li>
              <li>Перейдите в папку проекта: <code>cd ai-agents-site</code></li>
              <li>Установите зависимости: <code>npm install</code> (или <code>yarn</code>/ <code>pnpm</code>)</li>
              <li>Запустите dev‑сервер: <code>npm run dev</code></li>
            </ol>
            <p>После запуска сайт будет доступен локально по адресу <code>http://localhost:3000</code>.</p>
          </section>

          <section>
            <h2>3. Быстрый осмотр</h2>
            <ul>
              <li>Главная — <code>/ru</code> и <code>/en</code></li>
              <li>Модули — <code>/ru/modules/first-steps</code> (эта страница)</li>
              <li>Политики: <code>/ru/privacy</code>, <code>/ru/terms</code>, <code>/ru/offer</code></li>
            </ul>
          </section>

          <section>
            <h2>4. Настройка и конфигурация</h2>
            <p>Ключевые места для конфигурации проекта:</p>
            <ul>
              <li><code>~/Documents/ai-agents-site/.env</code> — переменные окружения (если используются)</li>
              <li><code>pages/</code> — содержимое сайта (страницы RU/EN)</li>
              <li><code>public/</code> — статические файлы (pdf, текст политики и т.д.)</li>
            </ul>
          </section>

          <section>
            <h2>5. Полезные команды</h2>
            <ul>
              <li><code>npm run dev</code> — запуск dev‑сервера</li>
              <li><code>npm run build</code> — сборка для продакшна</li>
              <li><code>npm run start</code> — запуск собранной версии</li>
              <li><code>git status</code> / <code>git commit</code> — работа с версиями</li>
            </ul>
          </section>

          <section>
            <h2>6. Частые проблемы</h2>
            <ul>
              <li>Порт 3000 занят — проверьте процессы и перезапустите сервер</li>
              <li>Ошибки при установке зависимостей — попробуйте удалить <code>node_modules</code> и повторить</li>
              <li>Проблемы с правами доступа — проверьте права на папки и доступы</li>
            </ul>
          </section>

          <section>
            <h2>7. Дальше</h2>
            <p>Следующие шаги: подключить авторизацию (NextAuth), настроить CI/CD и добавить MDX‑модули с интерактивными примерами. Могу помочь с любым из этапов — скажи, что приоритетнее.</p>
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
