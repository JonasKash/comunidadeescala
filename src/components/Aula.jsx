import { useState, useEffect } from 'react';
import { Lock, Zap } from 'lucide-react';
import { Link } from 'react-router-dom';
import { getStoredUTMParams, getUTMParams } from '../lib/utm';
import { storeUTMParams } from '../lib/utm';
import Footer from './Footer';

const Aula = () => {
  const [nome, setNome] = useState('');
  const [telefone, setTelefone] = useState('');
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState('');
  // Estado ofuscado para dificultar manipulação
  const [vState, setVState] = useState({ a: false, b: Date.now() });
  const [showDiscordButton, setShowDiscordButton] = useState(false);

  const videoId = '8hcwr-VoyME';
  const thumbnailUrl = `https://img.youtube.com/vi/${videoId}/maxresdefault.jpg`;
  const [thumbnailError, setThumbnailError] = useState(false);

  // Função para formatar telefone com +55 e máscara - SEM LIMITAÇÃO
  const formatPhone = (value) => {
    // Remove tudo que não é número
    const numbers = value.replace(/\D/g, '');
    
    // Se começar com 55, remove (já está no prefixo)
    const cleanNumbers = numbers.startsWith('55') ? numbers.slice(2) : numbers;
    
    // SEM QUALQUER LIMITAÇÃO - aceita TODOS os dígitos
    if (cleanNumbers.length === 0) {
      return '+55';
    } else if (cleanNumbers.length <= 2) {
      return `+55 (${cleanNumbers}`;
    } else {
      // Formata DDD + resto (sem limitar o resto)
      const ddd = cleanNumbers.slice(0, 2);
      const resto = cleanNumbers.slice(2);
      
      // Formata o resto de forma flexível, sem cortar
      if (resto.length <= 4) {
        return `+55 (${ddd}) ${resto}`;
      } else if (resto.length <= 8) {
        return `+55 (${ddd}) ${resto.slice(0, 4)}-${resto.slice(4)}`;
      } else {
        // Para números maiores, adiciona hífen a cada 4-5 dígitos, mas NUNCA corta
        let formatted = `+55 (${ddd}) ${resto.slice(0, 5)}-`;
        const remaining = resto.slice(5);
        // Adiciona o resto completo, formatando a cada 4 dígitos
        for (let i = 0; i < remaining.length; i += 4) {
          if (i > 0) formatted += '-';
          formatted += remaining.slice(i, i + 4);
        }
        return formatted;
      }
    }
  };

  // Função para remover +55 e formatação antes de enviar
  const cleanPhone = (phone) => {
    // Remove +55, espaços, parênteses e hífens
    return phone.replace(/\+55|\s|\(|\)|-/g, '');
  };

  const handlePhoneChange = (e) => {
    const formatted = formatPhone(e.target.value);
    setTelefone(formatted);
  };

  useEffect(() => {
    try {
      storeUTMParams();
      
      // Dispara PageView do Facebook Pixel
      if (typeof window !== 'undefined' && window.fbq) {
        try {
          window.fbq('track', 'PageView', {
            content_name: 'Aula - Modelos Ultrarealistas',
            content_category: 'Aula'
          });
        } catch (fbError) {
          console.error('Erro ao rastrear PageView do Facebook:', fbError);
        }
      }

      // Valida estado armazenado ao carregar
      try {
        const stored = sessionStorage.getItem('_v_a');
        if (stored) {
          const parsed = JSON.parse(stored);
          // Valida se o estado armazenado é válido (tem menos de 24h)
          if (parsed && parsed.a && parsed.b && (Date.now() - parsed.b) < 86400000) {
            setVState(parsed);
          } else {
            sessionStorage.removeItem('_v_a');
          }
        }
      } catch (e) {
        // Ignora erro
      }

      // Proteção contra manipulação do DOM
      const protectVideo = () => {
        if (!vState.a) {
          const wrapper = document.querySelector('[data-vid="locked"]');
          if (wrapper) {
            const overlay = wrapper.querySelector('.video-overlay');
            if (overlay && (overlay.style.display === 'none' || overlay.style.visibility === 'hidden')) {
              overlay.style.display = '';
              overlay.style.visibility = '';
            }
            // Remove qualquer iframe inserido manualmente quando bloqueado
            const unauthorizedIframe = wrapper.querySelector('iframe:not(.video-iframe)');
            if (unauthorizedIframe) {
              unauthorizedIframe.remove();
            }
            // Garante que o overlay está visível
            const lockedDiv = wrapper.querySelector('.video-locked');
            if (lockedDiv && lockedDiv.style.display === 'none') {
              lockedDiv.style.display = '';
            }
          }
        }
      };

      // Verifica periodicamente
      const interval = setInterval(protectVideo, 500);
      
      return () => clearInterval(interval);
    } catch (err) {
      console.error('Erro ao armazenar UTMs:', err);
    }
  }, [vState.a]);

  const handleSubmit = async (e) => {
    e.preventDefault();
    setError('');
    setLoading(true);

    try {
      // Remove +55 e formatação do telefone antes de enviar
      const telefoneLimpo = cleanPhone(telefone);

      const eventId = `ic_${Date.now()}_${Math.random().toString(36).substring(2)}`;
      const storedUTMs = getStoredUTMParams();
      const currentUTMs = getUTMParams();
      const utmParams = { ...storedUTMs, ...currentUTMs };

      const payload = {
        nome: nome.trim(),
        telefone: telefoneLimpo,
        event_id: eventId,
        page: 'aula',
        ...utmParams,
      };

      const response = await fetch('https://wbn.araxa.app/webhook/receive-low-app', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(payload),
      });

      if (!response.ok) {
        throw new Error('Erro ao enviar dados');
      }

      if (typeof window !== 'undefined' && window.fbq) {
        try {
          window.fbq('track', 'InitiateCheckout', {
            content_name: 'Aula - Modelos Ultrarealistas',
            content_category: 'Aula',
            currency: 'BRL',
            value: 0,
            event_id: eventId
          });
        } catch (fbError) {
          console.error('Erro ao rastrear evento do Facebook:', fbError);
        }
      }

      // Atualiza estado de forma protegida com validação
      const unlockData = {
        a: true,
        b: Date.now(),
        c: eventId,
        d: btoa(`${eventId}-${Date.now()}`).slice(0, 16)
      };
      // Armazena também em sessionStorage para validação
      try {
        sessionStorage.setItem('_v_a', JSON.stringify(unlockData));
      } catch (e) {
        // Ignora erro de storage
      }
      setVState(unlockData);
      setNome('');
      setTelefone('');

      // Inicia timer para mostrar botão do Discord após 3 minutos
      setTimeout(() => {
        setShowDiscordButton(true);
      }, 180000); // 3 minutos = 180000ms
    } catch (err) {
      setError('Erro ao enviar. Tente novamente.');
      console.error('Erro:', err);
    } finally {
      setLoading(false);
    }
  };

  return (
    <>
      <nav className="navbar-aula">
        <div className="container nav-content">
          <Link to="/" className="logo">
            <Zap color="#22c55e" size={24} fill="#22c55e" />
            <span>Comunidade <span className="text-highlight">Da Escala</span></span>
          </Link>
          <span className="btn-nav-disabled">Acesso Restrito</span>
        </div>
      </nav>
      <section className="aula-section-lowticket">
        <div className="aula-bg-glow"></div>
        <div className="container">
          <h1 className="aula-headline">
            Vídeo ensinando a gerar modelos ultrarealistas gratuitamente
          </h1>

          <div className="video-wrapper" data-vid="locked">
            {!vState.a ? (
              <div className="video-locked">
                <img 
                  src={thumbnailError ? `https://img.youtube.com/vi/${videoId}/hqdefault.jpg` : thumbnailUrl} 
                  alt="Thumbnail do vídeo" 
                  className="video-thumbnail"
                  onError={() => setThumbnailError(true)}
                />
                <div className="video-overlay">
                  <div className="lock-icon">
                    <Lock size={48} />
                  </div>
                  <p className="lock-text">Preencha o formulário abaixo para desbloquear o vídeo</p>
                </div>
              </div>
            ) : (
              <div className="video-unlocked">
                <iframe
                  width="100%"
                  height="100%"
                  src={`https://www.youtube.com/embed/${videoId}?autoplay=1`}
                  title="Vídeo ensinando a gerar modelos ultrarealistas gratuitamente"
                  frameBorder="0"
                  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                  allowFullScreen
                  className="video-iframe"
                ></iframe>
              </div>
            )}
          </div>

          {vState.a && showDiscordButton && (
            <div className="discord-button-container">
              <a 
                href="https://discord.com/invite/8D3383msCT" 
                target="_blank" 
                rel="noopener noreferrer"
                className="btn-discord"
              >
                <span className="btn-discord-text">ENTRAR NO DISCORD</span>
                <span className="btn-discord-glow"></span>
              </a>
            </div>
          )}

          {!vState.a && (
            <form onSubmit={handleSubmit} className="aula-form">
              <div className="form-group">
                <label htmlFor="nome">NOME</label>
                <input
                  type="text"
                  id="nome"
                  value={nome}
                  onChange={(e) => setNome(e.target.value)}
                  required
                  placeholder="Seu nome"
                  disabled={loading}
                />
              </div>

              <div className="form-group">
                <label htmlFor="telefone">TELEFONE</label>
                <input
                  type="tel"
                  id="telefone"
                  value={telefone}
                  onChange={handlePhoneChange}
                  required
                  placeholder="+55 (00) 00000-0000"
                  disabled={loading}
                  inputMode="numeric"
                />
              </div>

              {error && <div className="form-error">{error}</div>}

              <button type="submit" className="btn-cta-lowticket" disabled={loading}>
                <span className="btn-text">{loading ? 'Enviando...' : 'DESBLOQUEAR VÍDEO'}</span>
                <span className="btn-glow"></span>
              </button>
            </form>
          )}
        </div>

      <style>{`
        .aula-section-lowticket {
          min-height: calc(100vh - 140px);
          display: flex;
          align-items: center;
          padding: 6rem 0 4rem 0;
          background: #000000;
          position: relative;
          overflow: hidden;
          margin-top: 70px;
        }

        .aula-bg-glow {
          position: absolute;
          top: -50%;
          right: -20%;
          width: 800px;
          height: 800px;
          background: radial-gradient(circle, rgba(34, 197, 94, 0.15) 0%, transparent 70%);
          filter: blur(80px);
          z-index: 0;
          animation: pulse-glow 4s ease-in-out infinite;
        }

        @keyframes pulse-glow {
          0%, 100% {
            opacity: 0.5;
            transform: scale(1);
          }
          50% {
            opacity: 0.8;
            transform: scale(1.1);
          }
        }

        .aula-section-lowticket .container {
          position: relative;
          z-index: 1;
          display: flex;
          flex-direction: column;
          gap: 2.5rem;
          max-width: 900px;
        }

        .aula-headline {
          font-size: clamp(2rem, 5vw, 3rem);
          font-weight: 800;
          line-height: 1.2;
          color: #ffffff;
          text-align: center;
          margin: 0;
        }

        .video-wrapper {
          position: relative;
          width: 100%;
          aspect-ratio: 16 / 9;
          border-radius: var(--radius);
          overflow: hidden;
          background: var(--bg-secondary);
          box-shadow: 0 20px 60px rgba(0, 0, 0, 0.5);
          border: 1px solid rgba(255, 255, 255, 0.1);
        }

        .video-locked {
          position: relative;
          width: 100%;
          height: 100%;
        }

        .video-thumbnail {
          width: 100%;
          height: 100%;
          object-fit: cover;
        }

        .video-overlay {
          position: absolute;
          top: 0;
          left: 0;
          right: 0;
          bottom: 0;
          background: rgba(0, 0, 0, 0.85);
          display: flex;
          flex-direction: column;
          align-items: center;
          justify-content: center;
          gap: 1.5rem;
          padding: 2rem;
        }

        .lock-icon {
          color: var(--primary);
          animation: pulse 2s ease-in-out infinite;
        }

        @keyframes pulse {
          0%, 100% {
            opacity: 1;
            transform: scale(1);
          }
          50% {
            opacity: 0.7;
            transform: scale(1.1);
          }
        }

        .lock-text {
          color: #ffffff;
          font-size: 1.2rem;
          font-weight: 600;
          text-align: center;
          max-width: 400px;
        }

        .video-unlocked {
          width: 100%;
          height: 100%;
        }

        .video-iframe {
          width: 100%;
          height: 100%;
          border: none;
        }

        .aula-form {
          display: flex;
          flex-direction: column;
          gap: 1.5rem;
          background: rgba(10, 10, 10, 0.8);
          padding: 2rem;
          border-radius: var(--radius);
          border: 1px solid rgba(34, 197, 94, 0.3);
          box-shadow: 0 0 20px rgba(34, 197, 94, 0.15);
          backdrop-filter: blur(10px);
        }

        .form-group {
          display: flex;
          flex-direction: column;
          gap: 0.5rem;
        }

        .form-group label {
          color: #ffffff;
          font-size: 0.9rem;
          font-weight: 600;
          text-transform: uppercase;
          letter-spacing: 0.5px;
        }

        .form-group input {
          background: rgba(255, 255, 255, 0.05);
          border: 1px solid rgba(255, 255, 255, 0.1);
          border-radius: var(--radius);
          padding: 1rem;
          color: #ffffff;
          font-size: 1rem;
          transition: all 0.2s;
          font-family: var(--font-body);
        }

        .form-group input:focus {
          outline: none;
          border-color: var(--primary);
          background: rgba(255, 255, 255, 0.08);
          box-shadow: 0 0 0 3px rgba(34, 197, 94, 0.1);
        }

        .form-group input::placeholder {
          color: rgba(255, 255, 255, 0.4);
        }

        .form-group input:disabled {
          opacity: 0.5;
          cursor: not-allowed;
        }

        .form-error {
          background: rgba(255, 68, 68, 0.1);
          border: 1px solid rgba(255, 68, 68, 0.3);
          color: #ff4444;
          padding: 0.75rem;
          border-radius: var(--radius);
          font-size: 0.9rem;
          text-align: center;
        }

        .btn-cta-lowticket {
          background-color: var(--primary);
          color: #000000;
          font-weight: 700;
          padding: 1.2rem 3rem;
          border-radius: var(--radius);
          font-size: 1.1rem;
          border: none;
          cursor: pointer;
          position: relative;
          overflow: hidden;
          display: inline-block;
          box-shadow: 0 0 20px rgba(34, 197, 94, 0.3);
          width: 100%;
          margin-top: 0.5rem;
        }

        .btn-text {
          position: relative;
          z-index: 2;
        }

        .btn-glow {
          position: absolute;
          top: 50%;
          left: 50%;
          width: 0;
          height: 0;
          border-radius: 50%;
          background: rgba(255, 255, 255, 0.3);
          transform: translate(-50%, -50%);
          transition: width 0.6s, height 0.6s;
        }

        .btn-cta-lowticket:hover .btn-glow {
          width: 300px;
          height: 300px;
        }

        .btn-cta-lowticket:disabled {
          opacity: 0.6;
          cursor: not-allowed;
        }

        .discord-button-container {
          margin-top: 2rem;
          display: flex;
          justify-content: center;
          animation: fadeInUp 0.5s ease;
        }

        @keyframes fadeInUp {
          from {
            opacity: 0;
            transform: translateY(20px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }

        .btn-discord {
          background: linear-gradient(135deg, #5865F2, #7289DA);
          color: #ffffff;
          font-weight: 700;
          padding: 1.2rem 3rem;
          border-radius: var(--radius);
          font-size: 1.1rem;
          border: none;
          cursor: pointer;
          position: relative;
          overflow: hidden;
          display: inline-block;
          box-shadow: 0 0 20px rgba(88, 101, 242, 0.4);
          text-decoration: none;
          transition: all 0.3s;
        }

        .btn-discord:hover {
          transform: translateY(-2px);
          box-shadow: 0 0 30px rgba(88, 101, 242, 0.6);
          background: linear-gradient(135deg, #7289DA, #5865F2);
        }

        .btn-discord-text {
          position: relative;
          z-index: 2;
        }

        .btn-discord-glow {
          position: absolute;
          top: 50%;
          left: 50%;
          width: 0;
          height: 0;
          border-radius: 50%;
          background: rgba(255, 255, 255, 0.3);
          transform: translate(-50%, -50%);
          transition: width 0.6s, height 0.6s;
        }

        .btn-discord:hover .btn-discord-glow {
          width: 300px;
          height: 300px;
        }

        @media(max-width: 768px) {
          .aula-section-lowticket {
            padding: 3rem 0 2rem 0;
            min-height: auto;
            margin-top: 60px;
          }

          .aula-bg-glow {
            width: 400px;
            height: 400px;
            top: -30%;
            right: -30%;
          }

          .aula-section-lowticket .container {
            gap: 2rem;
            padding: 0 1rem;
          }

          .aula-headline {
            font-size: clamp(1.5rem, 6vw, 2.2rem);
            line-height: 1.3;
            margin-bottom: 1rem;
          }

          .video-wrapper {
            margin-bottom: 1rem;
          }

          .lock-text {
            font-size: 1rem;
            padding: 0 1rem;
            max-width: 100%;
          }

          .lock-icon svg {
            width: 40px;
            height: 40px;
          }

          .aula-form {
            padding: 1.5rem;
            gap: 1.25rem;
          }

          .form-group {
            gap: 0.5rem;
          }

          .form-group input {
            padding: 0.875rem;
            font-size: 16px;
            min-height: 48px;
          }

          .btn-cta-lowticket {
            padding: 1rem 1.5rem;
            font-size: 1rem;
            min-height: 48px;
            touch-action: manipulation;
          }

          .discord-button-container {
            margin-top: 1.5rem;
          }

          .btn-discord {
            padding: 1rem 2rem;
            font-size: 1rem;
            width: 100%;
            max-width: 100%;
          }
        }

        @media(max-width: 480px) {
          .aula-section-lowticket {
            padding: 2.5rem 0 1.5rem 0;
            margin-top: 60px;
          }

          .aula-bg-glow {
            width: 300px;
            height: 300px;
            top: -20%;
            right: -40%;
          }

          .aula-section-lowticket .container {
            gap: 1.5rem;
            padding: 0 0.75rem;
          }

          .aula-headline {
            font-size: clamp(1.3rem, 7vw, 1.8rem);
            line-height: 1.2;
            margin-bottom: 0.75rem;
          }

          .video-wrapper {
            margin-bottom: 0.75rem;
          }

          .video-overlay {
            padding: 1.5rem;
            gap: 1rem;
          }

          .lock-icon svg {
            width: 36px;
            height: 36px;
          }

          .lock-text {
            font-size: 0.875rem;
            padding: 0 0.5rem;
            line-height: 1.4;
          }

          .aula-form {
            padding: 1.25rem;
            gap: 1rem;
          }

          .form-group {
            gap: 0.5rem;
          }

          .form-group label {
            font-size: 0.85rem;
          }

          .form-group input {
            padding: 0.875rem;
            font-size: 16px;
            min-height: 48px;
            -webkit-appearance: none;
            border-radius: var(--radius);
          }

          .btn-cta-lowticket {
            padding: 1rem 1.25rem;
            font-size: 0.95rem;
            min-height: 48px;
            touch-action: manipulation;
            -webkit-tap-highlight-color: rgba(34, 197, 94, 0.2);
          }

          .discord-button-container {
            margin-top: 1.25rem;
          }

          .btn-discord {
            padding: 0.9rem 1.5rem;
            font-size: 0.95rem;
            width: 100%;
          }

          .navbar-aula {
            padding: 0.75rem 0;
          }

          .navbar-aula .logo {
            font-size: 1.1rem;
          }

          .navbar-aula .btn-nav-disabled {
            font-size: 0.85rem;
            padding: 0.5rem 0.875rem;
          }
        }
      `}</style>
      </section>
      <Footer />
      <style>{`
        .navbar-aula {
          position: fixed;
          top: 0;
          left: 0;
          width: 100%;
          z-index: 1000;
          background: rgba(13, 13, 13, 0.8);
          backdrop-filter: blur(10px);
          border-bottom: 1px solid rgba(255, 255, 255, 0.1);
          padding: 1rem 0;
        }
        .navbar-aula .nav-content {
          display: flex;
          justify-content: space-between;
          align-items: center;
        }
        .navbar-aula .logo {
          display: flex;
          align-items: center;
          gap: 0.5rem;
          font-weight: 800;
          font-size: 1.25rem;
          letter-spacing: -0.5px;
          color: var(--text-main);
          text-decoration: none;
        }
        .navbar-aula .text-highlight {
          color: var(--primary);
        }
        .navbar-aula .btn-nav-disabled {
          font-size: 0.9rem;
          padding: 0.5rem 1rem;
          border: 1px solid rgba(255, 255, 255, 0.2);
          border-radius: 20px;
          color: rgba(255, 255, 255, 0.5);
          cursor: default;
          user-select: none;
          pointer-events: none;
        }
      `}</style>
    </>
  );
};

export default Aula;
