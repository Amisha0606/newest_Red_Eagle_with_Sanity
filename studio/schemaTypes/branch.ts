import { defineField, defineType } from 'sanity'

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
            options: { source: 'name' },
            validation: (Rule) => Rule.required(),
        }),
        defineField({
            name: 'status',
            title: 'Branch Status',
            type: 'string',
            options: {
                list: [
                    { title: 'Active', value: 'active' },
                    { title: 'Coming Soon', value: 'coming-soon' },
                ],
            },
            initialValue: 'active',
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
            options: { hotspot: true },
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
            title: 'Google Maps Link',
            type: 'url',
        }),
        defineField({
            name: 'mapEmbedUrl',
            title: 'Google Maps Embed URL (src only)',
            type: 'string',
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
            name: 'phoneNumbers',
            title: 'Phone Numbers',
            type: 'array',
            of: [
                {
                    type: 'object',
                    fields: [
                        { name: 'label', title: 'Label', type: 'string', description: 'e.g. Main, Admissions' },
                        { name: 'number', title: 'Number', type: 'string' },
                    ]
                }
            ]
        }),
        defineField({
            name: 'emailAddresses',
            title: 'Email Addresses',
            type: 'array',
            of: [
                {
                    type: 'object',
                    fields: [
                        { name: 'label', title: 'Label', type: 'string', description: 'e.g. General, Admissions' },
                        { name: 'email', title: 'Email', type: 'string' },
                    ]
                }
            ]
        }),
        defineField({
            name: 'officeHours',
            title: 'Office Hours',
            type: 'array',
            of: [{ type: 'string' }]
        }),

        // Features
        defineField({
            name: 'features',
            title: 'Branch Features/Facilities',
            type: 'array',
            of: [
                {
                    type: 'object',
                    fields: [
                        { name: 'title', title: 'Feature Title', type: 'string' },
                        { name: 'description', title: 'Description', type: 'text', rows: 2 },
                        { name: 'image', title: 'Representative Image', type: 'image' },
                    ]
                }
            ]
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
