# Мониторинг - Дашборд строительной площадки

Простой дашборд для мониторинга строительной площадки с мок данными.

## Технологии

- React 18
- Vite
- TypeScript
- Tailwind CSS
- shadcn/ui компоненты

## Установка

```bash
npm install
```

## Запуск в режиме разработки

```bash
npm run dev
```

## Сборка для продакшена

```bash
npm run build
```

## Деплой на Netlify

1. Подключите репозиторий к Netlify
2. Настройки сборки:
   - Build command: `npm run build`
   - Publish directory: `dist`
3. Netlify автоматически определит настройки из `netlify.toml`

## Структура проекта

```
src/
  components/
    ui/          # Базовые UI компоненты (Card, Badge)
    Sidebar.tsx  # Боковая панель навигации
    KPICard.tsx  # Карточки с метриками
    VideoSection.tsx  # Секция с видео
    ReportsSection.tsx  # Секция отчетов
    EventsSection.tsx  # Секция событий
  App.tsx        # Главный компонент
  main.tsx       # Точка входа
```
