# Como ver as alterações no localhost

As alterações **estão nos arquivos** desta pasta. Se o localhost não mostra nada mudando, o servidor provavelmente está rodando **de outra pasta** ou o navegador está com cache.

---

## Passo a passo (localhost)

1. **Feche o servidor** (Ctrl+C no terminal onde está rodando `npm run dev` ou `npm run start`).

2. **Confirme a pasta:**  
   A pasta que estamos editando é a que contém:
   - `package.json`
   - pasta `src`
   - pasta `backup-copy-original`
   - arquivo `COMO-VER-A-NOVA-COPY.md` (este arquivo)  
   Caminho completo: `C:\Users\LB-GROUP\Downloads\comunidadedaescala-main\comunidadedaescala-main`  
   (é a pasta **de dentro** — a que tem duas pastas com nome parecido, use a **interna**.)

3. **Abra o terminal nessa pasta** e rode:
   ```bash
   npm run dev
   ```
   (Se estiver na pasta errada, vai dar erro "package.json not found".)

4. Abra no navegador: **http://localhost:5173**

5. **Forçar atualização:** **Ctrl + Shift + R** (ou abra em aba anônima).

6. **Confirme que está na pasta certa:**  
   No topo da página deve aparecer uma **faixa verde** com o texto:  
   **"✓ LOCALHOST — alterações ativas (esta pasta)"**  
   - Se você **vê** essa faixa verde = o localhost está servindo **esta** pasta e as alterações estão ativas.  
   - Se você **não vê** essa faixa = o navegador está mostrando outra pasta ou cache; repita os passos 1–5 na pasta correta.

---

### Se for no **site ao vivo** (www.metafinanceira.online)

O site na internet **só muda quando você faz deploy**. As alterações estão só no seu computador até você publicar.

- Faça **commit** das alterações e **push** para o repositório (GitHub/GitLab, etc.).
- Se usar **Vercel/Netlify**, o deploy costuma ser automático após o push.  
  Depois do deploy, acesse de novo o site e use **Ctrl + Shift + R** para evitar cache.

---

## 2. Resumo

| Onde você vê | O que fazer |
|--------------|-------------|
| **localhost** | Rodar `npm run start` (ou `dev`) **de dentro da pasta** `comunidadedaescala-main`, abrir o link certo e dar **Ctrl + Shift + R**. |
| **metafinanceira.online** | Fazer **deploy** (push no Git / publicar no Vercel ou outro). |

Quando terminar de testar, você pode remover o "(nova copy)" do título no arquivo `index.html` se quiser.
