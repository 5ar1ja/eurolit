import { useState } from 'react'
import Icon from './Icon.jsx'
import { LINKS } from '../data.js'

function formatPhone(raw) {
  let d = raw.replace(/\D/g, '')
  if (d.length <= 1) return ''
  if (d.startsWith('8')) d = '7' + d.slice(1)
  if (!d.startsWith('7')) d = '7' + d
  d = d.slice(0, 11)
  let out = '+7'
  if (d.length > 1) out += ' (' + d.slice(1, 4)
  if (d.length > 4) out += ') ' + d.slice(4, 7)
  if (d.length > 7) out += '-' + d.slice(7, 9)
  if (d.length > 9) out += '-' + d.slice(9, 11)
  return out
}

export default function Contact() {
  const [form, setForm] = useState({ name: '', phone: '', agree: false })
  const [errors, setErrors] = useState({})
  const [sent, setSent] = useState(false)

  const validate = () => {
    const e = {}
    if (form.name.trim().length < 2) e.name = 'Укажите имя'
    if (form.phone.replace(/\D/g, '').length !== 11) e.phone = 'Введите номер полностью'
    if (!form.agree) e.agree = 'Нужно согласие на обработку данных'
    return e
  }

  const onSubmit = (ev) => {
    ev.preventDefault()
    const e = validate()
    setErrors(e)
    if (Object.keys(e).length) return

    // TODO: отправка на бэкенд / в Telegram-бота / CRM (только по HTTPS).
    // Персональные данные не логируем и не храним на клиенте.
    setSent(true)
  }

  return (
    <section className="section section--white section--tight" id="contact" aria-labelledby="contact-title">
      <div className="container">
        <div className="contact">
          <div className="contact__info">
            <p className="contact__eyebrow">Мы на связи</p>
            <h2 id="contact-title">Давайте найдём ваше решение</h2>
            <p className="contact__lead">Ответим на вопросы и поможем с предварительной оценкой залога.</p>
            <ul className="contact__list">
              <li><Icon name="pin" size={16} /> Алматы, Казахстан</li>
              <li><Icon name="clock" size={16} /> Ежедневно, 09:00 – 18:00</li>
              <li><Icon name="mail" size={16} /> E-mail: уточняется</li>
            </ul>
            <div className="contact__social">
              <a href={LINKS.whatsapp} target="_blank" rel="noopener noreferrer">
                <Icon name="whatsapp" size={16} /> WhatsApp
              </a>
              <a href={LINKS.telegram} target="_blank" rel="noopener noreferrer">
                <Icon name="telegram" size={16} /> Telegram
              </a>
            </div>
          </div>

          <div className="contact__form">
            {sent ? (
              <div className="form-success" role="status">
                <span className="form-success__icon"><Icon name="check" size={24} /></span>
                <h3>Заявка принята</h3>
                <p>Мы свяжемся с вами в рабочее время и ответим на вопросы.</p>
              </div>
            ) : (
              <form onSubmit={onSubmit} noValidate>
                <h3>Получите консультацию</h3>
                <p className="contact__form-sub">Оставьте контакты — обсудим условия и ответим на вопросы.</p>

                <div className="fields">
                  <div className="field">
                    <label htmlFor="name">Ваше имя</label>
                    <input
                      id="name"
                      name="name"
                      type="text"
                      autoComplete="name"
                      placeholder="Как к вам обращаться?"
                      value={form.name}
                      onChange={(e) => setForm({ ...form, name: e.target.value })}
                      aria-invalid={!!errors.name}
                      aria-describedby={errors.name ? 'name-err' : undefined}
                    />
                    {errors.name && <span id="name-err" className="field__error">{errors.name}</span>}
                  </div>
                  <div className="field">
                    <label htmlFor="phone">Номер телефона</label>
                    <input
                      id="phone"
                      name="phone"
                      type="tel"
                      inputMode="tel"
                      autoComplete="tel"
                      placeholder="+7 (___) ___-__-__"
                      value={form.phone}
                      onChange={(e) => setForm({ ...form, phone: formatPhone(e.target.value) })}
                      aria-invalid={!!errors.phone}
                      aria-describedby={errors.phone ? 'phone-err' : undefined}
                    />
                    {errors.phone && <span id="phone-err" className="field__error">{errors.phone}</span>}
                  </div>
                </div>

                <label className="check">
                  <input
                    type="checkbox"
                    checked={form.agree}
                    onChange={(e) => setForm({ ...form, agree: e.target.checked })}
                    aria-invalid={!!errors.agree}
                  />
                  <span>Я соглашаюсь с политикой конфиденциальности и обработкой персональных данных</span>
                </label>
                {errors.agree && <span className="field__error">{errors.agree}</span>}

                <button type="submit" className="btn btn--red btn--lg btn--block">
                  Получить консультацию <Icon name="arrow" size={16} />
                </button>
                <p className="contact__note">
                  <Icon name="shield" size={14} /> Ваши данные используются только для обратной связи.
                </p>
              </form>
            )}
          </div>
        </div>
      </div>
    </section>
  )
}
