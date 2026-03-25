import { defineCollection, z } from 'astro:content';

const landingPage = defineCollection({
  type: 'data',
  schema: z.object({
    heroTitle: z.string().optional(),
    heroDescription: z.string().optional(),
    aboutTitle: z.string().optional(),
    aboutParagraph1: z.string().optional(),
    aboutParagraph2: z.string().optional(),
    aboutParagraph3: z.string().optional(),
    plantsTitle: z.string().optional(),
    plantsSubtitle: z.string().optional(),
    plantsNote: z.string().optional(),

    plantGrid: z
      .array(
        z.object({
          title: z.string(),
          plants: z.array(
            z.object({
              name: z.string(),
              price: z.string(),
              description: z.string(),
              image: z.string(),
              visible: z.boolean().optional().default(true),
            })
          ),
        })
      )
      .optional(),
    contactTitle: z.string().optional(),
    contactSubtitle: z.string().optional(),
    contactAddress: z.string().optional(),
    contactMobile: z.string().optional(),
    contactPhone: z.string().optional(),
    contactEmail: z.string().optional(),
  }).catchall(z.any()), // Allow old properties when loading while editing
});

export const collections = {
  landingPage,
};
