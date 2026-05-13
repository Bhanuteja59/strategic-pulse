export default function TrustIndicators() {
  return (
    <section className="bg-white py-16 px-6 border-b border-gray-200">
      <div className="max-w-4xl mx-auto">
        <div className="text-center mb-10">
           <h2 className="text-3xl font-bold text-gray-900 mb-3">
             Our Dashboards
           </h2>
           <div className="w-16 h-1 bg-[#FFC30B] mx-auto rounded"></div>
        </div>
        <div className="grid md:grid-cols-2 gap-6">
          <div className="bg-gray-50 p-6 border-t-4 border-[#B30006] rounded shadow-sm hover:shadow-md transition-shadow">
            <h3 className="font-bold text-xl text-[#B30006] mb-2">Digital Bharath Politics</h3>
            <p className="text-gray-600 font-medium">Track sentiments across constituencies easily.</p>
          </div>
          <div className="bg-gray-50 p-6 border-t-4 border-[#FFC30B] rounded shadow-sm hover:shadow-md transition-shadow">
            <h3 className="font-bold text-xl text-gray-900 mb-2">Telangana Municipal Dashboard</h3>
            <p className="text-gray-600 font-medium">Local issue tracking and corporator details.</p>
          </div>
          <div className="bg-gray-50 p-6 border-t-4 border-[#FFC30B] rounded shadow-sm hover:shadow-md transition-shadow">
            <h3 className="font-bold text-xl text-gray-900 mb-2">Telangana Ward Elections</h3>
            <p className="text-gray-600 font-medium">Ward-wise demographic distribution data.</p>
          </div>
          <div className="bg-gray-50 p-6 border-t-4 border-[#B30006] rounded shadow-sm hover:shadow-md transition-shadow">
            <h3 className="font-bold text-xl text-[#B30006] mb-2">Caste Distribution</h3>
            <p className="text-gray-600 font-medium">Simple breakdowns of demographics.</p>
          </div>
        </div>
      </div>
    </section>
  );
}
