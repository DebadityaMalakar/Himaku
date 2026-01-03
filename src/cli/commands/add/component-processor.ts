import fs from 'fs';
import path from 'path';

/**
 * Обработка компонентов - минификация, переименование файлов
 */

/**
 * Обработка JS файлов - минификация и удаление import/export
 * register.js обрабатывается отдельно - только минификация, без удаления import/export
 */
export function processJsFiles(
  destComponentDir: string,
  jsFiles: string[],
): void {
  for (const jf of jsFiles) {
    const jsPath = path.join(destComponentDir, jf);
    let jsCode = fs.readFileSync(jsPath, 'utf8');

    // Для register.js - просто копируем исходник
    if (jf === 'register.js') {
      fs.writeFileSync(jsPath, jsCode, 'utf8');
      continue;
    }

    fs.writeFileSync(jsPath, jsCode, 'utf8');
  }
}

/**
 * Обработка CSS файлов - обновление переменных и добавление тематических стилей
 * Примечание: Импорты тем НЕ добавляются в компонентные CSS файлы,
 * так как global.css уже импортирует темы и затем импортирует все компоненты
 */
export function processCssFiles(
  destComponentDir: string,
  cssFiles: string[],
  prefix: string,
  kebabComponent: string,
  templateDir: string
): void {
  for (const cssFile of cssFiles) {
    const cssPath = path.join(destComponentDir, cssFile);
    let cssContent = fs.readFileSync(cssPath, 'utf8');

    // 1. Обновить использование CSS переменных для работы с HSL
    cssContent = updateCssVariables(cssContent);

    // 2. Добавить тематические стили для компонента
    cssContent = addThemeSpecificStyles(cssContent, prefix, kebabComponent);

    fs.writeFileSync(cssPath, cssContent, 'utf8');
    console.log(`Processed CSS file: ${cssFile}`);
  }
}

/**
 * Обновление CSS переменных для правильного использования HSL
 */
function updateCssVariables(cssContent: string): string {
  // Список переменных, которые нужно обернуть в hsl()
  const hslVariables = [
    'background',
    'foreground',
    'card',
    'card-foreground',
    'popover',
    'popover-foreground',
    'primary',
    'primary-foreground',
    'secondary',
    'secondary-foreground',
    'muted',
    'muted-foreground',
    'accent',
    'accent-foreground',
    'destructive',
    'destructive-foreground',
    'border',
    'input',
    'ring'
  ];

  // Регулярные выражения для поиска использования переменных
  hslVariables.forEach(variable => {
    // Для простых назначений: property: var(--variable);
    const simpleRegex = new RegExp(`(:|\\s)var\\(--${variable}\\)`, 'g');
    cssContent = cssContent.replace(simpleRegex, `$1hsl(var(--${variable}))`);

    // Для использования в color-mix
    const colorMixRegex = new RegExp(`color-mix\\([^)]*var\\(--${variable}\\)`, 'g');
    cssContent = cssContent.replace(colorMixRegex, match => 
      match.replace(`var(--${variable})`, `hsl(var(--${variable}))`)
    );
  });

  return cssContent;
}

/**
 * Добавление тематических стилей для компонента
 */
function addThemeSpecificStyles(
  cssContent: string,
  prefix: string,
  kebabComponent: string
): string {
  const componentSelector = `${prefix}-${kebabComponent}`;
  
  const themeStyles = `

/* Theme-specific adjustments */

/* IBM Carbon theme */
[theme="carbon"] ${componentSelector} {
  border-width: 1px;
  letter-spacing: -0.01em;
}

[theme="carbon"] ${componentSelector}-title {
  font-weight: var(--font-weight-semibold, 600);
  letter-spacing: -0.02em;
}

[theme="carbon"] ${componentSelector}-description {
  letter-spacing: -0.01em;
}

/* Material theme */
[theme="material"] ${componentSelector} {
  border-width: 1px;
  box-shadow: var(--shadow-sm, 0 1px 2px rgba(0,0,0,0.3));
}

[theme="material"] ${componentSelector}-title {
  font-weight: var(--font-weight-medium, 500);
  letter-spacing: 0.009em;
}

[theme="material"] ${componentSelector}-description {
  line-height: 1.75;
  letter-spacing: 0.009em;
}

/* Dark mode adjustments */
@media (prefers-color-scheme: dark) {
  ${componentSelector} {
    /* Dark mode specific adjustments */
  }
}

[data-theme-mode="dark"] ${componentSelector} {
  /* Manual dark mode adjustments */
}

[data-theme-mode="light"] ${componentSelector} {
  /* Manual light mode adjustments */
}`;

  // Добавляем стили тем в конец файла, если их еще нет
  if (!cssContent.includes('/* Theme-specific adjustments */')) {
    cssContent += themeStyles;
  }

  return cssContent;
}

