"use client";

import { Droplets, Zap, Wrench, BarChart3, CheckCircle2 } from "lucide-react";

const mainServices = [
  {
    icon: Droplets,
    title: "Hydro Power Plant Development",
    shortDesc: "End-to-end hydro power solutions from feasibility to commissioning.",
    description:
      "We specialize in the complete development of hydroelectric power plants, from initial site assessment and feasibility studies through design, construction, and commissioning. Our expertise covers both run-of-river and reservoir-type projects, with capacities ranging from micro-hydro to large-scale installations.",
    features: [
      "Run-of-river & reservoir project design",
      "Civil works & electro-mechanical installation",
      "Penstock & tunnel construction",
      "Turbine & generator integration",
      "SCADA & automation systems",
    ],
    color: "from-primary-500 to-primary-700",
    bgColor: "bg-primary-50",
    textColor: "text-primary-600",
  },
  {
    icon: Zap,
    title: "Transmission Line Construction",
    shortDesc: "High-voltage power transmission infrastructure across challenging terrain.",
    description:
      "Our transmission line division designs and constructs high-voltage transmission corridors that connect generation sites to the national grid. We have extensive experience working in Nepal's challenging Himalayan terrain, delivering reliable power transmission solutions.",
    features: [
      "66kV to 400kV transmission lines",
      "Tower design, fabrication & erection",
      "Conductor stringing & sagging",
      "OPGW & communication systems",
      "Right-of-way management",
    ],
    color: "from-secondary-500 to-secondary-700",
    bgColor: "bg-secondary-50",
    textColor: "text-secondary-600",
  },
  {
    icon: Wrench,
    title: "Substation Engineering",
    shortDesc: "Complete substation solutions from 11kV to 400kV.",
    description:
      "We provide comprehensive substation engineering services including both Air Insulated Substations (AIS) and Gas Insulated Substations (GIS). Our designs prioritize reliability, safety, and ease of maintenance while optimizing space and cost.",
    features: [
      "AIS & GIS substation design",
      "Transformer installation & testing",
      "Protection & control systems",
      "Switchgear & busbar systems",
      "Substation automation & monitoring",
    ],
    color: "from-amber-500 to-orange-700",
    bgColor: "bg-amber-50",
    textColor: "text-amber-600",
  },
  {
    icon: BarChart3,
    title: "Energy Consulting & EIA",
    shortDesc: "Expert advisory services for energy projects.",
    description:
      "Our consulting division provides specialized services including feasibility studies, environmental impact assessments, financial modeling, and project management. We help clients navigate regulatory requirements and optimize project outcomes.",
    features: [
      "Feasibility studies & DPR preparation",
      "Environmental Impact Assessment (EIA)",
      "IEE & EMP preparation",
      "Financial modeling & valuation",
      "Project management & supervision",
    ],
    color: "from-rose-500 to-red-700",
    bgColor: "bg-rose-50",
    textColor: "text-rose-600",
  },
];

export default function ServicesPage() {
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
            Our Services
          </span>
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-extrabold text-white mb-6">
            Comprehensive <span className="text-gradient">Energy Solutions</span>
          </h1>
          <p className="text-lg text-slate-400 max-w-3xl mx-auto leading-relaxed">
            From concept to commissioning, we deliver integrated hydro power and transmission infrastructure 
            services tailored to meet the unique challenges of South Asian terrain.
          </p>
        </div>
      </section>

      {/* Main Services */}
      <section className="py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="space-y-24">
            {mainServices.map((service, index) => (
              <div
                key={index}
                className={`grid lg:grid-cols-2 gap-12 items-center ${
                  index % 2 === 1 ? "lg:flex-row-reverse" : ""
                }`}
              >
                <div className={index % 2 === 1 ? "lg:order-2" : ""}>
                  <div
                    className={`w-16 h-16 rounded-2xl bg-gradient-to-br ${service.color} flex items-center justify-center mb-6 shadow-xl`}
                  >
                    <service.icon className="w-8 h-8 text-white" />
                  </div>
                  <h2 className="text-3xl font-bold text-slate-900 mb-4">{service.title}</h2>
                  <p className="text-lg text-slate-600 mb-6 leading-relaxed">
                    {service.description}
                  </p>
                  <ul className="space-y-3 mb-8">
                    {service.features.map((feature, fIndex) => (
                      <li key={fIndex} className="flex items-center gap-3">
                        <CheckCircle2 className={`w-5 h-5 ${service.textColor} flex-shrink-0`} />
                        <span className="text-slate-600">{feature}</span>
                      </li>
                    ))}
                  </ul>
                </div>
                <div className={index % 2 === 1 ? "lg:order-1" : ""}>
                  <div
                    className={`relative aspect-[4/3] rounded-3xl bg-gradient-to-br ${service.color} overflow-hidden shadow-xl`}
                  >
                    <div className="absolute inset-0 opacity-20">
                      <svg className="w-full h-full" viewBox="0 0 100 100" preserveAspectRatio="none">
                        <defs>
                          <pattern
                            id={`grid-${index}`}
                            width="10"
                            height="10"
                            patternUnits="userSpaceOnUse"
                          >
                            <path
                              d="M 10 0 L 0 0 0 10"
                              fill="none"
                              stroke="currentColor"
                              strokeWidth="0.5"
                              className="text-white"
                            />
                          </pattern>
                        </defs>
                        <rect width="100" height="100" fill={`url(#grid-${index})`} />
                      </svg>
                    </div>
                    <div className="absolute inset-0 flex items-center justify-center">
                      <service.icon className="w-24 h-24 text-white/30" />
                    </div>
                    <div className="absolute bottom-6 left-6 right-6">
                      <span className="inline-block px-3 py-1 rounded-full bg-white/20 backdrop-blur-md text-white text-xs font-semibold">
                        {service.title}
                      </span>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

    </div>
  );
}

