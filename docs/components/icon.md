# Icon

Icon component that loads SVG icons from [Iconify](https://iconify.design/) API. Supports thousands of icon sets including Material Design Icons, Heroicons, Font Awesome, and more.

## Installation

```bash
npx @zizigy/capsule add Icon
```

## Usage

### Basic Icon

<div style="margin: 1rem 0;">
<capsule-icon name="mdi:arrow-all"></capsule-icon>
</div>

```html
<capsule-icon name="mdi:arrow-all"></capsule-icon>
```

### Icon Sets

Icon component supports all icon sets available on Iconify. Use the format `{collection}:{icon-name}`:

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

### Sizes

<div style="margin: 1rem 0; display: flex; gap: 1rem; align-items: center; flex-wrap: wrap;">
<capsule-icon name="mdi:star" size="xs"></capsule-icon>
<capsule-icon name="mdi:star" size="sm"></capsule-icon>
<capsule-icon name="mdi:star" size="md"></capsule-icon>
<capsule-icon name="mdi:star" size="lg"></capsule-icon>
<capsule-icon name="mdi:star" size="xl"></capsule-icon>
</div>

```html
<capsule-icon name="mdi:star" size="xs"></capsule-icon>
<capsule-icon name="mdi:star" size="sm"></capsule-icon>
<capsule-icon name="mdi:star" size="md"></capsule-icon>
<capsule-icon name="mdi:star" size="lg"></capsule-icon>
<capsule-icon name="mdi:star" size="xl"></capsule-icon>
```

### Custom Size

You can also use custom CSS values for size:

<div style="margin: 1rem 0; display: flex; gap: 1rem; align-items: center; flex-wrap: wrap;">
<capsule-icon name="mdi:check-circle" size="2rem"></capsule-icon>
<capsule-icon name="mdi:check-circle" size="3rem"></capsule-icon>
</div>

```html
<capsule-icon name="mdi:check-circle" size="2rem"></capsule-icon>
<capsule-icon name="mdi:check-circle" size="3rem"></capsule-icon>
```

### With Text

Icons inherit the text color and can be used inline with text:

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

### In Buttons

<div style="margin: 1rem 0; display: flex; gap: 0.5rem; flex-wrap: wrap;">
<capsule-button>
  <capsule-icon name="mdi:download"></capsule-icon>
  Download
</capsule-button>
<capsule-button variant="outline">
  <capsule-icon name="mdi:heart"></capsule-icon>
  Like
</capsule-button>
</div>

```html
<capsule-button>
  <capsule-icon name="mdi:download"></capsule-icon>
  Download
</capsule-button>
<capsule-button variant="outline">
  <capsule-icon name="mdi:heart"></capsule-icon>
  Like
</capsule-button>
```

## API Reference

### Attributes

| Attribute | Type   | Default | Description                                    |
| --------- | ------ | ------- | ---------------------------------------------- |
| `name`    | string | -       | Icon name in format `{collection}:{icon-name}` |
| `size`    | string | `1em`   | Icon size (xs, sm, md, lg, xl, or custom CSS)  |

### Size Values

- `xs` — 0.75rem (12px)
- `sm` — 1rem (16px)
- `md` — 1.25rem (20px)
- `lg` — 1.5rem (24px)
- `xl` — 2rem (32px)
- Custom — Any valid CSS size value (e.g., `2rem`, `24px`, `1.5em`)

### Popular Icon Collections

- **Material Design Icons** — `mdi:*` (e.g., `mdi:home`, `mdi:account`)
- **Heroicons** — `heroicons:*` (e.g., `heroicons:arrow-right`, `heroicons:heart`)
- **Lucide** — `lucide:*` (e.g., `lucide:search`, `lucide:settings`)
- **Carbon** — `carbon:*` (e.g., `carbon:settings`, `carbon:user`)
- **Font Awesome** — `fa:*` (e.g., `fa:home`, `fa:user`)
- **Feather** — `fe:*` (e.g., `fe:home`, `fe:user`)

Browse all available icons at [iconify.design](https://iconify.design/).

## Features

- ✅ **Automatic caching** — Icons are cached after first load
- ✅ **Lazy loading** — Icons load on demand
- ✅ **No duplicates** — Prevents multiple requests for the same icon
- ✅ **Error handling** — Gracefully handles invalid icon names
- ✅ **Accessibility** — Proper ARIA attributes for screen readers
- ✅ **Color inheritance** — Icons use `currentColor` to match text color

## Performance

Icons are automatically cached in memory after the first load. If the same icon is used multiple times on a page, it will only be fetched once from the API.

## Examples

### Navigation Icons

```html
<nav>
  <a href="/home">
    <capsule-icon name="mdi:home"></capsule-icon>
    Home
  </a>
  <a href="/settings">
    <capsule-icon name="mdi:settings"></capsule-icon>
    Settings
  </a>
</nav>
```

### Status Icons

```html
<div>
  <capsule-icon name="mdi:check-circle" size="lg"></capsule-icon>
  Success
</div>
<div>
  <capsule-icon name="mdi:alert-circle" size="lg"></capsule-icon>
  Warning
</div>
```

## Accessibility

- ✅ `role="img"` for semantic meaning
- ✅ `aria-hidden="true"` for decorative icons
- ✅ Inherits color from parent for proper contrast

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

