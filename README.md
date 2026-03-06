# Red Eagle Group of Institutions

A modern, high-performance school website built with **React**, **Vite**, **Tailwind CSS**, and **Sanity CMS**.

## 🚀 Project Overview

This project is a complete digital transformation for Red Eagle Group of Institutions. It features a premium, responsive frontend and a powerful headless CMS (Sanity) for dynamic content management (events, toppers, facilities, etc.).

### Key Features
- **Dynamic Content**: Managed via Sanity.io.
- **Premium Design**: Modern aesthetic, glassmorphism, and smooth animations.
- **SEO Optimized**: Includes `sitemap.xml`, `robots.txt`, and AI-friendly `llms.txt`.
- **Responsive**: Fully optimized for mobile, tablet, and desktop.
- **Real Assets**: Integrated actual school project images for gallery, leadership, and facilities.

---

## 📂 Project Structure

- `/frontend`: The React application built with Vite.
- `/studio`: The Sanity CMS configuration and studio.
- `/public/assets`: Organized real-world school assets and branding.

---

## 🛠️ Getting Started

### Prerequisites
- Node.js (v18+)
- npm or yarn

### Installation

1. **Clone the repository**
2. **Setup Frontend:**
   ```bash
   cd frontend
   npm install
   ```
3. **Setup Studio:**
   ```bash
   cd studio
   npm install
   ```

---

## 💻 Development Commands

### Frontend (React + Vite)
Inside the `frontend` directory:
- `npm run dev`: Start the development server (Vite).
- `npm run build`: Build for production.
- `npm run preview`: Preview the production build.

### Sanity Studio
Inside the `studio` directory:
- `npx sanity dev`: Start the local CMS studio.
- `npx sanity deploy`: Deploy the studio to Sanity's cloud.
- `npx sanity gql-deploy`: Deploy GraphQL API.

---

## 📈 SEO & AI Integration

- **Sitemap**: `/public/sitemap.xml` - Automatically indexed by search engines.
- **Robots**: `/public/robots.txt` - Controls crawler access.
- **LLMs Context**: `/public/llms.txt` - Provides structured context for AI models (ChatGPT, Claude, etc.) to understand the site structure.

---

## 🖼️ Media & Assets

Assets are organized in `frontend/public/assets/` by category:
- `branding/`: Logo and identity.
- `school/`: Campus and infrastructure photos.
- `gallery/`: Event and activity photos.
- `toppers/`: Academic achievers.
- `facilities/`: Iconography and site vectors.

---

## 📝 License
Proprietary - Red Eagle Group of Institutions.
