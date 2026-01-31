import { Smartphone, Star, DollarSign } from 'lucide-react';

const HowTo = () => {
    const steps = [
        {
            icon: <Smartphone size={32} color="white" />,
            title: '1. Baixe o App',
            desc: 'Tenha acesso ao aplicativo exclusivo diretamente no seu celular.'
        },
        {
            icon: <Star size={32} color="white" />,
            title: '2. Avalie Marcas',
            desc: 'Dê sua opinião sobre grandes marcas como Google, Facebook e mais.'
        },
        {
            icon: <DollarSign size={32} color="white" />,
            title: '3. Receba PIX',
            desc: 'Cada avaliação gera um saldo que pode ser sacado via PIX na hora.'
        }
    ];

    return (
        <section className="section-padding how-to-section">
            <div className="container">
                <h2 className="section-title">
                    Como <span className="text-gradient">Funciona?</span>
                </h2>
                <div className="steps-container">
                    {steps.map((step, index) => (
                        <div key={index} className="step-card">
                            <div className="icon-wrapper">
                                {step.icon}
                            </div>
                            <h3 className="step-title">{step.title}</h3>
                            <p className="step-desc">{step.desc}</p>
                        </div>
                    ))}
                </div>
            </div>

            <style>{`
        .how-to-section {
          background: linear-gradient(180deg, #050505 0%, #111 100%);
        }
        .steps-container {
          display: flex;
          flex-wrap: wrap;
          justify-content: center;
          gap: 2rem;
          margin-top: 3rem;
        }
        .step-card {
          flex: 1;
          min-width: 250px;
          background: var(--card-bg);
          padding: 2rem;
          border-radius: var(--border-radius);
          text-align: center;
          border: 1px solid rgba(255, 255, 255, 0.05);
          position: relative;
        }
        .step-card:hover {
           border-color: var(--primary-color);
        }
        .icon-wrapper {
          width: 70px;
          height: 70px;
          background: var(--primary-color);
          border-radius: 50%;
          display: flex;
          align-items: center;
          justify-content: center;
          margin: 0 auto 1.5rem;
          box-shadow: 0 0 20px rgba(255, 0, 127, 0.3);
        }
        .step-title {
          margin-bottom: 0.5rem;
          font-size: 1.25rem;
        }
        .step-desc {
          font-size: 0.95rem;
          color: var(--text-muted);
        }
      `}</style>
        </section>
    );
};

export default HowTo;
