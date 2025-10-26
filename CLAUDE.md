# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Project Overview

This is a monorepo containing a Medusa commerce payment plugin for Tochka Bank (formerly YooKassa). The plugin integrates Tochka Bank's payment processing with Medusa's payment provider architecture.

**Tech Stack:**
- TypeScript (target ES2021)
- Node.js 20+
- Yarn 4.9.1
- Medusa v2.7+ framework
- React for admin UI
- Vite for admin bundling

## Repository Structure

```
medusa-tochka-payment/
├── packages/
│   └── medusa-payment-tochka/          # Main plugin package
│       ├── src/
│       │   ├── providers/               # Medusa payment provider module
│       │   │   └── payment-yookassa/
│       │   │       ├── core/            # Base payment processor classes
│       │   │       ├── services/        # Payment service implementations
│       │   │       ├── types/           # TypeScript type definitions
│       │   │       ├── utils/           # Utility functions
│       │   │       ├── lib/             # Tochka SDK wrapper
│       │   │       └── index.ts         # Provider entry point
│       │   └── admin/                   # Admin dashboard UI components (React)
│       ├── .medusa/                     # Build output (generated)
│       └── tsconfig.json
├── examples/
│   ├── medusa/                          # Full Medusa setup with plugin installed
│   ├── medusa-storefront/               # Next.js storefront example
│   └── docker-compose.yml               # PostgreSQL + Adminer setup
└── packages/tochka-api-spec.json        # Tochka Bank API specification
```

## Key Architecture Concepts

### Payment Provider Pattern
The plugin follows Medusa's ModuleProvider pattern:
1. **YookassaService** (in `src/providers/payment-yookassa/services/yookassa.ts`): Implements payment operations (authorize, capture, refund, etc.)
2. **Payment Processor**: Handles communication with Tochka Bank API
3. **Receipt Generation**: Builds tax receipts from order data (required for Tochka)

### TypeScript Configuration
- Outputs to `.medusa/server` directory (compiled JS)
- Uses SWC for fast compilation via ts-node
- Includes decorators for dependency injection (Medusa/Awilix)
- Jsx mode set to "react-jsx" for React 17+ runtime

### Build Output
- Plugin builds to `.medusa/server` with exports configured in package.json
- Export paths map source files to compiled `.js` locations
- Admin components export as both `.mjs` (ESM) and `.js` (CJS)

## Development Commands

**Install dependencies:**
```bash
cd packages/medusa-payment-tochka
yarn install
```

**Development with watch mode:**
```bash
# Terminal 1: Develop plugin locally
cd packages/medusa-payment-tochka
yarn dev
```

**Build plugin for publishing:**
```bash
cd packages/medusa-payment-tochka
yarn build
```

**Setup development environment (full):**
1. Start database:
   ```bash
   cd examples
   docker compose up -d
   ```

2. Develop plugin (separate terminal):
   ```bash
   cd packages/medusa-payment-tochka
   yarn dev
   ```

3. Setup Medusa with plugin (separate terminal):
   ```bash
   cd examples/medusa
   npx medusa plugin:add medusa-payment-tochka
   yarn
   npx medusa db:migrate
   yarn dev
   ```

4. Setup Storefront (separate terminal):
   ```bash
   cd examples/medusa-storefront
   yarn dev
   ```

## Important Implementation Details

### Payment Configuration
- Configured in Medusa via `medusa-config.ts` module configuration
- Requires environment variables: `YOOKASSA_SHOP_ID`, `YOOKASSA_SECRET_KEY`
- Supports auto-capture on payment authorization
- Tax receipt generation enabled with configurable tax codes

### Tochka Bank Integration
- Uses Tochka Bank API (spec available in `packages/tochka-api-spec.json`)
- Custom SDK wrapper in `src/providers/payment-yookassa/lib/tochka-sdk.ts`
- Handles Russian tax receipt requirements (USN, etc.)
- Payment description and metadata mapping from order

### File Naming Note
The codebase was migrated from YooKassa to Tochka Bank. Files still use "yookassa" in paths but implement Tochka functionality:
- `src/providers/payment-yookassa/` contains Tochka payment implementation
- Services may have both `yookassa.ts` (legacy) and `tochka.ts` (new implementation)
- This is intentional to support both payment providers

## Database Setup
- PostgreSQL required
- Docker Compose setup in `examples/` creates:
  - Database: `medusa-payment-tochka`
  - User: `medusa`
  - Password: `supersecret`
  - Adminer UI available at `http://localhost:8080`

## Common Development Workflows

**Making plugin changes visible in dev:**
```bash
# Plugin code changes auto-detect via yarn dev watch
# Medusa rebuild may be needed:
cd examples/medusa
medusa build
yarn dev
```

**Testing payment flow locally:**
- Use Medusa Admin at plugin configuration screen
- Storefront processes payments through Tochka API
- Monitor Adminer for database changes

**Debugging:**
- Plugin runs via `medusa plugin:develop` in watch mode
- TypeScript compiled with source maps (inlineSourceMap: true)
- Check `.medusa/server` for compiled output if debugging compilation
