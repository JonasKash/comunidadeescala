import { useState } from 'react';
import { X } from 'lucide-react';
import { getStoredUTMParams, getUTMParams } from '../lib/utm';

const LeadModal = ({ isOpen, onClose, onSuccess }) => {
  const [nome, setNome] = useState('');
  const [telefone, setTelefone] = useState('');
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState('');

  const handleSubmit = async (e) => {
    e.preventDefault();
    setError('');
    setLoading(true);

    try {
      // Gera um event_id único para deduplicação e CAPI
      const eventId = `ic_${Date.now()}_${Math.random().toString(36).substring(2)}`;

      // Captura UTMs armazenados ou da URL atual
      const storedUTMs = getStoredUTMParams();
      const currentUTMs = getUTMParams();
      const utmParams = { ...storedUTMs, ...currentUTMs };

      const response = await fetch('https://wbn.araxa.app/webhook/receive-low-app', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          nome,
          telefone: telefone.trim() ? `+55 ${telefone.trim()}` : '',
          event_id: eventId,
          ...utmParams,
        }),
      });

      if (!response.ok) {
        throw new Error('Erro ao enviar dados');
      }

      // Dispara evento de inicialização de compra no Facebook Pixel
      // IMPORTANTE: Disparar APENAS após sucesso do backend
      if (window.fbq) {
        window.fbq('track', 'InitiateCheckout', {
          content_name: 'Comunidade da Escala',
          content_category: 'Comunidade',
          currency: 'BRL',
          value: 47.00,
          event_id: eventId
        });
      }

      if (onSuccess) {
        onSuccess();
      }
      
      onClose();
      window.location.href = '/dashboard';
      
      // Limpa o formulário
      setNome('');
      setTelefone('');
    } catch (err) {
      setError('Erro ao enviar. Tente novamente.');
      console.error('Erro:', err);
    } finally {
      setLoading(false);
    }
  };

  if (!isOpen) return null;

  return (
    <div className="modal-overlay" onClick={onClose}>
      <div className="modal-content" onClick={(e) => e.stopPropagation()}>
        <button className="modal-close" onClick={onClose}>
          <X size={24} />
        </button>
        
        <h2 className="modal-title">PARA PROSSEGUIR PREENCHA COM</h2>

        <form onSubmit={handleSubmit} className="modal-form">
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
            <div className="input-phone-wrap">
              <span className="input-phone-prefix" aria-hidden="true">+55 </span>
              <input
                type="tel"
                id="telefone"
                value={telefone}
                onChange={(e) => setTelefone(e.target.value)}
                required
                placeholder="(00) 90000-0000"
                disabled={loading}
                className="input-phone-field"
              />
            </div>
          </div>

          {error && <div className="form-error">{error}</div>}

          <button type="submit" className="btn-submit" disabled={loading}>
            {loading ? 'Enviando...' : 'CONTINUAR'}
          </button>
        </form>
      </div>

      <style>{`
        .modal-overlay {
          position: fixed;
          top: 0;
          left: 0;
          right: 0;
          bottom: 0;
          background: rgba(0, 0, 0, 0.8);
          display: flex;
          align-items: center;
          justify-content: center;
          z-index: 10000;
          padding: 1rem;
          animation: fadeIn 0.3s ease;
        }

        @keyframes fadeIn {
          from {
            opacity: 0;
          }
          to {
            opacity: 1;
          }
        }

        .modal-content {
          background: #0a0a0a;
          border: 1px solid rgba(255, 255, 255, 0.1);
          border-radius: 16px;
          padding: 2.5rem;
          max-width: 500px;
          width: 100%;
          position: relative;
          animation: slideUp 0.3s ease;
          box-shadow: 0 20px 60px rgba(0, 0, 0, 0.5);
        }

        @keyframes slideUp {
          from {
            transform: translateY(20px);
            opacity: 0;
          }
          to {
            transform: translateY(0);
            opacity: 1;
          }
        }

        .modal-close {
          position: absolute;
          top: 1rem;
          right: 1rem;
          background: transparent;
          border: none;
          color: #fff;
          cursor: pointer;
          padding: 0.5rem;
          display: flex;
          align-items: center;
          justify-content: center;
          border-radius: 8px;
          transition: background 0.2s;
        }

        .modal-close:hover {
          background: rgba(255, 255, 255, 0.1);
        }

        .modal-title {
          font-size: 1.8rem;
          color: #fff;
          margin: 0 0 0.5rem 0;
          text-align: center;
          font-weight: 800;
        }

        .modal-subtitle {
          color: rgba(255, 255, 255, 0.7);
          text-align: center;
          margin-bottom: 2rem;
          font-size: 1rem;
        }

        .modal-form {
          display: flex;
          flex-direction: column;
          gap: 1.5rem;
        }

        .form-group {
          display: flex;
          flex-direction: column;
          gap: 0.5rem;
        }

        .form-group label {
          color: #fff;
          font-size: 0.9rem;
          font-weight: 600;
        }

        .form-group input {
          background: rgba(255, 255, 255, 0.05);
          border: 1px solid rgba(255, 255, 255, 0.1);
          border-radius: 8px;
          padding: 1rem;
          color: #fff;
          font-size: 1rem;
          transition: all 0.2s;
        }

        .form-group input:focus {
          outline: none;
          border-color: var(--primary);
          background: rgba(255, 255, 255, 0.08);
        }

        .form-group input::placeholder {
          color: rgba(255, 255, 255, 0.4);
        }

        .input-phone-wrap {
          display: flex;
          align-items: center;
          background: rgba(255, 255, 255, 0.05);
          border: 1px solid rgba(255, 255, 255, 0.1);
          border-radius: 8px;
          overflow: hidden;
        }
        .input-phone-wrap:focus-within {
          border-color: var(--primary);
          background: rgba(255, 255, 255, 0.08);
        }
        .input-phone-prefix {
          padding: 1rem 0 1rem 1rem;
          color: rgba(255, 255, 255, 0.8);
          font-size: 1rem;
          user-select: none;
          flex-shrink: 0;
        }
        .input-phone-field {
          flex: 1;
          min-width: 0;
          border: none !important;
          background: transparent !important;
          padding: 1rem 1rem 1rem 0.25rem !important;
          box-shadow: none !important;
        }
        .input-phone-field:focus {
          outline: none;
        }
        .input-phone-wrap:has(input:disabled) {
          opacity: 0.5;
          cursor: not-allowed;
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
          border-radius: 8px;
          font-size: 0.9rem;
          text-align: center;
        }

        .btn-submit {
          background: linear-gradient(135deg, var(--primary), #00cc55);
          border: none;
          border-radius: 8px;
          padding: 1rem 2rem;
          color: #000;
          font-size: 1.1rem;
          font-weight: 800;
          cursor: pointer;
          transition: all 0.3s;
          text-transform: uppercase;
          letter-spacing: 1px;
          margin-top: 0.5rem;
        }

        .btn-submit:hover:not(:disabled) {
          transform: translateY(-2px);
          box-shadow: 0 10px 30px rgba(0, 255, 102, 0.3);
        }

        .btn-submit:disabled {
          opacity: 0.6;
          cursor: not-allowed;
        }

        @media(max-width: 600px) {
          .modal-content {
            padding: 2rem 1.5rem;
          }

          .modal-title {
            font-size: 1.5rem;
          }
        }
        
        @media(max-width: 480px) {
          .modal-overlay {
            padding: 0.5rem;
          }
          
          .modal-content {
            padding: 1.5rem 1rem;
            max-width: 100%;
            border-radius: 12px;
          }
          
          .modal-title {
            font-size: 1.3rem;
          }
          
          .modal-subtitle {
            font-size: 0.9rem;
          }
          
          .form-group input {
            padding: 0.875rem;
            font-size: 16px; /* Previne zoom no iOS */
          }
          
          .btn-submit {
            padding: 0.875rem 1.5rem;
            font-size: 1rem;
            min-height: 48px;
          }
        }
      `}</style>
    </div>
  );
};

export default LeadModal;

