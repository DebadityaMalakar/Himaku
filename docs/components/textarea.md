# Textarea

CSS-only component for styling native HTML `<textarea>` elements. Unlike other CapsuleUI components, Textarea is not a Web Component - it's a set of CSS styles that automatically apply to native textarea elements.

## Installation

```bash
npx @capsuleui/core add Textarea
```

## Usage

### Basic Textarea

<div style="margin: 1rem 0;">
<textarea placeholder="Enter your message"></textarea>
</div>

```html
<textarea placeholder="Enter your message"></textarea>
```

**Note:** No custom element tag is needed! The styles are automatically applied to native `<textarea>` elements.

### With Rows

<div style="margin: 1rem 0;">
<textarea placeholder="Enter your message" rows="4"></textarea>
</div>

```html
<textarea
  placeholder="Enter your message"
  rows="4"
></textarea>
```

### Disabled State

<div style="margin: 1rem 0;">
<textarea placeholder="Disabled textarea" disabled></textarea>
</div>

```html
<textarea
  placeholder="Disabled textarea"
  disabled
></textarea>
```

### Invalid State

<div style="margin: 1rem 0;">
<textarea placeholder="Invalid textarea" aria-invalid="true"></textarea>
</div>

```html
<textarea
  placeholder="Invalid textarea"
  aria-invalid="true"
></textarea>
```

### With Label

<div style="margin: 1rem 0;">
<label style="display: block; margin-bottom: 0.5rem; font-size: var(--font-size-sm); font-weight: var(--font-weight-medium);">
  Message
</label>
<textarea placeholder="Enter your message" rows="4"></textarea>
</div>

```html
<label style="display: block; margin-bottom: 0.5rem;"> Message </label>
<textarea
  placeholder="Enter your message"
  rows="4"
></textarea>
```

### Resize Behavior

By default, textarea can be resized vertically. You can control this with CSS:

```html
<textarea style="resize: none;">No resize</textarea>
<textarea style="resize: both;">Resize both</textarea>
<textarea style="resize: horizontal;">Resize horizontal</textarea>
```

## Features

- ✅ **Automatic styling** - No custom element needed, styles apply to native textarea
- ✅ **Focus states** - Clear focus indicators with ring
- ✅ **Invalid states** - Visual feedback for invalid textarea
- ✅ **Disabled states** - Proper disabled styling
- ✅ **Dark mode** - Automatic dark mode support
- ✅ **Accessibility** - Proper ARIA support
- ✅ **Resize control** - Vertical resize by default

## Styling Details

The Textarea component applies the following styles:

- **Min height:** `2.25rem` (h-9)
- **Padding:** `0.5rem 0.75rem` (py-2 px-3)
- **Border:** `1px solid var(--input)`
- **Border radius:** `var(--radius-md)`
- **Font size:** `1rem` (base), `0.875rem` on medium screens and up
- **Resize:** `vertical` (can be changed with CSS)
- **Focus ring:** `3px` ring with `var(--ring)` color
- **Invalid state:** Red border with destructive color ring

## Accessibility

- ✅ Proper focus indicators
- ✅ `aria-invalid` support for validation states
- ✅ Disabled state properly handled
- ✅ Text selection styling matches theme

## Important Notes

⚠️ **This is not a Web Component!** Textarea is a CSS-only component. You use native HTML `<textarea>` elements, and the styles are automatically applied.

Unlike other CapsuleUI components, you don't use a custom element like `<capsule-textarea>`. Just use regular HTML:

```html
<!-- ✅ Correct -->
<textarea placeholder="Enter text"></textarea>

<!-- ❌ Incorrect -->
<capsule-textarea placeholder="Enter text"></capsule-textarea>
```

The styles are automatically applied to all `<textarea>` elements once the Textarea component CSS is imported.

## Differences from Input

Textarea is similar to Input but designed for multi-line text:

- **Input** — Single-line text input
- **Textarea** — Multi-line text input with vertical resize

Both components share the same styling approach and can be used together in forms.
