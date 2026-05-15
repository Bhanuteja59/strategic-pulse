export default function Testimonials() {
  return (
    <section className="py-20 px-6 bg-white border-b border-gray-200">
      <div className="max-w-5xl mx-auto">
        <div className="text-center mb-16">
          <span className="text-[#B30006] font-bold text-xs tracking-wider uppercase bg-[#FFC30B]/20 border border-[#FFC30B] px-3 py-1 rounded inline-block mb-3">
            Community Impact
          </span>
          <h2 className="text-3xl md:text-4xl font-extrabold text-gray-900 mb-4">
            Voices of Supported Volunteers
          </h2>
          <p className="text-gray-600 max-w-2xl mx-auto font-medium">
            Read what our dedicated grassroots workers say about having access to transparent micro-jobs and official recognition.
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-8">
          <div className="bg-gray-50 p-8 rounded-xl border border-gray-200 border-l-4 border-l-[#B30006] shadow-sm hover:shadow-md transition-shadow">
            <p className="text-gray-600 italic mb-6 leading-relaxed text-base">
              &ldquo;Before Strategy Pulse, we did endless ground work without any formal recognition or compensation. Now, every survey and booth activity is logged, and I receive direct monthly support. It empowers my whole team!&rdquo;
            </p>
            <div className="flex items-center gap-4">
              <div className="w-12 h-12 rounded-full bg-[#B30006] flex items-center justify-center font-bold text-white text-lg shrink-0">
                VK
              </div>
              <div>
                <h4 className="text-gray-900 font-bold">Venkatesh K.</h4>
                <p className="text-gray-500 text-sm">Booth Committee Lead</p>
              </div>
            </div>
          </div>

          <div className="bg-gray-50 p-8 rounded-xl border border-gray-200 border-l-4 border-l-[#FFC30B] shadow-sm hover:shadow-md transition-shadow">
            <p className="text-gray-600 italic mb-6 leading-relaxed text-base">
              &ldquo;The micro-tasker app is incredibly simple to use. I can instantly report civic issues that citizens tell me about, and I get recognized by senior leadership for solving real local problems.&rdquo;
            </p>
            <div className="flex items-center gap-4">
              <div className="w-12 h-12 rounded-full bg-[#FFC30B] flex items-center justify-center font-bold text-[#B30006] text-lg shrink-0">
                PR
              </div>
              <div>
                <h4 className="text-gray-900 font-bold">Priya R.</h4>
                <p className="text-gray-500 text-sm">Active Volunteer &amp; Organizer</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
