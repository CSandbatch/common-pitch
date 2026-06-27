# Common Pitch — Agent Doctrine

Self-contained agent system for the Common Action argument-cabinet pitch project.

## Session Start Checklist

1. Read this file.
2. Read `CLAUDE.md`.
3. Read the last 30 lines of `MEMORY.md`.
4. Confirm the current phase in `PHASE-PLAN.md`.
5. Read `../../SANDBATCH.md` and `COMMON_PITCH_SANDBATCH.md` before editorial or critique work.

## Project Context

**Client:** Common Action — experimental pitch interface  
**Source site:** https://www.common-action.org/  
**Current phase:** Phase 3 — build complete  
**Gate:** Stakeholder review before any hosted deployment

## Key Files

| File | Purpose |
|---|---|
| `docs/index.html` | Production page and GitHub Pages source |
| `docs/styles.css` | Production design system |
| `docs/app.js` | Deck, hand, sharing, and presenter interactions |
| `brand/design-system.md` | Visual and interaction specification |
| `audit/content-inventory.md` | Source-content record |
| `audit/design-inventory.md` | Original-site design audit |
| `PHASE-PLAN.md` | Phase status |
| `MEMORY.md` | Chronological change log |

## Local Preview

From the workspace root:

```powershell
.venv\Scripts\python.exe -m http.server 8772 --directory projects/common-pitch/docs
```

Open `http://127.0.0.1:8772/`.

## Project Rules

- Preserve the small, static deployment surface.
- Do not invent partners, clients, metrics, publications, or project outcomes.
- Treat provenance, uncertainty, and update state as interface elements.
- Avoid SaaS cards, mesh gradients, synthetic imagery, and generic AI futurism.
- Maintain WCAG-oriented contrast, keyboard navigation, and reduced-motion compatibility.
- Log every material change in `MEMORY.md`.
