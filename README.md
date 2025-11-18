# FloraVision

FloraVision is a single-page concept store for premium indoor plants. It combines high-contrast UI, glassmorphism details, and story-driven content to spotlight curated collections, testimonials, and hero merchandising. The site is implemented with React 19, Vite, and TailwindCSS for a fast, modern development experience.

## Features

- Immersive hero section with layered imagery, CTA buttons, and motion-ready controls.
- Trendy plants carousel highlighting curated desk plants with pricing and quick actions.
- Top-selling and premium plant cards powered by structured data arrays in `src/components/section.jsx`.
- Social-proof block with stylized customer testimonials and reusable `StarStrip` SVG.
- Newsletter signup form and footer quick links to mimic a full storefront experience.

## Tech Stack

- React 19 with functional components.
- Vite 7 bundler for instant dev server and optimized builds.
- TailwindCSS 3 for utility-first styling, translucency effects, and responsive layouts.
- Lucide icons plus custom SVG assets for bespoke ornamentation.

## Getting Started

### Prerequisites

- Node.js 18+ (LTS recommended)
- npm 9+ (ships with Node; use `corepack enable` if you prefer pnpm/yarn)

### Installation

```bash
git clone <repo-url>
cd Floravision
npm install
```

### Available Scripts

- `npm run dev` – Launch Vite dev server with HMR.
- `npm run build` – Create a production build in `dist`.
- `npm run preview` – Serve the build locally for QA.
- `npm run lint` – Run ESLint over the project.

## Project Structure

```
Floravision/
├─ public/               # Static assets served as-is
├─ src/
│  ├─ assets/            # Images used throughout the hero and product cards
│  ├─ components/
│  │  └─ section.jsx     # Main landing page layout and data arrays
│  ├─ App.jsx            # Mounts the Section component
│  ├─ App.css & index.css# Tailwind layers and custom overrides
│  └─ main.jsx           # React entry point
├─ package.json
└─ README.md
```

## Customization Tips

- Update plant listings, prices, and testimonials by editing the `topSellingPlants`, `premiumPlants`, and `customerReviews` arrays in `src/components/section.jsx`.
- Replace imagery inside `src/assets` with your own exports; adjust imports at the top of `section.jsx`.
- Tailwind classes define nearly all layout/styling. Extend or override them in `src/App.css` or via Tailwind config if you need theme-level changes.

## Deployment

Deploy the `dist` build folder to any static host (Netlify, Vercel, GitHub Pages). Ensure your host serves `index.html` for unknown routes since this is a single-page React app.
