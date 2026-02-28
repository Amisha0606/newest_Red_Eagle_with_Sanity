import { defineField, defineType } from 'sanity'

export default defineType({
  name: 'event',
  title: 'Event',
  type: 'document',
  fields: [
    defineField({
      name: 'title',
      title: 'Event Title',
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
      description: 'URL-friendly identifier (click Generate)',
    }),
    defineField({
      name: 'eventDate',
      title: 'Event Date',
      type: 'date',
      validation: (Rule) => Rule.required(),
    }),
    defineField({
      name: 'category',
      title: 'Category',
      type: 'string',
      options: {
        list: [
          { title: 'Annual Function', value: 'annual_function' },
          { title: 'Sports', value: 'sports' },
          { title: 'Cultural', value: 'cultural' },
          { title: 'Academic', value: 'academic' },
          { title: 'Ceremony', value: 'ceremony' },
          { title: 'Competition', value: 'competition' },
          { title: 'Other', value: 'other' },
        ],
      },
      validation: (Rule) => Rule.required(),
    }),
    defineField({
      name: 'description',
      title: 'Description',
      type: 'text',
      rows: 4,
    }),
    defineField({
      name: 'location',
      title: 'Location',
      type: 'string',
      description: 'E.g., School Auditorium, Sports Ground',
    }),
    defineField({
      name: 'coverImage',
      title: 'Cover Image',
      type: 'image',
      options: {
        hotspot: true,
      },
      validation: (Rule) => Rule.required(),
      description: 'Main image shown in event list',
    }),
    defineField({
      name: 'gallery',
      title: 'Event Gallery',
      type: 'array',
      of: [
        {
          type: 'object',
          name: 'galleryImage',
          title: 'Gallery Image',
          fields: [
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
              description: 'Optional description for this photo',
            }),
          ],
          preview: {
            select: {
              title: 'caption',
              media: 'image',
            },
            prepare(selection) {
              const { title, media } = selection
              return {
                title: title || 'Gallery Image',
                media,
              }
            },
          },
        },
      ],
      description: 'Add multiple photos for this event gallery',
    }),
  ],
  preview: {
    select: {
      title: 'title',
      media: 'coverImage',
      date: 'eventDate',
      category: 'category',
    },
    prepare(selection) {
      const { title, media, date, category } = selection
      const categoryLabels: Record<string, string> = {
        annual_function: 'Annual Function',
        sports: 'Sports',
        cultural: 'Cultural',
        academic: 'Academic',
        ceremony: 'Ceremony',
        competition: 'Competition',
        other: 'Other',
      }
      return {
        title,
        media,
        subtitle: `${categoryLabels[category] || category} • ${date ? new Date(date).toLocaleDateString() : 'No date'}`,
      }
    },
  },
  orderings: [
    {
      title: 'Event Date (Newest)',
      name: 'eventDateDesc',
      by: [{ field: 'eventDate', direction: 'desc' }],
    },
  ],
})
