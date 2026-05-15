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
    <section className="py-20 px-6 bg-slate-50 dark:bg-[#0f172a]/30 border-b border-black/5 dark:border-white/5 relative transition-colors duration-300" id="faq">
      <div className="max-w-4xl mx-auto">
        <div className="text-center mb-16">
           <span className="text-indigo-600 dark:text-indigo-400 font-bold text-xs tracking-wider uppercase bg-indigo-500/10 border border-indigo-500/30 px-3 py-1 rounded-full inline-block mb-3">
             Got Questions?
           </span>
           <h2 className="text-3xl md:text-4xl font-extrabold text-slate-900 dark:text-white mb-4 transition-colors duration-300">
             Frequently Asked Questions
           </h2>
           <p className="text-slate-700 dark:text-slate-400 max-w-2xl mx-auto font-medium transition-colors duration-300">
             Everything you need to know about joining our grassroots network, claiming micro-jobs, and securing support.
           </p>
        </div>
        
        <div className="space-y-6">
          {faqs.map((faq, index) => (
            <div key={index} className="glass-panel p-8 rounded-3xl border-l-4 border-l-cyan-600 dark:border-l-cyan-400 hover:border-black/20 dark:hover:border-white/20 transition-all duration-300 shadow-xl">
              <h3 className="font-extrabold text-xl text-slate-900 dark:text-white mb-3 flex items-start gap-3 transition-colors duration-300">
                <span className="text-cyan-600 dark:text-cyan-400 font-black text-2xl leading-none mt-0.5">Q.</span>
                {faq.question}
              </h3>
              <p className="text-slate-700 dark:text-slate-300 font-medium pl-8 leading-relaxed text-base transition-colors duration-300">{faq.answer}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
