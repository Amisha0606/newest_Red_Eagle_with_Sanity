import {createClient} from '@sanity/client'

const client = createClient({
  projectId: 'iodmv8av',
  dataset: 'red_eagle_sanity',
  token: process.env.SANITY_AUTH_TOKEN,
  useCdn: false,
  apiVersion: '2025-01-01',
})

const sample = {
  _id: 'toppersPage-seed',
  _type: 'toppersPage',
  title: 'Toppers (Seed Data)',
  description: 'Seeded toppers data — editable in Studio',
  groups: []
}

// Build groups 4 groups and classes 1-12 with 3 toppers each
const groups = [
  { name: 'Primary (1-5)', classes: ['1','2','3','4','5'] },
  { name: 'Middle (6-8)', classes: ['6','7','8'] },
  { name: 'Secondary (9-10)', classes: ['9','10'] },
  { name: 'Senior (11-12)', classes: ['11','12'] },
]

const topperNames = [
  ['Aarav','Ishita','Kabir'],
  ['Maya','Rohit','Sana'],
  ['Arjun','Priya','Aanya'],
  ['Vikram','Meera','Rahul']
]

for (let g=0; g<groups.length; g++){
  const grp = { _type: 'toppersGroup', groupName: groups[g].name, classes: [] }
  groups[g].classes.forEach((cls, idx) => {
    const classObj = { _type: 'classToppers', classNumber: cls, toppers: [] }
    // create 3 toppers
    for (let t=0; t<3; t++){
      const name = topperNames[g][t % topperNames[g].length] + ' ' + cls
      classObj.toppers.push({ _type: 'topper', name, percentage: 90 - t + (idx % 3), subjects: 'Science, Math' })
    }
    grp.classes.push(classObj)
  })
  sample.groups.push(grp)
}

async function run(){
  try{
    const res = await client.createIfNotExists(sample)
    console.log('Created or found:', res._id)
  }catch(err){
    console.error('Error creating seed doc:', err.message)
    process.exit(1)
  }
}

run()
