# **Himaku UI**

*(formerly CapsuleUI – extended fork)*
<p align="center">
  <img src="https://github.com/user-attachments/assets/f2777b1e-0f42-4f99-879d-1f6f27d0075e" alt="Himaku UI" width="560" />
</p>

<p align="center">
  Native Web Components • Token-Based Theming • Multi Design Systems
</p>

---

## 🚀 Project Status: Active Development

**Himaku UI is an evolving fork of CapsuleUI with enhanced theming capabilities.**

✅ **Major Progress Made:**
* **Theme system is fully functional and battle-tested**
* **10+ components now fully themed** (see list below)
* **Card component added** (unique to Himaku UI, not in CapsuleUI)
* **Flat theme implemented** across multiple components
* **Dark mode support** for all themes

📅 **Transition Status:** 
* Currently using `capsule-*` namespace during migration
* CLI still references `@capsuleui/core`
* Rebranding to `himaku-*` will happen organically as development progresses

👉 **For contributors:** This is the active development branch
👉 **For production:** Use tagged releases for stability

---

## 🎨 Advanced Theme System

### Available Design Systems

| Theme | Description | Status |
|-------|-------------|---------|
| `default` | Minimalistic, neutral foundation | ✅ Complete |
| `flat` | Flat design with sharp edges, no shadows | ✅ Complete |
| `google-material` | Material Design 3 implementation | ✅ Complete |
| `ibm-carbon` | IBM Carbon Design System | ✅ Complete |
| `base` | Raw HSL foundation tokens | ✅ Complete |

### Themed Components (Completed)

| Component | Default | Flat | Material | Carbon | Notes |
|-----------|---------|------|----------|--------|-------|
| **Alert** | ✅ | ✅ | ✅ | ✅ | All variants supported |
| **Badge** | ✅ | ✅ | ✅ | ✅ | Extended color variants |
| **Button** | ✅ | ✅ | ✅ | ✅ | 6 variants, 4 sizes |
| **Card** | ✅ | ✅ | ✅ | ✅ | Himaku UI exclusive |
| **Calendar** | ✅ | ✅ | ✅ | ✅ | Date picking with constraints |
| **Accordion** | ✅ | ✅ | ✅ | ✅ | 3 variants with smooth animation |
| **KBD** | ✅ | ✅ | ✅ | ✅ | Keyboard shortcuts |
| **Rating** | ✅ | ✅ | ✅ | ✅ | Interactive star rating |
| **Tooltip** | ✅ | ✅ | ✅ | ✅ | 4 placement positions |
| **Input** | ✅ | ✅ | ✅ | ✅ | All HTML input types |
| **Breadcrumb** | ✅ | ✅ | ✅ | ✅ | With icon support |

### Theme Architecture

```css
/* Token-based styling */
background: hsl(var(--background));
color: hsl(var(--foreground));
border: 1px solid hsl(var(--border));

/* Theme-specific overrides */
[theme="material"] .component {
  letter-spacing: 0.009em;
  font-family: var(--font-family-roboto);
}

[theme="carbon"] .component {
  font-weight: var(--font-weight-semibold);
  letter-spacing: -0.01em;
}

[theme="flat"] .component {
  border-radius: 0;
  box-shadow: none;
  border-width: 2px;
}
```

### Theme Switching
```html
<!-- Switch themes dynamically -->
<html theme="material" data-theme-mode="light">
<!-- or -->
<html theme="carbon" data-theme-mode="dark">
```

---

## ✨ Himaku UI Exclusive Features

### 1. **Card Component**
A comprehensive card system not available in CapsuleUI:
```html
<capsule-card elevated interactive>
  <capsule-card-image 
    src="image.jpg" 
    alt="Card image" 
    ratio="16:9"
  ></capsule-card-image>
  <capsule-card-header>
    <capsule-card-title>Card Title</capsule-card-title>
  </capsule-card-header>
  <capsule-card-body>
    <p>Card content with theme support</p>
  </capsule-card-body>
  <capsule-card-footer alignment="end">
    <button>Action</button>
  </capsule-card-footer>
</capsule-card>
```

### 2. **Enhanced Variant System**
- **Button**: 6 variants (default, destructive, outline, secondary, ghost, link)
- **Alert**: Multiple variants with icon support
- **Badge**: Extended color variants (success, warning, info, destructive)
- **Card**: 4 variants (default, outlined, filled, ghost)

### 3. **Flat Design System**
Complete implementation of flat design principles:
- No rounded corners
- Thicker borders (2-3px)
- No shadow effects
- High contrast colors
- Sharp, clean edges

### 4. **Interactive Components**
- **Rating**: Interactive star rating with precision support
- **Calendar**: Full date picker with range selection
- **Accordion**: Smooth animation with multiple variants
- **Tooltip**: Position-aware tooltips with theme support

---

## 🚀 Getting Started

### Installation
```bash
# Clone the repository
git clone https://github.com/DebadityaMalakar/himaku-ui.git
cd himaku-ui

# Install dependencies
npm install

# Build the project
npm run build
```

### Using Components
```bash
# Initialize in your project (currently uses capsule namespace)
node dist/cli.js init -d ./my-project

# Add themed components
node dist/cli.js add Alert
node dist/cli.js add Card    # Himaku UI exclusive!
node dist/cli.js add Button

# Or add all currently themed components
npm run addAll
```

