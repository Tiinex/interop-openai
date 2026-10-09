#!/usr/bin/env node
import { readFile } from 'node:fs/promises';
import { qualifyChatgptCarrierDelivery } from '../src/host/chatgptCarrierDelivery.js';
const [receiptPath, attachmentPath] = process.argv.slice(2);
if (!receiptPath || !attachmentPath) {
  process.stderr.write('Usage: node tools/verify-chatgpt-carrier-download.mjs <core-manufacture-receipt.json> <download-attachment-path>\n');
  process.exitCode = 2;
} else {
  try {
    const receipt = JSON.parse(await readFile(receiptPath, 'utf8'));
    const result = await qualifyChatgptCarrierDelivery(receipt, attachmentPath);
    process.stdout.write(JSON.stringify(result, null, 2) + '\n');
    if (result.status !== 'ready') process.exitCode = 1;
  } catch (error) {
    process.stderr.write(`Carrier delivery verification failed: ${error.message}\n`);
    process.exitCode = 2;
  }
}
