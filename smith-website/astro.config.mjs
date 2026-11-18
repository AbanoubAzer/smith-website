import { defineConfig } from 'astro/config';

export default defineConfig({
  site: 'https://eit-co.com',
  base: '/',
  output: 'static',
  trailingSlash: 'always',
  vite: {
    css: {
      postcss: {},
    },
  },
  i18n: {
    defaultLocale: 'en',
    locales: ['en', 'ar'],
    routing: {
      prefixDefaultLocale: false,
    },
  },
});
