import { Check, X } from 'lucide-react';

const Transformation = () => {
  return (
    <section className="transformation">
      <div className="container">

        {/* TRANSFORMATION COMPARISON */}
        <div className="transformation-block glass">
          <h2 className="trans-title">EXEMPLOS RÁPIDOS (PRA FICAR ÓBVIO)</h2>

          <div className="comparison-row">
            <div className="col gain">
              <h3 className="gain-title">Ebook de macros → App calculadora</h3>
              <p style={{color: '#00ff66', fontSize: '1.2rem', fontWeight: 'bold'}}>R$19,90/mês × 70 usuários = R$1.393/mês</p>
            </div>

            <div className="col gain">
              <h3 className="gain-title">Curso de produtividade → App Pomodoro</h3>
              <p style={{color: '#00ff66', fontSize: '1.2rem', fontWeight: 'bold'}}>R$9,90/mês × 120 usuários = R$1.188/mês</p>
            </div>
          </div>

          <div className="comparison-row" style={{marginTop: '2rem'}}>
            <div className="col gain" style={{gridColumn: '1 / -1'}}>
              <h3 className="gain-title">Planilha financeira → App dashboard</h3>
              <p style={{color: '#00ff66', fontSize: '1.2rem', fontWeight: 'bold'}}>R$14,90/mês × 90 usuários = R$1.341/mês</p>
            </div>
          </div>

          <p style={{marginTop: '2rem', fontSize: '1.2rem', color: '#fff', textAlign: 'center'}}>
            📌 <strong>Mesmo conhecimento. Outro formato. Recorrência real.</strong>
          </p>
        </div>

      </div>

      <style>{`
        .header-center { text-align: center; margin-bottom: 2rem; }
        .benefits-list {
          display: grid;
          grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
          gap: 1rem;
          margin-bottom: 4rem;
        }
        .benefit-item {
          background: #111;
          padding: 1.5rem;
          border-radius: var(--radius);
          border: 1px solid #222;
        }
        .benefit-item p { color: #ddd; margin-top: 0.5rem; font-size: 0.95rem; }

        .transformation-block {
          padding: 3rem 2rem;
          border-radius: var(--radius);
          text-align: center;
          max-width: 800px;
          margin: 0 auto 3rem;
        }
        .trans-title { margin-bottom: 0.5rem; }
        .trans-sub { color: var(--text-muted); margin-bottom: 2rem; }
        
        .comparison-row {
          display: grid;
          grid-template-columns: 1fr 1fr;
          gap: 2rem;
          text-align: left;
        }
        @media (max-width: 600px) {
          .comparison-row { 
            grid-template-columns: 1fr; 
            gap: 1.5rem;
          }
        }
        
        @media (max-width: 480px) {
          .trans-title {
            font-size: 1.3rem;
          }
          
          .comparison-row {
            gap: 1rem;
          }
          
          .col h3 {
            font-size: 1rem;
          }
          
          .col li {
            font-size: 0.9rem;
          }
        }
        .col h3 { font-size: 1.2rem; margin-bottom: 1rem; text-transform: uppercase; letter-spacing: 1px; }
        .pain h3 { color: #ff5252; }
        .gain h3 { color: #00e676; }
        
        .col ul { list-style: none; }
        .col li { 
          display: flex; 
          align-items: flex-start; 
          gap: 0.5rem; 
          margin-bottom: 0.8rem; 
          color: #ccc; 
          font-size: 0.95rem;
        }

        .mid-cta {
          text-align: center;
          display: flex;
          flex-direction: column;
          align-items: center;
          gap: 0.8rem;
        }
        .price-mini { font-size: 1.2rem; color: #fff; }
        .small { font-size: 0.8rem; color: #888; }
      `}</style>
    </section>
  );
};

export default Transformation;
