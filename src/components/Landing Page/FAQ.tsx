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
    <section className="faq-section">
      <div className="faq-container">
        <h2 className="faq-title">Frequently Asked Questions</h2>

        <div className="faq-list">
          {faqs.map((faq, index) => (
            <motion.div
              key={index}
              className={`faq-item ${openIndex === index ? 'active' : ''}`}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              onClick={() => setOpenIndex(openIndex === index ? -1 : index)}
            >
              <div className="faq-question-row">
                <h3>{faq.question}</h3>
                <div className="faq-icon-wrapper">
                  <motion.div
                    animate={{ rotate: openIndex === index ? 180 : 0 }}
                    transition={{ duration: 0.3 }}
                    style={{ display: 'flex', alignItems: 'center', justifyContent: 'center' }}
                  >
                    <ChevronDown size={24} className="faq-icon" />
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
                    className="faq-answer-wrapper"
                  >
                    <p className="faq-answer">{faq.answer}</p>
                  </motion.div>
                )}
              </AnimatePresence>
            </motion.div>
          ))}
        </div>
      </div>

      <style>{`
        .faq-section {
          background-color: #FFFFFF;
          padding: 100px 20px;
          font-family: 'Inter', sans-serif;
        }

        .faq-container {
          max-width: 900px;
          margin: 0 auto;
        }

        .faq-title {
          text-align: center;
          font-size: 42px;
          font-weight: 800;
          color: #144534;
          margin-bottom: 60px;
          letter-spacing: -1px;
        }

        .faq-list {
          display: flex;
          flex-direction: column;
          gap: 20px;
        }

        .faq-item {
          background: #FFFFFF;
          border-radius: 20px;
          padding: 30px 40px;
          cursor: pointer;
          transition: all 0.3s cubic-bezier(0.4, 0, 0.2, 1);
          border: 1px solid #F0F0F0;
          box-shadow: 0 4px 20px rgba(0, 0, 0, 0.02);
        }

        .faq-item:hover {
          box-shadow: 0 10px 30px rgba(0, 0, 0, 0.05);
          transform: translateY(-2px);
        }

        .faq-item.active {
          border-color: #E0E0E0;
          box-shadow: 0 10px 40px rgba(0, 0, 0, 0.06);
        }

        .faq-question-row {
          display: flex;
          justify-content: space-between;
          align-items: center;
          gap: 20px;
        }

        .faq-question-row h3 {
          font-size: 22px;
          font-weight: 700;
          color: #1A1A4B; /* Dark navy color from image */
          margin: 0;
        }

        .faq-icon-wrapper {
          width: 44px;
          height: 44px;
          border: 1px solid #E0E0E0;
          border-radius: 50%;
          display: flex;
          align-items: center;
          justify-content: center;
          background: #F8F9FA;
          transition: all 0.3s ease;
        }

        .faq-item.active .faq-icon-wrapper {
          background: #FFFFFF;
        }

        .faq-icon {
          color: #333;
        }

        .faq-answer-wrapper {
          overflow: hidden;
        }

        .faq-answer {
          margin-top: 20px;
          font-size: 18px;
          line-height: 1.6;
          color: #6B7280; /* Muted gray text */
          font-weight: 500;
        }

        @media (max-width: 768px) {
          .faq-title { font-size: 32px; }
          .faq-item { padding: 20px 25px; }
          .faq-question-row h3 { font-size: 18px; }
          .faq-icon-wrapper { width: 36px; height: 36px; }
        }
      `}</style>
    </section>
  );
};

export default FAQ;