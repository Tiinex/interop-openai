import test from 'node:test';
import assert from 'node:assert/strict';
import { mkdtemp, writeFile, copyFile, rm } from 'node:fs/promises';
import { tmpdir } from 'node:os';
import path from 'node:path';
import { qualifyChatgptCarrierDelivery } from '../src/host/chatgptCarrierDelivery.js';

test('canonical projected filename is required even for an identical host-downloaded ZIP', async () => {
  const dir = await mkdtemp(path.join(tmpdir(), 'tiinex-canonical-host-'));
  try {
    const original = path.join(dir, 'tiinex-031-1-anchor-to-anchor.handoff-package.zip');
    const short = path.join(dir, 'Anchor-Evidence-v1-Continuation.handoff-package.zip');
    const copy = path.join(dir, 'deliver', path.basename(original));
    await writeFile(original, 'canonical package bytes');
    await copyFile(original, short);
    const receipt = {
      status: 'ready',
      humanOutput: { primary: { filename: path.basename(original) } },
      primaryOutput: { path: original, projectedFilename: path.basename(original) },
      verification: { packageInspection: 'valid', roundtrip: 'passed' }
    };
    assert.equal((await qualifyChatgptCarrierDelivery(receipt, original)).status, 'ready');
    assert.equal((await qualifyChatgptCarrierDelivery(receipt, short)).reason, 'attachment-basename-differs-from-core-projection');
    await (await import('node:fs/promises')).mkdir(path.dirname(copy));
    await copyFile(original, copy);
    assert.equal((await qualifyChatgptCarrierDelivery(receipt, copy)).status, 'ready');
    await writeFile(copy, 'damaged bytes');
    assert.equal((await qualifyChatgptCarrierDelivery(receipt, copy)).reason, 'attachment-bytes-differ-from-canonical-carrier');
    assert.equal((await qualifyChatgptCarrierDelivery({ ...receipt, verification: { packageInspection: 'invalid', roundtrip: 'passed' } }, original)).reason, 'manufacture-not-qualified');
  } finally { await rm(dir, { recursive: true, force: true }); }
});

test('ChatGPT Web Target Entry grounds exact Core filenames instead of encouraging shortened transport aliases', async () => {
  const { readFile } = await import('node:fs/promises');
  const entry = await readFile(new URL('../.topics/.entries/where/chatgpt-web/001-chatgpt-web-target-entry.trace.md', import.meta.url), 'utf8');
  const process = await readFile(new URL('../.topics/.processes/chatgpt-session-continuity/001-chatgpt-session-continuity-and-source-discipline-process.trace.md', import.meta.url), 'utf8');
  assert.match(entry, /exact Core-projected `humanOutput\.primary\.filename`/);
  assert.match(entry, /verify-chatgpt-carrier-download\.mjs/);
  assert.match(entry, /A ChatGPT download failure does \*\*not\*\* authorize manually renaming/);
  assert.match(process, /attach the canonical Handoff Package produced by Tiinex Tooling/);
});
