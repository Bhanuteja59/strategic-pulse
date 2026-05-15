import Image from "next/image";

export default function Hero() {
  return (
    <section className="pt-28 pb-20 px-6 bg-gray-50 border-b border-gray-200" id="hero">
      <div className="max-w-6xl mx-auto text-center">
        <div className="inline-block mb-5 px-4 py-1.5 bg-[#FFC30B]/20 border border-[#FFC30B] rounded-full">
          <span className="text-[#B30006] font-bold text-xs tracking-wider uppercase flex items-center gap-2">
            <span className="w-2 h-2 rounded-full bg-[#B30006] animate-pulse"></span>
            Empowering Volunteers &amp; Booth Workers
          </span>
        </div>

        <h1 className="text-4xl sm:text-5xl md:text-6xl font-black text-gray-900 mb-6 leading-tight max-w-4xl mx-auto">
          Supporting the{" "}
          <span className="text-[#B30006]">Grassroots Champions</span> of Politics
        </h1>

        <p className="text-lg md:text-xl text-gray-600 mb-10 max-w-3xl mx-auto leading-relaxed">
          Behind every successful campaign are the dedicated volunteers doing the vital daily tasks. We empower booth workers and community organizers with micro-jobs, smart management tools, and the recognition they truly deserve.
        </p>

        <div className="flex flex-col sm:flex-row justify-center items-center gap-4 mb-16">
          <a
            href="#contact"
            className="w-full sm:w-auto bg-[#B30006] text-white px-8 py-4 rounded shadow-lg text-lg font-bold hover:bg-red-800 transition-colors text-center"
          >
            Join Volunteer Network
          </a>
          <a
            href="#services"
            className="w-full sm:w-auto bg-white text-[#B30006] border-2 border-[#B30006] px-8 py-4 rounded text-lg font-bold hover:bg-red-50 transition-colors text-center"
          >
            Explore Micro-Jobs
          </a>
        </div>

        {/* Featured Showcase Image */}
        <div className="relative mx-auto max-w-4xl rounded-xl overflow-hidden shadow-2xl border border-gray-200">
          <div className="relative aspect-video">
            <Image
              src="/images/volunteer_community_support.png"
              alt="Diverse grassroots political volunteers collaborating"
              fill
              sizes="(max-width: 768px) 100vw, 896px"
              className="object-cover"
              priority
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black via-black/40 to-transparent opacity-70"></div>
            <div className="absolute bottom-6 left-6 right-6 flex flex-col md:flex-row justify-between items-start md:items-end gap-4">
              <div>
                <span className="px-3 py-1 bg-[#FFC30B] text-[#B30006] rounded text-xs font-bold uppercase tracking-wider mb-2 inline-block">
                  Live Community Impact
                </span>
                <h3 className="text-white text-xl md:text-2xl font-bold text-left">
                  Connecting local organizers with real-time opportunities
                </h3>
              </div>
              <div className="bg-black/60 backdrop-blur-sm px-4 py-2 rounded border border-white/20 flex items-center gap-3">
                <div className="w-3 h-3 rounded-full bg-green-400 animate-ping"></div>
                <span className="text-white font-semibold text-sm">Active Network</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
