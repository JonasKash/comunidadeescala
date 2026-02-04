/**
 * Envia webhook do CTA da página principal (com UTMs) e dispara pixels no clique.
 * Chamado quando o usuário clica em qualquer CTA da home.
 * Dispara: webhook + InitiateCheckout + Purchase (antes do carregamento do dashboard).
 */
import { getStoredUTMParams, getUTMParams } from './utm';

const WEBHOOK_URL = 'https://wbn.araxa.app/webhook/receive-low-app';

const PIXEL_PARAMS = {
  content_name: 'Comunidade da Escala',
  content_category: 'Comunidade',
  currency: 'BRL',
  value: 47.0,
};

export const sendCtaWebhook = () => {
  if (typeof window === 'undefined') return;

  const eventId = `cta_${Date.now()}_${Math.random().toString(36).substring(2)}`;
  const storedUTMs = getStoredUTMParams();
  const currentUTMs = getUTMParams();
  const utmParams = { ...storedUTMs, ...currentUTMs };

  const payload = {
    nome: '',
    telefone: '',
    event_id: eventId,
    page: 'cta',
    ...utmParams,
  };

  fetch(WEBHOOK_URL, {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify(payload),
  }).catch((err) => console.error('Erro ao enviar webhook do CTA:', err));

  // Inicialização de compra + Finalização de compra no clique (antes de navegar)
  try {
    if (window.fbq) {
      window.fbq('track', 'InitiateCheckout', {
        ...PIXEL_PARAMS,
        event_id: eventId,
      });
      window.fbq('track', 'Purchase', {
        ...PIXEL_PARAMS,
        event_id: eventId,
      });
    }
  } catch (e) {
    console.error('Erro ao disparar pixel do CTA:', e);
  }
};
