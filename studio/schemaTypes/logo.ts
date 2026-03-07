import { defineField, defineType } from 'sanity'

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
      initialValue: 'Red Eagle Group of Institution Logo',
    }),
  ],
  preview: {
    select: {
      media: 'image',
    },
    prepare() {
      return {
        title: 'School Logo',
        media: this.media,
      }
    },
  },
})
