# Continuity Context

- Envelope Schema: [tiinex.root.v1](https://github.com/Tiinex/docs/blob/302506f90537dc23d6f88ad0bd0bb9c97c6cf9f6/.topics/.schemas/tiinex.root.v1.schema.md)
- Parent
  - Parent Schema: [tiinex.topic.v1](https://github.com/Tiinex/docs/blob/302506f90537dc23d6f88ad0bd0bb9c97c6cf9f6/.topics/.schemas/core/topic/tiinex.topic.v1.schema.md)
  - Created At: 2026-10-04 01:18:45
  - Trace: [001-processes.trace.md](../001-processes.trace.md)
  - Origin:
    - [relative](../001-processes.trace.md)
- Current
  - Current Schema: [tiinex.topic.v1](https://github.com/Tiinex/docs/blob/302506f90537dc23d6f88ad0bd0bb9c97c6cf9f6/.topics/.schemas/core/topic/tiinex.topic.v1.schema.md)
  - Created At: 2026-10-04 01:18:46
  - Authors: Anchor
  - Why: Keep ChatGPT-specific operating constraints groundable without tainting Core or portable Native semantics.
  - Summary: OpenAI/ChatGPT host adaptation for volatile runtime state, carried-source preference, connector boundaries, and durable checkpoints.
  - Status: ready/local

---

# ChatGPT Session Continuity And Source Discipline

## Purpose

Adapt portable session grounding and continuity behavior to the ChatGPT/OpenAI host without making those host details part of Core or portable Tiinex semantics.

This process is an environment profile. It does not redefine Handoff, carrier, Parent, Role, Workspace, Process applicability, or authority.

## When This Process Applies

Apply this process only when the active execution target is ChatGPT/OpenAI and the session explicitly selects or carries this host adaptation as relevant grounding material.

Do not infer applicability merely because an OpenAI package, connector, chat transcript, or model is present.

## Runtime Survivability

- Treat the host's working filesystem and temporary runtime paths, including `/mnt/data`, as operational state rather than durable project authority.
- Important progress must not exist only in volatile runtime state when loss would require reconstructing meaningful work from chat chronology.
- When a stable or risk-sensitive checkpoint is reached, produce the qualified carrier/checkpoint as a user-visible conversation attachment or other explicitly durable transport surface supported by the host.
- A checkpoint should be driven by meaningful progress and survivability risk, not by every message or tool call.
- Do not claim that host retention guarantees semantic completeness; the carrier remains the explicit recoverable state boundary.

## Carried Source Preference

When a Handoff Package or Workspace representation already carries qualified material needed by the current work:

1. read the carried qualified material first;
2. use carried route/cache material when that is the qualified representation;
3. use immutable external recovery only when carried material is absent or insufficient;
4. use live connectors only as the later recovery/source-access option.

Do not fetch a carried Parent or Workspace artifact again from GitHub merely because the connector is convenient. Live repository state may differ from the exact carried bytes selected by the current handoff/context.

## GitHub Connector Boundary

- The ChatGPT GitHub connector is a host capability, not semantic authority.
- Repository read/search is a recovery/source-access mechanism when qualified carried material is unavailable or an explicit current external source is required.
- Do not use connector search as broad repository archaeology to compensate for missing grounding.
- Remote mutation through a connector is not implied by connector availability, repository access, or `grounded-to-act` state. It requires a separate explicit bounded remote-mutation authorization and the applicable landing/execution process.
- When a local/carried working copy is the selected work surface, keep edits local until the explicit landing boundary instead of silently mutating the remote repository.

## ChatGPT Handoff Delivery

When a Tiinex carrier is delivered through ChatGPT:

- attach the canonical Handoff Package produced by Tiinex Tooling;
- render or copy the exact Tooling-projected routing/transport text adjacent to the package without paraphrasing or adding semantic hints;
- do not add expected answers, current-work summaries, Role labels, process lists, acceptance criteria, or other host-authored grounding context to a blind cold-start transport;
- keep tester observations and acceptance criteria outside the recipient transport so the receiving session must recover them from qualified carried authority rather than the prompt.

ChatGPT UI affordances do not authorize changing that projection. If the exact Tooling transport text cannot be presented, preserve that as a transport limitation rather than inventing replacement routing prose.

## Conversation And Attachment Boundary

- Chat messages may supply human intent, feedback, clarification, acceptance, or host-operating facts, but they are not a substitute for durable Tiinex authority when a reusable rule or work state must survive reduction/cold start.
- Files returned or attached in the conversation may serve as transport/recovery surfaces when their identity is explicit; attachment presence alone does not make their contents authoritative or current.
- If a user supplies visual recordings for acceptance/testing, treat them as bounded observational evidence. Do not infer missing audio or hidden interaction state.

## Human Interaction Boundary

Prefer a small number of meaningful human acceptance checks over repeated confirmation turns. Ask for human action when the process truly reaches a human gate, an external landing/push is required, or the host cannot safely perform the action itself.

Do not make the human act as hidden memory for state that should have been preserved in a carrier, Process, Role, Decision, or other durable artifact.

## Failure Policy

If the host cannot access a required carried file, connector, attachment, or local working copy, preserve the exact missing capability/material as a blocker. Do not substitute a different live source silently.

If host/runtime behavior is uncertain, state the uncertainty and use the more conservative survivability boundary rather than inventing a platform guarantee.

## Interpretation Limits

- Does Not Establish: that ChatGPT storage is permanently durable, that GitHub connector results are authoritative for carried state, that connector write is authorized, that a user message is a Handoff, or that an attachment is accepted/current semantic authority.
- Must Not Be Used To Claim: that OpenAI-specific behavior belongs in Core; that every ChatGPT session requires GitHub; that every turn requires a checkpoint; or that this process applies when another host is active.

---

# Continuity Integrity

- [sha256-base64url-c14n-v2](https://github.com/Tiinex/docs/blob/3988951208eb9a8926e84ab42625d4b42fa00c2d/.topics/.validators/sha256-base64url-c14n-v2.validator.md)
  - Towards: [001-processes.trace.md](../001-processes.trace.md)
  - Value: s23i4qxt63JcVDtQboSZOJwefn7XjOCFgU00ehtN9Cw

- [sha256-base64url-c14n-v2](https://github.com/Tiinex/docs/blob/3988951208eb9a8926e84ab42625d4b42fa00c2d/.topics/.validators/sha256-base64url-c14n-v2.validator.md)
  - Towards: self
  - Value: TSGvMPuqZj-EGD81PtZTi68j3E_Ja1_-ldyRITDVA9w
