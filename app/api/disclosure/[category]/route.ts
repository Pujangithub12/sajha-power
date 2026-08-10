import { NextResponse } from "next/server";
import { getManifestSafe, isDisclosureCategory } from "@/lib/appwrite";

export async function GET(
  request: Request,
  { params }: { params: Promise<{ category: string }> }
) {
  const { category } = await params;
  if (!isDisclosureCategory(category)) {
    return NextResponse.json({ error: "Unknown category." }, { status: 404 });
  }
  const files = await getManifestSafe(category);
  return NextResponse.json({ files });
}
