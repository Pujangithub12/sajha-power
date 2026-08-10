"use client";

import { useEffect, useState } from "react";
import Image from "next/image";
import { X, ChevronLeft, ChevronRight, ZoomIn } from "lucide-react";

const galleryImages = [
  { src: "/sajha-project-image.png", caption: "Tunnel excavation works" },
  { src: "/sajha-project-image (2).png", caption: "Tunnel portal construction site" },
  { src: "/sajha-projects.jpg", caption: "Project site office and housing facility" },
  { src: "/sajha-projects2.jpg", caption: "Riverbed excavation works" },
  { src: "/sajha-projects3.jpg", caption: "Reinforcement works at the dam structure" },
  { src: "/sajha-projects4.jpg", caption: "Tunnel portal interior" },
  { src: "/sajha-projects5.jpg", caption: "Company event and public program" },
  { src: "/sajha-projects6.jpg", caption: "Riverside reinforcement works" },
  { src: "/sajha-projects7.jpg", caption: "Concrete pouring works at project site" },
  { src: "/sajha-projects8.jpg", caption: "Aerial view of project facility" },
];

export default function GalleryPage() {
  const [activeIndex, setActiveIndex] = useState<number | null>(null);

  useEffect(() => {
    if (activeIndex === null) return;

    function handleKeyDown(e: KeyboardEvent) {
      if (e.key === "Escape") setActiveIndex(null);
      if (e.key === "ArrowRight") {
        setActiveIndex((prev) => (prev === null ? null : (prev + 1) % galleryImages.length));
      }
      if (e.key === "ArrowLeft") {
        setActiveIndex((prev) =>
          prev === null ? null : (prev - 1 + galleryImages.length) % galleryImages.length
        );
      }
    }
    document.addEventListener("keydown", handleKeyDown);
    return () => document.removeEventListener("keydown", handleKeyDown);
  }, [activeIndex]);

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
            Gallery
          </span>
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-extrabold text-white mb-6">
            Our Work <span className="text-gradient">In Pictures</span>
          </h1>
          <p className="text-lg text-slate-400 max-w-3xl mx-auto leading-relaxed">
            A look at Sajha Power&apos;s project sites, construction progress, and company
            milestones.
          </p>
        </div>
      </section>

      {/* Gallery Grid */}
      <section className="py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {galleryImages.map((image, index) => (
              <button
                key={image.src}
                onClick={() => setActiveIndex(index)}
                className="group relative aspect-[4/3] rounded-2xl overflow-hidden border border-slate-100 shadow-sm hover:shadow-xl transition-all duration-300 text-left"
              >
                <Image
                  src={image.src}
                  alt={image.caption}
                  fill
                  className="object-cover group-hover:scale-105 transition-transform duration-500"
                  sizes="(min-width: 1024px) 33vw, (min-width: 640px) 50vw, 100vw"
                />
                <div className="absolute inset-0 bg-black/0 group-hover:bg-black/40 transition-colors duration-300 flex items-center justify-center">
                  <ZoomIn className="w-8 h-8 text-white opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                </div>
                <div className="absolute bottom-0 left-0 right-0 p-4 bg-gradient-to-t from-black/70 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                  <p className="text-white text-sm font-medium">{image.caption}</p>
                </div>
              </button>
            ))}
          </div>
        </div>
      </section>

      {/* Lightbox */}
      {activeIndex !== null && (
        <div
          className="fixed inset-0 z-[100] bg-black/90 flex items-center justify-center p-4"
          onClick={() => setActiveIndex(null)}
        >
          <button
            onClick={() => setActiveIndex(null)}
            aria-label="Close"
            className="absolute top-6 right-6 w-11 h-11 rounded-full bg-white/10 hover:bg-white/20 flex items-center justify-center text-white transition-colors"
          >
            <X className="w-6 h-6" />
          </button>

          <button
            onClick={(e) => {
              e.stopPropagation();
              setActiveIndex((prev) =>
                prev === null ? null : (prev - 1 + galleryImages.length) % galleryImages.length
              );
            }}
            aria-label="Previous image"
            className="absolute left-4 md:left-6 w-11 h-11 rounded-full bg-white/10 hover:bg-white/20 flex items-center justify-center text-white transition-colors"
          >
            <ChevronLeft className="w-6 h-6" />
          </button>

          <div
            className="relative w-full max-w-4xl aspect-[4/3]"
            onClick={(e) => e.stopPropagation()}
          >
            <Image
              src={galleryImages[activeIndex].src}
              alt={galleryImages[activeIndex].caption}
              fill
              className="object-contain"
              sizes="100vw"
            />
          </div>

          <button
            onClick={(e) => {
              e.stopPropagation();
              setActiveIndex((prev) => (prev === null ? null : (prev + 1) % galleryImages.length));
            }}
            aria-label="Next image"
            className="absolute right-4 md:right-6 w-11 h-11 rounded-full bg-white/10 hover:bg-white/20 flex items-center justify-center text-white transition-colors"
          >
            <ChevronRight className="w-6 h-6" />
          </button>

          <p className="absolute bottom-6 left-1/2 -translate-x-1/2 text-white/80 text-sm text-center px-4">
            {galleryImages[activeIndex].caption}
          </p>
        </div>
      )}
    </div>
  );
}
