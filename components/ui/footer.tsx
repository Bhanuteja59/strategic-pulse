import Link from "next/link";

import {
  FaInstagram,
  FaFacebookF,
} from "react-icons/fa";

import { FaXTwitter } from "react-icons/fa6";

export default function Footer() {
  return (
    <footer className="relative overflow-hidden bg-gradient-to-br from-[#7A0004] via-[#B30006] to-[#D90416] text-white">

      {/* Glow Effects */}
      <div className="absolute top-0 left-0 w-72 h-72 bg-[#FFC30B]/20 blur-3xl rounded-full"></div>
      <div className="absolute bottom-0 right-0 w-72 h-72 bg-black/20 blur-3xl rounded-full"></div>

      <div className="relative container mx-auto px-6 py-16 max-w-6xl">

        {/* Brand */}
        <div className="text-center mb-10">

          <p className="uppercase tracking-[0.3em] text-xs text-[#FFC30B] mb-3">
            Grassroots • Technology • Empowerment
          </p>

          <h3 className="text-4xl md:text-5xl font-black tracking-tight mb-4">
            <span className="text-[#FFC30B]">
              Strategy
            </span>{" "}
            Pulse
          </h3>

          <p className="text-white/80 text-lg leading-relaxed max-w-2xl mx-auto">
            Building the future of grassroots political empowerment with real support,
            digital recognition, and opportunities for every volunteer.
          </p>
        </div>

        {/* Navigation */}
        <div className="flex flex-wrap justify-center gap-4 md:gap-6 mb-12">

          {[
            ["Why Volunteers", "#why-support-volunteers"],
            ["Support Services", "#services"],
            ["Volunteer Hub", "#volunteer-hub"],
            ["Contact", "#contact"],
          ].map(([label, href]) => (
            <Link
              key={label}
              href={href}
              className="
                px-5 py-2 rounded-full
                bg-white/10 backdrop-blur-md
                border border-white/10
                hover:bg-[#FFC30B]
                hover:text-black
                hover:scale-105
                transition-all duration-300
                text-sm md:text-base
                font-semibold
                shadow-lg
              "
            >
              {label}
            </Link>
          ))}
        </div>

        {/* Social Icons */}
        <div className="flex justify-center gap-5 mb-12 flex-wrap">

          {/* Instagram */}
          <a
            href="https://www.instagram.com/strategicpulse_offical"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="Instagram"
            className="
              w-14 h-14 rounded-2xl
              bg-white/10
              backdrop-blur-md
              border border-white/10
              flex items-center justify-center
              hover:scale-110 hover:-translate-y-1
              hover:bg-gradient-to-br
              hover:from-pink-500
              hover:via-red-500
              hover:to-yellow-400
              transition-all duration-300
              shadow-lg
            "
          >
            <FaInstagram className="text-white text-[28px]" />
          </a>

          {/* Facebook */}
          <a
            href="https://www.facebook.com/share/18kbY3wDTU"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="Facebook"
            className="
              w-14 h-14 rounded-2xl
              bg-white/10
              backdrop-blur-md
              border border-white/10
              flex items-center justify-center
              hover:scale-110 hover:-translate-y-1
              hover:bg-blue-600
              transition-all duration-300
              shadow-lg
            "
          >
            <FaFacebookF className="text-white text-[24px]" />
          </a>

          {/* Twitter X */}
          <a
            href="https://x.com/Koushikprince12"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="Twitter X"
            className="
              w-14 h-14 rounded-2xl
              bg-white/10
              backdrop-blur-md
              border border-white/10
              flex items-center justify-center
              hover:scale-110 hover:-translate-y-1
              hover:bg-black
              transition-all duration-300
              shadow-lg
            "
          >
            <FaXTwitter className="text-white text-[24px]" />
          </a>

        </div>

        {/* Divider */}
        <div className="h-px w-full bg-white/10 mb-6"></div>

        {/* Bottom */}
        <div className="flex flex-col md:flex-row items-center justify-between gap-4 text-sm text-white/70">

          <p>
            © 2026 Strategy Pulse. All rights reserved.
          </p>

          <p className="text-[#FFC30B] font-medium tracking-wide">
            Empowering Grassroots Democracy 🇮🇳
          </p>

        </div>
      </div>
    </footer>
  );
}