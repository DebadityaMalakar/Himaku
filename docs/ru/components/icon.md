# Icon

Компонент иконок, который загружает SVG иконки из API [Iconify](https://iconify.design/). Поддерживает тысячи наборов иконок, включая Material Design Icons, Heroicons, Font Awesome и другие.

## Установка

```bash
npx @capsuleui/core add Icon
```

## Использование

### Базовая иконка

<div style="margin: 1rem 0;">
<capsule-icon name="mdi:arrow-all"></capsule-icon>
</div>

```html
<capsule-icon name="mdi:arrow-all"></capsule-icon>
```

### Наборы иконок

Компонент Icon поддерживает все наборы иконок, доступные на Iconify. Используйте формат `{коллекция}:{имя-иконки}`:

<div style="margin: 1rem 0; display: flex; gap: 1rem; align-items: center; flex-wrap: wrap;">
<capsule-icon name="mdi:home" size="lg"></capsule-icon>
<capsule-icon name="heroicons:arrow-right" size="lg"></capsule-icon>
<capsule-icon name="lucide:heart" size="lg"></capsule-icon>
<capsule-icon name="carbon:settings" size="lg"></capsule-icon>
</div>

```html
<!-- Material Design Icons -->
<capsule-icon name="mdi:home"></capsule-icon>

<!-- Heroicons -->
<capsule-icon name="heroicons:arrow-right"></capsule-icon>

<!-- Lucide -->
<capsule-icon name="lucide:heart"></capsule-icon>

<!-- Carbon -->
<capsule-icon name="carbon:settings"></capsule-icon>
```

### Размеры

<div style="margin: 1rem 0; display: flex; gap: 1rem; align-items: center; flex-wrap: wrap;">
<capsule-icon name="mdi:star" size="xs"></capsule-icon>
<capsule-icon name="mdi:star" size="sm"></capsule-icon>
<capsule-icon name="mdi:star" size="md"></capsule-icon>
<capsule-icon name="mdi:star" size="lg"></capsule-icon>
<capsule-icon name="mdi:star" size="xl"></capsule-icon>
</div>

```html
<capsule-icon
  name="mdi:star"
  size="xs"
></capsule-icon>
<capsule-icon
  name="mdi:star"
  size="sm"
></capsule-icon>
<capsule-icon
  name="mdi:star"
  size="md"
></capsule-icon>
<capsule-icon
  name="mdi:star"
  size="lg"
></capsule-icon>
<capsule-icon
  name="mdi:star"
  size="xl"
></capsule-icon>
```

### Кастомный размер

Вы также можете использовать кастомные CSS значения для размера:

<div style="margin: 1rem 0; display: flex; gap: 1rem; align-items: center; flex-wrap: wrap;">
<capsule-icon name="mdi:check-circle" size="2rem"></capsule-icon>
<capsule-icon name="mdi:check-circle" size="3rem"></capsule-icon>
</div>

```html
<capsule-icon
  name="mdi:check-circle"
  size="2rem"
></capsule-icon>
<capsule-icon
  name="mdi:check-circle"
  size="3rem"
></capsule-icon>
```

### С текстом

Иконки наследуют цвет текста и могут использоваться вместе с текстом:

<div style="margin: 1rem 0;">
<p style="display: flex; align-items: center; gap: 0.5rem;">
  <capsule-icon name="mdi:email"></capsule-icon>
  <span>contact@example.com</span>
</p>
</div>

```html
<p style="display: flex; align-items: center; gap: 0.5rem;">
  <capsule-icon name="mdi:email"></capsule-icon>
  <span>contact@example.com</span>
</p>
```

### В кнопках

<div style="margin: 1rem 0; display: flex; gap: 0.5rem; flex-wrap: wrap;">
<capsule-button>
  <capsule-icon name="mdi:download"></capsule-icon>
  Скачать
</capsule-button>
<capsule-button variant="outline">
  <capsule-icon name="mdi:heart"></capsule-icon>
  Нравится
</capsule-button>
</div>

```html
<capsule-button>
  <capsule-icon name="mdi:download"></capsule-icon>
  Скачать
</capsule-button>
<capsule-button variant="outline">
  <capsule-icon name="mdi:heart"></capsule-icon>
  Нравится
</capsule-button>
```

## Справочник API

### Атрибуты

| Атрибут | Тип    | По умолчанию | Описание                                          |
| ------- | ------ | ------------ | ------------------------------------------------- |
| `name`  | string | -            | Имя иконки в формате `{коллекция}:{имя-иконки}`   |
| `size`  | string | `1em`        | Размер иконки (xs, sm, md, lg, xl, или кастомный) |

### Значения размера

- `xs` — 0.75rem (12px)
- `sm` — 1rem (16px)
- `md` — 1.25rem (20px)
- `lg` — 1.5rem (24px)
- `xl` — 2rem (32px)
- Кастомный — Любое валидное CSS значение размера (например, `2rem`, `24px`, `1.5em`)

### Популярные коллекции иконок

- **Material Design Icons** — `mdi:*` (например, `mdi:home`, `mdi:account`)
- **Heroicons** — `heroicons:*` (например, `heroicons:arrow-right`, `heroicons:heart`)
- **Lucide** — `lucide:*` (например, `lucide:search`, `lucide:settings`)
- **Carbon** — `carbon:*` (например, `carbon:settings`, `carbon:user`)
- **Font Awesome** — `fa:*` (например, `fa:home`, `fa:user`)
- **Feather** — `fe:*` (например, `fe:home`, `fe:user`)

Просмотрите все доступные иконки на [iconify.design](https://iconify.design/).

## Возможности

- ✅ **Автоматическое кеширование** — Иконки кешируются после первой загрузки
- ✅ **Ленивая загрузка** — Иконки загружаются по требованию
- ✅ **Без дубликатов** — Предотвращает множественные запросы для одной иконки
- ✅ **Обработка ошибок** — Корректно обрабатывает невалидные имена иконок
- ✅ **Доступность** — Правильные ARIA атрибуты для screen readers
- ✅ **Наследование цвета** — Иконки используют `currentColor` для соответствия цвету текста

## Производительность

Иконки автоматически кешируются в памяти после первой загрузки. Если одна и та же иконка используется несколько раз на странице, она будет загружена из API только один раз.

## Примеры

### Иконки навигации

```html
<nav>
  <a href="/home">
    <capsule-icon name="mdi:home"></capsule-icon>
    Главная
  </a>
  <a href="/settings">
    <capsule-icon name="mdi:settings"></capsule-icon>
    Настройки
  </a>
</nav>
```

### Иконки статуса

```html
<div>
  <capsule-icon
    name="mdi:check-circle"
    size="lg"
  ></capsule-icon>
  Успешно
</div>
<div>
  <capsule-icon
    name="mdi:alert-circle"
    size="lg"
  ></capsule-icon>
  Предупреждение
</div>
```

## Доступность

- ✅ `role="img"` для семантического значения
- ✅ `aria-hidden="true"` для декоративных иконок
- ✅ Наследует цвет от родителя для правильного контраста

<style>
.component-demo {
  display: flex;
  gap: 0.5rem;
  flex-wrap: wrap;
  align-items: center;
  margin: 1rem 0;
  padding: 1rem;
  background: var(--vp-c-bg-soft);
  border-radius: 8px;
}
</style>
