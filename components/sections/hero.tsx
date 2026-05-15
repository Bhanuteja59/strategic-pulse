"use client";

import Image from "next/image";
import { motion } from "framer-motion";

export default function Hero() {
  return (
    <section className="relative pt-36 pb-24 px-6 overflow-hidden bg-slate-50 dark:bg-[radial-gradient(ellipse_at_top,_var(--tw-gradient-stops))] dark:from-indigo-950/40 dark:via-[#0b0f19] dark:to-[#0b0f19] transition-colors duration-300" id="hero">
      {/* Background glow effects */}
      <div className="absolute top-20 left-1/2 -translate-x-1/2 w-[600px] h-[300px] bg-gradient-to-r from-cyan-500/20 to-indigo-500/20 blur-[120px] rounded-full pointer-events-none -z-10"></div>
      
      <div className="max-w-6xl mx-auto text-center relative z-10">
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="inline-block mb-6 px-4 py-1.5 glass-panel rounded-full border border-cyan-500/30 bg-cyan-500/10"
        >
          <span className="text-cyan-600 dark:text-cyan-400 font-bold text-xs tracking-wider uppercase flex items-center gap-2">
            <span className="w-2 h-2 rounded-full bg-cyan-500 dark:bg-cyan-400 animate-pulse"></span>
            Empowering Volunteers & Booth Workers
          </span>
        </motion.div>
        
        <motion.h1 
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="text-4xl sm:text-5xl md:text-6xl font-black text-slate-900 dark:text-white mb-8 leading-[1.15] tracking-tight max-w-4xl mx-auto transition-colors duration-300"
        >
          Supporting the <span className="gradient-text">Grassroots Champions</span> of Politics
        </motion.h1>
        
        <motion.p 
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.4 }}
          className="text-lg md:text-xl text-slate-700 dark:text-slate-300 mb-12 max-w-3xl mx-auto font-normal leading-relaxed transition-colors duration-300"
        >
          Behind every successful campaign are the dedicated volunteers doing the vital daily tasks. We empower booth workers and community organizers with micro-jobs, smart management tools, and the recognition they truly deserve.
        </motion.p>
        
        <motion.div 
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.6 }}
          className="flex flex-col sm:flex-row justify-center items-center gap-5 mb-20"
        >
          <a 
            href="#contact" 
            className="w-full sm:w-auto bg-gradient-to-r from-cyan-500 to-indigo-600 text-white px-8 py-4 rounded-xl shadow-xl shadow-indigo-500/25 text-lg font-bold hover:scale-105 transition-all duration-300 text-center"
          >
            Join Volunteer Network
          </a>
          <a 
            href="#services" 
            className="w-full sm:w-auto glass-panel text-slate-800 dark:text-white border border-black/10 dark:border-white/20 px-8 py-4 rounded-xl text-lg font-bold hover:bg-black/5 dark:hover:bg-white/10 transition-all duration-300 text-center"
          >
            Explore Micro-Jobs
          </a>
        </motion.div>

        {/* Featured Showcase Image */}
        <motion.div 
          initial={{ opacity: 0, scale: 0.95 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8, delay: 0.8 }}
          className="relative mx-auto max-w-4xl rounded-2xl overflow-hidden shadow-2xl border border-black/10 dark:border-white/10 glass-panel p-2"
        >
          <div className="relative rounded-xl overflow-hidden aspect-video">
            <Image 
              src="/images/volunteer_community_support.png" 
              alt="Diverse grassroots political volunteers collaborating" 
              fill
              className="object-cover"
              priority
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black via-black/40 to-transparent opacity-80"></div>
            <div className="absolute bottom-6 left-6 right-6 flex flex-col md:flex-row justify-between items-start md:items-end gap-4">
               <div>
                 <span className="px-3 py-1 bg-cyan-500/20 text-cyan-300 border border-cyan-500/40 rounded-full text-xs font-bold uppercase tracking-wider mb-2 inline-block">
                   Live Community Impact
                 </span>
                 <h3 className="text-white text-xl md:text-2xl font-bold text-left">
                   Connecting local organizers with real-time opportunities
                 </h3>
               </div>
               <div className="bg-black/60 backdrop-blur-md px-4 py-2 rounded-xl border border-white/20 flex items-center gap-3">
                 <div className="w-3 h-3 rounded-full bg-emerald-400 animate-ping"></div>
                 <span className="text-white font-semibold text-sm">Active Network</span>
               </div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
