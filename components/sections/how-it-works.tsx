export default function HowItWorks() {
  return (
    <section className="py-20 px-6 bg-white border-b border-gray-200" id="approach">
      <div className="max-w-5xl mx-auto">
        <div className="text-center mb-16">
          <span className="text-[#B30006] font-bold text-xs tracking-wider uppercase bg-[#FFC30B]/20 border border-[#FFC30B] px-3 py-1 rounded inline-block mb-3">
            Simple Process
          </span>
          <h2 className="text-3xl md:text-4xl font-black text-gray-900 mb-4">
            How We Support You
          </h2>
          <p className="text-gray-600 max-w-2xl mx-auto font-medium">
            Our platform makes it incredibly straightforward to get onboarded, claim local micro-jobs, and earn respect and support.
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          <div className="bg-gray-50 p-8 rounded-xl border border-gray-200 border-t-4 border-t-[#B30006] text-center shadow-sm hover:shadow-md transition-shadow">
            <div className="w-16 h-16 rounded-full bg-[#B30006] text-white font-black text-2xl flex items-center justify-center mx-auto mb-6 shadow-md">
              1
            </div>
            <h3 className="font-extrabold text-xl text-gray-900 mb-3">Onboard &amp; Get Verified</h3>
            <p className="text-gray-600 text-sm leading-relaxed font-medium">
              Register with your booth and constituency details. Receive your verified digital identity card instantly.
            </p>
          </div>

          <div className="bg-gray-50 p-8 rounded-xl border border-gray-200 border-t-4 border-t-[#FFC30B] text-center shadow-sm hover:shadow-md transition-shadow">
            <div className="w-16 h-16 rounded-full bg-[#FFC30B] text-[#B30006] font-black text-2xl flex items-center justify-center mx-auto mb-6 shadow-md">
              2
            </div>
            <h3 className="font-extrabold text-xl text-gray-900 mb-3">Claim Local Micro-Jobs</h3>
            <p className="text-gray-600 text-sm leading-relaxed font-medium">
              Browse available tasks like citizen surveys, community meeting organization, or voter outreach in your area.
            </p>
          </div>

          <div className="bg-gray-50 p-8 rounded-xl border border-gray-200 border-t-4 border-t-[#B30006] text-center shadow-sm hover:shadow-md transition-shadow">
            <div className="w-16 h-16 rounded-full bg-[#B30006] text-white font-black text-2xl flex items-center justify-center mx-auto mb-6 shadow-md">
              3
            </div>
            <h3 className="font-extrabold text-xl text-gray-900 mb-3">Earn Recognition &amp; Support</h3>
            <p className="text-gray-600 text-sm leading-relaxed font-medium">
              Log your completed tasks to unlock direct support compensation, leader awards, and senior leadership access.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
