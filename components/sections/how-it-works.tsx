export default function HowItWorks() {
  return (
    <section className="py-20 px-6 bg-slate-100 dark:bg-[#0f172a]/40 border-b border-black/5 dark:border-white/5 relative transition-colors duration-300" id="approach">
      <div className="max-w-5xl mx-auto">
        <div className="text-center mb-16">
           <span className="text-indigo-600 dark:text-indigo-400 font-bold text-xs tracking-wider uppercase bg-indigo-500/10 border border-indigo-500/30 px-3 py-1 rounded-full inline-block mb-3">
             Simple Process
           </span>
           <h2 className="text-3xl md:text-4xl font-black text-slate-900 dark:text-white mb-4 transition-colors duration-300">
             How We Support You
           </h2>
           <p className="text-slate-700 dark:text-slate-400 max-w-2xl mx-auto font-medium transition-colors duration-300">
             Our platform makes it incredibly straightforward to get onboarded, claim local micro-jobs, and earn respect and support.
           </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8 relative z-10">
          <div className="hidden md:block absolute top-1/3 left-10 right-10 h-0.5 bg-gradient-to-r from-cyan-500 via-indigo-500 to-teal-500 -z-10"></div>

          <div className="glass-panel p-8 rounded-3xl hover:border-cyan-500/40 transition-all duration-300 relative group text-center shadow-xl">
            <div className="w-16 h-16 rounded-2xl bg-gradient-to-br from-cyan-500 to-blue-600 text-white font-black text-2xl flex items-center justify-center mx-auto mb-6 shadow-xl shadow-cyan-500/25 group-hover:scale-110 transition-transform">
              1
            </div>
            <h3 className="font-extrabold text-xl text-slate-900 dark:text-white mb-3 transition-colors duration-300">Onboard & Get Verified</h3>
            <p className="text-slate-700 dark:text-slate-300 text-sm leading-relaxed font-medium transition-colors duration-300">
              Register with your booth and constituency details. Receive your verified digital identity card instantly.
            </p>
          </div>

          <div className="glass-panel p-8 rounded-3xl hover:border-indigo-500/40 transition-all duration-300 relative group text-center shadow-xl">
            <div className="w-16 h-16 rounded-2xl bg-gradient-to-br from-indigo-500 to-purple-600 text-white font-black text-2xl flex items-center justify-center mx-auto mb-6 shadow-xl shadow-indigo-500/25 group-hover:scale-110 transition-transform">
              2
            </div>
            <h3 className="font-extrabold text-xl text-slate-900 dark:text-white mb-3 transition-colors duration-300">Claim Local Micro-Jobs</h3>
            <p className="text-slate-700 dark:text-slate-300 text-sm leading-relaxed font-medium transition-colors duration-300">
              Browse available tasks like citizen surveys, community meeting organization, or voter outreach in your area.
            </p>
          </div>

          <div className="glass-panel p-8 rounded-3xl hover:border-teal-500/40 transition-all duration-300 relative group text-center shadow-xl">
            <div className="w-16 h-16 rounded-2xl bg-gradient-to-br from-teal-500 to-emerald-600 text-white font-black text-2xl flex items-center justify-center mx-auto mb-6 shadow-xl shadow-teal-500/25 group-hover:scale-110 transition-transform">
              3
            </div>
            <h3 className="font-extrabold text-xl text-slate-900 dark:text-white mb-3 transition-colors duration-300">Earn Recognition & Support</h3>
            <p className="text-slate-700 dark:text-slate-300 text-sm leading-relaxed font-medium transition-colors duration-300">
              Log your completed tasks to unlock direct support compensation, leader awards, and senior leadership access.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
