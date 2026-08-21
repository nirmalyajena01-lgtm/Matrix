# Technical separation

```text
┌──────────────────────────────────────────────────────────┐
│ MODULE 1 — EMERGENCY REPORTING ENGINE                   │
│ Next.js + REST + Prisma/SQLite + React widget            │
│ /api/v1/incidents                                        │
└───────────────┬──────────────────────────────────────────┘
                │ HTTP / webhook
                ▼
┌──────────────────────────────────────────────────────────┐
│ MODULE 2 — RESPONDER COMMAND CENTER                     │
│ Next.js + REST + Prisma/SQLite                           │
│ /api/v1/incidents /assign /alerts /analytics             │
└───────────────┬──────────────────────────────┬───────────┘
                │ status callback              │ event stream
                ▼                              ▼
       MODULE 1 status API            MODULE 3 event API
                                           │
                                           ▼
┌──────────────────────────────────────────────────────────┐
│ MODULE 3 — CAMPUS SAFETY INTELLIGENCE                   │
│ Next.js + REST + Prisma/SQLite + Recharts                │
│ /api/v1/events /summary                                 │
└──────────────────────────────────────────────────────────┘
```

No module imports another module's source code or database.

## Why this satisfies the marketplace rule

Each product:
- has its own package.json
- can run/build/deploy alone
- owns its database
- owns its API
- owns its UI
- has its own README
- has a health endpoint
- can be integrated over HTTP
- has standalone buyer value

## Real-time path

The local MVP uses short polling for reliability without requiring an external broker. The API contract is designed for Socket.io/Supabase Realtime in production. This keeps the demo simple while preserving a clean event boundary.

## Authentication

The UI is structured around three roles:
- Student
- Responder
- Admin

For the hackathon demo, local role selection is sufficient. Production should enable NextAuth/Auth.js with institutional SSO, MFA and role-based route guards.
