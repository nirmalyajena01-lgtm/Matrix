# HACQUIRE 2026 — MATRIX submission checklist

## Required marketplace assets
- [ ] Main platform repo
- [ ] Emergency Reporting Engine standalone repo
- [ ] Responder Command Center standalone repo
- [ ] Campus Safety Intelligence standalone repo
- [ ] Module cards with name, format, asking price
- [ ] 30–45 second live-input/live-output demo per tradable module
- [ ] README + API docs in every repo
- [ ] Health endpoint in every module
- [ ] Commit code before repository lock

## Suggested marketplace prices
- Emergency Reporting Engine: ₹1.5–2 Cr FED Coins
- Responder Command Center: ₹2–3 Cr FED Coins
- Campus Safety Intelligence: ₹2–3 Cr FED Coins

These are strategic suggestions, not official HACQUIRE prices.

## Demo credentials
Student:
- student@matrix.demo
- matrix2026

Authority:
- admin@matrix.demo
- matrixadmin

Responder:
- responder@matrix.demo
- matrixresponder

## Vercel
Deploy each `modules/*` directory as a separate Vercel project. Add:
- DATABASE_URL
- NEXTAUTH_SECRET
- module-specific URL variables

For production, replace SQLite with PostgreSQL and local evidence storage with UploadThing/object storage.
