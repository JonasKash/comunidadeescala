/**
 * Captura e armazena parâmetros UTM da URL
 */

export const getUTMParams = () => {
  if (typeof window === 'undefined') {
    return {};
  }

  try {
    const params = new URLSearchParams(window.location.search);
    const utmParams = {};

    // Lista de parâmetros UTM comuns
    const utmKeys = [
      'utm_source',
      'utm_medium',
      'utm_campaign',
      'utm_term',
      'utm_content',
      'utm_id'
    ];

    utmKeys.forEach(key => {
      const value = params.get(key);
      if (value) {
        utmParams[key] = value;
      }
    });

    return utmParams;
  } catch (err) {
    console.error('Erro ao obter parâmetros UTM:', err);
    return {};
  }
};

/**
 * Armazena UTMs no sessionStorage para uso posterior
 */
export const storeUTMParams = () => {
  if (typeof window === 'undefined' || typeof sessionStorage === 'undefined') {
    return;
  }

  try {
    const utmParams = getUTMParams();
    
    if (Object.keys(utmParams).length > 0) {
      sessionStorage.setItem('utm_params', JSON.stringify(utmParams));
    }
  } catch (err) {
    console.error('Erro ao armazenar parâmetros UTM:', err);
  }
};

/**
 * Recupera UTMs armazenados do sessionStorage
 */
export const getStoredUTMParams = () => {
  if (typeof window === 'undefined' || typeof sessionStorage === 'undefined') {
    return {};
  }

  try {
    const stored = sessionStorage.getItem('utm_params');
    return stored ? JSON.parse(stored) : {};
  } catch (e) {
    console.error('Erro ao recuperar UTMs:', e);
    return {};
  }
};




