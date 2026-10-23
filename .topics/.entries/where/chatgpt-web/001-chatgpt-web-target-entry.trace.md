# Continuity Context

- Envelope Schema: [tiinex.root.v1](https://github.com/Tiinex/docs/blob/302506f90537dc23d6f88ad0bd0bb9c97c6cf9f6/.topics/.schemas/tiinex.root.v1.schema.md)
- Current
  - Current Schema: [tiinex.entry.target.v1](https://github.com/Tiinex/docs/blob/2262a1c4b35e887d116d0d01a864074a9f1641c2/.topics/.schemas/entry/target/tiinex.entry.target.v1.schema.md)
  - Created At: 2026-10-19 12:11:37
  - Authors: Anchor (bounded explicit-session)
  - Why: Prevent inferred participant contact and role-swapping cues from becoming Holder authority
  - Summary: Qualified first response, recovery transport and conservative conversational speaker/addressee routing
  - Status: ready/local

---

# ChatGPT Web

## Entry Identity

- Name: ChatGPT Web
- Version: 1
- Canonical Identifier: tiinex.interop.openai.entry.target.chatgpt-web.v1
- Entry Family: tiinex.target-entry.openai.v1
- Human Label: ChatGPT Web

## Purpose And Scope

- Purpose: Augment a qualified purpose Entry with ChatGPT Web environment knowledge, capability declarations, limitations, continuity guidance and host-specific source discipline.
- In Scope: ChatGPT Web host adaptation, conversation continuity constraints, attachment/package transport, qualified host capability knowledge, OpenAI-specific process references
- Out Of Scope: granting Role authority, selecting work, creating Handoff routing, making a Process applicable merely by reference, authorizing remote mutation, or redefining portable Entry semantics

## Entry Context

- Entry Target: ChatGPT Web execution environment
- Required Context: the separately selected qualified purpose Entry plus any authority-bearing Handoff/Role/Task material required by that bounded activity
- Relevant Context: ChatGPT-specific capability/limitation material and qualified OpenAI host process guidance
- Context Exclusions: chat chronology, attachment presence, model/provider identity, or UI state do not become semantic authority merely because this target is selected

## Entry Method

- Method: qualify this target and its declared Target Material, combine its environment constraints with the separately selected purpose Entry, preserve authority from the controlling Handoff/Role/Task surfaces, and expose host-specific capability/limitation knowledge without changing portable Entry meaning
- Readiness Boundary: the selected purpose Entry remains qualified, required authority remains independently qualified, and the target-specific material needed for the current environment has been qualified or its absence preserved explicitly
- Stop Conditions: target material conflicts with controlling authority; a required host capability is unavailable; the active host cannot be established with sufficient confidence for target-specific behavior

## Target Identity

- Target Handle: chatgpt-web
- Target Kind: interactive-web-host
- Canonical Target Identifier: openai.chatgpt.web
- Provider: OpenAI
- Host: ChatGPT Web
- Human Label: ChatGPT Web

## Target Capabilities

- Provides: conversational interaction, file upload, file attachment delivery, downloadable generated artifacts, conversation branching when exposed by the host, bounded connector/tool surfaces when available
- Limitations: conversation/context limits remain finite; host runtime storage is not durable project authority; capability availability may differ by account/session/client; live host UI state must not be inferred from package content alone

## Target Material

- ChatGPT continuity and source discipline
  - Reference: ../../../.processes/chatgpt-session-continuity/001-chatgpt-session-continuity-and-source-discipline-process.trace.md
  - Purpose: Supply the OpenAI-owned host adaptation for package-first recovery, carried-source preference, attachment delivery, runtime survivability, grounded checkpoint/emergency status presentation and human interaction boundaries.
  - Label: ChatGPT Session Continuity And Source Discipline
  - Qualification Notes: Reference presence makes this material relevant to target grounding; its own applicability/execution semantics remain independently authoritative.

## Operator Continuity Presentation

When this Target Entry is active, qualify the referenced ChatGPT continuity process early enough that checkpoint and broken-sandbox behavior need not be invented under pressure. Target selection makes the host guidance discoverable/relevant; it still does not independently make a Process applicable or grant authority.

Use the grounded status legend for compact operator projections:

- `✅` = yes / recommended / required when stated
- `◯` = optional / not necessary
- `❌` = no / do not
- `⚠️` = attention / degraded or emergency state

For ordinary checkpoint/recovery responses, place the compact status projection near the bottom of the message and place the exact package link immediately below it. Put deeper explanation above so the operator can stop at the bottom when only disposition matters.

For a Tiinex Handoff Package download, display the **exact Core-projected `humanOutput.primary.filename`** and link the verified `primaryOutput.path` without a descriptive/short-name alias. Before offering an attachment, compare its basename and bytes with the actual Core manufacture receipt; use the bounded `tools/verify-chatgpt-carrier-download.mjs` host check when available. A ChatGPT download failure does **not** authorize manually renaming an otherwise canonical carrier: retry the canonical link or explicitly report the host limitation. If the browser itself relabels a saved/downloaded attachment, distinguish that observable UI label from the original Core-projected filename. This rule guards host presentation, not carrier lineage authority or semantic Parent resolution.

## First-Response And Successor-Transport Verification

- First Response: Treat the carried `Start` as an execution prerequisite, not an optional reference. Before asserting that a newly received package, Entry or Session Role is qualified, directly read Start and follow its exact bootstrap/orient commands. If the host cannot execute the first-contact check, state that limitation and do not imply it already passed. A later successful replay is a later result, never proof of a successful first response.
- Successor Transport: Before offering the next ChatGPT Web continuation package to a person, generate and review transport using the existing qualified Core Guided Entry/transport operation, with the operator-confirmed purpose Entry, Target, Primary Session Role and participant selections required for the intended next session. Compare the resulting full transport against the confirmed choices. A generic Start-only transport is not equivalent to that explicitly selected Guided Entry transport. A completed pointerless checkpoint does not establish that the operator wants another Guided Entry: do not automatically propose or generate selected Entry/Role transport merely because the checkpoint exists. Offer the verified checkpoint without choosing the next session method; provide Guided Entry transport only for operator-confirmed selections and formal Handoff routing only when separately qualified. Do not silently omit choices known to be confirmed for the requested continuation; if they cannot be qualified, state the blocker and request selection instead of manufacturing identity.
- Authority Limit: These are first-contact and presentation controls. They do not modify a carrier, preserve an unconfirmed session role automatically, select a Handoff route, establish a holder or participant, accept work, or grant remote mutations. Record failed first-contact order as failed even when a later Tooling replay succeeds.

## Conversational Speaker And Addressee Routing

This is a **ChatGPT conversation presentation rule**, not a Holder Relationship, Role assignment, Handoff endpoint or delegation rule. A Role selected as context may guide who an answer is *addressed to*; it cannot by itself establish that the person writing is its holder. Preserve the canonical `explicit-session`, `explicit-participation` and `handoff` boundaries separately.

- **Explicit first:** When the operator has explicitly selected and qualified their own participant Role for the receiving chat, address that operator in that bounded capacity. When the current speaker expressly identifies a different Role/person in an unquoted conversation turn (for example `Axiom:`), treat that as a **speaker cue for communication** while separately qualifying any authority-bearing claim. A prefix in pasted, quoted or forwarded material is not automatically a live speaker change.
- **Ordinary default:** Without an explicit operator-participant binding or newer speaker cue, the **first selected Participant Role is the tentative primary conversational contact**. Address concise results and decision-relevant information with its preferences, but do not assert that the physical operator is its holder, that it has accepted work or that other participants have received the message. Other selected participants may be reached through that contact or may speak directly later; neither possibility is established by order alone.
- **Formal Handoff fallback:** When a qualified, selected **formal Handoff** has no declared participants, its qualified `From` Role/capacity may be a **tentative conversational contact**, if it is material and relevant. This is not evidence that the sender is currently typing, is physically present, or accepted the Handoff. Do not use package uploader, transport sender, `Authors`, or a carrier filename as a substitute for qualified `From`. When no grounded Role contact exists, address the chat operator neutrally.
- **Role swaps:** In a live conversation, an unquoted explicit prefix or self-identification can update the **current conversational speaker** for following unprefixed messages until superseded or corrected. Never silently rewrite the persistent operator/holder identity, participant assignment or Handoff endpoints. If a switch affects acceptance, authorization or irreversible action, require the independently qualified binding or ask for clarification; do not treat an ambiguous label as consent.
- **Communication:** Report progress, uncertainty, blockers and the next *actual* human gate to the current conversational contact; do not force that contact to debug routine Tooling. Where identities are tentative, speak naturally without presenting the guess as a verified fact. Avoid repeat confirmation for ordinary low-risk status; seek clarification only when the distinction materially affects a decision or action.

For a broken/unreliable ChatGPT sandbox, use the qualified `Recover From Broken Sandbox Through Latest Checkpoint` transition and its `EMERGENCY RECOVERY` projection rather than improvising a new recovery flow. A fresh chat plus exact checkpoint package is the conservative recovery path; branch context is not durable recovery authority.

When suggesting ChatGPT conversation titles, render branch dimensions with spaces around separators, for example `1 - 1 - 1 (Recovery Checkpoint)`. This is host-facing presentation only and does not alter Tiinex carrier dimensions or semantic lineage.

## Target Compatibility

- Compatibility Notes: May augment portable Session Entries such as Start, Explore and Resume when ChatGPT Web is the active execution environment; future discovery should prefer qualified capability/contract matching over hardcoded per-Entry allowlists.

## Interpretation Limits

- Does Not Establish: Handoff routing, recipient authority, Role-holder state, participant authority, Process applicability, task ownership, work transfer, remote-write permission, acceptance, completion, or permanent host durability
- Must Not Be Inferred: that every ChatGPT session exposes every declared capability; that branching or attachments are always available; that OpenAI-specific behavior belongs in Core or portable Native

## Portability Notes

- Portable Semantics: none beyond the inherited Target Entry composition contract; this artifact intentionally owns ChatGPT Web-specific environment meaning
- Environment Assumptions: an active ChatGPT Web session whose relevant host capabilities can be observed or qualified
- Non-Portable Details: OpenAI/ChatGPT product behavior, conversation branching, attachment/download affordances, connector/tool availability, and host runtime survivability

---

# Continuity Integrity

- [sha256-base64url-c14n-v2](https://github.com/Tiinex/docs/blob/3988951208eb9a8926e84ab42625d4b42fa00c2d/.topics/.validators/sha256-base64url-c14n-v2.validator.md)
  - Towards: self
  - Value: lk5q5jVAeMxb4I29BuNj2yPMSY0KXU5kPSjDCBjSYtM