"use client";

import { useState } from "react";
import Image from "next/image";
import { ChevronLeft, ChevronRight } from "lucide-react";

const slides = [
  {
    id: 1,
    image: "/images/volunteer_community_support.png",
    title: "Empowering Community Volunteers",
    description: "Providing modern digital tools and direct coordination support for daily grassroots mobilization tasks.",
    tag: "Civic Tech Support"
  },
  {
    id: 2,
    image: "/images/grassroots_empowerment.png",
    title: "Micro-Jobs & Actionable Support",
    description: "Supporting dedicated volunteers doing vital daily work by connecting them with compensated micro-jobs and local tasks.",
    tag: "Direct Support"
  },
  {
    id: 3,
    image: "/images/booth_workers_network.png",
    title: "Booth Committee & Campaign Networks",
    description: "Building strong, recognized networks of young dynamic campaign workers and social leaders across constituencies.",
    tag: "Network Strength"
  }
];

export default function VolunteerCarousel() {
  const [currentSlide, setCurrentSlide] = useState(0);

  const nextSlide = () => {
    setCurrentSlide((prev) => (prev + 1) % slides.length);
  };

  const prevSlide = () => {
    setCurrentSlide((prev) => (prev - 1 + slides.length) % slides.length);
  };

  return (
    <section className="py-20 px-6 bg-gray-50 border-b border-gray-200">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-12">
          <span className="text-[#B30006] font-bold text-xs tracking-wider uppercase bg-[#FFC30B]/20 border border-[#FFC30B] px-3 py-1 rounded inline-block">
            Ground Support In Action
          </span>
          <h2 className="text-3xl md:text-4xl font-extrabold text-gray-900 mt-4 mb-4">
            How We Support Our <span className="text-[#B30006]">Grassroots Volunteers</span>
          </h2>
          <p className="text-gray-600 max-w-2xl mx-auto text-base">
            Take a look at the real impact our support network creates for local booth workers and campaign coordinators.
          </p>
        </div>

        <div className="relative bg-white rounded-xl border border-gray-200 shadow-md p-4 md:p-6">
          <div className="relative rounded-lg overflow-hidden aspect-[16/9] md:aspect-[21/9]">
            {slides.map((slide, idx) => (
              <div
                key={slide.id}
                className={`absolute inset-0 transition-opacity duration-500 ${currentSlide === idx ? "opacity-100" : "opacity-0 pointer-events-none"}`}
              >
                <Image
                  src={slide.image}
                  alt={slide.title}
                  fill
                  className="object-cover"
                  priority={idx === 0}
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black via-black/50 to-transparent opacity-80"></div>

                <div className="absolute bottom-6 left-6 right-6 md:bottom-10 md:left-10 md:right-10 max-w-2xl">
                  <span className="px-3 py-1 bg-[#FFC30B] text-[#B30006] rounded text-xs font-bold uppercase tracking-wider mb-3 inline-block">
                    {slide.tag}
                  </span>
                  <h3 className="text-2xl md:text-4xl font-extrabold text-white mb-2 leading-tight">
                    {slide.title}
                  </h3>
                  <p className="text-gray-200 text-sm md:text-base leading-relaxed">
                    {slide.description}
                  </p>
                </div>
              </div>
            ))}
          </div>

          {/* Navigation Controls */}
          <div className="absolute top-1/2 -translate-y-1/2 left-4 right-4 flex justify-between pointer-events-none z-10">
            <button
              onClick={prevSlide}
              className="pointer-events-auto w-12 h-12 rounded-full bg-black/60 flex items-center justify-center text-white hover:bg-black/80 transition-all duration-300 shadow-lg border border-white/20"
              aria-label="Previous Slide"
            >
              <ChevronLeft className="w-6 h-6" />
            </button>
            <button
              onClick={nextSlide}
              className="pointer-events-auto w-12 h-12 rounded-full bg-black/60 flex items-center justify-center text-white hover:bg-black/80 transition-all duration-300 shadow-lg border border-white/20"
              aria-label="Next Slide"
            >
              <ChevronRight className="w-6 h-6" />
            </button>
          </div>

          {/* Indicators */}
          <div className="flex justify-center items-center gap-2 mt-6">
            {slides.map((slide, idx) => (
              <button
                key={slide.id}
                onClick={() => setCurrentSlide(idx)}
                className={`h-2 rounded-full transition-all duration-300 ${
                  currentSlide === idx ? "w-8 bg-[#B30006]" : "w-2 bg-gray-300 hover:bg-gray-400"
                }`}
                aria-label={`Go to slide ${idx + 1}`}
              ></button>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
