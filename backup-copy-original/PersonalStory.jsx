import { motion, useInView } from 'framer-motion';
import { useRef } from 'react';
import { X, Check, TrendingDown, TrendingUp, Clock, Shirt, Crown, DollarSign } from 'lucide-react';
import { useModal } from '../context/ModalContext';

const PersonalStory = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, amount: 0.2 });
  const { openModal } = useModal();

  const handleCTAClick = (e) => {
    e.preventDefault();
    openModal();
  };

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.15
      }
    }
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.5,
        ease: [0.6, -0.05, 0.01, 0.99]
      }
    }
  };

  const comparisons = [
    {
      traditional: {
        icon: TrendingDown,
        text: 'Salário fixo limitado',
        color: '#ff4444'
      },
      freedom: {
        icon: TrendingUp,
        text: 'Renda escalável sem limites',
        color: '#22c55e'
      }
    },
    {
      traditional: {
        icon: Clock,
        text: 'Trocar tempo por dinheiro',
        color: '#ff4444'
      },
      freedom: {
        icon: DollarSign,
        text: 'Ganhar dinheiro enquanto dorme',
        color: '#22c55e'
      }
    },
    {
      traditional: {
        icon: Shirt,
        text: 'Depender de um chefe',
        color: '#ff4444'
      },
      freedom: {
        icon: Crown,
        text: 'Ser o próprio chefe',
        color: '#22c55e'
      }
    }
  ];

  return (
    <section className="comparison-section" ref={ref}>
      <div className="container">
        <motion.div
          className="comparison-header"
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
        >
          <h2 className="comparison-title">
            <span className="title-red">Vida Tradicional</span>
            <span className="title-vs"> vs </span>
            <span className="title-green">Liberdade</span>
          </h2>
          <p className="comparison-subtitle">
            Veja a diferença entre continuar na vida tradicional ou escolher a liberdade financeira
          </p>
        </motion.div>

        <motion.div
          className="comparison-grid"
          variants={containerVariants}
          initial="hidden"
          animate={isInView ? "visible" : "hidden"}
        >
          {comparisons.map((comparison, index) => (
            <div key={index} className="comparison-row">
              {/* Vida Tradicional */}
              <motion.div
                className="comparison-box traditional-box"
                variants={itemVariants}
                whileHover={{ scale: 1.02, y: -5 }}
              >
                <div className="box-icon-wrapper">
                  <comparison.traditional.icon 
                    size={32} 
                    color={comparison.traditional.color}
                  />
                </div>
                <p className="box-text">{comparison.traditional.text}</p>
                <div className="box-indicator">
                  <X size={20} color="#ff4444" />
                </div>
              </motion.div>

              {/* Com Liberdade */}
              <motion.div
                className="comparison-box freedom-box"
                variants={itemVariants}
                whileHover={{ scale: 1.02, y: -5 }}
              >
                <div className="box-icon-wrapper">
                  <comparison.freedom.icon 
                    size={32} 
                    color={comparison.freedom.color}
                  />
                </div>
                <p className="box-text">{comparison.freedom.text}</p>
                <div className="box-indicator">
                  <Check size={20} color="#22c55e" />
                </div>
              </motion.div>
            </div>
          ))}
        </motion.div>

        <motion.div
          className="comparison-cta"
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ delay: 0.5, duration: 0.6 }}
        >
          <motion.button
            className="btn-cta-comparison"
            onClick={handleCTAClick}
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            APRENDER AGORA
          </motion.button>
        </motion.div>
      </div>

      <style>{`
        .comparison-section {
          padding: 5rem 0;
          background: #000000;
        }

        .comparison-header {
          text-align: center;
          margin-bottom: 3rem;
        }

        .comparison-title {
          font-size: clamp(2rem, 5vw, 3.5rem);
          font-weight: 900;
          line-height: 1.2;
          margin-bottom: 1rem;
        }

        .title-red {
          color: #ff4444;
        }

        .title-vs {
          color: #ffffff;
          font-weight: 400;
        }

        .title-green {
          color: #22c55e;
        }

        .comparison-subtitle {
          font-size: clamp(1rem, 2vw, 1.2rem);
          color: #ffffff;
          opacity: 0.9;
          max-width: 700px;
          margin: 0 auto;
          line-height: 1.6;
        }

        .comparison-grid {
          display: flex;
          flex-direction: column;
          gap: 1.5rem;
          max-width: 1000px;
          margin: 0 auto 3rem;
        }

        .comparison-row {
          display: grid;
          grid-template-columns: 1fr 1fr;
          gap: 1.5rem;
        }

        .comparison-box {
          background: #1a1a1a;
          border-radius: var(--radius);
          padding: 2rem;
          display: flex;
          align-items: center;
          gap: 1.5rem;
          position: relative;
          transition: all 0.3s ease;
        }

        .traditional-box {
          border: 2px solid rgba(255, 68, 68, 0.3);
          box-shadow: 0 0 20px rgba(255, 68, 68, 0.1);
        }

        .traditional-box:hover {
          border-color: rgba(255, 68, 68, 0.5);
          box-shadow: 0 0 30px rgba(255, 68, 68, 0.2);
        }

        .freedom-box {
          border: 2px solid rgba(34, 197, 94, 0.3);
          box-shadow: 0 0 20px rgba(34, 197, 94, 0.1);
        }

        .freedom-box:hover {
          border-color: rgba(34, 197, 94, 0.5);
          box-shadow: 0 0 30px rgba(34, 197, 94, 0.2);
        }

        .box-icon-wrapper {
          flex-shrink: 0;
          width: 60px;
          height: 60px;
          display: flex;
          align-items: center;
          justify-content: center;
          background: rgba(255, 255, 255, 0.05);
          border-radius: 12px;
        }

        .box-text {
          flex: 1;
          color: #ffffff;
          font-size: 1.1rem;
          font-weight: 600;
          margin: 0;
          line-height: 1.4;
        }

        .box-indicator {
          flex-shrink: 0;
          width: 32px;
          height: 32px;
          display: flex;
          align-items: center;
          justify-content: center;
        }

        .comparison-cta {
          text-align: center;
        }

        .btn-cta-comparison {
          background: linear-gradient(135deg, #06b6d4, #22c55e);
          color: #000000;
          font-weight: 700;
          padding: 1.3rem 3.5rem;
          border-radius: var(--radius);
          font-size: 1.1rem;
          border: none;
          cursor: pointer;
          box-shadow: 0 0 30px rgba(34, 197, 94, 0.4);
          transition: all 0.3s ease;
          position: relative;
          overflow: hidden;
        }

        .btn-cta-comparison::before {
          content: '';
          position: absolute;
          top: 0;
          left: -100%;
          width: 100%;
          height: 100%;
          background: linear-gradient(90deg, transparent, rgba(255, 255, 255, 0.3), transparent);
          transition: left 0.5s;
        }

        .btn-cta-comparison:hover::before {
          left: 100%;
        }

        .btn-cta-comparison:hover {
          box-shadow: 0 0 40px rgba(34, 197, 94, 0.6);
          transform: translateY(-2px);
        }

        @media(max-width: 768px) {
          .comparison-section {
            padding: 3rem 0;
          }

          .comparison-header {
            margin-bottom: 2rem;
          }

          .comparison-title {
            font-size: clamp(1.5rem, 6vw, 2.5rem);
          }

          .comparison-subtitle {
            font-size: clamp(0.95rem, 2vw, 1.1rem);
            padding: 0 1rem;
          }

          .comparison-grid {
            gap: 1.25rem;
            margin-bottom: 2rem;
          }

          .comparison-row {
            grid-template-columns: 1fr;
            gap: 1rem;
          }

          .comparison-row:nth-child(1) .traditional-box {
            order: 1;
          }

          .comparison-row:nth-child(1) .freedom-box {
            order: 4;
          }

          .comparison-row:nth-child(2) .traditional-box {
            order: 2;
          }

          .comparison-row:nth-child(2) .freedom-box {
            order: 5;
          }

          .comparison-row:nth-child(3) .traditional-box {
            order: 3;
          }

          .comparison-row:nth-child(3) .freedom-box {
            order: 6;
          }

          .comparison-row {
            display: flex;
            flex-direction: column;
          }

          .comparison-box {
            padding: 1.5rem;
            gap: 1rem;
          }

          .box-icon-wrapper {
            width: 50px;
            height: 50px;
          }

          .box-icon-wrapper svg {
            width: 24px;
            height: 24px;
          }

          .box-text {
            font-size: 1rem;
          }

          .btn-cta-comparison {
            padding: 1.1rem 2.5rem;
            font-size: 1rem;
            width: 100%;
            max-width: 400px;
          }
        }

        @media(max-width: 480px) {
          .comparison-section {
            padding: 2rem 0;
          }

          .comparison-header {
            margin-bottom: 1.5rem;
          }

          .comparison-grid {
            gap: 1rem;
            margin-bottom: 1.5rem;
          }

          .comparison-box {
            padding: 1.25rem;
            gap: 0.75rem;
          }

          .box-icon-wrapper {
            width: 45px;
            height: 45px;
          }

          .box-icon-wrapper svg {
            width: 20px;
            height: 20px;
          }

          .box-text {
            font-size: 0.95rem;
          }

          .box-indicator svg {
            width: 18px;
            height: 18px;
          }

          .btn-cta-comparison {
            padding: 1rem 2rem;
            font-size: 0.95rem;
          }
        }
      `}</style>
    </section>
  );
};

export default PersonalStory;
