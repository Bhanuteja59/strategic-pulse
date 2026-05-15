export default function CTA() {
  return (
    <section className="py-24 px-6 bg-gradient-to-br from-cyan-600 via-indigo-600 to-purple-700 text-center text-white relative overflow-hidden" id="contact">
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,_rgba(255,255,255,0.15),_transparent)] pointer-events-none"></div>

      <div className="max-w-3xl mx-auto relative z-10">
        <span className="bg-white/20 backdrop-blur-md text-white border border-white/30 px-4 py-1.5 rounded-full text-xs font-bold tracking-widest uppercase mb-6 inline-block shadow-lg">
          Join Network Today
        </span>
        <h2 className="text-4xl md:text-5xl font-black mb-6 tracking-tight leading-tight">
          Ready to empower your community and secure support?
        </h2>
        <p className="text-xl mb-10 text-cyan-100 font-medium max-w-2xl mx-auto leading-relaxed">
          Register today to claim your verified digital badge and start accepting compensated booth micro-tasks in your area.
        </p>
        <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
          <button className="w-full sm:w-auto bg-white text-indigo-900 px-10 py-4 rounded-xl shadow-2xl text-lg font-black hover:bg-slate-100 hover:scale-105 transition-all duration-300">
            Register as Volunteer
          </button>
          <button className="w-full sm:w-auto bg-indigo-900/40 backdrop-blur-md text-white border border-white/30 px-10 py-4 rounded-xl shadow-xl text-lg font-bold hover:bg-indigo-900/60 transition-all duration-300">
            Party Organizer Login
          </button>
        </div>
      </div>
    </section>
  );
}
