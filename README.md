# **Himaku UI**

*(formerly CapsuleUI – extended fork)*

<p align="center">
  <img src="./public/71d4e75e-f140-4533-b378-77c5b1587def.png" alt="Himaku UI" width="560" />
</p>

<p align="center">
  Native Web Components • Token-Based Theming • Multi Design Systems
</p>

---

## ⚠️ Project Status: Transitional (Read This First)

**Himaku UI is an active fork of CapsuleUI and is currently in transition.**

* The **theme system is real and working**
* Only **some components are fully themed**
* The project still uses the **`capsule` namespace and CLI**
* Rebranding to `himaku` will happen **after broader theme coverage**

👉 If you are **testing or contributing**, this README is accurate.
👉 If you want a **stable, unstyled base**, use **CapsuleUI** instead.

---

## What Is Himaku UI?

**Himaku UI** is an **opinionated extension of CapsuleUI** that introduces:

* A **global design-token system**
* Built-in support for multiple design systems
* Centralized styling instead of per-component duplication
* Theme switching via attributes (Material / Carbon / Default)

CapsuleUI philosophy:

> *Unstyled-by-design • Bring your own design system*

Himaku UI philosophy:

> **Provide a system — but allow switching and overriding**

Breaking changes are **intentional**.

---

## 🎨 Theme System (Current State)

### Available Themes

* `base` – neutral HSL-based foundation
* `google-material` – Material-inspired tokens
* `ibm-carbon` – Carbon-inspired tokens

Themes live in:

```
src/theme/
├── base.css
├── google-material.css
└── ibm-carbon.css
```

Components consume **tokens**, not hardcoded values.

Example:

```css
background: hsl(var(--background));
color: hsl(var(--foreground));
```

Theme-specific overrides:

```css
[theme="material"] .alert { letter-spacing: 0.009em; }
[theme="carbon"] .alert { font-weight: var(--font-weight-semibold); }
```

---

## ✅ What’s Implemented So Far

### Themed Components (5 / 28)

* Alert
* Badge
* KBD
* Breadcrumb
* Tooltip

### Infrastructure

* Global theme CSS system
* CLI support for injecting theme imports
* Automatic `hsl(var(--x))` conversion
* `npm run addAll` helper script

---

## ❌ What Is NOT Done Yet

* Namespace rename (`capsule-*` → `himaku-*`)
* CLI rename (`@capsuleui/core`)
* Full component theming
* `--theme` CLI flag
* npm publication
* Final documentation

All of this is planned.

---

## 🚀 Getting Started (Current Commands)

⚠ **These commands still use the CapsuleUI CLI and namespace**

### Build

```bash
npm run build
```

### Initialize

```bash
node dist/cli.js init -d ./playground
```

Creates:

```
@capsule/
 ├── global.css
 ├── theme/
 └── components/
```

### Add Components

```bash
node dist/cli.js add Alert
node dist/cli.js add Badge
```

### Add All Components

```bash
npm run addAll
```

(Only 5 components currently include theme support.)

### Run Playground

```bash
npm run dev:play
```

---

## Project Structure (Current)

```
@capsule/
 ├── global.css              # global imports + resets
 ├── theme/                  # base + material + carbon
 ├── components/
 │    ├── capsule-alert/
 │    ├── capsule-badge/
 │    └── ...
 └── index.js
```

---

## 🛠️ Contributing (Theme Expansion)

Want to help?

1. Pick an unthemed component
2. Modify CSS in `src/templates/<Component>/`
3. Replace `var(--x)` → `hsl(var(--x))`
4. Add Material + Carbon overrides
5. Test via CLI install
6. Submit PR

Modified components are the best reference.

---

## 🧭 Roadmap

### High Priority

* Finish theming all components
* Introduce `--theme` CLI flag
* Rename namespace to `himaku`
* Rename CLI package

### Medium Priority

* Auto theme detection
* Theme utilities
* Migration guide

### Low Priority

* npm publish
* Dedicated Himaku CLI
* Full docs site

---

## Relationship to CapsuleUI

* Himaku UI is a **fork** of CapsuleUI
* No upstream PRs planned (philosophical divergence)
* Original license preserved
* Original authors credited

---

## License

MIT

This project is a fork of CapsuleUI, originally licensed under MIT.
All original authors retain credit for their work.

---
