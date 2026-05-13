export default function HowItWorks() {
  return (
    <section className="bg-gray-50 py-16 px-6 border-b border-gray-200" id="approach">
      <div className="max-w-4xl mx-auto">
        <h2 className="text-3xl font-bold text-center text-gray-900 mb-4">
          How It Works
        </h2>
        <div className="w-16 h-1 bg-[#B30006] mx-auto rounded mb-6"></div>
        <p className="text-center text-gray-600 mb-10 max-w-2xl mx-auto font-medium">
          We use simple processes to collect grassroots data and help you make winning decisions.
        </p>

        <div className="grid md:grid-cols-3 gap-8 text-center relative">
          <div className="hidden md:block absolute top-1/2 left-0 right-0 h-1 bg-gray-200 -z-10 -translate-y-1/2"></div>
          
          <div className="bg-white p-6 border-2 border-gray-200 rounded-xl shadow-sm hover:border-[#FFC30B] transition-colors group">
            <div className="w-12 h-12 bg-[#FFC30B] text-[#B30006] font-bold text-2xl rounded-full flex items-center justify-center mx-auto mb-4 group-hover:scale-110 transition-transform shadow-md">1</div>
            <h3 className="font-bold text-xl mb-2 text-gray-900">Setup</h3>
            <p className="text-gray-600 text-sm">We set up basic trackers and identify target demographics for your constituency.</p>
          </div>
          <div className="bg-white p-6 border-2 border-gray-200 rounded-xl shadow-sm hover:border-[#FFC30B] transition-colors group">
            <div className="w-12 h-12 bg-[#FFC30B] text-[#B30006] font-bold text-2xl rounded-full flex items-center justify-center mx-auto mb-4 group-hover:scale-110 transition-transform shadow-md">2</div>
            <h3 className="font-bold text-xl mb-2 text-gray-900">Collect Data</h3>
            <p className="text-gray-600 text-sm">Our field teams gather booth-level voter opinions directly from the public.</p>
          </div>
          <div className="bg-white p-6 border-2 border-[#B30006]/20 rounded-xl shadow-md hover:border-[#B30006] transition-colors group">
            <div className="w-12 h-12 bg-[#B30006] text-white font-bold text-2xl rounded-full flex items-center justify-center mx-auto mb-4 group-hover:scale-110 transition-transform shadow-md">3</div>
            <h3 className="font-bold text-xl mb-2 text-[#B30006]">Execute</h3>
            <p className="text-gray-600 text-sm">You use this actionable intelligence to plan your next strategic political moves.</p>
          </div>
        </div>
      </div>
    </section>
  );
}
