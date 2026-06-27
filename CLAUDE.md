# Common Pitch — Project Instructions

**Persona:** Read `COMMON_PITCH_SANDBATCH.md` after `../../SANDBATCH.md` before editorial, critique, or copy work.  
**Change log:** Log project changes in `MEMORY.md`.  
**Agent system:** See `AGENTS.md`, `ONTOLOGY.md`, and `PROCESSES.md`.

**Client:** Common Action — experimental pitch interface  
**Source site:** https://www.common-action.org/  
**Stack:** Dependency-free static HTML, CSS, and JavaScript  
**Hosting target:** GitHub Pages from `main/docs`  
**Current phase:** Phase 4 — hosted preview live

## What This Site Is

Common Pitch is the **experimental, interactive cut** for the organization: a "rhetoric machine" / argument cabinet where visitors inspect, select, share, and present source-labeled argument cards. It is built to be *operated*, not read linearly.

It has a sister site, **Common Action** (`../common-action/`), which is the *same organization, a different purpose*: the canonical institutional single-page memorandum meant to be read top-to-bottom. Same facts, two postures — Common Pitch is the persuasion instrument; Common Action is the evidentiary brochure. Common Pitch is the **origin of the shared color system** (`ultraviolet` / `suited-chili`); as of 2026-06-26 those two schemes were ported into Common Action.

## Governing Design Claim

Common Pitch is a modular rhetoric machine: visitors inspect, select, share, and present source-labeled argumentative cards rather than consuming a linear institutional brochure.

## Color Schemes

Two named schemes, switchable at runtime via `docs/app.js` (the same system later ported to Common Action):

| Scheme | Trigger | Palette |
|---|---|---|
| `ultraviolet` (default) | `:root` | Electric-blue accent (`#0038ff`), yellow signal (`#efff00`), blue-tinted paper |
| `suited-chili` | `html[data-theme="suited-chili"]` | Chili accent (`#e52614`/`#ff4b1f`), amber signal (`#ffd21f`), warm paper |

The header toggle persists the choice in `localStorage` (`common-pitch-theme`); an inline `<head>` script applies it before first paint.

## Source Constraints

The source site establishes:

- Thesis: “Moving the world from chaos to comprehension.”
- Focus areas: Climate, Energy, Agriculture, Supply Chain.
- Capabilities: knowledge engineering, business intelligence, graph databases, semantic web, data science, spatiotemporal analysis, physical modeling, GIS, and NLP.
- Contact: ellie@common-action.org.

Do not present proposed language as a verified program outcome. Do not manufacture institutional proof.

## Build

The production build is in `docs/`, the GitHub Pages publishing source. It requires no compilation.

```powershell
../../.venv/Scripts/python.exe -m http.server 8772 --directory docs
```
