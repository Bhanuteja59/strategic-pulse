"use client";

import { useState } from "react";
import Image from "next/image";
import { motion, AnimatePresence } from "framer-motion";
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
    <section className="py-20 px-6 bg-slate-100 dark:bg-[#0f172a]/50 border-y border-black/5 dark:border-white/5 relative overflow-hidden transition-colors duration-300" id="volunteer-hub">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-12">
          <span className="text-cyan-600 dark:text-cyan-400 font-bold text-xs tracking-wider uppercase bg-cyan-500/10 border border-cyan-500/30 px-3 py-1 rounded-full inline-block">
            Ground Support In Action
          </span>
          <h2 className="text-3xl md:text-4xl font-extrabold text-slate-900 dark:text-white mt-4 mb-4 transition-colors duration-300">
            How We Support Our <span className="gradient-text">Grassroots Volunteers</span>
          </h2>
          <p className="text-slate-700 dark:text-slate-400 max-w-2xl mx-auto text-base transition-colors duration-300">
            Take a look at the real impact our support network creates for local booth workers and campaign coordinators.
          </p>
        </div>

        <div className="relative glass-panel rounded-2xl p-4 md:p-6 shadow-2xl">
          <div className="relative rounded-xl overflow-hidden aspect-[16/9] md:aspect-[21/9]">
            <AnimatePresence mode="wait">
              <motion.div
                key={currentSlide}
                initial={{ opacity: 0, x: 50 }}
                animate={{ opacity: 1, x: 0 }}
                exit={{ opacity: 0, x: -50 }}
                transition={{ duration: 0.5, ease: "easeInOut" }}
                className="absolute inset-0"
              >
                <Image 
                  src={slides[currentSlide].image}
                  alt={slides[currentSlide].title}
                  fill
                  className="object-cover"
                  priority
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black via-black/50 to-transparent opacity-90 md:opacity-80"></div>
                
                <div className="absolute bottom-6 left-6 right-6 md:bottom-10 md:left-10 md:right-10 max-w-2xl">
                  <span className="px-3 py-1 bg-indigo-500/30 text-indigo-300 border border-indigo-500/40 rounded-full text-xs font-bold uppercase tracking-wider mb-3 inline-block">
                    {slides[currentSlide].tag}
                  </span>
                  <h3 className="text-2xl md:text-4xl font-extrabold text-white mb-2 leading-tight">
                    {slides[currentSlide].title}
                  </h3>
                  <p className="text-slate-200 text-sm md:text-base leading-relaxed">
                    {slides[currentSlide].description}
                  </p>
                </div>
              </motion.div>
            </AnimatePresence>
          </div>

          {/* Navigation Controls */}
          <div className="absolute top-1/2 -translate-y-1/2 left-4 right-4 flex justify-between pointer-events-none z-10">
            <button 
              onClick={prevSlide}
              className="pointer-events-auto w-12 h-12 rounded-full bg-black/60 backdrop-blur-md flex items-center justify-center text-white hover:bg-black/80 transition-all duration-300 shadow-lg border border-white/20 hover:scale-110"
              aria-label="Previous Slide"
            >
              <ChevronLeft className="w-6 h-6" />
            </button>
            <button 
              onClick={nextSlide}
              className="pointer-events-auto w-12 h-12 rounded-full bg-black/60 backdrop-blur-md flex items-center justify-center text-white hover:bg-black/80 transition-all duration-300 shadow-lg border border-white/20 hover:scale-110"
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
                  currentSlide === idx ? "w-8 bg-cyan-600 dark:bg-cyan-400" : "w-2 bg-slate-400 dark:bg-slate-600 hover:bg-slate-500"
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
