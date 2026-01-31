import { motion, useInView } from 'framer-motion';
import { useRef } from 'react';
import { useModal } from '../context/ModalContext';

const PricingSection = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, amount: 0.3 });
  const { openModal } = useModal();

  const handleCTAClick = (e) => {
    e.preventDefault();
    openModal();
  };

  const priceVariants = {
    hidden: { opacity: 0, scale: 0.8 },
    visible: {
      opacity: 1,
      scale: 1,
      transition: {
        duration: 0.6,
        ease: [0.6, -0.05, 0.01, 0.99]
      }
    }
  };

  const pulseVariants = {
    animate: {
      scale: [1, 1.05, 1],
      transition: {
        duration: 2,
        repeat: Infinity,
        ease: "easeInOut"
      }
    }
  };

  return (
    <section className="pricing-section" ref={ref}>
      <div className="pricing-bg-glow"></div>
      <div className="container">
        <motion.div
          className="pricing-box"
          initial="hidden"
          animate={isInView ? "visible" : "hidden"}
          variants={priceVariants}
        >
          <motion.div
            className="price-old"
            initial={{ opacity: 0, x: -20 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ delay: 0.2, duration: 0.5 }}
          >
            <span className="price-crossed">R$ 67,00</span>
          </motion.div>
          
          <motion.div
            className="price-main"
            variants={pulseVariants}
            animate="animate"
          >
            <span className="price-currency">R$</span>
            <span className="price-amount">9,90</span>
            <div className="price-glow"></div>
          </motion.div>

          <motion.button
            className="btn-cta-pricing"
            onClick={handleCTAClick}
            initial={{ opacity: 0, y: 20 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ delay: 0.4, duration: 0.5 }}
            whileHover={{
              scale: 1.05,
              boxShadow: "0 0 40px rgba(34, 197, 94, 0.6)"
            }}
            whileTap={{ scale: 0.95 }}
          >
            Quero garantir minha vaga!
          </motion.button>

          <motion.p
            className="guarantee-text"
            initial={{ opacity: 0 }}
            animate={isInView ? { opacity: 1 } : {}}
            transition={{ delay: 0.6, duration: 0.5 }}
          >
            30 dias de garantia
          </motion.p>
        </motion.div>
      </div>

      <style>{`
        .pricing-section {
          padding: 5rem 0;
          background: #000000;
          position: relative;
          overflow: hidden;
        }

        .pricing-bg-glow {
          position: absolute;
          top: 50%;
          left: 50%;
          transform: translate(-50%, -50%);
          width: 600px;
          height: 600px;
          background: radial-gradient(circle, rgba(34, 197, 94, 0.2) 0%, transparent 70%);
          filter: blur(100px);
          z-index: 0;
          animation: pulse-glow-pricing 3s ease-in-out infinite;
        }

        @keyframes pulse-glow-pricing {
          0%, 100% {
            opacity: 0.6;
            transform: translate(-50%, -50%) scale(1);
          }
          50% {
            opacity: 1;
            transform: translate(-50%, -50%) scale(1.2);
          }
        }

        .pricing-box {
          max-width: 500px;
          margin: 0 auto;
          text-align: center;
          position: relative;
          z-index: 1;
        }

        .price-old {
          margin-bottom: 1rem;
        }

        .price-crossed {
          color: #ff4444;
          text-decoration: line-through;
          font-size: 1.5rem;
          font-weight: 600;
        }

        .price-main {
          background: var(--primary);
          color: #000000;
          padding: 2rem;
          border-radius: var(--radius);
          margin-bottom: 2rem;
          display: flex;
          align-items: baseline;
          justify-content: center;
          gap: 0.5rem;
          box-shadow: 0 0 30px rgba(34, 197, 94, 0.3);
          position: relative;
          overflow: hidden;
        }

        .price-glow {
          position: absolute;
          top: -50%;
          left: -50%;
          width: 200%;
          height: 200%;
          background: radial-gradient(circle, rgba(255, 255, 255, 0.3) 0%, transparent 70%);
          animation: rotate-glow 3s linear infinite;
        }

        @keyframes rotate-glow {
          from {
            transform: rotate(0deg);
          }
          to {
            transform: rotate(360deg);
          }
        }

        .price-currency {
          font-size: 2rem;
          font-weight: 700;
        }

        .price-amount {
          font-size: 4rem;
          font-weight: 900;
          line-height: 1;
        }

        .btn-cta-pricing {
          background-color: var(--primary);
          color: #000000;
          font-weight: 700;
          padding: 1.2rem 3rem;
          border-radius: var(--radius);
          font-size: 1.1rem;
          border: none;
          cursor: pointer;
          transition: all 0.3s ease;
          box-shadow: 0 0 20px rgba(34, 197, 94, 0.3);
          width: 100%;
          margin-bottom: 1rem;
        }

        .btn-cta-pricing:hover {
          transform: translateY(-2px);
          box-shadow: 0 0 30px rgba(34, 197, 94, 0.5);
          background-color: var(--primary-hover);
        }

        .guarantee-text {
          color: #ffffff;
          font-size: 0.9rem;
          opacity: 0.8;
          margin: 0;
        }

        @media(max-width: 768px) {
          .pricing-section {
            padding: 3rem 0;
          }

          .pricing-bg-glow {
            width: 400px;
            height: 400px;
          }

          .pricing-box {
            max-width: 100%;
            padding: 0 1rem;
          }

          .price-old {
            margin-bottom: 0.75rem;
          }

          .price-crossed {
            font-size: 1.2rem;
          }

          .price-main {
            padding: 1.5rem;
            margin-bottom: 1.5rem;
          }

          .price-currency {
            font-size: 1.5rem;
          }

          .price-amount {
            font-size: 3rem;
          }

          .btn-cta-pricing {
            padding: 1rem 2rem;
            font-size: 1rem;
            width: 100%;
          }

          .guarantee-text {
            font-size: 0.85rem;
          }
        }

        @media(max-width: 480px) {
          .pricing-section {
            padding: 2rem 0;
          }

          .pricing-bg-glow {
            width: 300px;
            height: 300px;
          }

          .price-crossed {
            font-size: 1.1rem;
          }

          .price-main {
            padding: 1.25rem;
            margin-bottom: 1.25rem;
          }

          .price-currency {
            font-size: 1.25rem;
          }

          .price-amount {
            font-size: 2.5rem;
          }

          .btn-cta-pricing {
            padding: 0.9rem 1.5rem;
            font-size: 0.95rem;
          }

          .guarantee-text {
            font-size: 0.8rem;
          }
        }
      `}</style>
    </section>
  );
};

export default PricingSection;

