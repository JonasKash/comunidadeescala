import { TrendingDown, ArrowRight } from 'lucide-react';

const SocialProof = () => {
  return (
    <section className="social-proof">
      <div className="container">
        <div className="header-center">
          <span className="badge">PROVA SOCIAL</span>
          <h2>Resultado Real</h2>
          <p className="subtitle">Depoimento mostrando resultados: CAC reduziu de R$89,90 para R$37,50</p>
        </div>

        <div className="case-study-glass glass">
          <div className="case-side old">
            <h3>📄 Página Antiga</h3>
            <div className="stat"><span> Investimento:</span> <strong>R$ 1.168,75</strong></div>
            <div className="stat"><span> Vendas:</span> <strong>13</strong></div>
            <div className="stat highlight-bad"><span> CAC:</span> <strong>R$ 89,90</strong></div>
          </div>

          <div className="arrow-divider">
            <ArrowRight size={24} color="#666" />
          </div>

          <div className="case-side new">
            <h3>✨ Página Nova</h3>
            <div className="stat"><span> Investimento:</span> <strong>R$ 1.275,15</strong></div>
            <div className="stat"><span> Vendas:</span> <strong>34</strong></div>
            <div className="stat highlight-good">
              <span> CAC:</span>
              <div className="cac-good">
                <strong>R$ 37,50</strong>
                <small><TrendingDown size={12} /> 58% OFF</small>
              </div>
            </div>
          </div>
        </div>

        <div className="result-caption">
          <p><strong>De R$89,90 para R$37,50 por venda. Só trocando a copy.</strong></p>
          <p className="quote">"Um único ajuste de oferta transformou uma página estagnada em uma máquina de vendas."</p>
        </div>

      </div>

      <style>{`
        .header-center { text-align: center; margin-bottom: 2rem; }
        .badge {
           background: rgba(139, 92, 246, 0.1);
           color: var(--primary);
           padding: 0.25rem 0.75rem;
           border-radius: 4px;
           font-size: 0.75rem; 
           font-weight: 700;
           display: inline-block;
           margin-bottom: 0.5rem;
        }
        .subtitle { color: var(--text-muted); }

        .case-study-glass {
          display: flex;
          align-items: stretch;
          justify-content: center;
          border-radius: var(--radius);
          max-width: 700px;
          margin: 0 auto 2rem;
          overflow: hidden;
        }
        
        .case-side {
          flex: 1;
          padding: 2rem;
        }
        .old { background: rgba(255,255,255,0.02); }
        .new { background: rgba(0, 230, 118, 0.05); }

        .case-side h3 { font-size: 1.1rem; margin-bottom: 1.5rem; opacity: 0.9; }
        
        .stat {
          display: flex;
          justify-content: space-between;
          margin-bottom: 0.8rem;
          font-size: 0.9rem;
          color: #ccc;
          border-bottom: 1px solid rgba(255,255,255,0.05);
          padding-bottom: 0.5rem;
        }
        .stat strong { color: #fff; }

        .highlight-bad strong { color: #ff5252; }
        .highlight-good strong { color: var(--success); }
        
        .cac-good { text-align: right; }
        .cac-good small { 
          display: flex; 
          align-items: center; 
          justify-content: flex-end; 
          gap: 2px;
          color: var(--success); 
          font-size: 0.75rem;
        }

        .arrow-divider {
          display: flex;
          align-items: center;
          justify-content: center;
          background: rgba(0,0,0,0.5);
          width: 40px;
        }

        .result-caption {
          text-align: center;
          max-width: 600px;
          margin: 0 auto;
        }
        .result-caption strong { color: var(--success); }
        .quote {
          font-style: italic;
          color: var(--text-muted);
          margin-top: 1rem;
        }
        
        @media (max-width: 600px) {
          .case-study-glass { flex-direction: column; }
          .arrow-divider { width: 100%; height: 40px; transform: rotate(90deg); }
        }
      `}</style>
    </section>
  );
};

export default SocialProof;
