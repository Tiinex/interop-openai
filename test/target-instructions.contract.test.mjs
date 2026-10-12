import { test } from 'node:test';
import assert from 'node:assert/strict';
import { readFile } from 'node:fs/promises';
import path from 'node:path';

const root = new URL('../', import.meta.url);
const annotationPath = new URL('../.topics/.entries/where/chatgpt-web/002-chatgpt-web-operator-guide.trace.md', import.meta.url);
const terminalAnnotationPath = annotationPath;
const targetPath = new URL('../.topics/.entries/where/chatgpt-web/001-chatgpt-web-target-entry.trace.md', import.meta.url);

test('human-only annotation binds exact target identity, not Parent or Target Material', async () => {
  const annotation = await readFile(annotationPath, 'utf8');
  const target = await readFile(targetPath, 'utf8');
  assert.match(annotation, /- Current Schema: tiinex\.annotation\.v1/);
  assert.match(annotation, /- Target Kind: target-entry/);
  assert.match(annotation, /- Target Identifier: tiinex\.interop\.openai\.entry\.target\.chatgpt-web\.v1/);
  assert.match(target, /- Canonical Identifier: tiinex\.interop\.openai\.entry\.target\.chatgpt-web\.v1/);
  assert.doesNotMatch(annotation, /\n- Parent\s*\n/);
  assert.doesNotMatch(target, /target-instructions\.trace\.md/);
  assert.match(annotation, /operator-only-manual-transport-guidance/);
  assert.match(annotation, /do not add this guide to the recipient's instruction prompt/);
});

test('self-contained current operator guide preserves manual transport and cited privacy boundaries', async () => {
  const text = await readFile(terminalAnnotationPath, 'utf8');
  assert.match(text, /https:\/\/openai\.com\/policies\/terms-of-use\//);
  assert.match(text, /https:\/\/openai\.com\/policies\/privacy-policy\//);
  assert.match(text, /https:\/\/help\.openai\.com\/en\/articles\/7730893-data-controls-in-chatgpt/);
  assert.match(text, /https:\/\/help\.openai\.com\/en\/articles\/5722486-how-your-data-is-used-to-improve-model-performance/);
  assert.match(text, /the human uploads, sends, and downloads it/);
  assert.match(text, /### Already continuing an existing conversation?/);
  assert.match(text, /cannot guarantee a context-free host/);
});

test('README states policy boundary without acting as a current-artifact index', async () => {
  const text = await readFile(new URL('../README.md', import.meta.url), 'utf8');
  assert.match(text, /## ChatGPT Web: manual transport and privacy/);
  assert.match(text, /does not establish that an Annotation is current/);
  assert.match(text, /does not automate the ChatGPT consumer interface/);
});
