# Common Pitch — Agent Doctrine

## Mission

Common Pitch is the interactive cut of Common Action: a "rhetoric machine" —
an argument cabinet where visitors inspect, select, share, and present
source-labeled argument cards, rather than reading a linear brochure. It has a
sister site, **Common Action** (`../common-action/`), same organization,
different posture: the canonical top-to-bottom memorandum. Common Pitch is the
persuasion instrument; Common Action is the evidentiary brochure. A visitor's
hand of cards can resolve into a personalized consultation package with a
checkout + scheduling flow — currently a mockup (see **The `/consult` seam**,
below).

## Doctrine block (non-negotiable)

- **Never invent** partners, clients, metrics, publications, quotes, or
  outcomes. Unsourced facts are marked unsourced or left out.
- **Never present** proposed copy as a verified result.
- **Locked invariants are locked.** The `ultraviolet` / `suited-chili` color
  schemes and canonical token values below — no change without explicit user
  approval, and any approved change must be propagated to `common-action` in
  the same session.
- **Ask before the irreversible:** pushing, deleting, force operations, or
  touching anything holding credentials.
- **Report faithfully.** A failing check is reported failing, with output.
  Skipped steps are named. Done means verified by serving `docs/` and looking.

**Voice floor** (full spec: root `VOICE.md`, if present — this repo stands
alone without it): plain, concrete, verdict-first. Lead with the result, then
the reason. Name the file, the token, the command — not "the theming is
persisted," but "the switcher writes `common-pitch-theme` to `localStorage`."
Name uncertainty out loud instead of manufacturing confidence. No corporate
filler (*seamless, leverage, streamline, delve*), no hype, no reflexive
apology. A list is a list; a judgment is a sentence.

## Key Files

| File | Purpose |
|---|---|
| `docs/index.html` | Production page and GitHub Pages source |
| `docs/styles.css` | Production design system |
| `docs/app.js` | Deck, hand, sharing, presenter, color switcher, and the consultation-package + mock checkout flow |
| `brand/design-system.md` | Visual and interaction specification |
| `audit/content-inventory.md` | Source-content record |
| `audit/design-inventory.md` | Original-site design audit |
| `ONTOLOGY.md` | Entity taxonomy (cards, decks, hands, packages, sessions) |
| `PROCESSES.md` | Ordered procedures this repo runs |
| `SKILLS.md` | Task class → process + gate |
| `PHASE-PLAN.md` | Current phase and the gate to the next one |
| `MEMORY.md` | Durable facts and dated change log |

## Run / Gate

Local preview, from the workspace root:

```powershell
.venv\Scripts\python.exe -m http.server 8772 --directory projects/common-pitch/docs
```

Or from this repo directly: `python -m http.server 8772 --directory docs`. Open
`http://127.0.0.1:8772/`.

**Gate:** serve `docs/` and exercise the deck/hand/share/present flow plus the
consultation + mock-checkout flow end to end, in both color schemes. See
`SKILLS.md` for the gate per task class.

## Color Schemes (Locked)

Common Pitch is the **origin and source of truth** for the shared color
system. It ships **exactly two** schemes, switched at runtime via
`docs/app.js`. These are canonical. **Do not add, remove, rename, or recolor a
scheme without explicit user approval** — no palette "refreshes," no extra
themes, no token-value edits. The sister project `common-action` ported these
schemes on 2026-06-26 and must stay in sync with them; any approved change
here propagates there, and any approved change there must match here.

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

Switcher invariants: default is `ultraviolet`; choice persists in
`localStorage` key `common-pitch-theme`; an inline `<head>` bootstrap applies
the stored scheme before first paint; `meta[name=theme-color]` tracks the
active scheme (`#0038ff` / `#160b0a`).

## The `/consult` seam — current truth

The consultation package is generated **client-side, in `docs/app.js`** — no
network call happens today. Checkout and scheduling are a **simulated
mockup**: fixed dummy price, a fake payment form, a fake time-slot picker, a
confirmation labeled as mock. There is no real payment, booking, backend, or
email.

The code is shaped so that going live means replacing the generator's body
with a `fetch("<worker>/consult", …)` call returning the same package shape.
The intended backend is a Cloudflare Worker calling **OpenRouter's free
endpoint** (OpenAI-compatible `chat/completions`, a `:free` model, JSON mode
with parse-and-validate, since free models don't guarantee strict
`json_schema`) — the OpenRouter API key would live in a Worker secret, never
in this repo. See `MEMORY.md` for how this seam got here.

Do not claim this flow is live. Any request to "wire up the backend" or "make
checkout real" is new work, not a bug fix — state the gap, then build it or ask.

## Routing to surfaces

- **`docs/`** — the production build. See `docs/AGENTS.md`.
- **`brand/`** — the design-system spec. See `brand/AGENTS.md`.
- **`audit/`** — source-site and QA evidence. See `audit/AGENTS.md`.
