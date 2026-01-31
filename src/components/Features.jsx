import { PenTool, RefreshCw, Gift, Timer, MessageSquare, Zap } from 'lucide-react';

const Features = () => {
    const features = [
        {
            icon: <PenTool size={24} color="#a78bfa" />,
            title: "Criação de ofertas do zero",
            desc: "Transforme ideias vagas em propostas completas e irresistíveis em segundos."
        },
        {
            icon: <RefreshCw size={24} color="#a78bfa" />,
            title: "Reformulação de propostas",
            desc: "Pegue ofertas que não convertem e reescreva com persuasão máxima."
        },
        {
            icon: <Gift size={24} color="#a78bfa" />,
            title: "Geração de bônus estratégicos",
            desc: "Crie bônus que aumentam o valor percebido e eliminam objeções."
        },
        {
            icon: <Timer size={24} color="#a78bfa" />,
            title: "Sugestões de escassez e urgência",
            desc: "Gatilhos mentais que funcionam de verdade para fechar vendas."
        },
        {
            icon: <MessageSquare size={24} color="#a78bfa" />,
            title: "Storytelling e drama",
            desc: "Insira narrativas envolventes que conectam emocionalmente com o lead."
        },
        {
            icon: <Zap size={24} color="#a78bfa" />,
            title: "Sem clichê e sem enrolação",
            desc: "Textos diretos, focados em conversão, longe do 'robótico' comum."
        }
    ];

    return (
        <section className="section-padding features-section">
            <div className="container">
                <div className="section-header">
                    <span className="tag">O que ele faz</span>
                    <h2 className="section-title">
                        Este GPT <span className="text-highlight">não é um robô genérico</span>.
                    </h2>
                    <p className="section-subtitle">
                        Preview do Ofertas Persuasivas™ | GPT Premium no ChatGPT
                    </p>
                </div>

                <div className="features-grid">
                    {features.map((feature, index) => (
                        <div key={index} className="feature-card glass-panel">
                            <div className="icon-box">
                                {feature.icon}
                            </div>
                            <h3>{feature.title}</h3>
                            <p>{feature.desc}</p>
                        </div>
                    ))}
                </div>
            </div>

            <style>{`
        .features-section {
          background: #050505;
        }
        .section-header {
          text-align: center;
          margin-bottom: 3rem;
        }
        .tag {
          color: var(--primary-color);
          font-weight: 700;
          text-transform: uppercase;
          font-size: 0.8rem;
          letter-spacing: 1px;
          margin-bottom: 0.5rem;
          display: block;
        }
        .section-title {
          font-size: 2rem;
          margin-bottom: 1rem;
        }
        .text-highlight {
          color: #fff;
          text-decoration: underline;
          text-decoration-color: var(--primary-color);
          text-underline-offset: 4px;
        }
        .section-subtitle {
          color: var(--text-muted);
        }
        .features-grid {
          display: grid;
          grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
          gap: 1.5rem;
        }
        .feature-card {
          padding: 2rem;
          transition: transform 0.3s ease;
        }
        .feature-card:hover {
          transform: translateY(-5px);
          border-color: var(--primary-color);
        }
        .icon-box {
          width: 50px;
          height: 50px;
          background: rgba(139, 92, 246, 0.1);
          border-radius: 12px;
          display: flex;
          align-items: center;
          justify-content: center;
          margin-bottom: 1.2rem;
        }
        .feature-card h3 {
          font-size: 1.2rem;
          margin-bottom: 0.8rem;
          font-weight: 600;
        }
        .feature-card p {
          font-size: 0.95rem;
          color: var(--text-muted);
        }
      `}</style>
        </section>
    );
};

export default Features;
