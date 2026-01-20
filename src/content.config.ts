import { defineCollection, z } from "astro:content";
import { file, glob } from "astro/loaders";

const experience = defineCollection({
  loader: file("src/data/experience.yaml"),
  schema: z.object({
    id: z.string(),
    position: z.string(),
    workplace: z.string(),
    startDate: z.string(),
    endDate: z.string(),
    tags: z.array(z.string()).default([]),
    url: z.string(),
    description: z.string(),
  }),
});

const about = defineCollection({
  loader: file("src/data/about.yaml"),
  schema: z.object({
    id: z.string(),
    name: z.string().optional(),
    title: z.string().optional(),
    bio: z.string().optional(),
    image: z.string().optional(),
    imageRetina: z.string().optional(),
    imageCaption: z.string().optional(),
    education: z
      .array(
        z.object({
          institution: z.string(),
          degree: z.string(),
          year: z.number(),
          logo: z.string(),
        }),
      )
      .optional(),
    skills: z
      .array(
        z.object({
          icon: z.string(),
          name: z.string(),
        }),
      )
      .optional(),
  }),
});

const site = defineCollection({
  loader: glob({ pattern: "*.yaml", base: "./src/content/site" }),
  schema: z.object({
    name: z.string(),
    username: z.string(),
    title: z.string(),
    bio: z.string(),
    heroDescription: z.string(),
    motto: z.string(),
    email: z.string().email(),
    availability: z.object({
      status: z.enum(["available", "busy", "offline"]),
      message: z.string(),
      responseTime: z.string(),
      responseText: z.string(),
    }),
    socials: z.object({
      github: z.object({ url: z.string().url(), display: z.string() }),
      linkedin: z.object({ url: z.string().url(), display: z.string() }),
    }),
    navLinks: z.array(
      z.object({ href: z.string(), label: z.string(), icon: z.string() }),
    ),
    site: z.object({
      url: z.string().url(),
      ogImage: z.string(),
      favicon: z.string(),
    }),
    services: z.array(z.object({ title: z.string(), description: z.string() })),
    ctas: z.array(
      z.object({ href: z.string(), label: z.string(), icon: z.string() }),
    ),
  }),
});

const projects = defineCollection({
  loader: glob({ pattern: "**/*.md", base: "./src/content/projects" }),
  schema: z.object({
    title: z.string(),
    description: z.string(),
    technologies: z.array(z.string()),
    liveUrl: z.string().url().optional(),
    githubUrl: z.string().url().optional(),
    image: z.string().optional(),
    featured: z.boolean().default(false),
    order: z.number().default(0),
  }),
});

const skills = defineCollection({
  loader: glob({ pattern: "**/*.json", base: "./src/content/skills" }),
  schema: z.object({
    category: z.string(),
    items: z.array(
      z.object({
        name: z.string(),
        level: z.enum(["Básico", "Intermedio", "Avanzado", "Experto"]),
        years: z.number().optional(),
      }),
    ),
    order: z.number().default(0),
  }),
});

const playground = defineCollection({
  loader: glob({ pattern: "**/*.md", base: "./src/content/playground" }),
  schema: z.object({
    title: z.string(),
    description: z.string(),
    technologies: z.array(z.string()),
    liveUrl: z.string().url().optional(),
    githubUrl: z.string().url().optional(),
    image: z.string().optional(),
    featured: z.boolean().default(false),
    order: z.number().default(0),
  }),
});

export const collections = {
  experience,
  about,
  site,
  projects,
  skills,
  playground,
};
