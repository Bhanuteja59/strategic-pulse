export default function Testimonials() {
  return (
    <section className="py-20 px-6 bg-slate-50 dark:bg-[#0b0f19] border-b border-black/5 dark:border-white/5 relative transition-colors duration-300">
      <div className="max-w-5xl mx-auto">
        <div className="text-center mb-16">
           <span className="text-cyan-600 dark:text-cyan-400 font-bold text-xs tracking-wider uppercase bg-cyan-500/10 border border-cyan-500/30 px-3 py-1 rounded-full inline-block mb-3">
             Community Impact
           </span>
           <h2 className="text-3xl md:text-4xl font-extrabold text-slate-900 dark:text-white mb-4 transition-colors duration-300">
             Voices of Supported Volunteers
           </h2>
           <p className="text-slate-700 dark:text-slate-400 max-w-2xl mx-auto font-medium transition-colors duration-300">
             Read what our dedicated grassroots workers say about having access to transparent micro-jobs and official recognition.
           </p>
        </div>

        <div className="grid md:grid-cols-2 gap-8">
          <div className="glass-panel p-8 rounded-3xl border-l-4 border-l-cyan-600 dark:border-l-cyan-400 hover:scale-[1.01] transition-all duration-300 relative group shadow-xl">
            <p className="text-slate-700 dark:text-slate-300 italic mb-6 leading-relaxed text-base transition-colors duration-300">
              "Before Strategy Pulse, we did endless ground work without any formal recognition or compensation. Now, every survey and booth activity is logged, and I receive direct monthly support. It empowers my whole team!"
            </p>
            <div className="flex items-center gap-4">
              <div className="w-12 h-12 rounded-full bg-cyan-500/20 border border-cyan-500/40 flex items-center justify-center font-bold text-cyan-600 dark:text-cyan-400 text-lg shrink-0">
                VK
              </div>
              <div>
                <h4 className="text-slate-900 dark:text-white font-bold transition-colors duration-300">Venkatesh K.</h4>
                <p className="text-slate-600 dark:text-slate-400 text-sm transition-colors duration-300">Booth Committee Lead</p>
              </div>
            </div>
          </div>

          <div className="glass-panel p-8 rounded-3xl border-l-4 border-l-indigo-600 dark:border-l-indigo-400 hover:scale-[1.01] transition-all duration-300 relative group shadow-xl">
            <p className="text-slate-700 dark:text-slate-300 italic mb-6 leading-relaxed text-base transition-colors duration-300">
              "The micro-tasker app is incredibly simple to use. I can instantly report civic issues that citizens tell me about, and I get recognized by senior leadership for solving real local problems."
            </p>
            <div className="flex items-center gap-4">
              <div className="w-12 h-12 rounded-full bg-indigo-500/20 border border-indigo-500/40 flex items-center justify-center font-bold text-indigo-600 dark:text-indigo-400 text-lg shrink-0">
                PR
              </div>
              <div>
                <h4 className="text-slate-900 dark:text-white font-bold transition-colors duration-300">Priya R.</h4>
                <p className="text-slate-600 dark:text-slate-400 text-sm transition-colors duration-300">Active Volunteer & Organizer</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
