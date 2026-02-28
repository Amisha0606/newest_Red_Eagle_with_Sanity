import { defineField, defineType } from 'sanity'

export default defineType({
  name: 'toppers',
  title: 'Toppers',
  type: 'document',
  fields: [
    defineField({
      name: 'section',
      title: 'Section',
      type: 'string',
      options: {
        list: [
          { title: 'Primary (Classes 1-5)', value: 'primary' },
          { title: 'Middle (Classes 6-8)', value: 'middle' },
          { title: 'Secondary (Classes 9-10)', value: 'secondary' },
          { title: 'Senior (Classes 11-12)', value: 'senior' },
        ],
      },
      validation: (Rule) => Rule.required(),
    }),
    defineField({
      name: 'classNumber',
      title: 'Class Number',
      type: 'string',
      options: {
        list: [
          { title: 'Class 1', value: '1' },
          { title: 'Class 2', value: '2' },
          { title: 'Class 3', value: '3' },
          { title: 'Class 4', value: '4' },
          { title: 'Class 5', value: '5' },
          { title: 'Class 6', value: '6' },
          { title: 'Class 7', value: '7' },
          { title: 'Class 8', value: '8' },
          { title: 'Class 9', value: '9' },
          { title: 'Class 10', value: '10' },
          { title: 'Class 11', value: '11' },
          { title: 'Class 12', value: '12' },
        ],
      },
      validation: (Rule) => Rule.required(),
    }),
    defineField({
      name: 'academicYear',
      title: 'Academic Year',
      type: 'string',
      description: 'E.g., 2025-26',
      initialValue: '2025-26',
    }),
    defineField({
      name: 'students',
      title: 'Topper Students',
      type: 'array',
      of: [
        {
          type: 'object',
          name: 'student',
          title: 'Student',
          fields: [
            defineField({
              name: 'name',
              title: 'Student Name',
              type: 'string',
              validation: (Rule) => Rule.required(),
            }),
            defineField({
              name: 'photo',
              title: 'Student Photo',
              type: 'image',
              options: {
                hotspot: true,
              },
            }),
            defineField({
              name: 'percentage',
              title: 'Percentage/Score',
              type: 'number',
              description: 'E.g., 95.5',
              validation: (Rule) => Rule.required().min(0).max(100),
            }),
            defineField({
              name: 'stream',
              title: 'Stream/Subject',
              type: 'string',
              description: 'E.g., Science, Commerce, Overall',
            }),
            defineField({
              name: 'rank',
              title: 'Rank',
              type: 'number',
              description: 'Position in class (1, 2, 3...)',
            }),
          ],
          preview: {
            select: {
              title: 'name',
              subtitle: 'percentage',
              media: 'photo',
            },
            prepare(selection) {
              const { title, subtitle, media } = selection
              return {
                title: title || 'Unnamed Student',
                subtitle: subtitle ? `${subtitle}%` : 'No score',
                media,
              }
            },
          },
        },
      ],
    }),
  ],
  preview: {
    select: {
      section: 'section',
      classNumber: 'classNumber',
      year: 'academicYear',
    },
    prepare(selection) {
      const { section, classNumber, year } = selection
      const sectionLabels: Record<string, string> = {
        primary: 'Primary',
        middle: 'Middle',
        secondary: 'Secondary',
        senior: 'Senior',
      }
      return {
        title: `Class ${classNumber} Toppers`,
        subtitle: `${sectionLabels[section] || section} - ${year || ''}`,
      }
    },
  },
  orderings: [
    {
      title: 'Class Number',
      name: 'classAsc',
      by: [{ field: 'classNumber', direction: 'asc' }],
    },
  ],
})
