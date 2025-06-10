# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Development Commands

- `npm run dev` - Start development server
- `npm run build` - Build for production (includes type checking via `astro check`)
- `npm run preview` - Preview production build locally
- `astro` - Access Astro CLI directly

## Architecture Overview

This is an Astro-based landing page for Katuq, using TypeScript and Tailwind CSS. The project follows a component-based architecture with clear separation of concerns.

### Key Architectural Patterns

- **Content Management**: Uses Astro's content collections for blog posts (`src/content/blog/`)
- **Configuration System**: Centralized config in `src/config/` with TypeScript interfaces
- **Component Structure**: 
  - `src/components/blocks/` - Page-level sections (CTA, FAQ, features, hero, etc.)
  - `src/components/ui/` - Reusable UI components (buttons, cards, forms, etc.)
  - `src/components/scripts/` - Analytics and tracking scripts
- **Data Management**: JSON files in `src/data/json-files/` for dynamic content (FAQ, features, pricing)
- **Styling**: Tailwind CSS with custom color scheme (primary purple #9b00ffff, neutral grays)

### Theme and Branding

The site is configured for dark mode by default (`mode: 'dark'` in config) with purple primary colors. The layout automatically applies `mode-dark` class to HTML element.

### Content Structure

- Blog system with tags and pagination
- Multi-language content (Spanish translations present)
- Markdown support for terms and blog posts
- Static asset organization in `public/` and `src/assets/`

### Integration Points

- Vercel Analytics integration
- Google Tag Manager and Analytics
- Sitemap generation
- Partytown for script optimization

When making changes, maintain the existing TypeScript interfaces in config files and follow the established component naming conventions.

## Google Calendar Demo Booking

The site includes a demo booking system using Google Calendar Appointment Scheduling:

- **Component**: `src/components/blocks/contact/SimpleDemoBooking.astro`
- **Configuration**: `src/config/config.ts` (appointmentConfig)
- **Location**: Integrated in `/contact` page

### Setup Instructions:
1. Create appointment schedule in Google Calendar
2. Get the booking URL from Share → Website embed 
3. Update `demoBookingUrl` in `src/config/config.ts`
4. The component handles fallbacks and provides a seamless booking experience

## Floating Contact Buttons

The site includes floating contact buttons visible on all pages:

- **Component**: `src/components/ui/FloatingContactButtons.astro`
- **Configuration**: `src/config/config.ts` (contactConfig)
- **Phone Number**: +573104082376
- **Features**: 
  - WhatsApp button (green) with pre-filled message
  - Phone call button (blue) for direct calling
  - Tooltips on hover, analytics tracking, responsive design
  - Alternating pulse animations

Both buttons are positioned in the bottom-right corner and use the same phone number for consistency.