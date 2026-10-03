# interop-openai

First-party OpenAI interoperability for Tiinex — environment-specific grounding, capability integration, constraints and automation support over the provider-agnostic Tiinex Interop and Core contracts.

## Fresh-start boundary

Own OpenAI-specific environment grounding, limitations, workarounds and capability integration without making Handoff or bootstrap semantics OpenAI-specific.

The repository remains intentionally minimal after the Major 017 fresh-start reduction. No historical extraction/refactor Task is current by default; future OpenAI-specific runtime work starts from a new explicit bounded Task with truthful Project ancestry. Do not move implementation here merely to populate the package.

## Distribution

- npm: `@tiinex/interop-openai`
- branch: `master`
- release policy: `.github/release-policy.json`
- bootstrap command after repository/package qualification: `npm run publish:bootstrap`

Publication remains a separate gate from source readiness and technical qualification.
