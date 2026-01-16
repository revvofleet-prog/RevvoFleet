# Revvofleet - Luxury Car Rental Platform

## Overview

Revvofleet is a luxury car rental web application that allows users to browse exotic vehicles and submit booking requests. The platform features a modern, dark-themed UI with red accent colors, emphasizing a premium automotive experience. Users can view available cars, see details, and submit booking requests with their contact information and rental dates.

## User Preferences

Preferred communication style: Simple, everyday language.

## System Architecture

### Frontend Architecture
- **Framework**: React 18 with TypeScript
- **Routing**: Wouter (lightweight React router)
- **State Management**: TanStack React Query for server state
- **Styling**: Tailwind CSS with custom CSS variables for theming
- **UI Components**: Shadcn/ui component library (Radix UI primitives)
- **Animations**: Framer Motion for page transitions and interactions
- **Form Handling**: React Hook Form with Zod validation
- **Build Tool**: Vite

The frontend follows a pages-based structure with reusable components. Custom hooks abstract data fetching logic (`use-cars.ts`, `use-bookings.ts`).

### Backend Architecture
- **Runtime**: Node.js with Express
- **Language**: TypeScript (compiled with tsx)
- **API Design**: REST endpoints defined in `shared/routes.ts` with Zod schemas for type-safe request/response validation
- **Database ORM**: Drizzle ORM with PostgreSQL dialect

The server uses a storage abstraction layer (`server/storage.ts`) that wraps database operations. Routes are registered in `server/routes.ts`. The build process uses esbuild to bundle server code with key dependencies included.

### Data Storage
- **Database**: PostgreSQL (required via DATABASE_URL environment variable)
- **Schema Location**: `shared/schema.ts` using Drizzle table definitions
- **Migrations**: Drizzle Kit with `db:push` command for schema synchronization

Database tables:
- `cars`: Vehicle inventory (make, model, year, price, category, image, description)
- `bookings`: Rental requests (customer info, dates, car reference)

### Shared Code
The `shared/` directory contains code used by both frontend and backend:
- `schema.ts`: Drizzle table definitions and Zod validation schemas
- `routes.ts`: API endpoint definitions with path, method, and response schemas

This enables type-safe API contracts across the full stack.

## External Dependencies

### Database
- PostgreSQL database (connection via `DATABASE_URL` environment variable)
- Drizzle ORM for database operations
- `connect-pg-simple` for session storage support

### Third-Party Libraries
- **UI**: Radix UI primitives, Lucide icons, Tailwind CSS
- **3D Graphics**: React Three Fiber, Three.js, Drei (for hero car visualization)
- **Forms**: React Hook Form, Zod for validation
- **Dates**: date-fns for date manipulation
- **Animation**: Framer Motion

### Fonts (External)
- Google Fonts: Italiana (display), Manrope (body), JetBrains Mono (monospace)

### Development Tools
- Vite with React plugin
- Replit-specific plugins for development (cartographer, dev-banner, error overlay)