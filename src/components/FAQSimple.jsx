import { useState } from 'react';
import { motion, useInView, AnimatePresence } from 'framer-motion';
import { useRef } from 'react';
import { Plus } from 'lucide-react';

const FAQSimple = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, amount: 0.2 });
  const [openIndex, setOpenIndex] = useState(null);

  const faqs = [
    {
      question: 'É realmente grátis?',
      answer: 'Sim. Sem pegadinhas, sem cobrança escondida.'
    },
    {
      question: 'Preciso ter conhecimento prévio?',
      answer: 'Não. As aulas são para iniciantes.'
    },
    {
      question: 'Vou ter suporte?',
      answer: 'Sim, dentro da comunidade no Discord.'
    },
    {
      question: 'Quanto tempo tenho de acesso?',
      answer: 'O acesso às aulas e à comunidade é vitalício.'
    }
  ];

  const toggleFAQ = (index) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1
      }
    }
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.5,
        ease: [0.6, -0.05, 0.01, 0.99]
      }
    }
  };

  return (
    <section className="faq-simple-section" ref={ref}>
      <div className="container">
        <motion.h2
          className="section-title"
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
        >
          FAQ Rápido
        </motion.h2>

        <motion.div
          className="faq-list"
          variants={containerVariants}
          initial="hidden"
          animate={isInView ? "visible" : "hidden"}
        >
          {faqs.map((faq, index) => (
            <motion.div
              key={index}
              className={`faq-item ${openIndex === index ? 'open' : ''}`}
              variants={itemVariants}
              whileHover={{ scale: 1.02 }}
            >
              <motion.button
                className="faq-question"
                onClick={() => toggleFAQ(index)}
                whileHover={{ x: 5 }}
                whileTap={{ scale: 0.98 }}
              >
                <span className="faq-question-text">{faq.question}</span>
                <motion.div
                  animate={{ rotate: openIndex === index ? 45 : 0 }}
                  transition={{ duration: 0.3 }}
                >
                  <Plus className="faq-icon" size={20} />
                </motion.div>
              </motion.button>
              <AnimatePresence>
                {openIndex === index && (
                  <motion.div
                    className="faq-answer"
                    initial={{ height: 0, opacity: 0 }}
                    animate={{ height: 'auto', opacity: 1 }}
                    exit={{ height: 0, opacity: 0 }}
                    transition={{ duration: 0.3 }}
                  >
                    <p>{faq.answer}</p>
                  </motion.div>
                )}
              </AnimatePresence>
            </motion.div>
          ))}
        </motion.div>
      </div>

      <style>{`
        .faq-simple-section {
          padding: 5rem 0;
          background: #000000;
        }

        .section-title {
          font-size: clamp(1.8rem, 4vw, 2.5rem);
          font-weight: 800;
          color: #ffffff;
          text-align: center;
          margin-bottom: 3rem;
        }

        .faq-list {
          max-width: 800px;
          margin: 0 auto;
        }

        .faq-item {
          background: #1a1a1a;
          border: 1px solid #333;
          border-radius: var(--radius);
          margin-bottom: 1rem;
          overflow: hidden;
          transition: all 0.3s ease;
        }

        .faq-item.open {
          border-color: rgba(34, 197, 94, 0.5);
        }

        .faq-question {
          width: 100%;
          display: flex;
          align-items: center;
          justify-content: space-between;
          padding: 1.5rem;
          background: transparent;
          border: none;
          cursor: pointer;
          text-align: left;
        }

        .faq-question-text {
          color: #ffffff;
          font-size: 1.1rem;
          font-weight: 600;
          flex: 1;
        }

        .faq-icon {
          color: #ffffff;
          flex-shrink: 0;
        }

        .faq-answer {
          padding: 0 1.5rem 1.5rem 1.5rem;
          color: #ffffff;
          line-height: 1.6;
          opacity: 0.9;
        }

        .faq-answer p {
          margin: 0;
        }

        @media(max-width: 768px) {
          .faq-simple-section {
            padding: 3rem 0;
          }

          .section-title {
            font-size: clamp(1.5rem, 6vw, 2rem);
            margin-bottom: 2rem;
          }

          .faq-list {
            max-width: 100%;
          }

          .faq-question {
            padding: 1.25rem;
          }

          .faq-question-text {
            font-size: 1rem;
            padding-right: 2rem;
          }

          .faq-answer {
            padding: 0 1.25rem 1.25rem 1.25rem;
            font-size: 0.95rem;
          }
        }

        @media(max-width: 480px) {
          .faq-simple-section {
            padding: 2rem 0;
          }

          .section-title {
            margin-bottom: 1.5rem;
          }

          .faq-item {
            margin-bottom: 0.75rem;
          }

          .faq-question {
            padding: 1rem;
          }

          .faq-question-text {
            font-size: 0.95rem;
            padding-right: 1.5rem;
          }

          .faq-icon {
            width: 18px;
            height: 18px;
          }

          .faq-answer {
            padding: 0 1rem 1rem 1rem;
            font-size: 0.9rem;
          }
        }
      `}</style>
    </section>
  );
};

export default FAQSimple;

