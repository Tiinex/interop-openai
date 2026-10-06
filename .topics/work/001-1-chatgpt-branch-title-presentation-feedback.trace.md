# Continuity Context

- Envelope Schema: [tiinex.root.v1](https://github.com/Tiinex/docs/blob/302506f90537dc23d6f88ad0bd0bb9c97c6cf9f6/.topics/.schemas/tiinex.root.v1.schema.md)
- Parent
  - Parent Schema: [tiinex.transition.definition.v1](https://github.com/Tiinex/docs/blob/302506f90537dc23d6f88ad0bd0bb9c97c6cf9f6/.topics/.schemas/transition/definition/tiinex.transition.definition.v1.schema.md)
  - Created At: 2026-10-05 20:29:10
  - Trace: [001-2-1-1-branch-before-limit-without-replacing-recovery.trace.md](../.processes/chatgpt-session-continuity/001-2-1-1-branch-before-limit-without-replacing-recovery.trace.md)
  - Origin:
    - [relative](../.processes/chatgpt-session-continuity/001-2-1-1-branch-before-limit-without-replacing-recovery.trace.md)
- Current
  - Current Schema: [tiinex.feedback.v1](https://github.com/Tiinex/docs/blob/302506f90537dc23d6f88ad0bd0bb9c97c6cf9f6/.topics/.schemas/core/feedback/tiinex.feedback.v1.schema.md)
  - Created At: 2026-10-06 16:17:53
  - Authors: Anchor; Sigma
  - Why: Make branch recommendations easier to scan in ChatGPT Web without conflating UI titles with Tiinex carrier or semantic lineage authority.
  - Summary: Preserve Sigma's preference for spaced ChatGPT branch dimensions and short state labels as a host-facing lineage projection.
  - Status: ready/local

---

# ChatGPT Branch Title Presentation Feedback

## Observed Signal

- Sigma uses ChatGPT conversation branches as frequent context-extension points and manually names branch conversations as a human-readable projection of the branch lineage.
- In ChatGPT Web UX, numeric dimensions are materially easier to scan when separators contain spaces, for example `1 - 1 - 1 (Recovery Checkpoint)` rather than `1-1-1 (Recovery Checkpoint)`.

## Source

- Source: Sigma
- Session Observation: ChatGPT branch titles are easier to scan when numeric branch dimensions use spaced separators and the suffix summarizes the state at the branch point.

## Interpretation

- The branch title is a host-facing presentation label only.
- It may summarize the session state up to the branch point, such as `(Grounding)`, `(Recovery Checkpoint)`, `(Acceptance Retest)`, or `(Sandbox Broken Detected)`.
- The numeric display may visually mirror conversational branching but must not be treated as Tiinex carrier dimension, semantic Parent, Handoff routing, currentness, Role identity, or package lineage authority.
- Tiinex should recommend a concise title when recommending a ChatGPT branch, but the operator remains free to rename it in the host UX.

## Feedback Target

- Target: `.topics/.processes/chatgpt-session-continuity/001-2-1-1-branch-before-limit-without-replacing-recovery.trace.md`
- Scope: ChatGPT-specific human-facing branch recommendation presentation.

## Feedback Received

- Source: Sigma
- Feedback: use spaces around numeric branch separators and a concise state label, e.g. `1 - 1 - 1 - 1 (Recovery Checkpoint)`, because that reads better in ChatGPT Web's conversation UX.

## Disposition

- State: ready-for-host-process-qualification
- Suggested Projection: `<chat-branch-dimension with " - " separators> (<short checkpoint/state label>)`
- Example: `1 - 1 - 1 - 1 (Recovery Checkpoint)`

## Limits

- This Feedback does not change Tiinex carrier naming, carrier Major allocation, package filenames, Handoff route semantics, current-work authority, or ChatGPT's actual branch behavior.

---

# Continuity Integrity

- [sha256-base64url-c14n-v2](https://github.com/Tiinex/docs/blob/3988951208eb9a8926e84ab42625d4b42fa00c2d/.topics/.validators/sha256-base64url-c14n-v2.validator.md)
  - Towards: [001-2-1-1-branch-before-limit-without-replacing-recovery.trace.md](../.processes/chatgpt-session-continuity/001-2-1-1-branch-before-limit-without-replacing-recovery.trace.md)
  - Value: 1vqGY24m91y4NEgeezMbY9cilBIrp2k6QIPIp4SirGQ

- [sha256-base64url-c14n-v2](https://github.com/Tiinex/docs/blob/3988951208eb9a8926e84ab42625d4b42fa00c2d/.topics/.validators/sha256-base64url-c14n-v2.validator.md)
  - Towards: self
  - Value: hEDYq9C-7JbAJheImCRYatNKTF_YMO7deWwnOUY2OwI