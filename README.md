# golf_yy

20代限定ゴルフ仲間マッチングサービス

## Tech Stack

- **Frontend**: Next.js 14 + PWA + Tailwind CSS + Zustand
- **Backend**: Supabase (Edge Functions)
- **Database**: PostgreSQL (Supabase)
- **Auth**: Supabase Auth (Google/Apple/LINE)
- **Payment**: Stripe
- **Realtime**: Supabase Realtime
- **Hosting**: Vercel + Supabase

## Getting Started

### Prerequisites

- Node.js 18+
- npm
- Supabase account
- Stripe account

### Installation

```bash
# Install dependencies
npm install

# Copy environment variables
cp .env.example .env.local

# Start development server
npm run dev
```

Open [http://localhost:3000](http://localhost:3000) with your browser.

### Environment Variables

```bash
# Supabase
NEXT_PUBLIC_SUPABASE_URL=your-supabase-url
NEXT_PUBLIC_SUPABASE_ANON_KEY=your-supabase-anon-key

# Stripe
NEXT_PUBLIC_STRIPE_PUBLISHABLE_KEY=your-stripe-publishable-key
STRIPE_SECRET_KEY=your-stripe-secret-key
STRIPE_WEBHOOK_SECRET=your-stripe-webhook-secret
```

## Project Structure

```
src/
├── app/                 # Next.js App Router
├── components/          # React components
│   ├── ui/             # UI components
│   └── features/       # Feature components
├── lib/                 # Utilities
│   ├── supabase/       # Supabase client
│   └── stripe/         # Stripe client
├── stores/             # Zustand stores
└── types/              # TypeScript types
```

## Documentation

- [Brainstorming](./docs/brainstorming.md) - Phase 1: Market research & feasibility
- [Strategy](./docs/strategy.md) - Phase 2: MVP scope, tech stack, marketing
- [PRD](./docs/prd.md) - Phase 3: Product requirements
- [Tasks](./docs/tasks.md) - Phase 3: Task breakdown

## Scripts

```bash
npm run dev      # Start development server
npm run build    # Build for production
npm run start    # Start production server
npm run lint     # Run ESLint
```

## License

Private - All rights reserved
