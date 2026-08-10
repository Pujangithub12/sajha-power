import { NextRequest, NextResponse } from "next/server";
import { getManifest, getPublicDownloadUrl, isDisclosureCategory } from "@/lib/appwrite";

export async function GET(request: NextRequest) {
  const category = request.nextUrl.searchParams.get("category") ?? "";
  const id = request.nextUrl.searchParams.get("id") ?? "";

  if (!isDisclosureCategory(category) || !id) {
    return NextResponse.json({ error: "Invalid request." }, { status: 400 });
  }

  const files = await getManifest(category);
  const file = files.find((f) => f.id === id);
  if (!file) {
    return NextResponse.json({ error: "File not found." }, { status: 404 });
  }

  return NextResponse.redirect(getPublicDownloadUrl(file.id));
}
