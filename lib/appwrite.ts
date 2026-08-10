import crypto from "crypto";
import { Client, Storage, ID, Permission, Role } from "node-appwrite";
import { InputFile } from "node-appwrite/file";
import type { DisclosureCategory, DisclosureFile } from "@/lib/disclosureShared";

export {
  DISCLOSURE_CATEGORIES,
  isDisclosureCategory,
  ALLOWED_CONTENT_TYPES,
  MAX_FILE_SIZE,
} from "@/lib/disclosureShared";
export type { DisclosureCategory, DisclosureFile } from "@/lib/disclosureShared";

function requireEnv(name: string): string {
  const value = process.env[name];
  if (!value) {
    throw new Error(`Missing required environment variable: ${name}`);
  }
  return value;
}

function isNotFound(err: unknown): boolean {
  return (err as { code?: number })?.code === 404;
}

// Appwrite serves the manifest file with Content-Type: application/json
// (inferred from its .json filename), and node-appwrite's client auto-parses
// JSON responses regardless of the requested response type — so
// getFileDownload returns already-parsed data here, not raw bytes. Handle
// both that shape and a raw ArrayBuffer/Buffer as a fallback.
function parseManifestResponse(data: unknown): DisclosureFile[] {
  if (Array.isArray(data)) return data as DisclosureFile[];
  if (typeof data === "string") return data ? (JSON.parse(data) as DisclosureFile[]) : [];
  let buffer: Buffer | null = null;
  if (Buffer.isBuffer(data)) buffer = data;
  else if (data instanceof ArrayBuffer) buffer = Buffer.from(data);
  else if (ArrayBuffer.isView(data)) {
    const view = data as ArrayBufferView;
    buffer = Buffer.from(view.buffer, view.byteOffset, view.byteLength);
  }
  if (buffer) {
    const text = buffer.toString("utf-8");
    return text ? (JSON.parse(text) as DisclosureFile[]) : [];
  }
  throw new Error("Unexpected manifest content type returned by storage SDK.");
}

let cachedClient: Client | null = null;

function getClient(): Client {
  if (cachedClient) return cachedClient;
  cachedClient = new Client()
    .setEndpoint(requireEnv("APPWRITE_ENDPOINT"))
    .setProject(requireEnv("APPWRITE_PROJECT_ID"))
    .setKey(requireEnv("APPWRITE_API_KEY"));
  return cachedClient;
}

function getStorage(): Storage {
  return new Storage(getClient());
}

function getBucketId(): string {
  return requireEnv("APPWRITE_BUCKET_ID");
}

// Deterministic, short, valid Appwrite file ID for the per-category manifest file.
function manifestFileId(category: DisclosureCategory): string {
  return `manifest_${crypto.createHash("sha1").update(category).digest("hex").slice(0, 20)}`;
}

export async function getManifest(category: DisclosureCategory): Promise<DisclosureFile[]> {
  const storage = getStorage();
  try {
    const result = await storage.getFileDownload({
      bucketId: getBucketId(),
      fileId: manifestFileId(category),
    });
    const parsed = parseManifestResponse(result);
    return parsed.sort(
      (a, b) => new Date(b.uploadedAt).getTime() - new Date(a.uploadedAt).getTime()
    );
  } catch (err: unknown) {
    if (isNotFound(err)) return [];
    throw err;
  }
}

export async function getManifestSafe(category: DisclosureCategory): Promise<DisclosureFile[]> {
  try {
    return await getManifest(category);
  } catch (err) {
    console.error(`Failed to load disclosure manifest for "${category}":`, err);
    return [];
  }
}

async function saveManifest(category: DisclosureCategory, files: DisclosureFile[]): Promise<void> {
  const storage = getStorage();
  const bucketId = getBucketId();
  const fileId = manifestFileId(category);
  const buffer = Buffer.from(JSON.stringify(files, null, 2), "utf-8");

  // Appwrite Storage has no in-place content update, so replace by delete + recreate.
  try {
    await storage.deleteFile({ bucketId, fileId });
  } catch (err) {
    if (!isNotFound(err)) throw err;
  }

  await storage.createFile({
    bucketId,
    fileId,
    file: InputFile.fromBuffer(buffer, `${fileId}.json`),
  });
}

export async function addManifestEntry(
  category: DisclosureCategory,
  entry: DisclosureFile
): Promise<void> {
  const files = await getManifest(category);
  files.push(entry);
  await saveManifest(category, files);
}

export async function removeManifestEntry(
  category: DisclosureCategory,
  id: string
): Promise<DisclosureFile | null> {
  const files = await getManifest(category);
  const index = files.findIndex((f) => f.id === id);
  if (index === -1) return null;
  const [removed] = files.splice(index, 1);
  await saveManifest(category, files);
  return removed;
}

export async function uploadDocument(buffer: Buffer, filename: string): Promise<{ id: string }> {
  const storage = getStorage();
  const id = ID.unique();
  await storage.createFile({
    bucketId: getBucketId(),
    fileId: id,
    file: InputFile.fromBuffer(buffer, filename),
    permissions: [Permission.read(Role.any())],
  });
  return { id };
}

export async function deleteDocument(id: string): Promise<void> {
  const storage = getStorage();
  try {
    await storage.deleteFile({ bucketId: getBucketId(), fileId: id });
  } catch (err) {
    if (!isNotFound(err)) throw err;
  }
}

export function getPublicDownloadUrl(id: string): string {
  const endpoint = requireEnv("APPWRITE_ENDPOINT");
  const projectId = requireEnv("APPWRITE_PROJECT_ID");
  const bucketId = getBucketId();
  return `${endpoint}/storage/buckets/${encodeURIComponent(bucketId)}/files/${encodeURIComponent(
    id
  )}/download?project=${encodeURIComponent(projectId)}`;
}
