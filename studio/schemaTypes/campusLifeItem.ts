import { defineField, defineType } from 'sanity'

export default defineType({
  name: 'campusLifeItem',
  title: 'Campus Life Gallery Item',
  type: 'object',
  fields: [
    defineField({
      name: 'title',
      title: 'Title',
      type: 'string',
      validation: (Rule) => Rule.required(),
    }),
    defineField({
      name: 'image',
      title: 'Image',
      type: 'image',
      options: {
        hotspot: true,
      },
      validation: (Rule) => Rule.required(),
    }),
    defineField({
      name: 'caption',
      title: 'Caption',
      type: 'string',
    }),
    defineField({
      name: 'category',
      title: 'Category',
      type: 'string',
      options: {
        list: [
          { title: 'Sports', value: 'sports' },
          { title: 'Academics', value: 'academics' },
          { title: 'Events', value: 'events' },
          { title: 'Cultural', value: 'cultural' },
          { title: 'Activities', value: 'activities' },
        ],
      },
    }),
  ],
  preview: {
    select: {
      title: 'title',
      subtitle: 'category',
      media: 'image',
    },
  },
})
