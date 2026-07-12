# Regras de Negócio - Racha (Metanol FC)

Este documento detalha as lógicas internas do sistema, as fórmulas de cálculo e os fluxos de negócios específicos que guiam o desenvolvimento das funcionalidades do aplicativo.

---

## 1. Sistema de Notas e Avaliações

O sistema adota uma nota média baseada nas avaliações pós-jogo enviadas pelos próprios jogadores, substituindo a dinâmica de pontos de Elo.

### 1.1 Fluxo de Avaliação
1.  **Abertura da Janela:** Quando o administrador encerra a sessão (`status: FINISHED`), a janela de votação é aberta automaticamente por um período padrão de **24 horas**.
2.  **Quem pode votar:** Apenas jogadores que foram vinculados a algum time (`TeamPlayer`) na sessão finalizada.
3.  **Quem pode ser votado:** Todos os outros jogadores participantes da sessão, exceto o próprio avaliador.
4.  **Escala de Nota:** Valores inteiros de **1 a 10**.

### 1.2 Cálculo da Média de Nota
*   **Nota da Sessão ($N_s$):** Média aritmética simples de todas as notas recebidas pelo jogador de outros jogadores para aquela sessão específica:
    $$N_s = \frac{\sum \text{Notas Recebidas na Sessão } s}{\text{Total de Avaliações Recebidas na Sessão } s}$$
*   **Média Geral Histórica ($N_{geral}$):** É a média geral de todas as sessões que o jogador já participou. Ela é atualizada no perfil do usuário (`averageNote`) assim que a janela de votações de uma sessão é fechada:
    $$N_{geral} = \frac{\sum N_s}{\text{Quantidade de Sessões Participadas}}$$

---

## 2. Algoritmo de Balanceamento de Times

O sorteio (`executeDraw`) distribui os jogadores participantes em 3 times (normalmente denominados Vermelho, Azul e Verde, ou Time A, B e C), buscando equilibrar a soma de habilidades.

### 2.1 Passos do Balanceamento por Nota Média
1.  **Ordenação:** Coleta-se a lista de IDs de jogadores confirmados para a sessão e busca-se suas respectivas Notas Médias (`averageNote`). A lista é ordenada do maior para o menor.
2.  **Distribuição em Potes (Snake Draft):**
    Para garantir times equilibrados, os jogadores são distribuídos ciclicamente (estilo serpentina):
    *   **Pote 1 (Melhores):** Jogadores de rank 1, 2, 3
    *   **Pote 2 (Intermediários):** Jogadores de rank 4, 5, 6
    *   **Pote N (etc.):**
    A distribuição direta nos times segue o padrão:
    *   **Time 1:** Jogador 1, Jogador 6, Jogador 7, ...
    *   **Time 2:** Jogador 2, Jogador 5, Jogador 8, ...
    *   **Time 3:** Jogador 3, Jogador 4, Jogador 9, ...
3.  **Validação de Goleiros:** Caso existam goleiros fixos no banco, eles devem ser previamente fixados em cada um dos times antes de rodar a distribuição dos jogadores de linha.

---

## 3. Substituições Temporárias em Rodadas (Rounds)

Permite que o administrador do racha substitua um jogador lesionado ou ausente por outro durante o andamento de uma rodada de 7 minutos.

### 3.1 Regras de Substituição
1.  **Temporariedade:** A troca é válida **exclusivamente** para a rodada (`Round`) em que foi realizada.
2.  **Gols:** Se o jogador substituto marcar um gol na rodada, o gol é computado na tabela `goals` com o ID do jogador substituto, mas a soma de gols da rodada é computada para o time em que ele estava atuando.
3.  **Resultados da Rodada:** Para fins de vitórias e derrotas (usados para a contagem de estatísticas), o jogador substituto acumula a vitória/empate/derrota referente a essa rodada em sua ficha pessoal. O jogador original substituído não ganha nem perde pontos nessa rodada específica.
4.  **Restauração:** Ao iniciar a próxima rodada do racha, a escalação padrão do time é reestabelecida automaticamente com base na tabela `TeamPlayer`.

---

## 4. Pagamentos via Pix

Simplificação do pagamento sem intermediários financeiros de forma 100% gratuita.

1.  **Configuração da Chave:** O administrador preenche sua chave Pix (E-mail, CPF, Telefone ou Chave Aleatória) em seu perfil ou na sessão.
2.  **Exibição:** Ao confirmar presença, o sistema gera dinamicamente a string **Pix Copia e Cola** padronizada com o valor da cota e a chave Pix.
3.  **Confirmação:** O jogador faz a transferência no banco de preferência. O fluxo de baixa de pagamento é **manual**: o administrador confere seu extrato bancário e clica em "Confirmar Pagamento" ao lado do nome do jogador no painel de controle do racha.

---

## 5. Regras das Insígnias (Badges)

As insígnias são recompensas de gamificação entregues após o fechamento da sessão.

*   **MVP (Most Valuable Player):** Concedido ao jogador que obtiver a maior pontuação de rendimento na sessão. A pontuação de rendimento é dada pela fórmula:
    $$\text{Pontos de Rendimento} = (\text{Vitórias na Sessão} \times 2) + \text{Gols Marcados}$$
*   **Artilheiro (Top Scorer):** Concedido ao jogador que marcar o maior número de gols na sessão (mínimo de 1 gol).
*   **Veterano:** Concedido automaticamente ao jogador ao completar 20 sessões participadas no aplicativo.
*   **Goleador:** Concedido automaticamente ao jogador ao atingir a marca histórica de 50 gols no aplicativo.

---

## 6. Comportamento do Cronômetro Flutuante

O cronômetro flutuante visa melhorar a usabilidade do gerenciamento de partida em dispositivos móveis, permitindo o acompanhamento e controle do tempo sem interromper o fluxo de registro de gols ou substituições que ocorrem mais abaixo na tela.

1.  **Visibilidade Dinâmica:** O cronômetro flutuante (widget sticky) deve aparecer de forma suave (ex: transição de opacidade/deslize) assim que o cronômetro principal (do topo da página) sair completamente do campo de visão do usuário (*viewport*) devido à rolagem para baixo. Ele deve sumir quando a seção do cronômetro principal voltar a ser visível.
2.  **Sincronização de Estado:** O tempo exibido no widget flutuante deve estar perfeitamente sincronizado com o cronômetro principal em tempo real (`timeLeft`), refletindo exatamente o mesmo estado de execução ou pausa.
3.  **Controles Minimalistas:** O widget flutuante deve oferecer botões rápidos e funcionais para Play/Pause e Reset, permitindo pausar e reiniciar o tempo sem que o administrador precise rolar toda a tela de volta ao topo.

