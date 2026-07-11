# audit/ — Agent Doctrine (surface)

Source-site evidence and QA record: `content-inventory.md`,
`design-inventory.md`, `redesign-brief.md`, `qa.md`, `qa-redesign.md`, and
`screens/` (desktop + mobile captures, including both color schemes).

## Local rules

- This is an evidentiary record — don't overwrite a prior finding, append a
  new dated entry or a clearly marked delta instead.
- Screens must reflect the actual served build, not a mockup or a design
  intent. If a capture and the live build disagree, the build is the truth;
  say so.
- Separate verified source claims from proposed articulation, same as the
  card model does in the product itself.

## Gate

Re-running QA: serve `docs/` on 8772, capture desktop and mobile in both
`ultraviolet` and `suited-chili`, check for horizontal overflow, contrast, and
reading order, and record the result in `qa.md` (or a new dated file) rather
than editing prior findings in place.

## Gotchas

- `screens/` filenames encode viewport and scheme
  (`suited-chili-desktop.png`, `ultraviolet-mobile.png`) — keep that
  convention for new captures.

Project doctrine: `../AGENTS.md`.
