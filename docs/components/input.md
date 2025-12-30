# Input

CSS-only component for styling native HTML `<input>` elements. Unlike other CapsuleUI components, Input is not a Web Component - it's a set of CSS styles that automatically apply to native input elements.

## Installation

```bash
npx @capsuleui/core add Input
```

## Usage

### Basic Input

<div style="margin: 1rem 0;">
<input type="text" placeholder="Enter your name" />
</div>

```html
<input
  type="text"
  placeholder="Enter your name"
/>
```

**Note:** No custom element tag is needed! The styles are automatically applied to native `<input>` elements.

### Input Types

The Input styles work with all standard input types:

<div style="margin: 1rem 0; display: flex; flex-direction: column; gap: 0.5rem;">
<input type="text" placeholder="Text input" />
<input type="email" placeholder="Email input" />
<input type="password" placeholder="Password input" />
<input type="number" placeholder="Number input" />
<input type="tel" placeholder="Phone input" />
<input type="url" placeholder="URL input" />
<input type="search" placeholder="Search input" />
<input type="date" />
<input type="time" />
</div>

```html
<input
  type="text"
  placeholder="Text input"
/>
<input
  type="email"
  placeholder="Email input"
/>
<input
  type="password"
  placeholder="Password input"
/>
<input
  type="number"
  placeholder="Number input"
/>
<input
  type="tel"
  placeholder="Phone input"
/>
<input
  type="url"
  placeholder="URL input"
/>
<input
  type="search"
  placeholder="Search input"
/>
<input type="date" />
<input type="time" />
```

### Disabled State

<div style="margin: 1rem 0; display: flex; flex-direction: column; gap: 0.5rem;">
<input type="text" placeholder="Disabled input" disabled />
</div>

```html
<input
  type="text"
  placeholder="Disabled input"
  disabled
/>
```

### Invalid State

<div style="margin: 1rem 0; display: flex; flex-direction: column; gap: 0.5rem;">
<input type="email" placeholder="Invalid email" aria-invalid="true" value="not-an-email" />
</div>

```html
<input
  type="email"
  placeholder="Invalid email"
  aria-invalid="true"
  value="not-an-email"
/>
```

### With Label

<div style="margin: 1rem 0;">
<label style="display: block; margin-bottom: 0.5rem; font-size: var(--font-size-sm); font-weight: var(--font-weight-medium);">
  Email Address
</label>
<input type="email" placeholder="you@example.com" />
</div>

```html
<label style="display: block; margin-bottom: 0.5rem;"> Email Address </label>
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

## Features

- ✅ **Automatic styling** - No custom element needed, styles apply to native inputs
- ✅ **All input types** - Works with text, email, password, number, date, etc.
- ✅ **Focus states** - Clear focus indicators with ring
- ✅ **Invalid states** - Visual feedback for invalid inputs
- ✅ **Disabled states** - Proper disabled styling
- ✅ **Dark mode** - Automatic dark mode support
- ✅ **Accessibility** - Proper ARIA support

## Supported Input Types

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

## Styling Details

The Input component applies the following styles:

- **Height:** `2.25rem` (h-9)
- **Padding:** `0.25rem 0.75rem` (py-1 px-3)
- **Border:** `1px solid var(--input)`
- **Border radius:** `var(--radius-md)`
- **Font size:** `1rem` (base), `0.875rem` on medium screens and up
- **Focus ring:** `3px` ring with `var(--ring)` color
- **Invalid state:** Red border with destructive color ring

## Accessibility

- ✅ Proper focus indicators
- ✅ `aria-invalid` support for validation states
- ✅ Disabled state properly handled
- ✅ Text selection styling matches theme

## Important Notes

⚠️ **This is not a Web Component!** Input is a CSS-only component. You use native HTML `<input>` elements, and the styles are automatically applied.

Unlike other CapsuleUI components, you don't use a custom element like `<capsule-input>`. Just use regular HTML:

```html
<!-- ✅ Correct -->
<input
  type="text"
  placeholder="Enter text"
/>

<!-- ❌ Incorrect -->
<capsule-input
  type="text"
  placeholder="Enter text"
/>
```

The styles are automatically applied to all `<input>` elements once the Input component CSS is imported.

> **Note:** For multi-line text input, use the [Textarea](/components/textarea) component instead.
