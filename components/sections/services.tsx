export default function Services() {
  return (
    <section className="py-20 px-6 bg-slate-50 dark:bg-[#0b0f19] border-b border-black/5 dark:border-white/5 relative transition-colors duration-300" id="services">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-16">
           <span className="text-cyan-600 dark:text-cyan-400 font-bold text-xs tracking-wider uppercase bg-cyan-500/10 border border-cyan-500/30 px-3 py-1 rounded-full inline-block mb-3">
             What We Provide
           </span>
           <h2 className="text-3xl md:text-4xl font-extrabold text-slate-900 dark:text-white mb-4 transition-colors duration-300">
             Support Services for <span className="gradient-text">Ground Volunteers</span>
           </h2>
           <p className="text-slate-700 dark:text-slate-400 max-w-2xl mx-auto font-medium transition-colors duration-300">
             We offer specialized support infrastructure to make local campaigning easier, more rewarding, and highly effective for every volunteer.
           </p>
        </div>

        <div className="grid md:grid-cols-2 gap-8">
          <div className="glass-panel p-8 rounded-3xl hover:border-cyan-500/50 transition-all duration-300 relative group overflow-hidden">
            <div className="absolute top-0 right-0 w-32 h-32 bg-cyan-500/10 blur-3xl rounded-full group-hover:bg-cyan-500/20 transition-all"></div>
            <div className="w-12 h-12 rounded-2xl bg-cyan-500/20 border border-cyan-500/40 flex items-center justify-center text-cyan-600 dark:text-cyan-400 font-bold text-2xl mb-6 shadow-lg">
              🎯
            </div>
            <h3 className="font-extrabold text-2xl text-slate-900 dark:text-white mb-3 transition-colors duration-300">Booth-Level Task Management</h3>
            <p className="text-slate-700 dark:text-slate-300 leading-relaxed font-medium transition-colors duration-300">
              We break down large constituency goals into simple, manageable micro-tasks for booth agents. Receive daily updates and clear guidance on local outreach.
            </p>
          </div>

          <div className="glass-panel p-8 rounded-3xl hover:border-indigo-500/50 transition-all duration-300 relative group overflow-hidden">
            <div className="absolute top-0 right-0 w-32 h-32 bg-indigo-500/10 blur-3xl rounded-full group-hover:bg-indigo-500/20 transition-all"></div>
            <div className="w-12 h-12 rounded-2xl bg-indigo-500/20 border border-indigo-500/40 flex items-center justify-center text-indigo-600 dark:text-indigo-400 font-bold text-2xl mb-6 shadow-lg">
              💸
            </div>
            <h3 className="font-extrabold text-2xl text-slate-900 dark:text-white mb-3 transition-colors duration-300">Micro-Job Compensation Tracker</h3>
            <p className="text-slate-700 dark:text-slate-300 leading-relaxed font-medium transition-colors duration-300">
              Volunteers spend valuable time and effort. Our transparent ledger ensures every survey completed and event organized is tracked for fair support compensation.
            </p>
          </div>

          <div className="glass-panel p-8 rounded-3xl hover:border-teal-500/50 transition-all duration-300 relative group overflow-hidden">
            <div className="absolute top-0 right-0 w-32 h-32 bg-teal-500/10 blur-3xl rounded-full group-hover:bg-teal-500/20 transition-all"></div>
            <div className="w-12 h-12 rounded-2xl bg-teal-500/20 border border-teal-500/40 flex items-center justify-center text-teal-600 dark:text-teal-400 font-bold text-2xl mb-6 shadow-lg">
              🤝
            </div>
            <h3 className="font-extrabold text-2xl text-slate-900 dark:text-white mb-3 transition-colors duration-300">Citizen Grievance Redressal Network</h3>
            <p className="text-slate-700 dark:text-slate-300 leading-relaxed font-medium transition-colors duration-300">
              Empower volunteers to act as true community problem-solvers. Easily report broken roads, water shortages, and local issues directly to high-level leadership.
            </p>
          </div>

          <div className="glass-panel p-8 rounded-3xl hover:border-amber-500/50 transition-all duration-300 relative group overflow-hidden">
            <div className="absolute top-0 right-0 w-32 h-32 bg-amber-500/10 blur-3xl rounded-full group-hover:bg-amber-500/20 transition-all"></div>
            <div className="w-12 h-12 rounded-2xl bg-amber-500/20 border border-amber-500/40 flex items-center justify-center text-amber-600 dark:text-amber-400 font-bold text-2xl mb-6 shadow-lg">
              🏅
            </div>
            <h3 className="font-extrabold text-2xl text-slate-900 dark:text-white mb-3 transition-colors duration-300">Official Identity & Recognition</h3>
            <p className="text-slate-700 dark:text-slate-300 leading-relaxed font-medium transition-colors duration-300">
              Gain prestige in your local community. We provide official digital badging, leaderboards, and direct recognition certificates from senior political leadership.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
