import {createClient} from '@sanity/client'

const client = createClient({
  projectId: 'xacqk9il',
  dataset: 'production',
  token: process.env.SANITY_AUTH_TOKEN,
  useCdn: false,
  apiVersion: '2025-01-01',
})

const brandingData = {
  _id: 'logo-branding',
  _type: 'logo',
  schoolName: 'Red Eagle Group of Institutions',
  schoolShortName: 'Red Eagle',
  tagline: 'Group of Institutions',
  altText: 'Red Eagle Group of Institution Logo',
}

async function run() {
  try {
    const res = await client.createIfNotExists(brandingData)
    console.log('Branding data created:', res)
  } catch (error) {
    console.error('Error creating branding data:', error)
  }
}

run()
