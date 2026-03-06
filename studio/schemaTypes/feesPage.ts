import { defineField, defineType } from 'sanity'

export default defineType({
    name: 'feesPage',
    title: 'Fees Structure Page',
    type: 'document',
    fields: [
        defineField({
            name: 'title',
            title: 'Page Title',
            type: 'string',
            initialValue: 'Fees Structure',
        }),
        defineField({
            name: 'subtitle',
            title: 'Page Subtitle',
            type: 'string',
            initialValue: 'Transparent and affordable education for all students at Red Eagle Public School',
        }),
        defineField({
            name: 'academicYear',
            title: 'Academic Year',
            type: 'string',
            initialValue: '2025-2026',
        }),

        // Fees Table
        defineField({
            name: 'feesTable',
            title: 'Fees Table Breakdown',
            type: 'array',
            of: [
                {
                    type: 'object',
                    fields: [
                        { name: 'class', title: 'Class Range (e.g. I-II)', type: 'string' },
                        { name: 'tuition', title: 'Tuition Fee', type: 'string' },
                        { name: 'activities', title: 'Activities & Sports Fee', type: 'string' },
                        { name: 'library', title: 'Library & Lab Fee', type: 'string' },
                        { name: 'total', title: 'Annual Total', type: 'string' },
                    ]
                }
            ]
        }),

        // Optional Add-ons
        defineField({
            name: 'optionalAddons',
            title: 'Optional Add-ons',
            type: 'array',
            of: [
                {
                    type: 'object',
                    fields: [
                        { name: 'name', title: 'Add-on Name', type: 'string' },
                        { name: 'price', title: 'Price/Frequency', type: 'string', description: 'e.g. ₹8,000/year' },
                    ]
                }
            ]
        }),

        // Payment Terms
        defineField({
            name: 'paymentTerms',
            title: 'Payment Terms',
            type: 'array',
            of: [
                {
                    type: 'object',
                    fields: [
                        { name: 'title', title: 'Term Title', type: 'string' },
                        { name: 'description', title: 'Description', type: 'string' },
                        { name: 'type', title: 'Alert Type', type: 'string', options: { list: ['info', 'success', 'warning'] }, initialValue: 'info' }
                    ]
                }
            ]
        }),

        // Important Notes
        defineField({
            name: 'notes',
            title: 'Important Notes',
            type: 'array',
            of: [{ type: 'string' }]
        }),

        // Prospectus
        defineField({
            name: 'prospectusFile',
            title: 'Fee Prospectus (PDF)',
            type: 'file',
            options: { accept: '.pdf' }
        }),
    ],
})
