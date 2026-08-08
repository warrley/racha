export interface Player {
    id: string;
    name: string;
    nickname: string | null;
    email?: string;
    position: 'ZAGUEIRO' | 'MEIO' | 'ATACANTE';
    averageGrade?: number | null;
    avatarIndex: number;
    isAdmin: boolean;
    pixKey?: string | null;

    totalSessions?: number;
    totalGoals?: number;
    totalWins?: number;
    totalLosses?: number;
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

export interface RoundSubstitution {
    id: number;
    roundId: string;
    teamId: string;
    outPlayerId: string;
    inPlayerId: string;
    outPlayer?: Player;
    inPlayer?: Player;
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
    substitutions?: RoundSubstitution[];
}

export interface SessionParticipant {
    id: string;
    sessionId: string;
    userId: string;
    status: 'CONFIRMED' | 'WAITING_LIST';
    sessionGrade?: number | null;
    isPaid: boolean;
    createdAt: string;
    user?: Player;
}

export interface SessionPixInfo {
    key: string;
    price: number;
    payload: string;
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
    finishedAt?: string | null;
    votingTimeoutHours?: number;
    ratingsConsolidated?: boolean;
    pixKey?: string | null;
    price?: number | null;
    pix?: SessionPixInfo | null;

    createdBy?: Player;
    mvpPlayer?: Player;
    topScorerPlayer?: Player;
    teams?: Team[];
    rounds?: Round[];
    participants?: SessionParticipant[];
    _count?: {
        rounds?: number;
        grades?: number;
    };
}

export interface SessionHistoryItem {
    sessionId: string;
    sessionTitle: string;
    sessionDate: string;
    teamName: string;
    teamColor: string;
}

export interface RatingPlayer {
    id: string;
    name: string;
    nickname: string | null;
    position: string;
    avatarIndex: number;
    currentGrade: number | null;
}

export interface RatingsStatus {
    isVotingOpen: boolean;
    isConsolidated: boolean;
    players: RatingPlayer[];
    hasVoted: boolean;
    totalVotes: number;
    totalPlayers: number;
}
