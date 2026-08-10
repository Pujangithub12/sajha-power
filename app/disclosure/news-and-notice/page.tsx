import DisclosureFileList from "@/components/DisclosureFileList";
import { getManifestSafe } from "@/lib/appwrite";

export const dynamic = "force-dynamic";

export default async function NewsAndNoticePage() {
  const files = await getManifestSafe("news-and-notice");

  return (
    <div>
      {/* Hero */}
      <section className="relative py-24 bg-dark-900 overflow-hidden">
        <div className="absolute inset-0 opacity-10">
          <div className="absolute top-0 left-1/2 w-96 h-96 bg-primary-500 rounded-full blur-3xl -translate-x-1/2" />
        </div>
        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <span className="inline-block px-4 py-1.5 rounded-full bg-primary-500/10 border border-primary-500/20 text-primary-400 text-sm font-semibold mb-6">
            Disclosure
          </span>
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-extrabold text-white mb-6">
            News <span className="text-gradient">&amp; Notice</span>
          </h1>
          <p className="text-lg text-slate-400 max-w-3xl mx-auto leading-relaxed">
            Official announcements, regulatory notices, and company updates for shareholders and
            the public.
          </p>
        </div>
      </section>

      {/* Notices List */}
      <section className="py-24 bg-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <DisclosureFileList category="news-and-notice" files={files} />
        </div>
      </section>
    </div>
  );
}
