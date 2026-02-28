// Mock data for Red Eagle Group of Institutions - Frontend Only

export const branches = [
  {
    id: 'reps-main',
    name: 'Red Eagle Public School',
    location: 'Main Campus',
    status: 'operational',
    established: '2010',
    contact: {
      phone: '+91 8400773055',
      email: 'info@redeaglepublicschool.com',
      address: 'Main Campus, City'
    }
  },
  {
    id: 'reps-bhopatpur',
    name: 'Red Eagle Public School',
    location: 'Bhopatpur',
    status: 'coming-soon',
    inauguralDate: '15th February 2026',
    contact: {
      phone: '+91 8400773055',
      email: 'info@redeaglepublicschool.com',
      address: 'Bhopatpur Campus'
    }
  }
];

export const leadership = [
  {
    id: 1,
    name: 'Mr Sarvesh Kumar Pandey',
    designation: 'Managing Director',
    image: 'https://images.unsplash.com/photo-1560250097-0b93528c311a?w=400',
    message: 'As the Managing Director, I am dedicated to fostering an environment where students can thrive academically and personally. Our commitment to excellence ensures every child receives the best education and opportunities to grow. Join us in shaping a bright future!'
  },
  {
    id: 2,
    name: 'Mrs Renu Mishra',
    designation: 'School Manager',
    image: 'https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?w=400',
    message: 'Our institution stands as a beacon of holistic education, nurturing talent and discipline in our students. With a well-structured curriculum and dedicated faculty, we aim to provide a transformative learning experience. Let\'s work together to achieve greatness!'
  },
  {
    id: 3,
    name: 'Tripathi Suman Srikant',
    designation: 'Principal',
    image: 'https://images.unsplash.com/photo-1519085360753-af0119f7cbe7?w=400',
    message: 'Education is the key to unlocking a world of opportunities. At our school, we strive to instill knowledge, character, and confidence in every student. Our doors are always open to those eager to learn and grow. Welcome to a journey of excellence!'
  }
];

export const facilities = [
  {
    id: 1,
    title: 'High-Quality Academics',
    description: 'We follow a well-structured CBSE curriculum to ensure a strong academic foundation.',
    icon: 'GraduationCap',
    image: 'https://images.unsplash.com/photo-1509062522246-3755977927d7'
  },
  {
    id: 2,
    title: 'Excellent Sports Facilities',
    description: 'Our school provides state-of-the-art sports facilities for the physical development of students.',
    icon: 'Trophy',
    image: 'https://images.unsplash.com/photo-1730106443463-0fb1512c5e60'
  },
  {
    id: 3,
    title: 'Modern Library',
    description: 'A well-stocked library with thousands of books and digital resources for comprehensive learning.',
    icon: 'BookOpen',
    image: 'https://images.unsplash.com/photo-1536985576470-b7e4a0363a19'
  },
  {
    id: 4,
    title: 'Science Laboratories',
    description: 'Fully equipped Physics, Chemistry, and Biology labs for hands-on experimental learning.',
    icon: 'Microscope',
    image: 'https://images.unsplash.com/photo-1602052577122-f73b9710adba'
  },
  {
    id: 5,
    title: 'Computer Lab',
    description: 'Advanced computer labs with latest technology to enhance digital literacy.',
    icon: 'Monitor',
    image: 'https://images.unsplash.com/photo-1719159381981-1327b22aff9b'
  },
  {
    id: 6,
    title: 'Highly Qualified Faculty',
    description: 'Our experienced teachers ensure personalized attention for every student.',
    icon: 'Users',
    image: 'https://images.unsplash.com/photo-1522134939204-9b9957145632'
  }
];

