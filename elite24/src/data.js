// Все тексты и контакты в одном месте — удобно править без поиска по компонентам.

export const NAV = [
  { href: '#about', label: 'О ломбарде' },
  { href: '#branches', label: 'Филиалы' },
  { href: '#faq', label: 'Условия и FAQ' },
  { href: '#documents', label: 'Документы' },
  { href: '#contact', label: 'Контакты' },
]

// TODO: подставить реальные ссылки
export const LINKS = {
  whatsapp: 'https://wa.me/',
  telegram: 'https://t.me/',
  map2gis: 'https://2gis.kz/almaty',
}

export const STATS = [
  { value: '0,28%', label: 'ставка в сутки' },
  { value: '15 минут', label: 'выдача займа' },
  { value: 'АРРФР', label: 'лицензия' },
]

export const FEATURES = [
  { icon: 'gem', title: 'Честная оценка', text: 'Рыночная стоимость до 90% от цены залога', tone: 'red' },
  { icon: 'clock', title: 'Быстрое одобрение', text: 'Деньги наличными или на карту за 15 минут', tone: 'blue' },
  { icon: 'shield', title: 'Надежное хранение', text: 'Круглосуточная охрана и защищённые сейфы', tone: 'blue' },
  { icon: 'doc', title: 'Прозрачные условия', text: 'Без скрытых комиссий и штрафов', tone: 'blue' },
]

export const BRANCHES = [
  { id: 1, address: 'мкр. Аксай-4, 20Б', hours: 'Ежедневно, 09:00 – 18:00', phone: '+7 (___) ___-__-__', link: LINKS.map2gis },
  { id: 2, address: 'Павильон 2, бутик 21', hours: 'Ежедневно, 09:00 – 18:00', phone: '+7 (___) ___-__-__', link: LINKS.map2gis },
  { id: 3, address: 'Павильон 2, бутик 33', hours: 'Ежедневно, 09:00 – 18:00', phone: '+7 (___) ___-__-__', link: LINKS.map2gis },
  { id: 4, address: 'Павильон 3, бутик 4', hours: 'Ежедневно, 09:00 – 18:00', phone: '+7 (___) ___-__-__', link: LINKS.map2gis },
]

export const DOCUMENTS = [
  { title: 'Лицензия АРРФР', href: '/docs/license.pdf' },
  { title: 'Правила проведения ломбардных операций', href: '/docs/rules.pdf' },
]

export const FAQ = [
  {
    q: 'Что принимается в залог?',
    a: 'Золотые украшения, часы и другие ценные вещи. Возможность залога и предварительную оценку вашего предмета уточните у консультанта.',
  },
  { q: 'Какие документы нужны?', a: 'Список документов уточняется. Консультант подскажет, что взять с собой.' },
  { q: 'Какая процентная ставка?', a: 'Ставка от 0,28% в сутки. Итоговые условия займа, сумма и срок определяются договором.' },
  { q: 'Можно ли продлить срок займа?', a: 'Условия продления уточняются у консультанта и фиксируются в договоре.' },
]

export const FOOTER_COLS = [
  {
    title: 'О компании',
    links: [
      { href: '#about', label: 'О ломбарде' },
      { href: '#branches', label: 'Наши филиалы' },
      { href: '#contact', label: 'Контакты' },
    ],
  },
  {
    title: 'Полезная информация',
    links: [
      { href: '#faq', label: 'Условия и FAQ' },
      { href: '#documents', label: 'Официальные документы' },
      { href: '#', label: 'Политика конфиденциальности' },
    ],
  },
]
