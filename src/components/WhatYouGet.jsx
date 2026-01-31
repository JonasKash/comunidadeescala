import { motion, useInView } from 'framer-motion';
import { useRef } from 'react';
import { Check } from 'lucide-react';
import { useModal } from '../context/ModalContext';

const WhatYouGet = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, amount: 0.2 });
  const { openModal } = useModal();

  const handleCTAClick = (e) => {
    e.preventDefault();
    openModal();
  };

  const benefitsLeft = [
    'Aulas práticas de como criar avatares ultrarealistas com IA (sem pagar nada)',
    'Estratégias de monetização para começar a faturar em até 24 horas',
    'Acesso exclusivo à Comunidade da Escala no Discord com pessoas que estão no mesmo caminho que você',
    'Suporte direto de quem já está faturando nesse mercado'
  ];

  const benefitsRight = [
    'Biblioteca de prompts prontos para usar imediatamente'
  ];

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
    hidden: { opacity: 0, x: -30 },
    visible: {
      opacity: 1,
      x: 0,
      transition: {
        duration: 0.5,
        ease: [0.6, -0.05, 0.01, 0.99]
      }
    }
  };

  return (
    <section className="what-you-get-section" ref={ref}>
      <div className="container">
        <div className="benefits-two-columns">
          <motion.div
            className="benefits-column"
            variants={containerVariants}
            initial="hidden"
            animate={isInView ? "visible" : "hidden"}
          >
            {benefitsLeft.map((benefit, index) => (
              <motion.div
                key={index}
                className="benefit-item"
                variants={itemVariants}
                whileHover={{
                  scale: 1.05,
                  x: 10,
                  transition: { duration: 0.2 }
                }}
              >
                <motion.div
                  className="benefit-icon"
                  whileHover={{ rotate: 360 }}
                  transition={{ duration: 0.5 }}
                >
                  <Check size={20} color="#22c55e" />
                </motion.div>
                <p className="benefit-text">{benefit}</p>
              </motion.div>
            ))}
          </motion.div>

          <motion.div
            className="benefits-column"
            variants={containerVariants}
            initial="hidden"
            animate={isInView ? "visible" : "hidden"}
          >
            <h3 className="bonus-title-inline">E mais:</h3>
            {benefitsRight.map((benefit, index) => (
              <motion.div
                key={index}
                className="benefit-item"
                variants={itemVariants}
                whileHover={{
                  scale: 1.05,
                  x: 10,
                  transition: { duration: 0.2 }
                }}
              >
                <motion.div
                  className="benefit-icon"
                  whileHover={{ rotate: 360 }}
                  transition={{ duration: 0.5 }}
                >
                  <Check size={20} color="#22c55e" />
                </motion.div>
                <p className="benefit-text">{benefit}</p>
              </motion.div>
            ))}
          </motion.div>
        </div>

        {/* CTA Section - free access */}
        <motion.div
          className="price-section-inline"
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ delay: 0.3, duration: 0.6 }}
        >
          <motion.button
            className="btn-cta-inline"
            onClick={handleCTAClick}
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            QUERO ACESSO GRATUITO AGORA
          </motion.button>
        </motion.div>
      </div>

      <style>{`
        .what-you-get-section {
          padding: 5rem 0;
          background: #000000;
        }

        .section-header {
          margin-bottom: 3rem;
        }

        .green-bar {
          width: 100%;
          height: 4px;
          background: var(--primary);
          margin-bottom: 2rem;
        }

        .section-title {
          font-size: clamp(1.8rem, 4vw, 2.5rem);
          font-weight: 800;
          color: #ffffff;
          line-height: 1.2;
        }

        .benefits-two-columns {
          display: grid;
          grid-template-columns: 1fr 1fr;
          gap: 3rem;
          max-width: 1000px;
          margin: 0 auto;
        }

        .benefits-column {
          display: flex;
          flex-direction: column;
          gap: 1rem;
        }

        .bonus-title-inline {
          font-size: 1.3rem;
          font-weight: 700;
          color: var(--primary);
          margin-bottom: 0.5rem;
          margin-top: 0;
        }

        .price-section-inline {
          text-align: center;
          margin-top: 3rem;
          padding-top: 3rem;
          border-top: 1px solid rgba(255, 255, 255, 0.1);
        }

        .price-display {
          margin-bottom: 2rem;
        }

        .price-old-inline {
          margin-bottom: 0.5rem;
        }

        .price-crossed-inline {
          color: #ff4444;
          text-decoration: line-through;
          font-size: 1.5rem;
          font-weight: 600;
        }

        .price-currency-inline {
          font-size: 2rem;
          font-weight: 700;
          color: #ffffff;
        }

        .price-amount-inline {
          font-size: 4rem;
          font-weight: 900;
          color: #ffffff;
          line-height: 1;
        }

        .btn-cta-inline {
          background-color: var(--primary);
          color: #000000;
          font-weight: 700;
          padding: 1.2rem 3rem;
          border-radius: var(--radius);
          font-size: 1.1rem;
          border: none;
          cursor: pointer;
          box-shadow: 0 0 20px rgba(34, 197, 94, 0.3);
          transition: all 0.3s ease;
        }

        .btn-cta-inline:hover {
          transform: translateY(-2px);
          box-shadow: 0 0 30px rgba(34, 197, 94, 0.5);
          background-color: var(--primary-hover);
        }

        .benefit-item {
          display: flex;
          align-items: flex-start;
          gap: 1rem;
          background: #1a1a1a;
          border: 1px solid #333;
          border-radius: var(--radius);
          padding: 1.5rem;
          transition: all 0.3s ease;
          position: relative;
          overflow: hidden;
        }

        .benefit-item::before {
          content: '';
          position: absolute;
          top: 0;
          left: -100%;
          width: 100%;
          height: 100%;
          background: linear-gradient(90deg, transparent, rgba(34, 197, 94, 0.1), transparent);
          transition: left 0.5s;
        }

        .benefit-item:hover::before {
          left: 100%;
        }

        .benefit-item:hover {
          border-color: rgba(34, 197, 94, 0.5);
          box-shadow: 0 0 20px rgba(34, 197, 94, 0.2);
        }

        .benefit-icon {
          flex-shrink: 0;
          margin-top: 2px;
        }

        .benefit-text {
          color: #ffffff;
          font-size: 1rem;
          line-height: 1.6;
          margin: 0;
        }

        @media(max-width: 768px) {
          .what-you-get-section {
            padding: 3rem 0;
          }

          .section-header {
            margin-bottom: 2rem;
          }

          .green-bar {
            height: 3px;
            margin-bottom: 1.5rem;
          }

          .section-title {
            font-size: clamp(1.5rem, 6vw, 2rem);
          }

          .benefits-two-columns {
            grid-template-columns: 1fr;
            gap: 2rem;
          }

          .bonus-title-inline {
            font-size: 1.2rem;
            margin-bottom: 0.75rem;
          }

          .price-section-inline {
            margin-top: 2rem;
            padding-top: 2rem;
          }

          .price-crossed-inline {
            font-size: 1.2rem;
          }

          .price-currency-inline {
            font-size: 1.5rem;
          }

          .price-amount-inline {
            font-size: 3rem;
          }

          .btn-cta-inline {
            width: 100%;
            padding: 1rem 2rem;
            font-size: 1rem;
          }

          .benefit-item {
            padding: 1.25rem;
          }

          .benefit-text {
            font-size: 0.95rem;
          }
        }

        @media(max-width: 480px) {
          .what-you-get-section {
            padding: 2rem 0;
          }

          .section-header {
            margin-bottom: 1.5rem;
          }

          .green-bar {
            margin-bottom: 1rem;
          }

          .benefits-two-columns {
            gap: 1.5rem;
          }

          .benefit-item {
            padding: 1rem;
            gap: 0.75rem;
          }

          .benefit-icon svg {
            width: 18px;
            height: 18px;
          }

          .benefit-text {
            font-size: 0.9rem;
          }

          .price-section-inline {
            margin-top: 1.5rem;
            padding-top: 1.5rem;
          }

          .price-crossed-inline {
            font-size: 1.1rem;
          }

          .price-currency-inline {
            font-size: 1.25rem;
          }

          .price-amount-inline {
            font-size: 2.5rem;
          }

          .btn-cta-inline {
            padding: 0.9rem 1.5rem;
            font-size: 0.95rem;
          }
        }
      `}</style>
    </section>
  );
};

export default WhatYouGet;

