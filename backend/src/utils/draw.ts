type PlayerForDraw = {
    id: string;
    averageGrade: number | null;
};

type DrawnTeam = {
    name: string;
    color: string;
    players: PlayerForDraw[];
    totalRating: number;
};

// Times sempre têm 5 jogadores, exceto quando o total de confirmados não é
// múltiplo de 5: nesse caso forma-se o máximo de times cheios (5) e um time
// remanescente menor com o restante, que é completado a cada rodada por
// reforços emprestados do time que folga (ver RoundSubstitution/registerRound).
const MIN_PLAYERS = 10;
const MAX_PLAYERS = 20;
const MAX_TEAMS = 4;

export const drawTeams = (players: PlayerForDraw[]): DrawnTeam[] => {
    const n = players.length;
    if (n < MIN_PLAYERS || n > MAX_PLAYERS) {
        throw new Error(`O sorteio exige entre ${MIN_PLAYERS} e ${MAX_PLAYERS} jogadores confirmados`);
    };

    const numFullTeams = Math.floor(n / 5);
    const remainder = n % 5;
    const numTeams = remainder > 0 ? numFullTeams + 1 : numFullTeams;
    if (numTeams > MAX_TEAMS) {
        throw new Error(`Não é possível formar mais de ${MAX_TEAMS} times com ${n} jogadores confirmados`);
    };
    const targetSizes = [...Array(numFullTeams).fill(5), ...(remainder > 0 ? [remainder] : [])];

    // Jogador sem nota ainda começa com 2.5 (ponto neutro da escala 1-5),
    // mesmo valor usado como ponto de partida no cálculo de averageGrade
    const NEUTRAL_GRADE = 2.5;

    // Ordenar por averageGrade (maior primeiro), com um pequeno embaralhamento
    // aleatório para não gerar sempre os mesmos times quando as notas não
    // mudam entre sorteios — jogadores com notas próximas podem trocar de
    // posição, mas o equilíbrio geral por nível continua respeitado.
    const JITTER = 0.4;
    const sorted = [...players]
        .map(p => ({ player: p, sortGrade: (p.averageGrade ?? NEUTRAL_GRADE) + (Math.random() - 0.5) * JITTER }))
        .sort((a, b) => b.sortGrade - a.sortGrade)
        .map(({ player }) => player);

    const teamDefs = [
        { name: "Time A", color: "RED" },
        { name: "Time B", color: "BLUE" },
        { name: "Time C", color: "GREEN" },
        { name: "Time D", color: "YELLOW" },
    ];

    const teams: DrawnTeam[] = teamDefs.slice(0, numTeams).map(t => ({
        ...t,
        players: [],
        totalRating: 0
    }));

    // Serpentina que respeita a capacidade de cada time: quando um time atinge
    // seu targetSize ele sai da rotação, então o time remanescente (menor)
    // para de receber jogadores assim que se completa, sem afetar o
    // equilíbrio dos times cheios (equivalente à serpentina simples quando
    // todos os times têm o mesmo tamanho).
    let sortedIndex = 0;
    let remainingTeamIndexes = teams.map((_, idx) => idx);
    let forward = true;
    while (sortedIndex < sorted.length) {
        const order = forward ? remainingTeamIndexes : [...remainingTeamIndexes].reverse();
        for (const teamIndex of order) {
            if (sortedIndex >= sorted.length) break;
            teams[teamIndex].players.push(sorted[sortedIndex]);
            teams[teamIndex].totalRating += sorted[sortedIndex].averageGrade ?? NEUTRAL_GRADE;
            sortedIndex++;
        };
        remainingTeamIndexes = remainingTeamIndexes.filter(idx => teams[idx].players.length < targetSizes[idx]);
        forward = !forward;
    };

    // Arredondar totalRating para 1 casa decimal
    for (const team of teams) {
        team.totalRating = Math.round(team.totalRating * 10) / 10;
    }

    return teams;
};

