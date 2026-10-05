# Continuity Context

- Envelope Schema: [tiinex.root.v1](https://github.com/Tiinex/docs/blob/302506f90537dc23d6f88ad0bd0bb9c97c6cf9f6/.topics/.schemas/tiinex.root.v1.schema.md)
- Parent
  - Parent Schema: [tiinex.topic.v1](https://github.com/Tiinex/docs/blob/302506f90537dc23d6f88ad0bd0bb9c97c6cf9f6/.topics/.schemas/core/topic/tiinex.topic.v1.schema.md)
  - Created At: 2026-10-05 19:24:34
  - Trace: [001-1-1-prefer-carried-sources-before-connectors.trace.md](001-1-1-prefer-carried-sources-before-connectors.trace.md)
  - Origin:
    - [relative](001-1-1-prefer-carried-sources-before-connectors.trace.md)
- Current
  - Current Schema: [tiinex.topic.v1](https://github.com/Tiinex/docs/blob/302506f90537dc23d6f88ad0bd0bb9c97c6cf9f6/.topics/.schemas/core/topic/tiinex.topic.v1.schema.md)
  - Created At: 2026-10-05 19:24:36
  - Authors: Anchor
  - Why: Preserve the user-tested branch/download/upload workflow as OpenAI-specific host guidance while keeping cold grounding independently sufficient.
  - Summary: Use ChatGPT conversation branching as a bounded context-extension optimization backed by the latest durable recovery package.
  - Status: ready/local

---

# Branch Before Limit Without Replacing Recovery

## Step Purpose

Use conversation branching as a continuity optimization while preserving package-based recovery as the durable boundary.

## Procedure

- When the current conversation is approaching practical context limits but still contains useful working context, branching the same conversation may be used to extend that context before a full cold handoff is necessary.
- Before branching, surface the latest qualified recovery package so the branch has a durable fallback if inherited conversation context is incomplete or the platform loses state.
- Branching may reduce reconstruction cost, but inherited chat context is convenience only: it must not become hidden required authority or the sole copy of meaningful work state.
- When the work reaches a stable recipient/session boundary where cold recovery is expected to be safe, prefer a canonical package-first restart/Handoff rather than indefinitely extending one conversational context.
- Specialist delegation may reduce orchestrator/architect/overseer context pressure by moving bounded implementation context to specialist Roles and returning only qualified results.

## Boundary

Branching is not Handoff, acceptance, Task selection, durable identity, Process applicability or proof of recovery completeness. Cold package grounding must remain independently viable.

---

# Continuity Integrity

- [sha256-base64url-c14n-v2](https://github.com/Tiinex/docs/blob/3988951208eb9a8926e84ab42625d4b42fa00c2d/.topics/.validators/sha256-base64url-c14n-v2.validator.md)
  - Towards: [001-1-1-prefer-carried-sources-before-connectors.trace.md](001-1-1-prefer-carried-sources-before-connectors.trace.md)
  - Value: wIu5S02rSSUNDSapBwkq6CH9p7FrAW3VOjFWeA6nWSw

- [sha256-base64url-c14n-v2](https://github.com/Tiinex/docs/blob/3988951208eb9a8926e84ab42625d4b42fa00c2d/.topics/.validators/sha256-base64url-c14n-v2.validator.md)
  - Towards: self
  - Value: cqsK-tv2X-2MuDuJqNrrnPoLHeRuQC_MRq70zi8T43Q
