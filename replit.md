# For Sathi Mandal - Love Letter Website

## Overview

This is a romantic, single-page web application designed as a love letter for Sathi Mandal. The application features a minimalistic, emotionally resonant design centered around an interactive envelope animation that reveals a personal love letter. The site emphasizes graceful simplicity with a soft pink and rose color palette, elegant typography, and subtle animations including floating hearts and optional background music.

## User Preferences

Preferred communication style: Simple, everyday language.

## System Architecture

### Frontend Architecture

**Framework & Build System**
- React 18+ with TypeScript for type-safe component development
- Vite as the build tool and development server, configured with custom alias support for clean imports (@, @shared, @assets)
- Wouter for lightweight client-side routing (currently single-page with home and 404 routes)

**UI Component Library**
- Shadcn/ui component system (New York style variant) providing a comprehensive set of pre-built, accessible React components
- Radix UI primitives as the foundation for interactive components (dialogs, dropdowns, tooltips, etc.)
- Tailwind CSS for utility-first styling with custom design tokens

**Design System**
- Custom color palette focused on romantic aesthetics: soft blush pink (#FADADD), warm rose quartz (#F7CAC9), muted gold (#F2C572), charcoal gray (#333333)
- Typography hierarchy using Google Fonts: Playfair Display for headings, Great Vibes/Dancing Script for handwritten letter text, Open Sans for body text
- Gradient backgrounds transitioning from white to pale pink for a dreamy atmosphere
- Custom Tailwind configuration with extended color system using CSS custom properties for theming

**State Management & Data Fetching**
- TanStack Query (React Query) v5 for server state management and API communication
- Custom query client configuration with credential-based requests and error handling
- Form state managed via React Hook Form with Zod schema validation through @hookform/resolvers

**Interactive Features**
- Envelope animation as centerpiece interaction triggering letter reveal
- Audio playback system for optional background music with toggle controls
- Floating heart animations with varied sizes, positions, and durations
- Hover and click states with elevation effects for buttons and interactive elements

### Backend Architecture

**Server Framework**
- Express.js with TypeScript for the HTTP server
- Custom middleware for request logging with duration tracking and JSON response capture
- Structured error handling middleware with status code normalization

**Development Environment**
- Separate development and production configurations
- Vite middleware integration in development for HMR (Hot Module Replacement)
- Custom logging system with formatted timestamps and source attribution
- Replit-specific plugins for development banner and error modals

**API Structure**
- RESTful API pattern with /api prefix convention for all application routes
- Modular route registration system through registerRoutes function
- HTTP server creation and management separate from Express app instance

**Data Layer**
- In-memory storage implementation (MemStorage class) as the current data persistence layer
- Storage interface (IStorage) defining CRUD operations for future database migration
- User entity support with UUID-based identification
- Designed for easy migration to database backend (Drizzle ORM configuration present but not actively used)

### External Dependencies

**Database & ORM (Configured but Not Active)**
- Drizzle ORM v0.39+ configured for PostgreSQL dialect
- Neon Database serverless driver (@neondatabase/serverless) ready for integration
- Migration system configured to output to ./migrations directory
- Schema defined in TypeScript with Zod validation integration

**Session Management (Available)**
- connect-pg-simple package available for PostgreSQL session storage
- Currently using in-memory storage pattern

**UI & Animation Libraries**
- Lucide React for consistent iconography
- Embla Carousel for potential carousel implementations
- class-variance-authority (CVA) for component variant management
- clsx and tailwind-merge for conditional className composition
- date-fns for date manipulation utilities

**Development Tools**
- TypeScript compiler with strict mode enabled
- ESBuild for production server bundling
- PostCSS with Autoprefixer for CSS processing
- Replit-specific development tools for enhanced DX in Replit environment