import test from 'node:test';
import assert from 'node:assert/strict';
import {readFile} from 'node:fs/promises';

const current = new URL('../.topics/.entries/where/chatgpt-web/001-1-1-1-1-chatgpt-web.trace.md', import.meta.url);
const parent = new URL('../.topics/.entries/where/chatgpt-web/001-1-1-1-chatgpt-web.trace.md', import.meta.url);

test('qualified successor adds label–payload parity without widening Target authority',async()=>{
 const s=await readFile(current,'utf8');
 const p=await readFile(parent,'utf8');
 assert.match(s, /## One-Action Label–Intent Parity And Progressive Disclosure/);
 assert.match(s, /same goal, topic, scope, depth and authorization boundary/);
 assert.match(s, /change the visible label to reveal that scope or reduce the payload/);
 assert.match(s, /Unknown proficiency is not beginner identity/);
 assert.match(s, /optional follow-up depth/);
 assert.match(s, /A successful click demonstrates that the host delivered a message/);
 assert.match(s, /do not change canonical Start-only transport/);
 assert.match(s, /- Canonical Identifier: tiinex\.interop\.openai\.entry\.target\.chatgpt-web\.v1/);
 assert.match(s, /only when this exact Target has been qualified for the active host/);
 assert.doesNotMatch(p,/## One-Action Label–Intent Parity And Progressive Disclosure/);
});

test('existing one-action behavior, explicit selection and download-retry boundaries remain',async()=>{
 const s=await readFile(current,'utf8');
 assert.match(s,/## General One-Action Conversational Continuations/);
 assert.match(s,/## ChatGPT Web Carrier File Card And One-Action Retry Affordance/);
 assert.match(s,/## Bounded Carrier-Download Recovery After a Fresh Host Failure/);
 assert.match(s,/If the Target is unselected/);
 assert.match(s,/initial canonical Start-only transport/);
 assert.match(s,/does not execute hidden work/);
 assert.match(s,/## Conversational Speaker And Addressee Routing/);
});
