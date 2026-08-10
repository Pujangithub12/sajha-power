
"use client";

import { useEffect, useState } from "react";
import Image from "next/image";
import Link from "next/link";
import {
  Zap,
  Droplets,
  TrendingUp,
  Shield,
  ArrowRight,
  BarChart3,
  Globe,
  Wrench,
} from "lucide-react";

const heroImages = ["/sajha-project-image.png", "/sajha-project-image (2).png"];

const services = [
  {
    icon: Droplets,
    title: "Hydro Power Plants",
    description:
      "Design, construction, and commissioning of run-of-river and reservoir-based hydroelectric power stations.",
    color: "from-primary-500 to-primary-600",
  },
  {
    icon: Zap,
    title: "Transmission Lines",
    description:
      "High-voltage transmission infrastructure including towers, conductors, and substation integration.",
    color: "from-secondary-500 to-secondary-600",
  },
  {
    icon: Wrench,
    title: "Substation Design",
    description:
      "Complete substation engineering from 11kV to 400kV including GIS and AIS solutions.",
    color: "from-amber-500 to-orange-600",
  },
  {
    icon: BarChart3,
    title: "Energy Consulting",
    description:
      "Feasibility studies, environmental impact assessments, and project management services.",
    color: "from-rose-500 to-red-600",
  },
];

const features = [
  {
    icon: Shield,
    title: "Safety First",
    description: "ISO-certified safety protocols ensuring zero-harm workplaces across all project sites.",
  },
  {
    icon: Globe,
    title: "Sustainable Future",
    description: "100% renewable energy focus with minimal environmental footprint and community engagement.",
  },
  {
    icon: TrendingUp,
    title: "Proven Track Record",
    description: "Over two decades of successful project delivery across challenging Himalayan terrain.",
  },
];

const projects = [
  {
    name: "Upper Trishuli 3A",
    capacity: "60 MW",
    location: "Rasuwa, Nepal",
    status: "Operational",
    image: "bg-gradient-to-br from-primary-600 to-primary-800",
  },
  {
    name: "Kulekhani III",
    capacity: "14 MW",
    location: "Makwanpur, Nepal",
    status: "Operational",
    image: "bg-gradient-to-br from-secondary-600 to-secondary-800",
  },
  {
    name: "Tamor Hydro Project",
    capacity: "120 MW",
    location: "Panchthar, Nepal",
    status: "Under Construction",
    image: "bg-gradient-to-br from-amber-600 to-orange-800",
  },
];

