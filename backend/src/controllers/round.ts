import { Response } from "express";
import { AuthRequest } from "../middleware/privateRoute";
import { registerRoundSchema } from "../schemas/round";
import { registerRound, findRoundsBySession, deleteRound } from "../services/round";

export const create = async (req: AuthRequest, res: Response) => {
    const { sessionId } = req.params;

    const safeData = registerRoundSchema.safeParse(req.body);
    if (!safeData.success) {
        res.status(400).json({ error: safeData.error.flatten().fieldErrors });
        return;
    };

    try {
        const round = await registerRound(
            sessionId as string,
            safeData.data.homeTeamId,
            safeData.data.awayTeamId,
            safeData.data.homeScore,
            safeData.data.awayScore,
            safeData.data.winnerTeamId as string,
            safeData.data.isDraw,
            safeData.data.goals
        );
        res.status(201).json({ error: null, round });
    } catch (err: any) {
        res.status(400).json({ error: err.message });
    };
};

export const getRounds = async (req: AuthRequest, res: Response) => {
    const { sessionId } = req.params;

    const rounds = await findRoundsBySession(sessionId as string);
    res.json({ error: null, rounds });
};

export const removeRound = async (req: AuthRequest, res: Response) => {
    const { roundId } = req.params;
    try {
        await deleteRound(roundId as string);
        res.json({ error: null, success: true });
    } catch (err: any) {
        res.status(400).json({ error: err.message });
    }
};
