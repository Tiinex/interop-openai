import path from 'node:path';
import { readFile } from 'node:fs/promises';
import { createHash } from 'node:crypto';

/**
 * ChatGPT-specific download link check. This deliberately does not infer
 * Tiinex lineage from the filename: it compares the host attachment to the
 * exact Core-projected humanOutput and manufactured carrier bytes.
 */
export async function qualifyChatgptCarrierDelivery(manufactureReceipt = {}, attachmentPath = '') {
  const expectedFilename = String(manufactureReceipt?.humanOutput?.primary?.filename || '');
  const projected = String(manufactureReceipt?.primaryOutput?.projectedFilename || '');
  const canonicalPath = String(manufactureReceipt?.primaryOutput?.path || '');
  const delivered = String(attachmentPath || '');
  const deny = (reason) => Object.freeze({ status: 'blocked', reason, expectedFilename, attachmentFilename: path.basename(delivered) });
  if (manufactureReceipt?.status !== 'ready' || manufactureReceipt?.verification?.packageInspection !== 'valid' || manufactureReceipt?.verification?.roundtrip !== 'passed') return deny('manufacture-not-qualified');
  if (!expectedFilename || !canonicalPath || expectedFilename !== projected || path.basename(canonicalPath) !== expectedFilename) return deny('core-projected-filename-unresolved');
  if (path.basename(delivered) !== expectedFilename) return deny('attachment-basename-differs-from-core-projection');
  let source;
  let candidate;
  try {
    [source, candidate] = await Promise.all([readFile(canonicalPath), readFile(delivered)]);
  } catch {
    return deny('package-bytes-unavailable');
  }
  const sha256 = (bytes) => createHash('sha256').update(bytes).digest('hex');
  if (sha256(source) !== sha256(candidate)) return deny('attachment-bytes-differ-from-canonical-carrier');
  return Object.freeze({ status: 'ready', expectedFilename, attachmentFilename: path.basename(delivered), bytes: candidate.byteLength, sha256: sha256(candidate), boundary: 'host-delivery-presentation-only; no semantic authority from filename' });
}
