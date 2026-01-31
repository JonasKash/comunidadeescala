import { CheckCircle } from 'lucide-react';

const Rationality = () => {
  return (
    <section className="rationality-section">
      <div className="container">
        <div className="content-wrap">
          <h2>O QUE MUDOU NOS ÚLTIMOS 12 MESES</h2>

          <div className="quote-card neon-card">
            <h3>Antes:</h3>
            <div className="before-list">
              <p className="before-title">🎮 Criar app = <span className="challenge-badge">DESAFIO NIVEL HARD</span></p>
              <ul className="problem-list">
                <li>Projetos Caros</li>
                <li>Longos meses</li>
                <li>Testar no escuro</li>
              </ul>
            </div>
          </div>

          <div className="quote-card neon-card" style={{marginTop: '2rem'}}>
            <h3>Hoje:</h3>
            <div className="today-list">
              <ul className="benefit-list">
                <li>Já vende a solução validada</li>
                <li>Poder de Escala</li>
                <li>Teste antes do investimento</li>
                <li>Fácil de subir</li>
              </ul>
            </div>
          </div>

          <div className="highlight-box" style={{marginTop: '2rem', background: 'rgba(255, 50, 50, 0.1)', borderColor: 'rgba(255, 50, 50, 0.3)'}}>
            <h3 style={{color: '#ff4444', fontSize: '1.5rem', marginBottom: '1rem'}}>A ÚNICA PARTE QUE AINDA TRAVAVA TODO MUNDO</h3>
            <p style={{color: '#fff', fontSize: '1.2rem'}}>A IA cria o app… Mas ele fica preso no computador.<br />Sem link. Sem pagamento. Sem dinheiro.</p>
            <p style={{color: '#ff4444', fontSize: '1.1rem', marginTop: '1rem', fontWeight: 'bold'}}>É aqui que 90% desistem e voltam pro PDF de R$47.</p>
          </div>

          <h3 className="final-h3">A COMUNIDADE DA ESCALA RESOLVE EXATAMENTE ISSO</h3>
        </div>
      </div>

      <style>{`
        .content-wrap {
          max-width: 800px;
          margin: 0 auto;
          text-align: center;
        }
        .content-wrap h2 {
          font-size: 1rem;
          color: var(--text-muted);
          letter-spacing: 2px;
          margin-bottom: 2rem;
        }
        .quote-card {
          padding: 3rem;
          margin-bottom: 3rem;
        }
        @media(max-width: 768px) {
          .quote-card { padding: 1rem; }
          .quote-card h3 { font-size: 1.2rem; line-height: 1.3; }
          .quote-card p { font-size: 1rem; }
        }
        
        @media(max-width: 480px) {
          .quote-card { 
            padding: 1rem 0.75rem; 
          }
          
          .quote-card h3 { 
            font-size: 1.1rem; 
            margin: 1.5rem 0 0.5rem;
          }
          
          .before-title {
            font-size: 1rem;
          }
          
          .problem-list li, .benefit-list li {
            font-size: 0.95rem;
            padding: 0.6rem 0;
            padding-left: 1.5rem;
          }
          
          .final-h3 {
            font-size: 1.5rem;
          }
        }
        .quote-card h3 {
          font-size: 2.5rem;
          margin-bottom: 0.5rem;
          color: #fff;
        }
        .quote-card p {
          font-size: 1.5rem;
          color: var(--text-muted);
        }
        
        .before-list {
          text-align: left;
          margin-top: 1rem;
        }
        
        .before-title {
          font-size: 1.5rem;
          color: #fff;
          margin-bottom: 1.5rem;
          font-weight: 600;
          display: flex;
          align-items: center;
          gap: 0.5rem;
          flex-wrap: wrap;
        }
        .challenge-badge {
          background: linear-gradient(135deg, #ff4444, #cc0000);
          padding: 0.3rem 1rem;
          border-radius: 20px;
          font-size: 0.9rem;
          font-weight: 800;
          letter-spacing: 1px;
          box-shadow: 0 0 15px rgba(255, 68, 68, 0.4);
          text-transform: uppercase;
        }
        
        .problem-list {
          list-style: none;
          padding: 0;
          margin: 0;
        }
        
        .problem-list li {
          font-size: 1.3rem;
          color: var(--text-muted);
          padding: 0.8rem 0;
          padding-left: 2rem;
          position: relative;
          line-height: 1.6;
        }
        
        .problem-list li::before {
          content: "✗";
          position: absolute;
          left: 0;
          color: #ff4444;
          font-size: 1.5rem;
          font-weight: bold;
        }
        
        .today-list {
          text-align: left;
          margin-top: 1rem;
        }
        
        .benefit-list {
          list-style: none;
          padding: 0;
          margin: 0;
        }
        
        .benefit-list li {
          font-size: 1.3rem;
          color: var(--text-muted);
          padding: 0.8rem 0;
          padding-left: 2rem;
          position: relative;
          line-height: 1.6;
        }
        
        .benefit-list li::before {
          content: "✓";
          position: absolute;
          left: 0;
          color: var(--primary);
          font-size: 1.5rem;
          font-weight: bold;
        }
        
        @media(max-width: 768px) {
          .before-title { font-size: 1.2rem; }
          .problem-list li { font-size: 1.1rem; padding-left: 1.5rem; }
          .benefit-list li { font-size: 1.1rem; padding-left: 1.5rem; }
        }
        
        .lead {
          font-size: 1.4rem;
          margin-bottom: 2rem;
        }
        
        .check-grid {
          display: grid;
          grid-template-columns: repeat(auto-fit, minmax(280px, 1fr));
          gap: 1.5rem;
          margin: 3rem 0;
        }
        .check-item {
          background: rgba(255,255,255,0.03);
          padding: 1.5rem;
          border-radius: var(--radius);
          display: flex;
          align-items: center;
          gap: 1rem;
          border: 1px solid rgba(255,255,255,0.05);
          font-weight: 600;
          text-align: left;
        }
        
        .final-h3 {
          font-size: 2.5rem;
          color: var(--primary);
          text-shadow: 0 0 20px rgba(0,255,102,0.3);
        }
      `}</style>
    </section>
  );
};

export default Rationality;
