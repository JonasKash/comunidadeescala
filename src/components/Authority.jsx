const Authority = () => {
    return (
        <section className="authority-section">
            <div className="container text-center">
                <h2 className="text-muted" style={{ fontSize: '1rem', letterSpacing: '2px', marginBottom: '3rem' }}>QUEM SOU EU</h2>

                <div className="story-card neon-card">
                    <p className="lead">Eu não criei esse método porque sou “gênio técnico”.</p>

                    <p>Criei porque já fiquei <strong>até 2h da manhã</strong>, olhando pra uma tela preta com “Build failed” e <strong>17 abas abertas no Google</strong>.</p>

                    <p>Senti raiva. Senti vergonha. Senti que tecnologia não era pra mim.</p>

                    <h3 className="turn">O DEPLOY MODERNO FOI FEITO PARA SER FÁCIL.<br />MAS EXPLICADO PARA PARECER IMPOSSÍVEL.</h3>

                    <p>A <strong>Comunidade da Escala</strong> é o atalho que eu gostaria de ter recebido naquela noite.</p>
                </div>

                <div className="video-section">
                    <video 
                        className="proof-video" 
                        controls 
                        playsInline
                        poster=""
                    >
                        <source src="/ctv 01 - prova social.mp4" type="video/mp4" />
                        Seu navegador não suporta o elemento de vídeo.
                    </video>
                    
                    <div className="video-testimonial">
                        <p>Aplicando a metodologia da Comunidade da Escala, eu consegui criar e testar várias ofertas ao mesmo tempo.</p>
                        <p><strong>Resultado? Um ROAS médio de 4.</strong></p>
                        <p>E a verdade é simples: você não precisa de 10 ideias.</p>
                        <p><strong>Você só precisa de UMA oferta certa para mudar sua vida financeira.</strong></p>
                    </div>
                </div>
            </div>

            <style>{`
        .story-card {
          max-width: 700px;
          margin: 0 auto;
          padding: 3rem;
          text-align: left;
        }
        .story-card p {
          color: #d4d4d8;
          font-size: 1.1rem;
          margin-bottom: 1.5rem;
        }
        .turn {
          margin: 2rem 0;
          color: #fff;
          font-size: 1.4rem;
          border-left: 3px solid var(--primary);
          padding-left: 1.5rem;
        }
        
        .video-section {
          max-width: 400px;
          margin: 3rem auto 0;
          text-align: center;
        }
        
        .proof-video {
          width: 100%;
          max-width: 100%;
          aspect-ratio: 9 / 16;
          object-fit: contain;
          border-radius: var(--radius);
          border: 1px solid rgba(255, 255, 255, 0.1);
          background: #000;
          box-shadow: 0 10px 40px rgba(0, 0, 0, 0.5);
          margin-bottom: 2rem;
        }
        
        .video-testimonial {
          color: #fff;
          font-size: 1.2rem;
          line-height: 1.6;
          font-weight: 500;
          max-width: 700px;
          margin: 0 auto;
          padding: 1.5rem;
          background: rgba(0, 255, 102, 0.05);
          border: 1px solid rgba(0, 255, 102, 0.2);
          border-radius: var(--radius);
        }
        
        .video-testimonial p {
          margin: 0.8rem 0;
          color: #fff;
        }
        
        .video-testimonial p:first-child {
          margin-top: 0;
        }
        
        .video-testimonial p:last-child {
          margin-bottom: 0;
        }
        
        .video-testimonial strong {
          color: var(--primary);
          font-weight: 700;
        }
        
        @media(max-width: 768px) {
          .video-section {
            margin-top: 2rem;
          }
          
          .video-testimonial {
            font-size: 1rem;
            padding: 1.25rem;
          }
        }
        
        @media(max-width: 480px) {
          .video-section {
            max-width: 100%;
            padding: 0 1rem;
          }
          
          .proof-video {
            border-radius: 12px;
            max-width: 100%;
          }
          
          .video-testimonial {
            font-size: 0.95rem;
            padding: 1rem;
          }
        }
      `}</style>
        </section>
    );
};

export default Authority;
