import Icon from './Icon.jsx'
import { DOCUMENTS } from '../data.js'

export default function About() {
  return (
    <section className="section section--white" id="about" aria-labelledby="about-title">
      <div className="container about">
        <div className="about__text">
          <p className="eyebrow">О Elite24 ломбард</p>
          <h2 id="about-title" className="section__title section__title--lg">
            Помогаем сегодня. Заботимся о доверии.
          </h2>
          <p>
            Когда деньги нужны сейчас, всё должно быть просто. В Elite24 можно получить финансовую
            помощь под залог ценных вещей без банковской бюрократии.
          </p>
          <p>
            Оцениваем открыто, объясняем условия до подписания договора и бережно храним то, что вам
            дорого.
          </p>
          <span className="pill">
            <Icon name="check" size={14} /> Прозрачные условия. Официальные документы.
          </span>
        </div>

        <div className="about__docs" id="documents">
          <h3 className="about__docs-title">Открытость — основа доверия</h3>
          <ul className="docs">
            {DOCUMENTS.map((d) => (
              <li key={d.title}>
                <a className="card doc" href={d.href} download>
                  <span className="doc__pdf">PDF</span>
                  <span className="doc__body">
                    <strong>{d.title}</strong>
                    <small>PDF · Скачать документ</small>
                  </span>
                  <Icon name="download" size={18} />
                </a>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </section>
  )
}
