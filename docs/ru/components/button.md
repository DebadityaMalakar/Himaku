# Button

Интерактивный компонент кнопки с различными вариантами стилей, размеров и состояний. Построен на стандарте Web Components с полной поддержкой доступности.

## Быстрый старт

```bash
npx @capsuleui/core add Button
```

```html
<capsule-button>Нажми меня</capsule-button>
```

## Демонстрация

### Основные варианты

<div class="component-demo">
  <capsule-button variant="default">По умолчанию</capsule-button>
  <capsule-button variant="secondary">Вторичный</capsule-button>
  <capsule-button variant="outline">Контурный</capsule-button>
  <capsule-button variant="ghost">Прозрачный</capsule-button>
  <capsule-button variant="link">Ссылка</capsule-button>
  <capsule-button variant="destructive">Опасный</capsule-button>
</div>

```html
<capsule-button variant="default">По умолчанию</capsule-button>
<capsule-button variant="secondary">Вторичный</capsule-button>
<capsule-button variant="outline">Контурный</capsule-button>
<capsule-button variant="ghost">Прозрачный</capsule-button>
<capsule-button variant="link">Ссылка</capsule-button>
<capsule-button variant="destructive">Опасный</capsule-button>
```

### Размеры

<div class="component-demo">
  <capsule-button size="sm">Маленький</capsule-button>
  <capsule-button size="default">По умолчанию</capsule-button>
  <capsule-button size="lg">Большой</capsule-button>
  <capsule-button size="icon">
    <svg width="16" height="16" viewBox="0 0 16 16" fill="currentColor">
      <path d="M8 0L10.5 5.5L16 8L10.5 10.5L8 16L5.5 10.5L0 8L5.5 5.5L8 0Z"/>
    </svg>
  </capsule-button>
</div>

```html
<capsule-button size="sm">Маленький</capsule-button>
<capsule-button size="default">По умолчанию</capsule-button>
<capsule-button size="lg">Большой</capsule-button>
<capsule-button size="icon">
  <svg>...</svg>
</capsule-button>
```

### Состояния

<div class="component-demo">
  <capsule-button>Normal</capsule-button>
  <capsule-button disabled>Disabled</capsule-button>
</div>

```html
<capsule-button>Normal</capsule-button>
<capsule-button disabled>Disabled</capsule-button>
```

## Справочник API

### Атрибуты

| Атрибут    | Тип     | По умолчанию | Описание                         |
| ---------- | ------- | ------------ | -------------------------------- |
| `variant`  | string  | `default`    | Вариант стиля кнопки             |
| `size`     | string  | `default`    | Размер кнопки                    |
| `disabled` | boolean | `false`      | Отключенное состояние            |
| `type`     | string  | `button`     | Тип кнопки (button/submit/reset) |

### Доступные значения

- **variant**:

  - `default` — Основное действие (по умолчанию)
  - `secondary` — Второстепенное действие
  - `outline` — Контурная кнопка с границей
  - `ghost` — Прозрачная кнопка с эффектом при наведении
  - `link` — Кнопка в стиле ссылки с подчеркиванием
  - `destructive` — Опасное/деструктивное действие

- **size**:

  - `default` — Размер по умолчанию (высота 2.25rem)
  - `sm` — Маленький (высота 2rem)
  - `lg` — Большой (высота 2.5rem)
  - `icon` — Кнопка-иконка (2.25rem × 2.25rem)
  - `icon-sm` — Маленькая кнопка-иконка (2rem × 2rem)
  - `icon-lg` — Большая кнопка-иконка (2.5rem × 2.5rem)

## События

```javascript
const button = document.querySelector('capsule-button');
button.addEventListener('click', (event) => {
  console.log('Кнопка нажата!', event);
});
```

## Интеграция с формами

```html
<form id="myForm">
  <input
    type="text"
    name="username"
    required
  />
  <capsule-button type="submit">Отправить</capsule-button>
  <capsule-button type="reset">Сбросить</capsule-button>
</form>
```

## Доступность

- ✅ Навигация с клавиатуры (Enter/Space)
- ✅ ARIA атрибуты для скринридеров
- ✅ Управление фокусом
- ✅ Корректная обработка disabled состояния
- ✅ Поддержка ассоциации с формами

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
