# Button

Interactive button component with multiple style variants, sizes, and states. Built on Web Components with full accessibility support.

## Quick Start

```bash
npx @capsuleui/core add Button
```

```html
<capsule-button>Click me</capsule-button>
```

## Showcase

### Core Variants

<div class="component-demo">
  <capsule-button variant="default">Default</capsule-button>
  <capsule-button variant="secondary">Secondary</capsule-button>
  <capsule-button variant="outline">Outline</capsule-button>
  <capsule-button variant="ghost">Ghost</capsule-button>
  <capsule-button variant="link">Link</capsule-button>
  <capsule-button variant="destructive">Destructive</capsule-button>
</div>

```html
<capsule-button variant="default">Default</capsule-button>
<capsule-button variant="secondary">Secondary</capsule-button>
<capsule-button variant="outline">Outline</capsule-button>
<capsule-button variant="ghost">Ghost</capsule-button>
<capsule-button variant="link">Link</capsule-button>
<capsule-button variant="destructive">Destructive</capsule-button>
```

### Sizes

<div class="component-demo">
  <capsule-button size="sm">Small</capsule-button>
  <capsule-button size="default">Default</capsule-button>
  <capsule-button size="lg">Large</capsule-button>
  <capsule-button size="icon">
    <svg width="16" height="16" viewBox="0 0 16 16" fill="currentColor">
      <path d="M8 0L10.5 5.5L16 8L10.5 10.5L8 16L5.5 10.5L0 8L5.5 5.5L8 0Z"/>
    </svg>
  </capsule-button>
</div>

```html
<capsule-button size="sm">Small</capsule-button>
<capsule-button size="default">Default</capsule-button>
<capsule-button size="lg">Large</capsule-button>
<capsule-button size="icon">
  <svg>...</svg>
</capsule-button>
```

### States

<div class="component-demo">
  <capsule-button>Normal</capsule-button>
  <capsule-button disabled>Disabled</capsule-button>
</div>

```html
<capsule-button>Normal</capsule-button>
<capsule-button disabled>Disabled</capsule-button>
```

## API Reference

### Attributes

| Attribute  | Type    | Default    | Description                             |
| ---------- | ------- | ---------- | --------------------------------------- |
| `variant`  | string  | `default` | Button style variant                    |
| `size`     | string  | `default`  | Button size                             |
| `disabled` | boolean | `false`    | Disabled state                          |
| `type`     | string  | `button`   | Button type (`button`/`submit`/`reset`) |

### Allowed Values

- **variant:**

  - `default` — Primary action (default)
  - `secondary` — Secondary action
  - `outline` — Outlined button with border
  - `ghost` — Transparent button with hover effect
  - `link` — Link-style button with underline
  - `destructive` — Destructive/danger action

- **size:**

  - `default` — Default size (2.25rem height)
  - `sm` — Small (2rem height)
  - `lg` — Large (2.5rem height)
  - `icon` — Icon button (2.25rem × 2.25rem)
  - `icon-sm` — Small icon button (2rem × 2rem)
  - `icon-lg` — Large icon button (2.5rem × 2.5rem)

## Events

```javascript
const button = document.querySelector('capsule-button');
button.addEventListener('click', (event) => {
  console.log('Button clicked!', event);
});
```

## Form Integration

```html
<form id="myForm">
  <input
    type="text"
    name="username"
    required
  />
  <capsule-button type="submit">Submit</capsule-button>
  <capsule-button type="reset">Reset</capsule-button>
</form>
```

## Accessibility

- ✅ Keyboard navigation (Enter/Space)
- ✅ ARIA attributes for screen readers
- ✅ Focus management
- ✅ Proper disabled state handling
- ✅ Form association support

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
