# Continuity Context

- Envelope Schema: [tiinex.root.v1](https://github.com/Tiinex/docs/blob/302506f90537dc23d6f88ad0bd0bb9c97c6cf9f6/.topics/.schemas/tiinex.root.v1.schema.md)
- Current
  - Current Schema: [tiinex.discovery.monitoring.v1](https://github.com/Tiinex/docs/blob/d0e2b274558c2ee931c84318e4b84411a9da3265/.topics/.schemas/discovery/monitoring/tiinex.discovery.monitoring.v1.schema.md)
  - Created At: 2026-10-13 17:17:00
  - Summary: Manual human-supplied monitoring of discrete ChatGPT Web product-promotion UI observations
  - Status: ready/local

---

# ChatGPT Web Product Promotion Surface Monitoring

## Monitoring Purpose

- Purpose: Preserve an ongoing, source-bounded record of product promotion panels that Sigma voluntarily observes in the ChatGPT Web conversation interface, so individual observations remain inspectable across session forks and can inform future Tiinex OpenAI interoperability review.
- Mode: Passive human-supplied observation record; not an automation, background listener, service integration or crawler. A new observation is recorded only when Sigma deliberately supplies material.

## Monitoring Field

- Field: Discrete ChatGPT Web host UI surfaces promoting OpenAI plan upgrades, product capabilities or workflows within or adjacent to the conversation UI.
- In Scope: Exact voluntarily supplied screenshot images, visible wording, placement and labeling, known presentation order, preserved image identities, and carefully bounded comparison with prior observations.
- Out Of Scope: Unseen UI sessions, model-generated answer content, other accounts, user profiling, advertisements on unrelated websites, web/API scraping, platform targeting code or general product recommendations.

## Cadence Or Trigger

- Trigger: Manual and event-based. Add one Evidence for each independently supplied qualifying screenshot or observed occurrence, directly following the last qualified descendant in this local lineage.
- Cadence: None specified and no scheduled monitoring. Revisit only on Sigma's explicit submission or request.
- Continuity: Record one source event in one Evidence and place its original PNG next to that Evidence using the same lineage numeral. Keep each Evidence parented to the previous qualified lineage artifact; extend the numeric lineage without rewriting ancestors. Any return Handoff takes its own actual causal position.

## Observation Boundary

- Signals: Visible platform UI panel title, copy, CTA, dismiss control, any explicit `Sponsored` label, placement relative to the assistant response and composer, source screenshot bytes, file size and SHA-256.
- Source Integrity: Preserve image bytes unmodified and use source-derived hashes. Treat filename dates as unverified hints rather than independently measured capture times.
- Excluded: Invisible selection rules, frequency estimates from sparse samples, account entitlements, model response influence, and inference of paid sponsorship from a generic in-product promotion. Do not collect extraneous account information or private chats for completeness.
- Ownership: This host-specific observation lives in `Tiinex/interop-openai` and does not change portable Tiinex semantics or instruct the user to bypass OpenAI interface controls.

## Review Or Stop Condition

- Review: Sigma may review, suspend, narrow, close or reauthorize the monitoring scope at any time, especially if observations start involving sensitive people, content, surveillance, access rights or automated capture.
- Stop: Stop recording on Sigma's request, when the host surface no longer fits the declared field, or when evidence acquisition would require unauthorized access or risky collection.
- Retention: Retain each original screenshot alongside its own Evidence only under Sigma's approved Workspace publication/retention decision; a qualified local artifact is not itself GitHub publication.

## Interpretation Limits

- Does Not Prove: OpenAI's intent or reasons for showing a prompt, targeting criteria, third-party advertisement placement, causal influence over model text, a systemic frequency, or any specific user's subscription plan.
- Must Not Be Used As: Authorization to scrape ChatGPT, infer people or accounts, establish legal compliance, or treat a host UI promotion as a `Sponsored` ad without an explicit observed label.
- This Monitoring creates observation scope only; individual `tiinex.evidence.v1` artifacts preserve claim-bearing screenshot records and Sigma retains interpretation and publication decisions.

---

# Continuity Integrity

- [sha256-base64url-c14n-v2](https://github.com/Tiinex/docs/blob/3988951208eb9a8926e84ab42625d4b42fa00c2d/.topics/.validators/sha256-base64url-c14n-v2.validator.md)
  - Towards: self
  - Value:uIb1q6LORhznuIbCvUz6AWnB21FcJXREx4JbQcINb2g
