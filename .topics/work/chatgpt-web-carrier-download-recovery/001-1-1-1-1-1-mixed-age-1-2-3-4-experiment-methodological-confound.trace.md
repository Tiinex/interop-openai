# Continuity Context

- Envelope Schema: [tiinex.root.v1](https://github.com/Tiinex/docs/blob/302506f90537dc23d6f88ad0bd0bb9c97c6cf9f6/.topics/.schemas/tiinex.root.v1.schema.md)
- Parent
  - Parent Schema: [tiinex.evidence.v1](https://github.com/Tiinex/docs/blob/9ef3c2caed38152b1948c93cb45c985786660d91/.topics/.schemas/core/evidence/tiinex.evidence.v1.schema.md)
  - Created At: 2026-10-27 11:59:20
  - Trace: [001-1-1-1-1-partial-workspace-carriers-delivery-variability.trace.md](001-1-1-1-1-partial-workspace-carriers-delivery-variability.trace.md)
  - Origin:
    - [relative](001-1-1-1-1-partial-workspace-carriers-delivery-variability.trace.md)
- Current
  - Current Schema: [tiinex.evidence.v1](https://github.com/Tiinex/docs/blob/9ef3c2caed38152b1948c93cb45c985786660d91/.topics/.schemas/core/evidence/tiinex.evidence.v1.schema.md)
  - Created At: 2026-10-27 11:59:22
  - Authors: Anchor
  - Summary: 05 mixed age — client-observed and bounded
  - Status: ready/local

---

# Mixed-Age 1/2/3/4 Experiment — Methodological Confound

## Supported Claim Or Question

- Supported Claim Or Question: Can the initial same-message full/two/three/four partial comparison isolate file-size or partial-count effects if only the three-part set was freshly manufactured?
- Evidence Role: Preserve Sigma's correction as an explicit failed experiment design, rather than repurpose its outcome as evidence for a threshold.

## Provenance

- Known Source: User-supplied silent video `20261027-1017-41.5344147.mp4`, SHA-256 `a497f963d1e002bebbe06a00263a0fcf3a2f18053b01f2d7bbd26472b3d8097d`, and subsequent Sigma correction that all ten test files should have been newly created in the same turn.
- Preservation Basis: This Evidence and a cropped JPEG excerpt from the reviewed video; original video bytes are not in the current Workspace archive.
- Provenance Limits: UI screens and DevTools were inspected by Anchor; 404/200 observations correspond to user-controlled downloads, not a provider-side audit.

## Evidence Material

- mixed-cohort-results
  - Material: Old Full `-1` (33.31 MB) 404; old two parts `-2/-3` (15.60/20.29 MB) 404/404; newly built three parts `-11/-12/-13` (11.68/18.19/11.81 MB) 200/200/200; old four parts `-4/-5/-6/-7` (11.68/16.57/11.80/4.21 MB) 404/404/404/404; repeat Full 404.
  - Material Kind: Mixed-age same-message test observation.
  - Description: 3/10 succeeded, 7/10 failed in initial attempt. The 4.21 MB failure versus 18.19 MB success contradicts a simple monotonic size cutoff *in this cohort*.
- confound-correction
  - Material: Sigma explicitly identified unequal creation/registration history across grouped packages; Anchor accepted this and invalidated the experiment as threshold evidence.
  - Material Kind: Experiment-design correction.
  - Description: Same-message publication did not ensure a shared manufacturing cohort.
- captured-network-derivative
  - Material: [001-1-1-1-1-1-mixed-age-404-contrast.jpg](001-1-1-1-1-1-mixed-age-404-contrast.jpg)
  - Material Kind: Cropped user-supplied video-frame derivative; 104222 bytes; SHA-256 `a513e083cb43523656c393e90710d1eda8e6dc4367e9990c61a8a364a8cee862`.
  - Description: Shows the network request panel and mixed 404/200 rows, not the whole test chronology.

## Preservation And Fidelity

- Preservation State: Cropped derivative is included and integrity-identified; original video is retained only in conversation/user material unless separately collected.
- Fidelity Notes: “Invalid as threshold evidence” is a methodological judgment, not a claim that the 404 and 200 events were imaginary.
- Known Losses: No synchronized host-side reference-registration timestamps for all earlier and newly built files.

## Interpretation Limits

- Must Not Be Treated As: Acceptance of any host workaround, proof of OpenAI backend implementation, permission to rewrite portable Tiinex Core, or proof of verified operator-side file bytes.
- Does Not Prove: That age is the root cause, that three parts are more reliable, or that some payload size can never be downloaded.
- Not Yet Used As: An accepted rule for the number of parts or retries.

---

# Continuity Integrity

- [sha256-base64url-c14n-v2](https://github.com/Tiinex/docs/blob/3988951208eb9a8926e84ab42625d4b42fa00c2d/.topics/.validators/sha256-base64url-c14n-v2.validator.md)
  - Towards: [001-1-1-1-1-partial-workspace-carriers-delivery-variability.trace.md](001-1-1-1-1-partial-workspace-carriers-delivery-variability.trace.md)
  - Value: md_boKIqqoLfqkiy-NBpP_3zNxBPg6BEUJnx1F2yjOw

- [sha256-base64url-c14n-v2](https://github.com/Tiinex/docs/blob/3988951208eb9a8926e84ab42625d4b42fa00c2d/.topics/.validators/sha256-base64url-c14n-v2.validator.md)
  - Towards: self
  - Value: FCkFG7HIznThpk9YLvU8yfmuue121i4aKHlxT8vRZKY