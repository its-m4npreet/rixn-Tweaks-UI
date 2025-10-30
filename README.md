# Risxn-Tweaks-UI

This repository contains the frontend for RisxnTweaks — a small React + Vite UI that shows product information, features, and a responsive navigation bar. It's built with TypeScript, Tailwind (utilities), React Router and small componentized structure.

## Highlights
- Responsive navigation bar with mobile hamburger menu
- Roboto font loaded globally
- Hero section with large call-to-action buttons (now mobile-friendly)

## Tech stack
- React + TypeScript
- Vite (dev server / bundler)
- Tailwind-style utility classes (project uses utility classes throughout)
- React Router for navigation
- Icons from `react-icons`

## Getting started (frontend)

Prerequisites
- Node.js (16+ recommended)
- npm (or yarn)

Install and run

Open a terminal and run:

```powershell
cd frontend
npm install
npm run dev
```

This will start the Vite dev server and open the site at the local dev URL (usually http://localhost:5173).

Build for production

```powershell
cd frontend
npm run build
```

## Files of interest
- `frontend/src/components/navBar/navBar.tsx` — responsive navbar and mobile menu.
- `frontend/src/components/navBar/navBar.css` — styles for the navbar and mobile menu.
- `frontend/src/index.css` — global styles; Roboto font is now set here.
- `frontend/index.html` — includes Google Fonts link for Roboto.

## Recent UI changes (made during local development)
- Added a mobile menu toggle (hamburger) and a mobile panel to the navbar. The center links are hidden on small screens and shown on md+.
- Buttons in the hero section were made full-width on small screens for better tap targets (`w-full md:w-auto`).
- Replaced the global font with Roboto via Google Fonts and set it in `src/index.css`.

## How to test responsive behavior

1. Start the dev server (`npm run dev`) and open the app in a browser.
2. Resize the browser or open developer tools and toggle a mobile device (narrow viewport).
3. Verify:
   - The navbar shows a hamburger icon on small screens. Clicking it opens a vertical menu. Clicking a link closes the menu.
   - The hero action buttons span the content width on mobile, and remain inline on wider screens.
   - Body text uses Roboto (inspect computed font-family to verify).

## Contributing
PRs are welcome. If you add features, please:

1. Create a branch.
2. Keep changes small and focused.
3. Run the dev server and ensure there are no TypeScript errors.
