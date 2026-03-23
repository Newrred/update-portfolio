import { defineCollection } from 'astro:content';
import { glob } from 'astro/loaders';
import { z } from 'astro/zod';

const areaSchema = z.enum([
  'web-service',
  'design',
  'video',
  'development',
  'note',
  'research',
]);

const updates = defineCollection({
  loader: glob({ pattern: '**/*.{md,mdx}', base: './src/content/updates' }),
  schema: z.object({
    title: z.string(),
    summary: z.string(),
    date: z.string().regex(/^\d{4}-\d{2}-\d{2}$/),
    build: z.string().regex(/^\d{4}\.\d{2}\.\d{2}$/),
    kind: z.enum(['major', 'minor', 'patch', 'note']),
    areas: z.array(areaSchema).min(1),
    role: z.string().optional(),
    credit: z.string().optional(),
    cover: z.string().optional(),
    stack: z.array(z.string()).default([]),
    assist: z.array(z.string()).default([]),
    links: z
      .array(
        z.object({
          label: z.string(),
          url: z.string().url(),
        }),
      )
      .default([]),
    pinned: z.boolean().default(false),
    draft: z.boolean().default(false),
  }),
});

export const collections = { updates };
