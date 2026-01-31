# Configuração do Dashboard

## Configuração do Supabase

1. Crie uma conta no [Supabase](https://supabase.com) (se ainda não tiver)
2. Crie um novo projeto
3. Vá em **Settings** > **API** e copie:
   - **Project URL** (VITE_SUPABASE_URL)
   - **anon public** key (VITE_SUPABASE_ANON_KEY)

4. Crie um arquivo `.env` na raiz do projeto `Site/` com:

```
VITE_SUPABASE_URL=sua-url-do-supabase
VITE_SUPABASE_ANON_KEY=sua-chave-anon
```

## Criar Usuário de Teste

1. No painel do Supabase, vá em **Authentication** > **Users**
2. Clique em **Add user** > **Create new user**
3. Preencha:
   - Email: `teste@exemplo.com` (ou qualquer email)
   - Password: `senha123` (ou qualquer senha)
   - **Desmarque** "Auto Confirm User" se aparecer (ou marque, dependendo da configuração)

4. Use essas credenciais para fazer login no dashboard em `/dashboard`

## Executar o Projeto

```bash
cd Site
npm run dev
```

Acesse `http://localhost:5173/dashboard` para ver a tela de login.

## Estrutura Criada

- `/dashboard` - Rota do dashboard com autenticação
- `src/components/Login.jsx` - Componente de login
- `src/components/Dashboard.jsx` - Componente do dashboard
- `src/lib/supabase.js` - Configuração do cliente Supabase





