# Continuity Context

- Envelope Schema: [tiinex.root.v1](https://github.com/Tiinex/docs/blob/302506f90537dc23d6f88ad0bd0bb9c97c6cf9f6/.topics/.schemas/tiinex.root.v1.schema.md)
- Parent
  - Parent Schema: [tiinex.evidence.v1](https://github.com/Tiinex/docs/blob/9ef3c2caed38152b1948c93cb45c985786660d91/.topics/.schemas/core/evidence/tiinex.evidence.v1.schema.md)
  - Created At: 2026-10-27 11:59:22
  - Trace: [001-1-1-1-1-1-mixed-age-1-2-3-4-experiment-methodological-confound.trace.md](001-1-1-1-1-1-mixed-age-1-2-3-4-experiment-methodological-confound.trace.md)
  - Origin:
    - [relative](001-1-1-1-1-1-mixed-age-1-2-3-4-experiment-methodological-confound.trace.md)
- Current
  - Current Schema: [tiinex.evidence.v1](https://github.com/Tiinex/docs/blob/9ef3c2caed38152b1948c93cb45c985786660d91/.topics/.schemas/core/evidence/tiinex.evidence.v1.schema.md)
  - Created At: 2026-10-27 11:59:23
  - Authors: Anchor
  - Summary: 06 fresh cohort — client-observed and bounded
  - Status: ready/local

---

# Same-Turn Fresh Ten-Carriers Experiment — All Downloaded

## Supported Claim Or Question

- Supported Claim Or Question: What occurs when a full carrier and fresh two-, three-, and four-part alternatives are all manufactured in a single approximately 13-second run, use the same bootstrap and are published together?
- Evidence Role: Preserve the corrected method and direct observation, without assigning platform causality.

## Provenance

- Known Source: Newly manufactured siblings `041-1-1-1-14` through `-23` under Parent `041-1-1-1`; Sigma's silent video `20261027-1041-55.6585725.mp4`, SHA-256 `a556e1b4150feec152ac1d223fdbf1149a44e69053ef3f93082ca75fbf6c02da`.
- Preservation Basis: Exact carrier identities, reported dimensions, client result summary, and one cropped derivative frame are included; original video remains conversation-owned and is not in this carrier.
- Provenance Limits: One fresh run; no server-side creation/registration log; “simultaneous” means same local run, not necessarily same backend sync transaction.

## Evidence Material

- shared-manufacture
  - Material: Full `-14` 33.31 MB; 2-way `-15/-16` 22.11/22.01 MB; 3-way `-17/-18/-19` 18.30/18.32/18.31 MB; 4-way `-20/-21/-22/-23` 18.30/18.29/18.31/10.83 MB. Each complementary set covered 19/19 exact Workspace archive hashes with byte-identical Tooling bootstrap across the ten outputs.
  - Material Kind: Locally inspected Handoff carrier manufacture.
  - Description: Consistent source closure and approximately coeval local creation corrected the earlier mixed-age confound.
- observed-client-results
  - Material: Sigma's recording showed 10 completed download operations and `status: success` in the inspected API results, approximately 198 MB total payload transferred. No new `Library file not found` seen in that run.
  - Material Kind: Observed client-side success cohort.
  - Description: One 33.31 MB full carrier succeeded; pure file size or need for partial transport are not sufficient explanations for prior failures. A separately requested 11th Full retest was not observed and must not be counted.
- captured-network-derivative
  - Material: [001-1-1-1-1-1-1-fresh-ten-success.jpg](001-1-1-1-1-1-1-fresh-ten-success.jpg)
  - Material Kind: Cropped JPEG derivative; 74720 bytes; SHA-256 `30e3a1f45869649043bec52b24e769f4d66d87f9254c69fd7652c5104eeb4ef1`.
  - Description: Limited frame showing ChatGPT Web download request rows and success preview, not a complete capture of all ten file payloads.

## Preservation And Fidelity

- Preservation State: One derived capture is included in this Workspace with declared SHA-256. The source video is not included.
- Fidelity Notes: Ten successful operator downloads are confirmed for this run, not a guarantee of future persistent availability.
- Known Losses: Host backend registration/expiration logic, other users' cohorts and subsequent cold retrieval after long delays not controlled.

## Interpretation Limits

- Must Not Be Treated As: Acceptance of any host workaround, proof of OpenAI backend implementation, permission to rewrite portable Tiinex Core, or proof of verified operator-side file bytes.
- Does Not Prove: A deterministic recovery operation, a global “files under N MB work” threshold, or that immediate creation is sufficient for all clients.
- Not Yet Used As: Final evidence for fixing the OpenAI host.

---

# Continuity Integrity

- [sha256-base64url-c14n-v2](https://github.com/Tiinex/docs/blob/3988951208eb9a8926e84ab42625d4b42fa00c2d/.topics/.validators/sha256-base64url-c14n-v2.validator.md)
  - Towards: [001-1-1-1-1-1-mixed-age-1-2-3-4-experiment-methodological-confound.trace.md](001-1-1-1-1-1-mixed-age-1-2-3-4-experiment-methodological-confound.trace.md)
  - Value: FCkFG7HIznThpk9YLvU8yfmuue121i4aKHlxT8vRZKY

- [sha256-base64url-c14n-v2](https://github.com/Tiinex/docs/blob/3988951208eb9a8926e84ab42625d4b42fa00c2d/.topics/.validators/sha256-base64url-c14n-v2.validator.md)
  - Towards: self
  - Value: CJCSiofTHjxDmridNaYGqhppX8S2yiE7-xyEFp_L47Q