export default function TrustIndicators() {
  return (
    <section className="py-20 px-6 bg-gray-50 border-b border-gray-200" id="volunteer-hub">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-16">
          <span className="text-[#B30006] font-bold text-xs tracking-wider uppercase bg-[#FFC30B]/20 border border-[#FFC30B] px-3 py-1 rounded inline-block mb-3">
            Command Centers
          </span>
          <h2 className="text-3xl md:text-4xl font-extrabold text-gray-900 mb-4">
            Volunteer Support &amp; <span className="text-[#B30006]">Execution Dashboards</span>
          </h2>
          <p className="text-gray-600 max-w-2xl mx-auto font-medium">
            We provide dedicated digital dashboards for booth workers and local coordinators to track micro-jobs, resolve local issues, and secure recognition.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
          <div className="bg-white p-6 rounded-xl border border-gray-200 border-t-4 border-t-[#B30006] shadow-sm hover:shadow-md transition-shadow">
            <div className="w-10 h-10 rounded bg-[#B30006]/10 border border-[#B30006]/30 flex items-center justify-center text-[#B30006] mb-4 font-bold text-lg">
              01
            </div>
            <h3 className="font-bold text-xl text-gray-900 mb-2">Booth Task Tracker</h3>
            <p className="text-gray-500 font-medium text-sm leading-relaxed">
              Real-time synchronization of local booth management tasks and community outreach drives.
            </p>
          </div>

          <div className="bg-white p-6 rounded-xl border border-gray-200 border-t-4 border-t-[#FFC30B] shadow-sm hover:shadow-md transition-shadow">
            <div className="w-10 h-10 rounded bg-[#FFC30B]/20 border border-[#FFC30B]/50 flex items-center justify-center text-[#B30006] mb-4 font-bold text-lg">
              02
            </div>
            <h3 className="font-bold text-xl text-gray-900 mb-2">Micro-Jobs Ledger</h3>
            <p className="text-gray-500 font-medium text-sm leading-relaxed">
              Transparent recording of daily volunteer activities, survey collections, and corresponding support compensation.
            </p>
          </div>

          <div className="bg-white p-6 rounded-xl border border-gray-200 border-t-4 border-t-[#B30006] shadow-sm hover:shadow-md transition-shadow">
            <div className="w-10 h-10 rounded bg-[#B30006]/10 border border-[#B30006]/30 flex items-center justify-center text-[#B30006] mb-4 font-bold text-lg">
              03
            </div>
            <h3 className="font-bold text-xl text-gray-900 mb-2">Grievance Network</h3>
            <p className="text-gray-500 font-medium text-sm leading-relaxed">
              Instant logging of civic issues brought up by citizens during door-to-door volunteer interactions.
            </p>
          </div>

          <div className="bg-white p-6 rounded-xl border border-gray-200 border-t-4 border-t-[#FFC30B] shadow-sm hover:shadow-md transition-shadow">
            <div className="w-10 h-10 rounded bg-[#FFC30B]/20 border border-[#FFC30B]/50 flex items-center justify-center text-[#B30006] mb-4 font-bold text-lg">
              04
            </div>
            <h3 className="font-bold text-xl text-gray-900 mb-2">Identity &amp; Badging</h3>
            <p className="text-gray-500 font-medium text-sm leading-relaxed">
              Official digital identity cards and recognition rankings for top-performing booth coordinators.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
