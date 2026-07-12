export interface Player {
    id: string;
    name: string;
    nickname: string | null;
    position: 'ZAGUEIRO' | 'MEIO' | 'ATACANTE';
    rating: number;
    avatarIndex: number;
    isAdmin: boolean;

    totalSessions?: number;
    totalGoals?: number;
    totalWins?: number;
    winRate?: number | string;
    badges?: Badge[];
    rank?: number;
    isOnFire?: boolean;
}

export interface Badge {
    id: number;
    type: 'ARTILHEIRO' | 'MVP' | 'ON_FIRE' | 'VETERANO' | 'AZARADO' | 'GOLEADOR';
    playerId: string;
    sessionId?: string | null;
    earnedAt: string;
}

export interface TeamPlayer {
    id: number;
    teamId: string;
    playerId: string;
    player: Player;
}

export interface Team {
    id: string;
    sessionId: string;
    name: string;
    color: string;
    totalRating: number;
    players?: TeamPlayer[];
}

export interface Goal {
    id: number;
    roundId: string;
    playerId: string;
    minute: number | null;
    player?: Player;
}

export interface Round {
    id: string;
    sessionId: string;
    roundNumber: number;
    homeTeamId: string;
    awayTeamId: string;
    homeScore: number;
    awayScore: number;
    winnerTeamId: string | null;
    isDraw: boolean;
    homeTeam?: Team;
    awayTeam?: Team;
    winnerTeam?: Team;
    goals?: Goal[];
}

export interface SessionParticipant {
    id: string;
    sessionId: string;
    userId: string;
    status: 'CONFIRMED' | 'WAITING_LIST';
    createdAt: string;
    user?: Player;
}

export interface Session {
    id: string;
    title: string | null;
    date: string;
    status: 'OPEN' | 'IN_PROGRESS' | 'FINISHED';
    maxPlayers: number;
    createdById: string;
    mvpPlayerId: string | null;
    topScorerPlayerId: string | null;

    createdBy?: Player;
    mvpPlayer?: Player;
    topScorerPlayer?: Player;
    teams?: Team[];
    rounds?: Round[];
    participants?: SessionParticipant[];
    _count?: {
        rounds?: number;
    };
}

export interface SessionHistoryItem {
    sessionId: string;
    sessionTitle: string;
    sessionDate: string;
    teamName: string;
    teamColor: string;
}
