export default function FAQ() {
  const faqs = [
    {
      question: "Are you a PR agency or campaign event management company?",
      answer: "No. We are a Political Intelligence & Leadership Enablement company. We design permanent operational systems."
    },
    {
      question: "How do you ensure data accuracy?",
      answer: "We use field surveys and cross-reference them with historical voting patterns in Andhra Pradesh."
    },
    {
      question: "Do you work with multiple leaders in the same constituency?",
      answer: "Never. We maintain a strict no-conflict-of-interest policy. We are loyal to one leader per constituency."
    },
    {
      question: "What does '365-Day Political Operating System' mean?",
      answer: "We believe in working all year round, not just during election time. Perception and strategy are built daily."
    }
  ];

  return (
    <section className="bg-white py-16 px-6 border-b border-gray-200" id="faq">
      <div className="max-w-4xl mx-auto">
        <div className="text-center mb-10">
           <h2 className="text-3xl font-bold text-gray-900 mb-3">
             Frequently Asked Questions
           </h2>
           <div className="w-16 h-1 bg-[#FFC30B] mx-auto rounded"></div>
        </div>
        <div className="space-y-6">
          {faqs.map((faq, index) => (
            <div key={index} className="bg-gray-50 p-6 rounded-xl border-l-4 border-[#B30006] shadow-sm hover:shadow-md transition-shadow">
              <h3 className="font-bold text-xl text-gray-900 mb-2 flex items-start gap-2">
                <span className="text-[#FFC30B] font-black text-2xl leading-none mt-1">Q.</span>
                {faq.question}
              </h3>
              <p className="text-gray-700 font-medium pl-8">{faq.answer}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
