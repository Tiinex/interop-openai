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
  assert.ok(typed.length >= 7, 'The 001-2 transition lineage includes the host execution fallback successor');
  const fallbackName = '001-2-1-1-1-1-1-1-recover-from-broken-sandbox-through-latest-checkpoint.trace.md';
  assert.ok(typed.includes(fallbackName), 'The fallback must remain a qualified transition successor in the existing lineage');
  const fallback = await readFile(path.join(processDir, fallbackName), 'utf8');
  assert.match(fallback, /Parent Schema: \[tiinex\.transition\.definition\.v1\]/);
  assert.match(fallback, /ClientError/);
  assert.match(fallback, /subprocess\.run/);
  assert.match(fallback, /EMERGENCY RECOVERY/);
  for (const name of typed) {
    const markdown = await readFile(path.join(processDir, name), 'utf8');
    assert.match(markdown, /Current Schema: \[tiinex\.transition\.definition\.v1\]/, name);
    assert.doesNotMatch(markdown, /Current Schema: \[tiinex\.topic\.v1\]/, name);
  }
});
