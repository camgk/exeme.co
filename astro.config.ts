import { defineConfig } from 'astro/config';
import sitemap from '@astrojs/sitemap';

// GitHub Pages setup:
// - For a custom domain, set SITE to that full URL and leave BASE_PATH as "/".
// - For a project page at https://username.github.io/repository-name/,
//   set SITE to "https://username.github.io" and BASE_PATH to "/repository-name".
const site = process.env.SITE ?? 'https://exeme.co';
const base = process.env.BASE_PATH ?? '/';

export default defineConfig({
  site,
  base,
  trailingSlash: 'always',
  integrations: [sitemap()],
});
