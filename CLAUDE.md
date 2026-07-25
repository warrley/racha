# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Project Overview

"Racha (Metanol FC)" is a management app for a weekly amateur football pickup game ("racha"): session/attendance tracking, waitlists, Pix payments, snake-draft team balancing, round-by-round score tracking with temporary substitutions, post-game peer ratings, and rankings/badges.

Ground-truth docs (read before implementing a feature):
- `docs/requisitos.md` — functional requirements (RF##) with a **Status** column (Concluído/Parcial/Pendente) that MUST be updated when a requirement is implemented or changed.
- `docs/regras_negocio.md` — business rules and formulas: post-game rating averages, snake-draft balancing algorithm, temporary round substitutions, Pix payment flow, badge rules, floating timer behavior.
- `docs/banco_de_dados.md` — database model documentation.
- `docs/setup.md` — local setup instructions (Portuguese).

## Commands

### Backend (`backend/`)
```bash
npm run dev              # start API with hot-reload (tsx + nodemon), reads PORT from .env
npx prisma generate       # regenerate Prisma client after editing schema.prisma (required)
npx prisma db push        # sync schema to DB without migration history
npx prisma migrate dev --name <name>   # create a migration
npx prisma studio          # DB browser UI
```
No test suite or lint script currently exists in `backend/`.

### Frontend (`frontend/`)
```bash
npm run dev     # Next.js dev server (localhost:3000)
npm run build
npm run lint     # eslint
```

API docs: with the backend running, Swagger UI is at `http://localhost:9876/docs` (spec generated from JSDoc `@openapi` blocks in `backend/src/routes/main.ts`).

## Architecture

**Stack:** Next.js (App Router) + Tailwind on the frontend; Express + TypeScript + Prisma (PostgreSQL/Supabase) on the backend. Auth is currently custom JWT (bcrypt + jsonwebtoken), not yet wired to Supabase Auth despite docs describing that target state — check `backend/src/controllers/auth.ts` / `utils/jwt.ts` for the actual current implementation before assuming Supabase Auth is live.

### Backend request flow
`src/routes/main.ts` (single central router, all endpoints with Swagger annotations) → `privateRoute` middleware (`src/middleware/privateRoute.ts`, verifies Bearer JWT and sets `req.userId`) → `src/controllers/*` (thin, req/res only) → `src/schemas/*` (Zod validation via `.safeParse()`, always validate bodies here) → `src/services/*` (business logic, transactions, Prisma calls) → `src/utils/*` (pure helpers: `draw.ts` snake-draft algorithm, `elo.ts` legacy Elo formulas — being superseded by the average-grade rating system described in `regras_negocio.md`, `jwt.ts`, `seed.ts`).

Prisma client is generated to a custom path — always import from `../src/generated/prisma` (relative to caller), never `@prisma/client` directly. Re-run `npx prisma generate` after any `schema.prisma` change; the generated output is checked into the repo (`backend/src/generated/prisma/**`) so it must be regenerated and committed together with schema changes.

Key domain models (`backend/prisma/schema.prisma`): `Session` (status OPEN → IN_PROGRESS → FINISHED) has `SessionParticipant`s (CONFIRMED or WAITING_LIST, auto-promoted on cancellation), draws into `Team`/`TeamPlayer`, plays `Round`s (home/away team, scores, winner) containing `Goal`s, and on FINISHED opens a 24h voting window for `SessionGrade` (peer ratings 1-10) that consolidate into `User.averageGrade`. `Badge` records gamification awards (MVP, Artilheiro, Veterano, Goleador, etc.) computed from session stats.

### Frontend structure
`src/app/(protected)/*` — authenticated routes (home, profile, ranking, sessions/[id], sessions/[id]/match), gated via `src/contexts/AuthContext.tsx` and the `(protected)/layout.tsx`. `src/lib/api.ts` is the shared Axios instance: it reads the JWT from the `metanol.token` cookie (via `nookies`) on every request and force-redirects to `/` on a 401. `src/lib/colors.ts` and `src/lib/cache.ts` hold team-color mapping and client-side caching helpers respectively. `src/types/index.ts` mirrors backend Prisma types for the client.

## Conventions

- Never accept unvalidated request bodies — add/extend a Zod schema in `backend/src/schemas/` and `.safeParse()` it in the controller.
- Keep controllers thin; put logic (including transactions) in `src/services/`.
- Snake-draft balancing (`drawTeams` in `backend/src/utils/draw.ts`) requires exactly 15 or 20 confirmed players (3 or 4 teams of 5) and sorts by `averageGrade` (nulls last) before distributing serpentine-style across teams.
- Temporary round substitutions apply only to the `Round` they were made in; the next round restores the original `TeamPlayer` lineup automatically (see `regras_negocio.md` §3).
- Frontend UI should be mobile-first, premium/modern (glassmorphism, gradients, subtle animations) — most usage happens on phones at the pitch.
- After implementing/changing a requirement, update its Status cell in `docs/requisitos.md` (Concluído/Parcial/Pendente).
- The `metanol/` directory at repo root contains unrelated photo assets — ignore it for code changes.
