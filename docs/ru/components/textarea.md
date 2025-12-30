# Textarea

CSS-only компонент для стилизации нативных HTML элементов `<textarea>`. В отличие от других компонентов CapsuleUI, Textarea не является Web Component - это набор CSS стилей, которые автоматически применяются к нативным элементам textarea.

## Установка

```bash
npx @capsuleui/core add Textarea
```

## Использование

### Базовый Textarea

<div style="margin: 1rem 0;">
<textarea placeholder="Введите ваше сообщение"></textarea>
</div>

```html
<textarea placeholder="Введите ваше сообщение"></textarea>
```

**Примечание:** Не нужен кастомный тег! Стили автоматически применяются к нативным элементам `<textarea>`.

### С количеством строк

<div style="margin: 1rem 0;">
<textarea placeholder="Введите ваше сообщение" rows="4"></textarea>
</div>

```html
<textarea
  placeholder="Введите ваше сообщение"
  rows="4"
></textarea>
```

### Отключенное состояние

<div style="margin: 1rem 0;">
<textarea placeholder="Отключенный textarea" disabled></textarea>
</div>

```html
<textarea
  placeholder="Отключенный textarea"
  disabled
></textarea>
```

### Невалидное состояние

<div style="margin: 1rem 0;">
<textarea placeholder="Невалидный textarea" aria-invalid="true"></textarea>
</div>

```html
<textarea
  placeholder="Невалидный textarea"
  aria-invalid="true"
></textarea>
```

### С меткой

<div style="margin: 1rem 0;">
<label style="display: block; margin-bottom: 0.5rem; font-size: var(--font-size-sm); font-weight: var(--font-weight-medium);">
  Сообщение
</label>
<textarea placeholder="Введите ваше сообщение" rows="4"></textarea>
</div>

```html
<label style="display: block; margin-bottom: 0.5rem;"> Сообщение </label>
<textarea
  placeholder="Введите ваше сообщение"
  rows="4"
></textarea>
```

### Поведение изменения размера

По умолчанию textarea можно изменять размер по вертикали. Вы можете контролировать это с помощью CSS:

```html
<textarea style="resize: none;">Без изменения размера</textarea>
<textarea style="resize: both;">Изменение в обе стороны</textarea>
<textarea style="resize: horizontal;">Изменение по горизонтали</textarea>
```

## Возможности

- ✅ **Автоматическая стилизация** - Не нужен кастомный элемент, стили применяются к нативным textarea
- ✅ **Состояния фокуса** - Четкие индикаторы фокуса с кольцом
- ✅ **Невалидные состояния** - Визуальная обратная связь для невалидных textarea
- ✅ **Отключенные состояния** - Правильная стилизация disabled
- ✅ **Темная тема** - Автоматическая поддержка темной темы
- ✅ **Доступность** - Правильная поддержка ARIA
- ✅ **Контроль изменения размера** - Вертикальное изменение размера по умолчанию

## Детали стилизации

Компонент Textarea применяет следующие стили:

- **Минимальная высота:** `2.25rem` (h-9)
- **Отступы:** `0.5rem 0.75rem` (py-2 px-3)
- **Граница:** `1px solid var(--input)`
- **Скругление:** `var(--radius-md)`
- **Размер шрифта:** `1rem` (базовый), `0.875rem` на средних экранах и выше
- **Изменение размера:** `vertical` (можно изменить с помощью CSS)
- **Кольцо фокуса:** `3px` кольцо с цветом `var(--ring)`
- **Невалидное состояние:** Красная граница с кольцом деструктивного цвета

## Доступность

- ✅ Правильные индикаторы фокуса
- ✅ Поддержка `aria-invalid` для состояний валидации
- ✅ Правильная обработка отключенного состояния
- ✅ Стилизация выделения текста соответствует теме

## Важные примечания

⚠️ **Это не Web Component!** Textarea - это CSS-only компонент. Вы используете нативные HTML элементы `<textarea>`, и стили автоматически применяются.

В отличие от других компонентов CapsuleUI, вы не используете кастомный элемент типа `<capsule-textarea>`. Просто используйте обычный HTML:

```html
<!-- ✅ Правильно -->
<textarea placeholder="Введите текст"></textarea>

<!-- ❌ Неправильно -->
<capsule-textarea placeholder="Введите текст"></capsule-textarea>
```

Стили автоматически применяются ко всем элементам `<textarea>` после импорта CSS компонента Textarea.

## Отличия от Input

Textarea похож на Input, но предназначен для многострочного текста:

- **Input** — Однострочный текстовый ввод
- **Textarea** — Многострочный текстовый ввод с вертикальным изменением размера

Оба компонента используют одинаковый подход к стилизации и могут использоваться вместе в формах.