/**
 * Переименование основных файлов компонента с правильным префиксом
 */
export function renameComponentFiles(
  destComponentDir: string,
  kebabComponent: string,
  prefix: string
): string[] {
  const files = fs.readdirSync(destComponentDir);
  for (const file of files) {
    if (file !== 'index.js' && file.startsWith(kebabComponent)) {
      const newFileName = `${prefix}-${kebabComponent}${file.slice(
        kebabComponent.length
      )}`;
      const oldPath = path.join(destComponentDir, file);
      const newPath = path.join(destComponentDir, newFileName);
      fs.renameSync(oldPath, newPath);
    }
  }

  // Возвращаем обновленный список файлов
  return fs.readdirSync(destComponentDir);
}

/**
 * Копирование файлов тем в целевую директорию
 */
export function copyThemeFiles(
  sourceThemeDir: string,
  destThemeDir: string
): void {
  if (!fs.existsSync(sourceThemeDir)) {
    console.log(`Source theme directory not found: ${sourceThemeDir}`);
    return;
  }

  // Создаем целевую директорию тем, если ее нет
  if (!fs.existsSync(destThemeDir)) {
    fs.mkdirSync(destThemeDir, { recursive: true });
  }

  // Копируем файлы тем
  const themeFiles = ['base.css', 'default.css', 'ibm-carbon.css', 'google-material.css', 'flat.css'];
  
  for (const themeFile of themeFiles) {
    const sourcePath = path.join(sourceThemeDir, themeFile);
    const destPath = path.join(destThemeDir, themeFile);
    
    if (fs.existsSync(sourcePath)) {
      fs.copyFileSync(sourcePath, destPath);
      console.log(`Copied theme file: ${themeFile}`);
    } else {
      console.log(`Theme file not found: ${themeFile}`);
    }
  }
}

/**
 * Очистка временных файлов
 */
export function cleanupTempFiles(destComponentDir: string): void {
  const indexPath = path.join(destComponentDir, 'index.js');
  if (fs.existsSync(indexPath)) {
    fs.unlinkSync(indexPath);
  }
}

/**
 * Обновление глобального CSS с импортами тем
 */
export function updateGlobalCssWithThemes(
  globalCssPath: string,
  themeDir: string
): void {
  if (!fs.existsSync(globalCssPath)) {
    console.log(`Global CSS not found: ${globalCssPath}`);
    return;
  }

  let globalCss = fs.readFileSync(globalCssPath, 'utf8');
  
  // Calculate relative path from global.css to theme directory
  let relativePath = path.relative(path.dirname(globalCssPath), themeDir).replace(/\\/g, '/');
  
  // FIX: Vite requires explicit ./ prefix for relative paths
  if (!relativePath.startsWith('.')) {
    relativePath = './' + relativePath;
  }
  
  // Добавляем импорты тем, если их еще нет
  const themeImports = `/* CapsuleUI Theme System */
@import url('${relativePath}/base.css');
@import url('${relativePath}/ibm-carbon.css');
@import url('${relativePath}/google-material.css');\n\n`;

  // Check if theme imports already exist
  if (!globalCss.includes('CapsuleUI Theme System') && !globalCss.includes(`${relativePath}/base.css`)) {
    globalCss = themeImports + globalCss;
    fs.writeFileSync(globalCssPath, globalCss, 'utf8');
    console.log('Added theme imports to global.css');
  }
}