"use client";

import { useState, useEffect } from "react";
import { ChevronLeft, ChevronRight } from "lucide-react";
import { FaInstagram, FaFacebookF } from "react-icons/fa";
import { FaXTwitter } from "react-icons/fa6";

// =========================================================================
// 1. Splash Screen Component (Fades out after 3 seconds)
// =========================================================================
function Splash() {
  const [isVisible, setIsVisible] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => {
      setIsVisible(false);
    }, 3000);
    return () => clearTimeout(timer);
  }, []);

  if (!isVisible) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-white">
      <div className="animate-fade-in-out">
        <img
          src="/images/logo.png"
          alt="Strategy Pulse Logo"
          className="w-64 h-64 object-contain"
        />
      </div>
    </div>
  );
}

// =========================================================================
// 2. Navigation Header Component
// =========================================================================
function Navbar() {
  const navLinks = [
    { name: "Why Support Volunteers", href: "#why-support-volunteers" },
    { name: "Our Approach", href: "#approach" },
    { name: "Support Services", href: "#services" },
    { name: "Volunteer Hub", href: "#volunteer-hub" },
    { name: "Recognition Plans", href: "#plans" },
  ];

  return (
    <header className="bg-[#B30006] text-white p-4 fixed top-0 left-0 right-0 z-50 shadow-md border-b-2 border-[#FFC30B]">
      <div className="container mx-auto flex items-center justify-between">
        <a href="#hero" className="font-extrabold text-lg sm:text-xl lg:text-2xl tracking-tight flex items-center gap-1.5 sm:gap-2 whitespace-nowrap">
          <img 
            src="/images/logo.png" 
            alt="Strategic Pulse Logo" 
            className="rounded-full w-7 h-7 sm:w-8 sm:h-8 lg:w-10 lg:h-10 object-cover" 
          />
          <span className="text-[#FFC30B]">Strategy</span> Pulse
        </a>

        <nav className="hidden md:flex gap-2 lg:gap-4 font-semibold text-xs lg:text-sm">
          {navLinks.map((link) => (
            <a 
              key={link.name} 
              href={link.href} 
              className="hover:text-[#FFC30B] transition-colors whitespace-nowrap"
            >
              {link.name}
            </a>
          ))}
        </nav>

        <a 
          href="#footer" 
          className="bg-[#FFC30B] text-[#B30006] px-2.5 py-1 sm:px-3 sm:py-1.5 rounded shadow text-[10px] sm:text-xs lg:text-sm font-bold hover:bg-yellow-400 transition-colors whitespace-nowrap"
        >
          Join / Support
        </a>
      </div>
    </header>
  );
}

