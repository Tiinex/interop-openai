import test from 'node:test';
import assert from 'node:assert/strict';
import { readFile } from 'node:fs/promises';

test('package and release policy bind the interop-openai repository identity', async () => {
  const pkg=JSON.parse(await readFile(new URL('../package.json', import.meta.url),'utf8'));
  const policy=JSON.parse(await readFile(new URL('../.github/release-policy.json', import.meta.url),'utf8'));
  assert.equal(pkg.name,'@tiinex/interop-openai');
  assert.equal(pkg.repository.url,'git+https://github.com/Tiinex/interop-openai.git');
  assert.equal(policy.repository,'Tiinex/interop-openai');
  const publicModule=await import('../src/index.js');
  assert.deepEqual(Object.keys(publicModule),[]);
});
