# docs/ — Agent Doctrine (surface)

This is the production build and the GitHub Pages publishing source:
`index.html`, `styles.css`, and `app.js` (deck, hand, share, presenter, color
switcher, consultation package, mock checkout). Dependency-free, no
compilation step.

## Local rules

- `app.js` carries several jobs (unlike `common-action`'s single-job switcher)
  — deck/hand/share/present, theme switch, consult + checkout mockup. Keep
  each concern in its own function.
- The consultation package generator and the checkout/scheduling steps are
  **simulated** — no network call. Don't wire a real call here without being
  asked; if asked, see project `AGENTS.md` → The `/consult` seam first.
- Both color schemes (`ultraviolet`, `suited-chili`) are locked. Never edit a
  token in `styles.css` without explicit approval — see project `AGENTS.md` →
  Color Schemes (Locked).
- Keep semantic HTML, keyboard access (presenter mode included), reduced-motion
  behavior, and print/metadata correctness intact.

## Gate

Serve this directory and exercise the flow you touched:

```powershell
python -m http.server 8772 --directory docs
```

Open `http://127.0.0.1:8772/`. At minimum: add a card to the hand, copy the
share link and reload it, open presenter mode, and — if touched — run the
consultation flow through to the mock confirmation. Check both color schemes.

## Gotchas

- No horizontal overflow at 320px, 390px, 768px, 1440px.
- `localStorage` key is `common-pitch-theme` — don't confuse with
  `common-action`'s `common-action-theme`.

Project doctrine: `../AGENTS.md`.
