import fs from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';
import { createSpinner, findTemplatesDir } from '../../utils';
import { copyDir, ensureDir } from '../../filesystem';

import {
  toKebabCase,
  walkDirAndReplace,
  renameFilesWithPlaceholders,
  findCapsuleRoot,
} from './file-operations';
import {
  processJsFiles,
  processCssFiles,
  renameComponentFiles,
  cleanupTempFiles,
  copyThemeFiles,
  updateGlobalCssWithThemes,
} from './component-processor';
import { importCssFiles } from './css-importer';
import { importJsFiles } from './js-importer';
import { updateVscodeSettings } from './vscode-updater';

// Get __dirname in ESM module
const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

// Helper function to find the theme directory
function findThemeDir(startDir: string): string {
  let currentDir = startDir;

  // In development mode - from dist/cli/commands/add, go to src/theme
  const devThemePath = path.join(currentDir, '../../../src/theme');
  if (fs.existsSync(devThemePath)) {
    return devThemePath;
  }

  // In published package - find package root first
  let pkgPath = currentDir;
  for (let i = 0; i < 10; i++) {
    if (fs.existsSync(path.join(pkgPath, 'package.json'))) {
      break;
    }
    pkgPath = path.join(pkgPath, '..');
  }

  // Check different paths relative to package root
  const paths = [
    path.join(pkgPath, 'src', 'theme'),
    path.join(pkgPath, 'theme'),
  ];

  for (const p of paths) {
    if (fs.existsSync(p)) {
      return p;
    }
  }

  // If not found, return first path (for error output)
  return paths[0];
}

// Console colors
const colors = {
  blue: (text: string) => `\x1b[34m${text}\x1b[0m`,
  green: (text: string) => `\x1b[32m${text}\x1b[0m`,
  red: (text: string) => `\x1b[31m${text}\x1b[0m`,
  yellow: (text: string) => `\x1b[33m${text}\x1b[0m`,
  cyan: (text: string) => `\x1b[36m${text}\x1b[0m`,
};

