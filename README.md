# Kristi's Portfolio Website

A modern, interactive portfolio website showcasing my skills, projects, and contact information with stunning 3D elements and animations.

## Features

- Interactive 3D computer model with orbiting technology logos
- Animated hero section with typing effect
- Responsive portfolio project showcase
- Contact form with EmailJS integration
- Smooth animations with Framer Motion
- Fully responsive design

## Tech Stack

- React 19
- Three.js
- React Three Fiber & Drei
- Framer Motion
- EmailJS for contact form
- Vite for build tooling
- CSS3 for styling

## Getting Started

1. Clone the repository
2. Install dependencies:
   ```bash
   npm install
   ```
3. Create a `.env` file with your EmailJS credentials:
   ```
   VITE_SERVICE_ID=your_service_id
   VITE_TEMPLATE_ID=your_template_id
   VITE_PUBLIC_KEY=your_public_key
   ```
4. Run the development server:
   ```bash
   npm run dev
   ```

## Build and Deploy

To build for production:
```bash
npm run build
```

To deploy to GitHub Pages:
```bash
npm run deploy
```

## Structure

- `src/components/hero` - Hero section with animated text
- `src/components/computer` - 3D computer model and orbiting technology logos
- `src/components/portfolio` - Portfolio project showcase
- `src/components/contact` - Contact form with EmailJS integration