// =========================================================================
// 3. Hero Section Component
// =========================================================================
function Hero() {
  return (
    <section className="pt-28 pb-20 px-6 bg-gray-50 border-b border-gray-200" id="hero">
      <div className="max-w-6xl mx-auto text-center">
        <div className="inline-block mb-5 px-3 py-1 sm:px-4 sm:py-1.5 bg-[#FFC30B]/20 border border-[#FFC30B] rounded-full">
          <span className="text-[#B30006] font-bold text-[10px] sm:text-xs tracking-wider uppercase flex items-center gap-2">
            <span className="w-2 h-2 rounded-full bg-[#B30006] animate-pulse"></span>
            Empowering Volunteers &amp; Booth Workers
          </span>
        </div>

        <h1 className="text-3xl sm:text-5xl md:text-6xl font-black text-gray-900 mb-6 leading-tight max-w-4xl mx-auto">
          Supporting the{" "}
          <span className="text-[#B30006]">Grassroots Champions</span> of Politics
        </h1>

        <p className="text-base sm:text-lg md:text-xl text-gray-600 mb-10 max-w-3xl mx-auto leading-relaxed">
          Behind every successful campaign are the dedicated volunteers doing the vital daily tasks. We empower booth workers and community organizers with micro-jobs, smart management tools, and the recognition they truly deserve.
        </p>

        <div className="flex flex-col sm:flex-row justify-center items-center gap-4 mb-16">
          <a
            href="#contact"
            className="w-full sm:w-auto bg-[#B30006] text-white px-8 py-4 rounded shadow-lg text-lg font-bold hover:bg-red-800 transition-colors text-center"
          >
            Join Volunteer Network
          </a>
          <a
            href="#services"
            className="w-full sm:w-auto bg-white text-[#B30006] border-2 border-[#B30006] px-8 py-4 rounded text-lg font-bold hover:bg-red-50 transition-colors text-center"
          >
            Explore Micro-Jobs
          </a>
        </div>

        {/* Showcase Image */}
        <div className="relative mx-auto max-w-4xl rounded-xl overflow-hidden shadow-2xl border border-gray-200">
          <div className="relative aspect-[4/3] sm:aspect-video">
            <img
              src="/images/volunteer_community_support.png"
              alt="Diverse grassroots political volunteers collaborating"
              className="w-full h-full object-cover"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black via-black/40 to-transparent opacity-70"></div>
            <div className="absolute bottom-4 left-4 right-4 sm:bottom-6 sm:left-6 sm:right-6 flex flex-col md:flex-row justify-between items-start md:items-end gap-4">
              <div>
                <span className="px-2.5 py-0.5 sm:px-3 sm:py-1 bg-[#FFC30B] text-[#B30006] rounded text-[10px] sm:text-xs font-bold uppercase tracking-wider mb-1.5 sm:mb-2 inline-block">
                  Live Community Impact
                </span>
                <h3 className="text-white text-base sm:text-xl md:text-2xl font-bold text-left leading-snug">
                  Connecting local organizers with real-time opportunities
                </h3>
              </div>
              <div className="bg-black/60 backdrop-blur-sm px-2.5 py-1 sm:px-4 sm:py-2 rounded border border-white/20 flex items-center gap-2 sm:gap-3 shrink-0">
                <div className="w-2.5 h-2.5 sm:w-3 sm:h-3 rounded-full bg-green-400 animate-ping"></div>
                <span className="text-white font-semibold text-xs sm:text-sm">Active Network</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

// =========================================================================
// 4. Volunteer Support Carousel Component
// =========================================================================
function VolunteerCarousel() {
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

  const [currentSlide, setCurrentSlide] = useState(0);

  const nextSlide = () => {
    if (currentSlide === slides.length - 1) {
      setCurrentSlide(0);
    } else {
      setCurrentSlide(currentSlide + 1);
    }
  };

  const prevSlide = () => {
    if (currentSlide === 0) {
      setCurrentSlide(slides.length - 1);
    } else {
      setCurrentSlide(currentSlide - 1);
    }
  };

  // Premium Auto-Play Effect (5-second interval)
  // Re-creates the interval on slide change so manual interactions reset the idle timer.
  useEffect(() => {
    const timer = setInterval(() => {
      nextSlide();
    }, 5000);
    return () => clearInterval(timer);
  }, [currentSlide]);

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

        <div className="relative bg-white rounded-xl border border-gray-200 shadow-md p-3 sm:p-4 md:p-6">
          <div className="relative rounded-lg overflow-hidden aspect-[4/5] sm:aspect-[16/10] md:aspect-[21/9]">
            {slides.map((slide, idx) => (
              <div
                key={slide.id}
                className={`absolute inset-0 transition-opacity duration-500 ${currentSlide === idx ? "opacity-100" : "opacity-0 pointer-events-none"}`}
              >
                <img
                  src={slide.image}
                  alt={slide.title}
                  className="w-full h-full object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black via-black/60 to-transparent opacity-85"></div>

                <div className="absolute bottom-4 left-4 right-4 sm:bottom-6 sm:left-6 sm:right-6 md:bottom-10 md:left-10 md:right-10 max-w-2xl">
                  <span className="px-2 py-0.5 sm:px-3 sm:py-1 bg-[#FFC30B] text-[#B30006] rounded text-[10px] sm:text-xs font-bold uppercase tracking-wider mb-2 md:mb-3 inline-block">
                    {slide.tag}
                  </span>
                  <h3 className="text-xl sm:text-2xl md:text-4xl font-extrabold text-white mb-1.5 md:mb-2 leading-tight">
                    {slide.title}
                  </h3>
                  <p className="text-gray-200 text-xs sm:text-sm md:text-base leading-relaxed">
                    {slide.description}
                  </p>
                </div>
              </div>
            ))}
          </div>

          {/* Controls & Indicators */}
          <div className="flex justify-between items-center mt-6 max-w-[280px] sm:max-w-xs mx-auto px-4">
            <button
              onClick={prevSlide}
              className="w-9 h-9 sm:w-10 sm:h-10 rounded-full border border-gray-200 bg-white flex items-center justify-center text-[#B30006] hover:bg-gray-50 hover:text-red-700 active:scale-95 transition-all duration-300 shadow-sm"
              aria-label="Previous Slide"
            >
              <ChevronLeft className="w-4 h-4 sm:w-5 sm:h-5" />
            </button>
            
            <div className="flex items-center gap-1.5 sm:gap-2">
              {slides.map((slide, idx) => (
                <button
                  key={slide.id}
                  onClick={() => setCurrentSlide(idx)}
                  className={`h-1.5 sm:h-2 rounded-full transition-all duration-300 ${
                    currentSlide === idx ? "w-6 sm:w-8 bg-[#B30006]" : "w-1.5 sm:w-2 bg-gray-300 hover:bg-gray-400"
                  }`}
                  aria-label={`Go to slide ${idx + 1}`}
                ></button>
              ))}
            </div>

            <button
              onClick={nextSlide}
              className="w-9 h-9 sm:w-10 sm:h-10 rounded-full border border-gray-200 bg-white flex items-center justify-center text-[#B30006] hover:bg-gray-50 hover:text-red-700 active:scale-95 transition-all duration-300 shadow-sm"
              aria-label="Next Slide"
            >
              <ChevronRight className="w-4 h-4 sm:w-5 sm:h-5" />
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}

// =========================================================================
// 5. Trust Indicators / Dashboards Component
// =========================================================================
function TrustIndicators() {
  return (
    <section className="py-20 px-6 bg-gray-50 border-b border-gray-200" id="volunteer-hub">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-16">
          <span className="text-[#B30006] font-bold text-xs tracking-wider uppercase bg-[#FFC30B]/20 border border-[#FFC30B] px-3 py-1 rounded inline-block mb-3">
            Command Centers
          </span>
          <h2 className="text-3xl md:text-4xl font-extrabold text-gray-900 mb-4">
            Volunteer Support &amp; <span className="text-[#B30006]">Execution Dashboards</span>
          </h2>
          <p className="text-gray-600 max-w-2xl mx-auto font-medium">
            We provide dedicated digital dashboards for booth workers and local coordinators to track micro-jobs, resolve local issues, and secure recognition.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
          <div className="bg-white p-6 rounded-xl border border-gray-200 border-t-4 border-t-[#B30006] shadow-sm hover:shadow-md transition-shadow">
            <div className="w-10 h-10 rounded bg-[#B30006]/10 border border-[#B30006]/30 flex items-center justify-center text-[#B30006] mb-4 font-bold text-lg">
              01
            </div>
            <h3 className="font-bold text-xl text-gray-900 mb-2">Booth Task Tracker</h3>
            <p className="text-gray-500 font-medium text-sm leading-relaxed">
              Real-time synchronization of local booth management tasks and community outreach drives.
            </p>
          </div>

          <div className="bg-white p-6 rounded-xl border border-gray-200 border-t-4 border-t-[#FFC30B] shadow-sm hover:shadow-md transition-shadow">
            <div className="w-10 h-10 rounded bg-[#FFC30B]/20 border border-[#FFC30B]/50 flex items-center justify-center text-[#B30006] mb-4 font-bold text-lg">
              02
            </div>
            <h3 className="font-bold text-xl text-gray-900 mb-2">Micro-Jobs Ledger</h3>
            <p className="text-gray-500 font-medium text-sm leading-relaxed">
              Transparent recording of daily volunteer activities, survey collections, and corresponding support compensation.
            </p>
          </div>

          <div className="bg-white p-6 rounded-xl border border-gray-200 border-t-4 border-t-[#B30006] shadow-sm hover:shadow-md transition-shadow">
            <div className="w-10 h-10 rounded bg-[#B30006]/10 border border-[#B30006]/30 flex items-center justify-center text-[#B30006] mb-4 font-bold text-lg">
              03
            </div>
            <h3 className="font-bold text-xl text-gray-900 mb-2">Grievance Network</h3>
            <p className="text-gray-500 font-medium text-sm leading-relaxed">
              Instant logging of civic issues brought up by citizens during door-to-door volunteer interactions.
            </p>
          </div>

          <div className="bg-white p-6 rounded-xl border border-gray-200 border-t-4 border-t-[#FFC30B] shadow-sm hover:shadow-md transition-shadow">
            <div className="w-10 h-10 rounded bg-[#FFC30B]/20 border border-[#FFC30B]/50 flex items-center justify-center text-[#B30006] mb-4 font-bold text-lg">
              04
            </div>
            <h3 className="font-bold text-xl text-gray-900 mb-2">Identity &amp; Badging</h3>
            <p className="text-gray-500 font-medium text-sm leading-relaxed">
              Official digital identity cards and recognition rankings for top-performing booth coordinators.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}

// =========================================================================
// 6. About Section Component
// =========================================================================
function About() {
  return (
    <section className="py-20 px-6 bg-white border-b border-gray-200" id="why-support-volunteers">
      <div className="max-w-5xl mx-auto">
        <div className="flex flex-col md:flex-row items-start md:items-center justify-between gap-8 mb-12">
          <div>
            <span className="text-[#B30006] font-bold text-xs tracking-wider uppercase bg-[#FFC30B]/20 border border-[#FFC30B] px-3 py-1 rounded inline-block mb-3">
              The Real Power
            </span>
            <h2 className="text-3xl md:text-4xl font-black text-gray-900">
              Why We Support <span className="text-[#B30006]">Grassroots Workers</span>
            </h2>
          </div>
          <p className="text-gray-600 max-w-xl font-medium leading-relaxed bg-gray-50 p-6 rounded-xl border-l-4 border-l-[#B30006] text-base md:text-lg">
            Political campaigns are won by the dedication of thousands of local booth workers and campaign volunteers. We ensure they are never taken for granted by providing structured micro-jobs, daily task support, and financial &amp; social empowerment.
          </p>
        </div>

        <div className="bg-gray-50 p-8 md:p-10 rounded-2xl border border-gray-200 shadow-sm">
          <ul className="grid md:grid-cols-2 gap-6 text-gray-800 font-medium text-lg">
            <li className="flex items-start gap-4 p-4 rounded-xl bg-white border border-gray-100 shadow-sm hover:shadow-md transition-shadow">
              <div className="w-8 h-8 rounded bg-[#B30006] text-white flex items-center justify-center shrink-0 font-bold mt-0.5">✓</div>
              <div>
                <h4 className="text-gray-900 font-bold mb-1">Valuing Daily Micro-Jobs</h4>
                <p className="text-gray-500 text-sm font-normal">Every survey collected, poster placed, and voter engaged is recognized and rewarded.</p>
              </div>
            </li>
            <li className="flex items-start gap-4 p-4 rounded-xl bg-white border border-gray-100 shadow-sm hover:shadow-md transition-shadow">
              <div className="w-8 h-8 rounded bg-[#B30006] text-white flex items-center justify-center shrink-0 font-bold mt-0.5">✓</div>
              <div>
                <h4 className="text-gray-900 font-bold mb-1">Direct Volunteer Empowerment</h4>
                <p className="text-gray-500 text-sm font-normal">We eliminate middlemen so volunteers get direct recognition from leadership.</p>
              </div>
            </li>
            <li className="flex items-start gap-4 p-4 rounded-xl bg-white border border-gray-100 shadow-sm hover:shadow-md transition-shadow">
              <div className="w-8 h-8 rounded bg-[#B30006] text-white flex items-center justify-center shrink-0 font-bold mt-0.5">✓</div>
              <div>
                <h4 className="text-gray-900 font-bold mb-1">Smart Execution Tools</h4>
                <p className="text-gray-500 text-sm font-normal">Intuitive mobile interfaces designed specifically for fast booth-level reporting.</p>
              </div>
            </li>
            <li className="flex items-start gap-4 p-4 rounded-xl bg-white border border-gray-100 shadow-sm hover:shadow-md transition-shadow">
              <div className="w-8 h-8 rounded bg-[#B30006] text-white flex items-center justify-center shrink-0 font-bold mt-0.5">✓</div>
              <div>
                <h4 className="text-gray-900 font-bold mb-1">365-Day Continuous Support</h4>
                <p className="text-gray-500 text-sm font-normal">Supporting our workers throughout the year, not just during the intense election weeks.</p>
              </div>
            </li>
          </ul>
        </div>
      </div>
    </section>
  );
}

// =========================================================================
// 7. Services Section Component
// =========================================================================
function Services() {
  return (
    <section className="py-20 px-6 bg-gray-50 border-b border-gray-200" id="services">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-16">
          <span className="text-[#B30006] font-bold text-xs tracking-wider uppercase bg-[#FFC30B]/20 border border-[#FFC30B] px-3 py-1 rounded inline-block mb-3">
            What We Provide
          </span>
          <h2 className="text-3xl md:text-4xl font-extrabold text-gray-900 mb-4">
            Support Services for <span className="text-[#B30006]">Ground Volunteers</span>
          </h2>
          <p className="text-gray-600 max-w-2xl mx-auto font-medium">
            We offer specialized support infrastructure to make local campaigning easier, more rewarding, and highly effective for every volunteer.
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-8">
          <div className="bg-white p-8 rounded-xl border border-gray-200 border-l-4 border-l-[#B30006] shadow-sm hover:shadow-md transition-shadow">
            <div className="w-12 h-12 rounded bg-[#B30006]/10 border border-[#B30006]/30 flex items-center justify-center text-2xl mb-6">
              🎯
            </div>
            <h3 className="font-extrabold text-2xl text-gray-900 mb-3">Booth-Level Task Management</h3>
            <p className="text-gray-600 leading-relaxed font-medium">
              We break down large constituency goals into simple, manageable micro-tasks for booth agents. Receive daily updates and clear guidance on local outreach.
            </p>
          </div>

          <div className="bg-white p-8 rounded-xl border border-gray-200 border-l-4 border-l-[#FFC30B] shadow-sm hover:shadow-md transition-shadow">
            <div className="w-12 h-12 rounded bg-[#FFC30B]/20 border border-[#FFC30B]/50 flex items-center justify-center text-2xl mb-6">
              💸
            </div>
            <h3 className="font-extrabold text-2xl text-gray-900 mb-3">Micro-Job Compensation Tracker</h3>
            <p className="text-gray-600 leading-relaxed font-medium">
              Volunteers spend valuable time and effort. Our transparent ledger ensures every survey completed and event organized is tracked for fair support compensation.
            </p>
          </div>

          <div className="bg-white p-8 rounded-xl border border-gray-200 border-l-4 border-l-[#B30006] shadow-sm hover:shadow-md transition-shadow">
            <div className="w-12 h-12 rounded bg-[#B30006]/10 border border-[#B30006]/30 flex items-center justify-center text-2xl mb-6">
              🤝
            </div>
            <h3 className="font-extrabold text-2xl text-gray-900 mb-3">Citizen Grievance Redressal Network</h3>
            <p className="text-gray-600 leading-relaxed font-medium">
              Empower volunteers to act as true community problem-solvers. Easily report broken roads, water shortages, and local issues directly to high-level leadership.
            </p>
          </div>

          <div className="bg-white p-8 rounded-xl border border-gray-200 border-l-4 border-l-[#FFC30B] shadow-sm hover:shadow-md transition-shadow">
            <div className="w-12 h-12 rounded bg-[#FFC30B]/20 border border-[#FFC30B]/50 flex items-center justify-center text-2xl mb-6">
              🏅
            </div>
            <h3 className="font-extrabold text-2xl text-gray-900 mb-3">Official Identity &amp; Recognition</h3>
            <p className="text-gray-600 leading-relaxed font-medium">
              Gain prestige in your local community. We provide official digital badging, leaderboards, and direct recognition certificates from senior political leadership.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}

// =========================================================================
// 8. How It Works Section Component
// =========================================================================
function HowItWorks() {
  return (
    <section className="py-20 px-6 bg-white border-b border-gray-200" id="approach">
      <div className="max-w-5xl mx-auto">
        <div className="text-center mb-16">
          <span className="text-[#B30006] font-bold text-xs tracking-wider uppercase bg-[#FFC30B]/20 border border-[#FFC30B] px-3 py-1 rounded inline-block mb-3">
            Simple Process
          </span>
          <h2 className="text-3xl md:text-4xl font-black text-gray-900 mb-4">
            How We Support You
          </h2>
          <p className="text-gray-600 max-w-2xl mx-auto font-medium">
            Our platform makes it incredibly straightforward to get onboarded, claim local micro-jobs, and earn respect and support.
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          <div className="bg-gray-50 p-8 rounded-xl border border-gray-200 border-t-4 border-t-[#B30006] text-center shadow-sm hover:shadow-md transition-shadow">
            <div className="w-16 h-16 rounded-full bg-[#B30006] text-white font-black text-2xl flex items-center justify-center mx-auto mb-6 shadow-md">
              1
            </div>
            <h3 className="font-extrabold text-xl text-gray-900 mb-3">Onboard &amp; Get Verified</h3>
            <p className="text-gray-600 text-sm leading-relaxed font-medium">
              Register with your booth and constituency details. Receive your verified digital identity card instantly.
            </p>
          </div>

          <div className="bg-gray-50 p-8 rounded-xl border border-gray-200 border-t-4 border-t-[#FFC30B] text-center shadow-sm hover:shadow-md transition-shadow">
            <div className="w-16 h-16 rounded-full bg-[#FFC30B] text-[#B30006] font-black text-2xl flex items-center justify-center mx-auto mb-6 shadow-md">
              2
            </div>
            <h3 className="font-extrabold text-xl text-gray-900 mb-3">Claim Local Micro-Jobs</h3>
            <p className="text-gray-600 text-sm leading-relaxed font-medium">
              Browse available tasks like citizen surveys, community meeting organization, or voter outreach in your area.
            </p>
          </div>

          <div className="bg-gray-50 p-8 rounded-xl border border-gray-200 border-t-4 border-t-[#B30006] text-center shadow-sm hover:shadow-md transition-shadow">
            <div className="w-16 h-16 rounded-full bg-[#B30006] text-white font-black text-2xl flex items-center justify-center mx-auto mb-6 shadow-md">
              3
            </div>
            <h3 className="font-extrabold text-xl text-gray-900 mb-3">Earn Recognition &amp; Support</h3>
            <p className="text-gray-600 text-sm leading-relaxed font-medium">
              Log your completed tasks to unlock direct support compensation, leader awards, and senior leadership access.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}

// =========================================================================
// 9. Command Center Preview Component
// =========================================================================
function DashboardPreview() {
  return (
    <section className="py-20 px-6 bg-white border-b border-gray-200">
      <div className="max-w-5xl mx-auto text-center">
        <span className="text-[#B30006] font-bold text-xs tracking-wider uppercase bg-[#FFC30B]/20 border border-[#FFC30B] px-3 py-1 rounded inline-block mb-3">
          365-Day Operations
        </span>
        <h2 className="text-3xl md:text-4xl font-extrabold text-gray-900 mb-4">
          The Volunteer Command Center
        </h2>
        <p className="text-gray-600 max-w-2xl mx-auto font-medium mb-12 text-base md:text-lg">
          Track your personal booth achievements, view upcoming micro-jobs, and coordinate seamlessly with your constituency leader all in one secure portal.
        </p>

        <div className="bg-gray-50 p-10 md:p-16 rounded-2xl border border-gray-200 border-t-4 border-t-[#B30006] shadow-sm hover:shadow-md transition-shadow">
          <div className="w-20 h-20 mx-auto mb-6 bg-[#B30006] rounded-2xl flex items-center justify-center shadow-lg">
            <span className="text-white font-bold text-3xl">📱</span>
          </div>
          <h3 className="text-gray-900 font-extrabold text-2xl md:text-3xl mb-3">
            Interactive Booth Mapping &amp; Micro-Tasker Suite
          </h3>
          <p className="text-gray-600 max-w-xl mx-auto font-medium text-base mb-8">
            Experience the future of grassroots coordination. Connect directly with field coordinators to receive real-time support and activity payouts.
          </p>

          <a
            href="#contact"
            className="inline-block bg-[#B30006] hover:bg-red-800 text-white px-8 py-3.5 rounded text-base font-bold transition-colors shadow-md"
          >
            Request App Access
          </a>
        </div>
      </div>
    </section>
  );
}

// =========================================================================
// 10. Growth Tiers Section Component
// =========================================================================
function Features() {
  return (
    <section className="py-20 px-6 bg-gray-50 border-b border-gray-200" id="plans">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-16">
          <span className="text-[#B30006] font-bold text-xs tracking-wider uppercase bg-[#FFC30B]/20 border border-[#FFC30B] px-3 py-1 rounded inline-block mb-3">
            Career &amp; Growth Tiers
          </span>
          <h2 className="text-3xl md:text-4xl font-extrabold text-gray-900 mb-4">
            Volunteer <span className="text-[#B30006]">Recognition Tiers</span>
          </h2>
          <p className="text-gray-600 max-w-2xl mx-auto font-medium">
            As you complete micro-jobs and empower your local community, you rise through official recognition tiers with enhanced perks and leadership roles.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* Tier 1 */}
          <div className="bg-white p-8 rounded-xl border border-gray-200 border-t-4 border-t-gray-300 shadow-sm flex flex-col justify-between hover:shadow-md transition-shadow">
            <div>
              <span className="px-3 py-1 bg-gray-100 text-gray-600 rounded text-xs font-semibold mb-4 inline-block border border-gray-200">Tier 1</span>
              <h3 className="font-extrabold text-2xl text-gray-900 mb-2">Active Volunteer</h3>
              <p className="text-gray-500 mb-6 font-medium text-sm leading-relaxed">For newly registered grassroots workers looking to make an impact.</p>
              <ul className="space-y-3 text-sm text-gray-600 font-medium mb-8">
                <li className="flex items-center gap-2 text-[#B30006]">✓ <span className="text-gray-800">Access to Daily Micro-Jobs</span></li>
                <li className="flex items-center gap-2 text-[#B30006]">✓ <span className="text-gray-800">Task Support Ledger</span></li>
                <li className="flex items-center gap-2 text-[#B30006]">✓ <span className="text-gray-800">Verified Identity Card</span></li>
              </ul>
            </div>
            <a href="#contact" className="w-full py-3 bg-gray-100 hover:bg-gray-200 text-gray-800 rounded font-bold text-center transition-colors block text-sm border border-gray-200">Join Tier</a>
          </div>

          {/* Tier 2 */}
          <div className="bg-white p-8 rounded-xl border-2 border-[#B30006] border-t-4 border-t-[#B30006] shadow-md flex flex-col justify-between relative hover:shadow-lg transition-shadow">
            <div className="absolute top-0 right-0 bg-[#B30006] text-white text-[10px] font-black px-3 py-1.5 uppercase rounded-bl-xl rounded-tr-xl tracking-wider">Most Popular</div>
            <div>
              <span className="px-3 py-1 bg-[#B30006]/10 text-[#B30006] rounded text-xs font-semibold mb-4 inline-block border border-[#B30006]/30">Tier 2</span>
              <h3 className="font-extrabold text-2xl text-gray-900 mb-2">Booth In-Charge</h3>
              <p className="text-gray-600 mb-6 font-medium text-sm leading-relaxed">For dedicated workers managing specific polling booths.</p>
              <ul className="space-y-3 text-sm text-gray-700 font-medium mb-8">
                <li className="flex items-center gap-2 text-[#B30006]">✓ <span className="text-gray-900 font-bold">Priority Micro-Job Claims</span></li>
                <li className="flex items-center gap-2 text-[#B30006]">✓ <span className="text-gray-900">Monthly Support Bonuses</span></li>
                <li className="flex items-center gap-2 text-[#B30006]">✓ <span className="text-gray-900">Direct Leader Connect</span></li>
              </ul>
            </div>
            <a href="#contact" className="w-full py-3 bg-[#B30006] hover:bg-red-800 text-white rounded font-bold text-center transition-colors block shadow text-sm">Join Tier</a>
          </div>

          {/* Tier 3 */}
          <div className="bg-white p-8 rounded-xl border border-gray-200 border-t-4 border-t-[#FFC30B] shadow-sm flex flex-col justify-between hover:shadow-md transition-shadow">
            <div>
              <span className="px-3 py-1 bg-[#FFC30B]/20 text-[#B30006] rounded text-xs font-semibold mb-4 inline-block border border-[#FFC30B]/50">Tier 3</span>
              <h3 className="font-extrabold text-2xl text-gray-900 mb-2">Mandal Coordinator</h3>
              <p className="text-gray-500 mb-6 font-medium text-sm leading-relaxed">For experienced leaders coordinating multiple booth teams.</p>
              <ul className="space-y-3 text-sm text-gray-600 font-medium mb-8">
                <li className="flex items-center gap-2 text-[#B30006]">✓ <span className="text-gray-800">Team Management Dashboard</span></li>
                <li className="flex items-center gap-2 text-[#B30006]">✓ <span className="text-gray-800">Override Micro-Task Allocation</span></li>
                <li className="flex items-center gap-2 text-[#B30006]">✓ <span className="text-gray-800">Constituency Awards</span></li>
              </ul>
            </div>
            <a href="#contact" className="w-full py-3 bg-gray-100 hover:bg-gray-200 text-gray-800 rounded font-bold text-center transition-colors block text-sm border border-gray-200">Join Tier</a>
          </div>

          {/* Tier 4 */}
          <div className="bg-white p-8 rounded-xl border border-gray-200 border-t-4 border-t-[#FFC30B] shadow-sm flex flex-col justify-between hover:shadow-md transition-shadow">
            <div>
              <span className="px-3 py-1 bg-[#FFC30B]/20 text-[#B30006] rounded text-xs font-semibold mb-4 inline-block border border-[#FFC30B]/50">Tier 4</span>
              <h3 className="font-extrabold text-2xl text-gray-900 mb-2">Campaign Champion</h3>
              <p className="text-gray-500 mb-6 font-medium text-sm leading-relaxed">For top-tier mobilizers driving key constituency strategies.</p>
              <ul className="space-y-3 text-sm text-gray-600 font-medium mb-8">
                <li className="flex items-center gap-2 text-[#FFC30B]">✓ <span className="text-gray-800">Core War Room Seat</span></li>
                <li className="flex items-center gap-2 text-[#FFC30B]">✓ <span className="text-gray-800">Executive Compensation</span></li>
                <li className="flex items-center gap-2 text-[#FFC30B]">✓ <span className="text-gray-800">Campaign Honors</span></li>
              </ul>
            </div>
            <a href="#contact" className="w-full py-3 bg-gray-100 hover:bg-gray-200 text-gray-800 rounded font-bold text-center transition-colors block text-sm border border-gray-200">Join Tier</a>
          </div>
        </div>
      </div>
    </section>
  );
}

// =========================================================================
// 11. Testimonials Section Component
// =========================================================================
function Testimonials() {
  return (
    <section className="py-20 px-6 bg-white border-b border-gray-200">
      <div className="max-w-5xl mx-auto">
        <div className="text-center mb-16">
          <span className="text-[#B30006] font-bold text-xs tracking-wider uppercase bg-[#FFC30B]/20 border border-[#FFC30B] px-3 py-1 rounded inline-block mb-3">
            Community Impact
          </span>
          <h2 className="text-3xl md:text-4xl font-extrabold text-gray-900 mb-4">
            Voices of Supported Volunteers
          </h2>
          <p className="text-gray-600 max-w-2xl mx-auto font-medium">
            Read what our dedicated grassroots workers say about having access to transparent micro-jobs and official recognition.
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-8">
          <div className="bg-gray-50 p-8 rounded-xl border border-gray-200 border-l-4 border-l-[#B30006] shadow-sm hover:shadow-md transition-shadow">
            <p className="text-gray-600 italic mb-6 leading-relaxed text-base">
              &ldquo;Before Strategy Pulse, we did endless ground work without any formal recognition or compensation. Now, every survey and booth activity is logged, and I receive direct monthly support. It empowers my whole team!&rdquo;
            </p>
            <div className="flex items-center gap-4">
              <div className="w-12 h-12 rounded-full bg-[#B30006] flex items-center justify-center font-bold text-white text-lg shrink-0">
                VK
              </div>
              <div>
                <h4 className="text-gray-900 font-bold">Venkatesh K.</h4>
                <p className="text-gray-500 text-sm">Booth Committee Lead</p>
              </div>
            </div>
          </div>

          <div className="bg-gray-50 p-8 rounded-xl border border-gray-200 border-l-4 border-l-[#FFC30B] shadow-sm hover:shadow-md transition-shadow">
            <p className="text-gray-600 italic mb-6 leading-relaxed text-base">
              &ldquo;The micro-tasker app is incredibly simple to use. I can instantly report civic issues that citizens tell me about, and I get recognized by senior leadership for solving real local problems.&rdquo;
            </p>
            <div className="flex items-center gap-4">
              <div className="w-12 h-12 rounded-full bg-[#FFC30B] flex items-center justify-center font-bold text-[#B30006] text-lg shrink-0">
                PR
              </div>
              <div>
                <h4 className="text-gray-900 font-bold">Priya R.</h4>
                <p className="text-gray-500 text-sm">Active Volunteer &amp; Organizer</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

// =========================================================================
// 12. Impact Banner Component
// =========================================================================
function Impact() {
  return (
    <section className="py-24 px-6 bg-[#B30006] text-center text-white border-b border-[#8B0004]">
      <div className="max-w-4xl mx-auto">
        <span className="bg-[#FFC30B] text-[#B30006] font-bold text-xs tracking-wider uppercase px-4 py-1.5 rounded inline-block mb-6">
          The True Backbone
        </span>
        <h2 className="text-4xl md:text-5xl font-black text-white mb-6 leading-tight">
          Democracy is powered by{" "}
          <span className="text-[#FFC30B]">everyday volunteers.</span>
        </h2>
        <p className="text-lg md:text-xl text-white/90 max-w-2xl mx-auto mb-10 font-normal leading-relaxed">
          When volunteers operate with transparent daily micro-tasks and direct leadership support, entire communities thrive. Take your place in our verified network.
        </p>
        <div className="flex justify-center">
          <a
            href="#contact"
            className="inline-flex items-center gap-3 px-8 py-4 bg-[#FFC30B] text-[#B30006] rounded font-black shadow-lg hover:bg-yellow-400 transition-colors text-lg"
          >
            <span className="w-3 h-3 rounded-full bg-white animate-ping"></span>
            Claim Your First Micro-Job
          </a>
        </div>
      </div>
    </section>
  );
}

// =========================================================================
// 13. Interactive FAQ Component (Accordion-toggle using useState)
// =========================================================================
function FAQ() {
  const faqs = [
    {
      question: "Who can register as a volunteer on Strategy Pulse?",
      answer: "Any dedicated citizen, booth worker, or local campaign organizer looking to support their community and participate in local governance."
    },
    {
      question: "How do micro-jobs and compensation work?",
      answer: "When you complete verified daily tasks—such as door-to-door surveys, citizen grievance logging, or event organization—your activity is recorded on our transparent ledger for monthly support stipends."
    },
    {
      question: "What is the Verified Identity Card?",
      answer: "It is an official digital identity pass recognized by senior political leadership that certifies your role as an authorized booth worker or mandal coordinator."
    },
    {
      question: "Do I get direct access to political leaders?",
      answer: "Yes. As you rise through our recognition tiers by successfully completing micro-tasks, you unlock direct communication channels and war-room access with sitting leaders."
    }
  ];

  const [openIndex, setOpenIndex] = useState(-1);

  const toggleFAQ = (index) => {
    if (openIndex === index) {
      setOpenIndex(-1);
    } else {
      setOpenIndex(index);
    }
  };

  return (
    <section className="py-20 px-6 bg-gray-50 border-b border-gray-200" id="faq">
      <div className="max-w-4xl mx-auto">
        <div className="text-center mb-16">
          <span className="text-[#B30006] font-bold text-xs tracking-wider uppercase bg-[#FFC30B]/20 border border-[#FFC30B] px-3 py-1 rounded inline-block mb-3">
            Got Questions?
          </span>
          <h2 className="text-3xl md:text-4xl font-extrabold text-gray-900 mb-4">
            Frequently Asked Questions
          </h2>
          <p className="text-gray-600 max-w-2xl mx-auto font-medium">
            Everything you need to know about joining our grassroots network, claiming micro-jobs, and securing support.
          </p>
        </div>

        <div className="space-y-6">
          {faqs.map((faq, index) => {
            const isOpen = openIndex === index;
            return (
              <div 
                key={index} 
                className="bg-white rounded-xl border border-gray-200 border-l-4 border-l-[#B30006] shadow-sm hover:shadow-md transition-all duration-300"
              >
                <button
                  onClick={() => toggleFAQ(index)}
                  className="w-full text-left p-6 flex justify-between items-center focus:outline-none"
                >
                  <h3 className="font-extrabold text-lg md:text-xl text-gray-900 flex items-start gap-3">
                    <span className="text-[#B30006] font-black text-2xl leading-none mt-0.5">Q.</span>
                    {faq.question}
                  </h3>
                  <span className="text-2xl font-bold text-[#B30006] shrink-0 ml-4">
                    {isOpen ? "−" : "+"}
                  </span>
                </button>

                <div 
                  className={`overflow-hidden transition-all duration-300 ${
                    isOpen ? "max-h-[500px] border-t border-gray-100" : "max-h-0"
                  }`}
                >
                  <p className="p-6 text-gray-600 font-medium pl-14 leading-relaxed text-base">
                    {faq.answer}
                  </p>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}

// =========================================================================
// 14. Registration Call to Action Component
// =========================================================================
function CTA() {
  return (
    <section className="py-24 px-6 bg-[#111827] text-center text-white" id="contact">
      <div className="max-w-3xl mx-auto">
        <span className="bg-[#FFC30B] text-[#B30006] px-4 py-1.5 rounded text-xs font-bold tracking-widest uppercase mb-6 inline-block shadow">
          Join Network Today
        </span>
        <h2 className="text-4xl md:text-5xl font-black mb-6 tracking-tight leading-tight">
          Ready to empower your community and secure support?
        </h2>
        <p className="text-xl mb-10 text-gray-300 font-medium max-w-2xl mx-auto leading-relaxed">
          Register today to claim your verified digital badge and start accepting compensated booth micro-tasks in your area.
        </p>
        <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
          <button className="w-full sm:w-auto bg-[#FFC30B] text-[#B30006] px-10 py-4 rounded shadow-2xl text-lg font-black hover:bg-yellow-400 hover:scale-105 transition-all duration-300">
            Register as Volunteer
          </button>
          <button className="w-full sm:w-auto bg-white/10 text-white border border-white/30 px-10 py-4 rounded shadow text-lg font-bold hover:bg-white/20 transition-all duration-300">
            Party Organizer Login
          </button>
        </div>
      </div>
    </section>
  );
}

// =========================================================================
// 15. Footer Component
// =========================================================================
function Footer() {
  const footerLinks = [
    { label: "Why Volunteers", href: "#why-support-volunteers" },
    { label: "Support Services", href: "#services" },
    { label: "Volunteer Hub", href: "#volunteer-hub" },
    { label: "Contact", href: "#contact" },
  ];

  return (
    <footer className="relative overflow-hidden bg-gradient-to-br from-[#7A0004] via-[#B30006] to-[#D90416] text-white border-t border-[#FFC30B]/20" id="footer">
      {/* Premium Glow Effects */}
      <div className="absolute top-0 left-0 w-80 h-80 bg-[#FFC30B]/10 blur-3xl rounded-full pointer-events-none"></div>
      <div className="absolute bottom-0 right-0 w-80 h-80 bg-black/20 blur-3xl rounded-full pointer-events-none"></div>

      <div className="relative container mx-auto px-6 py-16 max-w-6xl">
        {/* Responsive Grid Layout */}
        <div className="grid grid-cols-1 md:grid-cols-12 gap-10 mb-12 items-center">
          
          {/* Column 1: Brand details & Socials (7 cols) */}
          <div className="md:col-span-7 flex flex-col items-center md:items-start text-center md:text-left">
            <p className="uppercase tracking-[0.25em] text-[10px] text-[#FFC30B] font-bold mb-3">
              Grassroots • Technology • Empowerment
            </p>
            <h3 className="text-3xl md:text-4xl font-black tracking-tight mb-4 text-white">
              <span className="text-[#FFC30B]">Strategy</span> Pulse
            </h3>
            <p className="text-white/85 text-sm md:text-base leading-relaxed mb-6 max-w-lg">
              Building the future of grassroots political empowerment with real support,
              digital recognition, and opportunities for every volunteer.
            </p>
            
            {/* Social Icons */}
            <div className="flex gap-4">
              {/* Instagram */}
              <a
                href="https://www.instagram.com/strategicpulse_offical"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Instagram"
                className="
                  w-11 h-11 rounded-xl
                  bg-white/10
                  backdrop-blur-md
                  border border-white/10
                  flex items-center justify-center
                  hover:scale-110 hover:-translate-y-1
                  hover:bg-gradient-to-br
                  hover:from-pink-500
                  hover:via-red-500
                  hover:to-yellow-400
                  hover:border-transparent
                  transition-all duration-300
                  shadow-md
                "
              >
                <FaInstagram className="text-white text-xl" />
              </a>

              {/* Facebook */}
              <a
                href="https://www.facebook.com/share/14Yb7dMVskf/"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Facebook"
                className="
                  w-11 h-11 rounded-xl
                  bg-white/10
                  backdrop-blur-md
                  border border-white/10
                  flex items-center justify-center
                  hover:scale-110 hover:-translate-y-1
                  hover:bg-blue-600
                  hover:border-transparent
                  transition-all duration-300
                  shadow-md
                "
              >
                <FaFacebookF className="text-white text-lg" />
              </a>

              {/* Twitter X */}
              <a
                href="https://x.com/strategicpqa1l"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Twitter X"
                className="
                  w-11 h-11 rounded-xl
                  bg-white/10
                  backdrop-blur-md
                  border border-white/10
                  flex items-center justify-center
                  hover:scale-110 hover:-translate-y-1
                  hover:bg-black
                  hover:border-transparent
                  transition-all duration-300
                  shadow-md
                "
              >
                <FaXTwitter className="text-white text-lg" />
              </a>
            </div>
          </div>

          {/* Column 2: Contact/Support card (5 cols) */}
          <div className="md:col-span-5 flex flex-col items-center md:items-start w-full">
            <div className="relative w-full max-w-sm bg-black/20 backdrop-blur-xl p-6 rounded-2xl border border-white/10 hover:border-[#FFC30B]/30 transition-all duration-300 shadow-2xl group mx-auto md:mr-0">
              {/* Online indicator badge */}
              <div className="flex items-center gap-2 px-3 py-1.5 rounded-full bg-emerald-500/15 border border-emerald-500/25 text-emerald-300 text-[10px] font-bold uppercase tracking-wider w-fit mb-4">
                <span className="relative flex h-2 w-2">
                  <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75"></span>
                  <span className="relative inline-flex rounded-full h-2 w-2 bg-emerald-500"></span>
                </span>
                Helpline Active
              </div>
              
              {/* Phone number display section */}
              <div className="mb-4 text-left">
                <span className="block text-[10px] uppercase tracking-widest text-[#FFC30B] font-extrabold mb-1">
                  Connect Directly
                </span>
                <a
                  href="tel:8500055870"
                  className="text-2xl sm:text-3xl font-black text-white hover:text-[#FFC30B] transition-colors duration-300 font-mono tracking-wider block"
                >
                  85000 55870
                </a>
              </div>
              
              {/* Action Buttons Grid */}
              <div className="grid grid-cols-2 gap-3 mb-5">
                {/* Phone Call */}
                <a
                  href="tel:8500055870"
                  className="
                    flex items-center justify-center gap-2 py-2.5 px-4 rounded-xl
                    bg-[#FFC30B] border border-[#FFC30B]/20 text-slate-950
                    hover:brightness-110 hover:scale-105 hover:shadow-[0_0_15px_rgba(255,195,11,0.3)]
                    transition-all duration-300 text-xs font-bold uppercase tracking-wider
                  "
                  title="Call Support"
                >
                  <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="2.5" stroke="currentColor" className="w-4 h-4">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M2.25 6.75c0 8.284 6.716 15 15 15h2.25a2.25 2.25 0 0 0 2.25-2.25v-1.372c0-.516-.351-.966-.852-1.091l-4.423-1.106c-.44-.11-.902.055-1.173.417l-.97 1.293c-.282.376-.769.542-1.21.387a12.035 12.035 0 0 1-7.108-7.108c-.115-.44.05-1.07.387-1.377l1.293-.97c.362-.271.528-.733.417-1.173L6.763 2.25a1.125 1.125 0 0 0-1.091-.852H4.5A2.25 2.25 0 0 0 2.25 4.5v2.25Z" />
                  </svg>
                  Call
                </a>
                
                {/* WhatsApp */}
                <a
                  href="https://wa.me/918500055870"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="
                    flex items-center justify-center gap-2 py-2.5 px-4 rounded-xl
                    bg-[#25D366] border border-[#25D366]/20 text-white
                    hover:brightness-110 hover:scale-105 hover:shadow-[0_0_15px_rgba(37,211,102,0.3)]
                    transition-all duration-300 text-xs font-bold uppercase tracking-wider
                  "
                  title="Chat on WhatsApp"
                >
                  <svg xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 24 24" className="w-4 h-4">
                    <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 0 1-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 0 1-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 0 1 2.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0 0 12.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L0 24l6.335-1.662c1.746.953 3.71 1.455 5.703 1.456h.008c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 0 0-3.48-8.413Z"/>
                  </svg>
                  WhatsApp
                </a>
              </div>
              
              <p className="text-white/80 text-xs font-normal leading-relaxed text-left border-t border-white/10 pt-4">
                Connect with our team for active volunteer onboarding, platform support, and grassroots advocacy tools.
              </p>
            </div>
          </div>
          
        </div>

        {/* Divider */}
        <div className="h-px w-full bg-white/10 mb-6"></div>

        {/* Bottom */}
        <div className="flex flex-col md:flex-row items-center justify-between gap-4 text-sm text-white/80">
          <p>© 2026 Strategy Pulse. All rights reserved.</p>
          <p className="text-[#FFC30B] font-medium tracking-wide">
            Empowering Grassroots Democracy 🇮🇳
          </p>
        </div>
      </div>
    </footer>
  );
}

// =========================================================================
// Main Single-Page App Component
// =========================================================================
export default function App() {
  return (
    <div className="flex flex-col min-h-screen bg-white">
      {/* 3s Fullscreen Loading Splash */}
      <Splash />

      {/* Global Header Bar */}
      <Navbar />

      {/* Main Single Page Sections */}
      <main className="flex-grow">
        <Hero />
        <VolunteerCarousel />
        <TrustIndicators />
        <About />
        <Services />
        <HowItWorks />
        <DashboardPreview />
        <Features />
        <Testimonials />
        <Impact />
        <FAQ />
        {/* <CTA /> */}
      </main>

      {/* Global Site Footer */}
      <Footer />
    </div>
  );
}
