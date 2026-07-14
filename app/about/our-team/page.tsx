import { User } from "lucide-react";

const departments = [
  {
    name: "Engineering & Projects",
    members: [
      { name: "Head of Engineering", role: "Chief Engineer" },
      { name: "Project Manager", role: "Hydro Power Projects" },
      { name: "Project Manager", role: "Transmission & Substations" },
    ],
  },
  {
    name: "Finance & Administration",
    members: [
      { name: "Chief Financial Officer", role: "Finance" },
      { name: "HR Manager", role: "Human Resources" },
    ],
  },
  {
    name: "Environment & Community",
    members: [
      { name: "Environment Lead", role: "Environmental & Social Safeguards" },
      { name: "Community Liaison", role: "Community Engagement" },
    ],
  },
];

export default function OurTeamPage() {
  return (
    <div>
      {/* Hero */}
      <section className="relative py-24 bg-dark-900 overflow-hidden">
        <div className="absolute inset-0 opacity-10">
          <div className="absolute top-0 left-1/2 w-96 h-96 bg-primary-500 rounded-full blur-3xl -translate-x-1/2" />
        </div>
        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <span className="inline-block px-4 py-1.5 rounded-full bg-primary-500/10 border border-primary-500/20 text-primary-400 text-sm font-semibold mb-6">
            About Us
          </span>
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-extrabold text-white mb-6">
            Our <span className="text-gradient">Team</span>
          </h1>
          <p className="text-lg text-slate-400 max-w-3xl mx-auto leading-relaxed">
            The engineers, planners, and specialists behind every project Sajha Power
            delivers.
          </p>
        </div>
      </section>

      {/* Departments */}
      <section className="py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-20">
          {departments.map((department) => (
            <div key={department.name}>
              <h2 className="text-2xl font-bold text-slate-900 mb-8 border-l-4 border-primary-500 pl-4">
                {department.name}
              </h2>
              <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-8">
                {department.members.map((member, index) => (
                  <div
                    key={index}
                    className="bg-slate-50 rounded-2xl p-8 border border-slate-100 hover:shadow-lg hover:border-primary-200 transition-all duration-300 text-center group"
                  >
                    <div className="w-20 h-20 rounded-full bg-gradient-to-br from-primary-100 to-secondary-100 flex items-center justify-center mx-auto mb-4 group-hover:scale-105 transition-transform">
                      <User className="w-10 h-10 text-primary-400" />
                    </div>
                    <h3 className="text-base font-bold text-slate-900 mb-1">{member.name}</h3>
                    <p className="text-sm text-primary-600 font-medium">{member.role}</p>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>
      </section>
    </div>
  );
}
