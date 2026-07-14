import { Megaphone, Calendar, ArrowRight } from "lucide-react";

const notices = [
  {
    title: "Notice of 26th Annual General Meeting",
    date: "2026-06-15",
    tag: "AGM Notice",
  },
  {
    title: "Book Closure Notice for Dividend Distribution",
    date: "2026-05-02",
    tag: "Book Closure",
  },
  {
    title: "Commencement of Commercial Operation - Tamor Hydro Project",
    date: "2026-03-20",
    tag: "Project Update",
  },
  {
    title: "Notice Regarding Unclaimed Dividends",
    date: "2026-02-10",
    tag: "Shareholder Notice",
  },
  {
    title: "Quarterly Financial Results Publication Notice",
    date: "2026-01-18",
    tag: "Financial Notice",
  },
];

export default function NewsAndNoticePage() {
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
          <div className="space-y-4">
            {notices.map((notice) => (
              <div
                key={notice.title}
                className="group flex items-start justify-between gap-4 bg-slate-50 rounded-2xl p-6 border border-slate-100 hover:border-primary-200 hover:shadow-md transition-all duration-300 cursor-pointer"
              >
                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 rounded-xl bg-primary-50 flex items-center justify-center flex-shrink-0">
                    <Megaphone className="w-6 h-6 text-primary-600" />
                  </div>
                  <div>
                    <span className="inline-block px-2.5 py-0.5 rounded-full bg-primary-100 text-primary-700 text-xs font-semibold mb-2">
                      {notice.tag}
                    </span>
                    <h3 className="font-semibold text-slate-900 group-hover:text-primary-600 transition-colors">
                      {notice.title}
                    </h3>
                    <p className="text-sm text-slate-500 flex items-center gap-1 mt-1">
                      <Calendar className="w-3.5 h-3.5" /> {notice.date}
                    </p>
                  </div>
                </div>
                <ArrowRight className="w-5 h-5 text-slate-300 group-hover:text-primary-600 group-hover:translate-x-1 transition-all flex-shrink-0 mt-3" />
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}
