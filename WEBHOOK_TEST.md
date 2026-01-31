# Teste do Webhook - Lead Capture

## Comando cURL para Teste (idêntico à produção)

```bash
curl -X POST https://n8n.araxa.app/webhook-test/receive-low-app \
  -H "Content-Type: application/json" \
  -d '{"nome":"João Silva","telefone":"(11) 98765-4321","utm_source":"google","utm_medium":"cpc","utm_campaign":"promocao"}'
```

## Comando cURL para Produção

```bash
curl -X POST https://wbn.araxa.app/webhook/receive-low-app \
  -H "Content-Type: application/json" \
  -d '{"nome":"João Silva","telefone":"(11) 98765-4321","utm_source":"google","utm_medium":"cpc","utm_campaign":"promocao"}'
```

## Formato do JSON Enviado

```json
{
  "nome": "João Silva",
  "telefone": "(11) 98765-4321",
  "utm_source": "google",
  "utm_medium": "cpc",
  "utm_campaign": "promocao",
  "utm_term": "apps lucrativos",
  "utm_content": "banner-topo",
  "utm_id": "12345"
}
```

**Nota:** Os parâmetros UTM são opcionais e serão incluídos apenas se estiverem presentes na URL ou armazenados no sessionStorage.

## Headers Enviados

- `Content-Type: application/json`

## Nota sobre Teste

O webhook de teste (`/webhook-test/`) precisa ser ativado no n8n antes de funcionar. Clique em "Execute workflow" no canvas do n8n para ativar o webhook de teste.

## Exemplo com arquivo JSON (Windows PowerShell)

```powershell
# Criar arquivo test.json
@'
{"nome":"João Silva","telefone":"(11) 98765-4321","utm_source":"google","utm_medium":"cpc","utm_campaign":"promocao"}
'@ | Out-File -FilePath test.json -Encoding utf8

# Executar curl
curl.exe -X POST https://n8n.araxa.app/webhook-test/receive-low-app -H "Content-Type: application/json" -d "@test.json"
```

## Como Funciona a Captura de UTM

1. **Ao carregar a página**: Os parâmetros UTM da URL são capturados e armazenados no `sessionStorage`
2. **Ao abrir o modal**: Os UTMs armazenados são recuperados
3. **Ao enviar o formulário**: Os UTMs são incluídos no JSON enviado ao webhook
4. **Parâmetros UTM suportados**:
   - `utm_source` - Origem do tráfego (ex: google, facebook)
   - `utm_medium` - Meio de marketing (ex: cpc, email, social)
   - `utm_campaign` - Nome da campanha
   - `utm_term` - Termo de busca (para anúncios)
   - `utm_content` - Conteúdo específico (ex: banner-topo)
   - `utm_id` - ID da campanha

