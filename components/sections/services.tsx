"use client";

import { motion } from "framer-motion";
import { 
  ClipboardList, 
  Map, 
  Users, 
  LineChart, 
  MessageSquare, 
  Zap, 
  Smartphone, 
  Lightbulb 
} from "lucide-react";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";

export default function Services() {
  const services = [
    {
      title: "Public Opinion Surveys",
      description: "Comprehensive polling and surveying to gauge public sentiment accurately.",
      icon: <ClipboardList className="w-6 h-6" />,
      color: "from-teal-500/10 to-transparent",
      iconColor: "text-teal-400"
    },
    {
      title: "Constituency Analysis",
      description: "Deep demographic and sentiment breakdowns by specific regions and booths.",
      icon: <Map className="w-6 h-6" />,
      color: "from-orange-500/10 to-transparent",
      iconColor: "text-orange-400"
    },
    {
      title: "Field Intelligence",
      description: "Deploy and manage on-ground teams for direct data collection.",
      icon: <Users className="w-6 h-6" />,
      color: "from-blue-500/10 to-transparent",
      iconColor: "text-blue-400"
    },
    {
      title: "Campaign Analytics",
      description: "Track the performance and reach of initiatives in real-time.",
      icon: <LineChart className="w-6 h-6" />,
      color: "from-purple-500/10 to-transparent",
      iconColor: "text-purple-400"
    },
    {
      title: "Citizen Engagement",
      description: "Tools to foster direct two-way communication with the public.",
      icon: <MessageSquare className="w-6 h-6" />,
      color: "from-pink-500/10 to-transparent",
      iconColor: "text-pink-400"
    },
    {
      title: "Real-Time Reporting",
      description: "Live dashboards that synthesize complex data into actionable insights.",
      icon: <Zap className="w-6 h-6" />,
      color: "from-yellow-500/10 to-transparent",
      iconColor: "text-yellow-400"
    },
    {
      title: "Mobile Data Collection",
      description: "Secure mobile applications for field agents to capture data offline.",
      icon: <Smartphone className="w-6 h-6" />,
      color: "from-green-500/10 to-transparent",
      iconColor: "text-green-400"
    },
    {
      title: "Strategic Insights",
      description: "AI-driven recommendations based on historical and current trends.",
      icon: <Lightbulb className="w-6 h-6" />,
      color: "from-indigo-500/10 to-transparent",
      iconColor: "text-indigo-400"
    }
  ];

  return (
    <section className="py-24 bg-slate-50 dark:bg-slate-900 border-t border-slate-200 dark:border-slate-800">
      <div className="container mx-auto px-4 md:px-6">
        
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h2 className="text-teal-500 dark:text-teal-400 font-semibold tracking-wider uppercase text-sm mb-3">Our Services</h2>
          <h3 className="text-3xl md:text-4xl font-bold text-slate-900 dark:text-white mb-6">
            Intelligence capabilities for modern leadership.
          </h3>
          <p className="text-lg text-slate-600 dark:text-slate-400">
            A comprehensive suite of tools designed to gather, analyze, and act upon public intelligence.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {services.map((service, index) => (
            <motion.div
              key={service.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
            >
              <Card className="h-full group hover:shadow-xl transition-all duration-300 border-slate-200 dark:border-slate-800 bg-white dark:bg-slate-950 hover:-translate-y-1.5 overflow-hidden relative rounded-2xl">
                {/* Hover Gradient Background */}
                <div className={`absolute inset-0 bg-gradient-to-br ${service.color} opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none`}></div>
                
                <CardHeader className="relative z-10">
                  <div className={`w-12 h-12 rounded-xl bg-slate-100 dark:bg-slate-900 border border-slate-200/50 dark:border-slate-800 flex items-center justify-center mb-4 group-hover:scale-110 transition-transform duration-300 ${service.iconColor}`}>
                    {service.icon}
                  </div>
                  <CardTitle className="text-xl font-bold text-slate-900 dark:text-white group-hover:text-teal-500 dark:group-hover:text-teal-400 transition-colors">
                    {service.title}
                  </CardTitle>
                </CardHeader>
                <CardContent className="relative z-10">
                  <CardDescription className="text-base text-slate-600 dark:text-slate-400 leading-relaxed">
                    {service.description}
                  </CardDescription>
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
