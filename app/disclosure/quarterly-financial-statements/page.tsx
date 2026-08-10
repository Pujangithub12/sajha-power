import DisclosureFileList from "@/components/DisclosureFileList";
import { getManifestSafe } from "@/lib/appwrite";

export const dynamic = "force-dynamic";

export default async function QuarterlyFinancialStatementsPage() {
  const files = await getManifestSafe("quarterly-financial-statements");

  return (
    <div>
      {/* Hero */}
      <section className="relative py-24 bg-dark-900 overflow-hidden">
        <div className="absolute inset-0 opacity-10">
          <div className="absolute top-0 right-0 w-96 h-96 bg-secondary-500 rounded-full blur-3xl" />
          <div className="absolute bottom-0 left-0 w-96 h-96 bg-primary-500 rounded-full blur-3xl" />
        </div>
        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <span className="inline-block px-4 py-1.5 rounded-full bg-primary-500/10 border border-primary-500/20 text-primary-400 text-sm font-semibold mb-6">
            Disclosure
          </span>
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-extrabold text-white mb-6">
            Quarterly <span className="text-gradient">Financial Statements</span>
          </h1>
          <p className="text-lg text-slate-400 max-w-3xl mx-auto leading-relaxed">
            Unaudited quarterly financial statements published each fiscal quarter.
          </p>
        </div>
      </section>

      {/* Statements List */}
      <section className="py-24 bg-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <DisclosureFileList
            category="quarterly-financial-statements"
            files={files}
            accentText="text-secondary-600"
            accentBg="bg-secondary-50"
          />
        </div>
      </section>
    </div>
  );
}
