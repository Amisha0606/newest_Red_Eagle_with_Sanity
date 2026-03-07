import { defineField, defineType } from 'sanity'

export default defineType({
  name: 'infrastructureSection',
  title: 'Infrastructure Section',
  type: 'document',
  fields: [
    defineField({
      name: 'title',
      title: 'Section Title',
      type: 'string',
      initialValue: 'Our Facilities',
      validation: (Rule) => Rule.required(),
    }),
    defineField({
      name: 'subtitle',
      title: 'Subtitle',
      type: 'string',
    }),
    defineField({
      name: 'items',
      title: 'Infrastructure Items (Up to 3)',
      type: 'array',
      of: [{ type: 'infrastructureItem' }],
      validation: (Rule) => Rule.required().min(1).max(3),
    }),
  ],
  preview: {
    select: {
      title: 'title',
    },
  },
})
