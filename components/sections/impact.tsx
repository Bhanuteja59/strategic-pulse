export default function Impact() {
  return (
    <section className="py-24 px-6 bg-slate-100 dark:bg-[radial-gradient(ellipse_at_center,_var(--tw-gradient-stops))] dark:from-indigo-950/40 dark:via-[#0b0f19] dark:to-[#0b0f19] text-center border-b border-black/5 dark:border-white/5 relative overflow-hidden transition-colors duration-300">
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[300px] bg-gradient-to-r from-cyan-500/10 to-indigo-500/10 blur-[120px] rounded-full pointer-events-none -z-10"></div>

      <div className="max-w-4xl mx-auto relative z-10">
        <span className="text-cyan-600 dark:text-cyan-400 font-bold text-xs tracking-wider uppercase bg-cyan-500/10 border border-cyan-500/30 px-4 py-1.5 rounded-full inline-block mb-6">
          The True Backbone
        </span>
        <h2 className="text-4xl md:text-5xl font-black text-slate-900 dark:text-white mb-6 leading-tight transition-colors duration-300">
          Democracy is powered by <span className="gradient-text">everyday volunteers.</span>
        </h2>
        <p className="text-lg md:text-xl text-slate-700 dark:text-slate-300 max-w-2xl mx-auto mb-10 font-normal leading-relaxed transition-colors duration-300">
          When volunteers operate with transparent daily micro-tasks and direct leadership support, entire communities thrive. Take your place in our verified network.
        </p>
        <div className="flex justify-center">
          <a 
            href="#contact" 
            className="inline-flex items-center gap-3 px-8 py-4 bg-gradient-to-r from-cyan-500 to-indigo-600 rounded-xl text-white font-bold shadow-xl shadow-cyan-500/20 hover:scale-105 transition-all duration-300 text-lg"
          >
            <span className="w-3 h-3 rounded-full bg-emerald-400 animate-ping"></span>
            Claim Your First Micro-Job
          </a>
        </div>
      </div>
    </section>
  );
}