### Development
```bash
# Run development server with playground
npm run dev:play

# Watch for changes
npm run watch

# Build for production
npm run build:prod
```

---

## 🏗️ Project Structure

```
himaku-ui/
├── src/
│   ├── templates/           # Component templates
│   │   ├── Alert/          # ✅ Fully themed
│   │   ├── Badge/          # ✅ Fully themed
│   │   ├── Button/         # ✅ Fully themed
│   │   ├── Card/           # ✅ Himaku UI exclusive
│   │   ├── Calendar/       # ✅ Fully themed
│   │   ├── Accordion/      # ✅ Fully themed
│   │   ├── KBD/            # ✅ Fully themed
│   │   ├── Rating/         # ✅ Fully themed
│   │   ├── Tooltip/        # ✅ Fully themed
│   │   ├── Input/          # ✅ Fully themed
│   │   ├── Breadcrumb/     # ✅ Fully themed
│   │   └── ...             # ⏳ Remaining components
│   │
│   └── theme/              # Design token systems
│       ├── base.css        # Foundation tokens
│       ├── default.css     # Default theme
│       ├── flat.css        # Flat design theme
│       ├── google-material.css
│       └── ibm-carbon.css
│
├── dist/                   # Built distribution
├── playground/            # Development showcase
└── package.json
```

---

## 🛠️ Contributing

### Theme Expansion Status
**Completed (10/28):** ✅ Alert, Badge, Button, Card, Calendar, Accordion, KBD, Rating, Tooltip, Input, Breadcrumb  
**Pending (18/28):** ⏳ Avatar, Checkbox, Dialog, Dropdown, Form, Label, Menu, Modal, Popover, Progress, Radio, Select, Separator, Slider, Switch, Table, Tabs, Textarea

### How to Contribute

1. **Pick a component** from the pending list
2. **Follow the pattern** established by completed components:
   ```css
   /* Convert hardcoded values to tokens */
   var(--color) → hsl(var(--color))
   
   /* Add theme-specific adjustments */
   [theme="material"] component { ... }
   [theme="carbon"] component { ... }
   [theme="flat"] component { ... }
   ```
3. **Test thoroughly** with theme switching
4. **Submit PR** with component name in title

### Contribution Guidelines
- Maintain backward compatibility during transition
- Follow existing CSS architecture patterns
- Include all theme variants (default, flat, material, carbon)
- Test dark/light mode for each theme
- Update this README with progress

---

## 🧭 Development Path

### Completed Milestones
- [x] Implement Card component (Himaku UI exclusive)
- [x] Complete theming for 10+ core components  
- [x] Develop Flat design system
- [x] Create comprehensive theme showcase

### Current Focus
- [ ] Complete theming for remaining 18 components
- [ ] Add `--theme` flag to CLI for theme selection
- [ ] Finalize migration guide from CapsuleUI

### Future Considerations
- Rebrand to `himaku-*` namespace (when appropriate)
- Create comprehensive documentation
- Consider npm publication if community interest grows

---

## 📚 Documentation & Resources

### Quick Links
- [Component Showcase](playground/index.html) - Live demo of all themed components
- [Theme Playground](playground/index.html) - Interactive theme switching
- [Migration Guide](docs/migration.md) - Coming soon
- [API Reference](docs/api.md) - Coming soon

### Examples
```html
<!-- Theme switching example -->
<button onclick="document.documentElement.setAttribute('theme', 'material')">
  Switch to Material
</button>

<!-- Using Himaku UI Card -->
<capsule-card variant="outlined" elevated>
  <capsule-card-title>Himaku UI Exclusive</capsule-card-title>
  <capsule-card-body>
    This card component doesn't exist in CapsuleUI!
  </capsule-card-body>
</capsule-card>
```

---

## Relationship to CapsuleUI
<p align="left">
  <img src="./public/71d4e75e-f140-4533-b378-77c5b1587def.png" alt="CapsuleUI" width="120" />
</p>

* Himaku UI is a **fork** of CapsuleUI
* No upstream PRs planned (philosophical divergence)
* Original license preserved
* Original authors credited

**Philosophical Differences:**
- **CapsuleUI**: Unstyled-by-design, bring your own system
- **Himaku UI**: Opinionated theming with multiple built-in design systems

**Technical Additions:**
- Card component (Himaku UI exclusive)
- Extended variant systems across components
- Complete Flat design theme implementation
- Enhanced theme consistency and token-based styling

---

## 📄 License

MIT License

Copyright (c) 2023 Himaku UI Contributors  
Copyright (c) 2023 Original CapsuleUI Authors

Permission is hereby granted, free of charge, to any person obtaining a copy
of this software and associated documentation files (the "Software"), to deal
in the Software without restriction, including without limitation the rights
to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
copies of the Software, and to permit persons to whom the Software is
furnished to do so, subject to the following conditions:

The above copyright notice and this permission notice shall be included in all
copies or substantial portions of the Software.

---

## 🙏 Acknowledgments

- **CapsuleUI Team** for the original unstyled component foundation
- **Material Design Team** for design system inspiration
- **IBM Carbon Team** for enterprise design patterns
- **All Contributors** who helped expand the theming system

---

<p align="center">
  <em>Development happens organically at irregular speed – contributions welcome anytime!</em>
</p>