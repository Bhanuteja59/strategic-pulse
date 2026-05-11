"use client";

import { motion } from "framer-motion";
import { Quote } from "lucide-react";

export default function Testimonials() {
  const testimonials = [
    {
      quote: "Strategic Pulse transformed how we approach field data. We no longer guess what constituents want; we have the exact data mapping localized issues down to the booth level.",
      name: "Rajesh Kumar",
      role: "Campaign Strategy Director",
      organization: "National Democratic Front",
    },
    {
      quote: "The speed at which we can deploy surveys and see results on the dashboard is unprecedented. It's like having a real-time pulse on the entire state.",
      name: "Dr. Anjali Desai",
      role: "Lead Researcher",
      organization: "Institute of Public Policy",
    },
    {
      quote: "Their field intelligence app works flawlessly even in remote areas with poor connectivity. The data integrity we achieve now is far superior to our old paper-based methods.",
      name: "Michael Chen",
      role: "Operations Manager",
      organization: "Civic Action NGO",
    }
  ];

  return (
    <section className="py-24 bg-white dark:bg-slate-950 relative overflow-hidden border-t border-slate-100 dark:border-slate-900">
      <div className="absolute top-0 left-0 w-full h-[500px] bg-gradient-to-b from-slate-50 dark:from-slate-900/30 to-transparent -z-10"></div>
      
      <div className="container mx-auto px-4 md:px-6">
        
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h2 className="text-teal-500 dark:text-teal-400 font-semibold tracking-wider uppercase text-sm mb-3">Trusted By Leaders</h2>
          <h3 className="text-3xl md:text-4xl font-bold text-slate-900 dark:text-white">
            Impact that speaks for itself.
          </h3>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {testimonials.map((testimonial, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: index * 0.2 }}
              className="relative p-8 rounded-3xl bg-slate-50/50 dark:bg-slate-900/50 backdrop-blur-md border border-slate-200 dark:border-slate-800 shadow-lg group hover:-translate-y-2 transition-transform duration-300"
            >
              <Quote className="w-10 h-10 text-teal-500/20 dark:text-teal-400/20 mb-6 group-hover:text-teal-500/40 transition-colors" />
              <p className="text-slate-700 dark:text-slate-300 text-lg leading-relaxed mb-8 relative z-10">
                "{testimonial.quote}"
              </p>
              <div className="border-t border-slate-200 dark:border-slate-800 pt-6">
                <p className="font-bold text-slate-900 dark:text-white">{testimonial.name}</p>
                <p className="text-sm text-slate-500 dark:text-slate-400">{testimonial.role}</p>
                <p className="text-xs text-teal-500 dark:text-teal-400 mt-1 font-semibold">{testimonial.organization}</p>
              </div>
            </motion.div>
          ))}
        </div>
        
      </div>
    </section>
  );
}
