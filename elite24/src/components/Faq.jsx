import { useState } from 'react'
import Icon from './Icon.jsx'
import { FAQ } from '../data.js'

export default function Faq() {
  const [openIndex, setOpenIndex] = useState(0)

  return (
    <section className="section section--tint" id="faq" aria-labelledby="faq-title">
      <div className="container">
        <div className="faq__head">
          <div>
            <h2 id="faq-title" className="section__title section__title--lg">Всё, что важно знать</h2>
            <p className="section__sub">Ответы на частые вопросы о займах и залоге.</p>
          </div>
          <a href="#faq" className="faq__all">
            Смотреть все вопросы <Icon name="arrow" size={16} />
          </a>
        </div>

        <ul className="faq">
          {FAQ.map((item, i) => {
            const isOpen = openIndex === i
            return (
              <li key={item.q} className={`faq__item ${isOpen ? 'is-open' : ''}`}>
                <h3>
                  <button
                    type="button"
                    className="faq__btn"
                    aria-expanded={isOpen}
                    aria-controls={`faq-panel-${i}`}
                    id={`faq-btn-${i}`}
                    onClick={() => setOpenIndex(isOpen ? -1 : i)}
                  >
                    <span>{item.q}</span>
                    <Icon name={isOpen ? 'minus' : 'plus'} size={18} />
                  </button>
                </h3>
                <div
                  id={`faq-panel-${i}`}
                  role="region"
                  aria-labelledby={`faq-btn-${i}`}
                  className="faq__panel"
                  hidden={!isOpen}
                >
                  <p>{item.a}</p>
                </div>
              </li>
            )
          })}
        </ul>
      </div>
    </section>
  )
}
