# Red Eagle Admin Panel Credentials

**Admin Login URL:** http://localhost:3000/admin/login

## Default Admin Account

- **Username:** admin
- **Email:** admin@redeaglepublicschool.com  
- **Password:** AdminRedeagle@123

⚠️ **IMPORTANT:** Change the default password after first login!

## API Endpoints

All admin endpoints require Bearer token authentication.

**Base URL:** Backend API URL

**Auth:**
- POST /api/auth/login - Login and get JWT token
- POST /api/auth/register - Register new admin
- GET /api/auth/me - Get current admin info

**Gallery Management:**
- POST /api/admin/gallery - Create gallery item
- GET /api/gallery - Get all gallery items (public)
- PUT /api/admin/gallery/{id} - Update gallery item
- DELETE /api/admin/gallery/{id} - Delete gallery item

**Toppers Management:**
- POST /api/admin/toppers - Create topper
- GET /api/toppers - Get all toppers (public)
- PUT /api/admin/toppers/{id} - Update topper
- DELETE /api/admin/toppers/{id} - Delete topper

**News Management:**
- POST /api/admin/news - Create news
- GET /api/news - Get published news (public)
- GET /api/admin/news/all - Get all news (admin)
- PUT /api/admin/news/{id} - Update news
- DELETE /api/admin/news/{id} - Delete news

**Facilities Management:**
- POST /api/admin/facilities - Create facility
- GET /api/facilities - Get all facilities (public)
- PUT /api/admin/facilities/{id} - Update facility
- DELETE /api/admin/facilities/{id} - Delete facility

**Dashboard:**
- GET /api/admin/stats - Get dashboard statistics

## Token Usage

After login, the JWT token is stored in localStorage as 'admin_token'.
All admin API calls include: `Authorization: Bearer {token}`

Token expires after 24 hours.