export default function HomePage() {
  const [activeSlide, setActiveSlide] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setActiveSlide((prev) => (prev + 1) % heroImages.length);
    }, 3000);
    return () => clearInterval(timer);
  }, []);

  return (
    <div>
      {/* Hero Section */}
      <section className="relative min-h-[90vh] flex items-center overflow-hidden">
        {/* Background Image Slider */}
        <div className="absolute inset-0 bg-dark-900">
          {heroImages.map((src, index) => (
            <Image
              key={src}
              src={src}
              alt="Sajha Power project site"
              fill
              priority={index === 0}
              className={`object-cover transition-opacity duration-1000 ease-in-out ${
                index === activeSlide ? "opacity-100" : "opacity-0"
              }`}
            />
          ))}
          <div className="absolute inset-0 bg-dark-900/70" />
          <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-primary-600/20 rounded-full blur-3xl" />
          <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-secondary-600/20 rounded-full blur-3xl" />
        </div>

        <div className="relative z-10 max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-20 text-center">
          <div className="animate-slide-up">
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-primary-500/10 border border-primary-500/20 text-primary-400 text-sm font-medium mb-6">
              <Zap className="w-4 h-4" />
              Powering Nepal Since 1999
            </div>
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-extrabold text-white leading-tight mb-6">
              Harnessing the Power of{" "}
              <span className="text-gradient">Water</span> for a{" "}
              <span className="text-gradient">Brighter Tomorrow</span>
            </h1>
            <p className="text-lg text-white mb-8 max-w-xl mx-auto leading-relaxed">
              Sajha Power Company Limited is Nepal&apos;s premier hydro power and energy infrastructure developer,
              delivering sustainable electricity solutions through cutting-edge technology and engineering excellence.
            </p>
            <div className="flex flex-wrap justify-center gap-4">
              <Link
                href="/projects"
                className="px-8 py-4 bg-gradient-primary text-white rounded-xl font-semibold shadow-lg shadow-primary-600/30 hover:shadow-primary-600/50 hover:scale-105 transition-all duration-200 flex items-center gap-2"
              >
                Explore Projects
                <ArrowRight className="w-5 h-5" />
              </Link>
              <Link
                href="/about"
                className="px-8 py-4 bg-white/10 text-white border border-white/20 rounded-xl font-semibold hover:bg-white/20 transition-all duration-200"
              >
                Learn More
              </Link>
            </div>
          </div>
        </div>

        {/* Slide Indicators */}
        <div className="absolute bottom-20 left-1/2 -translate-x-1/2 flex items-center gap-2 z-10">
          {heroImages.map((src, index) => (
            <button
              key={src}
              onClick={() => setActiveSlide(index)}
              aria-label={`Show slide ${index + 1}`}
              className={`h-1.5 rounded-full transition-all duration-300 ${
                index === activeSlide ? "w-6 bg-primary-500" : "w-1.5 bg-white/30 hover:bg-white/50"
              }`}
            />
          ))}
        </div>

        {/* Scroll Indicator */}
        <div className="absolute bottom-8 left-1/2 -translate-x-1/2 animate-bounce">
          <div className="w-6 h-10 rounded-full border-2 border-slate-600 flex justify-center pt-2">
            <div className="w-1.5 h-3 bg-primary-500 rounded-full" />
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section className="py-24 bg-slate-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <span className="inline-block px-4 py-1.5 rounded-full bg-primary-100 text-primary-700 text-sm font-semibold mb-4">
              Our Services
            </span>
            <h2 className="text-3xl md:text-4xl font-bold text-slate-900 mb-4">
              Comprehensive Energy Solutions
            </h2>
            <p className="text-lg text-slate-600">
              From concept to commissioning, we deliver end-to-end hydro power and transmission infrastructure solutions.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {services.map((service, index) => (
              <Link
                key={index}
                href="/services"
                className="group bg-white rounded-2xl p-8 shadow-sm hover:shadow-xl transition-all duration-300 border border-slate-100 hover:border-primary-200"
              >
                <div
                  className={`w-14 h-14 rounded-xl bg-gradient-to-br ${service.color} flex items-center justify-center mb-6 group-hover:scale-110 transition-transform shadow-lg`}
                >
                  <service.icon className="w-7 h-7 text-white" />
                </div>
                <h3 className="text-xl font-bold text-slate-900 mb-3 group-hover:text-primary-600 transition-colors">
                  {service.title}
                </h3>
                <p className="text-slate-500 text-sm leading-relaxed mb-4">
                  {service.description}
                </p>
                <div className="flex items-center gap-1 text-primary-600 font-semibold text-sm group-hover:gap-2 transition-all">
                  Learn more <ArrowRight className="w-4 h-4" />
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* Why Choose Us */}
      <section className="py-24 bg-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div>
            <span className="inline-block px-4 py-1.5 rounded-full bg-secondary-100 text-secondary-700 text-sm font-semibold mb-4">
              Why Sajha Power
            </span>
            <h2 className="text-3xl md:text-4xl font-bold text-slate-900 mb-6">
              Engineering Excellence Meets Environmental Stewardship
            </h2>
            <p className="text-lg text-slate-600 mb-8 leading-relaxed">
              We combine decades of hydro power expertise with a deep commitment to sustainable development,
              ensuring every project benefits both communities and the environment.
            </p>
            <div className="space-y-6">
              {features.map((feature, index) => (
                <div key={index} className="flex gap-4">
                  <div className="w-12 h-12 rounded-xl bg-primary-50 flex items-center justify-center flex-shrink-0">
                    <feature.icon className="w-6 h-6 text-primary-600" />
                  </div>
                  <div>
                    <h3 className="text-lg font-bold text-slate-900 mb-1">
                      {feature.title}
                    </h3>
                    <p className="text-slate-500 text-sm leading-relaxed">
                      {feature.description}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Featured Projects */}
      <section className="py-24 bg-dark-900 relative overflow-hidden">
        <div className="absolute top-0 right-0 w-96 h-96 bg-primary-600/10 rounded-full blur-3xl" />
        <div className="absolute bottom-0 left-0 w-96 h-96 bg-secondary-600/10 rounded-full blur-3xl" />

        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col md:flex-row md:items-end justify-between mb-12">
            <div>
              <span className="inline-block px-4 py-1.5 rounded-full bg-primary-500/10 border border-primary-500/20 text-primary-400 text-sm font-semibold mb-4">
                Featured Projects
              </span>
              <h2 className="text-3xl md:text-4xl font-bold text-white">
                Powering Communities
              </h2>
            </div>
            <Link
              href="/projects"
              className="mt-4 md:mt-0 inline-flex items-center gap-2 text-primary-400 hover:text-primary-300 font-semibold transition-colors"
            >
              View All Projects <ArrowRight className="w-5 h-5" />
            </Link>
          </div>

          <div className="grid md:grid-cols-3 gap-6">
            {projects.map((project, index) => (
              <div
                key={index}
                className="group bg-dark-800 rounded-2xl overflow-hidden border border-slate-700/50 hover:border-primary-500/30 transition-all duration-300 hover:shadow-2xl hover:shadow-primary-900/20"
              >
                <div className={`h-48 ${project.image} relative overflow-hidden`}>
                  <div className="absolute inset-0 bg-black/20 group-hover:bg-black/10 transition-colors" />
                  <div className="absolute top-4 right-4 px-3 py-1 rounded-full bg-white/20 backdrop-blur-md text-white text-xs font-semibold">
                    {project.status}
                  </div>
                </div>
                <div className="p-6">
                  <h3 className="text-xl font-bold text-white mb-2 group-hover:text-primary-400 transition-colors">
                    {project.name}
                  </h3>
                  <div className="flex items-center justify-between text-sm">
                    <span className="text-primary-400 font-semibold">{project.capacity}</span>
                    <span className="text-slate-400">{project.location}</span>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Testimonials / Partners */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h3 className="text-lg font-semibold text-slate-500 mb-8">
            Trusted by Government & Private Partners
          </h3>
          <div className="flex flex-wrap justify-center items-center gap-8 md:gap-16 opacity-50">
            {["NEA", "World Bank", "ADB", "JICA", "IFC", "GoN"].map((partner) => (
              <div
                key={partner}
                className="text-2xl font-bold text-slate-400 hover:text-primary-600 transition-colors cursor-default"
              >
                {partner}
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}

