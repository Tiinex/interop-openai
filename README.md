# interop-openai

First-party OpenAI interoperability for Tiinex: environment-specific grounding, capability integration, constraints, and automation support over provider-agnostic Tiinex Interop and Core contracts.

## Boundary

OpenAI/ChatGPT-specific host behavior belongs here. Portable Handoff, Parent, Role, Workspace, carrier, grounding, and other shared semantics remain with their normal owners, and Core remains host-neutral.

Current host-specific Process/work material is discovered from qualified `.topics` content through Tiinex Tooling. This README intentionally does not maintain a parallel index of those artifacts or declare which one is current/applicable.

## Distribution

- npm: `@tiinex/interop-openai`
- branch: `master`
- release policy: `.github/release-policy.json`
- bootstrap command after repository/package qualification: `npm run publish:bootstrap`

Publication remains a separate gate from source readiness and technical qualification.
