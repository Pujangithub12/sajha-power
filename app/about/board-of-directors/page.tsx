import { User } from "lucide-react";

const board = [
  { name: "Chairman", role: "Chairman of the Board" },
  { name: "Vice Chairman", role: "Vice Chairman" },
  { name: "Director", role: "Director, Finance" },
  { name: "Director", role: "Director, Engineering" },
  { name: "Director", role: "Independent Director" },
  { name: "Company Secretary", role: "Company Secretary" },
];

export default function BoardOfDirectorsPage() {
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
            About Us
          </span>
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-extrabold text-white mb-6">
            Board of <span className="text-gradient">Directors</span>
          </h1>
          <p className="text-lg text-slate-400 max-w-3xl mx-auto leading-relaxed">
            Meet the leadership steering Sajha Power&apos;s strategy, governance, and long-term
            growth.
          </p>
        </div>
      </section>

      {/* Board Grid */}
      <section className="py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-8">
            {board.map((member, index) => (
              <div
                key={index}
                className="bg-slate-50 rounded-2xl p-8 border border-slate-100 hover:shadow-lg hover:border-primary-200 transition-all duration-300 text-center group"
              >
                <div className="w-24 h-24 rounded-full bg-gradient-to-br from-primary-100 to-secondary-100 flex items-center justify-center mx-auto mb-5 group-hover:scale-105 transition-transform">
                  <User className="w-12 h-12 text-primary-400" />
                </div>
                <h3 className="text-lg font-bold text-slate-900 mb-1">{member.name}</h3>
                <p className="text-sm text-primary-600 font-medium">{member.role}</p>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}
