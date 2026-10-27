# Continuity Context

- Envelope Schema: [tiinex.root.v1](https://github.com/Tiinex/docs/blob/302506f90537dc23d6f88ad0bd0bb9c97c6cf9f6/.topics/.schemas/tiinex.root.v1.schema.md)
- Parent
  - Parent Schema: [tiinex.evidence.v1](https://github.com/Tiinex/docs/blob/9ef3c2caed38152b1948c93cb45c985786660d91/.topics/.schemas/core/evidence/tiinex.evidence.v1.schema.md)
  - Created At: 2026-10-27 11:59:14
  - Trace: [001-1-chatgpt-web-delivery-failure-404-despite-locally-valid-carriers.trace.md](001-1-chatgpt-web-delivery-failure-404-despite-locally-valid-carriers.trace.md)
  - Origin:
    - [relative](001-1-chatgpt-web-delivery-failure-404-despite-locally-valid-carriers.trace.md)
- Current
  - Current Schema: [tiinex.evidence.v1](https://github.com/Tiinex/docs/blob/9ef3c2caed38152b1948c93cb45c985786660d91/.topics/.schemas/core/evidence/tiinex.evidence.v1.schema.md)
  - Created At: 2026-10-27 11:59:17
  - Authors: Anchor
  - Summary: 02 reference comparisons — client-observed and bounded
  - Status: ready/local

---

# Reference and Copy Contrasts — Old and New Presentation

## Supported Claim Or Question

- Supported Claim Or Question: Do path reuse, changed display reference, or file-copy method independently determine whether a locally valid ChatGPT Web artifact is downloadable?
- Evidence Role: Separate observed contrasts from unsupported causal attributions.

## Provenance

- Known Source: Sequential tests run by Anchor with Sigma testing actual ChatGPT Web download links: A/B/C copies, small ZIP and TXT controls, G/H relinks, same-message I/J and K/L, delayed M/N, and R/S/T/U/V references. These observations were reported in this same conversation; their original network traces are not all retained as files in the Workspace.
- Preservation Basis: Retain discrete test identities and reported outcomes, with confounders named explicitly rather than folding them into one blanket successful workaround.
- Provenance Limits: The tests were not all created in one synchronized turn; reuse and publication histories differed.

## Evidence Material

- basic-control-contrasts
  - Material: Multiple 33 MB copies by differing routes and names, plus small ZIP/TXT files, initially downloaded successfully; older original references sometimes failed immediately while new references sometimes worked.
  - Material Kind: Sequential client-link experiments.
  - Description: Filename and file size did not consistently predict availability; a new URL/reference could work while an older one to the same source path failed.
- old-reference-lifecycle
  - Material: G initially downloadable and later 404; H failed immediately and at later rechecks; K/L and delayed M/N could be downloaded repeatedly and after further operations; U/V and reused S/T in a new message sometimes worked while older references failed.
  - Material Kind: Repeated host-link observations with differing registration histories.
  - Description: The one-time-download rule, universal short expiry, path-only explanation, and simple LIFO/oldest-file eviction were not supported.

## Preservation And Fidelity

- Preservation State: Test identities and cautious outcome summaries reside in this Evidence. Exact request-level raw logs for each individual early trial are not carried.
- Fidelity Notes: A success or failure belongs to one concrete *message and reference instance*; never conflate it with the filename or underlying ZIP bytes alone.
- Known Losses: Individual reference IDs, request chronology, server registration events and full request-response traces remain unavailable for some tests.

## Interpretation Limits

- Must Not Be Treated As: Acceptance of any host workaround, proof of OpenAI backend implementation, permission to rewrite portable Tiinex Core, or proof of verified operator-side file bytes.
- Does Not Prove: That a new message reliably repairs a 404, that physical copying has a causal role, or that deduplication exists. Some copied files succeeded while others failed.
- Not Yet Used As: A fixed retry-count estimate or a guaranteed delivery workaround.

---

# Continuity Integrity

- [sha256-base64url-c14n-v2](https://github.com/Tiinex/docs/blob/3988951208eb9a8926e84ab42625d4b42fa00c2d/.topics/.validators/sha256-base64url-c14n-v2.validator.md)
  - Towards: [001-1-chatgpt-web-delivery-failure-404-despite-locally-valid-carriers.trace.md](001-1-chatgpt-web-delivery-failure-404-despite-locally-valid-carriers.trace.md)
  - Value: FywRHrvgwJvCGTdHtzp1Bywm6c68tvtV1039FKwRk_I

- [sha256-base64url-c14n-v2](https://github.com/Tiinex/docs/blob/3988951208eb9a8926e84ab42625d4b42fa00c2d/.topics/.validators/sha256-base64url-c14n-v2.validator.md)
  - Towards: self
  - Value: Z8yNeZKWTLrmixPU6wZMH0gvfaYRrETU6bLS6vSCClI