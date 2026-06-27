# Common Action Design System — Argument Cabinet

## Governing form

The website is a deck engine, not a linear presentation. Its unit is the argumentative card: a claim on the front, context and provenance on the reverse, and a stable identity that allows it to be assembled into different dossiers.

The interface borrows from index cabinets, technical memoranda, tabletop sorting, field records, and public research apparatus. It does not simulate paper for nostalgia. Physical cues make structure and custody visible.

## Primary task

A visitor should be able to:

1. Understand the Common Action proposition.
2. Inspect which language comes from the source site and which is proposed articulation.
3. Assemble relevant cards into a temporary hand.
4. share or present that hand as a contextual dossier.
5. Contact Common Action directly.

## Palette: ultraviolet bureaucracy

| Token | Value | Role |
|---|---|---|
| Blue-black | `#020a2b` | Institutional frame, reverses, footer |
| Process blue | `#0038ff` | Navigation, actions, major fields |
| Electric blue | `#163cff` | Structural emphasis |
| Deep blue | `#001c9e` | Dense fields and blue-plane typography |
| Highlighter yellow | `#efff00` | Selection, interruption, provisional state |
| Cold paper | `#eef1f6` | Working surface |
| Optical white | `#fcfff6` | Card fronts |
| Periwinkle stock | `#aabeff` | Method cards, depth, stack shadow |

Blue is the architecture. Highlighter yellow is the interruption. The scheme is deliberately overexposed: large process-blue fields collide with fluorescent yellow planes, while cold paper prevents the interface from collapsing into club graphics. There are no warm accent colors.

## Typography

The system uses no external font dependencies.

- Display and proposition: Georgia.
- Interface and explanatory text: Arial / Helvetica system stack.
- Metadata and source state: system monospace.

Hierarchy comes from register changes, scale, position, and metadata—not a generic type ladder.

## Card model

Every card contains:

- Stable machine ID
- Type and sequence tab
- Public title
- Claim
- Source state
- Reverse context
- Method or field relation
- Add/remove control

Source-state labels use plain language:

- `Verified source`
- `Verified field`
- `Verified capabilities`
- `Proposed articulation`
- `Proposed protocol`

## Interaction language

- **Turn card:** reveal context and provenance.
- **Add to hand:** select a claim for a visitor-built dossier.
- **Open dossier:** inspect and reorder the assembled argument.
- **Present hand:** convert the selected set into a full-screen sequence.
- **Draw a card:** enter the cabinet through a non-linear route.

Motion is limited to state explanation: card emphasis, panel transitions, and presenter advancement.

## Responsive behavior

- Desktop stacks are lateral rails; partial cards communicate additional material.
- Mobile rails show one dominant card plus the edge of the next.
- The document itself never overflows horizontally.
- Dialogs use native `<dialog>` behavior.
- Presenter mode supports visible controls and arrow keys.

## Refusals

- No generated imagery.
- No gradients or glass effects.
- No equal-weight SaaS feature grid.
- No invented proof, partner logos, metrics, or case studies.
- No dependencies for interactions available in the platform.
- No unlabeled icon controls.
- No animation without a state-change function.
