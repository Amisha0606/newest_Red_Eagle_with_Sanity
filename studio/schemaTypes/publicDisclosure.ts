import {defineField, defineType} from 'sanity'

export default defineType({
  name: 'publicDisclosure',
  title: 'Public Disclosure',
  type: 'document',
  fields: [
    defineField({
      name: 'title',
      title: 'Title',
      type: 'string',
    }),
    defineField({
      name: 'pdf',
      title: 'PDF Path',
      type: 'string',
    }),
  ],
})
