# Continuity Context

- Envelope Schema: [tiinex.root.v1](https://github.com/Tiinex/docs/blob/302506f90537dc23d6f88ad0bd0bb9c97c6cf9f6/.topics/.schemas/tiinex.root.v1.schema.md)
- Parent
  - Parent Schema: [tiinex.evidence.v1](https://github.com/Tiinex/docs/blob/9ef3c2caed38152b1948c93cb45c985786660d91/.topics/.schemas/core/evidence/tiinex.evidence.v1.schema.md)
  - Created At: 2026-10-27 11:59:17
  - Trace: [001-1-1-reference-and-copy-contrasts-old-and-new-presentation.trace.md](001-1-1-reference-and-copy-contrasts-old-and-new-presentation.trace.md)
  - Origin:
    - [relative](001-1-1-reference-and-copy-contrasts-old-and-new-presentation.trace.md)
- Current
  - Current Schema: [tiinex.evidence.v1](https://github.com/Tiinex/docs/blob/9ef3c2caed38152b1948c93cb45c985786660d91/.topics/.schemas/core/evidence/tiinex.evidence.v1.schema.md)
  - Created At: 2026-10-27 11:59:18
  - Authors: Anchor
  - Summary: 03 write race — client-observed and bounded
  - Status: ready/local

---

# Slow Write and Atomic Replace — Failure Still Observed

## Supported Claim Or Question

- Supported Claim Or Question: Do deliberately completed writes and atomic replacement reliably prevent `Library file not found` download failures?
- Evidence Role: Preserve a direct test of the write-during-sync suspicion without prematurely declaring a platform cause.

## Provenance

- Known Source: Anchor-created large ZIP controls written slowly directly to `/mnt/data` versus fully staged in `/tmp` and atomically `os.replace`d into `/mnt/data`; Sigma's subsequent ChatGPT Web download attempts and follow-up R/S/U/V references.
- Preservation Basis: Test design, local ZIP-validity checks and the reported host failures are preserved textually.
- Provenance Limits: `/tmp` and `/mnt/data` mapped to the same local filesystem in the observed environment; the host's unseen Library ingestion time is not known.

## Evidence Material

- write-mode-contrast
  - Material: D with an approximately 4.58-second direct write into `/mnt/data`, and E with complete write in `/tmp` followed by atomic rename into `/mnt/data`; both ZIPs locally valid and both originally returned host 404.
  - Material Kind: Controlled local write-mode test followed by host link attempts.
  - Description: The atomic rename did **not** consistently avert a host-side delivery failure.
- later-republication-contrast
  - Material: R/S fresh references to failed D/E still 404, while newly copied U/V and new-message re-exposures of paths could succeed.
  - Material Kind: Confounded host presentation tests.
  - Description: Neither copy/move strategy nor path alone isolated a reliable remedy.

## Preservation And Fidelity

- Preservation State: Summary and limited timing observations preserved; raw host timing and backend sync data not available.
- Fidelity Notes: A fully closed and locally valid file is a necessary safe production practice but not sufficient evidence of downloadability.
- Known Losses: No provider-side ingestion observation, checksum registry, sync worker state or direct Library-object content comparison.

## Interpretation Limits

- Must Not Be Treated As: Acceptance of any host workaround, proof of OpenAI backend implementation, permission to rewrite portable Tiinex Core, or proof of verified operator-side file bytes.
- Does Not Prove: That the race never exists, that checksum deduplication is absent, or that sync can/cannot see in-progress writes. It falsifies only the operational claim that atomic replacement *always prevents* the observed failures.
- Not Yet Used As: A platform implementation fix.

---

# Continuity Integrity

- [sha256-base64url-c14n-v2](https://github.com/Tiinex/docs/blob/3988951208eb9a8926e84ab42625d4b42fa00c2d/.topics/.validators/sha256-base64url-c14n-v2.validator.md)
  - Towards: [001-1-1-reference-and-copy-contrasts-old-and-new-presentation.trace.md](001-1-1-reference-and-copy-contrasts-old-and-new-presentation.trace.md)
  - Value: Z8yNeZKWTLrmixPU6wZMH0gvfaYRrETU6bLS6vSCClI

- [sha256-base64url-c14n-v2](https://github.com/Tiinex/docs/blob/3988951208eb9a8926e84ab42625d4b42fa00c2d/.topics/.validators/sha256-base64url-c14n-v2.validator.md)
  - Towards: self
  - Value: cSCzC2PDsN2BH4_Z07ng5OamJiSftmqjvv_195yPQlI