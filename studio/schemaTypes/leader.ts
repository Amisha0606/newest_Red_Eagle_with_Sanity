import { defineField, defineType } from 'sanity'

export default defineType({
  name: 'leader',
  title: 'Leader/Staff Member',
  type: 'object',
  fields: [
    defineField({
      name: 'name',
      title: 'Name',
      type: 'string',
      validation: (Rule) => Rule.required(),
    }),
    defineField({
      name: 'position',
      title: 'Position/Title',
      type: 'string',
      validation: (Rule) => Rule.required(),
    }),
    defineField({
      name: 'image',
      title: 'Photo',
      type: 'image',
      options: {
        hotspot: true,
      },
      validation: (Rule) => Rule.required(),
    }),
    defineField({
      name: 'bio',
      title: 'Bio/Message',
      type: 'text',
      rows: 4,
    }),
    defineField({
      name: 'email',
      title: 'Email',
      type: 'string',
    }),
  ],
  preview: {
    select: {
      title: 'name',
      subtitle: 'position',
      media: 'image',
    },
  },
})
