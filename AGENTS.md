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
**Current phase:** Phase 4 — GitHub Pages live  
**Gate:** Optional stakeholder review and custom-domain decision

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

## Color Schemes (Locked)

Common Pitch is the **source of truth** for the shared color system. It ships **exactly two** schemes, switched at runtime via `docs/app.js`. These are canonical. **Do not add, remove, rename, or recolor a scheme without explicit user approval** — no palette "refreshes," no extra themes, no token-value edits. The sister project `common-action` mirrors these; any approved change here must be propagated there.

**Scheme A — `ultraviolet`** (default, defined on `:root`):

| Token | Value | | Token | Value |
|---|---|---|---|---|
| `--carbon` | `#020a2b` | | `--blue-electric` | `#0038ff` |
| `--carbon-soft` | `#07124a` | | `--blue` | `#163cff` |
| `--paper` | `#eef1f6` | | `--blue-deep` | `#001c9e` |
| `--paper-light` | `#fcfff6` | | `--signal` | `#efff00` |
| `--paper-dark` | `#aabeff` | | `--on-dark-muted` | `#b8c3ff` |
| `--ink` | `#061449` | | `--nav-muted` | `#e1e6ff` |
| `--ink-muted` | `#465685` | | `--nav-rule` | `#8699f0` |
| `--line` | `#5e72c9` | | `--surface-highlight` | `#c5ceff` |
| `--reverse-line` | `#5167c4` | | `--footer-line` | `#3d51aa` |
| `--control-line` | `#8ea0f0` | | `--grid-line` | `rgb(0 56 255 / 0.08)` |

**Scheme B — `suited-chili`** (defined on `html[data-theme="suited-chili"]`):

| Token | Value | | Token | Value |
|---|---|---|---|---|
| `--carbon` | `#160b0a` | | `--blue-electric` | `#e52614` |
| `--carbon-soft` | `#2c1511` | | `--blue` | `#ff4b1f` |
| `--paper` | `#f0e2cb` | | `--blue-deep` | `#68140c` |
| `--paper-light` | `#fff5e6` | | `--signal` | `#ffd21f` |
| `--paper-dark` | `#d8a15f` | | `--on-dark-muted` | `#e8b49e` |
| `--ink` | `#2c0d08` | | `--nav-muted` | `#fff0e5` |
| `--ink-muted` | `#75463b` | | `--nav-rule` | `#ff9b72` |
| `--line` | `#b44732` | | `--surface-highlight` | `#ffd0bc` |
| `--reverse-line` | `#a63b2b` | | `--footer-line` | `#7a251d` |
| `--control-line` | `#d8795f` | | `--grid-line` | `rgb(104 20 12 / 0.1)` |

Switcher invariants: default is `ultraviolet`; choice persists in `localStorage` key `common-pitch-theme`; an inline `<head>` bootstrap applies the stored scheme before first paint; `meta[name=theme-color]` tracks the active scheme (`#0038ff` / `#160b0a`).

## Project Rules

- Color schemes are locked — see **Color Schemes (Locked)** above. This project is the source of truth; changes require explicit user approval and must be propagated to `common-action`.
- Preserve the small, static deployment surface.
- Do not invent partners, clients, metrics, publications, or project outcomes.
- Treat provenance, uncertainty, and update state as interface elements.
- Avoid SaaS cards, mesh gradients, synthetic imagery, and generic AI futurism.
- Maintain WCAG-oriented contrast, keyboard navigation, and reduced-motion compatibility.
- Log every material change in `MEMORY.md`.
