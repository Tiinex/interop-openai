# Continuity Context

- Envelope Schema: [tiinex.root.v1](https://github.com/Tiinex/docs/blob/302506f90537dc23d6f88ad0bd0bb9c97c6cf9f6/.topics/.schemas/tiinex.root.v1.schema.md)
- Parent
  - Parent Schema: [tiinex.transition.definition.v1](https://github.com/Tiinex/docs/blob/302506f90537dc23d6f88ad0bd0bb9c97c6cf9f6/.topics/.schemas/transition/definition/tiinex.transition.definition.v1.schema.md)
  - Created At: 2026-10-05 20:29:06
  - Trace: [001-2-establish-chatgpt-target-and-survivability.trace.md](001-2-establish-chatgpt-target-and-survivability.trace.md)
  - Origin:
    - [relative](001-2-establish-chatgpt-target-and-survivability.trace.md)
- Current
  - Current Schema: [tiinex.transition.definition.v1](https://github.com/Tiinex/docs/blob/302506f90537dc23d6f88ad0bd0bb9c97c6cf9f6/.topics/.schemas/transition/definition/tiinex.transition.definition.v1.schema.md)
  - Created At: 2026-10-05 20:29:08
  - Authors: Anchor
  - Why: Connectors are host capabilities and source-access mechanisms, not semantic authority; live state must not silently replace exact carried bytes selected by current work authority.
  - Summary: Use exact carried qualified material before live GitHub/OpenAI connector recovery when operating in ChatGPT.
  - Status: ready/local

---

# Prefer Carried Sources Before Connectors

## Transition Identity

- Name: Prefer Carried Sources Before Connectors
- Version: 1
- Canonical Identifier: tiinex.interop.openai.process.chatgpt-continuity.prefer-carried-sources.v1
- Transition Family: chatgpt-session-continuity
- Human Label: Prefer Carried Sources Before Connectors
- Related Definition: [Prefer Carried Sources Before Connectors](001-1-1-prefer-carried-sources-before-connectors.trace.md)

## Purpose And Scope

- Purpose: Use exact carried qualified material before live GitHub/OpenAI connector recovery when operating in ChatGPT.
- Semantic Boundary: Connectors are host capabilities and source-access mechanisms, not semantic authority; live state must not silently replace exact carried bytes selected by current work authority.
- Intended Domains: bounded session grounding, recovery and continuity according to the owning Process
- Not Intended For: hidden execution state, authority inference from presence, or provider-specific semantics outside the semantically owning Process

## Input Roles

- chatgpt survivability boundary
  - Meaning: the qualified ChatGPT target context and required grounding/source obligations
  - Minimum Count: 1
  - Maximum Count: 1
  - Acquisition Policy: invocation-provided
  - Target Kind: non-artifact

## Output Roles

- chatgpt source resolution
  - Meaning: the carried-first source set plus any explicit connector/recovery escalation needed by the bounded work
  - Minimum Count: 1
  - Maximum Count: 1
  - Target Kind: non-artifact

## Lifecycle And Continuity Effects

### Lifecycle Effects

- produce chatgpt source resolution
  - Target Binding: chatgpt source resolution
  - Effect: create-new
  - Logical Continuity: no-subject-effect

### Parent Effects

- none

## Relation Effects

- none

## Applicability And Conditions

- Applicability Meaning: applicable when ChatGPT needs source material for the current grounded work and both carried and connector/live surfaces may exist
- Unknown Meaning: if carried material is insufficient and live recovery cannot be qualified, preserve the missing source instead of broad repository archaeology

## Authoring Bindings

- none

## Placement Intent

### Destination Bindings

- none

### Output Placements

- chatgpt source resolution
  - Output Binding: chatgpt source resolution
  - Placement Intent: no-materialization

## Interpretation Limits

- Does Not Prove: connector write authority, source currentness or applicability merely from connector availability
- Must Not Be Inferred: that live repository state supersedes carried Handoff/package bytes by default
- Execution Boundary: the Transition Definition is reusable Process topology; concrete grounding truth remains in qualified Entry/Handoff/Role/Task/material and the actual host/runtime observations.

---

# Continuity Integrity

- [sha256-base64url-c14n-v2](https://github.com/Tiinex/docs/blob/3988951208eb9a8926e84ab42625d4b42fa00c2d/.topics/.validators/sha256-base64url-c14n-v2.validator.md)
  - Towards: [001-2-establish-chatgpt-target-and-survivability.trace.md](001-2-establish-chatgpt-target-and-survivability.trace.md)
  - Value: H9rLYXIAQu5wcYQQavPao0L6VVCNzvGyAx7qZq3oUrM

- [sha256-base64url-c14n-v2](https://github.com/Tiinex/docs/blob/3988951208eb9a8926e84ab42625d4b42fa00c2d/.topics/.validators/sha256-base64url-c14n-v2.validator.md)
  - Towards: self
  - Value: -6f781box_o-QDSd7sChVGyyZQSJAI07NWfqJBSlf60