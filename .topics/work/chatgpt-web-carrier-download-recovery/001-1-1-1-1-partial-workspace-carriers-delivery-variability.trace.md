# Continuity Context

- Envelope Schema: [tiinex.root.v1](https://github.com/Tiinex/docs/blob/302506f90537dc23d6f88ad0bd0bb9c97c6cf9f6/.topics/.schemas/tiinex.root.v1.schema.md)
- Parent
  - Parent Schema: [tiinex.evidence.v1](https://github.com/Tiinex/docs/blob/9ef3c2caed38152b1948c93cb45c985786660d91/.topics/.schemas/core/evidence/tiinex.evidence.v1.schema.md)
  - Created At: 2026-10-27 11:59:18
  - Trace: [001-1-1-1-slow-write-and-atomic-replace-failure-still-observed.trace.md](001-1-1-1-slow-write-and-atomic-replace-failure-still-observed.trace.md)
  - Origin:
    - [relative](001-1-1-1-slow-write-and-atomic-replace-failure-still-observed.trace.md)
- Current
  - Current Schema: [tiinex.evidence.v1](https://github.com/Tiinex/docs/blob/9ef3c2caed38152b1948c93cb45c985786660d91/.topics/.schemas/core/evidence/tiinex.evidence.v1.schema.md)
  - Created At: 2026-10-27 11:59:20
  - Authors: Anchor
  - Summary: 04 partials — client-observed and bounded
  - Status: ready/local

---

# Partial Workspace Carriers — Delivery Variability

## Supported Claim Or Question

- Supported Claim Or Question: Does splitting the same 19 Workspace snapshots into complementary, qualified sibling Handoff carriers consistently restore downloadability when a full carrier fails?
- Evidence Role: Record both positive and negative contrasts for partial transport, not just the successful demonstration.

## Provenance

- Known Source: Qualified full `041-1-1-1-1`, two siblings `-2/-3` and four siblings `-4/-5/-6/-7` under shared Parent `041-1-1-1`, each covering disjoint Workspace groups that union to all 19; Sigma's recorded download tests `20261027-0949-32.3481690.mp4`, SHA-256 `814264c8331f9196da8a50ef6d327510c438a158148b29fa8bc379a91e60f00a`.
- Preservation Basis: This record and one cropped JPEG derivative of the reviewed screen recording; original `.mp4` was supplied in the conversation but is not included in the Workspace carrier.
- Provenance Limits: Partial A/B/C/D and full references differ in earlier manufacturing and registration history; earlier two-part and later four-part tests were not a synchronized cohort.

## Evidence Material

- partial-coverage
  - Material: Two partials 9+10 Workspaces; four partials 6+6+6+1 Workspaces. Tooling inspections and roundtrips passed, union covered the exact full Workspace archive-hash set.
  - Material Kind: Locally qualified carrier-content equivalence.
  - Description: Sigma separately verified that multiple handoff packages can be unpacked successively; a partial individually does not provide complete recovery.
- positive-and-negative-host-results
  - Material: In one observed recording full and older two partials returned HTTP 404 while four then-current partials returned 200 and completed; older links later returned 404, including previously successful ones.
  - Material Kind: Client-side host network and completed-download observation.
  - Description: Four siblings can be a workable *transport alternative* for one session but the number four has no demonstrated causal magic.
- captured-network-derivative
  - Material: [001-1-1-1-1-four-partial-200-and-full-404.jpg](001-1-1-1-1-four-partial-200-and-full-404.jpg)
  - Material Kind: Cropped JPEG derivative of user-provided silent video; 74437 bytes; SHA-256 `50547ce979cc34d95e24b0ee9e0e3a0ef089f16d0938f3890ec8722500aafd33`.
  - Description: Screenshot crop presents download request status contrast. It is **not** original media and must not be treated as an unchanged video or full HAR.

## Preservation And Fidelity

- Preservation State: Derivative JPEG included with exact SHA-256; video itself remains outside carrier, available only via original conversation/local user custody.
- Fidelity Notes: Deliberately cropped Chrome DevTools from an extracted video frame; crop changes representation and retains only a limited visible instant.
- Known Losses: Audio absent by user instruction, host request registration history and full unsanitized network responses not preserved as a replayable trace.

## Interpretation Limits

- Must Not Be Treated As: Acceptance of any host workaround, proof of OpenAI backend implementation, permission to rewrite portable Tiinex Core, or proof of verified operator-side file bytes.
- Does Not Prove: A partial count threshold, a universal success rate, a platform size limit, or that a failed full package is defective.
- Not Yet Used As: Accepted default ChatGPT Web Entry behavior.

---

# Continuity Integrity

- [sha256-base64url-c14n-v2](https://github.com/Tiinex/docs/blob/3988951208eb9a8926e84ab42625d4b42fa00c2d/.topics/.validators/sha256-base64url-c14n-v2.validator.md)
  - Towards: [001-1-1-1-slow-write-and-atomic-replace-failure-still-observed.trace.md](001-1-1-1-slow-write-and-atomic-replace-failure-still-observed.trace.md)
  - Value: cSCzC2PDsN2BH4_Z07ng5OamJiSftmqjvv_195yPQlI

- [sha256-base64url-c14n-v2](https://github.com/Tiinex/docs/blob/3988951208eb9a8926e84ab42625d4b42fa00c2d/.topics/.validators/sha256-base64url-c14n-v2.validator.md)
  - Towards: self
  - Value: md_boKIqqoLfqkiy-NBpP_3zNxBPg6BEUJnx1F2yjOw