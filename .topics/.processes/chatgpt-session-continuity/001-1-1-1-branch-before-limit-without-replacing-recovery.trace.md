# Continuity Context

- Envelope Schema: [tiinex.root.v1](https://github.com/Tiinex/docs/blob/302506f90537dc23d6f88ad0bd0bb9c97c6cf9f6/.topics/.schemas/tiinex.root.v1.schema.md)
- Parent
  - Parent Schema: [tiinex.transition.definition.v1](https://github.com/Tiinex/docs/blob/302506f90537dc23d6f88ad0bd0bb9c97c6cf9f6/.topics/.schemas/transition/definition/tiinex.transition.definition.v1.schema.md)
  - Created At: 2026-10-05 19:24:34
  - Trace: [001-1-1-prefer-carried-sources-before-connectors.trace.md](001-1-1-prefer-carried-sources-before-connectors.trace.md)
  - Origin:
    - [relative](001-1-1-prefer-carried-sources-before-connectors.trace.md)
- Current
  - Current Schema: [tiinex.transition.definition.v1](https://github.com/Tiinex/docs/blob/302506f90537dc23d6f88ad0bd0bb9c97c6cf9f6/.topics/.schemas/transition/definition/tiinex.transition.definition.v1.schema.md)
  - Created At: 2026-10-05 19:24:36
  - Authors: Anchor
  - Why: Preserve the user-tested branch/download/upload workflow as OpenAI-specific host guidance while keeping cold grounding independently sufficient.
  - Summary: Use ChatGPT conversation branching as a bounded context-extension optimization backed by the latest durable recovery package.
  - Status: ready/local

---

# Branch Before Limit Without Replacing Recovery

## Transition Identity

- Name: Branch Before Limit Without Replacing Recovery
- Version: 1
- Canonical Identifier: tiinex.process.chatgpt-session-continuity.branch-before-limit-without-replacing-recovery.v1
- Transition Family: chatgpt-session-continuity
- Human Label: Branch Before Limit Without Replacing Recovery

## Purpose And Scope

- Purpose: Use conversation branching as a continuity optimization while preserving package-based recovery as the durable boundary.
- Semantic Boundary: Defines this reusable Process position only; it does not prove invocation, execution, authorization, acceptance, or completion.
- Intended Domains: qualified invocations of the owning chatgpt-session-continuity Process
- Not Intended For: selecting current work or executable order from Parent continuity, filename order, or directory position alone

## Input Roles

- none

## Output Roles

- none

## Lifecycle And Continuity Effects

### Lifecycle Effects

- none

### Parent Effects

- none

## Relation Effects

- none

## Applicability And Conditions

- Applicability Meaning: applicable only when the owning Process is qualified for the bounded work and qualified invocation/topology selects this position.
- Unknown Meaning: if applicability, invocation, or topology selection is unresolved, this position remains unresolved rather than being activated by lineage order.

## Authoring Bindings

- none

## Placement Intent

### Destination Bindings

- none

### Output Placements

- none

## Interpretation Limits

- Does Not Prove: that this position was invoked, completed, accepted, or authorized.
- Must Not Be Inferred: executable order, current work, output existence, or mutation authority from Parent continuity, filename dimension, directory proximity, or apparent chronology.
- Execution Boundary: the preserved procedure/decision guidance below describes reusable intent; qualified invocation/context and real execution artifacts remain authoritative about what happened.

## Migration Notes

### Preserved Legacy Step Semantics

### Step Purpose

Use conversation branching as a continuity optimization while preserving package-based recovery as the durable boundary.

### Procedure

- When the current conversation is approaching practical context limits but still contains useful working context, branching the same conversation may be used to extend that context before a full cold handoff is necessary.
- Before branching, surface the latest qualified recovery package so the branch has a durable fallback if inherited conversation context is incomplete or the platform loses state.
- Branching may reduce reconstruction cost, but inherited chat context is convenience only: it must not become hidden required authority or the sole copy of meaningful work state.
- When the work reaches a stable recipient/session boundary where cold recovery is expected to be safe, prefer a canonical package-first restart/Handoff rather than indefinitely extending one conversational context.
- Specialist delegation may reduce orchestrator/architect/overseer context pressure by moving bounded implementation context to specialist Roles and returning only qualified results.

### Boundary

Branching is not Handoff, acceptance, Task selection, durable identity, Process applicability or proof of recovery completeness. Cold package grounding must remain independently viable.

---

# Continuity Integrity

- [sha256-base64url-c14n-v2](https://github.com/Tiinex/docs/blob/3988951208eb9a8926e84ab42625d4b42fa00c2d/.topics/.validators/sha256-base64url-c14n-v2.validator.md)
  - Towards: [001-1-1-prefer-carried-sources-before-connectors.trace.md](001-1-1-prefer-carried-sources-before-connectors.trace.md)
  - Value: Q9dTm38NJmLNcJAxVN-s9dN1AOKvoFE1p3QIr5H7MMU

- [sha256-base64url-c14n-v2](https://github.com/Tiinex/docs/blob/3988951208eb9a8926e84ab42625d4b42fa00c2d/.topics/.validators/sha256-base64url-c14n-v2.validator.md)
  - Towards: self
  - Value:Z5YmNbBWqvkrpyHLGrNEUGII2WOw3n-zCAn2IntgnFU
