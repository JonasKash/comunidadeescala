import { Check, Gift, Database, Terminal, Globe, Users, BookOpen, Code, FileText, Layout, Users2, Rocket } from 'lucide-react';
import { GlareCard } from './GlareCard';
import { useModal } from '../context/ModalContext';

const OfferStack = () => {
  const { openModal } = useModal();

  const handleCTAClick = (e) => {
    e.preventDefault();
    openModal();
  };

  return (
    <section className="offer-stack">
      <div className="container">

        {/* Core Deliverables */}
        <div className="core-offer text-center">
          <h2 className="section-title text-blue">O QUE VOCÊ LEVA HOJE</h2>

          <div className="timeline-framework">
            <div className="timeline-item-framework">
              <div className="timeline-marker-framework">
                <div className="marker-dot"></div>
              </div>
              <div className="timeline-card-framework">
                <div className="card-icon-framework">
                  <BookOpen size={32} color="#ff1744" />
                </div>
                <div className="card-content-framework">
                  <span className="step-number">ETAPA 1</span>
                  <h3 className="card-title-framework">Metodologia completa de criação de avatares</h3>
                  <p className="card-desc-framework">Sistema completo passo a passo para transformar seu conhecimento em app lucrativo <strong className="time-highlight">em 47 minutos</strong>.</p>
                </div>
              </div>
            </div>

            <div className="timeline-item-framework">
              <div className="timeline-marker-framework">
                <div className="marker-dot"></div>
              </div>
              <div className="timeline-card-framework">
                <div className="card-icon-framework">
                  <Code size={32} color="#ff1744" />
                </div>
                <div className="card-content-framework">
                  <span className="step-number">ETAPA 2</span>
                  <h3 className="card-title-framework">23 apps prontos para usar como base</h3>
                  <p className="card-desc-framework">Biblioteca completa de apps funcionais prontos para copiar e personalizar.</p>
                </div>
              </div>
            </div>

            <div className="timeline-item-framework">
              <div className="timeline-marker-framework">
                <div className="marker-dot"></div>
              </div>
              <div className="timeline-card-framework">
                <div className="card-icon-framework">
                  <Terminal size={32} color="#ff1744" />
                </div>
                <div className="card-content-framework">
                  <span className="step-number">ETAPA 3</span>
                  <h3 className="card-title-framework">Prompts para criar avatares com IA</h3>
                  <p className="card-desc-framework">Comandos prontos para usar com IA e transformar qualquer conteúdo em app.</p>
                </div>
              </div>
            </div>

            <div className="timeline-item-framework">
              <div className="timeline-marker-framework">
                <div className="marker-dot"></div>
              </div>
              <div className="timeline-card-framework">
                <div className="card-icon-framework">
                  <FileText size={32} color="#ff1744" />
                </div>
                <div className="card-content-framework">
                  <span className="step-number">ETAPA 4</span>
                  <h3 className="card-title-framework">Templates de venda para apps</h3>
                  <p className="card-desc-framework">Páginas de vendas prontas e testadas para converter visitantes em clientes.</p>
                </div>
              </div>
            </div>

            <div className="timeline-item-framework">
              <div className="timeline-marker-framework">
                <div className="marker-dot"></div>
              </div>
              <div className="timeline-card-framework">
                <div className="card-icon-framework">
                  <Users2 size={32} color="#ff1744" />
                </div>
                <div className="card-content-framework">
                  <span className="step-number">ETAPA 5</span>
                  <h3 className="card-title-framework">Comunidade VIP de app publishers</h3>
                  <p className="card-desc-framework">Acesso exclusivo a network de alto nível e suporte direto dos criadores.</p>
                </div>
              </div>
            </div>

            <div className="timeline-item-framework">
              <div className="timeline-marker-framework">
                <div className="marker-dot"></div>
              </div>
              <div className="timeline-card-framework">
                <div className="card-icon-framework">
                  <Rocket size={32} color="#ff1744" />
                </div>
                <div className="card-content-framework">
                  <span className="step-number">ETAPA 6</span>
                  <h3 className="card-title-framework">Automação de deploy em 1 clique</h3>
                  <p className="card-desc-framework">Script que faz tudo sozinho: <strong className="auto-highlight">configuração, deploy e ativação automática</strong>.</p>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Bonuses Cards Section */}
        <div className="bonuses-section">
          <div className="bonus-header text-center">
            <h3 className="bonus-title">BÔNUS EXCLUSIVOS</h3>
          </div>

          <div className="bonus-grid">
            {/* Bonus 1 */}
            <GlareCard className="bonus-card-wrapper">
              <div className="bonus-card-visual">
                <div className="card-img bonus-1-img">
                </div>
                <div className="card-title-band bonus-neon">
                  <h4>BÔNUS 1: BIBLIOTECA DE APPS</h4>
                </div>
                <div className="card-body">
                  <p className="card-desc">23 Apps Prontos para Copiar e Colar.</p>
                  <ul className="card-checks">
                    <li><Check size={14} color="#00ff66" /> Código limpo e testado</li>
                    <li><Check size={14} color="#00ff66" /> Nichos lucrativos validados</li>
                    <li><Check size={14} color="#00ff66" /> Pronto para deploy imediato</li>
                  </ul>
                  <p className="card-value">Valor: <span className="strike">R$ 497</span></p>
                </div>
              </div>
            </GlareCard>

            {/* Bonus 2 */}
            <GlareCard className="bonus-card-wrapper">
              <div className="bonus-card-visual">
                <div className="card-img bonus-2-img">
                </div>
                <div className="card-title-band bonus-neon">
                  <h4>BÔNUS 2: PROMPTS MATADORES</h4>
                </div>
                <div className="card-body">
                  <p className="card-desc">Cole na IA e saia com apps prontos.</p>
                  <ul className="card-checks">
                    <li><Check size={14} color="#00ff66" /> Comandos de engenharia de prompt</li>
                    <li><Check size={14} color="#00ff66" /> Estrutura de código perfeita</li>
                    <li><Check size={14} color="#00ff66" /> Zero erros de sintaxe</li>
                  </ul>
                  <p className="card-value">Valor: <span className="strike">R$ 297</span></p>
                </div>
              </div>
            </GlareCard>

            {/* Bonus 3 */}
            <GlareCard className="bonus-card-wrapper">
              <div className="bonus-card-visual">
                <div className="card-img bonus-3-img">
                </div>
                <div className="card-title-band bonus-neon">
                  <h4>BÔNUS 3: DEPLOY EM 1 CLIQUE</h4>
                </div>
                <div className="card-body">
                  <p className="card-desc">Script que faz tudo sozinho.</p>
                  <ul className="card-checks">
                    <li><Check size={14} color="#00ff66" /> Configuração automática</li>
                    <li><Check size={14} color="#00ff66" /> Domínios gratuitos inclusos</li>
                    <li><Check size={14} color="#00ff66" /> Sem mexer em servidor</li>
                  </ul>
                  <p className="card-value">Valor: <span className="strike">R$ 397</span></p>
                </div>
              </div>
            </GlareCard>

            {/* Bonus 4 */}
            <GlareCard className="bonus-card-wrapper">
              <div className="bonus-card-visual">
                <div className="card-img bonus-4-img">
                </div>
                <div className="card-title-band">
                  <h4>BÔNUS 4: SUPORTE VIP</h4>
                </div>
                <div className="card-body">
                  <p className="card-desc">Acesso direto ao grupo secreto.</p>
                  <ul className="card-checks">
                    <li><Check size={14} color="#00ff66" /> Network de alto nível</li>
                    <li><Check size={14} color="#00ff66" /> Tira-dúvidas diário</li>
                    <li><Check size={14} color="#00ff66" /> Atualizações vitalícias</li>
                  </ul>
                  <p className="card-value">Valor: <span className="strike">R$ 297</span></p>
                </div>
              </div>
            </GlareCard>

          </div>
        </div>

        {/* Price */}
        <div className="price-box text-center">
          <p className="fake-price">💰 Valor real: R$ 1.700+</p>
          <p className="real-price">🔥 Hoje: R$ 47</p>

          <button className="btn-cta" onClick={handleCTAClick}>CRIAR MEU APP AGORA</button>
        </div>

      </div>

      <style>{`
        .offer-stack {
          padding-bottom: 0;
        }
        .section-title {
          font-size: 2rem;
          margin-bottom: 2rem;
          letter-spacing: 2px;
        }
        .timeline-framework {
          position: relative;
          max-width: 900px;
          margin: 0 auto 4rem;
          padding: 2rem 0;
        }

        /* Vertical Line */
        .timeline-framework::before {
          content: '';
          position: absolute;
          top: 0;
          bottom: 0;
          left: 30px;
          width: 2px;
          background: rgba(255, 255, 255, 0.2);
          z-index: 0;
        }

        .timeline-item-framework {
          display: flex;
          align-items: flex-start;
          gap: 2rem;
          margin-bottom: 3rem;
          position: relative;
          z-index: 1;
        }

        .timeline-marker-framework {
          width: 60px;
          height: 60px;
          background: #000;
          border: 2px solid rgba(255, 23, 68, 0.3);
          border-radius: 50%;
          display: flex;
          align-items: center;
          justify-content: center;
          flex-shrink: 0;
          z-index: 2;
        }

        .marker-dot {
          width: 16px;
          height: 16px;
          background: #ff1744;
          border-radius: 50%;
          box-shadow: 0 0 15px rgba(255, 23, 68, 0.6);
        }

        .timeline-card-framework {
          flex: 1;
          background: rgba(0, 0, 0, 0.6);
          border: 1px solid #ff1744;
          border-radius: 12px;
          padding: 2rem;
          display: flex;
          align-items: flex-start;
          gap: 1.5rem;
          transition: all 0.3s ease;
        }

        .timeline-card-framework:hover {
          border-color: #ff4569;
          box-shadow: 0 0 20px rgba(255, 23, 68, 0.3);
          transform: translateX(5px);
        }

        .card-icon-framework {
          background: rgba(255, 23, 68, 0.1);
          padding: 1rem;
          border-radius: 10px;
          flex-shrink: 0;
        }

        .card-content-framework {
          flex: 1;
        }

        .step-number {
          display: block;
          font-size: 0.85rem;
          color: #ff1744;
          font-weight: 700;
          letter-spacing: 2px;
          margin-bottom: 0.5rem;
          text-transform: uppercase;
        }

        .card-title-framework {
          font-size: 1.4rem;
          color: #fff;
          font-weight: 700;
          margin: 0 0 0.8rem 0;
          line-height: 1.3;
        }

        .card-desc-framework {
          font-size: 1rem;
          color: rgba(255, 255, 255, 0.8);
          line-height: 1.6;
          margin: 0;
        }
        
        .time-highlight {
          color: var(--primary);
          font-weight: 700;
        }
        
        .auto-highlight {
          text-decoration: underline;
          font-weight: 700;
        }

        @media(max-width: 768px) {
          .timeline-framework {
            padding: 1rem 0;
          }
          
          .timeline-framework::before {
            left: 20px;
          }
          
          .timeline-item-framework {
            gap: 1rem;
            margin-bottom: 2rem;
          }
          
          .timeline-marker-framework {
            width: 40px;
            height: 40px;
          }
          
          .marker-dot {
            width: 10px;
            height: 10px;
          }
          
          .timeline-card-framework {
            flex-direction: column;
            padding: 1.25rem;
            gap: 1rem;
          }
          
          .card-icon-framework {
            padding: 0.75rem;
          }
          
          .card-title-framework {
            font-size: 1.1rem;
            line-height: 1.4;
          }
          
          .card-desc-framework {
            font-size: 0.9rem;
            line-height: 1.5;
          }
        }
        
        @media(max-width: 480px) {
          .timeline-framework::before {
            display: none;
          }
          
          .timeline-item-framework {
            flex-direction: column;
            gap: 0.75rem;
          }
          
          .timeline-marker-framework {
            width: 35px;
            height: 35px;
            align-self: flex-start;
          }
          
          .timeline-card-framework {
            padding: 1rem;
            margin-left: 0;
          }
          
          .card-title-framework {
            font-size: 1rem;
          }
          
          .card-desc-framework {
            font-size: 0.85rem;
          }
          
          .step-number {
            font-size: 0.75rem;
          }
        }

        .bonus-header { margin-bottom: 3rem; }
        .bonus-title { font-size: 1.8rem; color: #fff; font-weight: 800; }
        .bonus-subtitle { color: var(--accent); letter-spacing: 2px; font-size: 0.9rem; margin-top: 0.5rem; text-transform: uppercase; }
        
        @media(max-width: 480px) {
          .bonus-header { margin-bottom: 2rem; }
          .bonus-title { font-size: 1.4rem; }
          .bonus-subtitle { font-size: 0.8rem; }
        }

        .bonus-grid {
          display: grid;
          grid-template-columns: repeat(4, 1fr);
          gap: 1.5rem;
          margin-bottom: 5rem;
        }
        @media(max-width: 1024px) {
           .bonus-grid { grid-template-columns: repeat(2, 1fr); }
        }
        @media(max-width: 600px) {
           .bonus-grid { grid-template-columns: 1fr; }
        }

        .bonus-card-wrapper {
          height: 100%;
          position: relative;
        }
        
        .bonus-card-wrapper::before {
          content: '';
          position: absolute;
          inset: -3px;
          border-radius: 12px;
          background: 
            radial-gradient(circle at 0% 0%, rgba(255, 255, 255, 0.1) 0%, transparent 50%),
            radial-gradient(circle at 100% 0%, rgba(255, 255, 255, 0.1) 0%, transparent 50%),
            radial-gradient(circle at 0% 100%, rgba(255, 255, 255, 0.1) 0%, transparent 50%),
            radial-gradient(circle at 100% 100%, rgba(255, 255, 255, 0.1) 0%, transparent 50%);
          opacity: 0.3;
          z-index: 1;
          pointer-events: none;
          transition: opacity 0.3s;
        }
        
        .bonus-card-wrapper:hover::before {
          opacity: 0.5;
        }
        
        .bonus-card-visual {
          background: #000;
          border: none;
          border-radius: 0;
          overflow: hidden;
          display: flex;
          flex-direction: column;
          height: 100%;
          position: relative;
          z-index: 0;
        }

        .card-img {
          height: 160px;
          display: flex;
          align-items: center;
          justify-content: center;
          position: relative;
          overflow: hidden;
        }
        .card-img::after {
          content: '';
          position: absolute;
          inset: 0;
          background: linear-gradient(to top, rgba(0, 0, 0, 0.8), transparent);
        }
        .bg-tech-1 { background: linear-gradient(45deg, #1a237e, #0d47a1); }
        .bonus-1-img {
          background: url('/Bônus 1.jpg') center/cover no-repeat;
        }
        .bg-tech-2 { background: linear-gradient(45deg, #311b92, #4a148c); }
        .bonus-2-img {
          background: url('/Bonus 2.PNG') center/cover no-repeat;
        }
        .bg-tech-3 { background: linear-gradient(45deg, #004d40, #00695c); }
        .bonus-3-img {
          background: url('/Bonus 3.jpg') center/cover no-repeat;
        }
        .bg-tech-4 { background: linear-gradient(45deg, #b71c1c, #880e4f); }
        .bonus-4-img {
          background: url('/bOnus 4.jpg') center/cover no-repeat;
        }

        .card-title-band {
          background: linear-gradient(90deg, #E50914, #c40812);
          padding: 1rem;
          text-align: center;
          position: relative;
        }
        .card-title-band h4 {
          color: #fff;
          font-size: 0.9rem;
          font-weight: 900;
          margin: 0;
          letter-spacing: 1.5px;
          text-transform: uppercase;
        }

        /* Sutil neon effect around borders for Bonus 1, 2, 3 */
        .bonus-neon {
          box-shadow: 
            0 0 8px rgba(0, 255, 255, 0.4),
            inset 0 0 8px rgba(0, 255, 255, 0.2);
        }

        .card-body {
          padding: 1.5rem;
          flex: 1;
          display: flex;
          flex-direction: column;
          background: #0a0a0a;
        }
        .card-desc {
          color: #fff;
          font-weight: 500;
          margin-bottom: 1.2rem;
          font-size: 0.95rem;
          line-height: 1.5;
        }
        .card-checks {
          list-style: none;
          margin-bottom: 1.5rem;
          flex: 1;
        }
        .card-checks li {
          display: flex;
          align-items: flex-start;
          gap: 0.6rem;
          color: #d4d4d8;
          font-size: 0.85rem;
          margin-bottom: 0.6rem;
          line-height: 1.4;
        }
        .card-value {
          font-size: 1rem;
          color: #E50914;
          text-align: center;
          border-top: 1px solid #222;
          padding-top: 1rem;
          font-weight: 700;
        }
        .strike { text-decoration: line-through; color: #888; }

        .price-box {
          background: #000;
          border: 1px solid #222;
          padding: 3rem;
          border-radius: var(--radius);
          max-width: 600px;
          margin: 0 auto 5rem;
          position: relative;
        }
        .price-box::before {
          content: '';
          position: absolute;
          inset: -2px;
          background: linear-gradient(45deg, var(--primary), var(--accent));
          z-index: -1;
          border-radius: 18px;
          filter: blur(10px);
          opacity: 0.5;
        }
        
        .fake-price { text-decoration: line-through; color: #666; font-size: 1.2rem; }
        .real-price { font-size: 3rem; font-weight: 900; margin: 1rem 0; color: #fff; }
        .green { color: var(--primary); }
      `}</style>
    </section>
  );
};

export default OfferStack;
