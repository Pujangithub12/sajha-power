import { FileText, Download, Calendar } from "lucide-react";

const statements = [
  { quarter: "Q2, FY 2082/83", period: "Ashwin - Poush 2082", size: "1.4 MB" },
  { quarter: "Q1, FY 2082/83", period: "Shrawan - Ashwin 2082", size: "1.3 MB" },
  { quarter: "Q4, FY 2081/82", period: "Chaitra - Ashadh 2082", size: "1.5 MB" },
  { quarter: "Q3, FY 2081/82", period: "Poush - Chaitra 2081", size: "1.4 MB" },
  { quarter: "Q2, FY 2081/82", period: "Ashwin - Poush 2081", size: "1.3 MB" },
  { quarter: "Q1, FY 2081/82", period: "Shrawan - Ashwin 2081", size: "1.2 MB" },
];

export default function QuarterlyFinancialStatementsPage() {
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
          <div className="space-y-4">
            {statements.map((statement) => (
              <div
                key={statement.quarter}
                className="flex items-center justify-between gap-4 bg-slate-50 rounded-2xl p-6 border border-slate-100 hover:border-secondary-200 hover:shadow-md transition-all duration-300"
              >
                <div className="flex items-center gap-4">
                  <div className="w-12 h-12 rounded-xl bg-secondary-50 flex items-center justify-center flex-shrink-0">
                    <FileText className="w-6 h-6 text-secondary-600" />
                  </div>
                  <div>
                    <h3 className="font-semibold text-slate-900">{statement.quarter}</h3>
                    <p className="text-sm text-slate-500 flex items-center gap-1 mt-1">
                      <Calendar className="w-3.5 h-3.5" /> {statement.period} &middot; PDF &middot;{" "}
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
