import test from 'node:test';
import assert from 'node:assert/strict';
import {readFile} from 'node:fs/promises';
const processRef = new URL('../.topics/.processes/chatgpt-session-continuity/001-2-1-1-1-1-1-2-recover-from-broken-sandbox-through-latest-checkpoint.trace.md', import.meta.url);
const targetRef = new URL('../.topics/.entries/where/chatgpt-web/001-1-1-1-1-1-chatgpt-web.trace.md', import.meta.url);
const processText = () => readFile(processRef, 'utf8');
const targetText = () => readFile(targetRef, 'utf8');
test('host delivery budget resets ONLY after operator-confirmed full client download', async() => {
 const s=await processText();
 assert.match(s,/up to three qualified sibling rebuilds per delivery incident/);
 assert.match(s,/operator-confirmed \*\*successful full download resets the retry budget/);
 assert.match(s,/A `ready` CLI receipt, failed link, branch, or ZIP copy does not reset it/);
 assert.match(s,/same exact Parent/);
});
test('ClientError fork probe is bounded and is not a recovery authority', async()=>{
 const s=await processText();
 assert.match(s,/approximately \*\*five forks\*\*/);
 assert.match(s,/not\*\* a default number of mandatory forks/);
 assert.match(s,/Stop on the first working fork or on the agreed cap/);
 assert.match(s,/A fork retaining prior chat text is useful for human continuity, but \*\*is not a qualification receipt\*\*/);
});
test('proactive checkpoint-first handover does not promote correlation into causation',async()=>{
 const s=await processText();
 assert.match(s,/do \*\*not\*\* claim that conversation age\/branch depth \*causes\* the failure/);
 assert.match(s,/prioritize recovery\/transfer before expanding substantive work/);
 assert.match(s,/prefer controlled early migration to a fresh ChatGPT conversation or project/);
 assert.match(s,/Only after independent bootstrap\/grounding, add a short/);
 assert.match(s,/A new project is a host workspace choice/);
});
test('host-specific button parity and recovery controls do not redefine portable method',async()=>{
 const s=await targetText();
 assert.match(s,/Choice controls|Choose versus perform controls/);
 assert.match(s,/do not silently upgrade it to \*perform an internal cross-Workspace technical review\*/);
 assert.match(s,/Follow the qualified Interop `Recover From Broken Sandbox Through Latest Checkpoint` transition/);
 assert.match(s,/not a host-controlled branch, guaranteed download or automatic transfer/);
 assert.match(s,/Keep canonical first Start-only transport clean/);
});
