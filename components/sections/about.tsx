"use client";

import { motion } from "framer-motion";
import { CheckCircle2 } from "lucide-react";
import { Button } from "@/components/ui/button";

export default function About() {
  const values = [
    "Transparent Field Intelligence",
    "Real-Time Analytics",
    "Civic Engagement Technologies",
    "Data-Driven Impact",
  ];

  return (
    <section className="py-24 bg-white dark:bg-slate-950 overflow-hidden relative border-t border-slate-100 dark:border-slate-900">
      <div className="container mx-auto px-4 md:px-6">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          
          {/* Image / Abstract Visual */}
          <motion.div 
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="relative"
          >
            {/* Main Graphic */}
            <div className="relative aspect-square md:aspect-[4/3] rounded-3xl overflow-hidden bg-slate-50 dark:bg-slate-900/50 border border-slate-200 dark:border-slate-800 flex items-center justify-center p-8">
               <div className="absolute inset-0 bg-gradient-to-br from-teal-500/5 to-orange-500/5 mix-blend-overlay"></div>
               
               {/* Abstract Network Graphic */}
               <div className="relative w-full h-full">
                 <svg viewBox="0 0 400 400" className="w-full h-full text-slate-200 dark:text-slate-800">
                    <path d="M50 200 Q 150 50, 350 200 T 50 200" fill="none" stroke="currentColor" strokeWidth="2" />
                    <path d="M100 300 Q 200 100, 300 300 T 100 300" fill="none" stroke="currentColor" strokeWidth="2" />
                    <circle cx="50" cy="200" r="6" className="fill-teal-500" />
                    <circle cx="350" cy="200" r="8" className="fill-orange-500" />
                    <circle cx="100" cy="300" r="5" className="fill-teal-500" />
                    <circle cx="300" cy="300" r="7" className="fill-orange-500" />
                    <circle cx="200" cy="150" r="12" className="fill-slate-900 dark:fill-white" />
                 </svg>
                 
                 {/* Floating Elements overlay */}
                 <motion.div 
                   animate={{ y: [0, -10, 0] }}
                   transition={{ repeat: Infinity, duration: 4, ease: "easeInOut" }}
                   className="absolute top-1/4 right-1/4 bg-slate-900/90 backdrop-blur-md p-4 rounded-xl shadow-lg border border-slate-800"
                 >
                   <p className="text-xs font-bold text-slate-400">Sentiment Match</p>
                   <p className="text-lg font-bold text-teal-400">92%</p>
                 </motion.div>
               </div>
            </div>

            {/* Decorative background circle */}
            <div className="absolute -bottom-10 -left-10 w-40 h-40 bg-teal-500/10 rounded-full blur-3xl -z-10"></div>
          </motion.div>

          {/* Text Content */}
          <motion.div 
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="space-y-8"
          >
            <div>
              <h2 className="text-teal-500 dark:text-teal-400 font-semibold tracking-wider uppercase text-sm mb-3">Our Mission</h2>
              <h3 className="text-3xl md:text-4xl font-bold text-slate-900 dark:text-white leading-tight mb-6">
                Bridging the gap between people and decision-makers.
              </h3>
              <p className="text-lg text-slate-600 dark:text-slate-300 leading-relaxed">
                We believe that great leadership starts with deep understanding. Our mission is to provide organizations with transparent field intelligence, real-time analytics, and civic engagement technologies that drive meaningful public impact.
              </p>
            </div>

            <ul className="space-y-4">
              {values.map((value, index) => (
                <motion.li 
                  key={index}
                  initial={{ opacity: 0, y: 10 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: 0.2 + (index * 0.1) }}
                  className="flex items-center gap-3"
                >
                  <CheckCircle2 className="w-5 h-5 text-teal-500 flex-shrink-0" />
                  <span className="text-slate-700 dark:text-slate-200 font-medium">{value}</span>
                </motion.li>
              ))}
            </ul>

            <div className="pt-4">
              <Button size="lg" className="rounded-full bg-teal hover:bg-teal/90 text-white font-semibold transition-all duration-300">
                Learn More About Us
              </Button>
            </div>
          </motion.div>

        </div>
      </div>
    </section>
  );
}
