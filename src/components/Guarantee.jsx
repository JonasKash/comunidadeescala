import { ShieldCheck } from 'lucide-react';
import { useModal } from '../context/ModalContext';

const Guarantee = () => {
  const { openModal } = useModal();

  const handleCTAClick = (e) => {
    e.preventDefault();
    openModal();
  };

  return (
    <section className="guarantee">
      <div className="container">
        <div className="guarantee-card glass">
          <ShieldCheck size={48} color="#fff" style={{ margin: '0 auto 1.5rem' }} />
          <h3>🔐 GARANTIA LÓGICA</h3>
          <p>
            O maior risco hoje é continuar oferecendo algo que não está vendendo.
            Este agente existe para tirar você da indecisão e te colocar no campo da ação com segurança.
          </p>
          <p className="highlight">A oportunidade de criar ofertas persuasivas sob demanda está na sua mão.</p>
        </div>

        <div className="final-stack">
          <h2>Ative agora seu Ofertas Persuasivas™ | GPT Premium</h2>
          <p className="sub">e comece a criar ofertas impossíveis de ignorar!</p>

          <div className="price-big">
            <span className="from">R$ 99,90</span>
            <span className="to">R$ 29,90</span>
          </div>

          <button className="btn-cta large" onClick={handleCTAClick}>
            FAZER O PIX E ACESSAR AGORA!
          </button>
        </div>

        <footer className="footer">
          <p>© 2025 Ofertas Persuasivas™ | GPT Premium. Todos os direitos reservados.</p>
        </footer>
      </div>

      <style>{`
        .guarantee {
          padding-bottom: 2rem;
        }
        .guarantee-card {
          text-align: center;
          max-width: 600px;
          margin: 0 auto 5rem;
          padding: 2.5rem;
          border-radius: var(--radius);
        }
        .guarantee-card h3 { margin-bottom: 1rem; }
        .guarantee-card p { color: var(--text-muted); margin-bottom: 1rem; }
        .guarantee-card .highlight { color: #fff; font-weight: 500; }

        .final-stack {
          text-align: center;
          margin-bottom: 4rem;
        }
        .final-stack h2 { font-size: 1.8rem; margin-bottom: 0.5rem; }
        .sub { color: var(--text-muted); margin-bottom: 1.5rem; }

        .price-big { margin-bottom: 1.5rem; }
        .from { text-decoration: line-through; color: #666; font-size: 1.2rem; margin-right: 1rem; }
        .to { color: var(--success); font-size: 2.5rem; font-weight: 800; }
        
        .btn-cta.large { padding: 1.5rem 3rem; font-size: 1.1rem; max-width: 400px; }

        .footer {
          text-align: center;
          border-top: 1px solid #111;
          padding-top: 2rem;
          color: #444;
          font-size: 0.8rem;
        }
      `}</style>
    </section>
  );
};

export default Guarantee;
