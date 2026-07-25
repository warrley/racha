import { Response } from "express";
import { AuthRequest } from "../middleware/privateRoute";
import { submitRatingsSchema } from "../schemas/rating";
import { findById } from "../services/player";
import {
    getSessionRatingsStatus,
    submitSessionRatings,
    consolidateSessionRatings
} from "../services/rating";

export const getRatingsStatus = async (req: AuthRequest, res: Response) => {
    const sessionId = req.params.id as string;
    const userId = req.userId as string;

    try {
        const status = await getSessionRatingsStatus(sessionId, userId);
        res.json({ error: null, ...status });
    } catch (err: any) {
        res.status(400).json({ error: err.message });
    }
};

export const submitRatings = async (req: AuthRequest, res: Response) => {
    const sessionId = req.params.id as string;
    const evaluatorId = req.userId as string;

    const safeData = submitRatingsSchema.safeParse(req.body);
    if (!safeData.success) {
        res.status(400).json({ error: safeData.error.flatten().fieldErrors });
        return;
    }

    try {
        const result = await submitSessionRatings(sessionId, evaluatorId, safeData.data.ratings);
        res.json({ error: null, ...result });
    } catch (err: any) {
        res.status(400).json({ error: err.message });
    }
};

export const consolidateRatings = async (req: AuthRequest, res: Response) => {
    const sessionId = req.params.id as string;

    const user = await findById(req.userId as string);
    if (!user?.isAdmin) {
        res.status(403).json({ error: "Apenas administradores podem encerrar a votação" });
        return;
    }

    try {
        const result = await consolidateSessionRatings(sessionId);
        res.json({ error: null, ...result });
    } catch (err: any) {
        res.status(400).json({ error: err.message });
    }
};
