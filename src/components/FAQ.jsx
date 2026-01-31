import { useState } from 'react';
import { ChevronDown, ChevronUp } from 'lucide-react';

const FAQ = () => {
    const [openIndex, setOpenIndex] = useState(null);

    const toggle = (index) => {
        setOpenIndex(openIndex === index ? null : index);
    };

    const faqs = [
        {
            q: 'Preciso pagar para trabalhar?',
            a: 'Não! O acesso ao aplicativo é único e você não paga mensalidade. Você só paga uma taxa simbólica de cadastro para liberar seu acesso.'
        },
        {
            q: 'Funciona em qualquer celular?',
            a: 'Sim, funciona em qualquer smartphone (Android ou iPhone) ou computador com acesso à internet.'
        },
        {
            q: 'Como recebo meu dinheiro?',
            a: 'Os pagamentos são feitos via PIX diretamente na sua conta bancária cadastrada. Cai na hora!'
        },
        {
            q: 'Tenho garantia?',
            a: 'Sim, você tem 30 dias de garantia incondicional. Se não gostar, devolvemos 100% do seu dinheiro.'
        }
    ];

    return (
        <section className="section-padding faq-section">
            <div className="container">
                <h2 className="section-title">Perguntas <span className="text-gradient">Frequentes</span></h2>
                <div className="faq-list">
                    {faqs.map((item, index) => (
                        <div key={index} className={`faq-item ${openIndex === index ? 'open' : ''}`} onClick={() => toggle(index)}>
                            <div className="faq-question">
                                <h3>{item.q}</h3>
                                {openIndex === index ? <ChevronUp color="#ff007f" /> : <ChevronDown color="white" />}
                            </div>
                            <div className="faq-answer">
                                <p>{item.a}</p>
                            </div>
                        </div>
                    ))}
                </div>
            </div>

            <style>{`
        .faq-list {
          max-width: 800px;
          margin: 3rem auto 0;
        }
        .faq-item {
          background: var(--card-bg);
          margin-bottom: 1rem;
          border-radius: var(--border-radius);
          border: 1px solid rgba(255, 255, 255, 0.05);
          cursor: pointer;
          overflow: hidden;
          transition: var(--transition);
        }
        .faq-item:hover {
          border-color: rgba(255, 0, 127, 0.3);
        }
        .faq-question {
          padding: 1.5rem;
          display: flex;
          justify-content: space-between;
          align-items: center;
        }
        .faq-question h3 {
          font-size: 1.1rem;
          font-weight: 600;
        }
        .faq-answer {
          max-height: 0;
          overflow: hidden;
          padding: 0 1.5rem;
          transition: all 0.3s cubic-bezier(0, 1, 0, 1);
          color: var(--text-muted);
        }
        .faq-item.open .faq-answer {
          max-height: 200px;
          padding-bottom: 1.5rem;
          transition: all 0.3s cubic-bezier(1, 0, 1, 0);
        }
      `}</style>
        </section>
    );
};

export default FAQ;
