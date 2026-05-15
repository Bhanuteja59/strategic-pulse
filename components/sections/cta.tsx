export default function CTA() {
  return (
    <section className="py-24 px-6 bg-[#111827] text-center text-white" id="contact">
      <div className="max-w-3xl mx-auto">
        <span className="bg-[#FFC30B] text-[#B30006] px-4 py-1.5 rounded text-xs font-bold tracking-widest uppercase mb-6 inline-block shadow">
          Join Network Today
        </span>
        <h2 className="text-4xl md:text-5xl font-black mb-6 tracking-tight leading-tight">
          Ready to empower your community and secure support?
        </h2>
        <p className="text-xl mb-10 text-gray-300 font-medium max-w-2xl mx-auto leading-relaxed">
          Register today to claim your verified digital badge and start accepting compensated booth micro-tasks in your area.
        </p>
        <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
          <button className="w-full sm:w-auto bg-[#FFC30B] text-[#B30006] px-10 py-4 rounded shadow-2xl text-lg font-black hover:bg-yellow-400 hover:scale-105 transition-all duration-300">
            Register as Volunteer
          </button>
          <button className="w-full sm:w-auto bg-white/10 text-white border border-white/30 px-10 py-4 rounded shadow text-lg font-bold hover:bg-white/20 transition-all duration-300">
            Party Organizer Login
          </button>
        </div>
      </div>
    </section>
  );
}
