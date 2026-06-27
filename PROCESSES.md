# Common Pitch — Process Dictionary

## Process: Source Site Audit

1. Fetch the public source document and headers.
2. Record its semantic and visual structure.
3. Capture desktop and mobile reference screens.
4. Separate verified claims from proposed articulation.

## Process: Evidentiary Interface Design

1. Preserve factual content and deployment austerity.
2. Establish a document-like grid and provenance layer.
3. Translate capability lists into problem/method/output relationships.
4. Use real institutional metadata as visual material.
5. Avoid invented proof and decorative data.

## Process: Static Build

1. Implement semantic HTML.
2. Implement dependency-free responsive CSS.
3. Include accessibility, print, metadata, and reduced-motion behavior.
4. Validate links, document outline, and responsive rendering.

## Process: Visual QA

1. Serve `docs/` on port 8772.
2. Capture desktop and mobile pages.
3. Inspect overflow, contrast, hierarchy, and reading order.
4. Correct defects and repeat the capture.

## Process: Consultation Package Generation

1. Read the visitor's `Hand` (selected card IDs) from client state.
2. Group cards by type: Field → focus areas, Method → methods, Protocol → working protocols, Thesis/Problem/Institutional claim → framing.
3. Compose a structured package (summary, sections, per-card discussion points) from the cards' own labeled content — invent nothing.
4. Render the package as the first step of the checkout flow.
5. **Mockup note:** generation is simulated client-side. To go live, replace the generator body with a Worker `/consult` call returning the same shape. The Worker calls **OpenRouter's free endpoint** (OpenAI-compatible `chat/completions`, a `:free` model, JSON mode + parse-and-validate since free models don't guarantee strict json_schema); the OpenRouter API key lives in a Worker secret.

## Process: Mock Checkout & Booking

1. Show the package with a fixed price; advance to a simulated payment form.
2. Capture name/email (no real payment); advance to mock time-slot selection.
3. On slot confirmation, show a booking confirmation labeled as a mockup.
4. **To go live:** Worker endpoints for Stripe Checkout + a real scheduler, with a webhook emailing the package to ellie@common-action.org.

## Process: Launch

1. Obtain stakeholder approval.
2. Back up the existing production document.
3. Deploy `docs/index.html` and `docs/styles.css`.
4. Verify HTTPS, metadata, email, and responsive behavior.
