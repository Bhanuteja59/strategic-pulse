export default function About() {
  return (
    <section className="bg-white py-16 px-6 border-b border-gray-200" id="why-strategy-pulse">
      <div className="max-w-4xl mx-auto">
        <h2 className="text-3xl font-bold text-gray-900 mb-4 flex items-center gap-3">
          Why Strategy Pulse
          <span className="h-1 flex-grow bg-gradient-to-r from-[#FFC30B] to-transparent rounded"></span>
        </h2>
        <p className="text-xl text-gray-700 mb-8 font-medium leading-relaxed border-l-4 border-[#B30006] pl-6 py-2 bg-gray-50">
          Politics today changes very fast. Public opinion shifts every day.
          But most leaders still don't use real data systems. We help you use
          grassroots surveys and actionable intelligence to understand exactly what people want.
        </p>
        <div className="bg-gray-50 p-8 rounded-xl border border-gray-200 shadow-sm">
          <ul className="grid md:grid-cols-2 gap-4 text-gray-700 font-medium">
            <li className="flex items-start gap-3">
              <span className="text-[#FFC30B] font-bold text-lg mt-0.5">✓</span>
              Public Opinion Changes Daily
            </li>
            <li className="flex items-start gap-3">
              <span className="text-[#B30006] font-bold text-lg mt-0.5">✓</span>
              Local issues escalate quickly
            </li>
            <li className="flex items-start gap-3">
              <span className="text-[#FFC30B] font-bold text-lg mt-0.5">✓</span>
              Digital narratives shape reality
            </li>
            <li className="flex items-start gap-3">
              <span className="text-[#B30006] font-bold text-lg mt-0.5">✓</span>
              Perception wins elections, not just effort
            </li>
          </ul>
        </div>
      </div>
    </section>
  );
}
