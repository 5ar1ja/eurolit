import { useEffect, useState } from 'react'
import Icon from './Icon.jsx'
import { NAV, LINKS } from '../data.js'

export default function Header() {
  const [open, setOpen] = useState(false)

  useEffect(() => {
    const onKey = (e) => e.key === 'Escape' && setOpen(false)
    const onResize = () => window.innerWidth > 960 && setOpen(false)
    window.addEventListener('keydown', onKey)
    window.addEventListener('resize', onResize)
    return () => {
      window.removeEventListener('keydown', onKey)
      window.removeEventListener('resize', onResize)
    }
  }, [])

  const close = () => setOpen(false)

  return (
    <header className="header">
      <div className="container header__inner">
        <a href="#top" className="header__logo" aria-label="Elite24 — на главную" onClick={close}>
          <img src="/logo.svg" alt="" width="48" height="48" />
        </a>

        <nav id="main-nav" className={`nav ${open ? 'is-open' : ''}`} aria-label="Основное меню">
          {NAV.map((item) => (
            <a key={item.href} href={item.href} className="nav__link" onClick={close}>
              {item.label}
            </a>
          ))}
          <a href="#contact" className="btn btn--red nav__cta-mobile" onClick={close}>
            Заказать звонок <Icon name="arrow" size={16} />
          </a>
        </nav>

        <div className="header__actions">
          <a href="#contact" className="btn btn--red header__cta">
            Заказать звонок <Icon name="arrow" size={16} />
          </a>
          <a
            href={LINKS.whatsapp}
            className="icon-btn"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="Написать в WhatsApp"
          >
            <Icon name="whatsapp" size={20} />
          </a>
          <button
            type="button"
            className="icon-btn burger"
            aria-expanded={open}
            aria-controls="main-nav"
            aria-label={open ? 'Закрыть меню' : 'Открыть меню'}
            onClick={() => setOpen((v) => !v)}
          >
            <Icon name={open ? 'close' : 'menu'} size={22} />
          </button>
        </div>
      </div>
    </header>
  )
}
