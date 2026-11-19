# Elite24 — лендинг ломбарда (React + Vite)

## Запуск
```bash
npm install
npm run dev      # разработка
npm run build    # продакшн-сборка в dist/
npm run preview  # посмотреть сборку
```

## Что подставить
- `src/data.js` — телефоны, ссылки WhatsApp / Telegram / 2ГИС, тексты FAQ.
- `public/hero.jpg` — фото для первого экрана (пока показывается заглушка).
- `public/docs/license.pdf`, `public/docs/rules.pdf` — документы для скачивания.
- `src/components/Contact.jsx` — `onSubmit`: отправка заявки (бэкенд / бот / CRM). Сейчас только валидация и экран «Заявка принята».
- `src/components/Branches.jsx` — блок-заглушку карты заменить на виджет 2ГИС.
- `public/logo.svg` — временный логотип, заменить на настоящий.

## Структура
- `src/components/` — по компоненту на секцию (Header, Hero, Features, Branches, About, Faq, Contact, Footer)
- `src/styles/index.css` — все стили, цвета в CSS-переменных в начале файла
- Брейкпоинты: 1100px (2 колонки), 960px (бургер-меню, одна колонка), 640px (мобильный), 380px (узкие экраны)
