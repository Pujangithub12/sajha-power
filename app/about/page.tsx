import Link from "next/link";
import {
  Target,
  Eye,
  HeartHandshake,
  ShieldCheck,
  Leaf,
  Users,
  ArrowRight,
} from "lucide-react";

const values = [
  {
    icon: ShieldCheck,
    title: "Safety First",
    description:
      "Zero-harm workplaces backed by ISO-certified safety protocols across every project site.",
  },
  {
    icon: Leaf,
    title: "Sustainability",
    description:
      "Minimal environmental footprint, maximum renewable output, and long-term ecological stewardship.",
  },
  {
    icon: HeartHandshake,
    title: "Integrity",
    description:
      "Transparent partnerships with communities, regulators, and clients built on trust.",
  },
  {
    icon: Users,
    title: "People",
    description:
      "Investing in local talent and creating skilled jobs in the regions where we build.",
  },
];

const timeline = [
  { year: "1999", event: "Sajha Power founded to develop Nepal's hydro potential." },
  { year: "2008", event: "Commissioned first run-of-river plant, expanding into transmission." },
  { year: "2015", event: "Crossed 200 MW of cumulative installed capacity." },
  { year: "2021", event: "Launched substation and grid-integration division." },
  { year: "2026", event: "500+ MW generated, operating across three countries." },
];

export default function About() {
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
            About <span className="text-gradient">Sajha Power</span>
          </h1>
          <p className="text-lg text-slate-400 max-w-3xl mx-auto leading-relaxed">
            Sajha Power Company Limited was founded with a singular vision: to harness the
            immense potential of water resources to create clean, reliable, and sustainable
            energy for the future.
          </p>
        </div>
      </section>

      {/* Story */}
      <section className="py-24 bg-white">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
          <p className="text-lg text-slate-600 mb-6 leading-relaxed">
            Our expertise spans the entire lifecycle of energy infrastructure &mdash; from
            initial hydrological surveys and environmental impact assessments to civil
            engineering, electromechanical installation, and eventual grid integration through
            our own transmission lines.
          </p>
          <p className="text-lg text-slate-600 leading-relaxed">
            Over 25 years, we have grown from a small team of engineers into a full-scale
            developer of hydro power plants, transmission corridors, and substations across the
            Himalayan region, powering millions of homes and businesses along the way.
          </p>
        </div>
      </section>

      {/* Mission & Vision */}
      <section className="py-24 bg-slate-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-2 gap-8">
            <div className="bg-white rounded-2xl p-8 shadow-sm border border-slate-100">
              <div className="w-14 h-14 rounded-xl bg-primary-50 flex items-center justify-center mb-6">
                <Target className="w-7 h-7 text-primary-600" />
              </div>
              <h2 className="text-2xl font-bold text-slate-900 mb-4">Our Mission</h2>
              <p className="text-slate-600 leading-relaxed">
                To build high-quality, resilient energy infrastructure that drives economic
                growth while adhering to the highest standards of environmental sustainability
                and community engagement.
              </p>
            </div>
            <div className="bg-white rounded-2xl p-8 shadow-sm border border-slate-100">
              <div className="w-14 h-14 rounded-xl bg-secondary-50 flex items-center justify-center mb-6">
                <Eye className="w-7 h-7 text-secondary-600" />
              </div>
              <h2 className="text-2xl font-bold text-slate-900 mb-4">Our Vision</h2>
              <p className="text-slate-600 leading-relaxed">
                A future where every community has access to clean, affordable, and reliable
                electricity &mdash; generated responsibly from the region&apos;s abundant water
                resources.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Values */}
      <section className="py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <span className="inline-block px-4 py-1.5 rounded-full bg-primary-100 text-primary-700 text-sm font-semibold mb-4">
              What Drives Us
            </span>
            <h2 className="text-3xl md:text-4xl font-bold text-slate-900 mb-4">Our Values</h2>
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {values.map((value, index) => (
              <div
                key={index}
                className="bg-slate-50 rounded-2xl p-8 border border-slate-100 hover:shadow-lg hover:border-primary-200 transition-all duration-300 group"
              >
                <div className="w-12 h-12 rounded-xl bg-gradient-primary flex items-center justify-center mb-6 group-hover:scale-110 transition-transform">
                  <value.icon className="w-6 h-6 text-white" />
                </div>
                <h3 className="text-lg font-bold text-slate-900 mb-2">{value.title}</h3>
                <p className="text-slate-500 text-sm leading-relaxed">{value.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Timeline */}
      <section className="py-24 bg-dark-900">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <span className="inline-block px-4 py-1.5 rounded-full bg-primary-500/10 border border-primary-500/20 text-primary-400 text-sm font-semibold mb-4">
              Our Journey
            </span>
            <h2 className="text-3xl md:text-4xl font-bold text-white">25+ Years of Growth</h2>
          </div>
          <div className="space-y-8">
            {timeline.map((item, index) => (
              <div key={index} className="flex gap-6 items-start">
                <div className="w-20 flex-shrink-0 text-primary-400 font-bold text-lg">
                  {item.year}
                </div>
                <div className="flex-1 pb-8 border-l border-slate-700 pl-6 -mt-1">
                  <p className="text-slate-300">{item.event}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-20 bg-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl font-bold text-slate-900 mb-4">Want to Work With Us?</h2>
          <p className="text-lg text-slate-600 mb-8">
            Whether you&apos;re a partner, investor, or prospective client, we&apos;d love to
            hear from you.
          </p>
          <Link
            href="/contact"
            className="inline-flex items-center gap-2 px-8 py-4 bg-gradient-primary text-white rounded-xl font-semibold shadow-lg shadow-primary-600/30 hover:shadow-primary-600/50 hover:scale-105 transition-all"
          >
            Get in Touch <ArrowRight className="w-5 h-5" />
          </Link>
        </div>
      </section>
    </div>
  );
}
