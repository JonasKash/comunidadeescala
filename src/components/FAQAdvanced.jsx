import React, { useState } from 'react';
import { AnimatePresence, motion } from 'framer-motion';
import { Plus } from 'lucide-react';

const FAQAdvanced = () => {
  const categories = {
    geral: 'Geral',
    tecnico: 'Técnico',
    pagamento: 'Pagamento',
    garantia: 'Garantia'
  };

  const faqData = {
    geral: [
      {
        question: 'O que é a metodologia de avatares com IA?',
        answer: 'É uma metodologia completa que ensina você a criar avatares ultrarealistas usando ferramentas de IA gratuitas e monetizar através do nicho Hot. Você aprende desde a criação até a automação completa do sistema para faturar R$5.000,00/Mês com modelos ultrarealistas.'
      },
      {
        question: 'Preciso saber programar ou ter conhecimento técnico?',
        answer: 'Não! A metodologia foi criada para pessoas sem conhecimento técnico. Você usa ferramentas de IA gratuitas e sistemas automatizados. Tudo é explicado passo a passo de forma simples e direta.'
      },
      {
        question: 'Quanto tempo leva para começar a monetizar?',
        answer: 'Com a metodologia completa, você pode monetizar seu avatar em até 24 horas. O sistema Nicho Hot foi desenvolvido para gerar caixa rápido, permitindo que você comece a faturar rapidamente.'
      },
      {
        question: 'O que está incluído na metodologia?',
        answer: 'Você recebe: metodologia completa de como criar avatares com IA gratuito, sistema para monetizar em 24 horas, bot para remover roupas do avatar, sistema completo Nicho Hot - Caixa rápido, biblioteca de prompts, acesso à Comunidade da Escala, como automatizar sua operação HOT e suporte contínuo através do Discord.'
      }
    ],
    tecnico: [
      {
        question: 'Quais ferramentas preciso ter?',
        answer: 'Você precisa apenas de um computador com internet. Todas as ferramentas de IA ensinadas são completamente gratuitas. Não precisa comprar assinaturas caras ou softwares pagos.'
      },
      {
        question: 'As ferramentas de IA são realmente gratuitas?',
        answer: 'Sim! A metodologia ensina exclusivamente ferramentas de IA gratuitas para criar avatares ultrarealistas. Você não precisa pagar mensalidades ou assinaturas. Tudo é feito com ferramentas gratuitas disponíveis.'
      },
      {
        question: 'Como funciona o bot para remover roupas do avatar?',
        answer: 'O bot é parte do sistema completo incluído na metodologia. Ele é uma ferramenta automatizada que faz parte da operação HOT e é explicado detalhadamente no curso.'
      },
      {
        question: 'E se eu tiver problemas técnicos?',
        answer: 'Você tem acesso à Comunidade da Escala através do Discord onde pode tirar dúvidas. Além disso, há suporte contínuo para ajudar você em qualquer etapa do processo.'
      }
    ],
    pagamento: [
      {
        question: 'Como funciona a monetização do avatar?',
        answer: 'Você aprende a criar avatares ultrarealistas e monetizá-los através do nicho Hot. O sistema inclui automação completa e estratégias para gerar caixa rápido, permitindo que você fature R$5.000,00/Mês.'
      },
      {
        question: 'Quanto posso faturar com essa metodologia?',
        answer: 'A metodologia foi desenvolvida para você faturar R$5.000,00/Mês com modelos ultrarealistas. O sistema Nicho Hot - Caixa rápido foi criado especificamente para gerar resultados rápidos.'
      },
      {
        question: 'Preciso investir mais além do valor do curso?',
        answer: 'Não! Todas as ferramentas ensinadas são gratuitas. Você só precisa do investimento inicial da metodologia (R$9,90) e pode começar a monetizar imediatamente sem custos adicionais.'
      },
      {
        question: 'Como recebo o dinheiro da monetização?',
        answer: 'A metodologia ensina todo o processo de monetização, incluindo como receber os pagamentos. Tudo é explicado passo a passo no sistema completo incluído.'
      }
    ],
    garantia: [
      {
        question: 'Tenho garantia?',
        answer: 'Sim! Você tem garantia de satisfação. Caso não se sinta satisfeito com a metodologia, oferecemos reembolso conforme nossos termos de garantia.'
      },
      {
        question: 'E se eu não conseguir criar os avatares?',
        answer: 'A metodologia foi criada para ser simples e direta. Você tem acesso à Comunidade da Escala e suporte contínuo através do Discord para tirar qualquer dúvida durante o processo.'
      },
      {
        question: 'Os bônus ficam mesmo com reembolso?',
        answer: 'Os termos de garantia são explicados detalhadamente. Você mantém acesso aos materiais conforme os termos estabelecidos na garantia.'
      },
      {
        question: 'Por que o preço é R$9,90?',
        answer: 'Estamos oferecendo um preço especial de lançamento (R$9,90, antes R$67). É uma oportunidade para você ter acesso à metodologia completa de criação de avatares com IA e sistema de monetização.'
      }
    ]
  };

  const categoryKeys = Object.keys(categories);
  const [selectedCategory, setSelectedCategory] = useState(categoryKeys[0]);

  return (
    <section className="faq-advanced-section">
      <div className="container">
        <FAQHeader 
          title="Perguntas Frequentes" 
          subtitle="Tire suas dúvidas" 
        />
        
        <FAQTabs 
          categories={categories}
          selected={selectedCategory} 
          setSelected={setSelectedCategory} 
        />
        
        <FAQList 
          faqData={faqData}
          selected={selectedCategory} 
        />
      </div>

      <style>{`
        .faq-advanced-section {
          padding: 5rem 0;
          background: #000;
          position: relative;
          overflow: hidden;
        }
        
        .faq-header {
          text-align: center;
          margin-bottom: 3rem;
          position: relative;
          z-index: 10;
        }
        
        .faq-subtitle {
          display: inline-block;
          background: linear-gradient(to right, var(--primary), rgba(0, 255, 102, 0.6));
          -webkit-background-clip: text;
          -webkit-text-fill-color: transparent;
          background-clip: text;
          font-weight: 500;
          margin-bottom: 1rem;
          font-size: 0.9rem;
          letter-spacing: 2px;
          text-transform: uppercase;
        }
        
        .faq-title {
          font-size: 2.5rem;
          font-weight: 900;
          color: #fff;
          margin-bottom: 2rem;
        }
        
        .faq-glow {
          position: absolute;
          top: -350px;
          left: 50%;
          transform: translateX(-50%);
          width: 600px;
          height: 500px;
          border-radius: 50%;
          background: radial-gradient(circle, rgba(0, 255, 102, 0.1), rgba(0, 255, 102, 0.05));
          filter: blur(60px);
          z-index: 0;
        }
        
        .faq-tabs {
          display: flex;
          flex-wrap: wrap;
          justify-content: center;
          gap: 1rem;
          margin-bottom: 3rem;
          position: relative;
          z-index: 10;
        }
        
        .faq-tab {
          position: relative;
          overflow: hidden;
          white-space: nowrap;
          border-radius: 6px;
          border: 1px solid #333;
          padding: 0.5rem 1rem;
          font-size: 0.875rem;
          font-weight: 500;
          transition: all 0.3s;
          background: transparent;
          color: #a1a1aa;
          cursor: pointer;
        }
        
        .faq-tab:hover {
          color: #fff;
          border-color: #555;
        }
        
        .faq-tab.active {
          border-color: var(--primary);
          color: #000;
        }
        
        .faq-tab-bg {
          position: absolute;
          inset: 0;
          z-index: 0;
          background: linear-gradient(to right, var(--primary), rgba(0, 255, 102, 0.8));
        }
        
        .faq-tab span {
          position: relative;
          z-index: 10;
        }
        
        .faq-list-container {
          max-width: 800px;
          margin: 0 auto;
        }
        
        .faq-items {
          display: flex;
          flex-direction: column;
          gap: 1rem;
        }
        
        .faq-item {
          border-radius: 12px;
          border: 1px solid #333;
          background: #0a0a0a;
          transition: all 0.3s;
          overflow: hidden;
        }
        
        .faq-item.open {
          background: rgba(255, 255, 255, 0.02);
          border-color: #444;
        }
        
        .faq-question-btn {
          width: 100%;
          display: flex;
          align-items: center;
          justify-content: space-between;
          gap: 1rem;
          padding: 1.5rem;
          text-align: left;
          background: transparent;
          border: none;
          cursor: pointer;
        }
        
        .faq-question-text {
          font-size: 1.1rem;
          font-weight: 600;
          transition: color 0.3s;
          flex: 1;
        }
        
        .faq-item.open .faq-question-text {
          color: #fff;
        }
        
        .faq-item:not(.open) .faq-question-text {
          color: #a1a1aa;
        }
        
        .faq-icon {
          width: 20px;
          height: 20px;
          transition: all 0.2s;
          flex-shrink: 0;
        }
        
        .faq-item.open .faq-icon {
          color: #fff;
          transform: rotate(45deg);
        }
        
        .faq-item:not(.open) .faq-icon {
          color: #a1a1aa;
        }
        
        .faq-answer {
          overflow: hidden;
          padding: 0 1.5rem;
        }
        
        .faq-answer-content {
          padding-bottom: 1.5rem;
          color: #a1a1aa;
          line-height: 1.6;
          font-size: 0.95rem;
        }
        
        @media (max-width: 768px) {
          .faq-title {
            font-size: 2rem;
          }
          
          .faq-tabs {
            gap: 0.5rem;
            flex-wrap: wrap;
          }
          
          .faq-tab {
            font-size: 0.8rem;
            padding: 0.4rem 0.8rem;
          }
        }
        
        @media (max-width: 480px) {
          .faq-title {
            font-size: 1.5rem;
          }
          
          .faq-tabs {
            gap: 0.4rem;
            justify-content: center;
          }
          
          .faq-tab {
            font-size: 0.75rem;
            padding: 0.5rem 0.7rem;
            min-height: 40px;
          }
          
          .faq-item {
            padding: 1rem;
          }
          
          .faq-question {
            font-size: 0.95rem;
            padding-right: 2rem;
          }
          
          .faq-answer {
            font-size: 0.9rem;
            padding-top: 0.75rem;
          }
        }
      `}</style>
    </section>
  );
};

