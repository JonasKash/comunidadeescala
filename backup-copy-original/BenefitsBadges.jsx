import { motion, useInView } from 'framer-motion';
import { useRef } from 'react';

const BenefitsBadges = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, amount: 0.2 });

  const badges = [
    {
      text: 'Passo a passo atualizado',
      gradient: true,
      position: 'top-left'
    },
    {
      text: 'Estratégia pronta para aplicar hoje',
      gradient: false,
      position: 'top-right'
    },
    {
      text: 'Call ao vivo uma vez por semana',
      gradient: false,
      position: 'middle-left'
    },
    {
      text: 'Comunidade de alunos',
      gradient: false,
      position: 'middle-right'
    },
    {
      text: 'Área de membros completa',
      gradient: true,
      position: 'bottom-center'
    }
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

  const badgeVariants = {
    hidden: { opacity: 0, scale: 0.8 },
    visible: {
      opacity: 1,
      scale: 1,
      transition: {
        duration: 0.4,
        ease: [0.6, -0.05, 0.01, 0.99]
      }
    },
    hover: {
      scale: 1.05,
      transition: { duration: 0.2 }
    }
  };

  return (
    <section className="benefits-badges-section" ref={ref}>
      <div className="container">
        <motion.div
          className="badges-grid"
          variants={containerVariants}
          initial="hidden"
          animate={isInView ? "visible" : "hidden"}
        >
          {badges.map((badge, index) => (
            <motion.div
              key={index}
              className={`badge-item ${badge.gradient ? 'badge-gradient' : 'badge-outline'} badge-${badge.position}`}
              variants={badgeVariants}
              whileHover="hover"
            >
              <span className="badge-text">{badge.text}</span>
            </motion.div>
          ))}
        </motion.div>
      </div>

      <style>{`
        .benefits-badges-section {
          padding: 4rem 0;
          background: #000000;
        }

        .badges-grid {
          display: grid;
          grid-template-columns: 1fr 1fr;
          grid-template-rows: auto auto auto;
          gap: 1rem;
          max-width: 800px;
          margin: 0 auto;
        }

        .badge-item {
          padding: 1.25rem 1.75rem;
          border-radius: 12px;
          text-align: center;
          transition: all 0.3s ease;
          cursor: default;
        }

        .badge-gradient {
          background: linear-gradient(135deg, #06b6d4, #22c55e);
          box-shadow: 0 0 20px rgba(34, 197, 94, 0.3);
        }

        .badge-outline {
          background: #000000;
          border: 1px solid rgba(255, 255, 255, 0.2);
        }

        .badge-outline:hover {
          border-color: rgba(34, 197, 94, 0.5);
          box-shadow: 0 0 15px rgba(34, 197, 94, 0.2);
        }

        .badge-outline .badge-text {
          color: #ffffff !important;
        }

        .badge-text {
          color: #ffffff;
          font-size: 1rem;
          font-weight: 600;
          line-height: 1.4;
        }

        .badge-bottom-center {
          grid-column: 1 / -1;
          padding: 1.5rem 2rem;
        }

        .badge-bottom-center .badge-text {
          font-size: 1.1rem;
        }

        @media(max-width: 768px) {
          .benefits-badges-section {
            padding: 3rem 0;
          }

          .badges-grid {
            grid-template-columns: 1fr;
            gap: 1rem;
            max-width: 100%;
          }

          .badge-item {
            padding: 1rem 1.5rem;
          }

          .badge-bottom-center {
            grid-column: 1;
            padding: 1.25rem 1.75rem;
          }

          .badge-text {
            font-size: 0.95rem;
          }

          .badge-bottom-center .badge-text {
            font-size: 1rem;
          }
        }

        @media(max-width: 480px) {
          .benefits-badges-section {
            padding: 2rem 0;
          }

          .badges-grid {
            gap: 0.75rem;
          }

          .badge-item {
            padding: 0.9rem 1.25rem;
          }

          .badge-text {
            font-size: 0.9rem;
          }

          .badge-bottom-center {
            padding: 1.1rem 1.5rem;
          }
        }
      `}</style>
    </section>
  );
};

export default BenefitsBadges;




