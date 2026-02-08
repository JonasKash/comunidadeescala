import { motion, useInView } from 'framer-motion';
import { useRef } from 'react';
import { useNavigate } from 'react-router-dom';
import { sendCtaWebhook } from '../lib/webhook';

const GuaranteeSection = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, amount: 0.3 });
  const navigate = useNavigate();

  const handleCTAClick = (e) => {
    e.preventDefault();
    sendCtaWebhook();
    window.location.href = '/dashboard';
  };

  return (
    <section className="guarantee-section" ref={ref}>
      <div className="guarantee-bg-glow"></div>
      <div className="container">
        <motion.h2
          className="section-title"
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
        >
          Está pronto para dar o primeiro passo?
        </motion.h2>

        <div className="guarantee-content">
          <div className="guarantee-text">
            <p>
              🎯 SEM pegadinhas. SEM cartão de crédito. SEM enrolação.<br />
              Apenas conteúdo de qualidade e pessoas dispostas a te ajudar.
            </p>
          </div>

          <motion.div
            className="guarantee-cta"
            initial={{ opacity: 0, y: 20 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ delay: 0.3, duration: 0.5 }}
          >
            <motion.button
              className="btn-cta-guarantee btn-cta-guarantee-large"
              onClick={handleCTAClick}
              whileHover={{
                scale: 1.05,
                boxShadow: "0 0 40px rgba(34, 197, 94, 0.6)"
              }}
              whileTap={{ scale: 0.95 }}
            >
              QUERO ACESSO GRATUITO AGORA
            </motion.button>
          </motion.div>
        </div>
      </div>

      <style>{`
        .guarantee-section {
          padding: 5rem 0;
          background: #000000;
          position: relative;
          overflow: hidden;
        }

        .guarantee-bg-glow {
          position: absolute;
          top: 50%;
          left: 50%;
          transform: translate(-50%, -50%);
          width: 500px;
          height: 500px;
          background: radial-gradient(circle, rgba(251, 191, 36, 0.15) 0%, transparent 70%);
          filter: blur(80px);
          z-index: 0;
          animation: pulse-glow-gold 3s ease-in-out infinite;
        }

        @keyframes pulse-glow-gold {
          0%, 100% {
            opacity: 0.5;
            transform: translate(-50%, -50%) scale(1);
          }
          50% {
            opacity: 0.8;
            transform: translate(-50%, -50%) scale(1.2);
          }
        }

        .section-title {
          font-size: clamp(1.8rem, 4vw, 2.5rem);
          font-weight: 800;
          color: #ffffff;
          text-align: center;
          margin-bottom: 3rem;
        }

        .guarantee-content {
          max-width: 700px;
          margin: 0 auto;
          text-align: center;
          position: relative;
          z-index: 1;
        }

        .guarantee-badge {
          margin-bottom: 2rem;
          display: flex;
          justify-content: center;
        }

        .badge-circle {
          width: 150px;
          height: 150px;
          border-radius: 50%;
          background: linear-gradient(135deg, #fbbf24, #f59e0b);
          display: flex;
          flex-direction: column;
          align-items: center;
          justify-content: center;
          box-shadow: 0 0 30px rgba(251, 191, 36, 0.4);
          border: 3px solid rgba(251, 191, 36, 0.3);
          position: relative;
          overflow: hidden;
        }

        .badge-shine {
          position: absolute;
          top: -50%;
          left: -50%;
          width: 200%;
          height: 200%;
          background: linear-gradient(45deg, transparent, rgba(255, 255, 255, 0.3), transparent);
          animation: badge-shine 3s infinite;
        }

        @keyframes badge-shine {
          0% {
            transform: translateX(-100%) translateY(-100%) rotate(45deg);
          }
          100% {
            transform: translateX(100%) translateY(100%) rotate(45deg);
          }
        }

        .badge-number {
          font-size: 4rem;
          font-weight: 900;
          color: #000000;
          line-height: 1;
        }

        .badge-text {
          font-size: 1rem;
          font-weight: 700;
          color: #000000;
          letter-spacing: 2px;
          margin-top: 0.25rem;
        }

        .btn-cta-guarantee-large {
          padding: 1.4rem 3rem !important;
          font-size: 1.2rem !important;
        }

        .guarantee-text {
          margin-bottom: 2rem;
        }

        .guarantee-text p {
          color: #ffffff;
          font-size: 1.1rem;
          line-height: 1.6;
          margin: 0;
        }

        .guarantee-cta {
          margin-top: 2rem;
        }

        .cta-text {
          color: #ffffff;
          font-size: 1rem;
          margin-bottom: 1.5rem;
          opacity: 0.9;
        }

        .btn-cta-guarantee {
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
          display: inline-block;
        }

        .btn-cta-guarantee:hover {
          transform: translateY(-2px);
          box-shadow: 0 0 30px rgba(34, 197, 94, 0.5);
          background-color: var(--primary-hover);
        }

        @media(max-width: 768px) {
          .guarantee-section {
            padding: 3rem 0;
          }

          .guarantee-bg-glow {
            width: 300px;
            height: 300px;
          }

          .section-title {
            font-size: clamp(1.5rem, 6vw, 2rem);
            margin-bottom: 2rem;
          }

          .guarantee-content {
            max-width: 100%;
            padding: 0 1rem;
          }

          .guarantee-badge {
            margin-bottom: 1.5rem;
          }

          .badge-circle {
            width: 120px;
            height: 120px;
          }

          .badge-number {
            font-size: 3rem;
          }

          .badge-text {
            font-size: 0.85rem;
          }

          .guarantee-text {
            margin-bottom: 2rem;
          }

          .guarantee-text p {
            font-size: 1rem;
            line-height: 1.5;
          }

          .cta-text {
            font-size: 0.95rem;
            margin-bottom: 1.25rem;
          }

          .btn-cta-guarantee {
            width: 100%;
            padding: 1rem 2rem;
            font-size: 1rem;
          }
        }

        @media(max-width: 480px) {
          .guarantee-section {
            padding: 2rem 0;
          }

          .guarantee-bg-glow {
            width: 250px;
            height: 250px;
          }

          .section-title {
            margin-bottom: 1.5rem;
          }

          .guarantee-badge {
            margin-bottom: 1.25rem;
          }

          .badge-circle {
            width: 100px;
            height: 100px;
          }

          .badge-number {
            font-size: 2.5rem;
          }

          .badge-text {
            font-size: 0.75rem;
            letter-spacing: 1px;
          }

          .guarantee-text {
            margin-bottom: 1.5rem;
          }

          .guarantee-text p {
            font-size: 0.95rem;
          }

          .cta-text {
            font-size: 0.9rem;
            margin-bottom: 1rem;
          }

          .btn-cta-guarantee {
            padding: 0.9rem 1.5rem;
            font-size: 0.95rem;
          }
        }
      `}</style>
    </section>
  );
};

export default GuaranteeSection;

