export default function Services() {
  return (
    <section className="bg-white py-16 px-6 border-b border-gray-200" id="services">
      <div className="max-w-5xl mx-auto">
        <div className="text-center mb-10">
           <h2 className="text-3xl font-bold text-gray-900 mb-3">
             Our Services in Andhra Pradesh
           </h2>
           <div className="w-24 h-1 bg-[#B30006] mx-auto rounded"></div>
        </div>
        <div className="grid md:grid-cols-2 gap-8">
          <div className="bg-gray-50 p-6 border-l-4 border-[#FFC30B] border-y border-r border-gray-200 rounded shadow-sm hover:shadow-md transition-shadow">
            <h3 className="font-bold text-xl text-[#B30006] mb-2">Assembly & Parliamentary Surveys</h3>
            <p className="text-gray-700 font-medium">Polling for Godavari, Rayalaseema, North Andhra, and South Coastal regions to know exactly what voters think.</p>
          </div>
          <div className="bg-gray-50 p-6 border-l-4 border-[#B30006] border-y border-r border-gray-200 rounded shadow-sm hover:shadow-md transition-shadow">
            <h3 className="font-bold text-xl text-[#B30006] mb-2">Booth-Level Demographics</h3>
            <p className="text-gray-700 font-medium">We track caste equations and voting blocks at the booth level.</p>
          </div>
          <div className="bg-gray-50 p-6 border-l-4 border-[#FFC30B] border-y border-r border-gray-200 rounded shadow-sm hover:shadow-md transition-shadow">
            <h3 className="font-bold text-xl text-[#B30006] mb-2">Panchayat & Ward Intelligence</h3>
            <p className="text-gray-700 font-medium">Find out local issues like water and roads before they become big problems.</p>
          </div>
          <div className="bg-gray-50 p-6 border-l-4 border-[#B30006] border-y border-r border-gray-200 rounded shadow-sm hover:shadow-md transition-shadow">
            <h3 className="font-bold text-xl text-[#B30006] mb-2">Ticket Aspirant Benchmarking</h3>
            <p className="text-gray-700 font-medium">Compare leaders to see who has the best chance to win elections.</p>
          </div>
        </div>
      </div>
    </section>
  );
}
