import {defineField, defineType} from 'sanity'

export default defineType({
  name: 'logo',
  title: 'School Logo',
  type: 'document',
  fields: [
    defineField({
      name: 'image',
      title: 'Logo Image',
      type: 'image',
      options: {
        hotspot: true,
      },
      validation: (Rule) => Rule.required(),
    }),
    defineField({
      name: 'altText',
      title: 'Alt Text',
      type: 'string',
      description: 'Descriptive text for accessibility',
      initialValue: 'Red Eagle Group of Institution Saidabad Handia Logo',
    }),
  ],
  preview: {
    select: {
      media: 'image',
    },
    prepare({media}) {
      return {
        title: 'Red Eagle Public School Logo',
        media,
      }
    },
  },
})
