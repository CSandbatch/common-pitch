# Common Pitch

An experimental argument-cabinet and deck engine for [Common Action](https://www.common-action.org/).

**What it is:** the interactive cut of the organization — visitors assemble, share, and present source-labeled argument cards rather than reading a linear brochure. Its sister site [Common Action](../common-action/) serves the *same organization* with a *different purpose*: the canonical institutional memorandum, read top-to-bottom. Common Pitch is the persuasion instrument; Common Action is the brochure. Common Pitch is the **origin of the shared `ultraviolet` / `suited-chili` color system** that both sites now use.

**Stack:** Static HTML, CSS, and JavaScript (`docs/app.js` — deck/hand/share/present interactions + color-scheme switcher)  
**Status:** Phase 4 — GitHub Pages live  
**Production files:** `docs/`
**Repository:** https://github.com/CSandbatch/common-pitch
**Live site:** https://csandbatch.github.io/common-pitch/

## Preview

From the workspace root:

```powershell
.venv\Scripts\python.exe -m http.server 8772 --directory projects/common-pitch/docs
```

Then open `http://127.0.0.1:8772/`.

## Deliverables

| Deliverable | Status |
|---|---|
| Source-site audit | Complete |
| Deck-engine design system | Complete |
| Responsive interactive build | Complete |
| Local visual and interaction QA | Complete |
| GitHub Pages deployment | Complete |
