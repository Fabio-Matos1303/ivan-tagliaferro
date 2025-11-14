import {DocumentTextIcon} from '@sanity/icons'
import {defineField, defineType} from 'sanity'

export const ebookType = defineType({
  name: 'ebook',
  title: 'E-book',
  type: 'document',
  icon: DocumentTextIcon,
  fields: [
    defineField({
      name: 'title',
      title: 'Título',
      type: 'string',
      validation: (Rule) => Rule.required(),
    }),
    defineField({
      name: 'slug',
      title: 'Slug',
      type: 'slug',
      options: {
        source: 'title',
        maxLength: 96,
      },
      validation: (Rule) => Rule.required(),
    }),
    defineField({
      name: 'description',
      title: 'Descrição',
      type: 'text',
      description: 'Breve descrição do e-book (usado na listagem)',
      rows: 3,
      validation: (Rule) => Rule.required().max(300),
    }),
    defineField({
      name: 'cover',
      title: 'Capa do E-book',
      type: 'image',
      options: {
        hotspot: true,
      },
      fields: [
        defineField({
          name: 'alt',
          title: 'Texto Alternativo',
          type: 'string',
          description: 'Importante para SEO e acessibilidade',
        })
      ],
      validation: (Rule) => Rule.required(),
    }),
    defineField({
      name: 'googleDriveUrl',
      title: 'URL do Google Drive',
      type: 'url',
      description: 'URL completa do arquivo no Google Drive para download',
      validation: (Rule) => Rule.required().uri({
        scheme: ['http', 'https'],
      }),
    }),
    defineField({
      name: 'publishedAt',
      title: 'Data de Publicação',
      type: 'datetime',
      initialValue: () => new Date().toISOString(),
    }),
    defineField({
      name: 'featured',
      title: 'E-book em Destaque',
      type: 'boolean',
      description: 'Marque para destacar este e-book na página inicial',
      initialValue: false,
    }),
  ],
  preview: {
    select: {
      title: 'title',
      media: 'cover',
      description: 'description',
    },
    prepare(selection) {
      const {title, description} = selection
      return {
        ...selection,
        subtitle: description,
      }
    },
  },
})

