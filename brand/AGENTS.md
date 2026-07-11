# brand/ — Agent Doctrine (surface)

`design-system.md`: the visual and interaction specification for the argument
cabinet — palette rationale, typography, card model, interaction language,
responsive behavior, and explicit refusals (no generated imagery, no
gradients, no invented proof).

## Local rules

- This is the spec, not the implementation. If `docs/styles.css` or
  `docs/app.js` drifts from what's written here, fix the drift — decide which
  side is right before editing, and say which you picked.
- The two palettes here (`ultraviolet bureaucracy`, `suited chili`) are the
  prose description of the locked tokens in project `AGENTS.md` → Color
  Schemes (Locked). Token values live there, not here — don't fork a second
  set of numbers into this file.
- Preserve the "Refusals" section as a live constraint, not decoration: no
  SaaS-grid layouts, no mesh gradients, no unlabeled icon controls.

## Gate

No build. The gate is consistency: read this file next to a served `docs/`
page and confirm the production build still matches the described card model,
interaction language, and refusals. Note any drift found, don't silently
reconcile it away.

## Gotchas

- Card source-state labels (`Verified source`, `Proposed articulation`, etc.)
  are plain language by design — don't upgrade them to something that implies
  more certainty than the card has.

Project doctrine: `../AGENTS.md`.
