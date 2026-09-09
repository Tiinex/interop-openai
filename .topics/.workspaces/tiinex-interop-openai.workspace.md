# Continuity Context

- Envelope Schema: tiinex.root.v1
- Current
  - Current Schema: tiinex.workspace.v1
  - Created At: 2026-09-09 15:48:34
  - Authors: Anchor
  - Why: OpenAI/ChatGPT environment adaptation only. Generic bootstrap/Handoff semantics remain in Interop/Core and must not become OpenAI-specific.
  - Summary: Portable Workspace entrypoint for Tiinex/interop-openai.
  - Status: active/local

---

# Tiinex Interop OpenAI

## Schema Origins

- Tiinex Docs canonical schemas
  - Kind: github-tree
  - Repository: Tiinex/docs
  - Ref: master
  - Root Path: .topics/.schemas
  - Trust Role: canonical-core

## Workspace Entrypoints

### Interop OpenAI

- Source Kind: local-directory
- Repository: Tiinex/interop-openai
- Root Path: .
- Repo Files Discovery: on

## Workspace Boundary

OpenAI/ChatGPT environment adaptation only. Generic bootstrap/Handoff semantics remain in Interop/Core and must not become OpenAI-specific.

---

# Continuity Integrity

- [sha256-base64url-c14n-v2](https://github.com/Tiinex/docs/blob/3988951208eb9a8926e84ab42625d4b42fa00c2d/.topics/.validators/sha256-base64url-c14n-v2.validator.md)
  - Towards: self
  - Value: nMR4yfpt8YcTHGaua8MP8FfcwVgXTKBZzvjmbd9wqjM