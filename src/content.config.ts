import { defineCollection, z } from "astro:content";
import { file } from "astro/loaders";

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

export const collections = { experience, about };
