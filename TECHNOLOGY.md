# Technology Stack - V7 Securities Group Website

**Production URL:** https://v7securitiesgroup.com/

---

## Core Framework

| Technology | Version | Purpose |
|---|---|---|
| React | ^18.3.1 | UI component library |
| React DOM | ^18.3.1 | DOM rendering for React |
| TypeScript | ^5.5.3 | Static type checking |
| Vite | ^5.4.2 | Build tool and dev server |

---

## Styling

| Technology | Version | Purpose |
|---|---|---|
| Tailwind CSS | ^3.4.1 | Utility-first CSS framework |
| PostCSS | ^8.4.35 | CSS processing pipeline |
| Autoprefixer | ^10.4.18 | Automatic vendor prefixing |

---

## UI & Icons

| Technology | Version | Purpose |
|---|---|---|
| Lucide React | ^0.344.0 | Icon library (SVG icons) |

---

## Backend / Database

| Technology | Version | Purpose |
|---|---|---|
| Supabase JS | ^2.57.4 | Backend-as-a-service client (database, auth) |

---

## Development Tools

| Technology | Version | Purpose |
|---|---|---|
| ESLint | ^9.9.1 | JavaScript/TypeScript linter |
| @eslint/js | ^9.9.1 | ESLint core rules |
| typescript-eslint | ^8.3.0 | TypeScript ESLint parser and rules |
| eslint-plugin-react-hooks | ^5.1.0-rc.0 | Enforces React Hooks rules |
| eslint-plugin-react-refresh | ^0.4.11 | Validates React Fast Refresh compatibility |
| @vitejs/plugin-react | ^4.3.1 | Vite plugin for React (Fast Refresh, JSX) |
| @types/react | ^18.3.5 | TypeScript type definitions for React |
| @types/react-dom | ^18.3.0 | TypeScript type definitions for React DOM |
| globals | ^15.9.0 | Global variable definitions for ESLint |

---

## Analytics & SEO

| Technology | Details |
|---|---|
| Google Analytics 4 | Measurement ID: G-C4CCJ4QJ4R |
| JSON-LD Structured Data | SecurityService, FAQPage, WebSite, BreadcrumbList schemas |
| Open Graph Protocol | Full OG meta tags for social sharing |
| Twitter Cards | summary_large_image card type |
| XML Sitemap | /sitemap.xml |
| robots.txt | /robots.txt |
| Geo Meta Tags | Targeting Mandi, Himachal Pradesh (IN-HP) |

---

## Build Configuration

### TypeScript (tsconfig.app.json)

- **Target:** ES2020
- **Module:** ESNext
- **Module Resolution:** Bundler mode
- **JSX:** react-jsx (automatic runtime)
- **Strict Mode:** Enabled
- **Unused Locals/Parameters Check:** Enabled

### Vite (vite.config.ts)

- **Plugin:** @vitejs/plugin-react
- **Optimized Dependencies:** lucide-react excluded from pre-bundling

### Tailwind CSS (tailwind.config.js)

- **Content Paths:** `./index.html`, `./src/**/*.{js,ts,jsx,tsx}`
- **Theme Extensions:** None (uses default Tailwind theme)
- **Plugins:** None

---

## Project Structure

```
project/
├── index.html                  # Entry HTML with SEO meta tags & structured data
├── package.json                # Dependencies and scripts
├── vite.config.ts              # Vite build configuration
├── tailwind.config.js          # Tailwind CSS configuration
├── postcss.config.js           # PostCSS configuration
├── tsconfig.json               # Root TypeScript config
├── tsconfig.app.json           # App-specific TypeScript config
├── tsconfig.node.json          # Node-specific TypeScript config
├── eslint.config.js            # ESLint configuration
├── public/                     # Static assets (copied as-is to dist)
│   ├── robots.txt
│   ├── sitemap.xml
│   ├── v7-logo.jpeg            # Company logo
│   ├── v7-hero.webp            # Hero background image
│   ├── v7-about.jpg            # About section image
│   ├── v7-offcie-pp.jpeg       # Office photo
│   ├── himachal-map.jpg        # HP coverage map
│   ├── punjab-map.jpg          # Punjab coverage map
│   ├── chandigarh-map.png      # Chandigarh coverage map
│   ├── residential-security.jpg
│   ├── Corporate Office Security.webp
│   ├── Industrial Factory Security india.webp
│   ├── Event Security.jpg
│   ├── Professional Bouncers.webp
│   ├── VIP Protection & Escort security .webp
│   ├── Personal Security Officers.webp
│   └── [testimonial images]    # irm*.jpg, irf*.jpg
└── src/
    ├── main.tsx                # React entry point
    ├── App.tsx                 # Root component with client-side routing
    ├── index.css               # Tailwind CSS directives
    ├── vite-env.d.ts           # Vite type declarations
    └── components/
        ├── Navigation.tsx      # Fixed top navigation bar
        ├── Hero.tsx            # Full-screen hero section with animated counters
        ├── Services.tsx        # Service cards grid (7 services)
        ├── ServiceDetail.tsx   # Individual service detail view
        ├── About.tsx           # Company info, founders, mission/vision
        ├── Coverage.tsx        # Coverage areas with region maps
        ├── Testimonials.tsx    # Auto-rotating testimonial carousel
        ├── Contact.tsx         # Contact form (submits via WhatsApp)
        ├── Footer.tsx          # Site footer with links and contact info
        └── WhatsAppButton.tsx  # Floating WhatsApp chat button
```

---

## Available Scripts

| Command | Description |
|---|---|
| `npm run dev` | Start Vite dev server |
| `npm run build` | Production build via Vite |
| `npm run preview` | Preview production build locally |
| `npm run lint` | Run ESLint on all files |
| `npm run typecheck` | Run TypeScript type checking (no emit) |

---

## Architecture Notes

- **Routing:** Client-side state-based routing (no React Router). Navigation managed via `currentPage` state in `App.tsx`.
- **Styling Approach:** Utility-first with Tailwind CSS. No custom CSS files beyond Tailwind directives.
- **Color Palette:** Slate (backgrounds), Amber/Orange (accents), Gray (text).
- **Responsive Design:** Mobile-first with Tailwind breakpoints (sm, md, lg).
- **Contact System:** All inquiries route through WhatsApp API (no server-side form handling).
- **Hosting:** Static site deployment (SPA with `_redirects` for client-side routing).
- **Image Formats:** Mix of JPEG, WebP, and PNG. Service/hero images in WebP for performance.
