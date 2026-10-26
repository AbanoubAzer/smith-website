import { defineConfig } from 'astro/config';

export default defineConfig({
  site: 'https://abanoubazer.github.io',
  base: '/smith-website',
  output: 'static',
  trailingSlash: 'always',
  i18n: {
    defaultLocale: 'en',
    locales: ['en', 'ar'],
    routing: {
      prefixDefaultLocale: false,
    },
  },
});
