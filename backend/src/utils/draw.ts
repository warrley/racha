type PlayerForDraw = {
    id: string;
    rating: number;
};

type DrawnTeam = {
    name: string;
    color: string;
    players: PlayerForDraw[];
    totalRating: number;
};

export const drawTeams = (players: PlayerForDraw[]): DrawnTeam[] => {
    if (players.length !== 15) {
        throw new Error("O sorteio exige exatamente 15 jogadores");
    };

    const sorted = [...players].sort((a, b) => b.rating - a.rating);

    const teams: DrawnTeam[] = [
        { name: "Time A", color: "RED", players: [], totalRating: 0 },
        { name: "Time B", color: "BLUE", players: [], totalRating: 0 },
        { name: "Time C", color: "GREEN", players: [], totalRating: 0 },
    ];

    for (let i = 0; i < sorted.length; i++) {
        const round = Math.floor(i / 3);
        const posInRound = i % 3;
        const teamIndex = round % 2 === 0
            ? posInRound
            : 2 - posInRound;

        teams[teamIndex].players.push(sorted[i]);
        teams[teamIndex].totalRating += sorted[i].rating;
    };

    return teams;
};
