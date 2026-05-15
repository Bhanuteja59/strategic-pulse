export default function Impact() {
  return (
    <section className="py-24 px-6 bg-[#B30006] text-center text-white border-b border-[#8B0004]">
      <div className="max-w-4xl mx-auto">
        <span className="bg-[#FFC30B] text-[#B30006] font-bold text-xs tracking-wider uppercase px-4 py-1.5 rounded inline-block mb-6">
          The True Backbone
        </span>
        <h2 className="text-4xl md:text-5xl font-black text-white mb-6 leading-tight">
          Democracy is powered by{" "}
          <span className="text-[#FFC30B]">everyday volunteers.</span>
        </h2>
        <p className="text-lg md:text-xl text-white/90 max-w-2xl mx-auto mb-10 font-normal leading-relaxed">
          When volunteers operate with transparent daily micro-tasks and direct leadership support, entire communities thrive. Take your place in our verified network.
        </p>
        <div className="flex justify-center">
          <a
            href="#contact"
            className="inline-flex items-center gap-3 px-8 py-4 bg-[#FFC30B] text-[#B30006] rounded font-black shadow-lg hover:bg-yellow-400 transition-colors text-lg"
          >
            <span className="w-3 h-3 rounded-full bg-white animate-ping"></span>
            Claim Your First Micro-Job
          </a>
        </div>
      </div>
    </section>
  );
}
