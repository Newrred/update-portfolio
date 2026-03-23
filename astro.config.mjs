import { defineConfig } from 'astro/config';
import mdx from '@astrojs/mdx';

const repoName = 'update-portfolio';
const defaultOrigin = 'https://newrred.github.io';
const isDevServer =
  process.argv.includes('dev') || process.argv.includes('preview');
const site = process.env.PUBLIC_SITE_URL ?? (isDevServer ? 'http://localhost:4321' : defaultOrigin);
const base = process.env.PUBLIC_BASE ?? (isDevServer ? '/' : `/${repoName}`);

export default defineConfig({
  site,
  base,
  integrations: [mdx()],
});
