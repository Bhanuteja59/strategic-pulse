"use client";

import { motion } from "framer-motion";
import { BarChart3, PieChart, Activity, Map, ArrowUpRight, Users } from "lucide-react";

export default function DashboardPreview() {
  return (
    <section className="py-32 bg-navy relative overflow-hidden">
      {/* Background Glows */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-teal/20 rounded-full blur-[150px] pointer-events-none"></div>

      <div className="container mx-auto px-4 md:px-6 relative z-10">
        
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h2 className="text-teal-400 font-semibold tracking-wider uppercase text-sm mb-3">SaaS Platform</h2>
          <h3 className="text-3xl md:text-5xl font-bold text-white mb-6">
            Actionable intelligence at your fingertips.
          </h3>
          <p className="text-lg text-slate-300">
            Monitor public sentiment, track field operations, and analyze constituency data through our secure, real-time dashboard.
          </p>
        </div>

        {/* Dashboard Mockup */}
        <motion.div 
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="rounded-2xl border border-white/10 bg-slate-900/80 backdrop-blur-xl shadow-[0_25px_60px_-15px_rgba(0,0,0,0.7)] overflow-hidden max-w-5xl mx-auto"
        >
          {/* Top Bar */}
          <div className="h-12 border-b border-white/10 bg-white/5 flex items-center px-4 gap-4">
            <div className="flex gap-1.5">
              <div className="w-3 h-3 rounded-full bg-red-500/80"></div>
              <div className="w-3 h-3 rounded-full bg-yellow-500/80"></div>
              <div className="w-3 h-3 rounded-full bg-green-500/80"></div>
            </div>
            <div className="flex-1"></div>
            <div className="h-6 w-64 bg-white/5 rounded px-3 flex items-center">
               <div className="w-4 h-4 text-slate-400 mr-2"><SearchIcon /></div>
               <div className="h-2 w-20 bg-slate-500/50 rounded"></div>
            </div>
            <div className="flex gap-3">
               <div className="w-6 h-6 rounded bg-white/10"></div>
               <div className="w-6 h-6 rounded-full bg-gradient-to-tr from-teal-400 to-amber-400"></div>
            </div>
          </div>

          {/* Main Dashboard Area */}
          <div className="p-6 grid grid-cols-12 gap-6 h-[600px]">
            
            {/* Sidebar */}
            <div className="col-span-2 space-y-4 border-r border-white/5 pr-4 hidden md:block">
              <div className="h-8 bg-teal-500/20 text-teal-300 rounded-lg flex items-center px-3 mb-6 font-semibold"><BarChart3 className="w-4 h-4 mr-2"/> Overview</div>
              <div className="h-8 hover:bg-white/5 text-slate-400 rounded-lg flex items-center px-3 transition-colors"><Map className="w-4 h-4 mr-2"/> Territories</div>
              <div className="h-8 hover:bg-white/5 text-slate-400 rounded-lg flex items-center px-3 transition-colors"><PieChart className="w-4 h-4 mr-2"/> Demographics</div>
              <div className="h-8 hover:bg-white/5 text-slate-400 rounded-lg flex items-center px-3 transition-colors"><Users className="w-4 h-4 mr-2"/> Field Teams</div>
              <div className="h-8 hover:bg-white/5 text-slate-400 rounded-lg flex items-center px-3 transition-colors"><Activity className="w-4 h-4 mr-2"/> Live Feeds</div>
            </div>

            {/* Content area */}
            <div className="col-span-12 md:col-span-10 grid grid-cols-3 gap-6 grid-rows-3">
              
              {/* Stat Cards */}
              <div className="col-span-1 row-span-1 bg-white/5 rounded-xl border border-white/10 p-4 flex flex-col justify-between">
                <div className="text-slate-400 text-sm font-medium">Total Approvals</div>
                <div className="text-3xl font-black text-white">68%</div>
                <div className="text-teal-400 text-xs flex items-center"><ArrowUpRight className="w-3 h-3 mr-1"/> +4.2% this month</div>
              </div>
              <div className="col-span-1 row-span-1 bg-white/5 rounded-xl border border-white/10 p-4 flex flex-col justify-between">
                <div className="text-slate-400 text-sm font-medium">Active Issues</div>
                <div className="text-3xl font-black text-white">1,240</div>
                <div className="text-amber-400 text-xs flex items-center"><ArrowUpRight className="w-3 h-3 mr-1"/> +12% this week</div>
              </div>
              <div className="col-span-1 row-span-1 bg-white/5 rounded-xl border border-white/10 p-4 flex flex-col justify-between">
                <div className="text-slate-400 text-sm font-medium">Surveys Completed</div>
                <div className="text-3xl font-black text-white">45.2K</div>
                <div className="text-teal-400 text-xs flex items-center"><ArrowUpRight className="w-3 h-3 mr-1"/> +18% this month</div>
              </div>

              {/* Main Chart */}
              <div className="col-span-3 md:col-span-2 row-span-2 bg-white/5 rounded-xl border border-white/10 p-5 relative overflow-hidden">
                <div className="text-white font-semibold mb-4 text-lg">Sentiment Timeline</div>
                {/* Fake Graph Lines */}
                <svg className="absolute bottom-0 left-0 w-full h-[70%]" preserveAspectRatio="none" viewBox="0 0 100 100">
                  <path d="M0,100 L0,50 Q20,30 40,60 T80,40 T100,20 L100,100 Z" className="fill-teal-400/10" />
                  <path d="M0,50 Q20,30 40,60 T80,40 T100,20" className="stroke-teal-400 stroke-2 fill-none" />
                  <path d="M0,100 L0,80 Q30,70 50,90 T90,60 T100,50 L100,100 Z" className="fill-amber-400/5" />
                  <path d="M0,80 Q30,70 50,90 T90,60 T100,50" className="stroke-amber-400 stroke-2 fill-none" />
                </svg>
              </div>

              {/* Heatmap/Map Mockup */}
              <div className="col-span-3 md:col-span-1 row-span-2 bg-white/5 rounded-xl border border-white/10 p-5 flex flex-col">
                 <div className="text-white font-semibold mb-4 text-lg">Regional Heatmap</div>
                 <div className="flex-1 bg-slate-900/50 rounded-lg border border-white/5 relative overflow-hidden flex items-center justify-center p-4">
                    {/* Abstract Map Nodes */}
                    <div className="absolute top-1/4 left-1/4 w-4 h-4 bg-teal-400 rounded-full blur-sm animate-pulse"></div>
                    <div className="absolute top-1/3 right-1/3 w-6 h-6 bg-amber-400 rounded-full blur-sm animate-pulse" style={{ animationDelay: "1s" }}></div>
                    <div className="absolute bottom-1/3 left-1/2 w-8 h-8 bg-teal-500 rounded-full blur-md opacity-40 animate-pulse" style={{ animationDelay: "2s" }}></div>
                    <div className="absolute bottom-1/4 right-1/4 w-3 h-3 bg-red-400 rounded-full blur-sm"></div>
                    
                    <div className="w-full h-full border border-dashed border-white/10 rounded opacity-30"></div>
                 </div>
              </div>

            </div>
          </div>
        </motion.div>

      </div>
    </section>
  );
}

function SearchIcon() {
  return (
    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><circle cx="11" cy="11" r="8"></circle><line x1="21" y1="21" x2="16.65" y2="16.65"></line></svg>
  )
}
