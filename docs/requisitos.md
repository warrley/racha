# Documento de Requisitos - Racha (Metanol FC)

Este documento descreve os requisitos funcionais e não-funcionais para o sistema de gerenciamento de rachas de futebol amador, contemplando o fluxo de autenticação, controle de presença, pagamentos via Pix, avaliações pós-jogo, rankings e substituições temporárias.

---

## 1. Escopo e Arquitetura de Referência

* **Frontend:** Next.js (React) com Tailwind CSS ou CSS Customizado.
* **Backend:** Node.js com Express e Prisma ORM.
* **Banco de Dados & Auth:** PostgreSQL hospedado no Supabase com **Supabase Auth** para gerenciamento de identidades e login social (Google).

---

## 2. Requisitos Funcionais (RF)

### 2.1 Autenticação e Usuários
| ID | Descrição | Prioridade | Status |
| :--- | :--- | :--- | :--- |
| **RF01** | O sistema deve permitir que novos usuários se cadastrem utilizando E-mail e Senha ou autenticação social com o **Google** (via Supabase Auth). | Alta | Pendente |
| **RF02** | O sistema deve sincronizar automaticamente os dados do usuário autenticado no Supabase com a tabela interna de usuários (`users`) no banco de dados local. | Alta | Pendente |
| **RF03** | O sistema deve diferenciar perfis de usuário comuns de perfis de Administrador (`isAdmin`). | Alta | Pendente |

### 2.2 Gerenciamento de Eventos e Presença
| ID | Descrição | Prioridade | Status |
| :--- | :--- | :--- | :--- |
| **RF04** | O administrador deve poder criar uma nova sessão de jogo (evento) contendo título, data e limite máximo de participantes (padrão 15, configurável para 20 ou outro valor). | Alta | Pendente |
| **RF05** | O jogador logado deve poder confirmar ou cancelar sua presença em uma sessão aberta (`status: OPEN`). | Alta | Pendente |
| **RF06** | Se a quantidade de jogadores confirmados atingir o limite configurado do evento, novos jogadores que tentarem confirmar presença devem entrar automaticamente em uma **Fila de Espera (Suplentes)**. | Média | Pendente |
| **RF07** | Caso um jogador confirmado cancele sua presença, o primeiro da Fila de Espera deve ser promovido a confirmado de forma automática. | Média | Pendente |

### 2.3 Pagamento Pix Simples
| ID | Descrição | Prioridade | Status |
| :--- | :--- | :--- | :--- |
| **RF08** | O administrador deve poder cadastrar sua chave Pix nas configurações globais ou específicas do evento. | Alta | Pendente |
| **RF09** | O sistema deve exibir para o jogador confirmado um código **Pix Copia e Cola** (BR Code) e um **QR Code estático** com o valor individual a ser pago (Valor Total / Número de Confirmados ou valor fixo configurado). | Alta | Pendente |
| **RF10** | O administrador deve ter um painel para marcar manualmente o status de pagamento de cada jogador ("Pendente" ou "Pago"). | Alta | Pendente |

### 2.4 Avaliação Pós-Jogo e Notas
| ID | Descrição | Prioridade | Status |
| :--- | :--- | :--- | :--- |
| **RF11** | Quando o status da sessão for alterado para finalizado (`FINISHED`), o sistema deve abrir uma janela de votação para avaliações. | Alta | Pendente |
| **RF12** | Cada jogador que participou ativamente da sessão deve poder avaliar a performance de outros participantes com notas de **1 a 10**. | Alta | Pendente |
| **RF13** | O sistema deve calcular a média aritmética das notas recebidas por cada jogador naquela sessão. | Alta | Pendente |

### 2.5 Rankings e Balanceamento
| ID | Descrição | Prioridade | Status |
| :--- | :--- | :--- | :--- |
| **RF14** | O sistema deve disponibilizar um **Ranking de Notas**, ordenado pela média acumulada histórica de todas as avaliações de cada jogador. | Alta | Pendente |
| **RF15** | O algoritmo de sorteio e balanceamento de times (`executeDraw`) deve passar a usar a **Nota Média** das avaliações do jogador em vez do rating Elo clássico. | Alta | Pendente |

### 2.6 Substituições Temporárias por Rodada
| ID | Descrição | Prioridade | Status |
| :--- | :--- | :--- | :--- |
| **RF16** | O administrador deve poder realizar uma substituição de jogador durante uma rodada ativa (`Round` de uma sessão `IN_PROGRESS`). | Alta | Pendente |
| **RF17** | O sistema deve registrar que um jogador substituto jogou aquela rodada específica no lugar de outro jogador, aplicando os gols marcados e os resultados da rodada para as estatísticas corretas dos jogadores. | Média | Pendente |
| **RF18** | Após o término da rodada atual, a escalação do time deve ser restaurada automaticamente para a formação original para a próxima rodada. | Alta | Pendente |

### 2.7 Cronômetro Flutuante (Match Screen)
| ID | Descrição | Prioridade | Status |
| :--- | :--- | :--- | :--- |
| **RF19** | Ao rolar a tela da partida (Match Screen) para baixo e o painel do cronômetro principal do topo sumir da visão, um cronômetro flutuante/adesivo (Sticky/Floating Timer) deve aparecer de forma fluida. | Média | Pendente |
| **RF20** | O cronômetro flutuante deve exibir o tempo restante da partida de forma legível e disponibilizar controles rápidos (Play/Pause e Reset) para que o administrador possa controlar o tempo sem precisar subir a tela. | Média | Pendente |

---

## 3. Requisitos Não-Funcionais (RNF)

| ID | Descrição | Prioridade |
| :--- | :--- | :--- |
| **RNF01** | **Segurança:** A comunicação entre o frontend e backend deve ser feita de forma segura e autenticada via JWT do Supabase. | Alta |
| **RNF02** | **Desempenho:** O algoritmo de sorteio de times com base na Nota Média deve ser executado no backend em menos de 2 segundos. | Média |
| **RNF03** | **Portabilidade:** A interface de confirmação de presença e pagamento via Pix deve ser 100% responsiva (Mobile Friendly), otimizada para smartphones. | Alta |
| **RNF04** | **Usabilidade:** O fechamento de janelas de votação de notas deve possuir um timeout automático configurável (ex: 24 horas após o racha). | Média |
