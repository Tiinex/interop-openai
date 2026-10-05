# Continuity Context

- Envelope Schema: [tiinex.root.v1](https://github.com/Tiinex/docs/blob/302506f90537dc23d6f88ad0bd0bb9c97c6cf9f6/.topics/.schemas/tiinex.root.v1.schema.md)
- Parent
  - Parent Schema: [tiinex.topic.v1](https://github.com/Tiinex/docs/blob/302506f90537dc23d6f88ad0bd0bb9c97c6cf9f6/.topics/.schemas/core/topic/tiinex.topic.v1.schema.md)
  - Created At: 2026-10-05 19:24:32
  - Trace: [001-1-establish-chatgpt-target-and-survivability.trace.md](001-1-establish-chatgpt-target-and-survivability.trace.md)
  - Origin:
    - [relative](001-1-establish-chatgpt-target-and-survivability.trace.md)
- Current
  - Current Schema: [tiinex.topic.v1](https://github.com/Tiinex/docs/blob/302506f90537dc23d6f88ad0bd0bb9c97c6cf9f6/.topics/.schemas/core/topic/tiinex.topic.v1.schema.md)
  - Created At: 2026-10-05 19:24:34
  - Authors: Anchor
  - Why: Make OpenAI source discipline independently visible and testable.
  - Summary: Keep ChatGPT connector use behind qualified carried-source preference and explicit recovery needs.
  - Status: ready/local

---

# Prefer Carried Sources Before Connectors

## Step Purpose

Use exact carried material before live OpenAI/GitHub connector recovery.

## Procedure

- Read qualified carried Workspace/package material first when it already contains the required source.
- Use live GitHub/connector access only when carried material is absent/insufficient or the bounded work explicitly needs current external source state.
- Treat connector availability as host capability, never as semantic authority or remote-write authorization.

## Boundary

A fresher live source must not silently replace exact carried bytes selected by the current Handoff/context.

---

# Continuity Integrity

- [sha256-base64url-c14n-v2](https://github.com/Tiinex/docs/blob/3988951208eb9a8926e84ab42625d4b42fa00c2d/.topics/.validators/sha256-base64url-c14n-v2.validator.md)
  - Towards: [001-1-establish-chatgpt-target-and-survivability.trace.md](001-1-establish-chatgpt-target-and-survivability.trace.md)
  - Value: qULpC1X-4ebIfLrfeSICnNoMjJnqyGfhohwIh02CkTM

- [sha256-base64url-c14n-v2](https://github.com/Tiinex/docs/blob/3988951208eb9a8926e84ab42625d4b42fa00c2d/.topics/.validators/sha256-base64url-c14n-v2.validator.md)
  - Towards: self
  - Value: wIu5S02rSSUNDSapBwkq6CH9p7FrAW3VOjFWeA6nWSw
