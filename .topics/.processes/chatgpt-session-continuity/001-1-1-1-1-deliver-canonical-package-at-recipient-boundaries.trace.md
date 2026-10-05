# Continuity Context

- Envelope Schema: [tiinex.root.v1](https://github.com/Tiinex/docs/blob/302506f90537dc23d6f88ad0bd0bb9c97c6cf9f6/.topics/.schemas/tiinex.root.v1.schema.md)
- Parent
  - Parent Schema: [tiinex.topic.v1](https://github.com/Tiinex/docs/blob/302506f90537dc23d6f88ad0bd0bb9c97c6cf9f6/.topics/.schemas/core/topic/tiinex.topic.v1.schema.md)
  - Created At: 2026-10-05 19:24:36
  - Trace: [001-1-1-1-branch-before-limit-without-replacing-recovery.trace.md](001-1-1-1-branch-before-limit-without-replacing-recovery.trace.md)
  - Origin:
    - [relative](001-1-1-1-branch-before-limit-without-replacing-recovery.trace.md)
- Current
  - Current Schema: [tiinex.topic.v1](https://github.com/Tiinex/docs/blob/302506f90537dc23d6f88ad0bd0bb9c97c6cf9f6/.topics/.schemas/core/topic/tiinex.topic.v1.schema.md)
  - Created At: 2026-10-05 19:24:38
  - Authors: Anchor
  - Why: Separate conversational interaction from durable recipient transfer semantics.
  - Summary: Use canonical Handoff package delivery for bounded ChatGPT recipient transfers and keep humans out of hidden recovery state.
  - Status: ready/local

---

# Deliver Canonical Package At Recipient Boundaries

## Step Purpose

Deliver real recipient transfers through canonical package transport and keep human interaction outside hidden recovery state.

## Procedure

- For a bounded responsibility transfer, attach the canonical Handoff Package produced by Tiinex Tooling and present its exact Tooling-projected routing/transport text.
- Do not replace the package with loose patches, status files, repository ZIPs or prose the recipient must mentally combine.
- A compact non-authoritative status projection may accompany a non-blind human interaction only when it is fully derivable from the package; blind cold-start tests keep the stricter non-leading transport boundary.
- Ask the human to act only at real human gates, external landing boundaries or host limitations; do not make the human a hidden state store.

## Boundary

ChatGPT UI affordances do not weaken Tiinex transfer semantics or create delivery/acceptance authority.

---

# Continuity Integrity

- [sha256-base64url-c14n-v2](https://github.com/Tiinex/docs/blob/3988951208eb9a8926e84ab42625d4b42fa00c2d/.topics/.validators/sha256-base64url-c14n-v2.validator.md)
  - Towards: [001-1-1-1-branch-before-limit-without-replacing-recovery.trace.md](001-1-1-1-branch-before-limit-without-replacing-recovery.trace.md)
  - Value: cqsK-tv2X-2MuDuJqNrrnPoLHeRuQC_MRq70zi8T43Q

- [sha256-base64url-c14n-v2](https://github.com/Tiinex/docs/blob/3988951208eb9a8926e84ab42625d4b42fa00c2d/.topics/.validators/sha256-base64url-c14n-v2.validator.md)
  - Towards: self
  - Value: sdlQSJa1a2fiU3W8qXsn3ix4JykG6Y5DntSzc1q0C8s
