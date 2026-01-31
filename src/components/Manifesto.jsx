const Manifesto = () => {
  return (
    <section className="manifesto-section">
      <div className="container">
        <h2 className="section-title text-center text-blue">VAMOS DIRETO AO PONTO</h2>

        <div className="text-block">
          <h3>SE VOCÊ VENDE:</h3>

          <div className="product-list">
            <p>ebook</p>
            <p>curso</p>
            <p>planilha</p>
            <p>checklist</p>
            <p>template</p>
          </div>

          <div className="highlight-box">
            <p><strong>Você já tem conhecimento valioso.</strong><br />O problema é que errou no modelo de negócio e isso está <strong className="sugando-text">sugando</strong> seu lucro</p>
          </div>

          <ul className="fail-list">
            <li className="first-item">📕 <strong>Modelo tradicional</strong></li>
            <li>❌ Cliente paga uma vez</li>
            <li>❌ Você precisa vender todo mês</li>
            <li>❌ Concorrência absurda</li>
            <li>❌ Valor percebido baixo ("é só um PDF")</li>
          </ul>

          <h4 className="punchline">💥 <strong className="resultado-destaque">RESULTADO</strong>: RODA DE HAMSTER ETERNA.</h4>
          
          <div className="gif-container">
            <img src="/tenor.gif" alt="Roda de hamster" className="hamster-gif" />
          </div>
        </div>
      </div>

      <style>{`
        .manifesto-section {
          background: #050505;
        }
        .section-title {
          font-size: 1rem;
          letter-spacing: 2px;
          margin-bottom: 3rem;
          opacity: 0.8;
        }
        .text-block {
          max-width: 700px;
          margin: 0 auto;
          text-align: center;
        }
        .text-block h3 {
          font-size: 1.8rem;
          margin: 2rem 0;
          font-weight: 800;
        }
        .text-block p {
          font-size: 1.2rem;
          color: #a1a1aa;
          margin-bottom: 1.5rem;
        }
        .product-list {
          margin-bottom: 1.5rem;
        }
        .product-list p {
          margin: 0.5rem 0;
          font-size: 1.2rem;
          color: #a1a1aa;
        }
        
        .highlight-box {
          border: 1px solid #333;
          background: rgba(255,255,255,0.03);
          padding: 1.5rem;
          border-radius: var(--radius);
          margin: 1.5rem 0;
        }
        .highlight-box p { margin: 0; color: #fff; }
        .sugando-text {
          text-decoration: underline;
          font-weight: 800;
        }
        .resultado-destaque {
          text-decoration: underline;
          font-weight: 800;
          color: #ff4444;
          text-shadow: 0 0 10px rgba(255, 68, 68, 0.5);
        }
        
        .fail-list {
          list-style: none;
          background: rgba(255, 50, 50, 0.05);
          display: inline-block;
          padding: 2rem;
          border-radius: var(--radius);
          border: 1px solid rgba(255, 50, 50, 0.2);
          margin: 2rem 0;
        }
        .fail-list li {
          font-size: 1.1rem;
          color: #ffcccc;
          margin-bottom: 0.5rem;
          text-align: left;
        }
        .fail-list li.first-item {
          font-size: calc(1.1rem + 2px);
        }
        
        .punchline {
          font-size: 1.5rem;
          color: #fff;
          margin-top: 2rem;
          border-top: 1px solid #333;
          padding-top: 2rem;
        }
        
        .gif-container {
          margin-top: 2rem;
          display: flex;
          justify-content: center;
          align-items: center;
        }
        
        .hamster-gif {
          max-width: 250px;
          width: 100%;
          height: auto;
          border-radius: var(--radius);
        }
        
        @media(max-width: 600px) {
          .hamster-gif {
            max-width: 200px;
          }
        }
        
        @media(max-width: 480px) {
          .text-block h3 {
            font-size: 1.4rem;
            margin: 1.5rem 0;
          }
          
          .text-block p {
            font-size: 1rem;
          }
          
          .product-list p {
            font-size: 1rem;
          }
          
          .highlight-box {
            padding: 1rem;
            margin: 1rem 0;
          }
          
          .fail-list {
            padding: 1.5rem 1rem;
            margin: 1.5rem 0;
          }
          
          .fail-list li {
            font-size: 0.95rem;
          }
          
          .punchline {
            font-size: 1.2rem;
            margin-top: 1.5rem;
            padding-top: 1.5rem;
          }
          
          .hamster-gif {
            max-width: 180px;
          }
        }
      `}</style>
    </section>
  );
};

export default Manifesto;
