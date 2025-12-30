# RadioGroup

A custom radio button group component with smooth animations and icon support. Built with Web Components and fully accessible.

## Installation

```bash
npx @capsuleui/core add RadioGroup
```

## Usage

### Basic RadioGroup

<div style="margin: 1rem 0;">
<capsule-radio-group value="option1">
  <label style="display: flex; align-items: center; gap: 0.5rem; cursor: pointer;">
    <capsule-radio-group-item value="option1"></capsule-radio-group-item>
    <span>Option 1</span>
  </label>
  <label style="display: flex; align-items: center; gap: 0.5rem; cursor: pointer;">
    <capsule-radio-group-item value="option2"></capsule-radio-group-item>
    <span>Option 2</span>
  </label>
  <label style="display: flex; align-items: center; gap: 0.5rem; cursor: pointer;">
    <capsule-radio-group-item value="option3"></capsule-radio-group-item>
    <span>Option 3</span>
  </label>
</capsule-radio-group>
</div>

```html
<capsule-radio-group value="option1">
  <label style="display: flex; align-items: center; gap: 0.5rem;">
    <capsule-radio-group-item value="option1"></capsule-radio-group-item>
    <span>Option 1</span>
  </label>
  <label style="display: flex; align-items: center; gap: 0.5rem;">
    <capsule-radio-group-item value="option2"></capsule-radio-group-item>
    <span>Option 2</span>
  </label>
  <label style="display: flex; align-items: center; gap: 0.5rem;">
    <capsule-radio-group-item value="option3"></capsule-radio-group-item>
    <span>Option 3</span>
  </label>
</capsule-radio-group>
```

### With Custom Icons

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

**Note:** Icons are only visible when the radio item is checked. If no icon is provided, a default circle indicator is shown.

### Disabled State

<div style="margin: 1rem 0;">
<capsule-radio-group value="option1" disabled>
  <label style="display: flex; align-items: center; gap: 0.5rem; cursor: pointer;">
    <capsule-radio-group-item value="option1"></capsule-radio-group-item>
    <span>Option 1</span>
  </label>
  <label style="display: flex; align-items: center; gap: 0.5rem; cursor: pointer;">
    <capsule-radio-group-item value="option2"></capsule-radio-group-item>
    <span>Option 2 (disabled)</span>
  </label>
</capsule-radio-group>
</div>

```html
<capsule-radio-group
  value="option1"
  disabled
>
  <label style="display: flex; align-items: center; gap: 0.5rem;">
    <capsule-radio-group-item value="option1"></capsule-radio-group-item>
    <span>Option 1</span>
  </label>
  <label style="display: flex; align-items: center; gap: 0.5rem;">
    <capsule-radio-group-item value="option2"></capsule-radio-group-item>
    <span>Option 2 (disabled)</span>
  </label>
</capsule-radio-group>
```

### Invalid State

<div style="margin: 1rem 0;">
<capsule-radio-group value="option1">
  <label style="display: flex; align-items: center; gap: 0.5rem; cursor: pointer;">
    <capsule-radio-group-item value="option1" aria-invalid="true"></capsule-radio-group-item>
    <span>Invalid option</span>
  </label>
</capsule-radio-group>
</div>

```html
<capsule-radio-group value="option1">
  <label style="display: flex; align-items: center; gap: 0.5rem;">
    <capsule-radio-group-item
      value="option1"
      aria-invalid="true"
    ></capsule-radio-group-item>
    <span>Invalid option</span>
  </label>
</capsule-radio-group>
```

## API Reference

### Components

| Component                  | Description                                                   |
| -------------------------- | ------------------------------------------------------------- |
| `capsule-radio-group`      | Root container for the radio group                            |
| `capsule-radio-group-item` | Individual radio button item (supports slot for custom icons) |

### Attributes

#### RadioGroup

| Attribute  | Type    | Default | Description              |
| ---------- | ------- | ------- | ------------------------ |
| `value`    | string  | -       | Selected value           |
| `disabled` | boolean | `false` | Disables all radio items |

#### RadioGroupItem

| Attribute      | Type    | Default | Description                              |
| -------------- | ------- | ------- | ---------------------------------------- |
| `value`        | string  | -       | Value of this radio item                 |
| `disabled`     | boolean | `false` | Disables this radio item                 |
| `checked`      | boolean | `false` | Whether this item is checked (read-only) |
| `aria-invalid` | boolean | `false` | Marks radio as invalid for accessibility |

## Features

- ✅ **Smooth animations** - Scale animation for indicator
- ✅ **Custom icons** - Support for custom icons via indicator slot
- ✅ **Keyboard navigation** - Arrow keys and Space/Enter support
- ✅ **Form integration** - Works with native HTML forms
- ✅ **Accessibility** - Full ARIA support and keyboard navigation
- ✅ **Focus states** - Clear focus indicators with ring
- ✅ **Invalid states** - Visual feedback for invalid radios
- ✅ **Dark mode** - Automatic dark mode support

## Styling Details

The RadioGroup component applies the following styles:

- **Item size:** `1rem x 1rem` (size-4)
- **Border:** `1px solid var(--input)`
- **Border radius:** `var(--radius-full)` (circular)
- **Indicator size:** `0.5rem x 0.5rem` (size-2)
- **Gap between items:** `0.75rem` (gap-3)
- **Focus ring:** `3px` ring with `var(--ring)` color
- **Invalid state:** Red border with destructive color ring

## Accessibility

- ✅ `role="radiogroup"` on root container
- ✅ `role="radio"` on each item
- ✅ `aria-checked` for checked state
- ✅ `aria-disabled` for disabled state
- ✅ `aria-invalid` for validation states
- ✅ Keyboard navigation (Arrow keys, Space, Enter)
- ✅ Tabindex management for focus

## Events

```javascript
const radioGroup = document.querySelector('capsule-radio-group');
radioGroup.addEventListener('change', (event) => {
  console.log('Selected value:', event.detail.value);
});
```

## Form Integration

```html
<form>
  <capsule-radio-group
    name="choice"
    value="option1"
  >
    <label style="display: flex; align-items: center; gap: 0.5rem;">
      <capsule-radio-group-item value="option1"></capsule-radio-group-item>
      <span>Option 1</span>
    </label>
    <label style="display: flex; align-items: center; gap: 0.5rem;">
      <capsule-radio-group-item value="option2"></capsule-radio-group-item>
      <span>Option 2</span>
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
