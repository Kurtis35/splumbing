# Somerset Plumbing Website

## Overview

A static, frontend-only website for Somerset Plumbing, a plumbing business located in Somerset West, South Africa. The site is designed to maximize conversions through fast performance, clean design, and clear calls-to-action. It features a modern React-based architecture with no backend, database, or authentication - purely focused on presentation and lead generation.

## User Preferences

Preferred communication style: Simple, everyday language.

## System Architecture

### Frontend Architecture
- **Framework**: React 18 with TypeScript
- **Build Tool**: Vite for fast development and optimized production builds
- **Routing**: Wouter (lightweight React router)
- **State Management**: TanStack React Query for async data fetching patterns (prepared for future API integration)
- **Styling**: Tailwind CSS with CSS custom properties for theming
- **UI Components**: shadcn/ui component library (Radix UI primitives + Tailwind styling)
- **Animations**: Framer Motion for scroll reveals and interactions
- **Forms**: React Hook Form with Zod validation via @hookform/resolvers

### Project Structure
```
client/
├── src/
│   ├── components/     # Reusable React components
│   │   └── ui/         # shadcn/ui component library (required)
│   ├── hooks/          # Custom React hooks
│   ├── lib/            # Utility functions (cn, queryClient)
│   ├── pages/          # Page components (Home, About, Contact, Services)
│   └── index.css       # Global styles and Tailwind configuration
shared/                  # Shared types/schemas (prepared for backend)
```

### Design System
- **Color Palette**: Trust & Water Blue theme with primary blue (#3b82f6) and water accent colors
- **Typography**: Inter font family for all text
- **Component Style**: shadcn/ui "new-york" style with neutral base colors
- **Border Radius**: Custom values (lg: 9px, md: 6px, sm: 3px)

### Key Design Decisions
1. **Static-first approach**: No backend complexity - all content is hardcoded for maximum performance and simplicity
2. **Component library**: shadcn/ui provides accessible, customizable components that can be modified directly in the codebase
3. **Path aliases**: `@/` maps to `client/src/`, `@shared/` maps to `shared/` for clean imports
4. **Mobile-first responsive design**: All components built with mobile responsiveness in mind

## External Dependencies

### UI Libraries
- **@radix-ui/***: Accessible primitive components (dialog, dropdown, accordion, etc.)
- **lucide-react**: Icon library
- **class-variance-authority**: Variant-based component styling
- **clsx + tailwind-merge**: Utility for merging Tailwind classes

### Animation & Interaction
- **framer-motion**: Animation library for scroll effects and transitions
- **embla-carousel-react**: Carousel functionality

### Form Handling
- **react-hook-form**: Form state management
- **@hookform/resolvers**: Zod integration for form validation
- **zod**: Schema validation (via drizzle-zod in shared schemas)

### Data Fetching
- **@tanstack/react-query**: Async state management (currently prepared for future API integration)

### Build & Development
- **Vite**: Build tool with React plugin
- **@replit/vite-plugin-***: Replit-specific development plugins (error overlay, cartographer, dev banner)

### External Services
- **Google Fonts**: Inter font family loaded via CDN
- **Unsplash**: Stock images loaded directly from unsplash.com URLs

### Prepared for Future Integration
The codebase includes hooks and schemas ready for backend integration:
- `shared/schema.ts` and `shared/routes.ts` for API contracts
- Query hooks (`use-services.ts`, `use-testimonials.ts`, `use-inquiries.ts`) ready for API endpoints
- Drizzle ORM schemas prepared (would require PostgreSQL when backend is added)