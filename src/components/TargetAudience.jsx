import { TrendingUp, PenTool, Bot, Briefcase, Video, ShoppingCart } from 'lucide-react';

const TargetAudience = () => {
  const audiences = [
    {
      icon: <TrendingUp />,
      title: "Gestores de Tráfego",
      benefit: "Otimizar conversão das páginas dos clientes e reduzir CAC.",
      items: ["Páginas de alta conversão", "Headlines para anúncios"]
    },
    {
      icon: <PenTool />,
      title: "Copywriters",
      benefit: "Ganhar repertório e acelerar criação de ofertas.",
      items: ["Estruturas completas", "Listas de bônus estratégicos"]
    },
    {
      icon: <Bot />,
      title: "Especialistas em Automação",
      benefit: "Criar ofertas persuasivas que guiam o lead.",
      items: ["Sequências de WhatsApp", "Mini-funis com storytelling"]
    },
    {
      icon: <Briefcase />,
      title: "Empresários",
      benefit: "Construir ofertas sólidas sem depender de freelancer.",
      items: ["Proposta de valor", "Scripts para lançamentos"]
    },
    {
      icon: <Video />,
      title: "Criadores de Conteúdo",
      benefit: "Transformar ideia ou conteúdo em oferta vendável.",
      items: ["Pitch para Reels", "Roteiros para VSL"]
    },
    {
      icon: <ShoppingCart />,
      title: "Vendedores de PLR",
      benefit: "Posicionar produtos genéricos com mais valor.",
      items: ["Nome e posicionamento", "Ofertas relâmpago"]
    }
  ];

  return (
    <section className="audience">
      <div className="container">
        <div className="header-center">
          <span className="badge">QUEM PODE USAR</span>
          <h2>Você se identifica?</h2>
        </div>

        <div className="audience-grid">
          {audiences.map((item, index) => (
            <div key={index} className="audience-card glass">
              <div className="card-top">
                <div className="icon-box">{item.icon}</div>
                <h3>{item.title}</h3>
              </div>
              <p className="benefit-text">{item.benefit}</p>
              <div className="outputs">
                <small>Saídas:</small>
                <ul>
                  {item.items.map((it, i) => <li key={i}>• {it}</li>)}
                </ul>
              </div>
            </div>
          ))}
        </div>
      </div>

      <style>{`
        .audience-grid {
          display: grid;
          grid-template-columns: repeat(auto-fill, minmax(300px, 1fr));
          gap: 1.5rem;
        }
        .audience-card {
          padding: 1.5rem;
          border-radius: var(--radius);
          transition: transform 0.2s;
        }
        .audience-card:hover { transform: translateY(-5px); border-color: var(--primary); }
        
        .card-top { display: flex; align-items: center; gap: 1rem; margin-bottom: 1rem; }
        .card-top h3 { font-size: 1.1rem; }
        .icon-box { color: var(--primary); }
        
        .benefit-text { color: #ddd; font-size: 0.95rem; margin-bottom: 1rem; min-height: 44px; }
        
        .outputs small { color: var(--text-muted); text-transform: uppercase; font-size: 0.7rem; letter-spacing: 1px; }
        .outputs ul { list-style: none; margin-top: 0.5rem; }
        .outputs li { font-size: 0.85rem; color: #a78bfa; margin-bottom: 0.2rem; }
      `}</style>
    </section>
  );
};

export default TargetAudience;
