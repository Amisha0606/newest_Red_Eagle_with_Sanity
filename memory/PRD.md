# Red Eagle Group of Institutions - Website PRD

## Original Problem Statement
Build a professional website for "Red Eagle Group of Institutions" - a school website with multiple pages, event galleries, and content showcasing the institution's facilities, leadership, and achievements.

## Current Architecture
- **Type**: Frontend-only React application (Vercel-ready)
- **Frontend**: React + TailwindCSS + shadcn/ui components
- **CMS**: Sanity (headless CMS)
- **Backend**: None (removed for Vercel deployment)
- **Database**: Sanity Cloud (managed)

## Sanity Schemas (Simplified - Feb 2026)

### Event Schema
- title, slug, eventDate, category
- description, location
- coverImage (main image)
- gallery[] (multiple images with captions)

### Toppers Schema  
- section (primary/middle/secondary/senior)
- classNumber (1-12)
- academicYear
- students[] (name, photo, percentage, stream, rank)

## Core Features Implemented ✅
- [x] Multi-page website (Home, About, Contact, Facilities, Toppers, Rules, Fees)
- [x] Event Gallery System with individual event pages (Sanity CMS)
- [x] Toppers Section by class (Sanity CMS)
- [x] Coming Soon page for Bhopatpur branch
- [x] Leadership messages section
- [x] Google Maps integration on Contact page
- [x] Responsive design with mobile support
- [x] Vercel deployment configuration

## Pages Structure
1. **Home** (`/`) - Hero, About preview, Facilities, Leadership, Gallery preview
2. **About** (`/about`) - Institution history and mission
3. **Facilities** (`/facilities`) - School infrastructure
4. **Events** (`/eventGallery`) - Event gallery list (from Sanity)
5. **Event Detail** (`/eventGallery/:slug`) - Individual event gallery
6. **Toppers** (`/toppers`) - Student achievements by class (from Sanity)
7. **Rules** (`/rules`) - School rules & regulations
8. **Fees** (`/fee-structure`) - Fee structure information
9. **Contact** (`/contact`) - Contact info with map
10. **Bhopatpur Branch** (`/bhopatpur`) - Coming soon page

## Key Files
- `/app/frontend/src/lib/sanityClient.js` - Sanity client configuration
- `/app/frontend/src/App.js` - Route definitions
- `/app/studio/schemaTypes/` - Sanity schema definitions
- `/app/vercel.json` - Vercel deployment config

## Deployment Ready
- ✅ Backend removed (pure frontend)
- ✅ Vercel configuration added
- ✅ Sanity schemas simplified for Toppers & Events

## Sanity Project
- Project ID: `xacqk9il`
- Dataset: `production`

## Backlog / Future Tasks
### P1 (High Priority)
- [ ] Deploy Sanity Studio (`npx sanity deploy`)
- [ ] Add real event data and photos
- [ ] Add topper student data with photos

### P2 (Medium Priority)
- [ ] Contact form with email notification
- [ ] Image optimization

### P3 (Low Priority)
- [ ] Social media sharing buttons
- [ ] Newsletter subscription

## Last Updated
February 2026
