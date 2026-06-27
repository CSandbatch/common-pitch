# Common Action — Argument Cabinet QA

**Date:** 2026-06-26  
**Target:** Local redesign in `docs/`  
**Publication status:** Ready for the independent `common-pitch` repository

## Responsive rendering

| Viewport | HTTP | Page overflow | Console errors | Failed requests |
|---:|---:|---:|---:|---:|
| 320 × 800 | 200 | None | None | None |
| 390 × 844 | 200 | None | None | None |
| 768 × 900 | 200 | None | None | None |
| 1440 × 1000 | 200 | None | None | None |

Horizontal overflow inside each card rail is intentional and locally contained.

## Structure

- One `h1`.
- Thirteen stable argumentative cards.
- No duplicate IDs.
- No broken internal anchors.
- No unlabeled buttons.
- No third-party requests.
- All institutional content remains present in semantic HTML.

## Interaction checks

- Card turns expose the reverse and return focus to the active face.
- Add/remove controls stay synchronized across card faces.
- Hand count and dock update correctly.
- Dossier dialog renders the selected cards.
- Share query restores a two-card hand from `?hand=thesis,climate`.
- Presenter mode opens from the selected hand.
- Right-arrow navigation advances from slide `01 / 02` to `02 / 02`.
- Native dialog escape behavior remains available.

## Captures

- `audit/screens/redesign-desktop.png`
- `audit/screens/redesign-mobile.png`
