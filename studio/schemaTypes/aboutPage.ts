import { defineField, defineType } from 'sanity'

export default defineType({
    name: 'aboutPage',
    title: 'About Page',
    type: 'document',
    fields: [
        defineField({
            name: 'title',
            title: 'Page Title',
            type: 'string',
            initialValue: 'About Red Eagle',
            validation: (Rule) => Rule.required(),
        }),
        defineField({
            name: 'subtitle',
            title: 'Page Subtitle',
            type: 'string',
            initialValue: 'Shaping minds, building futures - A legacy of educational excellence since 2010',
        }),
        defineField({
            name: 'heroImage',
            title: 'Hero Image',
            type: 'image',
            options: { hotspot: true },
        }),

        // Story Section
        defineField({
            name: 'storyTitle',
            title: 'Story Section Title',
            type: 'string',
            initialValue: '15+ Years of Excellence',
        }),
        defineField({
            name: 'storyContent',
            title: 'Story Content',
            type: 'array',
            of: [{ type: 'block' }],
        }),
        defineField({
            name: 'storyImage',
            title: 'Story Image',
            type: 'image',
            options: { hotspot: true },
        }),

        // Mission & Vision
        defineField({
            name: 'missionTitle',
            title: 'Mission Title',
            type: 'string',
            initialValue: 'Our Mission',
        }),
        defineField({
            name: 'missionContent',
            title: 'Mission Content',
            type: 'text',
            rows: 4,
        }),
        defineField({
            name: 'visionTitle',
            title: 'Vision Title',
            type: 'string',
            initialValue: 'Our Vision',
        }),
        defineField({
            name: 'visionContent',
            title: 'Vision Content',
            type: 'text',
            rows: 4,
        }),

        // Core Values
        defineField({
            name: 'coreValues',
            title: 'Core Values',
            type: 'array',
            of: [
                {
                    type: 'object',
                    fields: [
                        { name: 'title', title: 'Title', type: 'string' },
                        { name: 'description', title: 'Description', type: 'text', rows: 2 },
                        {
                            name: 'icon',
                            title: 'Icon Name (Lucide)',
                            type: 'string',
                            description: 'e.g., Heart, Target, Award, BookOpen'
                        },
                    ]
                }
            ]
        }),

        // Achievements
        defineField({
            name: 'achievements',
            title: 'Achievements Stats',
            type: 'array',
            of: [
                {
                    type: 'object',
                    fields: [
                        { name: 'number', title: 'Stat Value (e.g. 95%)', type: 'string' },
                        { name: 'label', title: 'Stat Label (e.g. Pass Rate)', type: 'string' },
                    ]
                }
            ]
        }),

        // SEO
        defineField({
            name: 'seoDescription',
            title: 'SEO Description',
            type: 'text',
            rows: 2,
        }),
    ],
    preview: {
        select: {
            title: 'title',
        },
    },
})
