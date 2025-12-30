# Badge

A small status descriptor for labeling or counting items. Badges appear next to notifications, avatars, or icons to indicate a status, value, or special attribute.

## Installation

```bash
npx @capsuleui/core add Badge
```

## Usage

### Basic Badge

<div style="margin: 1rem 0;">
<capsule-badge>Badge</capsule-badge>
</div>

```html
<capsule-badge>Badge</capsule-badge>
```

### Variants

<div style="margin: 1rem 0; display: flex; gap: 0.5rem; flex-wrap: wrap; align-items: center;">
<capsule-badge variant="default">Default</capsule-badge>
<capsule-badge variant="secondary">Secondary</capsule-badge>
<capsule-badge variant="destructive">Destructive</capsule-badge>
<capsule-badge variant="outline">Outline</capsule-badge>
</div>

```html
<capsule-badge variant="default">Default</capsule-badge>
<capsule-badge variant="secondary">Secondary</capsule-badge>
<capsule-badge variant="destructive">Destructive</capsule-badge>
<capsule-badge variant="outline">Outline</capsule-badge>
```

### With Icons

<div style="margin: 1rem 0; display: flex; gap: 0.5rem; flex-wrap: wrap; align-items: center;">
<capsule-badge>
  <svg width="12" height="12" viewBox="0 0 12 12" fill="currentColor">
    <path d="M6 0L7.5 4.5L12 6L7.5 7.5L6 12L4.5 7.5L0 6L4.5 4.5L6 0Z"/>
  </svg>
  New
</capsule-badge>
</div>

```html
<capsule-badge>
  <svg width="12" height="12" viewBox="0 0 12 12" fill="currentColor">
    <path d="M6 0L7.5 4.5L12 6L7.5 7.5L6 12L4.5 7.5L0 6L4.5 4.5L6 0Z"/>
  </svg>
  New
</capsule-badge>
```

## API Reference

### Attributes

| Attribute | Type   | Default    | Description          |
| --------- | ------ | ---------- | -------------------- |
| `variant` | string | `default`  | Badge style variant |

### Variant Values

- `default` — Primary badge with primary background (default)
- `secondary` — Secondary badge with secondary background
- `destructive` — Destructive badge with destructive background
- `outline` — Outlined badge with border and transparent background

## Features

- ✅ **Simple and lightweight** — Just renders slot content
- ✅ **Shadcn-style variants** — Matches Shadcn UI design system
- ✅ **Icon support** — Can contain SVG icons
- ✅ **Focus states** — Proper focus indicators
- ✅ **Dark mode** — Automatic dark mode support
- ✅ **Accessibility** — Proper ARIA attributes

## Styling Details

The Badge component applies the following styles:

- **Border radius:** `var(--radius-full)` (fully rounded)
- **Padding:** `0.125rem 0.5rem`
- **Font size:** `var(--font-size-xs)` (0.75rem)
- **Font weight:** `var(--font-weight-medium)`
- **Icon size:** `0.75rem` (12px) for SVG children
- **Gap:** `0.25rem` between icon and text

## Accessibility

- ✅ Proper focus indicators with ring
- ✅ ARIA attributes for screen readers
- ✅ `aria-invalid` support for validation states
