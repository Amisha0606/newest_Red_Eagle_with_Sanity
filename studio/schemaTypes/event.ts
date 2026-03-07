import { defineField, defineType } from 'sanity'

export default defineType({
  name: 'event',
  title: 'Event',
  type: 'document',
  fields: [
    defineField({
      name: 'id',
      title: 'Event ID',
      type: 'string',
      validation: (Rule) => Rule.required(),
      description: 'Unique identifier for the event',
    }),
    defineField({
      name: 'title',
      title: 'Event Title',
      type: 'string',
      validation: (Rule) => Rule.required(),
    }),
    defineField({
      name: 'date',
      title: 'Event Date',
      type: 'datetime',
    }),
    defineField({
      name: 'description',
      title: 'Description',
      type: 'text',
      rows: 4,
    }),
    defineField({
      name: 'coverImage',
      title: 'Cover Image',
      type: 'image',
      options: {
        hotspot: true,
      },
      validation: (Rule) => Rule.required(),
    }),
    defineField({
      name: 'gallery',
      title: 'Event Gallery Images',
      type: 'array',
      of: [
        {
          type: 'object',
          fields: [
            defineField({
              name: 'image',
              title: 'Image',
              type: 'image',
              options: {
                hotspot: true,
              },
            }),
            defineField({
              name: 'caption',
              title: 'Caption',
              type: 'string',
            }),
          ],
        },
      ],
      description: 'Add up to 9 images for the event gallery',
    }),
    defineField({
      name: 'category',
      title: 'Category',
      type: 'string',
      options: {
        list: [
          { title: 'Sports', value: 'sports' },
          { title: 'Cultural', value: 'cultural' },
          { title: 'Academic', value: 'academic' },
          { title: 'Annual Event', value: 'annual' },
        ],
      },
    }),
  ],
  preview: {
    select: {
      title: 'title',
      media: 'coverImage',
      date: 'date',
    },
    prepare(selection) {
      const { title, media, date } = selection
      return {
        title,
        media,
        subtitle: date ? new Date(date).toLocaleDateString() : 'No date',
      }
    },
  },
})
