import Link from 'next/link'
import { useRouter } from 'next/router'

export default function Header(){
  const router = useRouter()
  const path = router.asPath || ''
  let current = 'ru'
  if (path.startsWith('/en')) current = 'en'
  else if (path.startsWith('/ru')) current = 'ru'

  const target = current === 'ru' ? 'en' : 'ru'
  let targetPath = ''
  if (path === '/' || path === '') targetPath = '/' + target
  else if (path.startsWith('/ru')) targetPath = path.replace(/^\/ru/, '/' + target)
  else if (path.startsWith('/en')) targetPath = path.replace(/^\/en/, '/' + target)
  else targetPath = '/' + target + path

  const loginText = current === 'ru' ? 'Войти' : 'Login'
  const registerText = current === 'ru' ? 'Зарегистрироваться' : 'Register'
  const loginHref = '/' + current + '/login'
  const registerHref = '/' + current + '/dashboard'

  return (
    <header className="header">
      <div className="container nav">
        <nav className="nav-right">
          <Link href={loginHref} className="nav-button">{loginText}</Link>
          <Link href={registerHref} className="nav-button primary">{registerText}</Link>
          <Link href={targetPath} className="lang-toggle">{target.toUpperCase()}</Link>
        </nav>
      </div>
    </header>
  )
}
