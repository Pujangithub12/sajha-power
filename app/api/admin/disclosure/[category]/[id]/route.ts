import { NextRequest, NextResponse } from "next/server";
import { isAuthenticatedRequest } from "@/lib/adminAuth";
import { deleteDocument, isDisclosureCategory, removeManifestEntry } from "@/lib/appwrite";

export async function DELETE(
  request: NextRequest,
  { params }: { params: Promise<{ category: string; id: string }> }
) {
  if (!isAuthenticatedRequest(request)) {
    return NextResponse.json({ error: "Unauthorized." }, { status: 401 });
  }

  const { category, id } = await params;
  if (!isDisclosureCategory(category)) {
    return NextResponse.json({ error: "Unknown category." }, { status: 404 });
  }

  const removed = await removeManifestEntry(category, id);
  if (!removed) {
    return NextResponse.json({ error: "File not found." }, { status: 404 });
  }

  await deleteDocument(removed.id);
  return NextResponse.json({ ok: true });
}