export const toppersByClass = {
  1: [
    { name: 'Aarav Sharma', percentage: 98.5, subject: 'Overall', image: 'https://images.unsplash.com/photo-1491013516836-7db643ee125a?w=300' },
    { name: 'Ananya Singh', percentage: 97.8, subject: 'Overall', image: 'https://images.unsplash.com/photo-1503454537195-1dcabb73ffb9?w=300' }
  ],
  2: [
    { name: 'Rohan Gupta', percentage: 98.2, subject: 'Overall', image: 'https://images.unsplash.com/photo-1519085360753-af0119f7cbe7?w=300' },
    { name: 'Priya Patel', percentage: 97.5, subject: 'Overall', image: 'https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=300' }
  ],
  3: [
    { name: 'Arjun Kumar', percentage: 97.9, subject: 'Overall', image: 'https://images.unsplash.com/photo-1506794778202-cad84cf45f1d?w=300' },
    { name: 'Diya Verma', percentage: 97.3, subject: 'Overall', image: 'https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=300' }
  ],
  4: [
    { name: 'Kabir Mehta', percentage: 98.0, subject: 'Overall', image: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=300' },
    { name: 'Isha Reddy', percentage: 97.4, subject: 'Overall', image: 'https://images.unsplash.com/photo-1487412720507-e7ab37603c6f?w=300' }
  ],
  5: [
    { name: 'Vihaan Joshi', percentage: 97.8, subject: 'Overall', image: 'https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=300' },
    { name: 'Anika Das', percentage: 97.2, subject: 'Overall', image: 'https://images.unsplash.com/photo-1534528741775-53994a69daeb?w=300' }
  ],
  6: [
    { name: 'Advait Iyer', percentage: 96.8, subject: 'Overall', image: 'https://images.unsplash.com/photo-1501196354995-cbb51c65aaea?w=300' },
    { name: 'Saanvi Nair', percentage: 96.5, subject: 'Overall', image: 'https://images.unsplash.com/photo-1531123897727-8f129e1688ce?w=300' }
  ],
  7: [
    { name: 'Reyansh Pillai', percentage: 96.5, subject: 'Overall', image: 'https://images.unsplash.com/photo-1506277886164-e25aa3f4ef7f?w=300' },
    { name: 'Myra Kapoor', percentage: 96.0, subject: 'Overall', image: 'https://images.unsplash.com/photo-1502685104226-ee32379fefbe?w=300' }
  ],
  8: [
    { name: 'Aditya Bansal', percentage: 96.2, subject: 'Overall', image: 'https://images.unsplash.com/photo-1492562080023-ab3db95bfbce?w=300' },
    { name: 'Kiara Shah', percentage: 95.8, subject: 'Overall', image: 'https://images.unsplash.com/photo-1508214751196-bcfd4ca60f91?w=300' }
  ],
  9: [
    { name: 'Shreya Tiwari', percentage: 96.5, subject: 'A1 Section', image: 'https://images.unsplash.com/photo-1544005313-94ddf0286df2?w=300' },
    { name: 'Yashi Prajapati', percentage: 96.17, subject: 'A1 Section', image: 'https://images.unsplash.com/photo-1524504388940-b1c1722653e1?w=300' },
    { name: 'Sakshi Maurya', percentage: 95.33, subject: 'A1 Section', image: 'https://images.unsplash.com/photo-1509967419530-da38b4704bc6?w=300' }
  ],
  10: [
    { name: 'Ayaan Malhotra', percentage: 95.4, subject: 'CBSE Board', image: 'https://images.unsplash.com/photo-1463453091185-61582044d556?w=300' },
    { name: 'Zara Khan', percentage: 95.0, subject: 'CBSE Board', image: 'https://images.unsplash.com/photo-1488426862026-3ee34a7d66df?w=300' }
  ],
  11: [
    { name: 'Navneet Yadav', percentage: 90, subject: 'Maths Stream', image: 'https://images.unsplash.com/photo-1539571696357-5a69c17a67c6?w=300' },
    { name: 'Atiya Fatima', percentage: 88, subject: 'Biology Stream', image: 'https://images.unsplash.com/photo-1529626455594-4ff0802cfb7e?w=300' },
    { name: 'Sakshi Singh', percentage: 85, subject: 'Commerce Stream', image: 'https://images.unsplash.com/photo-1517841905240-472988babdf9?w=300' },
    { name: 'Anurag Singh', percentage: 88, subject: 'Humanities Stream', image: 'https://images.unsplash.com/photo-1504593811423-6dd665756598?w=300' }
  ],
  12: [
    { name: 'Ishaan Desai', percentage: 94.8, subject: 'Science Stream', image: 'https://images.unsplash.com/photo-1522529599102-193c0d76b5b6?w=300' },
    { name: 'Riya Agarwal', percentage: 94.2, subject: 'Commerce Stream', image: 'https://images.unsplash.com/photo-1489424731084-a5d8b219a5bb?w=300' },
    { name: 'Aryan Saxena', percentage: 93.6, subject: 'Humanities Stream', image: 'https://images.unsplash.com/photo-1552058544-f2b08422138a?w=300' }
  ]
};

// Events Data
export const events = [
  {
    id: '1',
    name: 'Annual Function 2025',
    description: 'A grand celebration of talent, creativity, and achievements with mesmerizing performances by our students. The evening showcased dance, drama, music, and awards ceremony celebrating our students\' accomplishments throughout the year.',
    event_date: '2025-12-15T00:00:00Z',
    category: 'annual_function',
    location: 'School Auditorium',
    cover_image_url: 'https://images.unsplash.com/photo-1511795409834-ef04bbd61622?w=800',
    image_count: 9
  },
  {
    id: '2',
    name: 'Sports Day 2025',
    description: 'A day full of energy, teamwork, and enthusiasm where students showcase their athletic skills. Various track and field events, relay races, and team sports were conducted with great sportsmanship and competitive spirit.',
    event_date: '2025-11-20T00:00:00Z',
    category: 'sports',
    location: 'School Sports Ground',
    cover_image_url: 'https://images.unsplash.com/photo-1461896836934-ffe607ba8211?w=800',
    image_count: 9
  },
  {
    id: '3',
    name: 'Rangoli Competition 2025',
    description: 'A colorful event where students express their creativity through intricate rangoli designs. Students from all classes participated, creating beautiful traditional and contemporary patterns using vibrant colors and flowers.',
    event_date: '2025-10-25T00:00:00Z',
    category: 'competition',
    location: 'School Courtyard',
    cover_image_url: 'https://images.unsplash.com/photo-1605886561160-fda71f3d8931?w=800',
    image_count: 9
  },
  {
    id: '4',
    name: 'Farewell 2025',
    description: 'A heartfelt goodbye to our senior students, celebrating their journey and future aspirations. The event included speeches, performances, and memories shared by teachers and students, marking the end of an important chapter.',
    event_date: '2025-02-28T00:00:00Z',
    category: 'ceremony',
    location: 'School Auditorium',
    cover_image_url: 'https://images.unsplash.com/photo-1523580494863-6f3031224c94?w=800',
    image_count: 9
  },
  {
    id: '5',
    name: 'Investiture Ceremony 2025',
    description: 'A solemn occasion where student leaders take the oath of responsibility. The newly elected student council members were formally invested with their badges and sashes, marking the beginning of their leadership journey.',
    event_date: '2025-07-15T00:00:00Z',
    category: 'ceremony',
    location: 'School Assembly Ground',
    cover_image_url: 'https://images.unsplash.com/photo-1517486808906-6ca8b3f04846?w=800',
    image_count: 9
  },
  {
    id: '6',
    name: 'Science Exhibition 2025',
    description: 'Students present innovative science projects and experiments showcasing their understanding of scientific concepts. The exhibition featured working models, experiments, and presentations covering various fields of science.',
    event_date: '2025-09-10T00:00:00Z',
    category: 'academic',
    location: 'Science Laboratory & Exhibition Hall',
    cover_image_url: 'https://images.unsplash.com/photo-1532094349884-543bc11b234d?w=800',
    image_count: 9
  }
];

// Event Images - 9 photos per event
const eventImageUrls = [
  'https://images.unsplash.com/photo-1509062522246-3755977927d7?w=800',
  'https://images.unsplash.com/photo-1427504494785-3a9ca7044f45?w=800',
  'https://images.unsplash.com/photo-1503676260728-1c00da094a0b?w=800',
  'https://images.unsplash.com/photo-1523050854058-8df90110c9f1?w=800',
  'https://images.unsplash.com/photo-1524178232363-1fb2b075b655?w=800',
  'https://images.unsplash.com/photo-1497633762265-9d179a990aa6?w=800',
  'https://images.unsplash.com/photo-1523240795612-9a054b0db644?w=800',
  'https://images.unsplash.com/photo-1491841573634-28140fc7ced7?w=800',
  'https://images.unsplash.com/photo-1522202176988-66273c2fd55f?w=800'
];

export const eventImages = {};

// Generate 9 images for each event
events.forEach(event => {
  eventImages[event.id] = eventImageUrls.map((url, idx) => ({
    id: `${event.id}-img-${idx + 1}`,
    event_id: event.id,
    image_url: url,
    caption: `Photo from ${event.name} - Moment ${idx + 1}`,
    order: idx + 1
  }));
});

// Gallery Images for Home Page
export const galleryImages = [
  {
    id: 1,
    title: 'Annual Function 2025',
    image: 'https://images.unsplash.com/photo-1511795409834-ef04bbd61622?w=800',
    description: 'A grand celebration of talent and achievements'
  },
  {
    id: 2,
    title: 'Sports Day 2025',
    image: 'https://images.unsplash.com/photo-1461896836934-ffe607ba8211?w=800',
    description: 'Students showcase their athletic skills'
  },
  {
    id: 3,
    title: 'Science Exhibition 2025',
    image: 'https://images.unsplash.com/photo-1532094349884-543bc11b234d?w=800',
    description: 'Innovative science projects by students'
  }
];
