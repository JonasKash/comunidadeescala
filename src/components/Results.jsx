import { motion, useInView } from 'framer-motion';
import { useRef } from 'react';

const Results = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, amount: 0.2 });

  return (
    <section className="results-section" ref={ref}>
      <motion.div
        className="results-content"
        initial={{ opacity: 0, y: 30 }}
        animate={isInView ? { opacity: 1, y: 0 } : {}}
        transition={{ duration: 0.6 }}
      >
        <h2 className="results-title">Veja quem já está dentro e aplicando</h2>
        <p className="results-subtitle">Mais de 500 membros ativos na Comunidade da Escala</p>
      </motion.div>

      <style>{`
        .results-section {
          padding: 5rem 0;
          background: #000000;
          text-align: center;
        }

        .results-content {
          max-width: 800px;
          margin: 0 auto;
        }

        .results-title {
          font-size: clamp(1.8rem, 4vw, 2.5rem);
          font-weight: 800;
          color: #ffffff;
          line-height: 1.2;
          margin-bottom: 1rem;
        }

        .results-subtitle {
          font-size: clamp(1rem, 2vw, 1.25rem);
          color: rgba(255, 255, 255, 0.8);
          line-height: 1.6;
          margin: 0;
        }

        @media (max-width: 768px) {
          .results-section {
            padding: 3rem 0;
          }

          .results-title {
            font-size: clamp(1.5rem, 6vw, 2rem);
          }
        }

        @media (max-width: 480px) {
          .results-section {
            padding: 2rem 0;
          }
        }
      `}</style>
    </section>
  );
};

export default Results;
