# interop-openai

First-party OpenAI interoperability for Tiinex: environment-specific grounding, capability integration, constraints, and automation support over provider-agnostic Tiinex Interop and Core contracts.

## Boundary

OpenAI/ChatGPT-specific host behavior belongs here. Portable Handoff, Parent, Role, Workspace, carrier, grounding, and other shared semantics remain with their normal owners, and Core remains host-neutral.

Current host-specific Process/work material is discovered from qualified `.topics` content through Tiinex Tooling. This README intentionally does not maintain a parallel index of those artifacts or declare which one is current/applicable.

## ChatGPT Web: manual transport and privacy

Tiinex prepares qualified Handoff Packages and exact transport text; **the person using ChatGPT Web** uploads, sends, and downloads them through the service's normal UI. This interoperability package does not automate the ChatGPT consumer interface, scrape conversations, or bypass rate limits or platform controls. A future official API integration would have its own separate Target and terms.

Before transferring material, check your organization’s information-handling requirements and the provider's current terms. Important first-party references:

- [OpenAI Terms of Use — What you cannot do; Our use of content](https://openai.com/policies/terms-of-use/) and [European terms where applicable](https://openai.com/policies/eu-terms-of-use/).
- [OpenAI Privacy Policy — How we use personal data](https://openai.com/policies/privacy-policy/).
- [ChatGPT Data Controls](https://help.openai.com/en/articles/7730893-data-controls-in-chatgpt) and [feedback/model improvement](https://help.openai.com/en/articles/5722486-how-your-data-is-used-to-improve-model-performance).

For sensitive work, consider turning off optional model improvement, Memory and personalization **when available**, and avoid optional response ratings, answer comparisons or surveys unless their data implications are understood. These are distinct controls; neither this advice nor a fresh project guarantees no logging, no hidden context or confidentiality. Business and Enterprise accounts may have different contractual protections and defaults. Do not upload confidential material without approval.

Platform-specific **operator-only** preparation may be expressed as a qualified Annotation bound to the Target Entry by its exact Target Identifier. It is intended for a human preview, not for automatic LLM grounding or clipboard transport. This README does not establish that an Annotation is current, qualified, applicable or a substitute for Tiinex discovery.

## Distribution

- npm: `@tiinex/interop-openai`
- branch: `master`
- release policy: `.github/release-policy.json`
- bootstrap command after repository/package qualification: `npm run publish:bootstrap`

Publication remains a separate gate from source readiness and technical qualification.
