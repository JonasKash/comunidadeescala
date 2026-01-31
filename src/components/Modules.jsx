import { Rocket, Zap, DollarSign, Clock } from 'lucide-react';

const Modules = () => {
  const steps = [
    {
      icon: <Rocket size={24} color="#00f3ff" />,
      title: "1️⃣ CRIAR SEU AVATAR COM IA",
      desc: "0 teoria, 100% prática. Você aprende subindo no ar seu apllicativo lucrativo"
    },
    {
      icon: <Zap size={24} color="#00f3ff" />,
      title: "2️⃣ COLOCAR ESSE APP NO AR SEM PROGRAMAR",
      desc: "Um método simples para colocar www.seuapp.com no ar em menos de 3 minutos"
    },
    {
      icon: <DollarSign size={24} color="#00f3ff" />,
      title: "3️⃣ ATIVAR PAGAMENTO RECORRENTE",
      desc: "Configure pagamentos mensais automáticos e comece a receber todo mês"
    },
    {
      icon: <Clock size={24} color="#00f3ff" />,
      title: "4️⃣ TER TUDO FUNCIONANDO EM ATÉ 47 MINUTOS",
      desc: "Do zero ao app no ar com pagamento ativado em menos de uma hora"
    }
  ];

  return (
    <section className="modules-section">
      <div className="container">
        <h2 className="title-center">App → Deploy → Money</h2>

        <div className="timeline-container">
          {steps.map((step, index) => (
            <div key={index} className="timeline-item">
              {/* Dot on the line */}
              <div className="timeline-marker">
                <div className="dot-inner"></div>
              </div>

              {/* Card */}
              <div className="timeline-card neon-card">
                <div className="card-icon">
                  {step.icon}
                </div>
                <div className="card-content">
                  <h3>{step.title}</h3>
                  <p>{step.desc}</p>
                </div>
              </div>
            </div>
          ))}
        </div>

        <div className="offer-text">
          <p>Crie uma oferta irresistível para seu aplicativo ou aprenda a encontrar ofertas validadas.</p>
        </div>

      </div>

      <style>{`
        .title-center {
          text-align: center;
          font-size: 2rem;
          margin-bottom: 4rem;
          color: white;
        }
        
        @media(max-width: 480px) {
          .title-center {
            font-size: 1.5rem;
            margin-bottom: 2.5rem;
          }
        }
        
        .timeline-container {
          position: relative;
          max-width: 800px;
          margin: 0 auto;
          display: flex;
          flex-direction: column;
          gap: 3rem;
        }
        
        /* Vertical Line */
        .timeline-container::before {
          content: '';
          position: absolute;
          top: 0;
          bottom: 0;
          left: 19px; /* Align with center of 40px marker */
          width: 2px;
          background: rgba(255, 255, 255, 0.1);
        }

        .timeline-item {
          display: flex;
          align-items: flex-start;
          gap: 2rem;
          position: relative;
          z-index: 1;
        }

        .timeline-marker {
          width: 40px;
          height: 40px;
          background: #000;
          border: 2px solid #333;
          border-radius: 50%;
          display: flex;
          align-items: center;
          justify-content: center;
          flex-shrink: 0;
          z-index: 2;
        }
        .dot-inner {
          width: 12px;
          height: 12px;
          background: var(--accent);
          border-radius: 50%;
          box-shadow: 0 0 10px var(--accent);
        }

        .timeline-card {
          flex: 1;
          display: flex;
          align-items: flex-start;
          gap: 1.5rem;
          padding: 2rem;
          border: 1px solid rgba(0, 243, 255, 0.2);
          background: linear-gradient(90deg, rgba(0,0,0,0.8), rgba(0,20,30,0.5));
          transition: transform 0.3s;
        }
        .timeline-card:hover {
          transform: translateX(10px);
          border-color: var(--accent);
          box-shadow: 0 0 20px rgba(0, 243, 255, 0.1);
        }

        .card-icon {
          background: rgba(0, 243, 255, 0.1);
          padding: 10px;
          border-radius: 8px;
        }

        .card-content h3 {
          font-size: 1.2rem;
          color: #fff;
          margin-bottom: 0.5rem;
          font-weight: 700;
        }
        .card-content p {
          color: #94a3b8;
          font-size: 1rem;
          line-height: 1.5;
        }

        /* Mobile Adjustments */
        @media(max-width: 768px) {
          .timeline-container {
            gap: 2rem;
          }
          
          .timeline-container::before { display: none; }
          
          .timeline-item {
            flex-direction: column;
            gap: 1rem;
          }
          
          .timeline-marker { display: none; }
          
          .timeline-card {
            width: 100%;
            margin-left: 0;
            padding: 1.5rem;
          }
          .timeline-card:hover { transform: none; }
          
          .card-content h3 {
            font-size: 1.1rem;
          }
          
          .card-content p {
            font-size: 0.95rem;
          }
        }
        
        @media(max-width: 480px) {
          .timeline-container {
            gap: 1.5rem;
          }
          
          .timeline-card {
            padding: 1.25rem 1rem;
          }
          
          .card-content h3 {
            font-size: 1rem;
            margin-bottom: 0.5rem;
          }
          
          .card-content p {
            font-size: 0.9rem;
            line-height: 1.4;
          }
          
          .card-icon {
            padding: 8px;
          }
        }

        .offer-text {
          text-align: center;
          margin-top: 4rem;
          padding: 2rem;
          background: rgba(0, 243, 255, 0.05);
          border: 1px solid rgba(0, 243, 255, 0.2);
          border-radius: var(--radius);
          max-width: 800px;
          margin-left: auto;
          margin-right: auto;
        }
        .offer-text p {
          font-size: 1.3rem;
          color: #fff;
          line-height: 1.6;
          margin: 0;
        }
        @media(max-width: 600px) {
          .offer-text {
            padding: 1.5rem;
            margin-top: 3rem;
          }
          .offer-text p {
            font-size: 1.1rem;
          }
        }
      `}</style>
    </section>
  );
};

export default Modules;
