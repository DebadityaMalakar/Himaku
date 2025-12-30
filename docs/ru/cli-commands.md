# Команды CLI

CapsuleUI предоставляет простой CLI для управления компонентами и настройкой проекта. Все команды используют префикс `npx capsule`.

## Команды

### `npx @capsuleui/core init`

Инициализирует CapsuleUI в вашем проекте. Создает папку `@capsule` с глобальными стилями и утилитами.

**Использование:**

```bash
npx @capsuleui/core init
```

**Опции:**

- `-d, --dir <directory>` - Базовая директория, где будет создана папка `@capsule` (по умолчанию: корень проекта)

**Примеры:**

```bash
# Инициализация в корне проекта
npx @capsuleui/core init

# Инициализация в директории src
npx @capsuleui/core init -d src
```

**Что делает:**

- Создает структуру папки `@capsule`
- Копирует глобальные стили и утилиты
- Настраивает регистр компонентов

---

### `npx @capsuleui/core add <component>`

Добавляет компонент в ваш проект из доступных шаблонов.

**Использование:**

```bash
npx @capsuleui/core add <имя-компонента>
```

**Опции:**

- `-p, --prefix <prefix>` - Пользовательский префикс элемента (по умолчанию: `capsule`)

**Примеры:**

```bash
# Добавить компонент Button с префиксом по умолчанию
npx @capsuleui/core add Button

# Добавить компонент Button с пользовательским префиксом
npx @capsuleui/core add Button --prefix ui

# Добавить несколько компонентов
npx @capsuleui/core add Button
npx @capsuleui/core add Alert
npx @capsuleui/core add Accordion
```

**Что делает:**

1. Копирует файлы компонента из шаблонов
2. Заменяет плейсхолдеры `__PREFIX__` и `__COMPONENT__`
3. Переименовывает файлы в соответствии с вашим префиксом (например, `capsule-button.js`)
4. Импортирует CSS файлы в глобальные стили
5. Импортирует JavaScript файлы в индекс компонентов
6. Обновляет настройки VS Code при необходимости

---

### `npx @capsuleui/core list`

Показывает список всех доступных компонентов, которые можно добавить в проект.

**Использование:**

```bash
npx @capsuleui/core list
```

**Пример вывода:**

```
Доступные компоненты:

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

Управляет модулями в вашем проекте (например, утилитами валидации форм).

**Использование:**

```bash
npx @capsuleui/core module <action> [name]
```

**Действия:**

- `add <name>` - Добавить модуль в ваш проект
- `remove <name>` - Удалить модуль из вашего проекта
- `list` - Показать список всех доступных модулей

**Примеры:**

```bash
# Показать доступные модули
npx @capsuleui/core module list

# Добавить конкретный модуль
npx @capsuleui/core module add form

# Удалить модуль
npx @capsuleui/core module remove form
```

**Доступные модули:**

- `form` - Утилиты валидации форм

---

### `npx @capsuleui/core debug`

Помогает отладить проблемы с установкой и конфигурацией CapsuleUI.

**Использование:**

```bash
npx @capsuleui/core debug
```

**Что делает:**

- Проверяет существование папки `@capsule`
- Валидирует структуру компонентов
- Показывает текущую конфигурацию
- Предоставляет информацию для устранения неполадок

---

### `npx @capsuleui/core vscode`

Обновляет настройки VS Code для лучшей поддержки автодополнения и IntelliSense.

**Использование:**

```bash
npx @capsuleui/core vscode
```

**Что делает:**

- Обновляет пользовательские данные HTML для VS Code
- Включает IntelliSense для атрибутов компонентов
- Улучшает автодополнение в VS Code

---

## Глобальные опции

Все команды поддерживают эти глобальные опции:

- `--help, -h` - Показать справку по команде
- `--version, -v` - Показать номер версии

## Советы

- Всегда запускайте `npx @capsuleui/core init` сначала в новом проекте
- Используйте `npx @capsuleui/core list` чтобы увидеть все доступные компоненты
- Имена компонентов чувствительны к регистру (используйте `Button` а не `button`)
- Пользовательские префиксы должны быть в нижнем регистре и не содержать специальных символов