export const add = {
  command: 'add <component>',
  description: 'Add a component to your project',
  options: [
    {
      flags: '-p, --prefix <prefix>',
      description: 'Custom element prefix (e.g. ui)',
      defaultValue: '',
    },
    {
      flags: '-m, --minify',
      description: 'Minify resulting JS',
      defaultValue: false,
    },
    {
      flags: '-t, --theme <theme>',
      description: 'Include specific theme (default, material, carbon, all)',
      defaultValue: 'all',
    },
  ],
  action: async (
    component: string,
    options: {
      prefix?: string;
      theme?: string;
    }
  ) => {
    const spinner = createSpinner(
      `Installing component ${colors.blue(component)} with theme support...`
    );

    try {
      const projectDir = process.cwd();
      const templateDir = findTemplatesDir(__dirname);
      const componentPath = path.join(templateDir, component);
      
      if (!fs.existsSync(componentPath)) {
        spinner.fail(`Component ${colors.red(component)} not found`);

        // Show available components
        const availableComponents = fs
          .readdirSync(templateDir)
          .filter((file) =>
            fs.statSync(path.join(templateDir, file)).isDirectory()
          );

        if (availableComponents.length > 0) {
          console.log(colors.yellow('\nAvailable components:'));
          availableComponents.forEach((comp) => {
            console.log(`  - ${comp}`);
          });
        } else {
          console.log(colors.yellow('\nNo available components in templates.'));
        }

        process.exit(1);
      }

      const capsuleRoot = findCapsuleRoot(projectDir);
      if (!capsuleRoot) {
        spinner.fail(
          `Could not find '@capsule' folder in the project. Run 'npx @capsuleui/core init' first.`
        );
        process.exit(1);
      }

      const destDir = path.join(capsuleRoot, 'components');
      ensureDir(destDir);
      
      const prefix = (options.prefix && options.prefix.trim()) || 'capsule';
      const kebabComponent = toKebabCase(component);
      const destComponentDir = path.join(
        destDir,
        `${prefix}-${kebabComponent}`
      );
      
      // Check if component already exists
      if (fs.existsSync(destComponentDir)) {
        spinner.fail(
          `Component ${colors.red(component)} already exists at ${colors.blue(destComponentDir)}`
        );
        process.exit(1);
      }

      // Copy component template
      copyDir(componentPath, destComponentDir);

      // STEP 1: Copy theme files from source to capsule root
      spinner.text(`Setting up theme system...`);

      // FIX: Use the same pattern as findTemplatesDir
      const sourceThemeDir = findThemeDir(__dirname);
      const destThemeDir = path.join(capsuleRoot, 'theme');
      
      // Debug logging (optional - remove in production)
      console.log(`\nLooking for themes in: ${sourceThemeDir}`);
      console.log(`Themes exist: ${fs.existsSync(sourceThemeDir)}`);
      
      copyThemeFiles(sourceThemeDir, destThemeDir);

      // STEP 2: Update global.css with theme imports
      const globalCssPath = path.join(capsuleRoot, 'global.css');
      updateGlobalCssWithThemes(globalCssPath, destThemeDir);

      // STEP 3: Replace placeholders in all component files
      spinner.text('Processing component files...');
      walkDirAndReplace(destComponentDir, prefix, kebabComponent);

      // STEP 4: Rename files with placeholders in names
      renameFilesWithPlaceholders(destComponentDir, prefix, kebabComponent);

      // STEP 5: Rename main component files
      const renamedFiles = renameComponentFiles(
        destComponentDir,
        kebabComponent,
        prefix
      );

      // Collect all files for processing
      const jsFiles = renamedFiles.filter(
        (f) => f.endsWith('.js') && f !== 'index.js'
      );
      const cssFiles = renamedFiles.filter((f) => f.endsWith('.style.css'));
      const readmeFile = renamedFiles.find((f) => f.endsWith('.md'));
      const registerFile = renamedFiles.find((f) => f === 'register.js');

      if (jsFiles.length === 0) {
        throw new Error('No main JavaScript file found for component');
      }

      if (!registerFile) {
        throw new Error(
          'register.js not found - required for proper loading sequence'
        );
      }

      // STEP 6: Process CSS files (add theme imports and update variables)
      if (cssFiles.length > 0) {
        spinner.text('Processing CSS files with theme support...');
        processCssFiles(destComponentDir, cssFiles, prefix, kebabComponent, templateDir);
      }

      // STEP 7: Process JS files (minification and import/export removal)
      spinner.text('Processing JavaScript files...');
      processJsFiles(destComponentDir, jsFiles);

      // STEP 8: Auto-import CSS into global.css
      if (cssFiles.length > 0) {
        spinner.text('Updating global styles...');
        importCssFiles(capsuleRoot, cssFiles, prefix, kebabComponent);
      }

      if (readmeFile) {
        console.log(`Documentation saved: ${readmeFile}`);
      }

      // STEP 9: Clean up temporary files
      cleanupTempFiles(destComponentDir);

      // STEP 10: Auto-import JS files into @capsule/components/all.js
      spinner.text('Setting up JavaScript imports...');
      importJsFiles(capsuleRoot, jsFiles, prefix, kebabComponent);

      // STEP 11: Update VS Code settings for IntelliSense
      spinner.text('Updating VS Code settings...');
      const vscodeDataPath = path.join(destComponentDir, 'vscode.data.json');
      updateVscodeSettings(projectDir, destComponentDir, vscodeDataPath);

      spinner.succeed(
        `Component ${colors.green(
          component
        )} successfully installed in ${colors.blue(
          path.join('@capsule', 'components', `${prefix}-${kebabComponent}`)
        )} with prefix ${colors.cyan(prefix)}`
      );

      // Display theme usage instructions
      console.log(colors.cyan('\nTheme Usage Instructions:'));
      console.log('  Set theme attribute on <html> element:');
      console.log(`    <html theme="default">     - Open Sans, light/dark mode`);
      console.log(`    <html theme="material">    - Roboto, Material Design`);
      console.log(`    <html theme="carbon">      - IBM Plex, IBM Carbon`);
      console.log('\n  Control light/dark mode:');
      console.log(`    <html theme="material" data-theme-mode="dark">`);
      console.log(`    <html theme="carbon" data-theme-mode="light">`);

    } catch (error) {
      spinner.fail(`Installation error: ${(error as Error).message}`);
      console.error(error);
      process.exit(1);
    }
  },
};