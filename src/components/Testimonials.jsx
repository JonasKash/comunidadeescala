import { Star } from 'lucide-react';

const Testimonials = () => {
    const reviews = [
        {
            name: 'Fernanda Oliveira',
            role: 'Dona de Casa',
            text: 'Eu não acreditava muito, mas no primeiro dia já consegui sacar 80 reais. Ajuda muito nas contas de casa!',
        },
        {
            name: 'Roberto Santos',
            role: 'Estudante',
            text: 'Faço no ônibus indo pra faculdade. É muito simples, só dar opinião e pronto. O dinheiro cai na hora.',
        },
        {
            name: 'Camila Lima',
            role: 'Manicure',
            text: 'Melhor coisa que fiz. Consigo uma renda extra sem atrapalhar meu trabalho. Recomendo demais!',
        }
    ];

    return (
        <section className="section-padding">
            <div className="container">
                <h2 className="section-title">
                    Quem usa, <span className="text-gradient">Aprova!</span>
                </h2>
                <div className="testimonials-grid">
                    {reviews.map((review, index) => (
                        <div key={index} className="review-card">
                            <div className="stars">
                                {[...Array(5)].map((_, i) => (
                                    <Star key={i} size={18} fill="#ffdd00" color="#ffdd00" />
                                ))}
                            </div>
                            <p className="review-text">"{review.text}"</p>
                            <div className="author">
                                <div className="author-avatar">{review.name[0]}</div>
                                <div>
                                    <p className="author-name">{review.name}</p>
                                    <p className="author-role">{review.role}</p>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
            </div>

            <style>{`
        .testimonials-grid {
          display: grid;
          grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
          gap: 2rem;
          margin-top: 3rem;
        }
        .review-card {
          background: #151515;
          padding: 2rem;
          border-radius: var(--border-radius);
          border: 1px solid rgba(255, 255, 255, 0.05);
        }
        .stars {
          display: flex;
          gap: 0.2rem;
          margin-bottom: 1rem;
        }
        .review-text {
          font-style: italic;
          color: #ddd;
          margin-bottom: 1.5rem;
          min-height: 80px;
        }
        .author {
          display: flex;
          align-items: center;
          gap: 1rem;
        }
        .author-avatar {
          width: 50px;
          height: 50px;
          background: var(--primary-color);
          border-radius: 50%;
          display: flex;
          align-items: center;
          justify-content: center;
          font-weight: bold;
          font-size: 1.2rem;
        }
        .author-name {
          font-weight: 600;
        }
        .author-role {
          font-size: 0.85rem;
          color: var(--text-muted);
        }
      `}</style>
        </section>
    );
};

export default Testimonials;
