import { defineConfig } from 'astro/config';
import mdx from '@astrojs/mdx';

const site = process.env.PUBLIC_SITE_URL ?? 'https://example.com';

export default defineConfig({
  site,
  integrations: [mdx()],
});
