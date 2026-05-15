export default function About() {
  return (
    <section className="py-20 px-6 bg-slate-100 dark:bg-[#0f172a]/30 border-b border-black/5 dark:border-white/5 relative transition-colors duration-300" id="why-support-volunteers">
      <div className="max-w-5xl mx-auto">
        <div className="flex flex-col md:flex-row items-start md:items-center justify-between gap-8 mb-12">
          <div>
            <span className="text-indigo-600 dark:text-indigo-400 font-bold text-xs tracking-wider uppercase bg-indigo-500/10 border border-indigo-500/30 px-3 py-1 rounded-full inline-block mb-3">
              The Real Power
            </span>
            <h2 className="text-3xl md:text-4xl font-black text-slate-900 dark:text-white transition-colors duration-300">
              Why We Support <span className="gradient-text">Grassroots Workers</span>
            </h2>
          </div>
          <p className="text-slate-700 dark:text-slate-300 max-w-xl font-medium leading-relaxed glass-panel p-6 rounded-2xl border-l-4 border-l-cyan-600 dark:border-l-cyan-400 text-base md:text-lg transition-colors duration-300">
            Political campaigns are won by the dedication of thousands of local booth workers and campaign volunteers. We ensure they are never taken for granted by providing structured micro-jobs, daily task support, and financial & social empowerment.
          </p>
        </div>

        <div className="glass-panel p-8 md:p-10 rounded-3xl shadow-2xl relative overflow-hidden">
          <div className="absolute top-0 right-0 w-[400px] h-[400px] bg-gradient-to-br from-indigo-500/10 to-transparent blur-[80px] -z-10 pointer-events-none"></div>
          
          <ul className="grid md:grid-cols-2 gap-6 text-slate-800 dark:text-slate-200 font-medium text-lg transition-colors duration-300">
            <li className="flex items-start gap-4 p-4 rounded-xl glass-panel-hover">
              <div className="w-8 h-8 rounded-lg bg-cyan-500/20 text-cyan-600 dark:text-cyan-400 flex items-center justify-center shrink-0 font-bold mt-0.5">✓</div>
              <div>
                <h4 className="text-slate-900 dark:text-white font-bold mb-1 transition-colors duration-300">Valuing Daily Micro-Jobs</h4>
                <p className="text-slate-600 dark:text-slate-400 text-sm font-normal transition-colors duration-300">Every survey collected, poster placed, and voter engaged is recognized and rewarded.</p>
              </div>
            </li>
            <li className="flex items-start gap-4 p-4 rounded-xl glass-panel-hover">
              <div className="w-8 h-8 rounded-lg bg-indigo-500/20 text-indigo-600 dark:text-indigo-400 flex items-center justify-center shrink-0 font-bold mt-0.5">✓</div>
              <div>
                <h4 className="text-slate-900 dark:text-white font-bold mb-1 transition-colors duration-300">Direct Volunteer Empowerment</h4>
                <p className="text-slate-600 dark:text-slate-400 text-sm font-normal transition-colors duration-300">We eliminate middlemen so volunteers get direct recognition from leadership.</p>
              </div>
            </li>
            <li className="flex items-start gap-4 p-4 rounded-xl glass-panel-hover">
              <div className="w-8 h-8 rounded-lg bg-teal-500/20 text-teal-600 dark:text-teal-400 flex items-center justify-center shrink-0 font-bold mt-0.5">✓</div>
              <div>
                <h4 className="text-slate-900 dark:text-white font-bold mb-1 transition-colors duration-300">Smart Execution Tools</h4>
                <p className="text-slate-600 dark:text-slate-400 text-sm font-normal transition-colors duration-300">Intuitive mobile interfaces designed specifically for fast booth-level reporting.</p>
              </div>
            </li>
            <li className="flex items-start gap-4 p-4 rounded-xl glass-panel-hover">
              <div className="w-8 h-8 rounded-lg bg-amber-500/20 text-amber-600 dark:text-amber-400 flex items-center justify-center shrink-0 font-bold mt-0.5">✓</div>
              <div>
                <h4 className="text-slate-900 dark:text-white font-bold mb-1 transition-colors duration-300">365-Day Continuous Support</h4>
                <p className="text-slate-600 dark:text-slate-400 text-sm font-normal transition-colors duration-300">Supporting our workers throughout the year, not just during the intense election weeks.</p>
              </div>
            </li>
          </ul>
        </div>
      </div>
    </section>
  );
}
