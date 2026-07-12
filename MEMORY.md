# MEMORY.md — durable facts and change log

Durable facts about this repo, plus a dated log of material changes.
Committed and public — scrubbed of secrets and personal data. Cross-cutting
facts about the whole working set (if a root framework is present) live one
level up; this file is common-pitch's own and stands alone without it.

## Durable facts

- **Origin of the color system.** `ultraviolet` (default) and `suited-chili`
  were designed here first. `common-action` ported both schemes on
  2026-06-26. This repo is the source of truth for token values — see
  `AGENTS.md` → Color Schemes (Locked). An approved change here must be
  propagated to `common-action` in the same session, and vice versa.
- **The `/consult` seam is simulated.** `docs/app.js` generates the
  consultation package client-side from the visitor's hand — no network call
  happens today. The seam was originally scoped to call Claude directly; it
  was switched to target OpenRouter's free endpoint instead (OpenAI-compatible
  `chat/completions`, a `:free` model, JSON mode with parse-and-validate,
  since free models don't guarantee strict `json_schema`). Going live means
  standing up a Cloudflare Worker at `/consult` that holds the OpenRouter key
  as a Worker secret and returns the same package shape — nothing calls out
  as of this writing.
- **Checkout and scheduling are mockups.** Fixed dummy price ($750),
  simulated payment form, fake time-slot picker, mock confirmation. No
  Stripe, no real scheduler, no email yet. Planned: Stripe Checkout + webhook
  + scheduler, with the package emailed to ellie@common-action.org on
  booking.
- **`MEMORY.md` used to be gitignored.** This file and
  `COMMON_PITCH_SANDBATCH.md` were both excluded from version control.
  `COMMON_PITCH_SANDBATCH.md` never existed on disk — it was a dead
  reference from an earlier doctrine draft, now removed. `MEMORY.md` is
  tracked and public as of this restructure; write it accordingly.

## Phase history

- **Phase 1 — Audit.** Source HTML extraction, content boundary, AI-design
  failure brief, deck-engine concept synthesis. Complete.
- **Phase 2 — Design system.** Argument-cabinet direction, card content
  model, provenance grammar, responsive interaction model. Complete.
- **Phase 3 — Build.** Semantic card cabinet, front/reverse behavior, visitor
  hand + dossier, share-state URLs, keyboard presenter mode, local responsive
  QA. Complete.
- **Phase 4 — Launch.** Stakeholder deployment instruction, hosting
  decision, GitHub Pages deployment, post-deploy verification. Complete.
- **Phase 5 — Consultation checkout (current).** Hand → package → checkout →
  schedule → confirm flow built and verified as a mockup, in both color
  schemes. Backend (Worker `/consult`, Stripe, scheduler, email) not yet
  built — see `PHASE-PLAN.md`.

## Log

- **2026-06-26** — `ultraviolet` / `suited-chili` ported to `common-action`;
  common-pitch confirmed as origin and source of truth for both schemes.
- **2026-07-12** — Added a fourth protocol card, "Make it a card." (`data-card-id="card-unit"`,
  tab `PROTOCOL / P4`), to `docs/index.html` STACK 04, honoring the
  `app.js` `cardData()` DOM contract exactly (two-span `.card-meta`,
  `.card-kind`, claim as last `<p>` in `.card-body`, matching front/back
  controls). Back face carries the repo's first external link — `Card
  Commons` (`https://csandbatch.github.io/card-commons/`, `rel="external"`)
  — with a `SOURCE / EXTERNAL` provenance header and an Origin/Status `dl`
  ("Published spec, v0.1 proposal"). No new CSS; reused `.protocol-card`,
  `.card-kind`, `.card-tab` selectors already in `styles.css`. Also fixed
  the `INDEX / 12 CARDS / 04 STACKS` section-code label, which undercounted
  even before this addition (13 cards existed; now 14 with the new card) —
  now reads `INDEX / 14 CARDS / 04 STACKS`.
- **2026-07-11** — Restructured to the working-set framework standard: added
  `SKILLS.md`, `MEMORY.md`, `EVALS.md`; thinned `CLAUDE.md` to a shim
  (`@AGENTS.md` + doctrine pointers, no doctrine of its own); compacted
  `AGENTS.md` into mission, doctrine block (non-negotiables + a standalone
  voice floor), key files, run/gate, the locked color-scheme doctrine
  (preserved in full), the `/consult` seam truth, and routing to surfaces;
  trimmed `PHASE-PLAN.md` to current phase + gate (history moved here); added
  thin `AGENTS.md` to `docs/`, `brand/`, `audit/`. Removed the dead
  `../../SANDBATCH.md` / `COMMON_PITCH_SANDBATCH.md` references from all
  doctrine — neither file exists, and no doctrine here should require reading
  outside this repo. Un-ignored `MEMORY.md` and `COMMON_PITCH_SANDBATCH.md` in
  `.gitignore` (the latter's line was removed outright — the file never
  existed).
