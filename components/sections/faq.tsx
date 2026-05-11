"use client";

import { motion } from "framer-motion";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

export default function FAQ() {
  const faqs = [
    {
      question: "How do your surveys work?",
      answer: "We deploy surveys through multiple channels: our secure mobile app for field agents, targeted SMS, and verified web portals. Our system ensures strict de-duplication and demographic matching to ensure representative sampling."
    },
    {
      question: "How accurate is the data?",
      answer: "We maintain a 95%+ accuracy rate by cross-referencing survey data with historical constituency records, demographic baselines, and live sentiment tracking. Our NLP models filter out bots and inconsistent responses automatically."
    },
    {
      question: "Do you provide booth-level reports?",
      answer: "Yes, our platform is designed to provide hyper-localized intelligence. We map sentiment, demographic shifts, and key issues down to the individual booth level, allowing for highly targeted interventions."
    },
    {
      question: "Can NGOs and research organizations use the platform?",
      answer: "Absolutely. While we serve political and civic leaders, our platform is equally powerful for NGOs conducting social impact assessments, public health tracking, and community engagement studies."
    },
    {
      question: "Is the platform secure and compliant?",
      answer: "Security is our top priority. All data is encrypted at rest and in transit. We employ role-based access control (RBAC), regular security audits, and comply with all relevant data protection regulations to ensure constituent privacy."
    }
  ];

  return (
    <section className="py-24 bg-white dark:bg-slate-950 border-t border-slate-100 dark:border-slate-900">
      <div className="container mx-auto px-4 md:px-6">
        
        <div className="grid md:grid-cols-12 gap-12 items-start">
          
          <motion.div 
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="md:col-span-4"
          >
            <h2 className="text-teal-500 dark:text-teal-400 font-semibold tracking-wider uppercase text-sm mb-3">FAQ</h2>
            <h3 className="text-3xl font-bold text-slate-900 dark:text-white mb-6">
              Common Questions
            </h3>
            <p className="text-slate-600 dark:text-slate-400 mb-8 leading-relaxed">
              Find answers to the most frequently asked questions about our intelligence platform and methodologies.
            </p>
            <div className="p-6 bg-slate-50 dark:bg-slate-900/50 rounded-2xl border border-slate-100 dark:border-slate-800">
               <p className="text-sm text-slate-600 dark:text-slate-400 font-medium mb-4">Still have questions?</p>
               <a href="/contact" className="text-teal-500 hover:text-teal-600 font-semibold underline underline-offset-4">Contact our team &rarr;</a>
            </div>
          </motion.div>

          <motion.div 
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="md:col-span-8"
          >
            <Accordion type="single" collapsible className="w-full">
              {faqs.map((faq, index) => (
                <AccordionItem key={index} value={`item-${index}`} className="border-b border-slate-200 dark:border-slate-800 py-2">
                  <AccordionTrigger className="text-lg font-semibold text-slate-900 dark:text-white hover:text-teal-500 dark:hover:text-teal-400 data-[state=open]:text-teal-500">
                    {faq.question}
                  </AccordionTrigger>
                  <AccordionContent className="text-slate-600 dark:text-slate-400 text-base leading-relaxed">
                    {faq.answer}
                  </AccordionContent>
                </AccordionItem>
              ))}
            </Accordion>
          </motion.div>

        </div>

      </div>
    </section>
  );
}
