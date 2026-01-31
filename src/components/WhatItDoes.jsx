import { Zap, Clock, PenTool, AlertTriangle, MessageSquare, ShieldAlert } from 'lucide-react';

const WhatItDoes = () => {
    const items = [
        { icon: <PenTool />, text: "Criação de ofertas do zero" },
        { icon: <Zap />, text: "Reformulação de propostas que não estão convertendo" },
        { icon: <Clock />, text: "Geração de bônus estratégicos que aumentam o valor percebido" },
        { icon: <AlertTriangle />, text: "Sugestões de escassez e urgência que funcionam" },
        { icon: <MessageSquare />, text: "Inserção de storytelling, drama e bugs mentais" },
        { icon: <ShieldAlert />, text: "E tudo isso, sem clichê e sem enrolação." }
    ];

    return (
        <section className="what-it-does">
            <div className="container">
                <div className="section-header">
                    <span className="badge">O QUE ELE FAZ</span>
                    <h2>Este GPT não é um robô genérico.</h2>
                    <p className="subtitle">Preview do Ofertas Persuasivas™ | GPT Premium no ChatGPT</p>
                </div>

                <div className="features-grid">
                    {items.map((item, index) => (
                        <div key={index} className="feature-item glass">
                            <div className="icon-wrap">{item.icon}</div>
                            <p>{item.text}</p>
                        </div>
                    ))}
                </div>
            </div>

            <style>{`
        .section-header {
          text-align: center;
          margin-bottom: 3rem;
        }
        .badge {
          background: rgba(139, 92, 246, 0.1);
          color: var(--primary);
          padding: 0.25rem 0.75rem;
          border-radius: 4px;
          font-weight: 700;
          font-size: 0.75rem;
          letter-spacing: 1px;
          margin-bottom: 1rem;
          display: inline-block;
        }
        .section-header h2 {
          font-size: 1.8rem;
          margin-bottom: 0.5rem;
        }
        .subtitle { color: var(--text-muted); }

        .features-grid {
          display: grid;
          grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
          gap: 1rem;
        }
        .feature-item {
          padding: 1.5rem;
          border-radius: var(--radius);
          display: flex;
          align-items: center;
          gap: 1rem;
          transition: border-color 0.3s;
        }
        .feature-item:hover {
          border-color: var(--primary);
        }
        .icon-wrap {
          color: var(--primary);
          min-width: 24px;
        }
        .feature-item p {
          font-weight: 500;
          color: #eee;
        }
      `}</style>
        </section>
    );
};

export default WhatItDoes;
