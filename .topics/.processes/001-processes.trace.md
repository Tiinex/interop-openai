# Continuity Context

- Envelope Schema: [tiinex.root.v1](https://github.com/Tiinex/docs/blob/302506f90537dc23d6f88ad0bd0bb9c97c6cf9f6/.topics/.schemas/tiinex.root.v1.schema.md)
- Current
  - Current Schema: [tiinex.topic.v1](https://github.com/Tiinex/docs/blob/302506f90537dc23d6f88ad0bd0bb9c97c6cf9f6/.topics/.schemas/core/topic/tiinex.topic.v1.schema.md)
  - Created At: 2026-10-04 01:18:45
  - Authors: Anchor
  - Why: Keep provider-specific grounding, survivability, and capability discipline out of Core and portable process authority.
  - Summary: OpenAI/ChatGPT-specific process catalog for environment adaptation.
  - Status: ready/local

---

# OpenAI Interop Processes

## Current Read

This topic is the `interop-openai` Workspace-local process catalog for OpenAI/ChatGPT environment adaptation.

Portable Tiinex semantics remain owned by their semantic owners and shared host-neutral mechanics remain in Core. Processes here describe only environment-specific operating constraints, capability mapping, survivability behavior, and workarounds needed when OpenAI/ChatGPT is the selected target.

## Design Direction

Keep this catalog small. Do not copy portable Handoff, Parent, Role, Workspace, carrier, or grounding semantics here. An OpenAI-specific process may add host constraints around those semantics, but must remain removable/selectable without changing Core meaning.

Process catalog presence does not establish applicability. The consuming session or another qualified context must explicitly select the relevant host adaptation.

## Next Artifacts

- ChatGPT Session Continuity And Source Discipline: volatile runtime state, carried-source preference, connector boundaries, and durable checkpoint presentation for ChatGPT-hosted work.

---

# Continuity Integrity

- [sha256-base64url-c14n-v2](https://github.com/Tiinex/docs/blob/3988951208eb9a8926e84ab42625d4b42fa00c2d/.topics/.validators/sha256-base64url-c14n-v2.validator.md)
  - Towards: self
  - Value: s23i4qxt63JcVDtQboSZOJwefn7XjOCFgU00ehtN9Cw