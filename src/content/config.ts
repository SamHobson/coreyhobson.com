import { defineCollection, z } from "astro:content";

const blog = defineCollection({
  type: "content",
  schema: z.object({
    title: z.string(),
    description: z.string(),
    date: z.coerce.date(),
    tags: z.array(z.string()).default([]),
    draft: z.boolean().default(false),
    canonical: z.string().url().optional(),
  }),
});

const caseStudies = defineCollection({
  type: "content",
  schema: z.object({
    title: z.string(),
    description: z.string(),
    client: z.string(),
    role: z.string(),
    date: z.coerce.date(),
    tags: z.array(z.string()).default([]),
    draft: z.boolean().default(false),
    image: z.string(),
    website: z.string().url().optional(),
  }),
});

const projects = defineCollection({
  type: "content",
  schema: z.object({
    title: z.string(),
    description: z.string(),
    date: z.coerce.date(),
    tags: z.array(z.string()).default([]),
    draft: z.boolean().default(false),
    image: z.string().optional(),
    repo: z.string().url().optional(),
    live_url: z.string().url().optional(),
    status: z.enum(["active", "maintained", "archived"]),
  }),
});

export const collections = { blog, "case-studies": caseStudies, projects };
