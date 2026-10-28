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
  - Created At: 2026-10-28 16:29:53
  - Authors: Anchor
  - Summary: ChatGPT Web bounded download-failure retries, ClientError fork probes, confirmed-checkpoint recovery and early fresh-session handover
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

## Bounded Host Availability Recovery And Early Exit (ChatGPT Web Only)

This is a qualified ChatGPT Web **operational escalation** refinement, not a universal Tiinex Handoff or package mechanic. It applies to the ChatGPT host/attachment/runtime surface, independently of the portable project's substantive work. The previous conservative *fresh-session package-first* disposition remains controlling once a sandbox is truly unreliable. A **fork** may be tried earlier as a bounded **host-availability probe**, never as recovered Source authority. The exact original checkpoint and its own Start/bootstrap remain necessary.

### Distinguish observations and hypotheses

- **Observed operator reports:** successful qualifying local manufacture/ZIP/roundtrip/orientation does not guarantee that a ChatGPT download link works; several newer links failed with `This action couldn't be completed. Please try again`; in earlier separate episodes freshly manufactured full siblings worked; later, after multiple failures, branching and re-uploading the last actually downloaded full recovery yielded one successful restored delivery. The operator also reported needing approximately five forks from one point to get past an intermittent `ClientError`. These are scoped conversation observations, not complete host logs, measured probabilities, a universal five-fork threshold, or proof of an internal ChatGPT defect.
- **Hypothesis only:** extended conversations and repeated forks may correlate with increasing host failure likelihood. Without denominators, independent sessions or host telemetry, do **not** claim that conversation age/branch depth *causes* the failure, assign a failure rate or infer a platform-wide limit.
- Treat `ClientError` (tool/runtime invocation failure), attachment/download failure (client cannot fetch published artifact), and missing/insufficient Source evidence as **different incidents**. Recheck the smallest safe `container.exec` and `python.exec` calls before diagnosing the entire sandbox; a successful call now does not retroactively validate any failed call.

### Delivery state and bounded retries

1. Maintain a small per-**delivery incident** tally: last operator-confirmed downloaded full carrier SHA-256, latest qualified undelivered carrier identity, exact transport Parent, intended Workspace snapshot SHA set, failure symptom, attempts and operator outcome. **Technical package readiness is not delivery success.** Use the last *confirmed downloaded* package as recovery base, not merely the newest manufactured ZIP.
2. For a newly observed download failure, offer a one-action retry near the verified link if qualified host UI supports it. On user authorization, re-manufacture one full sibling at a time under the **same exact Parent** with the same complete Workspace archive SHA set, independently qualified ZIP/Package V1/roundtrip/bootstrap/orient. Never copy/rename a ZIP as the new sibling, invent free dimensions, mutate Source to fix a host link, or claim the old link was repaired. Count attempts as actually attempted sibling manufactures, separately from the failed initial delivery.
3. Use a conservative **up to three qualified sibling rebuilds per delivery incident** as the existing provisional operating cap; do not silently exceed an explicit per-turn cap. A separately authorized exception must have an explicit new budget and evidence trail. An operator-confirmed **successful full download resets the retry budget for a subsequent separate incident**, not the cumulative history of host instability. A `ready` CLI receipt, failed link, branch, or ZIP copy does not reset it.
4. When multiple consecutive host failures occur or the budget is close to exhaustion, **prioritize recovery/transfer before expanding substantive work**, even if local tools still work. Freeze source mutations if working-state survivability is uncertain; ensure a qualified full checkpoint exists and identify the latest actually downloaded backup. Do not wait for a complete terminal failure. Report a bounded `DELIVERY_BLOCKED` state if the permitted attempts are exhausted.

### Fork diagnosis, next session, and early handover

- If ordinary retry is ineffective but the conversation can still be branched, propose a **bounded fork test** from one stable point, with operator authorization. Re-upload the latest **confirmed downloaded** full recovery in the fork and validate it before reconstructing any post-checkpoint delta. The observed approximately **five forks** is a provisional local diagnostic ceiling for repeated intermittent `ClientError` probes when explicitly chosen; it is **not** a default number of mandatory forks, a guarantee, or a reason to repeatedly fork without a cap. Stop on the first working fork or on the agreed cap. Repeated ClientErrors or no safe accessible checkpoint trigger handover preparation earlier, not an infinite fork tree.
- A fork retaining prior chat text is useful for human continuity, but **is not a qualification receipt**. The receiver verifies carried Source and preserves any new post-checkpoint observations with honest provenance. Do not ask the same operator to paste the assistant's own context back when the new branch already has relevant conversation history; avoid a second redundant transport instruction inside the canonical first Start-only message.
- If successive forks become unreliable, or downloads remain blocked near a practical context/host limit, **prefer controlled early migration to a fresh ChatGPT conversation or project**, initiated by the operator. A new project is a host workspace choice, **not** a Tiinex Project/Handoff authority. Package-first: use the latest confirmed usable full ZIP and its canonical Start-only initial transport. Only after independent bootstrap/grounding, add a short **non-authoritative recovery delta bridge** describing the gap since that ZIP, with observation, hypotheses, unresolved decisions and Source/Target ownership clearly separated. Never put evaluator answers, trial-specific prompts or internal Sigma diagnostics in a neutral recipient carrier.
- If no carrier can be delivered, explicitly state the recovery limit and preserve available verified source/checkpoint identities; do **not** claim that transport text alone equals a full Tiinex recovery or that file links can be repaired from this chat.

### Falsification and authority limits

Keep a small observation ledger of confirmed full downloads, failures, attempted retries, fork outcomes and ClientError tool-health checks. Test the **new host path** separately from technical package integrity; no CLI test can establish client downloadability or future UI availability. Treat long-conversation risk as a working hypothesis that should be evaluated against new independently observed sessions, not a hard trigger for all users. No automatic transfer, Role selection, Process applicability, remote mutation or Sigma acceptance is created by this host recovery guidance.

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

---

# Continuity Integrity

- [sha256-base64url-c14n-v2](https://github.com/Tiinex/docs/blob/3988951208eb9a8926e84ab42625d4b42fa00c2d/.topics/.validators/sha256-base64url-c14n-v2.validator.md)
  - Towards: [001-2-1-1-1-1-1-recover-from-broken-sandbox-through-latest-checkpoint.trace.md](001-2-1-1-1-1-1-recover-from-broken-sandbox-through-latest-checkpoint.trace.md)
  - Value: EDc6mhtfqz7Ww_yHWwUy-BAo_G9AC0wcvWrL-QURsNU

- [sha256-base64url-c14n-v2](https://github.com/Tiinex/docs/blob/3988951208eb9a8926e84ab42625d4b42fa00c2d/.topics/.validators/sha256-base64url-c14n-v2.validator.md)
  - Towards: self
  - Value: ll-lz94__hbZdxQrdmKubtMVXJV6x_4F3WPyCaxsEqA