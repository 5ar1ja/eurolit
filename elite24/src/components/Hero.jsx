import { useState } from 'react'
import Icon from './Icon.jsx'
import { STATS, LINKS } from '../data.js'

export default function Hero() {
  const [imgOk, setImgOk] = useState(true)

  return (
    <section className="hero" id="top">
      <div className="container hero__inner">
        <div className="hero__text">
          <span className="chip">
            <span className="chip__dot" /> Рядом, когда нужно
          </span>
          <h1 className="hero__title">Займы под залог ценных вещей за 15 минут</h1>
          <p className="hero__lead">
            Честная оценка, низкая ставка от 0,28% в сутки, без справок и очередей в Алматы
          </p>

          <div className="hero__buttons">
            <a href="#contact" className="btn btn--red btn--lg">
              Рассчитать / Заявка <Icon name="arrow" size={16} />
            </a>
            <a
              href={LINKS.whatsapp}
              className="btn btn--white btn--lg"
              target="_blank"
              rel="noopener noreferrer"
            >
              <Icon name="whatsapp" size={18} /> Написать в WhatsApp
            </a>
          </div>

          <dl className="stats">
            {STATS.map((s) => (
              <div className="stats__item" key={s.label}>
                <dt className="stats__value">{s.value}</dt>
                <dd className="stats__label">{s.label}</dd>
              </div>
            ))}
          </dl>
        </div>

        <div className="hero__media">
          {imgOk && (
            <img
              src="/hero.jpg"
              alt="Золотая цепочка и часы на подставке"
              className="hero__img"
              onError={() => setImgOk(false)}
            />
          )}
          <div className="hero__badge">
            <span className="hero__badge-icon">
              <Icon name="shield" size={16} />
            </span>
            <span>
              <strong>Ваши ценности под защитой</strong>
              <small>Бережное хранение в сейфах</small>
            </span>
          </div>
        </div>
      </div>
    </section>
  )
}
