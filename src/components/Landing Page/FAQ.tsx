import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ChevronDown } from 'lucide-react';

const faqs = [
  {
    question: "How long does it take to set up the store?",
    answer: "Most stores can be set up within a few days, depending on customization needs."
  },
  {
    question: "Can I add products myself later?",
    answer: "Yes, our dashboard is designed for you to easily manage and add new products at any time."
  },
  {
    question: "Is the website mobile-friendly?",
    answer: "Absolutely. Every template is fully responsive and optimized for seamless shopping on all devices."
  },
  {
    question: "Do you provide support after launch?",
    answer: "We offer dedicated post-launch support to help you with any technical questions or updates you may need."
  }
];

const FAQ = () => {
  const [openIndex, setOpenIndex] = useState(0);

  return (
    <section className="bg-white py-[100px] px-5 font-sans">
      <div className="max-w-[900px] mx-auto">
        <h2 className="text-center text-[42px] max-md:text-[32px] font-extrabold text-[#144534] mb-[60px] tracking-[-1px]">Frequently Asked Questions</h2>

        <div className="flex flex-col gap-5">
          {faqs.map((faq, index) => (
            <motion.div
              key={index}
              className={`bg-white rounded-[20px] p-[30px_40px] max-md:p-[20px_25px] cursor-pointer transition-all duration-300 [cubic-bezier(0.4,0,0.2,1)] border border-[#F0F0F0] shadow-[0_4px_20px_rgba(0,0,0,0.02)] hover:shadow-[0_10px_30px_rgba(0,0,0,0.05)] hover:-translate-y-0.5 ${openIndex === index ? 'border-[#E0E0E0] shadow-[0_10px_40px_rgba(0,0,0,0.06)]' : ''}`}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              onClick={() => setOpenIndex(openIndex === index ? -1 : index)}
            >
              <div className="flex justify-between items-center gap-5">
                <h3 className="text-[22px] max-md:text-[18px] font-bold text-[#1A1A4B] m-0">{faq.question}</h3>
                <div className={`w-11 h-11 max-md:w-9 max-md:h-9 border border-[#E0E0E0] rounded-full flex items-center justify-center bg-[#F8F9FA] transition-all duration-300 ${openIndex === index ? 'bg-white' : ''}`}>
                  <motion.div
                    animate={{ rotate: openIndex === index ? 180 : 0 }}
                    transition={{ duration: 0.3 }}
                    className="flex items-center justify-center"
                  >
                    <ChevronDown size={24} className="text-[#333]" />
                  </motion.div>
                </div>
              </div>

              <AnimatePresence>
                {openIndex === index && (
                  <motion.div
                    initial={{ height: 0, opacity: 0 }}
                    animate={{ height: "auto", opacity: 1 }}
                    exit={{ height: 0, opacity: 0 }}
                    transition={{ duration: 0.3, ease: "easeInOut" }}
                    className="overflow-hidden"
                  >
                    <p className="mt-5 text-[18px] leading-[1.6] text-[#6B7280] font-medium">{faq.answer}</p>
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