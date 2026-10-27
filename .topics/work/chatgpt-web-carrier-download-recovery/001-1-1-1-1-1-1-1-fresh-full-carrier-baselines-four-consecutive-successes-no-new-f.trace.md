# Continuity Context

- Envelope Schema: [tiinex.root.v1](https://github.com/Tiinex/docs/blob/302506f90537dc23d6f88ad0bd0bb9c97c6cf9f6/.topics/.schemas/tiinex.root.v1.schema.md)
- Parent
  - Parent Schema: [tiinex.evidence.v1](https://github.com/Tiinex/docs/blob/9ef3c2caed38152b1948c93cb45c985786660d91/.topics/.schemas/core/evidence/tiinex.evidence.v1.schema.md)
  - Created At: 2026-10-27 11:59:23
  - Trace: [001-1-1-1-1-1-1-same-turn-fresh-ten-carriers-experiment-all-downloaded.trace.md](001-1-1-1-1-1-1-same-turn-fresh-ten-carriers-experiment-all-downloaded.trace.md)
  - Origin:
    - [relative](001-1-1-1-1-1-1-same-turn-fresh-ten-carriers-experiment-all-downloaded.trace.md)
- Current
  - Current Schema: [tiinex.evidence.v1](https://github.com/Tiinex/docs/blob/9ef3c2caed38152b1948c93cb45c985786660d91/.topics/.schemas/core/evidence/tiinex.evidence.v1.schema.md)
  - Created At: 2026-10-27 11:59:25
  - Authors: Anchor
  - Summary: 07 fresh baselines — client-observed and bounded
  - Status: ready/local

---

# Fresh Full Carrier Baselines — Four Consecutive Successes, No New Failure

## Supported Claim Or Question

- Supported Claim Or Question: Did sequentially manufactured, locally qualified full recovery siblings establish a fresh `404` failure suitable for testing sibling-based rebuilding as a recovery action?
- Evidence Role: Record the negative/absent trigger and prevent future Anchors from inventing a successful retry that never occurred.

## Provenance

- Known Source: Qualified full carrier outputs `041-1-1-1-24`, `-25`, `-26`, `-27` under shared Parent `041-1-1-1`; Sigma's explicit messages and UI-controlled outcome selections for `-24`, `-25`, `-26`, and `-27` during this conversation.
- Preservation Basis: The four IDs, reported hashes, qualification checks and operator-acknowledged successful downloads are retained in this Evidence; the actual outgoing ZIPs are separate experimental transport objects and need not be reissued to preserve these observations.
- Provenance Limits: Sigma confirmed full downloads but receiver-computed SHA-256 was not independently provided. `-27` used a smaller regenerated Tooling bootstrap (31.71 MB rather than 33.31 MB); all 19 Workspace archive hashes remained identical.

## Evidence Material

- successful-full-sequence
  - Material: `-24` approximately 33.31 MB SHA-256 `9c0060afcd5da3a78658f6fc554f292d84ca6906eb6bd20464f6952fd34b0e0d`; `-25` 33.31 MB SHA-256 `6e8307866cc54bba00988e210c05da2acf5d3b4473583be76a25d7923a63cfe9`; `-26` 33.31 MB SHA-256 `d47c2daec3d9c858af2dda6ba0bc4b456d2efc4f149adf1591430f6836165c39`; `-27` 31.71 MB SHA-256 `f23e38710d317957b826ff7e239e3fdeef9355a691d72ccfa737d59c0beff99b`.
  - Material Kind: Local carrier SHA-256 and Sigma-confirmed client download results.
  - Description: Four successful newly produced full-carrier deliveries in sequence; no fresh failure to trigger the experimental recovery path.
- stop-boundary
  - Material: Sigma requested abandoning the brute-force baseline exercise after 2–3 more successes and returning to grounding. After `-27` succeeded, Sigma explicitly redirected Anchor to preserve lineage and supply a current full recovery for commit/push; `-28` was not manufactured as a baseline test.
  - Material Kind: Operator decision/boundary in the conversation.
  - Description: Baseline failure status remains `not established`; retry recovery effectiveness remains `not tested`.

## Preservation And Fidelity

- Preservation State: Outcomes and identifiers preserved locally. No fabricated 404 or post-failure retry event was created.
- Fidelity Notes: Local inspection/roundtrip qualified the packages, while user-side confirmation established practical download success. The separate conditions must remain distinct.
- Known Losses: No operator-side hash validation or timestamped network capture for every -24..-27 transfer.

## Interpretation Limits

- Must Not Be Treated As: Acceptance of any host workaround, proof of OpenAI backend implementation, permission to rewrite portable Tiinex Core, or proof of verified operator-side file bytes.
- Does Not Prove: That the host bug is fixed, that four retries are adequate, or that rebuilding a failed carrier succeeds. All four were *baseline* successes, not retries.
- Not Yet Used As: Entry acceptance or permanent closure of this investigation.

---

# Continuity Integrity

- [sha256-base64url-c14n-v2](https://github.com/Tiinex/docs/blob/3988951208eb9a8926e84ab42625d4b42fa00c2d/.topics/.validators/sha256-base64url-c14n-v2.validator.md)
  - Towards: [001-1-1-1-1-1-1-same-turn-fresh-ten-carriers-experiment-all-downloaded.trace.md](001-1-1-1-1-1-1-same-turn-fresh-ten-carriers-experiment-all-downloaded.trace.md)
  - Value: CJCSiofTHjxDmridNaYGqhppX8S2yiE7-xyEFp_L47Q

- [sha256-base64url-c14n-v2](https://github.com/Tiinex/docs/blob/3988951208eb9a8926e84ab42625d4b42fa00c2d/.topics/.validators/sha256-base64url-c14n-v2.validator.md)
  - Towards: self
  - Value: 0CwmHsqNwcq7WTiZScp3MzoNpguS9quQ63hJcUzZyNI