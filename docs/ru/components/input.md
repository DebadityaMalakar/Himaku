# Input

CSS-only компонент для стилизации нативных HTML элементов `<input>`. В отличие от других компонентов CapsuleUI, Input не является Web Component - это набор CSS стилей, которые автоматически применяются к нативным элементам input.

## Установка

```bash
npx @capsuleui/core add Input
```

## Использование

### Базовый Input

<div style="margin: 1rem 0;">
<input type="text" placeholder="Введите ваше имя" />
</div>

```html
<input
  type="text"
  placeholder="Введите ваше имя"
/>
```

**Примечание:** Не нужен кастомный тег! Стили автоматически применяются к нативным элементам `<input>`.

### Типы Input

Стили Input работают со всеми стандартными типами input:

<div style="margin: 1rem 0; display: flex; flex-direction: column; gap: 0.5rem;">
<input type="text" placeholder="Текстовый input" />
<input type="email" placeholder="Email input" />
<input type="password" placeholder="Пароль" />
<input type="number" placeholder="Число" />
<input type="tel" placeholder="Телефон" />
<input type="url" placeholder="URL" />
<input type="search" placeholder="Поиск" />
<input type="date" />
<input type="time" />
</div>

```html
<input
  type="text"
  placeholder="Текстовый input"
/>
<input
  type="email"
  placeholder="Email input"
/>
<input
  type="password"
  placeholder="Пароль"
/>
<input
  type="number"
  placeholder="Число"
/>
<input
  type="tel"
  placeholder="Телефон"
/>
<input
  type="url"
  placeholder="URL"
/>
<input
  type="search"
  placeholder="Поиск"
/>
<input type="date" />
<input type="time" />
```

### Отключенное состояние

<div style="margin: 1rem 0; display: flex; flex-direction: column; gap: 0.5rem;">
<input type="text" placeholder="Отключенный input" disabled />
</div>

```html
<input
  type="text"
  placeholder="Отключенный input"
  disabled
/>
```

### Невалидное состояние

<div style="margin: 1rem 0; display: flex; flex-direction: column; gap: 0.5rem;">
<input type="email" placeholder="Невалидный email" aria-invalid="true" value="не-email" />
</div>

```html
<input
  type="email"
  placeholder="Невалидный email"
  aria-invalid="true"
  value="не-email"
/>
```

### С меткой

<div style="margin: 1rem 0;">
<label style="display: block; margin-bottom: 0.5rem; font-size: var(--font-size-sm); font-weight: var(--font-weight-medium);">
  Email адрес
</label>
<input type="email" placeholder="you@example.com" />
</div>

```html
<label style="display: block; margin-bottom: 0.5rem;"> Email адрес </label>
<input
  type="email"
  placeholder="you@example.com"
/>
```

### File Input

<div style="margin: 1rem 0;">
<input type="file" />
</div>

```html
<input type="file" />
```

## Возможности

- ✅ **Автоматическая стилизация** - Не нужен кастомный элемент, стили применяются к нативным input
- ✅ **Все типы input** - Работает с text, email, password, number, date и т.д.
- ✅ **Состояния фокуса** - Четкие индикаторы фокуса с кольцом
- ✅ **Невалидные состояния** - Визуальная обратная связь для невалидных input
- ✅ **Отключенные состояния** - Правильная стилизация disabled
- ✅ **Темная тема** - Автоматическая поддержка темной темы
- ✅ **Доступность** - Правильная поддержка ARIA

## Поддерживаемые типы Input

- `text`
- `email`
- `password`
- `number`
- `tel`
- `url`
- `search`
- `date`
- `time`
- `datetime-local`
- `month`
- `week`
- `file`

## Детали стилизации

Компонент Input применяет следующие стили:

- **Высота:** `2.25rem` (h-9)
- **Отступы:** `0.25rem 0.75rem` (py-1 px-3)
- **Граница:** `1px solid var(--input)`
- **Скругление:** `var(--radius-md)`
- **Размер шрифта:** `1rem` (базовый), `0.875rem` на средних экранах и выше
- **Кольцо фокуса:** `3px` кольцо с цветом `var(--ring)`
- **Невалидное состояние:** Красная граница с кольцом деструктивного цвета

## Доступность

- ✅ Правильные индикаторы фокуса
- ✅ Поддержка `aria-invalid` для состояний валидации
- ✅ Правильная обработка отключенного состояния
- ✅ Стилизация выделения текста соответствует теме

## Важные примечания

⚠️ **Это не Web Component!** Input - это CSS-only компонент. Вы используете нативные HTML элементы `<input>`, и стили автоматически применяются.

В отличие от других компонентов CapsuleUI, вы не используете кастомный элемент типа `<capsule-input>`. Просто используйте обычный HTML:

```html
<!-- ✅ Правильно -->
<input
  type="text"
  placeholder="Введите текст"
/>

<!-- ❌ Неправильно -->
<capsule-input
  type="text"
  placeholder="Введите текст"
/>
```

Стили автоматически применяются ко всем элементам `<input>` после импорта CSS компонента Input.

> **Примечание:** Для многострочного текстового ввода используйте компонент [Textarea](/ru/components/textarea) вместо этого.
