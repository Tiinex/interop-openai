import test from 'node:test';
import assert from 'node:assert/strict';
import {readFile} from 'node:fs/promises';
const next = new URL('../.topics/.entries/where/chatgpt-web/001-1-1-1-chatgpt-web.trace.md', import.meta.url);
const parent = new URL('../.topics/.entries/where/chatgpt-web/001-1-1-chatgpt-web.trace.md', import.meta.url);
test('new ChatGPT Target successor preserves exact target identity, bounded host gating and first-turn purity',async()=>{
 const s=await readFile(next,'utf8');
 assert.match(s, /- Canonical Identifier: tiinex.interop.openai.entry.target.chatgpt-web.v1/);
 assert.match(s, /## General One-Action Conversational Continuations/);
 assert.match(s, /only when this exact Target has been qualified for the active host/);
 assert.match(s, /If the Target is unselected/);
 assert.match(s, /2–4 concrete and genuinely distinct safe next steps/);
 assert.match(s, /ordinary follow-up user message/);
 assert.match(s, /initial canonical Start-only transport/);
 assert.match(s, /free-text fallback/);
 assert.match(s, /cannot patch ChatGPT's native attachment widget/);
 assert.match(s, /## Bounded Carrier-Download Recovery After a Fresh Host Failure/);
 const p=await readFile(parent,'utf8'); assert.doesNotMatch(p,/## General One-Action Conversational Continuations/);
});
