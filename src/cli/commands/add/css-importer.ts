import fs from 'fs';
import path from 'path';

/**
 * Утилиты для автоматического импорта CSS файлов в global.css
 */

/**
 * Автоматический импорт CSS файлов в global.css
 */
export function importCssFiles(
  capsuleRoot: string,
  cssFiles: string[],
  prefix: string,
  kebabComponent: string
): void {
  if (cssFiles.length === 0) return;

  console.log(`CSS files saved: ${cssFiles.join(', ')}`);

  try {
    const globalCssPath = path.join(capsuleRoot, 'global.css');
    if (!fs.existsSync(globalCssPath)) {
      console.log(
        'Warning: @capsule/global.css not found. Skipped auto-import.'
      );
      return;
    }

    let globalCss = fs.readFileSync(globalCssPath, 'utf8');

    // Calculate relative path from global.css to theme directory
    const themeDir = path.join(capsuleRoot, 'theme');
    let relativePath = path.relative(path.dirname(globalCssPath), themeDir).replace(/\\/g, '/');
    
    // FIX: Vite requires explicit ./ prefix for relative paths
    if (!relativePath.startsWith('.')) {
      relativePath = './' + relativePath;
    }

    // FIX: Updated theme import paths to use correct relative path
    const themeImports = [
      `@import url('${relativePath}/base.css');`,
      `@import url('${relativePath}/default.css');`,
      `@import url('${relativePath}/ibm-carbon.css');`,
      `@import url('${relativePath}/google-material.css');`,
      `@import url('${relativePath}/flat.css');`
    ];

    // Add theme imports if not present
    let themeImportsAdded = false;
    for (const themeImport of themeImports) {
      if (!globalCss.includes(themeImport)) {
        globalCss = themeImport + '\n' + globalCss;
        themeImportsAdded = true;
      }
    }

    if (themeImportsAdded) {
      console.log('Added theme imports to global.css');
    }

    // Вставляем каждый импорт компонента после theme imports
    for (let i = cssFiles.length - 1; i >= 0; i--) {
      const cssf = cssFiles[i];
      
      // Check if it's a component CSS file (not a theme file)
      if (cssf.includes('.style.css')) {
        const importPath = `./components/${prefix}-${kebabComponent}/${cssf}`;
        const alreadyImported = new RegExp(
          String.raw`@import\s+url\(['\"]?${importPath.replace(
            /[-\/\\.^$*+?()|\[\]{}]/g,
            (r) => r
          )}['\"]?\)\s*;`
        ).test(globalCss);

        if (!alreadyImported) {
          const importLine = `@import url('${importPath}');`;
          
          // Insert after theme imports (find the first non-import line)
          const lines = globalCss.split(/\r?\n/);
          let insertIndex = 0;
          
          // Skip theme imports and any other imports
          while (insertIndex < lines.length && 
                 (lines[insertIndex].trim().startsWith('@import') || 
                  lines[insertIndex].trim() === '')) {
            insertIndex++;
          }
          
          lines.splice(insertIndex, 0, importLine);
          globalCss = lines.join('\n');
        }
      }
    }

    if (!globalCss.endsWith('\n')) globalCss += '\n';
    fs.writeFileSync(globalCssPath, globalCss, 'utf8');
    console.log(
      `Updated global.css with imports for: ${cssFiles.filter(f => f.includes('.style.css')).join(', ')}`
    );
  } catch (e) {
    console.log(
      'Warning: failed to update @capsule/global.css:',
      (e as Error).message
    );
  }
}

/**
 * Import theme CSS files into component CSS
 */
export function importThemesIntoComponentCss(
  componentCssPath: string,
  themePath: string
): void {
  if (!fs.existsSync(componentCssPath)) return;

  let componentCss = fs.readFileSync(componentCssPath, 'utf8');
  
  // FIX: Updated theme import paths to point to ../../theme (from @capsule/components/component-name/)
  const themeImports = [
    '@import url(\'../../theme/base.css\');',
    '@import url(\'../../theme/ibm-carbon.css\');',
    '@import url(\'../../theme/google-material.css\');'
  ];

  // Remove any existing theme imports to avoid duplicates
  componentCss = componentCss.replace(/@import\s+url\(['"]?\.\.\/\.\.\/theme\/[^'"]*['"]?\);\s*/g, '');

  // Add theme imports at the beginning
  const importsToAdd = themeImports.join('\n') + '\n\n';
  componentCss = importsToAdd + componentCss;

  fs.writeFileSync(componentCssPath, componentCss, 'utf8');
  console.log(`Added theme imports to component CSS: ${componentCssPath}`);
}

/**
 * Check if theme files exist and copy them if needed
 */
export function ensureThemeFilesExist(
  capsuleRoot: string,
  sourceThemeDir: string
): void {
  const themeFiles = ['base.css', 'ibm-carbon.css', 'google-material.css'];
  const destThemeDir = path.join(capsuleRoot, 'theme');
  
  // Create theme directory if it doesn't exist
  if (!fs.existsSync(destThemeDir)) {
    fs.mkdirSync(destThemeDir, { recursive: true });
  }

  // Copy theme files if they don't exist
  for (const themeFile of themeFiles) {
    const sourcePath = path.join(sourceThemeDir, themeFile);
    const destPath = path.join(destThemeDir, themeFile);
    
    if (fs.existsSync(sourcePath) && !fs.existsSync(destPath)) {
      fs.copyFileSync(sourcePath, destPath);
      console.log(`Copied theme file: ${themeFile}`);
    }
  }
}