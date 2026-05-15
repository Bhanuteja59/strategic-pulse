export default function FAQ() {
  const faqs = [
    {
      question: "Who can register as a volunteer on Strategy Pulse?",
      answer: "Any dedicated citizen, booth worker, or local campaign organizer looking to support their community and participate in local governance."
    },
    {
      question: "How do micro-jobs and compensation work?",
      answer: "When you complete verified daily tasks—such as door-to-door surveys, citizen grievance logging, or event organization—your activity is recorded on our transparent ledger for monthly support stipends."
    },
    {
      question: "What is the Verified Identity Card?",
      answer: "It is an official digital identity pass recognized by senior political leadership that certifies your role as an authorized booth worker or mandal coordinator."
    },
    {
      question: "Do I get direct access to political leaders?",
      answer: "Yes. As you rise through our recognition tiers by successfully completing micro-tasks, you unlock direct communication channels and war-room access with sitting leaders."
    }
  ];

  return (
    <section className="py-20 px-6 bg-gray-50 border-b border-gray-200" id="faq">
      <div className="max-w-4xl mx-auto">
        <div className="text-center mb-16">
          <span className="text-[#B30006] font-bold text-xs tracking-wider uppercase bg-[#FFC30B]/20 border border-[#FFC30B] px-3 py-1 rounded inline-block mb-3">
            Got Questions?
          </span>
          <h2 className="text-3xl md:text-4xl font-extrabold text-gray-900 mb-4">
            Frequently Asked Questions
          </h2>
          <p className="text-gray-600 max-w-2xl mx-auto font-medium">
            Everything you need to know about joining our grassroots network, claiming micro-jobs, and securing support.
          </p>
        </div>

        <div className="space-y-6">
          {faqs.map((faq, index) => (
            <div key={index} className="bg-white p-8 rounded-xl border border-gray-200 border-l-4 border-l-[#B30006] shadow-sm hover:shadow-md transition-shadow">
              <h3 className="font-extrabold text-xl text-gray-900 mb-3 flex items-start gap-3">
                <span className="text-[#B30006] font-black text-2xl leading-none mt-0.5">Q.</span>
                {faq.question}
              </h3>
              <p className="text-gray-600 font-medium pl-8 leading-relaxed text-base">{faq.answer}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
