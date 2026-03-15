import {defineField, defineType} from 'sanity'

export default defineType({
  name: 'branch',
  title: 'School Branches',
  type: 'document',
  fields: [
    defineField({
      name: 'name',
      title: 'Branch Name',
      type: 'string',
      validation: (Rule) => Rule.required(),
    }),
    defineField({
      name: 'slug',
      title: 'Slug',
      type: 'slug',
      options: {source: 'name'},
      validation: (Rule) => Rule.required(),
    }),
    defineField({
      name: 'order',
      title: 'Visibility Order',
      type: 'number',
      description: 'Lower number appears first (e.g. 1, 2, 3...)',
    }),
    defineField({
      name: 'inaugurationDate',
      title: 'Inauguration Date',
      type: 'string',
      description: 'e.g., 15th February 2026',
    }),
    defineField({
      name: 'heroImage',
      title: 'Hero Image',
      type: 'image',
      options: {hotspot: true},
    }),
    defineField({
      name: 'description',
      title: 'Description',
      type: 'text',
      rows: 4,
    }),

    // Detailed Info
    defineField({
      name: 'address',
      title: 'Branch Address',
      type: 'text',
      rows: 3,
    }),
    defineField({
      name: 'googleMapsLink',
      title: 'Google Maps Embed URL (src only)',
      type: 'url',
      description: 'The URL from the iframe src attribute',
    }),

    defineField({
      name: 'capacity',
      title: 'Student Capacity',
      type: 'string',
      description: 'e.g., 1500+ Students',
    }),

    // Contact Details
    defineField({
      name: 'contactNumbers',
      title: 'Contact Numbers',
      type: 'object',
      fields: [
        defineField({
          name: 'officeIncharge',
          title: 'Office Incharge',
          type: 'string',
        }),
        defineField({
          name: 'transportIncharge',
          title: 'Transport Incharge',
          type: 'string',
        }),
        defineField({
          name: 'otherNumber',
          title: 'Other Number',
          type: 'string',
        }),
      ],
    }),
    defineField({
      name: 'email',
      title: 'Email Address',
      type: 'string',
      validation: (Rule) =>
        Rule.regex(/^[^\s@]+@[^\s@]+\.[^\s@]+$/, {
          name: 'email',
          invert: false,
        }),
    }),
    defineField({
      name: 'architectureImages',
      title: 'Architecture Images',
      type: 'array',
      of: [
        {
          type: 'object',
          fields: [
            defineField({name: 'image', title: 'Image', type: 'image', options: {hotspot: true}}),
            defineField({name: 'title', title: 'Title', type: 'string'}),
            defineField({name: 'description', title: 'Description', type: 'text'}),
          ],
        },
      ],
    }),
  ],
  preview: {
    select: {
      title: 'name',
      subtitle: 'status',
      media: 'heroImage',
    },
  },
})
