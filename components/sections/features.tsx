"use client";

import { motion } from "framer-motion";
import { Brain, Shield, Clock, Smartphone, FileSpreadsheet, Lock } from "lucide-react";

export default function Features() {
  return (
    <section className="py-24 bg-slate-50 dark:bg-slate-950 border-t border-slate-200 dark:border-slate-900">
      <div className="container mx-auto px-4 md:px-6">
        
        <div className="mb-16 md:mb-20">
          <h2 className="text-teal-500 dark:text-teal-400 font-semibold tracking-wider uppercase text-sm mb-3">Core Features</h2>
          <h3 className="text-3xl md:text-4xl font-bold text-slate-900 dark:text-white max-w-2xl">
            Everything you need to understand the public pulse.
          </h3>
        </div>

        {/* Bento Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 auto-rows-[250px]">
          
          {/* Feature 1 (Large) */}
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="md:col-span-2 md:row-span-2 rounded-3xl bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 p-8 flex flex-col justify-between overflow-hidden relative group hover:border-teal-500/50 transition-colors"
          >
            <div className="absolute top-0 right-0 w-64 h-64 bg-teal-500/5 rounded-full blur-3xl -z-10 group-hover:bg-teal-500/10 transition-colors"></div>
            
            <div className="max-w-md">
              <div className="w-12 h-12 bg-teal-500/10 text-teal-500 rounded-xl flex items-center justify-center mb-6">
                <Brain className="w-6 h-6" />
              </div>
              <h4 className="text-2xl font-bold text-slate-900 dark:text-white mb-4">AI-Powered Insights</h4>
              <p className="text-slate-600 dark:text-slate-400 text-lg leading-relaxed mb-6">
                Our proprietary NLP models analyze thousands of open-ended survey responses and field reports in seconds to extract core sentiments, emerging themes, and critical issues.
              </p>
            </div>
            
            {/* Abstract visual for AI */}
            <div className="self-end w-full max-w-sm h-32 bg-slate-50 dark:bg-slate-950 rounded-xl border border-slate-200 dark:border-slate-800 p-4 flex gap-2 overflow-hidden">
               {[1,2,3,4,5].map(i => (
                 <motion.div 
                   key={i}
                   animate={{ height: ["20%", "80%", "40%"] }}
                   transition={{ repeat: Infinity, duration: 1.5 + (i * 0.2), ease: "easeInOut" }}
                   className="flex-1 bg-gradient-to-t from-teal-500/40 to-teal-400 rounded-full"
                 ></motion.div>
               ))}
            </div>
          </motion.div>

          {/* Feature 2 */}
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.1 }}
            className="rounded-3xl bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 p-8 flex flex-col group hover:border-orange-500/50 transition-colors"
          >
            <div className="w-12 h-12 bg-orange-500/10 text-orange-500 rounded-xl flex items-center justify-center mb-6">
              <Clock className="w-6 h-6" />
            </div>
            <h4 className="text-xl font-bold text-slate-900 dark:text-white mb-3">Real-Time Analytics</h4>
            <p className="text-slate-600 dark:text-slate-400">
              Watch data flow in live as field agents submit surveys. No more waiting days for reports.
            </p>
          </motion.div>

          {/* Feature 3 */}
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="rounded-3xl bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 p-8 flex flex-col group hover:border-blue-500/50 transition-colors"
          >
            <div className="w-12 h-12 bg-blue-500/10 text-blue-500 rounded-xl flex items-center justify-center mb-6">
              <Smartphone className="w-6 h-6" />
            </div>
            <h4 className="text-xl font-bold text-slate-900 dark:text-white mb-3">Mobile Field App</h4>
            <p className="text-slate-600 dark:text-slate-400">
              Offline-first mobile applications for agents to collect data anywhere, syncing when online.
            </p>
          </motion.div>

          {/* Feature 4 */}
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.3 }}
            className="rounded-3xl bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 p-8 flex flex-col group hover:border-purple-500/50 transition-colors"
          >
            <div className="w-12 h-12 bg-purple-500/10 text-purple-500 rounded-xl flex items-center justify-center mb-6">
              <FileSpreadsheet className="w-6 h-6" />
            </div>
            <h4 className="text-xl font-bold text-slate-900 dark:text-white mb-3">Advanced Reporting</h4>
            <p className="text-slate-600 dark:text-slate-400">
              Export presentation-ready reports with a single click, customized for different stakeholders.
            </p>
          </motion.div>

          {/* Feature 5 (Wide) */}
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.4 }}
            className="md:col-span-2 rounded-3xl bg-slate-900 text-white border border-slate-800 p-8 flex flex-col md:flex-row items-center gap-8 group overflow-hidden relative"
          >
            <div className="absolute inset-0 bg-[url('https://www.transparenttextures.com/patterns/cubes.png')] opacity-5"></div>
            
            <div className="flex-1 relative z-10">
              <div className="w-12 h-12 bg-white/10 text-white rounded-xl flex items-center justify-center mb-6">
                <Shield className="w-6 h-6" />
              </div>
              <h4 className="text-xl font-bold mb-3 text-white">Secure Data Systems</h4>
              <p className="text-slate-300">
                Enterprise-grade security protocols ensure that sensitive constituency data and strategic intelligence are strictly protected with role-based access control.
              </p>
            </div>
            
            <div className="w-full md:w-1/3 flex justify-center relative z-10">
               <div className="w-32 h-32 rounded-full border-4 border-teal-500 flex items-center justify-center bg-white/5 relative">
                 <Lock className="w-10 h-10 text-teal-400" />
                 {/* Rotating dashed border */}
                 <motion.div 
                   animate={{ rotate: 360 }}
                   transition={{ repeat: Infinity, duration: 10, ease: "linear" }}
                   className="absolute -inset-2 border border-dashed border-white/30 rounded-full"
                 ></motion.div>
               </div>
            </div>
          </motion.div>

        </div>
      </div>
    </section>
  );
}
