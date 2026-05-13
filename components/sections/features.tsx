export default function Features() {
  return (
    <section className="bg-[#FFC30B]/5 py-16 px-6 border-b border-gray-200" id="plans">
      <div className="max-w-5xl mx-auto">
        <div className="text-center mb-10">
           <h2 className="text-3xl font-bold text-gray-900 mb-3">
             Our Leadership Plans
           </h2>
           <div className="w-24 h-1 bg-[#B30006] mx-auto rounded"></div>
        </div>
        <div className="grid md:grid-cols-4 gap-6">
          <div className="bg-white p-6 border border-gray-300 rounded shadow-sm hover:border-[#B30006]/30 transition-colors">
            <h3 className="font-bold text-xl text-gray-800 mb-2">Aspirant Plan</h3>
            <p className="text-gray-700 mb-4 font-medium text-sm">For first-time candidates and ticket seekers.</p>
            <ul className="list-disc pl-5 text-sm text-gray-600 space-y-2 marker:text-[#FFC30B]">
              <li>Positioning & narrative</li>
              <li>Visibility SOPs</li>
              <li>Issue mapping</li>
            </ul>
          </div>
          <div className="bg-white p-6 border border-gray-300 rounded shadow-md border-t-4 border-t-[#FFC30B] relative transform hover:-translate-y-1 transition-transform">
            <div className="absolute top-0 right-0 bg-[#FFC30B] text-[#B30006] text-[10px] font-bold px-2 py-1 uppercase rounded-bl">Popular</div>
            <h3 className="font-bold text-xl text-[#B30006] mb-2 mt-2">Leader Plan</h3>
            <p className="text-gray-700 mb-4 font-medium text-sm">For Corporators and sitting MLAs.</p>
            <ul className="list-disc pl-5 text-sm text-gray-600 space-y-2 marker:text-[#FFC30B]">
              <li>Governance SOPs</li>
              <li>Narrative control</li>
              <li>Grievance trackers</li>
            </ul>
          </div>
          <div className="bg-white p-6 border border-gray-300 rounded shadow-sm hover:border-[#B30006]/30 transition-colors">
            <h3 className="font-bold text-xl text-gray-800 mb-2">Power Plan</h3>
            <p className="text-gray-700 mb-4 font-medium text-sm">For senior leaders and MPs.</p>
            <ul className="list-disc pl-5 text-sm text-gray-600 space-y-2 marker:text-[#FFC30B]">
              <li>Dedicated war room</li>
              <li>Real-time dashboards</li>
              <li>Crisis response</li>
            </ul>
          </div>
          <div className="bg-white p-6 border border-gray-300 rounded shadow-sm border-t-4 border-t-[#B30006] hover:shadow-md transition-shadow">
            <h3 className="font-bold text-xl text-[#B30006] mb-2">Election War Room</h3>
            <p className="text-gray-700 mb-4 font-medium text-sm">For the final 3-6 months before an election.</p>
            <ul className="list-disc pl-5 text-sm text-gray-600 space-y-2 marker:text-[#B30006]">
              <li>Micro-campaigning</li>
              <li>Booth operations</li>
              <li>GOTV systems</li>
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
}
