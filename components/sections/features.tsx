export default function Features() {
  return (
    <section className="py-20 px-6 bg-gray-50 border-b border-gray-200" id="plans">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-16">
          <span className="text-[#B30006] font-bold text-xs tracking-wider uppercase bg-[#FFC30B]/20 border border-[#FFC30B] px-3 py-1 rounded inline-block mb-3">
            Career &amp; Growth Tiers
          </span>
          <h2 className="text-3xl md:text-4xl font-extrabold text-gray-900 mb-4">
            Volunteer <span className="text-[#B30006]">Recognition Tiers</span>
          </h2>
          <p className="text-gray-600 max-w-2xl mx-auto font-medium">
            As you complete micro-jobs and empower your local community, you rise through official recognition tiers with enhanced perks and leadership roles.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          <div className="bg-white p-8 rounded-xl border border-gray-200 border-t-4 border-t-gray-300 shadow-sm flex flex-col justify-between hover:shadow-md transition-shadow">
            <div>
              <span className="px-3 py-1 bg-gray-100 text-gray-600 rounded text-xs font-semibold mb-4 inline-block border border-gray-200">Tier 1</span>
              <h3 className="font-extrabold text-2xl text-gray-900 mb-2">Active Volunteer</h3>
              <p className="text-gray-500 mb-6 font-medium text-sm leading-relaxed">For newly registered grassroots workers looking to make an impact.</p>
              <ul className="space-y-3 text-sm text-gray-600 font-medium mb-8">
                <li className="flex items-center gap-2 text-[#B30006]">✓ <span className="text-gray-800">Access to Daily Micro-Jobs</span></li>
                <li className="flex items-center gap-2 text-[#B30006]">✓ <span className="text-gray-800">Task Support Ledger</span></li>
                <li className="flex items-center gap-2 text-[#B30006]">✓ <span className="text-gray-800">Verified Identity Card</span></li>
              </ul>
            </div>
            <a href="#contact" className="w-full py-3 bg-gray-100 hover:bg-gray-200 text-gray-800 rounded font-bold text-center transition-colors block text-sm border border-gray-200">Join Tier</a>
          </div>

          <div className="bg-white p-8 rounded-xl border-2 border-[#B30006] border-t-4 border-t-[#B30006] shadow-md flex flex-col justify-between relative hover:shadow-lg transition-shadow">
            <div className="absolute top-0 right-0 bg-[#B30006] text-white text-[10px] font-black px-3 py-1.5 uppercase rounded-bl-xl rounded-tr-xl tracking-wider">Most Popular</div>
            <div>
              <span className="px-3 py-1 bg-[#B30006]/10 text-[#B30006] rounded text-xs font-semibold mb-4 inline-block border border-[#B30006]/30">Tier 2</span>
              <h3 className="font-extrabold text-2xl text-gray-900 mb-2">Booth In-Charge</h3>
              <p className="text-gray-600 mb-6 font-medium text-sm leading-relaxed">For dedicated workers managing specific polling booths.</p>
              <ul className="space-y-3 text-sm text-gray-700 font-medium mb-8">
                <li className="flex items-center gap-2 text-[#B30006]">✓ <span className="text-gray-900 font-bold">Priority Micro-Job Claims</span></li>
                <li className="flex items-center gap-2 text-[#B30006]">✓ <span className="text-gray-900">Monthly Support Bonuses</span></li>
                <li className="flex items-center gap-2 text-[#B30006]">✓ <span className="text-gray-900">Direct Leader Connect</span></li>
              </ul>
            </div>
            <a href="#contact" className="w-full py-3 bg-[#B30006] hover:bg-red-800 text-white rounded font-bold text-center transition-colors block shadow text-sm">Join Tier</a>
          </div>

          <div className="bg-white p-8 rounded-xl border border-gray-200 border-t-4 border-t-[#FFC30B] shadow-sm flex flex-col justify-between hover:shadow-md transition-shadow">
            <div>
              <span className="px-3 py-1 bg-[#FFC30B]/20 text-[#B30006] rounded text-xs font-semibold mb-4 inline-block border border-[#FFC30B]/50">Tier 3</span>
              <h3 className="font-extrabold text-2xl text-gray-900 mb-2">Mandal Coordinator</h3>
              <p className="text-gray-500 mb-6 font-medium text-sm leading-relaxed">For experienced leaders coordinating multiple booth teams.</p>
              <ul className="space-y-3 text-sm text-gray-600 font-medium mb-8">
                <li className="flex items-center gap-2 text-[#B30006]">✓ <span className="text-gray-800">Team Management Dashboard</span></li>
                <li className="flex items-center gap-2 text-[#B30006]">✓ <span className="text-gray-800">Override Micro-Task Allocation</span></li>
                <li className="flex items-center gap-2 text-[#B30006]">✓ <span className="text-gray-800">Constituency Awards</span></li>
              </ul>
            </div>
            <a href="#contact" className="w-full py-3 bg-gray-100 hover:bg-gray-200 text-gray-800 rounded font-bold text-center transition-colors block text-sm border border-gray-200">Join Tier</a>
          </div>

          <div className="bg-white p-8 rounded-xl border border-gray-200 border-t-4 border-t-[#FFC30B] shadow-sm flex flex-col justify-between hover:shadow-md transition-shadow">
            <div>
              <span className="px-3 py-1 bg-[#FFC30B]/20 text-[#B30006] rounded text-xs font-semibold mb-4 inline-block border border-[#FFC30B]/50">Tier 4</span>
              <h3 className="font-extrabold text-2xl text-gray-900 mb-2">Campaign Champion</h3>
              <p className="text-gray-500 mb-6 font-medium text-sm leading-relaxed">For top-tier mobilizers driving key constituency strategies.</p>
              <ul className="space-y-3 text-sm text-gray-600 font-medium mb-8">
                <li className="flex items-center gap-2 text-[#FFC30B]">✓ <span className="text-gray-800">Core War Room Seat</span></li>
                <li className="flex items-center gap-2 text-[#FFC30B]">✓ <span className="text-gray-800">Executive Compensation</span></li>
                <li className="flex items-center gap-2 text-[#FFC30B]">✓ <span className="text-gray-800">Campaign Honors</span></li>
              </ul>
            </div>
            <a href="#contact" className="w-full py-3 bg-gray-100 hover:bg-gray-200 text-gray-800 rounded font-bold text-center transition-colors block text-sm border border-gray-200">Join Tier</a>
          </div>
        </div>
      </div>
    </section>
  );
}
