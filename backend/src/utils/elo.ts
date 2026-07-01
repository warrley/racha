/**
 * Cálculo de variação de rating (Elo simplificado) para o racha.
 * 
 * - Vitória no round:  +15 pontos
 * - Derrota no round:  -10 pontos
 * - Empate que GANHOU (par/ímpar): +5 pontos
 * - Empate que PERDEU (par/ímpar): -5 pontos
 * - Cada gol marcado: +3 pontos
 * - MVP da sessão: +20 pontos bônus
 * - Rating mínimo: 0
 */

type RoundResult = {
    won: boolean;
    isDraw: boolean;
};

type PlayerEloInput = {
    currentRating: number;
    roundResults: RoundResult[];
    goalsScored: number;
    isMvp: boolean;
};

export const calculateNewRating = (input: PlayerEloInput): number => {
    let delta = 0;

    for(const round of input.roundResults) {
        if(round.isDraw) {
            // Empate resolvido no par/ímpar
            delta += round.won ? 5 : -5;
        } else {
            // Vitória ou derrota normal
            delta += round.won ? 15 : -10;
        };
    };

    // Bônus por gols
    delta += input.goalsScored * 3;

    // Bônus MVP
    if(input.isMvp) {
        delta += 20;
    };

    // Rating mínimo é 0
    return Math.max(0, input.currentRating + delta);
};
