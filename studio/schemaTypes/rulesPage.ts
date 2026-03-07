import { defineField, defineType } from 'sanity'

export default defineType({
    name: 'rulesPage',
    title: 'Rules & Regulations Page',
    type: 'document',
    fields: [
        defineField({
            name: 'title',
            title: 'Page Title',
            type: 'string',
            initialValue: 'Rules & Regulations',
        }),
        defineField({
            name: 'subtitle',
            title: 'Page Subtitle',
            type: 'string',
            initialValue: 'Guidelines for maintaining discipline and a conducive learning environment',
        }),
        defineField({
            name: 'importantNotice',
            title: 'Important Notice',
            type: 'text',
            rows: 3,
        }),

        // Flexible Sections
        defineField({
            name: 'sections',
            title: 'Rule Sections',
            type: 'array',
            of: [
                {
                    type: 'object',
                    name: 'ruleSection',
                    title: 'Rule Section',
                    fields: [
                        { name: 'title', title: 'Section Title', type: 'string' },
                        {
                            name: 'type',
                            title: 'Section Type',
                            type: 'string',
                            options: {
                                list: [
                                    { title: 'Ordered List (1, 2, 3)', value: 'ordered' },
                                    { title: 'Prohibited List (X Icons)', value: 'prohibited' },
                                    { title: 'Info List (Shield Icons)', value: 'info' },
                                    { title: 'Medical Table', value: 'medical' },
                                ]
                            }
                        },
                        {
                            name: 'items',
                            title: 'Section Items',
                            type: 'array',
                            of: [
                                {
                                    type: 'object',
                                    fields: [
                                        { name: 'text', title: 'Primary Text', type: 'text', rows: 2 },
                                        { name: 'detail', title: 'Detail/Period', type: 'string', description: 'Used for medical quarantine period or sub-text' },
                                    ]
                                }
                            ]
                        }
                    ]
                }
            ]
        }),
    ],
})
