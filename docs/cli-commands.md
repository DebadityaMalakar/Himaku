# CLI Commands

CapsuleUI provides a simple CLI to manage your components and project setup. All commands are prefixed with `npx capsule`.

## Commands

### `npx @capsuleui/core init`

Initializes CapsuleUI in your project. Creates the `@capsule` folder with global styles and utilities.

**Usage:**

```bash
npx @capsuleui/core init
```

**Options:**

- `-d, --dir <directory>` - Base directory where `@capsule` will be created (default: project root)

**Example:**

```bash
# Initialize in project root
npx @capsuleui/core init

# Initialize in src directory
npx @capsuleui/core init -d src
```

**What it does:**

- Creates `@capsule` folder structure
- Copies global styles and utilities
- Sets up component registry

---

### `npx @capsuleui/core add <component>`

Adds a component to your project from the available templates.

**Usage:**

```bash
npx @capsuleui/core add <component-name>
```

**Options:**

- `-p, --prefix <prefix>` - Custom element prefix (default: `capsule`)

**Examples:**

```bash
# Add a Button component with default prefix
npx @capsuleui/core add Button

# Add a Button component with custom prefix
npx @capsuleui/core add Button --prefix ui

# Add multiple components
npx @capsuleui/core add Button
npx @capsuleui/core add Alert
npx @capsuleui/core add Accordion
```

**What it does:**

1. Copies component files from templates
2. Replaces `__PREFIX__` and `__COMPONENT__` placeholders
3. Renames files to match your prefix (e.g., `capsule-button.js`)
4. Imports CSS files into global styles
5. Imports JavaScript files into components index
6. Updates VS Code settings if needed

---

### `npx @capsuleui/core list`

Lists all available components that can be added to your project.

**Usage:**

```bash
npx @capsuleui/core list
```

**Example output:**

```
Available components:

  - Accordion
  - Alert
  - Autocomplete
  - Badge
  - Breadcrumb
  - Button
  - ButtonGroup
  - Chip
  - Divider
  - Pagination
  - Range
  - Rating
  - ScrollArea
  - Skeleton
  - Stepper
  - Switch
  - Tabs
  - Tooltip
```

---

### `npx @capsuleui/core module <action> [name]`

Manages modules in your project (like form validation utilities).

**Usage:**

```bash
npx @capsuleui/core module <action> [name]
```

**Actions:**

- `add <name>` - Add a module to your project
- `remove <name>` - Remove a module from your project
- `list` - List all available modules

**Examples:**

```bash
# List available modules
npx @capsuleui/core module list

# Add a specific module
npx @capsuleui/core module add form

# Remove a module
npx @capsuleui/core module remove form
```

**Available modules:**

- `form` - Form validation utilities

---

### `npx @capsuleui/core debug`

Helps debug CapsuleUI installation and configuration issues.

**Usage:**

```bash
npx @capsuleui/core debug
```

**What it does:**

- Checks if `@capsule` folder exists
- Validates component structure
- Shows current configuration
- Provides troubleshooting information

---

### `npx @capsuleui/core vscode`

Updates VS Code settings for better autocomplete and IntelliSense support.

**Usage:**

```bash
npx @capsuleui/core vscode
```

**What it does:**

- Updates VS Code HTML custom data
- Enables IntelliSense for component attributes
- Improves autocomplete in VS Code

---

## Global Options

All commands support these global options:

- `--help, -h` - Display help for the command
- `--version, -v` - Display version number

## Tips

- Always run `npx @capsuleui/core init` first in a new project
- Use `npx @capsuleui/core list` to see all available components
- Components are case-sensitive (use `Button` not `button`)
- Custom prefixes must be lowercase and contain no special characters
