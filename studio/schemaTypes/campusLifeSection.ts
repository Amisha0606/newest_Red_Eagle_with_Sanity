import { defineField, defineType } from 'sanity'

export default defineType({
  name: 'campusLifeSection',
  title: 'Campus Life Section',
  type: 'document',
  fields: [
    defineField({
      name: 'title',
      title: 'Section Title',
      type: 'string',
      initialValue: 'Campus Life',
      validation: (Rule) => Rule.required(),
    }),
    defineField({
      name: 'subtitle',
      title: 'Subtitle',
      type: 'string',
      initialValue: 'Explore the vibrant life at Red Eagle',
    }),
    defineField({
      name: 'gallery',
      title: 'Gallery Items',
      type: 'array',
      of: [{ type: 'campusLifeItem' }],
      validation: (Rule) => Rule.required().min(1),
    }),
  ],
  preview: {
    select: {
      title: 'title',
    },
  },
})
