export default function TrustIndicators() {
  return (
    <section className="py-20 px-6 bg-slate-50 dark:bg-[#0b0f19] relative border-b border-black/5 dark:border-white/5 transition-colors duration-300">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-16">
           <span className="text-cyan-600 dark:text-cyan-400 font-bold text-xs tracking-wider uppercase bg-cyan-500/10 border border-cyan-500/30 px-3 py-1 rounded-full inline-block mb-3">
             Command Centers
           </span>
           <h2 className="text-3xl md:text-4xl font-extrabold text-slate-900 dark:text-white mb-4 transition-colors duration-300">
             Volunteer Support & Execution Dashboards
           </h2>
           <p className="text-slate-700 dark:text-slate-400 max-w-2xl mx-auto font-medium transition-colors duration-300">
             We provide dedicated digital dashboards for booth workers and local coordinators to track micro-jobs, resolve local issues, and secure recognition.
           </p>
        </div>
        
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
          <div className="glass-panel glass-panel-hover p-6 rounded-2xl transition-all duration-300 relative overflow-hidden group">
            <div className="absolute top-0 left-0 right-0 h-1 bg-gradient-to-r from-cyan-500 to-teal-500 opacity-70 group-hover:opacity-100 transition-opacity"></div>
            <div className="w-10 h-10 rounded-xl bg-cyan-500/10 border border-cyan-500/30 flex items-center justify-center text-cyan-600 dark:text-cyan-400 mb-4 font-bold text-lg">
              01
            </div>
            <h3 className="font-bold text-xl text-slate-900 dark:text-white mb-2 transition-colors duration-300">Booth Task Tracker</h3>
            <p className="text-slate-700 dark:text-slate-400 font-medium text-sm leading-relaxed transition-colors duration-300">
              Real-time synchronization of local booth management tasks and community outreach drives.
            </p>
          </div>

          <div className="glass-panel glass-panel-hover p-6 rounded-2xl transition-all duration-300 relative overflow-hidden group">
            <div className="absolute top-0 left-0 right-0 h-1 bg-gradient-to-r from-indigo-500 to-purple-500 opacity-70 group-hover:opacity-100 transition-opacity"></div>
            <div className="w-10 h-10 rounded-xl bg-indigo-500/10 border border-indigo-500/30 flex items-center justify-center text-indigo-600 dark:text-indigo-400 mb-4 font-bold text-lg">
              02
            </div>
            <h3 className="font-bold text-xl text-slate-900 dark:text-white mb-2 transition-colors duration-300">Micro-Jobs Ledger</h3>
            <p className="text-slate-700 dark:text-slate-400 font-medium text-sm leading-relaxed transition-colors duration-300">
              Transparent recording of daily volunteer activities, survey collections, and corresponding support compensation.
            </p>
          </div>

          <div className="glass-panel glass-panel-hover p-6 rounded-2xl transition-all duration-300 relative overflow-hidden group">
            <div className="absolute top-0 left-0 right-0 h-1 bg-gradient-to-r from-teal-500 to-emerald-500 opacity-70 group-hover:opacity-100 transition-opacity"></div>
            <div className="w-10 h-10 rounded-xl bg-teal-500/10 border border-teal-500/30 flex items-center justify-center text-teal-600 dark:text-teal-400 mb-4 font-bold text-lg">
              03
            </div>
            <h3 className="font-bold text-xl text-slate-900 dark:text-white mb-2 transition-colors duration-300">Grievance Network</h3>
            <p className="text-slate-700 dark:text-slate-400 font-medium text-sm leading-relaxed transition-colors duration-300">
              Instant logging of civic issues brought up by citizens during door-to-door volunteer interactions.
            </p>
          </div>

          <div className="glass-panel glass-panel-hover p-6 rounded-2xl transition-all duration-300 relative overflow-hidden group">
            <div className="absolute top-0 left-0 right-0 h-1 bg-gradient-to-r from-amber-500 to-red-500 opacity-70 group-hover:opacity-100 transition-opacity"></div>
            <div className="w-10 h-10 rounded-xl bg-amber-500/10 border border-amber-500/30 flex items-center justify-center text-amber-600 dark:text-amber-400 mb-4 font-bold text-lg">
              04
            </div>
            <h3 className="font-bold text-xl text-slate-900 dark:text-white mb-2 transition-colors duration-300">Identity & Badging</h3>
            <p className="text-slate-700 dark:text-slate-400 font-medium text-sm leading-relaxed transition-colors duration-300">
              Official digital identity cards and recognition rankings for top-performing booth coordinators.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
