"use client";

import { motion } from "framer-motion";
import { useEffect, useState } from "react";

function Counter({ end, suffix = "" }: { end: number; suffix?: string }) {
  const [count, setCount] = useState(0);

  useEffect(() => {
    let start = 0;
    const endValue = end;
    if (start === endValue) return;

    let totalDuration = 2000;
    let incrementTime = (totalDuration / endValue) * 2;
    
    if(endValue > 100) {
      incrementTime = totalDuration / 100;
    }

    const timer = setInterval(() => {
      start += endValue > 100 ? Math.ceil(endValue / 100) : 1;
      if (start > endValue) start = endValue;
      setCount(start);
      if (start === endValue) clearInterval(timer);
    }, incrementTime);

    return () => clearInterval(timer);
  }, [end]);

  return (
    <span className="text-4xl md:text-5xl font-black tracking-tight text-slate-900 dark:text-white">
      {count}{suffix}
    </span>
  );
}

export default function TrustIndicators() {
  const stats = [
    { label: "Survey Responses", value: 50, suffix: "K+" },
    { label: "Field Teams", value: 120, suffix: "+" },
    { label: "Regions Covered", value: 20, suffix: "+" },
    { label: "Data Accuracy", value: 95, suffix: "%" },
  ];

  return (
    <section className="py-20 bg-slate-50 dark:bg-slate-900/50 border-y border-slate-200 dark:border-slate-800">
      <div className="container mx-auto px-4 md:px-6">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8 md:gap-12">
          {stats.map((stat, index) => (
            <motion.div
              key={stat.label}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              className="flex flex-col items-center justify-center text-center space-y-2"
            >
              <Counter end={stat.value} suffix={stat.suffix} />
              <p className="text-sm md:text-base font-semibold text-slate-500 dark:text-slate-400">
                {stat.label}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