const FAQHeader = ({ title, subtitle }) => (
  <div className="faq-header">
    <span className="faq-subtitle">{subtitle}</span>
    <h2 className="faq-title">{title}</h2>
    <span className="faq-glow" />
  </div>
);

const FAQTabs = ({ categories, selected, setSelected }) => (
  <div className="faq-tabs">
    {Object.entries(categories).map(([key, label]) => (
      <button
        key={key}
        onClick={() => setSelected(key)}
        className={`faq-tab ${selected === key ? 'active' : ''}`}
      >
        <AnimatePresence>
          {selected === key && (
            <motion.span
              initial={{ y: "100%" }}
              animate={{ y: "0%" }}
              exit={{ y: "100%" }}
              transition={{ duration: 0.5, ease: "backIn" }}
              className="faq-tab-bg"
            />
          )}
        </AnimatePresence>
        <span>{label}</span>
      </button>
    ))}
  </div>
);

const FAQList = ({ faqData, selected }) => (
  <div className="faq-list-container">
    <AnimatePresence mode="wait">
      {Object.entries(faqData).map(([category, questions]) => {
        if (selected === category) {
          return (
            <motion.div
              key={category}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: 20 }}
              transition={{ duration: 0.5, ease: "backIn" }}
              className="faq-items"
            >
              {questions.map((faq, index) => (
                <FAQItem key={index} {...faq} />
              ))}
            </motion.div>
          );
        }
        return null;
      })}
    </AnimatePresence>
  </div>
);

const FAQItem = ({ question, answer }) => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <motion.div
      animate={isOpen ? "open" : "closed"}
      className={`faq-item ${isOpen ? 'open' : ''}`}
    >
      <button
        onClick={() => setIsOpen(!isOpen)}
        className="faq-question-btn"
      >
        <span className="faq-question-text">{question}</span>
        <motion.span
          variants={{
            open: { rotate: "45deg" },
            closed: { rotate: "0deg" },
          }}
          transition={{ duration: 0.2 }}
        >
          <Plus className="faq-icon" />
        </motion.span>
      </button>
      <motion.div
        initial={false}
        animate={{ 
          height: isOpen ? "auto" : "0px", 
          marginBottom: isOpen ? "16px" : "0px" 
        }}
        transition={{ duration: 0.3, ease: "easeInOut" }}
        className="faq-answer"
      >
        <p className="faq-answer-content">{answer}</p>
      </motion.div>
    </motion.div>
  );
};

export default FAQAdvanced;

