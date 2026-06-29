import { Response } from "express";
import { AuthRequest } from "../middleware/privateRoute";
import { updatePlayerSchema } from "../schemas/player";
import { findById, findAll, update, getPlayerStats, getPlayerHistory } from "../services/player";

export const getPlayers = async (req: AuthRequest, res: Response) => {
    const players = await findAll();
    res.json({ error: null, players });
};

export const getPlayer = async (req: AuthRequest, res: Response) => {
    const { id } = req.params;

    try {
        const player = await findById(id as string);
        if (!player) {
            res.status(404).json({ error: "Jogador não encontrado" });
            return;
        };

        const stats = await getPlayerStats(id as string);

        res.json({ error: null, player: { ...player, ...stats } });
    } catch (e: any) {
        console.error("getPlayer error:", e);
        res.status(500).json({ error: e.message });
    }
};

export const updatePlayer = async (req: AuthRequest, res: Response) => {
    const userId = req.userId as string;

    const safeData = updatePlayerSchema.safeParse(req.body);
    if (!safeData.success) {
        res.json({ error: safeData.error.flatten().fieldErrors });
        return;
    };

    await update(userId, safeData.data);

    res.json({ error: null });
};

export const getHistory = async (req: AuthRequest, res: Response) => {
    const { id } = req.params;
    const limit = parseInt(req.query.limit as string ?? "10");
    const page = parseInt(req.query.page as string ?? "0");

    try {
        const history = await getPlayerHistory(id as string, page, limit);

        res.json({ error: null, history, page });
    } catch (e: any) {
        console.error("getHistory error:", e);
        res.status(500).json({ error: e.message });
    }
};
