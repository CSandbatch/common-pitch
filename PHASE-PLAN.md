# Common Pitch — Phase Plan

**Current phase:** Phase 5 — Consultation checkout (in progress)

Completed-phase detail (Phases 1–4: audit, design system, build, launch) lives
in `MEMORY.md` → Phase history. This file states only where the repo stands
now and what has to land before it moves.

## Phase 5 — Consultation checkout

| Task | Status |
|---|---|
| Consultation-package flow (hand → package → checkout → schedule → confirm) | Done (mockup) |
| Client-side simulated package generator (seam for Worker `/consult`) | Done |
| Fixed dummy price + mock payment + mock scheduling | Done |
| End-to-end flow verified (all 4 steps, both color schemes) | Done |
| Cloudflare Worker + OpenRouter free endpoint `/consult` (`:free` model, JSON mode, key in Worker secret) | Not started |
| Stripe Checkout + webhook + real scheduler | Not started |
| Package emailed to ellie@common-action.org on booking | Not started |

## Gate to Phase 6

Phase 6 (live backend) opens when all four land:

1. A Worker `/consult` endpoint is deployed and returns the same package
   shape the client-side generator produces today.
2. Stripe Checkout replaces the mock payment step.
3. A real scheduler replaces the fake time-slot picker.
4. Booking confirmation triggers the email to ellie@common-action.org.

Until then, Phase 5 stands, and the flow stays labeled as a mockup in the UI —
do not represent it as live to a stakeholder or in a report.
