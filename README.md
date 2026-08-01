# TALHA // 3D Hardware Visualization & Web Configurators

Minimal, technical, Nothing-inspired portfolio website built with **Next.js 14+ (App Router)**, **TypeScript**, **Tailwind CSS**, **Framer Motion**, and **next-themes**. Includes real-time **PlayCanvas WebGL 3D Car Configurator** embeds, dynamic dark/light mode, and hard-surface render galleries.

---

## ⚡ Tech Stack

- **Framework:** Next.js 14+ (App Router, TypeScript)
- **Styling:** Tailwind CSS (v4) with CSS custom property design system
- **Animation:** Framer Motion (functional scroll-reveals)
- **Theme:** `next-themes` (zero layout shift dark/light mode switcher)
- **3D Engine:** PlayCanvas WebGL Configurator Embeds
- **Typography:** `Space Mono` (technical headings/meta) & `Inter` (body)
- **Icons:** Lucide React

---

## 🏎️ Features & Structure

- **Hero & Capabilities:** Hardware positioning statement, CAD pipeline highlights, capabilities strip.
- **Interactive 3D Configurator:** Embedded PlayCanvas real-time car configurator (`/configurator` full page and homepage embed component).
- **Portfolio Case Studies:** Filterable grid (`/work`) and individual technical case study detail templates (`/work/[slug]`).
- **Services & Pricing Matrix:** Detailed CAD-to-render breakdown (`/services`) and starter tier comparison tables (`/pricing`).
- **Technical Aesthetic:** 1px hairline grid borders (`border-border`), strict color restraint, exposed metadata specs.

---

## 🚀 Getting Started

### Prerequisites

Make sure you have Node.js 18+ and npm installed.

### Installation

```bash
# Install dependencies
npm install

# Run local development server
npm run dev
```

Open [http://localhost:3000](http://localhost:3000) with your browser.

---

## 🛠️ Commands

| Command | Description |
|---|---|
| `npm run dev` | Starts local Next.js development server |
| `npm run build` | Builds optimized production bundle and runs static site generation (SSG) |
| `npm run start` | Runs production server after building |
| `npm run lint` | Runs ESLint checks |

---

## 🌐 Deployment

Designed for zero-config static export or instant Vercel deployment:

1. Push this repository to GitHub.
2. Import repository into [Vercel](https://vercel.com).
3. Vercel will automatically detect Next.js and deploy with zero configuration.
