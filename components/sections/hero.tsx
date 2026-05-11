"use client";

import { motion } from "framer-motion";
import { ArrowRight, BarChart2, Users, MapPin, Activity } from "lucide-react";
import { Button } from "@/components/ui/button";

export default function Hero() {
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden bg-background pt-20">
      {/* Background abstract elements */}
      <div className="absolute inset-0 w-full h-full">
        <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-teal/10 rounded-full blur-[100px] animate-pulse"></div>
        <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-orange/10 rounded-full blur-[100px] animate-pulse" style={{ animationDelay: "2s" }}></div>
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-full max-w-4xl h-[600px] bg-navy/5 rounded-full blur-[120px]"></div>
      </div>

      <div className="container relative z-10 mx-auto px-4 md:px-6">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-8 items-center">
          
          {/* Text Content */}
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="max-w-2xl"
          >
            <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-teal/10 text-teal-300 font-semibold text-xs tracking-wider uppercase mb-6 border border-teal-500/30 shadow-[0_0_15px_rgba(15,118,110,0.15)]">
              <span className="relative flex h-2 w-2">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-teal-400 opacity-75"></span>
                <span className="relative inline-flex rounded-full h-2 w-2 bg-teal-400"></span>
              </span>
              AI-Powered Civic Intelligence
            </div>
            
            <h1 className="text-5xl lg:text-6xl xl:text-7xl font-extrabold tracking-tight text-white mb-6 leading-[1.1]">
              Understanding <span className="bg-clip-text text-transparent bg-gradient-to-r from-teal-400 to-emerald-300 drop-shadow-[0_2px_10px_rgba(20,184,166,0.2)]">People.</span><br />
              Empowering <span className="bg-clip-text text-transparent bg-gradient-to-r from-amber-400 to-orange-500 drop-shadow-[0_2px_10px_rgba(245,158,11,0.2)]">Leadership.</span>
            </h1>
            
            <p className="text-lg md:text-xl text-slate-300 mb-10 max-w-xl leading-relaxed">
              We help organizations and leaders make smarter decisions through public insights, surveys, and constituency intelligence.
            </p>
            
            <div className="flex flex-col sm:flex-row gap-4">
              <Button size="lg" className="rounded-full text-base h-12 px-8 bg-teal hover:bg-teal/90 text-white font-semibold transition-all duration-300 hover:shadow-[0_0_20px_rgba(15,118,110,0.4)]">
                Request Consultation
                <ArrowRight className="ml-2 w-4 h-4 animate-pulse" />
              </Button>
              <Button size="lg" variant="outline" className="rounded-full text-base h-12 px-8 border-slate-700 hover:border-teal/50 !bg-transparent hover:!bg-teal/10 !text-slate-200 hover:!text-white transition-all duration-300">
                Explore Services
              </Button>
            </div>
          </motion.div>

          {/* Abstract Dashboard Visuals */}
          <motion.div 
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="relative h-[500px] w-full hidden md:block"
          >
            {/* Main Card */}
            <motion.div 
              animate={{ y: [0, -10, 0] }}
              transition={{ repeat: Infinity, duration: 6, ease: "easeInOut" }}
              className="absolute top-10 right-10 w-[80%] bg-slate-900/90 backdrop-blur-xl p-6 rounded-2xl shadow-[0_20px_50px_rgba(0,0,0,0.5)] z-20 border border-slate-800"
            >
              <div className="flex items-center justify-between mb-6">
                <div>
                  <h3 className="text-slate-100 font-semibold text-lg">Constituency Sentiment</h3>
                  <p className="text-slate-400 text-sm">Real-time polling data</p>
                </div>
                <div className="bg-teal/20 text-teal-400 p-2.5 rounded-xl border border-teal-500/20">
                  <Activity className="w-5 h-5 animate-pulse" />
                </div>
              </div>
              
              {/* Fake Chart */}
              <div className="h-36 flex items-end gap-3.5 pt-4">
                {[40, 65, 45, 80, 55, 90, 75].map((height, i) => (
                  <motion.div 
                    key={i}
                    initial={{ height: 0 }}
                    animate={{ height: `${height}%` }}
                    transition={{ duration: 1, delay: 0.5 + (i * 0.1) }}
                    className="flex-1 bg-gradient-to-t from-teal-500/20 via-teal-400 to-teal-300 rounded-t-lg relative group"
                  >
                    <div className="absolute -top-8 left-1/2 -translate-x-1/2 bg-slate-800 text-white text-xs px-2 py-1 rounded opacity-0 group-hover:opacity-100 transition-opacity whitespace-nowrap pointer-events-none">
                      {height}% Match
                    </div>
                  </motion.div>
                ))}
              </div>
            </motion.div>

            {/* Floating Card 1 */}
            <motion.div 
              animate={{ y: [0, 15, 0] }}
              transition={{ repeat: Infinity, duration: 5, ease: "easeInOut", delay: 1 }}
              className="absolute top-40 -left-4 w-52 bg-slate-900/90 backdrop-blur-xl p-4 rounded-2xl shadow-xl z-30 border border-slate-800"
            >
              <div className="flex items-center gap-3 mb-3">
                <div className="bg-orange/20 text-orange p-2.5 rounded-xl border border-orange-500/20">
                  <Users className="w-4 h-4" />
                </div>
                <span className="text-sm font-semibold text-slate-200">Active Surveys</span>
              </div>
              <p className="text-2xl font-black text-white">12,450</p>
              <p className="text-xs text-emerald-400 font-medium mt-1 flex items-center gap-1">
                <span>▲</span> +14% this week
              </p>
            </motion.div>

            {/* Floating Card 2 */}
            <motion.div 
              animate={{ y: [0, -15, 0] }}
              transition={{ repeat: Infinity, duration: 7, ease: "easeInOut", delay: 2 }}
              className="absolute bottom-10 right-0 w-60 bg-slate-900/90 backdrop-blur-xl p-5 rounded-2xl shadow-2xl z-30 border border-slate-800"
            >
              <div className="flex items-center gap-3 mb-4">
                <div className="bg-teal/20 text-teal-400 p-2.5 rounded-xl border border-teal-500/20">
                  <MapPin className="w-4 h-4" />
                </div>
                <span className="text-sm font-semibold text-slate-200">Regions Active</span>
              </div>
              <div className="space-y-3">
                <div className="space-y-1">
                  <div className="flex justify-between text-xs text-slate-400">
                    <span>Urban Centers</span>
                    <span className="text-teal-400 font-medium">85%</span>
                  </div>
                  <div className="h-1.5 w-full bg-slate-800 rounded-full overflow-hidden">
                    <motion.div initial={{ width: 0 }} animate={{ width: "85%" }} transition={{ duration: 1, delay: 1 }} className="h-full bg-teal-400 rounded-full"></motion.div>
                  </div>
                </div>
                <div className="space-y-1">
                  <div className="flex justify-between text-xs text-slate-400">
                    <span>Rural Districts</span>
                    <span className="text-orange font-medium">65%</span>
                  </div>
                  <div className="h-1.5 w-full bg-slate-800 rounded-full overflow-hidden">
                    <motion.div initial={{ width: 0 }} animate={{ width: "65%" }} transition={{ duration: 1, delay: 1.2 }} className="h-full bg-orange rounded-full"></motion.div>
                  </div>
                </div>
              </div>
            </motion.div>

          </motion.div>
        </div>
      </div>
    </section>
  );
}
