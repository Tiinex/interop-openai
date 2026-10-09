import test from 'node:test';
import assert from 'node:assert/strict';
import { readFile, readdir } from 'node:fs/promises';
import path from 'node:path';
import { fileURLToPath } from 'node:url';

const root = path.dirname(fileURLToPath(import.meta.url));
const processDir = path.resolve(root, '../.topics/.processes/chatgpt-session-continuity');

test('ChatGPT continuity process keeps OpenAI semantics local and uses Transition Definitions for corrected executable topology', async () => {
  const names = (await readdir(processDir)).sort();
  assert.ok(names.includes('001-1-establish-chatgpt-target-and-survivability.trace.md'));
  assert.ok(names.includes('001-2-establish-chatgpt-target-and-survivability.trace.md'));
  const legacy = await readFile(path.join(processDir, '001-1-establish-chatgpt-target-and-survivability.trace.md'), 'utf8');
  const typed = names.filter((name) => /^001-2(?:-|\b)/.test(name));
  assert.match(legacy, /Current Schema: \[tiinex\.transition\.definition\.v1\]/, 'The first family transition is already native v1, not a pre-migration Topic');
  assert.equal(typed.length, 6, 'Six qualified 001-2 transition definitions are currently carried');
  for (const name of typed) {
    const markdown = await readFile(path.join(processDir, name), 'utf8');
    assert.match(markdown, /Current Schema: \[tiinex\.transition\.definition\.v1\]/, name);
    assert.doesNotMatch(markdown, /Current Schema: \[tiinex\.topic\.v1\]/, name);
  }
});
