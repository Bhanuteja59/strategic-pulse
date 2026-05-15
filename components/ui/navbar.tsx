"use client";

import { useEffect, useState } from "react";
import Link from "next/link";
import { motion } from "framer-motion";
import { Sun, Moon } from "lucide-react";

export default function Navbar() {
  const [isDark, setIsDark] = useState(true);

  useEffect(() => {
    // Check initial state from HTML class
    if (document.documentElement.classList.contains("dark")) {
      setIsDark(true);
    } else {
      setIsDark(false);
    }
  }, []);

  const toggleTheme = () => {
    if (isDark) {
      document.documentElement.classList.remove("dark");
      setIsDark(false);
    } else {
      document.documentElement.classList.add("dark");
      setIsDark(true);
    }
  };

  const navLinks = [
    { name: "Why Support Volunteers", href: "#why-support-volunteers" },
    { name: "Our Approach", href: "#approach" },
    { name: "Support Services", href: "#services" },
    { name: "Volunteer Hub", href: "#volunteer-hub" },
    { name: "Recognition Plans", href: "#plans" },
  ];

  return (
    <motion.header 
      initial={{ y: -100, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.6, ease: "easeOut" }}
      className="fixed top-0 left-0 right-0 z-50 px-4 md:px-8 py-4"
    >
      <div className="max-w-7xl mx-auto glass-panel rounded-2xl px-6 py-3 flex items-center justify-between shadow-xl dark:bg-[#0f172a]/80 bg-white/80 backdrop-blur-md border dark:border-white/10 border-black/10 transition-colors duration-300">
        <Link href="/" className="font-extrabold text-2xl tracking-tight flex items-center gap-2">
          <span className="gradient-text font-black">Strategy</span>
          <span className="text-slate-900 dark:text-white transition-colors duration-300">Pulse</span>
        </Link>

        <nav className="hidden lg:flex gap-8 font-medium text-sm text-slate-700 dark:text-slate-300">
          {navLinks.map((link) => (
            <Link key={link.name} href={link.href} className="hover:text-cyan-600 dark:hover:text-cyan-400 transition-colors py-1">
              {link.name}
            </Link>
          ))}
        </nav>

        <div className="flex items-center gap-4">
          <button 
            onClick={toggleTheme}
            className="w-10 h-10 rounded-xl glass-panel flex items-center justify-center text-slate-800 dark:text-white hover:scale-110 transition-all shadow"
            aria-label="Toggle Theme"
          >
            {isDark ? <Sun className="w-5 h-5 text-amber-400" /> : <Moon className="w-5 h-5 text-indigo-600" />}
          </button>

          <Link 
            href="#contact" 
            className="bg-gradient-to-r from-cyan-500 to-indigo-600 text-white px-6 py-2 rounded-xl shadow-lg shadow-indigo-500/25 text-sm font-bold hover:scale-105 transition-all duration-300"
          >
            Join / Support Today
          </Link>
        </div>
      </div>
    </motion.header>
  );
}
