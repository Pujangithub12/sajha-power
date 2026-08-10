import { NextRequest, NextResponse } from "next/server";
import {
  ADMIN_SESSION_COOKIE,
  checkAdminEmail,
  checkAdminPassword,
  createSessionToken,
} from "@/lib/adminAuth";

export async function POST(request: NextRequest) {
  let email: string;
  let password: string;
  try {
    const body = await request.json();
    email = typeof body?.email === "string" ? body.email : "";
    password = typeof body?.password === "string" ? body.password : "";
  } catch {
    return NextResponse.json({ error: "Invalid request." }, { status: 400 });
  }

  // Always run both checks (rather than short-circuiting) so a wrong email
  // doesn't skip the bcrypt comparison and create a timing side-channel.
  const emailOk = Boolean(email) && checkAdminEmail(email);
  const passwordOk = Boolean(password) && (await checkAdminPassword(password));
  if (!emailOk || !passwordOk) {
    return NextResponse.json({ error: "Incorrect email or password." }, { status: 401 });
  }

  const { token, maxAge } = createSessionToken();
  const response = NextResponse.json({ ok: true });
  response.cookies.set(ADMIN_SESSION_COOKIE, token, {
    httpOnly: true,
    secure: process.env.NODE_ENV === "production",
    sameSite: "lax",
    path: "/",
    maxAge,
  });
  return response;
}
