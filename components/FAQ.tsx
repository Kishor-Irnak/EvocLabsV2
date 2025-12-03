import React, { useState } from 'react';
import { Plus, Minus } from 'lucide-react';
import { FaqItem } from '../types';
import { motion, AnimatePresence } from 'framer-motion';

const faqs: FaqItem[] = [
  { 
    question: "How long does it take to see results?", 
    answer: "Typically, we see initial traction within the first 14-21 days as our testing phase concludes. Significant ROI improvements usually stabilize by month 2-3 once winning creatives are scaled." 
  },
  { 
    question: "What makes Evoc Labs different from other agencies?", 
    answer: "We don't just run ads; we build full-funnel profit engines. Most agencies focus on vanity metrics like 'Clicks'. We focus on Contribution Margin and Net Profit. Plus, our creative team is in-house." 
  },
  { 
    question: "Do you offer creative services?", 
    answer: "Yes. In 2024, creative is the new targeting. We have an in-house team of editors and designers who produce high-converting UGC and static ads specifically for paid social." 
  },
  { 
    question: "What are your pricing models?", 
    answer: "We work on a hybrid model: a base retainer + a performance fee based on ad spend or revenue generated. This aligns our incentives with yours—we only win when you grow." 
  }
];

const FAQ: React.FC = () => {
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  return (
    <section className="py-24 bg-slate-950 relative">
      <div className="max-w-4xl mx-auto px-6">
        <div className="text-center mb-16">
          <motion.h2 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-3xl md:text-5xl font-display font-bold mb-4"
          >
            Common Questions
          </motion.h2>
          <motion.p 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="text-slate-400"
          >
            Everything you need to know about working with us.
          </motion.p>
        </div>

        <div className="space-y-4">
          {faqs.map((faq, index) => (
            <motion.div 
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.1 * index }}
              key={index} 
              className={`border rounded-xl transition-all duration-300 ${openIndex === index ? 'bg-slate-900/80 border-brand-500/50 shadow-[0_0_15px_rgba(14,165,233,0.1)]' : 'bg-transparent border-white/10 hover:border-white/20'}`}
            >
              <button 
                className="w-full flex items-center justify-between p-6 text-left"
                onClick={() => setOpenIndex(openIndex === index ? null : index)}
              >
                <span className={`font-medium text-lg ${openIndex === index ? 'text-white' : 'text-slate-300'}`}>
                  {faq.question}
                </span>
                {openIndex === index ? <Minus className="text-brand-400 w-5 h-5" /> : <Plus className="text-slate-500 w-5 h-5" />}
              </button>
              
              <AnimatePresence>
                {openIndex === index && (
                  <motion.div 
                    initial={{ height: 0, opacity: 0 }}
                    animate={{ height: "auto", opacity: 1 }}
                    exit={{ height: 0, opacity: 0 }}
                    className="overflow-hidden"
                  >
                    <div className="p-6 pt-0 text-slate-400 leading-relaxed">
                      {faq.answer}
                    </div>
                  </motion.div>
                )}
              </AnimatePresence>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default FAQ;