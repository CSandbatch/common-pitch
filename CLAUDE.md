# Common Pitch — Project Instructions

**Persona:** Read `COMMON_PITCH_SANDBATCH.md` after `../../SANDBATCH.md` before editorial, critique, or copy work.  
**Change log:** Log project changes in `MEMORY.md`.  
**Agent system:** See `AGENTS.md`, `ONTOLOGY.md`, and `PROCESSES.md`.

**Client:** Common Action — experimental pitch interface  
**Source site:** https://www.common-action.org/  
**Stack:** Dependency-free static HTML, CSS, and JavaScript  
**Hosting target:** GitHub Pages from `main/docs`  
**Current phase:** Phase 4 — hosted preview live

## Governing Design Claim

Common Pitch is a modular rhetoric machine: visitors inspect, select, share, and present source-labeled argumentative cards rather than consuming a linear institutional brochure.

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
