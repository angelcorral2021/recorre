import { defineCollection, z } from 'astro:content';
import { glob } from 'astro/loaders';

const lugaresCollection = defineCollection({
  loader: glob({ pattern: '**/[^_]*.md', base: "./src/content/lugares" }),
  schema: ({ image }) => z.object({
    titulo: z.string(),
    descripcion_corta: z.string(),
    categoria: z.enum(['Murales', 'Arquitectura', 'Museos', 'Cafés']),
    imagen_principal: image(),
    galeria: z.array(image()).optional(),
    ubicacion_maps: z.string().url(),
    horario: z.string(),
    precio: z.string(),
    video_youtube: z.string().url().optional(),
  })
});

export const collections = {
  'lugares': lugaresCollection,
};
