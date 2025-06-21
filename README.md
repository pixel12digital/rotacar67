# Rota67 Car - Landing Page

Esta é a landing page para o aplicativo de mobilidade urbana Rota67 Car.

## Como publicar na Vercel

Siga estes passos para hospedar seu site gratuitamente na Vercel.

### 1. Crie um repositório no GitHub

- Vá para o [GitHub](https://github.com/new) e crie um novo repositório. Pode ser público ou privado.
- **Não** inicialize o repositório com um `README` ou `.gitignore`, pois já criamos esses arquivos.

### 2. Envie seus arquivos para o GitHub

No seu terminal, execute os seguintes comandos na pasta do projeto (`C:\Sites_Projetos\RotaCar67`):

```bash
# Adicione todos os arquivos para o Git
git add .

# Crie seu primeiro "commit" (um registro das suas alterações)
git commit -m "Versão inicial da landing page"

# Adicione a URL do seu repositório do GitHub
# Substitua 'SEU-USUARIO' e 'SEU-REPOSITORIO' pelos seus dados
git remote add origin https://github.com/SEU-USUARIO/SEU-REPOSITORIO.git

# Envie o código para o GitHub
git push -u origin main
```
*Observação: Pode ser que sua branch principal se chame `master` em vez de `main`. Se for o caso, troque `main` por `master` no último comando.*

### 3. Faça o deploy na Vercel

1.  **Crie uma conta na Vercel**: Acesse [vercel.com](https://vercel.com) e crie uma conta (você pode usar sua conta do GitHub para facilitar).

2.  **Importe seu projeto**:
    *   No painel da Vercel, clique em "Add New..." -> "Project".
    *   Escolha a opção "Continue with GitHub" e autorize o acesso.
    *   Selecione o repositório que você acabou de criar e clique em "Import".

3.  **Configure o deploy**:
    *   A Vercel irá detectar automaticamente que é um projeto sem um framework específico (deve aparecer "Other").
    *   Não é necessário alterar nenhuma configuração.
    *   Clique em **Deploy**.

A Vercel irá construir e publicar seu site, fornecendo um link para acessá-lo. Qualquer alteração que você enviar para o GitHub (`git push`) será publicada automaticamente. 