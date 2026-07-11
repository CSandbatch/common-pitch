# Common Pitch — Project Ontology

Entity taxonomy for the Common Action argument-cabinet pitch interface.

## Project

Common Pitch is an experimental presentation interface for Common Action, structured as a visitor-assembled deck of institutional claims.

## SourceSite

The public page at `https://www.common-action.org/`, audited as the factual source for the rebuild.

## ProductionSite

The dependency-free implementation in `docs/`.

## Thesis

A concise governing proposition that orients the institution: moving the world from chaos to comprehension.

## Workstream

One of four public fields: Climate, Energy, Agriculture, or Supply Chain.

## Capability

A technical method Common Action can apply to knowledge coordination.

## Protocol

A public operating principle concerning traceability, uncertainty, interoperability, or collective work.

## ProvenanceSignal

Interface metadata that exposes status, recency, authorship, scope, or evidentiary limits.

## ColorScheme

A **locked** named palette applied through CSS custom properties and switched at runtime. The site has exactly two — `ultraviolet` (default — electric blue + yellow signal) and `suited-chili` (chili + amber). Common Pitch is the **origin and source of truth** for these schemes; `common-action` ported them on 2026-06-26 and mirrors them. Canonical token values and switcher invariants are defined in `AGENTS.md` → **Color Schemes (Locked)**. Adding, removing, renaming, or recoloring a scheme requires explicit user approval and must be propagated to `common-action` in the same session.

## Card

A single source-labeled claim in the cabinet, carrying an `id`, `title`, `type` (Thesis / Problem / Institutional claim / Field / Method / Protocol), front-side claim, and reverse-side provenance. The atomic unit of the interface.

## Hand

A visitor-assembled set of `Card`s, held in client state and shareable via URL. The input to presentation and to consultation-package generation.

## ConsultationPackage

A structured, personalized output derived from a `Hand`: summary, focus areas (from Field cards), methods (from Method cards), working protocols (from Protocol cards), and per-card discussion points. Source-grounded — implies no outcomes or metrics beyond what the cards state. **Currently generated client-side by a simulated generator (`docs/app.js`); no network call happens.** The seam is shaped for a future Cloudflare Worker `/consult` call to OpenRouter's free endpoint (OpenAI-compatible, a `:free` model, JSON mode with parse-and-validate — key held in a Worker secret, never in this repo). See `MEMORY.md` for how this seam came to target OpenRouter.

## CheckoutSession

A **mockup** paid-checkout + scheduling flow over a `ConsultationPackage`: fixed dummy price (`$750`), simulated payment form, mock time-slot selection, confirmation labeled as mock. No real payment, booking, backend, or email yet (planned: Stripe Checkout + webhook + scheduler via the Worker, with the package emailed to ellie@common-action.org on booking).

## Artifact

| Type | Path | Description |
|---|---|---|
| `production-page` | `docs/` | Deployable static website and GitHub Pages source |
| `brand-document` | `brand/` | Design tokens and visual rules |
| `audit-record` | `audit/` | Source-site evidence and findings |
| `screen` | `audit/screens/` | Visual QA captures |
