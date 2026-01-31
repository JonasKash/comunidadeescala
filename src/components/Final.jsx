import { ShieldCheck, AlertTriangle } from 'lucide-react';
import { useModal } from '../context/ModalContext';

const Final = () => {
  const { openModal } = useModal();

  const handleCTAClick = (e) => {
    e.preventDefault();
    openModal();
  };

  return (
    <section className="final-section">
      <div className="container">

        {/* Guarantee */}
        <div className="guarantee-box text-center">
          <div className="badge-wrapper">
            <ShieldCheck size={64} color="#00ff66" />
          </div>
          <h2>GARANTIA SEM CONVERSA FIADA</h2>

          <ul className="guarantee-list">
            <li>✔️ 30 dias para testar tudo</li>
            <li>✔️ Se travar, eu faço o deploy com você</li>
            <li>✔️ Mesmo pedindo reembolso, você mantém os bônus</li>
          </ul>

          <p className="risk-text">👉 O risco é zero.</p>
        </div>

        {/* Scarcity */}
        <div className="scarcity-box neon-card">
          <div className="scarcity-header">
            <AlertTriangle color="#ff4444" size={24} />
            <h3>APENAS 100 VAGAS NESSE PREÇO</h3>
          </div>
          <p>Quando acabar: preço sobe para <strong>R$497</strong> • comunidade fecha temporariamente</p>
        </div>

        {/* Final Decision */}
        <div className="decision-box text-center">
          <h2>A DECISÃO É SIMPLES</h2>
          
          <div style={{textAlign: 'left', maxWidth: '600px', margin: '2rem auto', color: '#ccc', fontSize: '1.1rem'}}>
            <p style={{marginBottom: '1.5rem'}}>Você pode continuar:</p>
            <ul style={{listStyle: 'none', marginBottom: '2rem'}}>
              <li>❌ vendendo uma vez</li>
              <li>❌ correndo atrás de cliente novo</li>
              <li>❌ brigando por atenção</li>
            </ul>
            <p style={{marginBottom: '1.5rem', color: '#fff'}}>Ou pode:</p>
            <ul style={{listStyle: 'none', marginBottom: '2rem'}}>
              <li>✅ transformar seu conhecimento em app</li>
              <li>✅ cobrar todo mês</li>
              <li>✅ construir renda recorrente</li>
              <li>✅ Criar um sistema que vai colocar no seu bolso todo mês <strong className="money-highlight">R$5.000,00 até R$10.000,00</strong></li>
            </ul>
          </div>

          <p style={{fontSize: '1.3rem', marginBottom: '1rem', color: '#fff'}}>47 minutos. R$ 47. Um novo modelo de negócio.</p>

          <button className="btn-cta large" onClick={handleCTAClick}>CRIAR MEU APP AGORA</button>


        </div>

      </div>

      <style>{`
        .guarantee-box {
          margin-bottom: 5rem;
        }
        .badge-wrapper {
          width: 100px;
          height: 100px;
          background: rgba(0, 255, 102, 0.1);
          border-radius: 50%;
          display: flex;
          align-items: center;
          justify-content: center;
          margin: 0 auto 2rem;
          border: 1px solid var(--primary);
          box-shadow: 0 0 30px rgba(0,255,102,0.2);
        }
        .guarantee-box h2 {
          font-size: 1.5rem;
          color: #fff;
          margin-bottom: 2rem;
        }
        .guarantee-list {
          list-style: none;
          display: inline-block;
          text-align: left;
          color: #d4d4d8;
          font-size: 1.1rem;
        }
        .guarantee-list li { margin-bottom: 0.5rem; }
        .risk-text { margin-top: 1.5rem; font-weight: 700; color: #fff; }

        .scarcity-box {
          border-color: #ff4444;
          box-shadow: 0 0 15px rgba(255, 68, 68, 0.1);
          text-align: center;
          padding: 2rem;
          max-width: 600px;
          margin: 0 auto 5rem;
        }
        .scarcity-header {
           display: flex;
           align-items: center;
           justify-content: center;
           gap: 1rem;
           margin-bottom: 1rem;
           color: #ff4444;
        }
        
        .decision-box h2 { font-size: 2rem; margin-bottom: 2rem; }
        .btn-cta.large { width: 100%; max-width: 500px; padding: 1.5rem; font-size: 1.3rem; }
        .sign { margin-top: 3rem; color: #666; }
        
        .money-highlight {
          color: var(--primary);
          font-weight: 800;
          font-size: 1.1em;
        }
        
        @media(max-width: 480px) {
          .guarantee-box {
            margin-bottom: 3rem;
          }
          
          .badge-wrapper {
            width: 80px;
            height: 80px;
            margin-bottom: 1.5rem;
          }
          
          .guarantee-box h2 {
            font-size: 1.3rem;
            margin-bottom: 1.5rem;
          }
          
          .guarantee-list {
            font-size: 1rem;
            padding: 1.5rem;
          }
          
          .scarcity-box {
            padding: 1.5rem 1rem;
            margin-bottom: 3rem;
          }
          
          .decision-box h2 {
            font-size: 1.5rem;
            margin-bottom: 1.5rem;
          }
          
          .btn-cta.large {
            padding: 1.25rem;
            font-size: 1.1rem;
          }
        }
      `}</style>
    </section>
  );
};

export default Final;
