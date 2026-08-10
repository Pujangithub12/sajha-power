
"use client";

import { useState } from "react";
import { MapPin, Calendar, CheckCircle2, Filter } from "lucide-react";

const categories = ["All", "Operational", "Under Construction", "Upcoming"];

const projects = [
  {
    name: "Upper Trishuli 3A",
    capacity: "60 MW",
    location: "Rasuwa, Nepal",
    status: "Operational",
    year: "2019",
    type: "Run-of-River",
    description: "A major run-of-river hydroelectric project on the Trishuli River, contributing significantly to Nepal's grid stability.",
    image: "from-primary-600 to-primary-800",
    highlights: ["60 MW installed capacity", "Annual generation: 350 GWh", "Headrace tunnel: 5.2 km", "Designed by international consortium"],
  },
  {
    name: "Kulekhani III",
    capacity: "14 MW",
    location: "Makwanpur, Nepal",
    status: "Operational",
    year: "2016",
    type: "Reservoir",
    description: "The third phase of the Kulekhani cascade development, utilizing the existing reservoir for peaking power generation.",
    image: "from-secondary-600 to-secondary-800",
    highlights: ["14 MW peaking capacity", "Utilizes Kulekhani reservoir", "Underground powerhouse", "Black start capability"],
  },
  {
    name: "Tamor Hydro Project",
    capacity: "120 MW",
    location: "Panchthar, Nepal",
    status: "Under Construction",
    year: "2027",
    type: "Run-of-River",
    description: "One of the largest run-of-river projects in Eastern Nepal, harnessing the Tamor River's immense potential.",
    image: "from-amber-600 to-orange-800",
    highlights: ["120 MW installed capacity", "Headrace tunnel: 12 km", "Annual generation: 650 GWh", "132kV transmission integration"],
  },
  {
    name: "Upper Marsyangdi B",
    capacity: "50 MW",
    location: "Lamjung, Nepal",
    status: "Operational",
    year: "2015",
    type: "Run-of-River",
    description: "A high-head run-of-river project on the Marsyangdi River, featuring advanced Francis turbine technology.",
    image: "from-rose-600 to-red-800",
    highlights: ["50 MW capacity", "Net head: 380m", "Annual generation: 280 GWh", "Remote monitoring enabled"],
  },
  {
    name: "Budhi Gandaki Hydro",
    capacity: "200 MW",
    location: "Gorkha, Nepal",
    status: "Upcoming",
    year: "2030",
    type: "Storage",
    description: "A planned storage-type hydroelectric project on the Budhi Gandaki River with significant irrigation benefits.",
    image: "from-emerald-600 to-teal-800",
    highlights: ["200 MW installed capacity", "Reservoir capacity: 250 MCM", "Multi-purpose project", "Regional development catalyst"],
  },
  {
    name: "Khimi Transmission Line",
    capacity: "400 kV",
    location: "Central Nepal",
    status: "Operational",
    year: "2021",
    type: "Transmission",
    description: "A critical 400kV double-circuit transmission line connecting major generation hubs to the load centers.",
    image: "from-indigo-600 to-purple-800",
    highlights: ["400 kV double circuit", "Length: 180 km", "OPGW communication", "Smart grid ready"],
  },
  {
    name: "Solu Corridor Substation",
    capacity: "132/33 kV",
    location: "Solukhumbu, Nepal",
    status: "Under Construction",
    year: "2026",
    type: "Substation",
    description: "A modern GIS substation designed to integrate multiple hydro projects in the Solu-Khumbu region.",
    image: "from-cyan-600 to-blue-800",
    highlights: ["132/33 kV GIS substation", "Indoor design", "Digital protection", "SCADA integrated"],
  },
  {
    name: "Rara Micro Hydro",
    capacity: "2 MW",
    location: "Mugu, Nepal",
    status: "Operational",
    year: "2020",
    type: "Micro Hydro",
    description: "A community-focused micro-hydro project providing clean electricity to remote villages around Rara Lake.",
    image: "from-primary-500 to-secondary-600",
    highlights: ["2 MW community project", "Off-grid village electrification", "Local employment", "Eco-tourism support"],
  },
];

