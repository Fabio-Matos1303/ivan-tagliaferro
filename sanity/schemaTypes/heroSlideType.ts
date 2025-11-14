import {ImageIcon} from '@sanity/icons'
import {defineField, defineType} from 'sanity'

export const heroSlideType = defineType({
  name: 'heroSlide',
  title: 'Slide do Hero',
  type: 'document',
  icon: ImageIcon,
  fields: [
    defineField({
      name: 'title',
      title: 'Título',
      type: 'string',
      validation: (Rule) => Rule.required(),
    }),
    defineField({
      name: 'description',
      title: 'Descrição',
      type: 'text',
      description: 'Texto descritivo do slide',
      rows: 3,
      validation: (Rule) => Rule.required().max(300),
    }),
    defineField({
      name: 'image',
      title: 'Imagem de Fundo',
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
      description: 'Imagem de fundo opcional para o slide',
    }),
    defineField({
      name: 'ctaPrimary',
      title: 'Botão Principal (CTA)',
      type: 'object',
      fields: [
        defineField({
          name: 'text',
          title: 'Texto do Botão',
          type: 'string',
          validation: (Rule) => Rule.required(),
        }),
        defineField({
          name: 'href',
          title: 'Link',
          type: 'string',
          description: 'URL ou rota (ex: /servicos ou https://wa.me/...)',
          validation: (Rule) => Rule.required(),
        }),
        defineField({
          name: 'external',
          title: 'Link Externo',
          type: 'boolean',
          description: 'Marque se o link é externo (abre em nova aba)',
          initialValue: false,
        }),
      ],
    }),
    defineField({
      name: 'ctaSecondary',
      title: 'Botão Secundário',
      type: 'object',
      fields: [
        defineField({
          name: 'text',
          title: 'Texto do Botão',
          type: 'string',
          validation: (Rule) => Rule.required(),
        }),
        defineField({
          name: 'href',
          title: 'Link',
          type: 'string',
          description: 'URL ou rota (ex: /ebooks ou /contato)',
          validation: (Rule) => Rule.required(),
        }),
        defineField({
          name: 'external',
          title: 'Link Externo',
          type: 'boolean',
          description: 'Marque se o link é externo (abre em nova aba)',
          initialValue: false,
        }),
      ],
    }),
    defineField({
      name: 'order',
      title: 'Ordem de Exibição',
      type: 'number',
      description: 'Número que define a ordem dos slides (menor = aparece primeiro)',
      initialValue: 0,
      validation: (Rule) => Rule.min(0),
    }),
    defineField({
      name: 'active',
      title: 'Ativo',
      type: 'boolean',
      description: 'Marque para exibir este slide no carrossel',
      initialValue: true,
    }),
  ],
  preview: {
    select: {
      title: 'title',
      media: 'image',
      active: 'active',
    },
    prepare(selection) {
      const {title, active} = selection
      return {
        ...selection,
        subtitle: active ? 'Ativo' : 'Inativo',
      }
    },
  },
  orderings: [
    {
      title: 'Ordem de Exibição',
      name: 'orderAsc',
      by: [{field: 'order', direction: 'asc'}],
    },
  ],
})

