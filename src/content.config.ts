import { defineCollection } from 'astro:content';
import { z } from 'astro/zod';
import { glob } from 'astro/loaders';

const projects = defineCollection({
  loader: glob({ pattern: '**/*.md', base: './src/content/projects' }),
  schema: z.object({
    title: z.string(),
    category: z.enum(['ai', 'app', 'web']),
    categoryLabel: z.string(),
    year: z.string(),
    status: z.string(),
    order: z.number().default(99),
    summaryJa: z.string(),
    summaryEn: z.string().optional(),
    highlights: z.array(z.string()).default([]),
    tech: z.array(z.string()),
    repo: z.string().url(),
    demo: z.string().url().optional(),
  }),
});

export const collections = { projects };
