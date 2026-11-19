import Icon from './Icon.jsx'
import { FOOTER_COLS, LINKS } from '../data.js'

export default function Footer() {
  return (
    <footer className="footer">
      <div className="container">
        <div className="footer__top">
          <div className="footer__brand">
            <img src="/logo.svg" alt="Elite24" width="56" height="56" />
            <p>
              Финансовая поддержка рядом.
              <br />
              Алматы, Казахстан
            </p>
          </div>

          {FOOTER_COLS.map((col) => (
            <div key={col.title} className="footer__col">
              <h4>{col.title}</h4>
              <ul>
                {col.links.map((l) => (
                  <li key={l.label}><a href={l.href}>{l.label}</a></li>
                ))}
              </ul>
            </div>
          ))}

          <div className="footer__social">
            <a href={LINKS.whatsapp} aria-label="WhatsApp" target="_blank" rel="noopener noreferrer">
              <Icon name="whatsapp" size={18} />
            </a>
            <a href={LINKS.telegram} aria-label="Telegram" target="_blank" rel="noopener noreferrer">
              <Icon name="telegram" size={18} />
            </a>
          </div>
        </div>

        <div className="footer__bottom">
          <p>© 2026 Elite24. Все права защищены.</p>
          <p>
            Ставка от 0,28% в сутки. Итоговые условия займа, сумма и срок определяются договором.
            Перед подписанием ознакомьтесь с правилами проведения ломбардных операций.
          </p>
        </div>
      </div>
    </footer>
  )
}
