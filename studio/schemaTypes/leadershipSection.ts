import { defineField, defineType } from 'sanity'

export default defineType({
  name: 'leadershipSection',
  title: 'Leadership Section',
  type: 'document',
  fields: [
    defineField({
      name: 'title',
      title: 'Section Title',
      type: 'string',
      initialValue: 'Our Leadership',
      validation: (Rule) => Rule.required(),
    }),
    defineField({
      name: 'subtitle',
      title: 'Subtitle',
      type: 'string',
      initialValue: 'Meet the leaders guiding Red Eagle',
    }),
    defineField({
      name: 'leaders',
      title: 'Leaders',
      type: 'array',
      of: [{ type: 'leader' }],
      validation: (Rule) => Rule.required().min(1),
    }),
  ],
  preview: {
    select: {
      title: 'title',
    },
  },
})
