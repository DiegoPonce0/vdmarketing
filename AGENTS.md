<!-- BEGIN:nextjs-agent-rules -->
# This is NOT the Next.js you know

This version has breaking changes — APIs, conventions, and file structure may all differ from your training data. Read the relevant guide in `node_modules/next/dist/docs/` before writing any code. Heed deprecation notices.

use ALWAYS pnpm, not npm or yarn

# vdmarketing — Web Development Agency
## Stack
- **Framework:** Next.js (App Router)
- **Language:** TypeScript
- **Styling:** Tailwind CSS
- **Package manager:** pnpm (ALWAYS use pnpm, never npm or yarn)
## Project conventions
- Components go in `src/components/<category>/`
- Types/interfaces in `src/types/`
- Utility functions in `src/lib/`
- Mock data in `src/data/`
- Routes in `src/app/` using App Router conventions
- Use Server Components by default, Client Components (`"use client"`) only when interactivity is required (event handlers, hooks, browser APIs)

<!-- END:nextjs-agent-rules -->