export default function ProjectsPage() {
  const [activeCategory, setActiveCategory] = useState("All");

  const filteredProjects =
    activeCategory === "All"
      ? projects
      : projects.filter((p) => p.status === activeCategory);

  return (
    <div>
      {/* Hero */}
      <section className="relative py-24 bg-dark-900 overflow-hidden">
        <div className="absolute inset-0 opacity-10">
          <div className="absolute top-0 left-1/2 w-96 h-96 bg-primary-500 rounded-full blur-3xl -translate-x-1/2" />
        </div>
        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <span className="inline-block px-4 py-1.5 rounded-full bg-primary-500/10 border border-primary-500/20 text-primary-400 text-sm font-semibold mb-6">
            Our Portfolio
          </span>
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-extrabold text-white mb-6">
            Projects That <span className="text-gradient">Power Nations</span>
          </h1>
          <p className="text-lg text-slate-400 max-w-3xl mx-auto leading-relaxed">
            From micro-hydro to mega-projects, explore our diverse portfolio of hydro power plants, 
            transmission lines, and substations across South Asia.
          </p>
        </div>
      </section>

      {/* Filter & Projects */}
      <section className="py-24 bg-slate-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          {/* Filter Tabs */}
          <div className="flex flex-wrap justify-center gap-2 mb-12">
            {categories.map((category) => (
              <button
                key={category}
                onClick={() => setActiveCategory(category)}
                className={`px-6 py-2.5 rounded-full text-sm font-semibold transition-all duration-200 ${
                  activeCategory === category
                    ? "bg-gradient-primary text-white shadow-lg shadow-primary-600/20"
                    : "bg-white text-slate-600 hover:bg-slate-100 border border-slate-200"
                }`}
              >
                {category}
              </button>
            ))}
          </div>

          {/* Projects Grid */}
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {filteredProjects.map((project, index) => (
              <div
                key={index}
                className="group bg-white rounded-2xl overflow-hidden shadow-sm border border-slate-100 hover:shadow-xl transition-all duration-300"
              >
                {/* Project Image Placeholder */}
                <div className={`h-48 bg-gradient-to-br ${project.image} relative overflow-hidden`}>
                  <div className="absolute inset-0 bg-black/10 group-hover:bg-black/0 transition-colors" />
                  <div className="absolute top-4 left-4 flex gap-2">
                    <span className={`px-3 py-1 rounded-full text-xs font-semibold ${
                      project.status === "Operational"
                        ? "bg-emerald-500/90 text-white"
                        : project.status === "Under Construction"
                        ? "bg-amber-500/90 text-white"
                        : "bg-slate-500/90 text-white"
                    }`}>
                      {project.status}
                    </span>
                  </div>
                  <div className="absolute bottom-4 right-4">
                    <span className="px-3 py-1 rounded-full bg-white/20 backdrop-blur-md text-white text-xs font-semibold">
                      {project.type}
                    </span>
                  </div>
                </div>

                <div className="p-6">
                  <div className="flex items-center justify-between mb-3">
                    <h3 className="text-xl font-bold text-slate-900 group-hover:text-primary-600 transition-colors">
                      {project.name}
                    </h3>
                    <span className="text-primary-600 font-bold">{project.capacity}</span>
                  </div>

                  <div className="flex items-center gap-4 text-sm text-slate-500 mb-4">
                    <span className="flex items-center gap-1">
                      <MapPin className="w-4 h-4" /> {project.location}
                    </span>
                    <span className="flex items-center gap-1">
                      <Calendar className="w-4 h-4" /> {project.year}
                    </span>
                  </div>

                  <p className="text-slate-600 text-sm leading-relaxed mb-4">
                    {project.description}
                  </p>

                  <div className="space-y-2 mb-4">
                    {project.highlights.map((highlight, hIndex) => (
                      <div key={hIndex} className="flex items-center gap-2 text-sm">
                        <CheckCircle2 className="w-4 h-4 text-primary-500 flex-shrink-0" />
                        <span className="text-slate-600">{highlight}</span>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            ))}
          </div>

          {filteredProjects.length === 0 && (
            <div className="text-center py-20">
              <Filter className="w-12 h-12 text-slate-300 mx-auto mb-4" />
              <p className="text-slate-500">No projects found in this category.</p>
            </div>
          )}
        </div>
      </section>

      {/* Impact Section */}
      <section className="py-24 bg-dark-900">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <div>
              <span className="inline-block px-4 py-1.5 rounded-full bg-primary-500/10 border border-primary-500/20 text-primary-400 text-sm font-semibold mb-6">
                Our Impact
              </span>
              <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">
                Transforming Communities Through Clean Energy
              </h2>
              <p className="text-slate-400 leading-relaxed mb-8">
                Every project we complete brings light to homes, powers industries, and reduces carbon emissions. 
                Our work has directly impacted millions of lives across Nepal and the region.
              </p>
              <div className="grid grid-cols-2 gap-6">
                <div className="bg-dark-800 rounded-xl p-6 border border-slate-700">
                  <div className="text-3xl font-bold text-primary-400 mb-1">5M+</div>
                  <div className="text-sm text-slate-400">People Served</div>
                </div>
                <div className="bg-dark-800 rounded-xl p-6 border border-slate-700">
                  <div className="text-3xl font-bold text-secondary-400 mb-1">15K+</div>
                  <div className="text-sm text-slate-400">Jobs Created</div>
                </div>
                <div className="bg-dark-800 rounded-xl p-6 border border-slate-700">
                  <div className="text-3xl font-bold text-amber-400 mb-1">120+</div>
                  <div className="text-sm text-slate-400">Villages Electrified</div>
                </div>
                <div className="bg-dark-800 rounded-xl p-6 border border-slate-700">
                  <div className="text-3xl font-bold text-emerald-400 mb-1">$2B+</div>
                  <div className="text-sm text-slate-400">Investment Mobilized</div>
                </div>
              </div>
            </div>
            <div className="relative">
              <div className="absolute inset-0 bg-gradient-to-br from-primary-500/20 to-secondary-500/20 rounded-3xl rotate-3" />
              <div className="relative bg-dark-800 rounded-3xl p-8 border border-slate-700">
                <h3 className="text-xl font-bold text-white mb-6">Project Distribution</h3>
                <div className="space-y-4">
                  {[
                    { label: "Run-of-River", value: 65, color: "bg-primary-500" },
                    { label: "Reservoir/Storage", value: 20, color: "bg-secondary-500" },
                    { label: "Transmission", value: 10, color: "bg-amber-500" },
                    { label: "Substation", value: 5, color: "bg-emerald-500" },
                  ].map((item, index) => (
                    <div key={index}>
                      <div className="flex justify-between text-sm mb-2">
                        <span className="text-slate-300">{item.label}</span>
                        <span className="text-slate-400">{item.value}%</span>
                      </div>
                      <div className="h-2 bg-slate-700 rounded-full overflow-hidden">
                        <div
                          className={`h-full ${item.color} rounded-full transition-all duration-1000`}
                          style={{ width: `${item.value}%` }}
                        />
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}

