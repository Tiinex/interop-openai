# Continuity Context

- Envelope Schema: [tiinex.root.v1](https://github.com/Tiinex/docs/blob/302506f90537dc23d6f88ad0bd0bb9c97c6cf9f6/.topics/.schemas/tiinex.root.v1.schema.md)
- Parent
  - Parent Schema: [tiinex.transition.definition.v1](https://github.com/Tiinex/docs/blob/302506f90537dc23d6f88ad0bd0bb9c97c6cf9f6/.topics/.schemas/transition/definition/tiinex.transition.definition.v1.schema.md)
  - Created At: 2026-10-06 16:17:52
  - Trace: [001-2-1-1-1-1-1-recover-from-broken-sandbox-through-latest-checkpoint.trace.md](001-2-1-1-1-1-1-recover-from-broken-sandbox-through-latest-checkpoint.trace.md)
  - Origin:
    - [relative](001-2-1-1-1-1-1-recover-from-broken-sandbox-through-latest-checkpoint.trace.md)
- Current
  - Current Schema: [tiinex.transition.definition.v1](https://github.com/Tiinex/docs/blob/302506f90537dc23d6f88ad0bd0bb9c97c6cf9f6/.topics/.schemas/transition/definition/tiinex.transition.definition.v1.schema.md)
  - Created At: 2026-10-15 23:20:19
  - Authors: Anchor
  - Why: Repeated ChatGPT Web ClientError observations with independently verified Python subprocess Node runtime recovery.
  - Summary: Distinguish failed container execution from independently available Python/Node before emergency recovery
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

- Purpose: Convert a materially unreliable ChatGPT sandbox into a package-first cold-session recovery disposition, after checking whether a separately available safe execution path can preserve existing qualified tooling.
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

- Applicability Meaning: applicable when the current ChatGPT sandbox or attachment/runtime surface is observed to be broken, repeatedly failing, materially unresponsive, or otherwise unsafe to trust for continued working-state mutation; a single failed shell/container surface should first be distinguished from independent Python/Node/file availability when a safe bounded probe is possible
- Unknown Meaning: if sandbox health is merely uncertain, first preserve a checkpoint and use the conservative host boundary; do not declare a hard failure solely from chat length or subjective slowness

## Alternate Local Execution Path Before Declaring Sandbox Failure

When a ChatGPT Web shell/container tool returns `ClientError`, that observation proves only that the *attempted tool surface* failed. It does not, by itself, establish that the session's entire Python runtime, mounted files, or Node.js execution are unavailable.

Before invoking emergency fresh-chat recovery, if safe and appropriate to the active work:

1. Record the exact failing surface and error. Do not repeatedly attempt destructive operations.
2. Independently probe the Python execution tool with a bounded, read-only test (`print("PYTHON_OK")`). A failed or unavailable Python tool does not imply recovery is possible.
3. If Python works, check current file availability and execute a bounded Node version probe via Python `subprocess.run` with an **argument array**, `shell=False`, captured output, a timeout, and an explicit return-code check. Do not claim Node works until the probe succeeds.
4. If the exact Tiinex portable runtime and carrier are present, invoke the already-qualified, exact Node CLI entrypoint through that same Python `subprocess.run` path. Follow the carrier's Start/bootstrap instructions and integrity requirements unchanged; Python is only a transport to the existing CLI.
5. Report the result as `degraded-host / alternate local execution verified` when successful, limited to that session, runtime, and operations tested. Do not infer that the main shell tool has recovered.
6. If Python, Node, required files, or the qualified Tooling path are not available or repeated attempts are unreliable, stop working-state mutation and use the existing `EMERGENCY RECOVERY` checkpoint-first procedure.

Minimal bounded probe in a Python execution tool (the LLM, not the user, runs it when that host exposes Python):

```python
import pathlib
import subprocess
print("PYTHON_OK")
print("FILES_AVAILABLE", pathlib.Path("/mnt/data").is_dir())
result = subprocess.run(
    ["node", "--version"],
    shell=False,
    capture_output=True,
    text=True,
    timeout=10,
)
print("NODE_STATUS", result.returncode, result.stdout.strip(), result.stderr.strip())
```

For Tiinex CLI operations use `subprocess.run(["node", str(qualified_cli_path), "version", "--json"], ...)` after qualifying `qualified_cli_path` from the package's explicit bootstrap instruction. Keep verification of package hashes, source authority, schemas, Parent lineage, carrier identity and operation receipts exactly as before. Do not use Python to reimplement or bypass any Tiinex validation.

This is a conditional ChatGPT Web host-adaptation workaround, not a permanent platform repair, API guarantee, generalized `ClientError` fix, permission escalation, or authority for remote writes. File and process availability must be rechecked after session reset or a new attachment.

## Emergency Recovery Status Contract

When the ChatGPT sandbox/runtime is judged broken or materially unreliable, render a compact operator status projection headed `EMERGENCY RECOVERY` and use the shared status legend. Prefer this shape when the corresponding facts are qualified:

```text
EMERGENCY RECOVERY   ⚠️

SANDBOX?          ❌ BROKEN / UNRELIABLE
CONTINUE HERE?    ❌
NEW CHAT?         ✅ REQUIRED
BRANCH?           ❌ NOT AS RECOVERY AUTHORITY
CHECKPOINT?       ✅ <exact latest safe package/checkpoint>
UPLOAD AFTER?     ✅
TRANSPORT TEXT?   ✅ SAVED / ◯ REGENERATE EXTERNALLY
RECOVERY DELTA?   ◯ IF NEEDED AFTER GROUNDING
HUMAN ACTION?     Start fresh chat + upload exact package
COMMIT / PUSH?    ❌ unless separately required

NEXT?
→ bootstrap exact checkpoint
→ complete package grounding
→ apply bounded recovery delta only afterwards when needed
```

Presentation rules:

- Put explanatory diagnosis/context above the status projection when useful.
- Put the status projection at the bottom of the ChatGPT response so the most actionable state is easiest to find.
- Place the exact Handoff/checkpoint package link immediately under the status projection; place exact saved transport text adjacent when available.
- If a suggested ChatGPT branch/session title is shown, render conversational dimensions with spaces around separators, for example `1 - 1 - 1 (Recovery Checkpoint)`.
- `EMERGENCY RECOVERY` is a host/operator presentation state. It is not a Tiinex Handoff, Role transfer, acceptance, currentness, or mutation authority.

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
  - Towards: [001-2-1-1-1-1-1-recover-from-broken-sandbox-through-latest-checkpoint.trace.md](001-2-1-1-1-1-1-recover-from-broken-sandbox-through-latest-checkpoint.trace.md)
  - Value: EDc6mhtfqz7Ww_yHWwUy-BAo_G9AC0wcvWrL-QURsNU

- [sha256-base64url-c14n-v2](https://github.com/Tiinex/docs/blob/3988951208eb9a8926e84ab42625d4b42fa00c2d/.topics/.validators/sha256-base64url-c14n-v2.validator.md)
  - Towards: self
  - Value: cM55oMBKQ1pXa-t8TMuWrrdY9aAdxLAlVBrRFgQkBRo