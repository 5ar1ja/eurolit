import Icon from './Icon.jsx'
import { BRANCHES, LINKS } from '../data.js'

const PINS = [
  { n: 1, left: '18%', top: '44%' },
  { n: 2, left: '63%', top: '24%' },
  { n: 3, left: '72%', top: '58%' },
  { n: 4, left: '80%', top: '48%' },
]

export default function Branches() {
  return (
    <section className="section section--tint" id="branches" aria-labelledby="branches-title">
      <div className="container">
        <p className="eyebrow">Рядом с вами</p>
        <h2 id="branches-title" className="section__title section__title--lg">
          Наши филиалы в Алматы
        </h2>
        <p className="section__sub">Выберите удобный адрес — мы работаем каждый день.</p>

        <ul className="branches">
          {BRANCHES.map((b) => (
            <li key={b.id} className="card branch">
              <div className="branch__head">
                <span className="branch__icon"><Icon name="pin" size={16} /></span>
                <h3>Филиал {b.id}</h3>
              </div>
              <p className="branch__address">{b.address}</p>
              <p className="branch__row"><Icon name="clock" size={14} /> {b.hours}</p>
              <p className="branch__row"><Icon name="phone" size={14} /> {b.phone}</p>
              <a
                className="branch__link"
                href={b.link}
                target="_blank"
                rel="noopener noreferrer"
              >
                Открыть в 2ГИС <Icon name="arrowUpRight" size={14} />
              </a>
            </li>
          ))}
        </ul>

        <div className="map">
          <span className="map__road map__road--a" aria-hidden="true" />
          <span className="map__road map__road--b" aria-hidden="true" />
          <span className="map__road map__road--c" aria-hidden="true" />
          <span className="map__block map__block--1" aria-hidden="true" />
          <span className="map__block map__block--2" aria-hidden="true" />
          <span className="map__block map__block--3" aria-hidden="true" />
          <span className="map__block map__block--4" aria-hidden="true" />
          {PINS.map((p) => (
            <span key={p.n} className="map__pin" style={{ left: p.left, top: p.top }} aria-hidden="true">{p.n}</span>
          ))}
          <div className="map__card">
            <h3>Все филиалы на одной карте</h3>
            {/* TODO: заменить блок на виджет карты 2ГИС */}
            <p>Место для интерактивной карты 2ГИС</p>
            <a className="btn btn--blue btn--block" href={LINKS.map2gis} target="_blank" rel="noopener noreferrer">
              Найти ближайший филиал <Icon name="arrowUpRight" size={14} />
            </a>
          </div>
        </div>
      </div>
    </section>
  )
}
