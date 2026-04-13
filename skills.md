# Portfolio Project Analysis & Recreation Guide

This document captures the architecture, technologies, and UI/UX techniques used in this portfolio website. You can use this as a reference guide to recreate this exact premium aesthetic and functionality in future projects.

## 1. Core Technology Stack

- **Framework:** [Next.js](https://nextjs.org/) (App Router, v16+)
- **Library:** React 19 & React DOM 19
- **Language:** TypeScript
- **Styling:** [Tailwind CSS](https://tailwindcss.com/) (v3.4+)
- **Package Manager:** npm / pnpm / yarn

## 2. Key Dependencies & Libraries

These are the crucial libraries that give the project its high-end feel:

- **[Framer Motion](https://www.framer.com/motion/):** Used extensively for scroll animations (`useScroll`, `useTransform`), page reveal animations (`fadeUp` variants), and the custom zero-latency cursor.
- **[Lenis](https://lenis.studiofreight.com/):** Provides butter-smooth, momentum-based scrolling. Wraps the entire application in `SmoothScroll.tsx`.
- **[Lucide React](https://lucide.dev/):** Sleek, consistent, and customizable SVG icons.
- **[Clsx](https://github.com/lukeed/clsx) & [Tailwind Merge](https://github.com/dcastil/tailwind-merge):** (Usually combined via a `cn()` utility) Used to conditionally merge Tailwind classes without style conflicts.

## 3. Advanced UI / UX Concepts Implemented

To achieve this "senior-level" creative design, the project heavily relies on the following design concepts:

### A. Custom Animated Cursor (`Cursor.tsx`)
- Overrides the default browser cursor (`cursor-none` on the `<body>`).
- Uses Framer Motion's `useMotionValue` for zero-latency dot tracking.
- Uses Framer Motion's `useSpring` to create a delayed, trailing "glow ring" effect.
- Detects hover states on `<a>`, `<button>`, and `.clickable` elements to expand the cursor.

### B. Smooth Scrolling Experience (`SmoothScroll.tsx`)
- Lenis is instantiated with custom easing.
- Syncs Lenis scroll values with Framer Motion so scroll-linked animations (`useScroll`) work flawlessly.
- Disables infinite scroll but customizes wheel out/in multipliers.

### C. Glassmorphism & Glow Effects
- **Backdrop Filters:** Extensive use of `backdrop-filter: blur(16px)` on cards.
- **Gradients:** Dark gradients for cards (`linear-gradient(135deg, rgba(17,24,39,0.7), rgba(10,14,26,0.85))`).
- **Glow Elements ("Ambient Blobs"):** Absolute positioned empty `div`s with high blur (`filter: blur(100px)`) and low opacity to act as colored lights in the background.

### D. CSS Variables & Typography
- **Primary Font:** Inter (`--font-inter`) for body text.
- **Heading Font:** Plus Jakarta Sans (`--font-plus-jakarta`) to give titles a premium geometry.
- Dark theme baseline: Deep navy/blue-black background (`#080d1a`).

### E. Component Optimization
- Dynamic component loading: Heavy visual sections (`About`, `Skills`, `Projects`, `Contact`) are lazy-loaded without SSR in `page.tsx` using `next/dynamic` (`{ ssr: false }`). This keeps the initial load incredibly fast.

---

## 4. How to Recreate This Setup Locally

If you want to spin up a new project with the same foundational structure:

**1. Initialize Next.js:**
```bash
npx create-next-app@latest my-premium-portfolio --typescript --tailwind --eslint --app --src-dir --import-alias "@/*"
cd my-premium-portfolio
```

**2. Install Core Animation & Utility Dependencies:**
```bash
npm install framer-motion lenis lucide-react clsx tailwind-merge
```

**3. Setup Global CSS (`src/app/globals.css`):**
Ensure your body background matches the deep, dark theme and the cursor is hidden if using a custom one.
```css
body {
  background-color: #080d1a;
  color: #94a3b8;
  overflow-x: hidden;
  cursor: none; /* Only if using the custom Cursor component */
}
```

**4. Update `tailwind.config.ts`:**
Extend colors with custom hex codes and add fonts:
```typescript
theme: {
  extend: {
    colors: {
      background: "#080d1a",
      card: "#111827",
      primary: "#10b981", 
      /* etc... */
    },
    fontFamily: {
      sans: ["var(--font-inter)", "sans-serif"],
      heading: ["var(--font-plus-jakarta)", "sans-serif"],
    }
  }
}
```

**5. Re-implement Base Layout (`src/app/layout.tsx`):**
Import Google fonts via `next/font/google`, instantiate them with CSS variables, wrap the `children` in your layout.

**6. Re-implement Core Components:**
- Copy `SmoothScroll.tsx` and place it at the root of `page.tsx` to wrap content.
- Copy `Cursor.tsx` and put it directly in `layout.tsx`.
- Bring over sections (`Hero`, `Projects`, etc.) section by section, ensuring the `framer-motion` variants (`fadeUp`, `stagger`) and Parallax setups (`useTransform`) are intact.
