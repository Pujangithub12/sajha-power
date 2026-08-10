import crypto from "crypto";
import bcrypt from "bcryptjs";
import type { NextRequest } from "next/server";

export const ADMIN_SESSION_COOKIE = "admin_session";
const SESSION_MAX_AGE_SECONDS = 60 * 60 * 12; // 12 hours

function getSessionSecret(): string {
  const secret = process.env.SESSION_SECRET;
  if (!secret) {
    throw new Error("Missing required environment variable: SESSION_SECRET");
  }
  return secret;
}

function sign(payload: string): string {
  return crypto.createHmac("sha256", getSessionSecret()).update(payload).digest("base64url");
}

export function checkAdminEmail(email: string): boolean {
  const expected = process.env.ADMIN_EMAIL;
  if (!expected) {
    throw new Error("Missing required environment variable: ADMIN_EMAIL");
  }
  return email.trim().toLowerCase() === expected.trim().toLowerCase();
}

export async function checkAdminPassword(password: string): Promise<boolean> {
  const expectedHash = process.env.ADMIN_PASSWORD_HASH;
  if (!expectedHash) {
    throw new Error("Missing required environment variable: ADMIN_PASSWORD_HASH");
  }
  return bcrypt.compare(password, expectedHash);
}

export function createSessionToken(): { token: string; maxAge: number } {
  const expires = Date.now() + SESSION_MAX_AGE_SECONDS * 1000;
  const payload = String(expires);
  const signature = sign(payload);
  return { token: `${payload}.${signature}`, maxAge: SESSION_MAX_AGE_SECONDS };
}

export function isValidSessionToken(token: string | undefined | null): boolean {
  if (!token) return false;
  const [payload, signature] = token.split(".");
  if (!payload || !signature) return false;

  const expectedSignature = sign(payload);
  const sigA = Buffer.from(signature);
  const sigB = Buffer.from(expectedSignature);
  if (sigA.length !== sigB.length || !crypto.timingSafeEqual(sigA, sigB)) {
    return false;
  }

  const expires = Number(payload);
  if (!Number.isFinite(expires) || Date.now() > expires) return false;

  return true;
}

export function isAuthenticatedRequest(request: NextRequest): boolean {
  return isValidSessionToken(request.cookies.get(ADMIN_SESSION_COOKIE)?.value);
}
