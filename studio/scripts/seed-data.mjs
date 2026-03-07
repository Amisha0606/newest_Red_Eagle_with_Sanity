// Script to seed sample toppers data
import { createClient } from '@sanity/client'

const client = createClient({
  projectId: 'xacqk9il',
  dataset: 'production',
  token: process.env.SANITY_AUTH_TOKEN,
  useCdn: false,
  apiVersion: '2025-01-01',
})

const sampleToppersPage = {
  _type: 'toppersPage',
  title: 'Our Toppers',
  description: 'Celebrating academic excellence and outstanding achievements of our students across all classes',
  groups: [
    {
      groupName: 'primary',
      classes: [
        {
          classNumber: '1',
          toppers: [
            {
              name: 'Arjun Singh',
              percentage: 95,
              subjects: 'Mathematics, English',
            },
            {
              name: 'Priya Sharma',
              percentage: 93,
              subjects: 'Science, Mathematics',
            },
            {
              name: 'Aarav Patel',
              percentage: 92,
              subjects: 'English, Social Studies',
            },
          ],
        },
        {
          classNumber: '2',
          toppers: [
            {
              name: 'Anjali Desai',
              percentage: 96,
              subjects: 'Hindi, Mathematics',
            },
            {
              name: 'Rohan Kumar',
              percentage: 94,
              subjects: 'English, Science',
            },
          ],
        },
      ],
    },
    {
      groupName: 'middle',
      classes: [
        {
          classNumber: '6',
          toppers: [
            {
              name: 'Neha Verma',
              percentage: 97,
              subjects: 'Science, Mathematics',
            },
            {
              name: 'Aditya Jain',
              percentage: 95,
              subjects: 'Mathematics, English',
            },
          ],
        },
      ],
    },
    {
      groupName: 'secondary',
      classes: [
        {
          classNumber: '9',
          toppers: [
            {
              name: 'Divya Nair',
              percentage: 98,
              subjects: 'Physics, Chemistry, Mathematics',
            },
            {
              name: 'Rohit Gupta',
              percentage: 96,
              subjects: 'Mathematics, Biology',
            },
          ],
        },
      ],
    },
    {
      groupName: 'senior',
      classes: [
        {
          classNumber: '11',
          toppers: [
            {
              name: 'Meera Iyer',
              percentage: 99,
              subjects: 'Physics, Chemistry, Mathematics',
            },
            {
              name: 'Vivek Sharma',
              percentage: 97,
              subjects: 'Chemistry, Biology, English',
            },
          ],
        },
      ],
    },

  ],
}

async function createSampleData() {
  try {
    // Check if document already exists
    const existing = await client.fetch('*[_type == "toppersPage"][0]')

    if (existing) {
      console.log('Updating existing toppers page...')
      const updated = await client.patch(existing._id).set(sampleToppersPage).commit()
      console.log('✓ Updated:', updated._id)
    } else {
      console.log('Creating new toppers page...')
      const created = await client.create(sampleToppersPage)
      console.log('✓ Created:', created._id)
    }
  } catch (error) {
    console.error('Error creating sample data:', error.message)
    process.exit(1)
  }
}

createSampleData()
