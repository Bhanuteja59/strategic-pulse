export default function DashboardPreview() {
  return (
    <section className="py-20 px-6 bg-slate-50 dark:bg-[#0b0f19] border-b border-black/5 dark:border-white/5 relative transition-colors duration-300">
      <div className="max-w-5xl mx-auto text-center">
        <span className="text-cyan-600 dark:text-cyan-400 font-bold text-xs tracking-wider uppercase bg-cyan-500/10 border border-cyan-500/30 px-3 py-1 rounded-full inline-block mb-3">
          365-Day Operations
        </span>
        <h2 className="text-3xl md:text-4xl font-extrabold text-slate-900 dark:text-white mb-4 transition-colors duration-300">
          The Volunteer Command Center
        </h2>
        <p className="text-slate-700 dark:text-slate-300 max-w-2xl mx-auto font-medium mb-12 text-base md:text-lg transition-colors duration-300">
          Track your personal booth achievements, view upcoming micro-jobs, and coordinate seamlessly with your constituency leader all in one secure portal.
        </p>

        <div className="glass-panel p-10 md:p-16 rounded-3xl border border-cyan-500/20 hover:border-cyan-500/40 transition-all duration-300 relative overflow-hidden group shadow-2xl">
          <div className="absolute inset-0 bg-gradient-to-r from-cyan-500/5 via-indigo-500/5 to-purple-500/5 pointer-events-none"></div>
          
          <div className="w-20 h-20 mx-auto mb-6 bg-gradient-to-tr from-cyan-500 to-indigo-600 rounded-3xl flex items-center justify-center shadow-xl shadow-cyan-500/20 group-hover:scale-110 transition-transform">
            <span className="text-white font-bold text-3xl">📱</span>
          </div>
          <h3 className="text-slate-900 dark:text-white font-extrabold text-2xl md:text-3xl mb-3 transition-colors duration-300">
            Interactive Booth Mapping & Micro-Tasker Suite
          </h3>
          <p className="text-slate-700 dark:text-slate-400 max-w-xl mx-auto font-medium text-base mb-8 transition-colors duration-300">
            Experience the future of grassroots coordination. Connect directly with field coordinators to receive real-time support and activity payouts.
          </p>

          <a 
            href="#contact" 
            className="inline-block bg-indigo-600 hover:bg-indigo-700 text-white px-8 py-3.5 rounded-xl text-base font-bold transition-all duration-300 shadow-lg"
          >
            Request App Access
          </a>
        </div>
      </div>
    </section>
  );
}
