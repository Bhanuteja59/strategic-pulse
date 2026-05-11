"use client";

import { motion } from "framer-motion";
import { Globe, Users2, TrendingUp, CheckCircle } from "lucide-react";

export default function Impact() {
  const impacts = [
    {
      value: "5M+",
      label: "Citizens Reached",
      icon: <Users2 className="w-5 h-5" />,
      color: "text-blue-500",
      bg: "bg-blue-500/10"
    },
    {
      value: "20+",
      label: "Elections Supported",
      icon: <CheckCircle className="w-5 h-5" />,
      color: "text-teal",
      bg: "bg-teal/10"
    },
    {
      value: "150+",
      label: "Constituencies Mapped",
      icon: <Globe className="w-5 h-5" />,
      color: "text-orange",
      bg: "bg-orange/10"
    },
    {
      value: "40%",
      label: "Avg. Engagement Growth",
      icon: <TrendingUp className="w-5 h-5" />,
      color: "text-purple-500",
      bg: "bg-purple-500/10"
    }
  ];

  return (
    <section className="py-24 bg-navy relative overflow-hidden">
      {/* Background Graphic */}
      <div className="absolute inset-0 opacity-10">
        <svg className="w-full h-full" xmlns="http://www.w3.org/2000/svg">
          <defs>
            <pattern id="grid" width="40" height="40" patternUnits="userSpaceOnUse">
              <path d="M 40 0 L 0 0 0 40" fill="none" stroke="white" strokeWidth="0.5" />
            </pattern>
          </defs>
          <rect width="100%" height="100%" fill="url(#grid)" />
        </svg>
      </div>
      
      <div className="absolute top-0 right-0 w-[600px] h-[600px] bg-teal/20 rounded-full blur-[120px] -z-10 translate-x-1/2 -translate-y-1/2"></div>
      <div className="absolute bottom-0 left-0 w-[600px] h-[600px] bg-orange/10 rounded-full blur-[120px] -z-10 -translate-x-1/2 translate-y-1/2"></div>

      <div className="container mx-auto px-4 md:px-6 relative z-10">
        
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
          >
            <h2 className="text-teal font-semibold tracking-wider uppercase text-sm mb-3">Our Impact</h2>
            <h3 className="text-3xl md:text-5xl font-bold text-white leading-tight mb-6">
              Driving democracy forward with data.
            </h3>
            <p className="text-gray-400 text-lg mb-8 leading-relaxed max-w-lg">
              We don't just collect numbers; we catalyze change. Our platform empowers leaders to understand their constituencies deeply, resulting in better policies, targeted campaigns, and stronger public trust.
            </p>
            
            <div className="grid grid-cols-2 gap-6">
              {impacts.map((impact, index) => (
                <div key={index} className="flex flex-col gap-2">
                  <div className={`w-10 h-10 rounded-lg flex items-center justify-center ${impact.bg} ${impact.color} mb-2`}>
                    {impact.icon}
                  </div>
                  <span className="text-3xl font-bold text-white">{impact.value}</span>
                  <span className="text-sm text-gray-400">{impact.label}</span>
                </div>
              ))}
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="relative"
          >
            <div className="aspect-square w-full max-w-md mx-auto relative">
              {/* Central Globe/Node */}
              <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-48 h-48 bg-navy border-4 border-teal rounded-full shadow-[0_0_50px_rgba(15,118,110,0.5)] flex items-center justify-center z-20">
                <Globe className="w-20 h-20 text-teal opacity-80" />
              </div>
              
              {/* Orbiting Elements */}
              <motion.div 
                animate={{ rotate: 360 }}
                transition={{ repeat: Infinity, duration: 20, ease: "linear" }}
                className="absolute inset-0 border border-white/10 rounded-full"
              >
                <div className="absolute top-0 left-1/2 -translate-x-1/2 -translate-y-1/2 w-12 h-12 bg-white/10 backdrop-blur-md rounded-full border border-white/20 flex items-center justify-center">
                  <div className="w-3 h-3 bg-orange rounded-full"></div>
                </div>
              </motion.div>
              
              <motion.div 
                animate={{ rotate: -360 }}
                transition={{ repeat: Infinity, duration: 25, ease: "linear" }}
                className="absolute inset-8 border border-dashed border-white/20 rounded-full"
              >
                <div className="absolute bottom-1/4 right-0 w-8 h-8 bg-white/10 backdrop-blur-md rounded-full border border-white/20 flex items-center justify-center">
                  <div className="w-2 h-2 bg-teal rounded-full"></div>
                </div>
              </motion.div>

              <motion.div 
                animate={{ rotate: 360 }}
                transition={{ repeat: Infinity, duration: 30, ease: "linear" }}
                className="absolute inset-16 border border-white/5 rounded-full"
              >
                <div className="absolute top-1/3 left-0 w-10 h-10 bg-white/10 backdrop-blur-md rounded-full border border-white/20 flex items-center justify-center">
                  <div className="w-2 h-2 bg-blue-500 rounded-full"></div>
                </div>
              </motion.div>
            </div>
          </motion.div>
          
        </div>
      </div>
    </section>
  );
}
