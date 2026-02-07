import { motion, useInView } from 'framer-motion';
import { useRef } from 'react';
import { Check } from 'lucide-react';
import { useNavigate } from 'react-router-dom';
import { sendCtaWebhook } from '../lib/webhook';

const BonusSection = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, amount: 0.2 });
  const navigate = useNavigate();

  const handleCTAClick = (e) => {
    e.preventDefault();
    sendCtaWebhook();
    window.location.href = 'https://wa.me/5534997101300?text=Ol%C3%A1%2C%20gostaria%20de%20entrar%20na%20comunidade';
  };
  const bonuses = [
    {
      title: '📚 Módulo de Aulas Gratuitas',
      description: '',
      features: [
        'Como criar avatares com IA do zero',
        'Ferramentas gratuitas que você precisa conhecer',
        'Estratégias de monetização comprovadas',
        'Erros que iniciantes cometem (e como evitar)'
      ],
      price: null,
      crossedOut: false
    },
    {
      title: '💬 Comunidade Exclusiva no Discord',
      description: '',
      features: [
        'Networking com outros membros',
        'Calls ao vivo semanais',
        'Suporte contínuo',
        'Compartilhamento de resultados e estratégias'
      ],
      price: null,
      crossedOut: false
    }
  ];

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2
      }
    }
  };

  const cardVariants = {
    hidden: { opacity: 0, y: 50 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.6,
        ease: [0.6, -0.05, 0.01, 0.99]
      }
    },
    hover: {
      y: -10,
      transition: { duration: 0.3 }
    }
  };

  return (
    <section className="bonus-section" ref={ref}>
      <div className="container">
        <motion.h2
          className="section-title"
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
        >
          O que está esperando por você
        </motion.h2>

        <motion.div
          className="bonuses-grid"
          variants={containerVariants}
          initial="hidden"
          animate={isInView ? "visible" : "hidden"}
        >
          {bonuses.map((bonus, index) => (
            <motion.div
              key={index}
              className="bonus-card"
              variants={cardVariants}
              whileHover="hover"
            >
              <h3 className="bonus-title">{bonus.title}</h3>
              {bonus.description && <p className="bonus-description">{bonus.description}</p>}

              <ul className="bonus-features">
                {bonus.features.map((feature, idx) => (
                  <li key={idx} className="bonus-feature">
                    <Check size={18} color="#22c55e" />
                    <span>{feature}</span>
                  </li>
                ))}
              </ul>

              {bonus.crossedOut && bonus.price && (
                <div className="bonus-price">
                  <span className="price-crossed">{bonus.price}</span>
                </div>
              )}
            </motion.div>
          ))}
        </motion.div>

        <motion.div
          className="bonus-cta"
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ delay: 0.5, duration: 0.6 }}
        >
          <motion.button
            className="btn-cta-bonus"
            onClick={handleCTAClick}
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            QUERO ACESSO GRATUITO AGORA
          </motion.button>
        </motion.div>
      </div>

      <style>{`
        .bonus-section {
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

        .bonuses-grid {
          display: grid;
          grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
          gap: 2rem;
          max-width: 1000px;
          margin: 0 auto;
        }

        .bonus-card {
          background: #1a1a1a;
          border: 1px solid #333;
          border-radius: var(--radius);
          padding: 2rem;
          transition: all 0.3s ease;
          position: relative;
          overflow: hidden;
        }

        .bonus-card::before {
          content: '';
          position: absolute;
          top: 0;
          left: 0;
          right: 0;
          height: 3px;
          background: linear-gradient(90deg, transparent, var(--primary), transparent);
          transform: translateX(-100%);
          transition: transform 0.6s;
        }

        .bonus-card:hover::before {
          transform: translateX(100%);
        }

        .bonus-card:hover {
          border-color: rgba(34, 197, 94, 0.5);
          box-shadow: 0 10px 40px rgba(34, 197, 94, 0.2);
        }

        .bonus-title {
          font-size: 1.5rem;
          font-weight: 700;
          color: #ffffff;
          margin-bottom: 1rem;
        }

        .bonus-description {
          color: #ffffff;
          line-height: 1.6;
          margin-bottom: 1.5rem;
          opacity: 0.9;
        }

        .bonus-features {
          list-style: none;
          padding: 0;
          margin: 0 0 1.5rem 0;
        }

        .bonus-feature {
          display: flex;
          align-items: center;
          gap: 0.75rem;
          color: #ffffff;
          margin-bottom: 0.75rem;
        }

        .bonus-feature span {
          font-size: 0.95rem;
        }

        .bonus-price {
          text-align: center;
          padding-top: 1rem;
          border-top: 1px solid #333;
        }

        .price-crossed {
          color: #ff4444;
          text-decoration: line-through;
          font-size: 1.1rem;
          font-weight: 600;
        }

        .bonus-cta {
          text-align: center;
          margin-top: 3rem;
        }

        .btn-cta-bonus {
          background-color: var(--primary);
          color: #000000;
          font-weight: 700;
          padding: 1.3rem 3.5rem;
          border-radius: var(--radius);
          font-size: 1.1rem;
          border: none;
          cursor: pointer;
          box-shadow: 0 0 20px rgba(34, 197, 94, 0.3);
          transition: all 0.3s ease;
          position: relative;
          overflow: hidden;
        }

        .btn-cta-bonus:hover {
          transform: translateY(-2px);
          box-shadow: 0 0 30px rgba(34, 197, 94, 0.5);
          background-color: var(--primary-hover);
        }

        @media(max-width: 768px) {
          .bonus-section {
            padding: 3rem 0;
          }

          .section-title {
            font-size: clamp(1.5rem, 6vw, 2rem);
            margin-bottom: 2rem;
          }

          .bonuses-grid {
            grid-template-columns: 1fr;
            gap: 1.5rem;
            max-width: 100%;
          }

          .bonus-card {
            padding: 1.5rem;
          }

          .bonus-title {
            font-size: 1.3rem;
          }

          .bonus-description {
            font-size: 0.95rem;
          }

          .bonus-feature span {
            font-size: 0.9rem;
          }

          .bonus-cta {
            margin-top: 2rem;
          }

          .btn-cta-bonus {
            width: 100%;
            padding: 1.1rem 2.5rem;
            font-size: 1rem;
            max-width: 400px;
          }
        }

        @media(max-width: 480px) {
          .bonus-section {
            padding: 2rem 0;
          }

          .section-title {
            margin-bottom: 1.5rem;
          }

          .bonuses-grid {
            gap: 1.25rem;
          }

          .bonus-card {
            padding: 1.25rem;
          }

          .bonus-title {
            font-size: 1.2rem;
            margin-bottom: 0.75rem;
          }

          .bonus-description {
            font-size: 0.9rem;
            margin-bottom: 1.25rem;
          }

          .bonus-feature {
            margin-bottom: 0.5rem;
            gap: 0.5rem;
          }

          .bonus-feature svg {
            width: 16px;
            height: 16px;
          }

          .price-crossed {
            font-size: 1rem;
          }

          .bonus-cta {
            margin-top: 1.5rem;
          }

          .btn-cta-bonus {
            padding: 1rem 2rem;
            font-size: 0.95rem;
          }
        }
      `}</style>
    </section>
  );
};

export default BonusSection;

