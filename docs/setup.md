# Guia de Instalação e Execução - Racha (Metanol FC)

Este guia orienta o desenvolvedor sobre como configurar e rodar localmente os ambientes de **Backend (API)** e **Frontend (Web App)** do projeto.

---

## 1. Pré-requisitos
Certifique-se de ter instalado em sua máquina:
*   [Node.js](https://nodejs.org/) (Recomendado v18+)
*   [Git](https://git-scm.com/)
*   Conta no [Supabase](https://supabase.com/) (caso queira usar um banco ou autenticação própria)

---

## 2. Configurando o Backend (API)

O backend é construído em Node.js com Express, TypeScript e Prisma.

### Passo 1: Instalar dependências
Navegue até a pasta `backend/` e instale as dependências:
```bash
cd backend
npm install
```

### Passo 2: Configurar variáveis de ambiente (`.env`)
Crie ou edite o arquivo `backend/.env` na raiz da pasta `backend`:
```env
# URL de conexão com o banco de dados PostgreSQL (Supabase)
DATABASE_URL="postgresql://USUARIO:SENHA@HOST:PORTA/postgres?pgbouncer=true"
DIRECT_URL="postgresql://USUARIO:SENHA@HOST:PORTA/postgres"

# Porta onde o servidor Express irá rodar
PORT=9876

# Chave secreta para assinatura de tokens JWT locais
JWT_SECRET_KEY="metanol_key"
```

### Passo 3: Executar as Migrações do Banco de Dados
Sincronize o banco de dados Supabase com o seu esquema local do Prisma:
```bash
npx prisma db push
# ou npx prisma migrate dev (caso queira gerar histórico de migrations)
```

### Passo 4: Executar a API em modo de desenvolvimento
Para iniciar o backend em modo de desenvolvimento com hot-reload (recarregamento automático):
```bash
npm run dev
```
A API estará rodando por padrão em `http://localhost:9876`.

*   **Documentação Interativa (Swagger):** Acesse `http://localhost:9876/docs` no navegador para visualizar e testar os endpoints da API através do Swagger.

---

## 3. Configurando o Frontend (Web App)

O frontend é desenvolvido em Next.js (App Router).

### Passo 1: Instalar dependências
Navegue até a pasta `frontend/` e instale as dependências:
```bash
cd frontend
npm install
```

### Passo 2: Configurar variáveis de ambiente
Crie ou edite o arquivo `frontend/.env.local` na pasta `frontend`:
```env
# URL da API do backend
NEXT_PUBLIC_API_URL="http://localhost:9876"

# Credenciais do Supabase (para o fluxo de autenticação e login social Google)
NEXT_PUBLIC_SUPABASE_URL="https://seu-projeto-supabase.supabase.co"
NEXT_PUBLIC_SUPABASE_ANON_KEY="sua-chave-anon-key-do-supabase"
```

### Passo 3: Iniciar o servidor de desenvolvimento
Execute o comando:
```bash
npm run dev
```
O frontend Next.js estará acessível em `http://localhost:3000`.

---

## 4. Scripts e Comandos Úteis

### Prisma (Backend)
*   `npx prisma studio`: Abre uma interface web para visualizar e editar os dados do banco local/Supabase de forma fácil no navegador.
*   `npx prisma generate`: Regenera as tipagens do Prisma Client (execute sempre que alterar o `schema.prisma`).
