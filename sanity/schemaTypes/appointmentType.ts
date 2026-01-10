import {CalendarIcon} from '@sanity/icons'
import {defineField, defineType} from 'sanity'

export const appointmentType = defineType({
  name: 'appointment',
  title: 'Compromisso Agendado',
  type: 'document',
  icon: CalendarIcon,
  fields: [
    defineField({
      name: 'title',
      title: 'Título do Compromisso',
      type: 'string',
      validation: (Rule) => Rule.required(),
      description: 'Ex: Consultoria de Intercâmbio, Mentoria CNV, etc.',
    }),
    defineField({
      name: 'description',
      title: 'Descrição',
      type: 'text',
      description: 'Descrição detalhada do compromisso',
      rows: 4,
      validation: (Rule) => Rule.required(),
    }),
    defineField({
      name: 'date',
      title: 'Data e Hora',
      type: 'datetime',
      validation: (Rule) => Rule.required(),
      description: 'Data e hora do compromisso',
    }),
    defineField({
      name: 'type',
      title: 'Tipo de Compromisso',
      type: 'string',
      options: {
        list: [
          {title: 'Consultoria', value: 'consultoria'},
          {title: 'Mentoria', value: 'mentoria'},
          {title: 'Palestra', value: 'palestra'},
          {title: 'Workshop', value: 'workshop'},
          {title: 'Reunião', value: 'reuniao'},
          {title: 'Evento', value: 'evento'},
          {title: 'Outro', value: 'outro'},
        ],
        layout: 'radio',
      },
      initialValue: 'consultoria',
      validation: (Rule) => Rule.required(),
    }),
    defineField({
      name: 'location',
      title: 'Local',
      type: 'object',
      fields: [
        defineField({
          name: 'type',
          title: 'Tipo de Local',
          type: 'string',
          options: {
            list: [
              {title: 'Presencial', value: 'presencial'},
              {title: 'Online', value: 'online'},
              {title: 'Híbrido', value: 'hibrido'},
            ],
            layout: 'radio',
          },
          initialValue: 'presencial',
          validation: (Rule) => Rule.required(),
        }),
        defineField({
          name: 'address',
          title: 'Endereço/Localização',
          type: 'string',
          description: 'Endereço físico (se presencial) ou plataforma (se online)',
        }),
        defineField({
          name: 'link',
          title: 'Link (se online)',
          type: 'url',
          description: 'URL para acesso online (Zoom, Meet, etc.)',
        }),
      ],
      validation: (Rule) => Rule.required(),
    }),
    defineField({
      name: 'status',
      title: 'Status',
      type: 'string',
      options: {
        list: [
          {title: 'Agendado', value: 'agendado'},
          {title: 'Confirmado', value: 'confirmado'},
          {title: 'Em Andamento', value: 'em_andamento'},
          {title: 'Concluído', value: 'concluido'},
          {title: 'Cancelado', value: 'cancelado'},
        ],
        layout: 'radio',
      },
      initialValue: 'agendado',
      validation: (Rule) => Rule.required(),
    }),
    defineField({
      name: 'image',
      title: 'Imagem',
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
    }),
    defineField({
      name: 'featured',
      title: 'Destaque',
      type: 'boolean',
      description: 'Marque para destacar este compromisso na página',
      initialValue: false,
    }),
    defineField({
      name: 'public',
      title: 'Público',
      type: 'boolean',
      description: 'Marque para exibir este compromisso publicamente na página',
      initialValue: true,
    }),
  ],
  preview: {
    select: {
      title: 'title',
      date: 'date',
      type: 'type',
      status: 'status',
      media: 'image',
    },
    prepare(selection) {
      const {title, date, type, status} = selection
      const formattedDate = date ? new Date(date).toLocaleDateString('pt-BR', {
        day: '2-digit',
        month: '2-digit',
        year: 'numeric',
        hour: '2-digit',
        minute: '2-digit',
      }) : 'Sem data'
      return {
        ...selection,
        subtitle: `${formattedDate} • ${type || 'N/A'} • ${status || 'N/A'}`,
      }
    },
  },
  orderings: [
    {
      title: 'Data (Mais Recente)',
      name: 'dateDesc',
      by: [{field: 'date', direction: 'desc'}],
    },
    {
      title: 'Data (Mais Antiga)',
      name: 'dateAsc',
      by: [{field: 'date', direction: 'asc'}],
    },
  ],
})

