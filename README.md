# interop-openai

First-party OpenAI interoperability for Tiinex — environment-specific grounding, capability integration, constraints and automation support over the provider-agnostic Tiinex Interop and Core contracts.

## Turn-2 boundary

Own OpenAI-specific environment grounding, limitations, workarounds and capability integration without making Handoff or bootstrap semantics OpenAI-specific.

The repository is intentionally bootstrapped with a minimal public module while Turn-2 extraction defines and qualifies the real runtime surface. Do not move implementation here merely to populate the package.

## Distribution

- npm: `@tiinex/interop-openai`
- branch: `master`
- release policy: `.github/release-policy.json`
- bootstrap command after repository/package qualification: `npm run publish:bootstrap`

Publication remains a separate gate from source readiness and technical qualification.
