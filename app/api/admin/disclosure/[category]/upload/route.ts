import { NextRequest, NextResponse } from "next/server";
import { isAuthenticatedRequest } from "@/lib/adminAuth";
import {
  ALLOWED_CONTENT_TYPES,
  MAX_FILE_SIZE,
  addManifestEntry,
  isDisclosureCategory,
  uploadDocument,
  type DisclosureFile,
} from "@/lib/appwrite";

export async function POST(
  request: NextRequest,
  { params }: { params: Promise<{ category: string }> }
) {
  if (!isAuthenticatedRequest(request)) {
    return NextResponse.json({ error: "Unauthorized." }, { status: 401 });
  }

  const { category } = await params;
  if (!isDisclosureCategory(category)) {
    return NextResponse.json({ error: "Unknown category." }, { status: 404 });
  }

  const formData = await request.formData().catch(() => null);
  const file = formData?.get("file");
  const title = formData?.get("title");

  if (!(file instanceof File) || typeof title !== "string" || !title.trim()) {
    return NextResponse.json({ error: "Missing file or title." }, { status: 400 });
  }

  const extension = ALLOWED_CONTENT_TYPES[file.type];
  if (!extension) {
    return NextResponse.json(
      { error: "Unsupported file type. Allowed: PDF, DOC, DOCX, JPG, PNG, WEBP." },
      { status: 400 }
    );
  }

  if (file.size > MAX_FILE_SIZE || file.size <= 0) {
    return NextResponse.json(
      { error: `File too large. Maximum size is ${MAX_FILE_SIZE / (1024 * 1024)} MB.` },
      { status: 400 }
    );
  }

  const buffer = Buffer.from(await file.arrayBuffer());
  const { id } = await uploadDocument(buffer, file.name);

  const entry: DisclosureFile = {
    id,
    title: title.trim(),
    originalName: file.name,
    contentType: file.type,
    size: file.size,
    uploadedAt: new Date().toISOString(),
  };

  await addManifestEntry(category, entry);
  return NextResponse.json({ file: entry });
}
