import Link from "next/link";
import { Droplets, Zap, ArrowRight, CheckCircle2 } from "lucide-react";

const highlights = [
  "Hydro power plant development & operation",
  "High-voltage transmission line construction",
  "Substation engineering across 11kV to 400kV",
  "Grid integration and energy consulting",
];

export default function SajhaPowerSubsidiaryPage() {
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
            Our Subsidiaries
          </span>
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-extrabold text-white mb-6">
            Sajha <span className="text-gradient">Power</span>
          </h1>
          <p className="text-lg text-slate-400 max-w-3xl mx-auto leading-relaxed">
            The group&apos;s flagship company &mdash; a hydro power and energy infrastructure
            developer powering communities across Nepal and the region.
          </p>
        </div>
      </section>

      {/* Overview */}
      <section className="py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <div>
              <div className="w-16 h-16 rounded-2xl bg-gradient-primary flex items-center justify-center mb-6 shadow-xl">
                <Droplets className="w-8 h-8 text-white" />
              </div>
              <h2 className="text-3xl font-bold text-slate-900 mb-4">
                Nepal&apos;s Premier Hydro Power Developer
              </h2>
              <p className="text-lg text-slate-600 mb-6 leading-relaxed">
                Sajha Power Company Limited is the parent entity of the group, developing
                run-of-river and reservoir hydro power plants, transmission corridors, and
                substations across challenging Himalayan terrain since 1999.
              </p>
              <ul className="space-y-3 mb-8">
                {highlights.map((item) => (
                  <li key={item} className="flex items-center gap-3">
                    <CheckCircle2 className="w-5 h-5 text-primary-600 flex-shrink-0" />
                    <span className="text-slate-600">{item}</span>
                  </li>
                ))}
              </ul>
              <Link
                href="/services"
                className="inline-flex items-center gap-2 px-6 py-3 rounded-xl bg-gradient-primary text-white font-semibold shadow-lg hover:shadow-xl transition-all hover:scale-105"
              >
                View Our Services <ArrowRight className="w-4 h-4" />
              </Link>
            </div>
            <div className="relative">
              <div className="absolute inset-0 bg-gradient-to-br from-primary-200 to-secondary-200 rounded-3xl rotate-3" />
              <div className="relative bg-slate-100 rounded-3xl p-8 border border-slate-200">
                <div className="grid grid-cols-2 gap-4">
                  <div className="bg-white rounded-2xl p-6 shadow-sm">
                    <div className="text-3xl font-bold text-primary-600 mb-1">500+</div>
                    <div className="text-sm text-slate-500">MW Generated</div>
                  </div>
                  <div className="bg-white rounded-2xl p-6 shadow-sm">
                    <div className="text-3xl font-bold text-secondary-600 mb-1">25+</div>
                    <div className="text-sm text-slate-500">Years Experience</div>
                  </div>
                  <div className="bg-white rounded-2xl p-6 shadow-sm">
                    <div className="text-3xl font-bold text-amber-600 mb-1">50+</div>
                    <div className="text-sm text-slate-500">Projects Completed</div>
                  </div>
                  <div className="bg-white rounded-2xl p-6 shadow-sm">
                    <div className="text-3xl font-bold text-rose-600 mb-1">
                      <Zap className="w-7 h-7 inline" />
                    </div>
                    <div className="text-sm text-slate-500">Clean Energy</div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
