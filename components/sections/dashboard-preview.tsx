export default function DashboardPreview() {
  return (
    <section className="bg-white py-16 px-6 border-b border-gray-200">
      <div className="max-w-4xl mx-auto text-center">
        <h2 className="text-3xl font-bold text-[#B30006] mb-4">
          The 365-Day Political Command Center
        </h2>
        <div className="w-16 h-1 bg-[#FFC30B] mx-auto rounded mb-6"></div>
        <p className="text-xl text-gray-700 mb-10 font-medium">
          Monitor your constituency, track volunteer operations, and view simple surveys all in one place.
        </p>
        <div className="bg-gray-50 p-12 rounded-xl border-2 border-dashed border-[#B30006]/30 hover:border-[#B30006]/60 transition-colors shadow-inner">
          <div className="w-16 h-16 mx-auto mb-4 bg-[#FFC30B]/20 rounded-full flex items-center justify-center">
            <span className="text-[#B30006] font-bold text-2xl">📊</span>
          </div>
          <p className="text-gray-600 font-semibold text-lg">
            Interactive Dashboard & Demographics Mapping
          </p>
          <p className="text-gray-500 mt-2">
            Contact us for a live demo of the data tools for Andhra Pradesh.
          </p>
        </div>
      </div>
    </section>
  );
}
