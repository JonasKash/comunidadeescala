/**
 * Envia webhook do CTA da página principal (com UTMs).
 * Chamado quando o usuário clica em qualquer CTA da home.
 */
import { getStoredUTMParams, getUTMParams } from './utm';

const WEBHOOK_URL = 'https://wbn.araxa.app/webhook/receive-low-app';

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
};
