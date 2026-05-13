import Image from "next/image";

export default function Hero() {
  return (
    <section className="relative bg-white py-24 px-6 text-center border-b border-gray-200 mt-16 overflow-hidden" id="hero">
      {/* Background Image */}
      <div className="absolute inset-0 z-0">
        <Image 
          src="/images/bg-politics.png" 
          alt="Indian Politics Abstract Background" 
          fill
          className="object-cover opacity-15"
          priority
        />
        {/* Gradient overlay for readability */}
        <div className="absolute inset-0 bg-gradient-to-b from-white/90 via-white/80 to-white/90"></div>
      </div>

      <div className="max-w-4xl mx-auto relative z-10">
        <div className="inline-block mb-4 px-3 py-1 bg-[#FFC30B]/20 border border-[#FFC30B]/50 rounded-full">
          <span className="text-[#B30006] font-bold text-sm tracking-wide uppercase">Power. Strategy. Every Day.</span>
        </div>
        
        <h1 className="text-4xl md:text-5xl font-extrabold text-gray-900 mb-6 leading-tight">
          Strategy Pulse: Political Intelligence for Andhra Pradesh
        </h1>
        
        <p className="text-xl text-gray-700 mb-10 max-w-2xl mx-auto font-medium">
          We help political leaders run powerful campaigns with real grassroots data, voter sentiment surveys, and simple 365-day execution strategies.
        </p>
        
        <div className="flex flex-col sm:flex-row justify-center gap-4 mb-16">
          <a href="#contact" className="bg-[#B30006] text-white px-8 py-3.5 rounded shadow-lg text-lg font-bold hover:bg-[#8A0004] transition-colors">
            Start Your Campaign
          </a>
          <a href="#approach" className="bg-white text-gray-900 border-2 border-[#FFC30B] px-8 py-3.5 rounded shadow-sm text-lg font-bold hover:bg-[#FFC30B]/10 transition-colors">
            Learn Our Strategy
          </a>
        </div>

        {/* Featured Image */}
        <div className="relative mx-auto max-w-3xl rounded-xl overflow-hidden shadow-2xl border-4 border-white">
          <Image 
            src="/images/survey-engagement.png" 
            alt="Political Survey Engagement in Andhra Pradesh" 
            width={800}
            height={450}
            className="w-full h-auto object-cover"
          />
          <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/70 to-transparent p-4">
             <p className="text-white text-sm font-bold text-left flex items-center gap-2">
               <span className="w-2 h-2 rounded-full bg-[#FFC30B]"></span>
               Live Grassroots Voter Engagement
             </p>
          </div>
        </div>
      </div>
    </section>
  );
}
