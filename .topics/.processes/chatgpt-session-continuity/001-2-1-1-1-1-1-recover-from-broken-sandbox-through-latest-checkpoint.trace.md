# Continuity Context

- Envelope Schema: [tiinex.root.v1](https://github.com/Tiinex/docs/blob/302506f90537dc23d6f88ad0bd0bb9c97c6cf9f6/.topics/.schemas/tiinex.root.v1.schema.md)
- Parent
  - Parent Schema: [tiinex.transition.definition.v1](https://github.com/Tiinex/docs/blob/302506f90537dc23d6f88ad0bd0bb9c97c6cf9f6/.topics/.schemas/transition/definition/tiinex.transition.definition.v1.schema.md)
  - Created At: 2026-10-05 20:29:14
  - Trace: [001-2-1-1-1-1-preserve-attachment-and-host-failure-boundaries.trace.md](001-2-1-1-1-1-preserve-attachment-and-host-failure-boundaries.trace.md)
  - Origin:
    - [relative](001-2-1-1-1-1-preserve-attachment-and-host-failure-boundaries.trace.md)
- Current
  - Current Schema: [tiinex.transition.definition.v1](https://github.com/Tiinex/docs/blob/302506f90537dc23d6f88ad0bd0bb9c97c6cf9f6/.topics/.schemas/transition/definition/tiinex.transition.definition.v1.schema.md)
  - Created At: 2026-10-06 16:17:52
  - Authors: Anchor; Sigma
  - Why: Prevent volatile sandbox failure from forcing hidden chat reconstruction or ungrounded source substitution.
  - Summary: Convert an unreliable ChatGPT sandbox into an explicit fresh-session package recovery with transport-text fallback and a bounded post-grounding recovery delta.
  - Status: ready/local

---

# Recover From Broken Sandbox Through Latest Checkpoint

## Transition Identity

- Name: Recover From Broken Sandbox Through Latest Checkpoint
- Version: 1
- Canonical Identifier: tiinex.interop.openai.process.chatgpt-continuity.recover-from-broken-sandbox.v1
- Transition Family: chatgpt-session-continuity
- Human Label: Recover From Broken Sandbox Through Latest Checkpoint

## Purpose And Scope

- Purpose: Convert a broken or materially unreliable ChatGPT sandbox into an explicit package-first cold-session recovery disposition rather than attempting to keep mutating or reconstructing state inside the damaged runtime.
- Semantic Boundary: Sandbox failure changes the host execution boundary, not Tiinex authority. The latest verified checkpoint carrier remains the recoverable state boundary; post-checkpoint chat context may be supplied later only as a non-authoritative recovery delta.
- Intended Domains: ChatGPT/OpenAI sessions using the qualified ChatGPT Session Continuity And Source Discipline process
- Not Intended For: claiming platform guarantees, treating inherited branch context as durable authority, silently replacing a missing checkpoint with live repository state, or continuing destructive/local mutation after the runtime is judged unreliable

## Input Roles

- broken sandbox recovery state
  - Meaning: the observed host/runtime failure plus the latest verified checkpoint package identity and any already-saved exact transport projection
  - Minimum Count: 1
  - Maximum Count: 1
  - Acquisition Policy: invocation-provided
  - Target Kind: non-artifact

## Output Roles

- cold-session recovery disposition
  - Meaning: operator instructions for starting a fresh ChatGPT conversation/session from the exact checkpoint, transport-text recovery source, and optional post-grounding recovery delta boundary
  - Minimum Count: 1
  - Maximum Count: 1
  - Target Kind: non-artifact

## Lifecycle And Continuity Effects

### Lifecycle Effects

- produce cold-session recovery disposition
  - Target Binding: cold-session recovery disposition
  - Effect: create-new
  - Logical Continuity: no-subject-effect

### Parent Effects

- none

## Relation Effects

- none

## Applicability And Conditions

- Applicability Meaning: applicable when the current ChatGPT sandbox or attachment/runtime surface is observed to be broken, repeatedly failing, materially unresponsive, or otherwise unsafe to trust for continued working-state mutation
- Unknown Meaning: if sandbox health is merely uncertain, first preserve a checkpoint and use the conservative host boundary; do not declare a hard failure solely from chat length or subjective slowness

## Recovery Procedure Boundary

- Stop relying on the current sandbox as a source of durable working state and stop further mutation that would make recovery depend on that runtime.
- Identify the latest checkpoint package whose manufacture/qualification completed before the failure; state its exact identity.
- Prefer a fresh ChatGPT conversation/session grounded from that package rather than treating a branch of the damaged runtime as recovery proof.
- Because ChatGPT branching/new-session behavior may truncate or reset volatile `/mnt/data` state, require the operator to keep/download and re-upload the package when the next session cannot access the prior attachment/runtime surface.
- If exact Tooling-projected transport text was saved with the checkpoint, reuse it unchanged.
- If no transport text was saved before failure, do not improvise semantic routing. Let Tiinex Tooling, VS Code, Viewer, or another package-capable host regenerate the exact transport projection from the checkpoint package when possible.
- The checkpoint package remains independently cold-groundable through its own Start/bootstrap path even when convenience transport text is unavailable.

## Post-Checkpoint Recovery Delta

After the fresh recipient has completed package bootstrap and grounding, a small Markdown recovery delta may be supplied to describe observations or work context that occurred after the checkpoint but before sandbox failure.

The recovery delta:

- is read only after bootstrap and package grounding;
- should be ordinary Markdown/orientation material rather than a forged Tiinex continuity artifact when no qualified artifact was created before failure;
- must identify the checkpoint it is a delta from;
- may summarize post-checkpoint observations, attempted work, unresolved questions, or likely next intent;
- must label inference/uncertainty and must not override qualified package material;
- must not create Handoff routing, Role/recipient authority, Task ownership/currentness, acceptance, completion, or remote-mutation authority;
- should be converted into properly owned durable Tiinex material only after the recovered session re-qualifies what remains relevant.

## Authoring Bindings

- none

## Placement Intent

### Destination Bindings

- none

### Output Placements

- cold-session recovery disposition
  - Output Binding: cold-session recovery disposition
  - Placement Intent: no-materialization

## Interpretation Limits

- Does Not Prove: that the sandbox is globally/permanently broken, that a new Role is semantically required, that the checkpoint is current work merely because it is latest, or that recovery delta prose is authoritative
- Must Not Be Inferred: that branch/new-chat UI state preserves `/mnt/data`, that saved transport text is semantic truth separate from the package, or that missing post-checkpoint context may be reconstructed from model memory without qualification
- Execution Boundary: the exact checkpoint carrier, its Start/bootstrap path, the active host observation, and any separately qualified post-recovery artifacts remain the recovery truth.

---

# Continuity Integrity

- [sha256-base64url-c14n-v2](https://github.com/Tiinex/docs/blob/3988951208eb9a8926e84ab42625d4b42fa00c2d/.topics/.validators/sha256-base64url-c14n-v2.validator.md)
  - Towards: [001-2-1-1-1-1-preserve-attachment-and-host-failure-boundaries.trace.md](001-2-1-1-1-1-preserve-attachment-and-host-failure-boundaries.trace.md)
  - Value: Hx8EuJB6PX1slTf6dqpIwztVwAdqCu6i2KX3w-v63eA

- [sha256-base64url-c14n-v2](https://github.com/Tiinex/docs/blob/3988951208eb9a8926e84ab42625d4b42fa00c2d/.topics/.validators/sha256-base64url-c14n-v2.validator.md)
  - Towards: self
  - Value: EkoxPUUHSGibr0SmeVmD71DVjfGLbMteLqWTUyLS_bc