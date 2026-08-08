# Regras de Negócio - Racha (Metanol FC)

Este documento detalha as lógicas internas do sistema, as fórmulas de cálculo e os fluxos de negócios específicos que guiam o desenvolvimento das funcionalidades do aplicativo.

---

## 1. Sistema de Notas e Avaliações

O sistema adota uma nota média baseada nas avaliações pós-jogo enviadas pelos próprios jogadores, substituindo a dinâmica de pontos de Elo.

### 1.1 Fluxo de Avaliação
1.  **Abertura da Janela:** Quando o administrador encerra a sessão (`status: FINISHED`), a janela de votação é aberta automaticamente por um período padrão de **24 horas**.
2.  **Quem pode votar:** Apenas jogadores que foram vinculados a algum time (`TeamPlayer`) na sessão finalizada.
3.  **Quem pode ser votado:** Todos os outros jogadores participantes da sessão, exceto o próprio avaliador. O envio só é aceito quando o avaliador votou em **todos** os demais participantes (não é permitido enviar avaliação parcial).
4.  **Entrada do voto (Pior / Igual / Melhor):** para cada jogador avaliado, o avaliador escolhe uma de três opções comparando o desempenho dele na partida com o restante do grupo — sem digitar nota nenhuma. Isso é enviado e armazenado como um voto inteiro em `SessionGrade.grade`:
    *   **Pior:** `-1`
    *   **Igual:** `0`
    *   **Melhor:** `+1`
5.  **Escala da nota final (`averageGrade`):** **1 a 5**.

### 1.2 Cálculo da Nota (ajuste incremental suave)
Ao encerrar a janela de votação (`consolidateSessionRatings`), para cada jogador que recebeu ao menos um voto nesta sessão:

1.  **Voto médio da sessão ($\Delta_{voto}$):** média aritmética simples dos votos (-1/0/+1) recebidos nesta sessão.
2.  **Bônus de aproveitamento ($B_{vitorias}$):** baseado nas rodadas que o jogador **efetivamente jogou** nesta sessão — não no total de rodadas da sessão. Substituições temporárias (§3) são respeitadas: uma rodada em que o jogador foi substituído não conta para ele (conta para quem entrou no lugar).
    $$B_{vitorias} = \left(\frac{\text{vitórias nas rodadas jogadas}}{\text{rodadas jogadas}} - 0.5\right) \times 0.2$$
    Se o jogador não jogou nenhuma rodada na sessão (ex.: só ficou na fila/banco), $B_{vitorias} = 0$.
3.  **Nova média histórica:** ajusta a média atual com um incremento pequeno — nunca substitui/recalcula do zero, para não mudar a nota bruscamente numa única sessão:
    $$N_{geral}' = \text{clamp}\left(N_{geral} + 0{,}15 \times \Delta_{voto} + B_{vitorias},\ 1,\ 5\right)$$
    Jogadores sem `averageGrade` ainda (nunca avaliados) partem de **2.5** (ponto neutro da escala 1-5) como valor inicial.

Esse desenho é intencional: um jogo ruim isolado move a nota poucos décimos, não pontos inteiros; uma sequência sustentada de avaliações negativas/positivas move a nota de forma gradual e crescente ao longo de várias sessões.

---

## 2. Algoritmo de Balanceamento de Times

O sorteio (`executeDraw`) distribui os jogadores participantes em 3 times (normalmente denominados Vermelho, Azul e Verde, ou Time A, B e C), buscando equilibrar a soma de habilidades.

### 2.1 Passos do Balanceamento por Nota Média
1.  **Ordenação:** Coleta-se a lista de IDs de jogadores confirmados para a sessão e busca-se suas respectivas Notas Médias (`averageGrade`). Jogador que ainda não tem nota (nunca avaliado) entra com **2.5** (ponto neutro da escala 1-5, mesmo valor usado como partida no cálculo incremental de nota — ver §1.2). A lista é ordenada do maior para o menor, com uma pequena aleatoriedade somada a cada nota apenas para fins de ordenação (± 0,2, não persistida) — isso evita que o mesmo grupo de confirmados sempre gere exatamente os mesmos times enquanto as notas não mudam, sem comprometer o equilíbrio geral por nível.
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

