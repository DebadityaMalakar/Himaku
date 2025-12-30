// https://vitepress.dev/guide/custom-theme
import type { Theme } from 'vitepress';
import DefaultTheme from 'vitepress/theme';
import './style.css';
import '../../@capsule/global.css';

export default {
  extends: DefaultTheme,
  enhanceApp({ app, router, siteData }) {
    // ...

    if (typeof window !== 'undefined') {
      import('../../@capsule');
    }
  },
} satisfies Theme;
