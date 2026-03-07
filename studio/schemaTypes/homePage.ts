import { defineField, defineType } from 'sanity'

export default defineType({
  name: 'homePage',
  title: 'Home Page',
  type: 'document',
  fields: [
    defineField({
      name: 'title',
      title: 'Page Title',
      type: 'string',
      initialValue: 'Home',
    }),
    defineField({
      name: 'logo',
      title: 'School Logo Reference',
      type: 'reference',
      to: [{ type: 'logo' }],
    }),
    defineField({
      name: 'hero',
      title: 'Hero Section Reference',
      type: 'reference',
      to: [{ type: 'heroSection' }],
    }),
    defineField({
      name: 'about',
      title: 'About Section Reference',
      type: 'reference',
      to: [{ type: 'aboutSection' }],
    }),
    defineField({
      name: 'infrastructure',
      title: 'Infrastructure Section Reference',
      type: 'reference',
      to: [{ type: 'infrastructureSection' }],
    }),
    defineField({
      name: 'leadership',
      title: 'Leadership Section Reference',
      type: 'reference',
      to: [{ type: 'leadershipSection' }],
    }),
    defineField({
      name: 'campusLife',
      title: 'Campus Life Section Reference',
      type: 'reference',
      to: [{ type: 'campusLifeSection' }],
    }),
    defineField({
      name: 'seo',
      title: 'SEO',
      type: 'object',
      fields: [
        defineField({
          name: 'metaDescription',
          title: 'Meta Description',
          type: 'string',
          initialValue: 'Red Eagle Group of Institution - Premier educational institution',
        }),
        defineField({
          name: 'keywords',
          title: 'Keywords',
          type: 'array',
          of: [{ type: 'string' }],
        }),
      ],
    }),
  ],
  preview: {
    select: {
      title: 'title',
    },
  },
})