### 2.2 Quantidade de Confirmados Não Múltipla de 5

O sorteio aceita entre **10 e 20** jogadores confirmados. Quando o total não é múltiplo de 5, formam-se o máximo de times cheios (5 jogadores) e **um time remanescente menor** com o restante (ex.: 12 jogadores → dois times de 5 e um time de 2; 13 → dois times de 5 e um time de 3). A distribuição serpentina (§2.1.2) continua valendo para todos os times, inclusive o remanescente — ele só sai da rotação de distribuição quando atinge seu tamanho final. Não é permitido formar mais de 4 times.

O time remanescente joga suas rodadas incompleto: as vagas que faltam para chegar a 5 são preenchidas a cada rodada por jogadores emprestados do time que folga naquela rodada, usando o mesmo mecanismo de substituição temporária do §3 — não é permitido convocar jogadores fora da sessão.

---

## 3. Substituições Temporárias em Rodadas (Rounds)

Permite que o administrador do racha substitua um jogador lesionado ou ausente por outro durante o andamento de uma rodada de 7 minutos.

### 3.1 Regras de Substituição
1.  **Temporariedade:** A troca é válida **exclusivamente** para a rodada (`Round`) em que foi realizada.
2.  **Gols:** Se o jogador substituto marcar um gol na rodada, o gol é computado na tabela `goals` com o ID do jogador substituto, mas a soma de gols da rodada é computada para o time em que ele estava atuando.
3.  **Resultados da Rodada:** Para fins de vitórias e derrotas (usados para a contagem de estatísticas), o jogador substituto acumula a vitória/empate/derrota referente a essa rodada em sua ficha pessoal. O jogador original substituído não ganha nem perde pontos nessa rodada específica.
4.  **Restauração:** Ao iniciar a próxima rodada do racha, a escalação padrão do time é reestabelecida automaticamente com base na tabela `TeamPlayer`.
5.  **Reforço (time incompleto):** Quando o time sorteado tem menos de 5 jogadores (§2.2), suas vagas vazias são preenchidas por jogadores emprestados do time que folga na rodada, usando o mesmo registro `RoundSubstitution`, porém com `outPlayerId` nulo — não há jogador "substituído", apenas um reforço adicionado à escalação efetiva daquela rodada. Um time não pode ultrapassar 5 jogadores efetivos em uma rodada. Fora essa diferença, as regras 3.1 a 3.4 acima se aplicam normalmente ao reforço (gols, vitória/derrota da rodada, e a escalação permanente — que continua sendo o time incompleto — é restaurada automaticamente na rodada seguinte).

---

## 4. Pagamentos via Pix

Simplificação do pagamento sem intermediários financeiros de forma 100% gratuita.

1.  **Configuração da Chave:** O administrador preenche sua chave Pix (E-mail, CPF, Telefone ou Chave Aleatória) em seu perfil ou na sessão.
2.  **Exibição:** Ao confirmar presença, o sistema gera dinamicamente a string **Pix Copia e Cola** padronizada com o valor da cota e a chave Pix.
3.  **Confirmação:** O jogador faz a transferência no banco de preferência. O fluxo de baixa de pagamento é **manual**: tanto o administrador (conferindo seu extrato bancário) quanto o próprio jogador (autodeclarando) podem marcar/desmarcar "Pago" ao lado do nome — o administrador pode alterar o status de qualquer participante, o jogador só o próprio. O status de pagamento continua visível e editável após o encerramento do racha (`status: FINISHED`), mas apenas por até **24 horas** após `finishedAt` — depois disso a lista de pagamentos deixa de ser exibida na tela da sessão.

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

