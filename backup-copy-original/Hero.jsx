import { motion } from 'framer-motion';
import { useModal } from '../context/ModalContext';

const Hero = () => {
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
        staggerChildren: 0.15,
        delayChildren: 0
      }
    }
  };

  const itemVariants = {
    hidden: { opacity: 1, y: 0 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.4,
        ease: [0.6, -0.05, 0.01, 0.99]
      }
    }
  };

  const buttonVariants = {
    hidden: { opacity: 1, scale: 1 },
    visible: {
      opacity: 1,
      scale: 1,
      transition: {
        duration: 0.3,
        ease: [0.6, -0.05, 0.01, 0.99]
      }
    },
    hover: {
      scale: 1.05,
      boxShadow: "0 0 40px rgba(34, 197, 94, 0.6)",
      transition: {
        duration: 0.3
      }
    },
    tap: {
      scale: 0.95
    }
  };

  return (
    <section className="hero-section-lowticket">
      <div className="hero-bg-glow"></div>
      <div className="container">
        <motion.div
          variants={containerVariants}
          initial="visible"
          animate="visible"
        >
          {/* Logo */}
          <motion.div className="logo-container" variants={itemVariants}>
            <div className="logo-text">
              <span className="logo-main">Avatar com IA</span>
              <span className="logo-sub">Hot Avançado</span>
            </div>
          </motion.div>

          {/* Main Content - Split Layout */}
          <div className="hero-split">
            <div className="hero-content">
              <motion.h1 className="hero-headline" variants={itemVariants}>
                Aprenda o verdadeiro<br />
                <span className="nicho-hot-highlight">Nicho Hot</span><br />
                para faturar<br />
                <span className="money-highlight">R$ 5.000,00 / mês</span><br />
                usando modelos ultrarealistas
              </motion.h1>
              
              <motion.button
                className="btn-cta-lowticket btn-cta-desktop"
                onClick={handleCTAClick}
                variants={buttonVariants}
                whileHover="hover"
                whileTap="tap"
              >
                <span className="btn-text">APRENDER AGORA</span>
                <span className="btn-glow"></span>
              </motion.button>
            </div>

            <motion.div
              className="hero-image-wrapper"
              variants={itemVariants}
            >
              <div className="hero-image">
                <img src="/image.png" alt="Bruno Mota" className="hero-image-photo" />
              </div>
              <motion.button
                className="btn-cta-lowticket btn-cta-mobile"
                onClick={handleCTAClick}
                variants={buttonVariants}
                whileHover="hover"
                whileTap="tap"
              >
                <span className="btn-text">APRENDER AGORA</span>
                <span className="btn-glow"></span>
              </motion.button>
            </motion.div>
          </div>
        </motion.div>
      </div>

      <style>{`
        .hero-section-lowticket {
          min-height: 100vh;
          display: flex;
          align-items: center;
          padding: 4rem 0;
          background: #000000;
          position: relative;
          overflow: hidden;
        }

        .hero-bg-glow {
          position: absolute;
          top: -50%;
          right: -20%;
          width: 800px;
          height: 800px;
          background: radial-gradient(circle, rgba(34, 197, 94, 0.15) 0%, transparent 70%);
          filter: blur(80px);
          z-index: 0;
          animation: pulse-glow 4s ease-in-out infinite;
        }

        @keyframes pulse-glow {
          0%, 100% {
            opacity: 0.5;
            transform: scale(1);
          }
          50% {
            opacity: 0.8;
            transform: scale(1.1);
          }
        }

        .logo-container {
          margin-bottom: 3rem;
          position: relative;
          z-index: 1;
        }

        .logo-text {
          display: flex;
          flex-direction: column;
        }

        .logo-main {
          font-size: 1.5rem;
          font-weight: 700;
          color: var(--primary);
          line-height: 1.2;
          text-shadow: 0 0 20px rgba(34, 197, 94, 0.3);
        }

        .logo-sub {
          font-size: 0.9rem;
          color: var(--text-muted);
          font-weight: 400;
        }

        .hero-split {
          display: grid;
          grid-template-columns: 1.2fr 1fr;
          gap: 4rem;
          align-items: center;
          position: relative;
          z-index: 1;
        }

        .hero-content {
          position: relative;
          z-index: 1;
        }

        .hero-image-wrapper {
          position: relative;
        }

        .btn-cta-desktop {
          display: inline-block;
        }

        .btn-cta-mobile {
          display: none !important;
        }

        .hero-image {
          position: relative;
          width: 100%;
          aspect-ratio: 3/4;
          max-width: 500px;
        }

        .hero-image-photo {
          width: 100%;
          height: 100%;
          object-fit: cover;
          border-radius: var(--radius);
          position: relative;
        }

        .hero-headline {
          font-size: clamp(2rem, 6vw, 3.5rem);
          font-weight: 800;
          line-height: 1.2;
          color: #ffffff;
          margin-bottom: 1.5rem;
        }

        .nicho-hot-highlight {
          color: var(--primary);
          font-weight: 900;
          text-shadow: 0 0 30px rgba(34, 197, 94, 0.6), 0 0 60px rgba(34, 197, 94, 0.3);
          display: inline-block;
          font-size: 1.3em;
          letter-spacing: 0.05em;
          margin: 0.2em 0;
        }

        .money-highlight {
          color: var(--primary);
          font-weight: 900;
          text-shadow: 0 0 30px rgba(34, 197, 94, 0.6), 0 0 60px rgba(34, 197, 94, 0.3);
          display: inline-block;
          font-size: 0.9em;
          letter-spacing: 0.05em;
          margin: 0.2em 0;
          background: linear-gradient(135deg, var(--primary), #00ff66);
          -webkit-background-clip: text;
          -webkit-text-fill-color: transparent;
          background-clip: text;
        }

        .hero-subtitle {
          font-size: clamp(1rem, 2vw, 1.2rem);
          color: #ffffff;
          line-height: 1.6;
          margin-bottom: 2.5rem;
          opacity: 0.9;
        }

        .btn-cta-lowticket {
          background-color: var(--primary);
          color: #000000;
          font-weight: 700;
          padding: 1.2rem 3rem;
          border-radius: var(--radius);
          font-size: 1.1rem;
          border: none;
          cursor: pointer;
          position: relative;
          overflow: hidden;
          display: inline-block;
          box-shadow: 0 0 20px rgba(34, 197, 94, 0.3);
        }

        .btn-text {
          position: relative;
          z-index: 2;
        }

        .btn-glow {
          position: absolute;
          top: 50%;
          left: 50%;
          width: 0;
          height: 0;
          border-radius: 50%;
          background: rgba(255, 255, 255, 0.3);
          transform: translate(-50%, -50%);
          transition: width 0.6s, height 0.6s;
        }

        .btn-cta-lowticket:hover .btn-glow {
          width: 300px;
          height: 300px;
        }

        @media(max-width: 768px) {
          .hero-section-lowticket {
            padding: 2rem 0;
            min-height: auto;
          }

          .hero-bg-glow {
            width: 400px;
            height: 400px;
            top: -30%;
            right: -30%;
          }

          .logo-container {
            margin-bottom: 1.5rem;
          }

          .logo-main {
            font-size: 1.2rem;
          }

          .logo-sub {
            font-size: 0.8rem;
          }

          .hero-split {
            grid-template-columns: 1fr;
            gap: 2rem;
          }

          .hero-image {
            max-width: 100%;
          }

          .hero-headline {
            margin-bottom: 1.5rem;
            font-size: clamp(1.5rem, 8vw, 2.5rem);
            line-height: 1.3;
          }

          .btn-cta-desktop {
            display: none;
          }

          .btn-cta-mobile {
            display: block;
            width: 100%;
            margin-top: 1.5rem;
          }

          .btn-cta-lowticket {
            width: 100%;
            padding: 1rem 1.5rem;
            font-size: 1rem;
          }
        }

        @media(max-width: 480px) {
          .hero-section-lowticket {
            padding: 1.5rem 0;
          }

          .hero-bg-glow {
            width: 300px;
            height: 300px;
          }

          .logo-container {
            margin-bottom: 1rem;
          }

          .hero-headline {
            margin-bottom: 0.75rem;
          }

          .hero-subtitle {
            margin-bottom: 1.5rem;
          }

          .btn-cta-lowticket {
            padding: 0.9rem 1.25rem;
            font-size: 0.95rem;
          }
        }
      `}</style>
    </section>
  );
};

export default Hero;
