# Continuity Context

- Envelope Schema: [tiinex.root.v1](https://github.com/Tiinex/docs/blob/302506f90537dc23d6f88ad0bd0bb9c97c6cf9f6/.topics/.schemas/tiinex.root.v1.schema.md)
- Current
  - Current Schema: tiinex.evidence.v1
  - Created At: 2026-10-09 10:05:05
  - Authors: Anchor
  - Why: Make a repeated ChatGPT host delivery convention breach traceable and prevent post-manufacture alias drift.
  - Summary: Core produced correct lineage filename; the assistant manually delivered a short alias. Guard the ChatGPT link basename and bytes against Core receipt.
  - Status: ready/local

---

# ChatGPT Canonical Carrier Filename Drift And Host Download Guard

## Supported Claim Or Question

- Supported Claim Or Question: Why did the ChatGPT-delivered Evidence checkpoint lose its visible `tiinex-031-...` carrier lineage prefix even though Core manufactured the correct canonical carrier?
- Evidence Role: bounded root-cause evidence and host-specific delivery-guard regression; not a claim that filename text provides semantic authority.
- Review Context: On 2026-10-09 Sigma showed ChatGPT's downloads named `Anchor-Evidence-v1-Handoff (1).zip` and `Anchor-Evidence-v1-Continuation.handoff-package.zip` alongside earlier canonical `tiinex-031-...` deliveries, and flagged the loss of a recognizable transport lineage prefix.

## Provenance

- Known Source: screenshot from Sigma; local Core `handoff` manufacture receipt `primaryOutput.projectedFilename` and `humanOutput.primary.filename`; byte comparison between `Anchor-Evidence-v1-Continuation.handoff-package.zip` and the exactly named Core output; current ChatGPT Web Target Entry and ChatGPT continuity Process.
- Preservation Basis: verbatim screenshot preserved as an unedited PNG in Interop OpenAI, SHA-256 `9c0e97e66ace516b117eba083eb2cb06288a9ef7acb038d46c96ff6554fb162c`. Core's original carrier remains unchanged and was never renamed inside Tiinex manufacture.
- Provenance Limits: screenshot records browser download labels, not unseen UI/network behavior or a complete host file history. Earlier assistant messages explicitly described manually creating a shorter named download copy; the browser's own rewriting rules are not established here.

## Evidence Material

- observed-download-name-drift
  - Material: [Unedited ChatGPT download history screenshot](media/chatgpt-20261009-carrier-download-alias-drift.png)
  - Material Kind: bounded screenshot observation
  - Description: Download history shows two short Evidence names juxtaposed with lineage-prefixed Tiinex Handoff Package files. The screenshot demonstrates an operator-visible transport naming regression, not changes to internal carrier lineage.
  - Material Provenance: Sigma's user-provided Chrome screenshot on 2026-10-09, retained byte-for-byte in this Workspace.
  - Material Limits: Does not independently explain whether ChatGPT, Chrome or an assistant selected each filename.
- core-versus-host-identity
  - Material: Core manufactures `tiinex-031-1-2-2-2-2-2-2-2-1-1-1-1-1-1-1-1-1-1-1-1-1-1-1-1-1-anchor-to-anchor.handoff-package.zip`; its `humanOutput.primary.filename` and `primaryOutput.projectedFilename` are identical. The manually generated `Anchor-Evidence-v1-Continuation.handoff-package.zip` has the same SHA-256 `f75fe75152c770b9035c5381c5325f04d3b565472c6a6926f6f51ca7668c8afa` as that canonical file.
  - Material Kind: exact-byte comparison and Core-qualified manufacture receipt
  - Description: Internal continuation metadata and bytes are intact, but delivery presented a shortened basename. The error occurred after canonical manufacture and outside the Core allocation path.
  - Material Provenance: the qualification receipt and files were compared within one bounded sandbox session; Core's own canonical output path and filename match.
  - Material Limits: Byte equality does not make a manually renamed file an acceptable default presentation surface or prove which platform UI mechanism generated earlier filenames.
- host-delivery-guard
  - Material: [Interop OpenAI guarded download verification source](../../../src/host/chatgptCarrierDelivery.js) and [permanent host tests](../../../test/chatgpt-carrier-delivery.test.mjs)
  - Material Kind: host-adapter correction and automated regression
  - Description: Compares the host attachment basename and bytes to Core's existing projected filename and manufactured source. The canonical carrier is accepted; an equal-byte descriptive alias fails with `attachment-basename-differs-from-core-projection`.
  - Material Provenance: executed with the current qualified manufacture receipt, original carrier and short-name alias.
  - Material Limits: This is an optional ChatGPT-specific pre-link check, not a new Core semantic authority; the host must actually run it for the gate to apply.

## Preservation And Fidelity

- Preservation State: the original screenshot, host-specific verifier/test and updated ChatGPT Web Target Entry are preserved in the carried Interop OpenAI Workspace.
- Fidelity Notes: Core package manufacture, carrier lineage dimensions and original ZIP bytes were not changed. The Target Entry now binds presentation to the exact Core-projected basename and prescribes conservative handling of download failures.
- Known Losses: no browser network trace or proof that ChatGPT cannot relabel an uploaded file; future real download reliability remains a host acceptance concern.

## Interpretation Limits

- Does Not Prove: that Core's carrier allocation was defective, that a browser filename grants recipient authority, or that the host download UI is fully reliable.
- Not Yet Used As: published host extension release, package acceptance or a new Core carrier naming policy.
- Must Not Be Treated As: permission to infer semantic Parent, carrier lineage or current work from the filename alone; Core's qualified metadata remains authoritative.
- Need For Review: before every ChatGPT checkpoint link, check `humanOutput.primary.filename` against the actual downloadable basename and original bytes, preserve the canonical prefix even after a download error, and surface a host limitation rather than silently inventing an alias.

---

# Continuity Integrity

- [sha256-base64url-c14n-v2](https://github.com/Tiinex/docs/blob/3988951208eb9a8926e84ab42625d4b42fa00c2d/.topics/.validators/sha256-base64url-c14n-v2.validator.md)
  - Towards: self
  - Value: u50pd6tw8z7MP2-CF9N9N7BSBxT05Engn_KvKBejADw