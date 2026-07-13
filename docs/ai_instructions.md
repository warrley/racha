# AI Development Guidelines - Racha (Metanol FC)

This document serves as the ground truth and system instruction manual for any AI coding assistant (such as Claude, Gemini, GPT, or Cursor) working on the **Racha (Metanol FC)** repository.

---

## 1. Project Context & Tech Stack

This project is a sports management application for amateur football ("racha").
* **Frontend:** Next.js (React App Router), Tailwind CSS.
* **Backend:** Node.js with Express, TypeScript.
* **Database & ORM:** PostgreSQL hosted on Supabase, managed via **Prisma ORM**.
* **Auth:** Supabase Auth (JWT-based).

---

## 2. Directory Layout & Architecture

AI assistants should respect the established architecture:

### Backend (`/backend`)
* `prisma/schema.prisma` - Database schema. Note that the Prisma client generator output is customized to `../src/generated/prisma`.
* `src/routes/main.ts` - Central routing file with OpenAPI/Swagger annotations.
* `src/schemas/` - Input validation schemas using **Zod**.
* `src/controllers/` - Express request/response controllers. Keep them thin.
* `src/services/` - Core business logic, transaction handling, and database operations.
* `src/utils/` - Shared helper utilities (e.g., ELO rating calculations in `elo.ts`, team drawing in `draw.ts`).

### Frontend (`/frontend`)
* `src/app/` - Next.js App Router pages.
  * `(protected)/` - Routes requiring authentication (e.g., home, profile, ranking, sessions).
* `src/components/` - Reusable UI components.
* `src/contexts/` - Global states (e.g., AuthContext).
* `src/lib/` - Client libraries (e.g., Axios API instances).
* `src/types/` - Shared TypeScript interfaces.

---

## 3. Core Development Protocols for AI

### Protocol 3.1: Documentation Synchronization (CRITICAL)
Whenever you implement, modify, or complete a feature:
1. Locate `docs/requisitos.md`.
2. Find the corresponding requirement ID (e.g., `RF04`, `RF08`).
3. Update its **Status** column:
   * Use **Concluído** if both backend endpoints and frontend views are fully implemented and verified.
   * Use **Parcial** if only the backend API or frontend UI is ready.
   * Maintain the rest of the table formatting intact.

### Protocol 3.2: Business Rules Adherence
Always consult `docs/regras_negocio.md` before starting coding tasks. Pay special attention to:
* **Snake Draft logic** in `backend/src/utils/draw.ts`.
* **ELO rating formulas** in `backend/src/utils/elo.ts` during session closure.
* **Temporary substitutions** which must only persist for the active round.
* **Post-game ratings** (notes 1-10) and their average notes calculation, replacing classic Elo rankings for team draws once enabled.

### Protocol 3.3: Input Validation & Types
* Never accept unvalidated input from request bodies. Always define a Zod schema in `backend/src/schemas/` and validate using `.safeParse()`.
* Always use strong typing. Avoid `any` in production code unless absolutely necessary.
* Ensure generated types from Prisma are imported correctly from `../src/generated/prisma`.

### Protocol 3.4: Frontend Styling & Premium Aesthetics
* The application should look modern, sleek, and premium.
* Prioritize **mobile responsiveness (mobile-first)** since players use this on their smartphones at the pitch.
* Use nice gradients, glassmorphism (`backdrop-blur`), elegant dark modes, and subtle hover animations.
* Avoid basic raw browser elements; style forms, inputs, and buttons cleanly with Tailwind CSS.

---

## 4. Common Commands

### Backend
* Install dependencies: `npm install`
* Run development server: `npm run dev`
* Generate Prisma client: `npx prisma generate`
* Create database migration: `npx prisma migrate dev --name <migration_name>`

### Frontend
* Install dependencies: `npm install`
* Run development server: `npm run dev`
* Build production bundle: `npm run build`
