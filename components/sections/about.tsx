export default function About() {
  return (
    <section className="py-20 px-6 bg-white border-b border-gray-200" id="why-support-volunteers">
      <div className="max-w-5xl mx-auto">
        <div className="flex flex-col md:flex-row items-start md:items-center justify-between gap-8 mb-12">
          <div>
            <span className="text-[#B30006] font-bold text-xs tracking-wider uppercase bg-[#FFC30B]/20 border border-[#FFC30B] px-3 py-1 rounded inline-block mb-3">
              The Real Power
            </span>
            <h2 className="text-3xl md:text-4xl font-black text-gray-900">
              Why We Support <span className="text-[#B30006]">Grassroots Workers</span>
            </h2>
          </div>
          <p className="text-gray-600 max-w-xl font-medium leading-relaxed bg-gray-50 p-6 rounded-xl border-l-4 border-l-[#B30006] text-base md:text-lg">
            Political campaigns are won by the dedication of thousands of local booth workers and campaign volunteers. We ensure they are never taken for granted by providing structured micro-jobs, daily task support, and financial &amp; social empowerment.
          </p>
        </div>

        <div className="bg-gray-50 p-8 md:p-10 rounded-2xl border border-gray-200 shadow-sm">
          <ul className="grid md:grid-cols-2 gap-6 text-gray-800 font-medium text-lg">
            <li className="flex items-start gap-4 p-4 rounded-xl bg-white border border-gray-100 shadow-sm hover:shadow-md transition-shadow">
              <div className="w-8 h-8 rounded bg-[#B30006] text-white flex items-center justify-center shrink-0 font-bold mt-0.5">✓</div>
              <div>
                <h4 className="text-gray-900 font-bold mb-1">Valuing Daily Micro-Jobs</h4>
                <p className="text-gray-500 text-sm font-normal">Every survey collected, poster placed, and voter engaged is recognized and rewarded.</p>
              </div>
            </li>
            <li className="flex items-start gap-4 p-4 rounded-xl bg-white border border-gray-100 shadow-sm hover:shadow-md transition-shadow">
              <div className="w-8 h-8 rounded bg-[#B30006] text-white flex items-center justify-center shrink-0 font-bold mt-0.5">✓</div>
              <div>
                <h4 className="text-gray-900 font-bold mb-1">Direct Volunteer Empowerment</h4>
                <p className="text-gray-500 text-sm font-normal">We eliminate middlemen so volunteers get direct recognition from leadership.</p>
              </div>
            </li>
            <li className="flex items-start gap-4 p-4 rounded-xl bg-white border border-gray-100 shadow-sm hover:shadow-md transition-shadow">
              <div className="w-8 h-8 rounded bg-[#B30006] text-white flex items-center justify-center shrink-0 font-bold mt-0.5">✓</div>
              <div>
                <h4 className="text-gray-900 font-bold mb-1">Smart Execution Tools</h4>
                <p className="text-gray-500 text-sm font-normal">Intuitive mobile interfaces designed specifically for fast booth-level reporting.</p>
              </div>
            </li>
            <li className="flex items-start gap-4 p-4 rounded-xl bg-white border border-gray-100 shadow-sm hover:shadow-md transition-shadow">
              <div className="w-8 h-8 rounded bg-[#B30006] text-white flex items-center justify-center shrink-0 font-bold mt-0.5">✓</div>
              <div>
                <h4 className="text-gray-900 font-bold mb-1">365-Day Continuous Support</h4>
                <p className="text-gray-500 text-sm font-normal">Supporting our workers throughout the year, not just during the intense election weeks.</p>
              </div>
            </li>
          </ul>
        </div>
      </div>
    </section>
  );
}
