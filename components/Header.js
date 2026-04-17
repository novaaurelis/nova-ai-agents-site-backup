import Link from 'next/link'
import { useRouter } from 'next/router'
import { useState } from 'react'

export default function Header(){
  const router = useRouter()
  const path = router.asPath || ''
  let current = 'ru'
  if (path.startsWith('/en')) current = 'en'
  else if (path.startsWith('/ru')) current = 'ru'

  // compute paths for each language keeping the rest of the path
  const ruPath = path === '/' || path === '' ? '/ru' : (path.startsWith('/ru') ? path : (path.startsWith('/en') ? path.replace(/^\/en/, '/ru') : '/ru' + path))
  const enPath = path === '/' || path === '' ? '/en' : (path.startsWith('/en') ? path : (path.startsWith('/ru') ? path.replace(/^\/ru/, '/en') : '/en' + path))

  const loginText = current === 'ru' ? 'Войти' : 'Login'
  const registerText = current === 'ru' ? 'Зарегистрироваться' : 'Register'
  const loginHref = '/' + current + '/login'
  const registerHref = '/' + current + '/dashboard'

  const [open, setOpen] = useState(false)

  return (
    <header className="header">
      <div className="container nav">
        <Link href={'/' + current} className="logo">
          <img src="/logo.svg" alt="OpenClaw" className="site-logo" />
          {current === 'ru' ? (
            <>
              <span>ОпенКлоу</span>
            </>
          ) : (
            <>
              <span>OpenClaw</span>
            </>
          )}
        </Link>
        <nav className="nav-right">
          <div className="nav-links">
            <Link href={'/' + current + '/modules/first-steps'} className="nav-button">{current === 'ru' ? 'Первые шаги' : 'First steps'}</Link>
          </div>

          <div className="auth-buttons">
            <Link href={loginHref} className="nav-button">{loginText}</Link>
            <Link href={registerHref} className="nav-button primary">{registerText}</Link>
          </div>

          <div className="lang-select">
            <button type="button" className="lang-button" onClick={() => setOpen(v => !v)}>{current.toUpperCase()} ▾</button>
            {open && (
              <div className="lang-menu">
                <Link href={ruPath} className="lang-item" onClick={() => setOpen(false)}>RU</Link>
                <Link href={enPath} className="lang-item" onClick={() => setOpen(false)}>EN</Link>
              </div>
            )}
          </div>
        </nav>
      </div>
    </header>
  )
}
