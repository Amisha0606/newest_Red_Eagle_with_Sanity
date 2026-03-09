import {createClient} from '@sanity/client'

const client = createClient({
  projectId: 'xacqk9il',
  dataset: 'production',
  token: process.env.SANITY_AUTH_TOKEN,
  useCdn: false,
  apiVersion: '2025-01-01',
})

const disclosureDocs = [
  {title: 'Mandatory Public Disclosure', pdf: '/pdf/mandatory-disclosure.pdf'},
  {title: 'Recent Extension of Affiliation', pdf: '/pdf/affiliation-extension.pdf'},
  {title: 'Societies Registration Renewal', pdf: '/pdf/society-renewal.pdf'},
  {title: 'No Objection Certificate', pdf: '/pdf/noc.pdf'},
  {title: 'Recognition Certificate Under RTE', pdf: '/pdf/rte-recognition.pdf'},
  {title: 'Self Certification by School', pdf: '/pdf/self-certification.pdf'},
  {title: 'Building Safety Certificate', pdf: '/pdf/building-safety.pdf'},
  {title: 'Fire Safety Certificate', pdf: '/pdf/fire-safety.pdf'},
  {title: 'Water, Health and Sanitation', pdf: '/pdf/water-health.pdf'},
  {title: 'Academic Calendar', pdf: '/pdf/academic-calendar.pdf'},
  {title: 'List of School Management Committee', pdf: '/pdf/smc-list.pdf'},
  {title: 'Teachers List 2025-26', pdf: '/pdf/teachers-list.pdf'},
  {title: 'Students List 2025-26', pdf: '/pdf/students-list.pdf'},
  {title: 'Book List 2025-26', pdf: '/pdf/book-list.pdf'},
  {title: 'Fee Structure of the School', pdf: '/pdf/fee-structure.pdf'},
  {title: 'Previous Board Results', pdf: '/pdf/board-results.pdf'},
  {title: 'Parents Teachers Association (PTA)', pdf: '/pdf/pta.pdf'},
  {title: 'Transfer Certificate Sample', pdf: '/pdf/tc-sample.pdf'},
]

async function run() {
  try {
    for (const doc of disclosureDocs) {
      const document = {
        _type: 'publicDisclosure',
        title: doc.title,
        pdf: doc.pdf,
      }
      const res = await client.create(document)
      console.log(`Created: ${doc.title}`)
    }
    console.log('All public disclosure documents seeded successfully!')
  } catch (error) {
    console.error('Error seeding data:', error)
  }
}

run()
