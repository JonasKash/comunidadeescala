import { ArrowRight } from 'lucide-react';

const Product = () => {
  return (
    <section className="product-section">
      <div className="container text-center">
        <h2>COMUNIDADE DA ESCALA</h2>

        <div className="flow-diagram reveal">
          <div className="step-circle">APP</div>
          <ArrowRight className="arrow" />
          <div className="step-circle">DEPLOY</div>
          <ArrowRight className="arrow" />
          <div className="step-circle green">MONEY</div>
        </div>

        <h3>O FORMATO CERTO MUDA O JOGO</h3>

        <div className="app-highlight">
          <p className="app-title">📱 App web</p>
          <div className="app-benefits">
            <p>✅ Cliente paga todo mês</p>
            <p>✅ Valor agregado</p>
            <p>✅ Poucos concorrentes</p>
            <p>✅ Sistema plugin and play validado</p>
          </div>
        </div>

        <div className="result-banner">
          <p>📌 MESMA INFORMAÇÃO.<br /><strong>OUTRO FORMATO. RESULTADO 5–10X MAIOR.</strong></p>
        </div>
      </div>

      <style>{`
        .product-section h2 { 
          color: var(--accent); 
          letter-spacing: 2px;
          margin-bottom: 3rem;
        }
        
        .flow-diagram {
          display: flex;
          align-items: center;
          justify-content: center;
          gap: 1rem;
          margin-bottom: 0.5rem;
        }

        /* Initial State: Dimmed */
        .step-circle {
          width: 100px;
          height: 100px;
          border-radius: 50%;
          border: 2px solid #333;
          display: flex;
          align-items: center;
          justify-content: center;
          font-weight: 800;
          background: #111;
          color: #555;
          transition: all 0.5s ease;
          position: relative;
        }
        .arrow { color: #333; transition: all 0.5s ease; }

        /* Active State (Triggered by .reveal.active) */
        .flow-diagram.active .step-circle:nth-child(1) {
          border-color: #fff;
          color: #fff;
          box-shadow: 0 0 15px rgba(255,255,255,0.2);
          animation: pulseWhite 2s infinite;
        }

        .flow-diagram.active .arrow:nth-of-type(1) {
          color: var(--accent);
          filter: drop-shadow(0 0 5px var(--accent));
          transition-delay: 0.5s;
          animation: moveRight 1s infinite alternate;
        }

        .flow-diagram.active .step-circle:nth-child(3) {
           border-color: #fff;
           color: #fff;
           box-shadow: 0 0 15px rgba(255,255,255,0.2);
           transition-delay: 1s;
           animation: pulseWhite 2s infinite 1s;
        }

        .flow-diagram.active .arrow:nth-of-type(2) {
           color: var(--primary);
           filter: drop-shadow(0 0 5px var(--primary));
           transition-delay: 1.5s;
           animation: moveRight 1s infinite alternate 0.5s;
        }

        /* Final Step: Money (Green + Spin) */
        .flow-diagram.active .step-circle.green {
          border-color: var(--primary);
          color: var(--primary);
          box-shadow: var(--glow-green);
          transition-delay: 2s;
        }
        
        .flow-diagram.active .step-circle.green::before {
          content: '';
          position: absolute;
          inset: -5px;
          border-radius: 50%;
          border: 2px solid transparent;
          border-top-color: var(--primary);
          border-right-color: var(--primary);
          animation: spin 1.5s linear infinite;
        }

        @keyframes spin {
          0% { transform: rotate(0deg); }
          100% { transform: rotate(360deg); }
        }
        @keyframes pulseWhite {
           0% { box-shadow: 0 0 0 rgba(255,255,255,0); }
           50% { box-shadow: 0 0 20px rgba(255,255,255,0.3); }
           100% { box-shadow: 0 0 0 rgba(255,255,255,0); }
        }
        @keyframes moveRight {
           from { transform: translateX(0); opacity: 0.5; }
           to { transform: translateX(5px); opacity: 1; }
        }

        @media(max-width: 600px) {
          .step-circle { width: 70px; height: 70px; font-size: 0.8rem; }
        }
        
        @media(max-width: 480px) {
          .flow-diagram {
            gap: 0.5rem;
            margin-bottom: 1rem;
          }
          
          .step-circle { 
            width: 60px; 
            height: 60px; 
            font-size: 0.7rem; 
          }
          
          .arrow {
            width: 20px;
            height: 20px;
          }
        }

        .product-section h3 {
          font-size: 2.5rem;
          margin-bottom: 1.5rem;
        }
        
        @media(max-width: 480px) {
          .product-section h3 {
            font-size: 1.5rem;
            margin-bottom: 1rem;
          }
        }
        
        .app-highlight {
          max-width: 800px;
          margin: 0 auto 3rem;
          text-align: center;
          padding: 2rem;
          background: linear-gradient(135deg, rgba(0, 243, 255, 0.1), rgba(0, 243, 255, 0.05));
          border: 1px solid rgba(0, 243, 255, 0.2);
          border-radius: 12px;
        }
        
        @media(max-width: 480px) {
          .app-highlight {
            padding: 1.5rem 1rem;
            margin-bottom: 2rem;
          }
        }
        
        .app-title {
          font-size: 2rem;
          font-weight: 800;
          color: var(--accent);
          margin-bottom: 1rem;
          text-align: center;
          letter-spacing: 1px;
        }
        
        @media(max-width: 480px) {
          .app-title {
            font-size: 1.4rem;
          }
        }
        
        .app-benefits {
          font-size: 1.3rem;
          color: #fff;
          text-align: center;
          line-height: 1.8;
          font-weight: 500;
        }
        .app-benefits p {
          margin: 0.5rem 0;
        }
        
        @media(max-width: 480px) {
          .app-benefits {
            font-size: 1rem;
            line-height: 1.6;
          }
          
          .app-benefits p {
            margin: 0.4rem 0;
          }
        }
        
        .desc {
          max-width: 600px;
          margin: 0 auto 3rem;
          font-size: 1.2rem;
          color: #a1a1aa;
        }
        
        .result-banner {
          background: linear-gradient(90deg, transparent, rgba(0, 243, 255, 0.1), transparent);
          padding: 2rem;
          border-top: 1px solid rgba(0, 243, 255, 0.2);
          border-bottom: 1px solid rgba(0, 243, 255, 0.2);
        }
        .result-banner p {
          font-size: 1.4rem;
          color: #fff;
        }
      `}</style>
    </section>
  );
};

export default Product;
