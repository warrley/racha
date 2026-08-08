import { Response } from "express";
import { AuthRequest } from "../middleware/privateRoute";
import { updatePlayerSchema } from "../schemas/player";
import { findById, findAll, update, verifyPassword, getPlayerStats, getPlayerHistory } from "../services/player";

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

        // pixKey só é retornada ao próprio dono do perfil (não exposta publicamente via /players/:id)
        const isOwnProfile = id === req.userId;
        const { pixKey, ...publicPlayer } = player;

        res.json({ error: null, player: { ...publicPlayer, ...(isOwnProfile ? { pixKey } : {}), ...stats } });
    } catch (e: any) {
        console.error("getPlayer error:", e);
        res.status(500).json({ error: e.message });
    }
};

export const getMe = async (req: AuthRequest, res: Response) => {
    const userId = req.userId as string;

    try {
        const player = await findById(userId);
        if (!player) {
            res.status(404).json({ error: "Jogador não encontrado" });
            return;
        };

        const stats = await getPlayerStats(userId);
        res.json({ error: null, player: { ...player, ...stats } });
    } catch (e: any) {
        console.error("getMe error:", e);
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

    if (safeData.data.pixKey !== undefined) {
        const requester = await findById(userId);
        if (!requester?.isAdmin) {
            res.status(403).json({ error: "Apenas administradores podem configurar chave Pix" });
            return;
        }
    }

    if (safeData.data.password) {
        const isValid = await verifyPassword(userId, safeData.data.currentPassword as string);
        if (!isValid) {
            res.status(400).json({ error: "Senha atual incorreta" });
            return;
        }
    }

    try {
        const { currentPassword, ...updateData } = safeData.data;
        await update(userId, updateData);
        res.json({ error: null });
    } catch (e: any) {
        if (e.code === "P2002") {
            res.status(400).json({ error: "Este e-mail já está em uso" });
            return;
        }
        console.error("updatePlayer error:", e);
        res.status(500).json({ error: e.message });
    }
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
