# FloraVision

FloraVision is a high-fidelity single-page storefront for premium indoor plants. The interface blends cinematic imagery, glassmorphism panels, and story-driven merchandising to spotlight curated collections, testimonials, and newsletter capture. The site is powered by React 19, Vite, and TailwindCSS for a fast, modern development workflow.

## Live Demo

- Production preview: [flora-vision-tawny.vercel.app](https://flora-vision-tawny.vercel.app/)

## Highlights

- Hero narrative with layered imagery, dual CTAs, and motion-ready controls.
- Trendy plant spotlight modules featuring price callouts and add-to-bag actions.
- Top-selling and premium plant grids defined via structured data in `src/components/section.jsx`.
- Customer review block with reusable `StarStrip` SVG for rating consistency.
- Newsletter form, quick links, and social handles to simulate a full retail footer.

## Tech Stack

- React 19 functional components.
- Vite 7 dev server and build tooling.
- TailwindCSS 3 for utility-first styling and translucency effects.
- Lucide React icons plus bespoke SVG ornamentation.

## Getting Started

### Prerequisites

- Node.js ≥ 18 (LTS recommended)
- npm ≥ 9 (bundled with Node; enable Corepack if using pnpm/yarn)

### Installation

```bash
git clone <repo-url>
cd Floravision
npm install
```

### Scripts

- `npm run dev` – start Vite with HMR.
- `npm run build` – generate an optimized `dist` bundle.
- `npm run preview` – locally preview the production build.
- `npm run lint` – run ESLint across the project.

## Project Structure

```
Floravision/
├─ public/               # Static assets served verbatim
├─ src/
│  ├─ assets/            # Imagery for hero, product cards, and reviews
│  ├─ components/
│  │  └─ section.jsx     # Primary landing page layout + data arrays
│  ├─ App.jsx            # Root component mounting Section
│  ├─ App.css & index.css# Tailwind layers and custom overrides
│  └─ main.jsx           # React entry
├─ package.json
└─ README.md
```

## Customization

- Update products, pricing, and testimonials by editing `topSellingPlants`, `premiumPlants`, and `customerReviews` in `src/components/section.jsx`.
- Swap imagery inside `src/assets` and adjust import paths at the top of `section.jsx`.
- Tailwind classes handle most layout/styling; extend via `src/App.css` or `tailwind.config.js` for theme updates.

## Deployment

Run `npm run build` and deploy the `dist` directory to any static host (Vercel, Netlify, GitHub Pages). Configure the host to serve `index.html` for unknown routes since the site is a single-page React app.
