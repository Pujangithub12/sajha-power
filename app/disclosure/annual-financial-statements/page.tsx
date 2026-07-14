import { FileText, Download, Calendar } from "lucide-react";

const statements = [
  { year: "2025/26 (2082/83)", size: "3.2 MB" },
  { year: "2024/25 (2081/82)", size: "2.9 MB" },
  { year: "2023/24 (2080/81)", size: "3.1 MB" },
  { year: "2022/23 (2079/80)", size: "2.7 MB" },
  { year: "2021/22 (2078/79)", size: "2.8 MB" },
];

export default function AnnualFinancialStatementsPage() {
  return (
    <div>
      {/* Hero */}
      <section className="relative py-24 bg-dark-900 overflow-hidden">
        <div className="absolute inset-0 opacity-10">
          <div className="absolute top-0 right-0 w-96 h-96 bg-primary-500 rounded-full blur-3xl" />
          <div className="absolute bottom-0 left-0 w-96 h-96 bg-secondary-500 rounded-full blur-3xl" />
        </div>
        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <span className="inline-block px-4 py-1.5 rounded-full bg-primary-500/10 border border-primary-500/20 text-primary-400 text-sm font-semibold mb-6">
            Disclosure
          </span>
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-extrabold text-white mb-6">
            Annual <span className="text-gradient">Financial Statements</span>
          </h1>
          <p className="text-lg text-slate-400 max-w-3xl mx-auto leading-relaxed">
            Audited annual financial statements published in line with regulatory disclosure
            requirements.
          </p>
        </div>
      </section>

      {/* Statements List */}
      <section className="py-24 bg-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="space-y-4">
            {statements.map((statement) => (
              <div
                key={statement.year}
                className="flex items-center justify-between gap-4 bg-slate-50 rounded-2xl p-6 border border-slate-100 hover:border-primary-200 hover:shadow-md transition-all duration-300"
              >
                <div className="flex items-center gap-4">
                  <div className="w-12 h-12 rounded-xl bg-primary-50 flex items-center justify-center flex-shrink-0">
                    <FileText className="w-6 h-6 text-primary-600" />
                  </div>
                  <div>
                    <h3 className="font-semibold text-slate-900">
                      Fiscal Year {statement.year}
                    </h3>
                    <p className="text-sm text-slate-500 flex items-center gap-1 mt-1">
                      <Calendar className="w-3.5 h-3.5" /> Audited &middot; PDF &middot;{" "}
                      {statement.size}
                    </p>
                  </div>
                </div>
                <button className="flex items-center gap-2 px-4 py-2 rounded-lg bg-gradient-primary text-white text-sm font-semibold shadow hover:shadow-lg hover:scale-105 transition-all flex-shrink-0">
                  <Download className="w-4 h-4" /> Download
                </button>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}
