export default function Features() {
  return (
    <section className="py-20 px-6 bg-slate-100 dark:bg-[#0f172a]/30 border-b border-black/5 dark:border-white/5 relative transition-colors duration-300" id="plans">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-16">
           <span className="text-indigo-600 dark:text-indigo-400 font-bold text-xs tracking-wider uppercase bg-indigo-500/10 border border-indigo-500/30 px-3 py-1 rounded-full inline-block mb-3">
             Career & Growth Tiers
           </span>
           <h2 className="text-3xl md:text-4xl font-extrabold text-slate-900 dark:text-white mb-4 transition-colors duration-300">
             Volunteer Recognition Tiers
           </h2>
           <p className="text-slate-700 dark:text-slate-400 max-w-2xl mx-auto font-medium transition-colors duration-300">
             As you complete micro-jobs and empower your local community, you rise through official recognition tiers with enhanced perks and leadership roles.
           </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          <div className="glass-panel p-8 rounded-3xl hover:border-cyan-500/30 transition-all duration-300 flex flex-col justify-between group shadow-xl">
            <div>
              <span className="px-3 py-1 bg-black/5 dark:bg-white/5 text-slate-700 dark:text-slate-300 rounded-full text-xs font-semibold mb-4 inline-block border border-black/10 dark:border-white/10 transition-colors duration-300">Tier 1</span>
              <h3 className="font-extrabold text-2xl text-slate-900 dark:text-white mb-2 transition-colors duration-300">Active Volunteer</h3>
              <p className="text-slate-700 dark:text-slate-400 mb-6 font-medium text-sm leading-relaxed transition-colors duration-300">For newly registered grassroots workers looking to make an impact.</p>
              <ul className="space-y-3 text-sm text-slate-700 dark:text-slate-300 font-medium mb-8 transition-colors duration-300">
                <li className="flex items-center gap-2 text-cyan-600 dark:text-cyan-400">✓ <span className="text-slate-900 dark:text-slate-200 transition-colors duration-300">Access to Daily Micro-Jobs</span></li>
                <li className="flex items-center gap-2 text-cyan-600 dark:text-cyan-400">✓ <span className="text-slate-900 dark:text-slate-200 transition-colors duration-300">Task Support Ledger</span></li>
                <li className="flex items-center gap-2 text-cyan-600 dark:text-cyan-400">✓ <span className="text-slate-900 dark:text-slate-200 transition-colors duration-300">Verified Identity Card</span></li>
              </ul>
            </div>
            <a href="#contact" className="w-full py-3 bg-black/5 dark:bg-white/10 hover:bg-black/10 dark:hover:bg-white/20 text-slate-900 dark:text-white rounded-xl font-bold text-center transition-all block text-sm">Join Tier</a>
          </div>

          <div className="glass-panel p-8 rounded-3xl border border-cyan-500/40 hover:border-cyan-500 transition-all duration-300 flex flex-col justify-between relative group shadow-2xl shadow-cyan-500/10">
            <div className="absolute top-0 right-0 bg-gradient-to-l from-cyan-500 to-blue-600 text-white text-[10px] font-black px-3 py-1.5 uppercase rounded-bl-xl rounded-tr-3xl tracking-wider">Most Popular</div>
            <div>
              <span className="px-3 py-1 bg-cyan-500/20 text-cyan-600 dark:text-cyan-400 rounded-full text-xs font-semibold mb-4 inline-block border border-cyan-500/30">Tier 2</span>
              <h3 className="font-extrabold text-2xl text-slate-900 dark:text-white mb-2 transition-colors duration-300">Booth In-Charge</h3>
              <p className="text-slate-700 dark:text-slate-300 mb-6 font-medium text-sm leading-relaxed transition-colors duration-300">For dedicated workers managing specific polling booths.</p>
              <ul className="space-y-3 text-sm text-slate-800 dark:text-slate-200 font-medium mb-8 transition-colors duration-300">
                <li className="flex items-center gap-2 text-cyan-600 dark:text-cyan-400">✓ <span className="text-slate-900 dark:text-white font-bold transition-colors duration-300">Priority Micro-Job Claims</span></li>
                <li className="flex items-center gap-2 text-cyan-600 dark:text-cyan-400">✓ <span className="text-slate-900 dark:text-white transition-colors duration-300">Monthly Support Bonuses</span></li>
                <li className="flex items-center gap-2 text-cyan-600 dark:text-cyan-400">✓ <span className="text-slate-900 dark:text-white transition-colors duration-300">Direct Leader Connect</span></li>
              </ul>
            </div>
            <a href="#contact" className="w-full py-3 bg-gradient-to-r from-cyan-500 to-indigo-600 hover:scale-[1.02] text-white rounded-xl font-bold text-center transition-all block shadow-lg shadow-cyan-500/25 text-sm">Join Tier</a>
          </div>

          <div className="glass-panel p-8 rounded-3xl hover:border-indigo-500/30 transition-all duration-300 flex flex-col justify-between group shadow-xl">
            <div>
              <span className="px-3 py-1 bg-indigo-500/20 text-indigo-600 dark:text-indigo-400 rounded-full text-xs font-semibold mb-4 inline-block border border-indigo-500/30">Tier 3</span>
              <h3 className="font-extrabold text-2xl text-slate-900 dark:text-white mb-2 transition-colors duration-300">Mandal Coordinator</h3>
              <p className="text-slate-700 dark:text-slate-400 mb-6 font-medium text-sm leading-relaxed transition-colors duration-300">For experienced leaders coordinating multiple booth teams.</p>
              <ul className="space-y-3 text-sm text-slate-700 dark:text-slate-300 font-medium mb-8 transition-colors duration-300">
                <li className="flex items-center gap-2 text-indigo-600 dark:text-indigo-400">✓ <span className="text-slate-900 dark:text-slate-200 transition-colors duration-300">Team Management Dashboard</span></li>
                <li className="flex items-center gap-2 text-indigo-600 dark:text-indigo-400">✓ <span className="text-slate-900 dark:text-slate-200 transition-colors duration-300">Override Micro-Task Allocation</span></li>
                <li className="flex items-center gap-2 text-indigo-600 dark:text-indigo-400">✓ <span className="text-slate-900 dark:text-slate-200 transition-colors duration-300">Constituency Awards</span></li>
              </ul>
            </div>
            <a href="#contact" className="w-full py-3 bg-black/5 dark:bg-white/10 hover:bg-black/10 dark:hover:bg-white/20 text-slate-900 dark:text-white rounded-xl font-bold text-center transition-all block text-sm">Join Tier</a>
          </div>

          <div className="glass-panel p-8 rounded-3xl hover:border-amber-500/30 transition-all duration-300 flex flex-col justify-between group shadow-xl">
            <div>
              <span className="px-3 py-1 bg-amber-500/20 text-amber-600 dark:text-amber-400 rounded-full text-xs font-semibold mb-4 inline-block border border-amber-500/30">Tier 4</span>
              <h3 className="font-extrabold text-2xl text-slate-900 dark:text-white mb-2 transition-colors duration-300">Campaign Champion</h3>
              <p className="text-slate-700 dark:text-slate-400 mb-6 font-medium text-sm leading-relaxed transition-colors duration-300">For top-tier mobilizers driving key constituency strategies.</p>
              <ul className="space-y-3 text-sm text-slate-700 dark:text-slate-300 font-medium mb-8 transition-colors duration-300">
                <li className="flex items-center gap-2 text-amber-600 dark:text-amber-400">✓ <span className="text-slate-900 dark:text-slate-200 transition-colors duration-300">Core War Room Seat</span></li>
                <li className="flex items-center gap-2 text-amber-600 dark:text-amber-400">✓ <span className="text-slate-900 dark:text-slate-200 transition-colors duration-300">Executive Compensation</span></li>
                <li className="flex items-center gap-2 text-amber-600 dark:text-amber-400">✓ <span className="text-slate-900 dark:text-slate-200 transition-colors duration-300">Campaign Honors</span></li>
              </ul>
            </div>
            <a href="#contact" className="w-full py-3 bg-black/5 dark:bg-white/10 hover:bg-black/10 dark:hover:bg-white/20 text-slate-900 dark:text-white rounded-xl font-bold text-center transition-all block text-sm">Join Tier</a>
          </div>
        </div>
      </div>
    </section>
  );
}
