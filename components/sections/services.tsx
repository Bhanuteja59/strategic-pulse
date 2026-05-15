export default function Services() {
  return (
    <section className="py-20 px-6 bg-gray-50 border-b border-gray-200" id="services">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-16">
          <span className="text-[#B30006] font-bold text-xs tracking-wider uppercase bg-[#FFC30B]/20 border border-[#FFC30B] px-3 py-1 rounded inline-block mb-3">
            What We Provide
          </span>
          <h2 className="text-3xl md:text-4xl font-extrabold text-gray-900 mb-4">
            Support Services for <span className="text-[#B30006]">Ground Volunteers</span>
          </h2>
          <p className="text-gray-600 max-w-2xl mx-auto font-medium">
            We offer specialized support infrastructure to make local campaigning easier, more rewarding, and highly effective for every volunteer.
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-8">
          <div className="bg-white p-8 rounded-xl border border-gray-200 border-l-4 border-l-[#B30006] shadow-sm hover:shadow-md transition-shadow">
            <div className="w-12 h-12 rounded bg-[#B30006]/10 border border-[#B30006]/30 flex items-center justify-center text-2xl mb-6">
              🎯
            </div>
            <h3 className="font-extrabold text-2xl text-gray-900 mb-3">Booth-Level Task Management</h3>
            <p className="text-gray-600 leading-relaxed font-medium">
              We break down large constituency goals into simple, manageable micro-tasks for booth agents. Receive daily updates and clear guidance on local outreach.
            </p>
          </div>

          <div className="bg-white p-8 rounded-xl border border-gray-200 border-l-4 border-l-[#FFC30B] shadow-sm hover:shadow-md transition-shadow">
            <div className="w-12 h-12 rounded bg-[#FFC30B]/20 border border-[#FFC30B]/50 flex items-center justify-center text-2xl mb-6">
              💸
            </div>
            <h3 className="font-extrabold text-2xl text-gray-900 mb-3">Micro-Job Compensation Tracker</h3>
            <p className="text-gray-600 leading-relaxed font-medium">
              Volunteers spend valuable time and effort. Our transparent ledger ensures every survey completed and event organized is tracked for fair support compensation.
            </p>
          </div>

          <div className="bg-white p-8 rounded-xl border border-gray-200 border-l-4 border-l-[#B30006] shadow-sm hover:shadow-md transition-shadow">
            <div className="w-12 h-12 rounded bg-[#B30006]/10 border border-[#B30006]/30 flex items-center justify-center text-2xl mb-6">
              🤝
            </div>
            <h3 className="font-extrabold text-2xl text-gray-900 mb-3">Citizen Grievance Redressal Network</h3>
            <p className="text-gray-600 leading-relaxed font-medium">
              Empower volunteers to act as true community problem-solvers. Easily report broken roads, water shortages, and local issues directly to high-level leadership.
            </p>
          </div>

          <div className="bg-white p-8 rounded-xl border border-gray-200 border-l-4 border-l-[#FFC30B] shadow-sm hover:shadow-md transition-shadow">
            <div className="w-12 h-12 rounded bg-[#FFC30B]/20 border border-[#FFC30B]/50 flex items-center justify-center text-2xl mb-6">
              🏅
            </div>
            <h3 className="font-extrabold text-2xl text-gray-900 mb-3">Official Identity &amp; Recognition</h3>
            <p className="text-gray-600 leading-relaxed font-medium">
              Gain prestige in your local community. We provide official digital badging, leaderboards, and direct recognition certificates from senior political leadership.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
