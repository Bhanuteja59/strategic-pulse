"use client";

import { motion } from "framer-motion";
import { Database, Search, Lightbulb, Target } from "lucide-react";

export default function HowItWorks() {
  const steps = [
    {
      num: "01",
      title: "Data Collection",
      description: "Deploy surveys and field teams to gather structured and unstructured sentiment data securely.",
      icon: <Database className="w-6 h-6" />,
    },
    {
      num: "02",
      title: "Survey Analysis",
      description: "Process raw data through our proprietary NLP and demographic mapping engines.",
      icon: <Search className="w-6 h-6" />,
    },
    {
      num: "03",
      title: "Insight Generation",
      description: "Extract meaningful patterns, identifying critical issues and shifting public moods.",
      icon: <Lightbulb className="w-6 h-6" />,
    },
    {
      num: "04",
      title: "Strategic Action",
      description: "Deliver actionable, localized reports to leaders for targeted interventions.",
      icon: <Target className="w-6 h-6" />,
    }
  ];

  return (
    <section className="py-24 bg-white dark:bg-slate-950 relative overflow-hidden border-t border-slate-100 dark:border-slate-900">
      {/* Decorative gradient */}
      <div className="absolute top-0 right-0 w-[800px] h-[800px] bg-teal-500/5 dark:bg-teal-500/10 rounded-full blur-[120px] -z-10 translate-x-1/3 -translate-y-1/3"></div>

      <div className="container mx-auto px-4 md:px-6">
        
        <div className="mb-16 md:mb-24">
          <h2 className="text-teal-500 dark:text-teal-400 font-semibold tracking-wider uppercase text-sm mb-3">How It Works</h2>
          <h3 className="text-3xl md:text-4xl font-bold text-slate-900 dark:text-white max-w-2xl">
            From raw field data to decisive leadership action in four steps.
          </h3>
        </div>

        <div className="relative">
          {/* Connecting Line (Desktop) */}
          <div className="hidden md:block absolute top-12 left-0 w-full h-[2px] bg-slate-100 dark:bg-slate-800">
             <motion.div 
               initial={{ width: 0 }}
               whileInView={{ width: "100%" }}
               viewport={{ once: true }}
               transition={{ duration: 1.5, ease: "easeInOut" }}
               className="h-full bg-gradient-to-r from-teal-500 via-orange-500 to-teal-500"
             ></motion.div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-4 gap-12 md:gap-8">
            {steps.map((step, index) => (
              <motion.div
                key={step.num}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: index * 0.2 }}
                className="relative z-10"
              >
                {/* Step Node */}
                <div className="w-24 h-24 rounded-2xl bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 shadow-xl flex flex-col items-center justify-center mb-6 relative group">
                  <div className="absolute inset-0 bg-gradient-to-br from-teal-500/10 to-orange-500/10 opacity-0 group-hover:opacity-100 transition-opacity rounded-2xl"></div>
                  <span className="text-sm font-bold text-slate-400 dark:text-slate-500 mb-1">{step.num}</span>
                  <div className="text-teal-500 dark:text-teal-400 group-hover:scale-110 transition-transform">
                    {step.icon}
                  </div>
                </div>

                {/* Content */}
                <h4 className="text-xl font-bold text-slate-900 dark:text-white mb-3">
                  {step.title}
                </h4>
                <p className="text-slate-600 dark:text-slate-400 leading-relaxed">
                  {step.description}
                </p>
              </motion.div>
            ))}
          </div>
        </div>

      </div>
    </section>
  );
}
