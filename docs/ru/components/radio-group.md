# RadioGroup

Компонент группы радио-кнопок с плавными анимациями и поддержкой иконок. Построен на Web Components и полностью доступен.

## Установка

```bash
npx @zizigy/capsule add RadioGroup
```

## Использование

### Базовый RadioGroup

<div style="margin: 1rem 0;">
<capsule-radio-group value="option1">
  <label style="display: flex; align-items: center; gap: 0.5rem; cursor: pointer;">
    <capsule-radio-group-item value="option1"></capsule-radio-group-item>
    <span>Вариант 1</span>
  </label>
  <label style="display: flex; align-items: center; gap: 0.5rem; cursor: pointer;">
    <capsule-radio-group-item value="option2"></capsule-radio-group-item>
    <span>Вариант 2</span>
  </label>
  <label style="display: flex; align-items: center; gap: 0.5rem; cursor: pointer;">
    <capsule-radio-group-item value="option3"></capsule-radio-group-item>
    <span>Вариант 3</span>
  </label>
</capsule-radio-group>
</div>

```html
<capsule-radio-group value="option1">
  <label style="display: flex; align-items: center; gap: 0.5rem;">
    <capsule-radio-group-item value="option1"></capsule-radio-group-item>
    <span>Вариант 1</span>
  </label>
  <label style="display: flex; align-items: center; gap: 0.5rem;">
    <capsule-radio-group-item value="option2"></capsule-radio-group-item>
    <span>Вариант 2</span>
  </label>
  <label style="display: flex; align-items: center; gap: 0.5rem;">
    <capsule-radio-group-item value="option3"></capsule-radio-group-item>
    <span>Вариант 3</span>
  </label>
</capsule-radio-group>
```

### С кастомными иконками

<div style="margin: 1rem 0;">
<capsule-radio-group value="apple">
  <label style="display: flex; align-items: center; gap: 0.5rem; cursor: pointer;">
    <capsule-radio-group-item value="apple">
      <capsule-icon name="mdi:apple"></capsule-icon>
    </capsule-radio-group-item>
    <span>Apple</span>
  </label>
  <label style="display: flex; align-items: center; gap: 0.5rem; cursor: pointer;">
    <capsule-radio-group-item value="android">
      <capsule-icon name="mdi:android"></capsule-icon>
    </capsule-radio-group-item>
    <span>Android</span>
  </label>
</capsule-radio-group>
</div>

```html
<capsule-radio-group value="apple">
  <label style="display: flex; align-items: center; gap: 0.5rem;">
    <capsule-radio-group-item value="apple">
      <capsule-icon name="mdi:apple"></capsule-icon>
    </capsule-radio-group-item>
    <span>Apple</span>
  </label>
  <label style="display: flex; align-items: center; gap: 0.5rem;">
    <capsule-radio-group-item value="android">
      <capsule-icon name="mdi:android"></capsule-icon>
    </capsule-radio-group-item>
    <span>Android</span>
  </label>
</capsule-radio-group>
```

**Примечание:** Иконки видны только когда радио-кнопка выбрана. Если иконка не предоставлена, показывается точка по умолчанию.

### Отключенное состояние

<div style="margin: 1rem 0;">
<capsule-radio-group value="option1" disabled>
  <label style="display: flex; align-items: center; gap: 0.5rem; cursor: pointer;">
    <capsule-radio-group-item value="option1"></capsule-radio-group-item>
    <span>Вариант 1</span>
  </label>
  <label style="display: flex; align-items: center; gap: 0.5rem; cursor: pointer;">
    <capsule-radio-group-item value="option2"></capsule-radio-group-item>
    <span>Вариант 2 (отключен)</span>
  </label>
</capsule-radio-group>
</div>

```html
<capsule-radio-group value="option1" disabled>
  <label style="display: flex; align-items: center; gap: 0.5rem;">
    <capsule-radio-group-item value="option1"></capsule-radio-group-item>
    <span>Вариант 1</span>
  </label>
  <label style="display: flex; align-items: center; gap: 0.5rem;">
    <capsule-radio-group-item value="option2"></capsule-radio-group-item>
    <span>Вариант 2 (отключен)</span>
  </label>
</capsule-radio-group>
```

