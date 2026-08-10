import Image from "next/image";
import { Quote } from "lucide-react";

export default function MessageFromChairmanPage() {
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
            Message from the <span className="text-gradient">Chairman</span>
          </h1>
          <p className="text-lg text-slate-400 max-w-3xl mx-auto leading-relaxed">
            A word from the leadership guiding Sajha Power&apos;s mission to power a
            sustainable future.
          </p>
        </div>
      </section>

      {/* Message */}
      <section className="py-24 bg-white">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-3 gap-12 items-start">
            <div className="md:col-span-1">
              <div className="relative aspect-[5/7] rounded-3xl overflow-hidden border border-slate-100 mb-4">
                <Image
                  src="/board of directors/kuber-mani-nepal.jpg"
                  alt="Kuber Mani Nepal, Chairman of Sajha Power Company Limited"
                  fill
                  className="object-cover"
                  sizes="(min-width: 768px) 33vw, 100vw"
                />
              </div>
              <h3 className="text-lg font-bold text-slate-900">Kuber Mani Nepal</h3>
              <p className="text-sm text-slate-500">Chairman, Sajha Power Company Limited</p>
            </div>
            <div className="md:col-span-2">
              <Quote className="w-10 h-10 text-primary-200 mb-4" />
              <p className="text-lg text-slate-600 mb-6 leading-relaxed">
                Nepal has been blessed with abundant water resources, and it has been our
                privilege to help transform that potential into reliable power for millions of
                homes and businesses. Since our founding, we have believed that energy
                infrastructure must be built responsibly &mdash; with respect for the
                environment and the communities we serve.
              </p>
              <p className="text-lg text-slate-600 mb-6 leading-relaxed">
                Over the past 25 years, our team has taken on some of the most technically
                demanding hydro power and transmission projects in the region. Every project we
                complete strengthens the case that clean, dependable energy is not just
                possible, but the foundation of Nepal&apos;s economic future.
              </p>
              <p className="text-lg text-slate-600 mb-8 leading-relaxed">
                As we expand into solar energy and agribusiness through our subsidiaries, our
                commitment remains unchanged: build with integrity, invest in our people, and
                deliver lasting value to shareholders and communities alike. I want to thank
                our employees, partners, and shareholders for their continued trust as we power
                the future together.
              </p>
              <p className="text-slate-900 font-semibold">Kuber Mani Nepal</p>
              <p className="text-slate-500 text-sm">Chairman, Sajha Power Company Limited</p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
