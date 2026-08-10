import type { Metadata } from "next";
import { cookies } from "next/headers";
import { ADMIN_SESSION_COOKIE, isValidSessionToken } from "@/lib/adminAuth";
import LoginForm from "@/components/admin/LoginForm";
import AdminPanel from "@/components/admin/AdminPanel";

export const dynamic = "force-dynamic";
export const metadata: Metadata = {
  robots: { index: false, follow: false },
};

export default async function AdminDisclosurePage() {
  const cookieStore = await cookies();
  const authenticated = isValidSessionToken(cookieStore.get(ADMIN_SESSION_COOKIE)?.value);

  return authenticated ? <AdminPanel /> : <LoginForm />;
}
