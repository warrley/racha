type PlayerForDraw = {
    id: string;
    rating: number;
    averageGrade: number | null;
};

type DrawnTeam = {
    name: string;
    color: string;
    players: PlayerForDraw[];
    totalRating: number;
};

export const drawTeams = (players: PlayerForDraw[]): DrawnTeam[] => {
    const validCounts = [15, 20];
    if (!validCounts.includes(players.length)) {
        throw new Error("O sorteio exige 15 (3 times) ou 20 (4 times) jogadores");
    };

    const numTeams = players.length / 5;

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

    for (let i = 0; i < sorted.length; i++) {
        const round = Math.floor(i / numTeams);
        const posInRound = i % numTeams;
        const teamIndex = round % 2 === 0
            ? posInRound
            : numTeams - 1 - posInRound;

        teams[teamIndex].players.push(sorted[i]);
        teams[teamIndex].totalRating += sorted[i].averageGrade ?? NEUTRAL_GRADE;
    };

    // Arredondar totalRating para 1 casa decimal
    for (const team of teams) {
        team.totalRating = Math.round(team.totalRating * 10) / 10;
    }

    return teams;
};

