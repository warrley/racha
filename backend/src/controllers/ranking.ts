import { Response } from "express";
import { AuthRequest } from "../middleware/privateRoute";
import { getRanking, getTopScorers } from "../services/ranking";

export const ranking = async (req: AuthRequest, res: Response) => {
    const data = await getRanking();
    res.json({ error: null, ranking: data });
};

export const topScorers = async (req: AuthRequest, res: Response) => {
    const limit = parseInt(req.query.limit as string ?? "10");
    const data = await getTopScorers(limit);
    res.json({ error: null, topScorers: data });
};
