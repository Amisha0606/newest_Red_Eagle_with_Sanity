# Red Eagle Group of Institutions - Website

A professional school website built with React and Sanity CMS.

## Tech Stack
- **Frontend**: React 18 + TailwindCSS + shadcn/ui
- **CMS**: Sanity (headless CMS for content management)
- **Deployment**: Ready for Vercel

## Project Structure
```
/app
├── frontend/          # React frontend application
│   ├── src/
│   │   ├── pages/     # Page components
│   │   ├── components/# UI components
│   │   └── lib/       # Sanity client config
│   └── package.json
├── studio/            # Sanity Studio (CMS admin)
│   ├── schemaTypes/   # Content schemas
│   └── sanity.config.ts
└── vercel.json        # Vercel deployment config
```

## Sanity Schemas

### 1. Events (`event`)
- **title**: Event name
- **slug**: URL-friendly identifier
- **eventDate**: Date of the event
- **category**: annual_function, sports, cultural, academic, ceremony, competition
- **description**: Event details
- **location**: Where the event was held
- **coverImage**: Main image for event listing
- **gallery**: Array of images with captions

### 2. Toppers (`toppers`)
- **section**: primary, middle, secondary, senior
- **classNumber**: 1-12
- **academicYear**: e.g., "2025-26"
- **students**: Array of student records
  - name, photo, percentage, stream, rank

## Deployment Guide

### Step 1: Deploy Sanity Studio
```bash
cd studio
npm install
npx sanity deploy
```
This will give you a URL like: `https://red-eagle-group.sanity.studio`

### Step 2: Deploy Frontend to Vercel

1. **Push to GitHub** (if not already)

2. **Import to Vercel**:
   - Go to [vercel.com](https://vercel.com)
   - Click "New Project" → Import your repository
   - Configure:
     - Framework Preset: `Other`
     - Root Directory: `frontend`
     - Build Command: `yarn build`
     - Output Directory: `build`

3. **No environment variables needed** - Sanity config is embedded

### Step 3: Add Content in Sanity

1. Go to your Sanity Studio URL
2. **Add Events**:
   - Click "Event" → Create new
   - Fill in title, date, category
   - Upload cover image
   - Add gallery images
3. **Add Toppers**:
   - Click "Toppers" → Create new
   - Select section (Primary/Middle/Secondary/Senior)
   - Select class number
   - Add student details with photos

## Sanity Project Details
- **Project ID**: `xacqk9il`
- **Dataset**: `production`

## Local Development

### Frontend
```bash
cd frontend
yarn install
yarn start
```

### Sanity Studio
```bash
cd studio
npm install
npm run dev
```

## Custom Domain Setup (After Vercel Deployment)

1. Go to Vercel Project → Settings → Domains
2. Add your custom domain (e.g., `www.redeagleschool.com`)
3. Update DNS records as instructed by Vercel
4. SSL certificate is auto-provisioned

## Pages
- `/` - Home
- `/about` - About the institution
- `/facilities` - School facilities
- `/eventGallery` - Events list (from Sanity)
- `/eventGallery/:slug` - Event details with photo gallery
- `/toppers` - Student achievements (from Sanity)
- `/rules` - School rules
- `/fee-structure` - Fee information
- `/contact` - Contact page with map
- `/bhopatpur` - Coming soon branch page
