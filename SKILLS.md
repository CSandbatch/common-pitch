# SKILLS.md — task class → process + gate

Identify the task class, run the named process from `PROCESSES.md`, prove it
with the stated gate. The steps live in `PROCESSES.md` — this file only routes
and defines "done."

| Task class | Process | Gate |
|---|---|---|
| Re-audit the source site | Source Site Audit | Updated records in `audit/`; deltas from the prior audit named, not silently overwritten |
| Card content or copy change | Evidentiary Interface Design → Static Build | Serve `docs/` on 8772; card front and reverse both render; no claim added beyond what a card's own source state supports |
| Deck / hand / share / present flow change | Static Build | Serve `docs/`; add a card to the hand, copy the share link, reload it, open presenter mode, arrow through slides — all four steps work, in both color schemes |
| Visual / responsive QA | Visual QA | Desktop + mobile captures land in `audit/screens/`; no horizontal overflow; contrast holds |
| Consultation package or checkout flow change | Consultation Package Generation → Mock Checkout & Booking | Serve `docs/`; run hand → package → checkout → schedule → confirm end to end, in both color schemes; if the change touches the `/consult` seam, confirm it is still simulated unless explicitly instructed to wire the Worker |
| Color-scheme work | — (locked, no process runs without approval) | Do not touch a token without explicit user approval; see `AGENTS.md` → Color Schemes (Locked). If approved, propagate the change to `common-action` in the same session |
| Launch / deploy | Launch | Stakeholder approval on record; `docs/index.html` + `docs/styles.css` deployed; HTTPS, metadata, and responsive behavior verified on the live URL |

Log every completed task in `MEMORY.md`.