### Невалидное состояние

<div style="margin: 1rem 0;">
<capsule-radio-group value="option1">
  <label style="display: flex; align-items: center; gap: 0.5rem; cursor: pointer;">
    <capsule-radio-group-item value="option1" aria-invalid="true"></capsule-radio-group-item>
    <span>Невалидный вариант</span>
  </label>
</capsule-radio-group>
</div>

```html
<capsule-radio-group value="option1">
  <label style="display: flex; align-items: center; gap: 0.5rem;">
    <capsule-radio-group-item value="option1" aria-invalid="true"></capsule-radio-group-item>
    <span>Невалидный вариант</span>
  </label>
</capsule-radio-group>
```

## Справочник API

### Компоненты

| Компонент                      | Описание                              |
| ------------------------------ | ------------------------------------- |
| `capsule-radio-group`          | Корневой контейнер для группы         |
| `capsule-radio-group-item`     | Отдельный элемент радио-кнопки (поддерживает слот для кастомных иконок) |

### Атрибуты

#### RadioGroup

| Атрибут   | Тип     | По умолчанию | Описание                    |
| --------- | ------- | ------------ | --------------------------- |
| `value`   | string  | -            | Выбранное значение          |
| `disabled` | boolean | `false`      | Отключает все радио-кнопки  |

#### RadioGroupItem

| Атрибут       | Тип     | По умолчанию | Описание                                    |
| ------------- | ------- | ------------ | ------------------------------------------- |
| `value`       | string  | -            | Значение этого элемента                     |
| `disabled`    | boolean | `false`      | Отключает этот элемент                      |
| `checked`     | boolean | `false`      | Выбран ли этот элемент (только для чтения)  |
| `aria-invalid` | boolean | `false`      | Помечает радио как невалидный для доступности |

## Возможности

- ✅ **Плавные анимации** - Анимация масштабирования для индикатора
- ✅ **Кастомные иконки** - Поддержка кастомных иконок через слот indicator
- ✅ **Навигация с клавиатуры** - Поддержка стрелок и Space/Enter
- ✅ **Интеграция с формами** - Работает с нативными HTML формами
- ✅ **Доступность** - Полная поддержка ARIA и навигации с клавиатуры
- ✅ **Состояния фокуса** - Четкие индикаторы фокуса с кольцом
- ✅ **Невалидные состояния** - Визуальная обратная связь для невалидных радио
- ✅ **Темная тема** - Автоматическая поддержка темной темы

## Детали стилизации

Компонент RadioGroup применяет следующие стили:

- **Размер элемента:** `1rem x 1rem` (size-4)
- **Граница:** `1px solid var(--input)`
- **Скругление:** `var(--radius-full)` (круглая форма)
- **Размер индикатора:** `0.5rem x 0.5rem` (size-2)
- **Отступ между элементами:** `0.75rem` (gap-3)
- **Кольцо фокуса:** `3px` кольцо с цветом `var(--ring)`
- **Невалидное состояние:** Красная граница с кольцом деструктивного цвета

## Доступность

- ✅ `role="radiogroup"` на корневом контейнере
- ✅ `role="radio"` на каждом элементе
- ✅ `aria-checked` для состояния checked
- ✅ `aria-disabled` для состояния disabled
- ✅ `aria-invalid` для состояний валидации
- ✅ Навигация с клавиатуры (Стрелки, Space, Enter)
- ✅ Управление tabindex для фокуса

## События

```javascript
const radioGroup = document.querySelector('capsule-radio-group');
radioGroup.addEventListener('change', (event) => {
  console.log('Выбранное значение:', event.detail.value);
});
```

## Интеграция с формами

```html
<form>
  <capsule-radio-group name="choice" value="option1">
    <label style="display: flex; align-items: center; gap: 0.5rem;">
      <capsule-radio-group-item value="option1"></capsule-radio-group-item>
      <span>Вариант 1</span>
    </label>
    <label style="display: flex; align-items: center; gap: 0.5rem;">
      <capsule-radio-group-item value="option2"></capsule-radio-group-item>
      <span>Вариант 2</span>
    </label>
  </capsule-radio-group>
</form>
```

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

