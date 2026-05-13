export default function Testimonials() {
  return (
    <section className="bg-gray-50 py-16 px-6 border-b border-gray-200">
      <div className="max-w-4xl mx-auto">
        <div className="text-center mb-10">
           <h2 className="text-3xl font-bold text-gray-900 mb-3">
             Our Promise to You
           </h2>
           <div className="w-16 h-1 bg-[#B30006] mx-auto rounded"></div>
        </div>
        <div className="grid md:grid-cols-2 gap-8">
          <div className="bg-white p-6 border-l-4 border-[#FFC30B] rounded-xl shadow-sm hover:shadow-md transition-shadow">
            <h3 className="font-bold text-xl text-gray-900 mb-2">Ideology-Agnostic</h3>
            <p className="text-gray-600 font-medium">We work with leaders based on professional need, not political party.</p>
          </div>
          <div className="bg-white p-6 border-l-4 border-[#B30006] rounded-xl shadow-sm hover:shadow-md transition-shadow">
            <h3 className="font-bold text-xl text-gray-900 mb-2">Absolute Discretion</h3>
            <p className="text-gray-600 font-medium">We never publish our client list. Your work with us is secret.</p>
          </div>
          <div className="bg-white p-6 border-l-4 border-[#B30006] rounded-xl shadow-sm hover:shadow-md transition-shadow">
            <h3 className="font-bold text-xl text-gray-900 mb-2">Leader-First</h3>
            <p className="text-gray-600 font-medium">We protect your personal brand above everything else.</p>
          </div>
          <div className="bg-white p-6 border-l-4 border-[#FFC30B] rounded-xl shadow-sm hover:shadow-md transition-shadow">
            <h3 className="font-bold text-xl text-gray-900 mb-2">No Conflict of Interest</h3>
            <p className="text-gray-600 font-medium">We will never work with your direct rivals in your area.</p>
          </div>
        </div>
      </div>
    </section>
  );
}
