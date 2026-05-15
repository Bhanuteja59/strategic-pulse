export default function DashboardPreview() {
  return (
    <section className="py-20 px-6 bg-white border-b border-gray-200">
      <div className="max-w-5xl mx-auto text-center">
        <span className="text-[#B30006] font-bold text-xs tracking-wider uppercase bg-[#FFC30B]/20 border border-[#FFC30B] px-3 py-1 rounded inline-block mb-3">
          365-Day Operations
        </span>
        <h2 className="text-3xl md:text-4xl font-extrabold text-gray-900 mb-4">
          The Volunteer Command Center
        </h2>
        <p className="text-gray-600 max-w-2xl mx-auto font-medium mb-12 text-base md:text-lg">
          Track your personal booth achievements, view upcoming micro-jobs, and coordinate seamlessly with your constituency leader all in one secure portal.
        </p>

        <div className="bg-gray-50 p-10 md:p-16 rounded-2xl border border-gray-200 border-t-4 border-t-[#B30006] shadow-sm hover:shadow-md transition-shadow">
          <div className="w-20 h-20 mx-auto mb-6 bg-[#B30006] rounded-2xl flex items-center justify-center shadow-lg">
            <span className="text-white font-bold text-3xl">📱</span>
          </div>
          <h3 className="text-gray-900 font-extrabold text-2xl md:text-3xl mb-3">
            Interactive Booth Mapping &amp; Micro-Tasker Suite
          </h3>
          <p className="text-gray-600 max-w-xl mx-auto font-medium text-base mb-8">
            Experience the future of grassroots coordination. Connect directly with field coordinators to receive real-time support and activity payouts.
          </p>

          <a
            href="#contact"
            className="inline-block bg-[#B30006] hover:bg-red-800 text-white px-8 py-3.5 rounded text-base font-bold transition-colors shadow-md"
          >
            Request App Access
          </a>
        </div>
      </div>
    </section>
  );
}
