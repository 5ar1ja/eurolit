import Icon from './Icon.jsx'
import { FEATURES } from '../data.js'

export default function Features() {
  return (
    <section className="section section--white" aria-labelledby="features-title">
      <div className="container">
        <h2 id="features-title" className="section__title">
          Финансовая помощь без лишних сложностей
        </h2>
        <ul className="features">
          {FEATURES.map((f) => (
            <li key={f.title} className="card feature">
              <span className={`feature__icon feature__icon--${f.tone}`}>
                <Icon name={f.icon} size={18} />
              </span>
              <h3 className="feature__title">{f.title}</h3>
              <p className="feature__text">{f.text}</p>
            </li>
          ))}
        </ul>
      </div>
    </section>
  )
}
