# Badge

Маленький индикатор статуса или количества. Badge используются рядом с уведомлениями, аватарами или иконками, чтобы показать статус, значение или атрибут.

## Установка

```bash
npx @capsuleui/core add Badge
```

## Использование

### Базовая Badge

<div style="margin: 1rem 0;">
<capsule-badge>Badge</capsule-badge>
</div>

```html
<capsule-badge>Badge</capsule-badge>
```

### Варианты

<div style="margin: 1rem 0; display: flex; gap: 0.5rem; flex-wrap: wrap; align-items: center;">
<capsule-badge variant="default">По умолчанию</capsule-badge>
<capsule-badge variant="secondary">Вторичный</capsule-badge>
<capsule-badge variant="destructive">Опасный</capsule-badge>
<capsule-badge variant="outline">Контурный</capsule-badge>
</div>

```html
<capsule-badge variant="default">По умолчанию</capsule-badge>
<capsule-badge variant="secondary">Вторичный</capsule-badge>
<capsule-badge variant="destructive">Опасный</capsule-badge>
<capsule-badge variant="outline">Контурный</capsule-badge>
```

### С иконками

<div style="margin: 1rem 0; display: flex; gap: 0.5rem; flex-wrap: wrap; align-items: center;">
<capsule-badge>
  <svg width="12" height="12" viewBox="0 0 12 12" fill="currentColor">
    <path d="M6 0L7.5 4.5L12 6L7.5 7.5L6 12L4.5 7.5L0 6L4.5 4.5L6 0Z"/>
  </svg>
  Новый
</capsule-badge>
</div>

```html
<capsule-badge>
  <svg width="12" height="12" viewBox="0 0 12 12" fill="currentColor">
    <path d="M6 0L7.5 4.5L12 6L7.5 7.5L6 12L4.5 7.5L0 6L4.5 4.5L6 0Z"/>
  </svg>
  Новый
</capsule-badge>
```

## Справочник API

### Атрибуты

| Атрибут   | Тип    | По умолчанию | Описание          |
| --------- | ------ | ------------ | ----------------- |
| `variant` | string | `default`    | Вариант стиля badge |

### Значения variant

- `default` — Основной badge с primary фоном (по умолчанию)
- `secondary` — Вторичный badge с secondary фоном
- `destructive` — Опасный badge с destructive фоном
- `outline` — Контурный badge с границей и прозрачным фоном

## Особенности

- ✅ **Простой и легкий** — Просто рендерит содержимое слота
- ✅ **Варианты в стиле Shadcn** — Соответствует дизайн-системе Shadcn UI
- ✅ **Поддержка иконок** — Может содержать SVG иконки
- ✅ **Состояния фокуса** — Правильные индикаторы фокуса
- ✅ **Темная тема** — Автоматическая поддержка темной темы
- ✅ **Доступность** — Правильные ARIA атрибуты

## Детали стилизации

Компонент Badge применяет следующие стили:

- **Скругление:** `var(--radius-full)` (полностью скругленный)
- **Отступы:** `0.125rem 0.5rem`
- **Размер шрифта:** `var(--font-size-xs)` (0.75rem)
- **Насыщенность шрифта:** `var(--font-weight-medium)`
- **Размер иконки:** `0.75rem` (12px) для дочерних SVG
- **Отступ:** `0.25rem` между иконкой и текстом

## Доступность

- ✅ Правильные индикаторы фокуса с кольцом
- ✅ ARIA атрибуты для скринридеров
- ✅ Поддержка `aria-invalid` для состояний валидации
