# Continuity Context

- Envelope Schema: [tiinex.root.v1](https://github.com/Tiinex/docs/blob/302506f90537dc23d6f88ad0bd0bb9c97c6cf9f6/.topics/.schemas/tiinex.root.v1.schema.md)
- Parent
  - Parent Schema: [tiinex.topic.v1](https://github.com/Tiinex/docs/blob/302506f90537dc23d6f88ad0bd0bb9c97c6cf9f6/.topics/.schemas/core/topic/tiinex.topic.v1.schema.md)
  - Created At: 2026-10-04 19:50:00
  - Trace: [001-chatgpt-session-continuity-and-source-discipline-process.trace.md](001-chatgpt-session-continuity-and-source-discipline-process.trace.md)
  - Origin:
    - [relative](001-chatgpt-session-continuity-and-source-discipline-process.trace.md)
- Current
  - Current Schema: [tiinex.topic.v1](https://github.com/Tiinex/docs/blob/302506f90537dc23d6f88ad0bd0bb9c97c6cf9f6/.topics/.schemas/core/topic/tiinex.topic.v1.schema.md)
  - Created At: 2026-10-05 19:24:32
  - Authors: Anchor
  - Why: Turn the existing monolithic ChatGPT profile into visible target-specific steps.
  - Summary: Select the ChatGPT target and apply host survivability constraints without changing portable authority.
  - Status: ready/local

---

# Establish ChatGPT Target And Survivability

## Step Purpose

Establish ChatGPT Web as the selected environment target and apply its survivability assumptions without redefining portable semantics.

## Procedure

- Qualify the ChatGPT Web Target Entry (or equivalent explicit host selection) before using ChatGPT-specific adaptation.
- Treat `/mnt/data`, temporary runtime state, conversation UI state and other host-local storage as operational state rather than durable project authority.
- Preserve important progress through qualified package/checkpoint transport when loss would force meaningful reconstruction from chat chronology.

## Boundary

Host selection changes environment adaptation only; it does not create work transfer, Role authority, Process execution state, acceptance or remote-write authority.

---

# Continuity Integrity

- [sha256-base64url-c14n-v2](https://github.com/Tiinex/docs/blob/3988951208eb9a8926e84ab42625d4b42fa00c2d/.topics/.validators/sha256-base64url-c14n-v2.validator.md)
  - Towards: [001-chatgpt-session-continuity-and-source-discipline-process.trace.md](001-chatgpt-session-continuity-and-source-discipline-process.trace.md)
  - Value: jmM8naTPe-qBjNyugZfmV4TiVcP4dm2jz4NgfZhtkZc

- [sha256-base64url-c14n-v2](https://github.com/Tiinex/docs/blob/3988951208eb9a8926e84ab42625d4b42fa00c2d/.topics/.validators/sha256-base64url-c14n-v2.validator.md)
  - Towards: self
  - Value: qULpC1X-4ebIfLrfeSICnNoMjJnqyGfhohwIh02CkTM
