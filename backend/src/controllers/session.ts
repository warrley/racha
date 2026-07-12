import { Response } from "express";
import { AuthRequest } from "../middleware/privateRoute";
import { createSessionSchema, drawTeamsSchema } from "../schemas/session";
import { createSession, executeDraw, findSessionById, findAllSessions, closeSession, startSession, joinSession, leaveSession } from "../services/session";
import { findById } from "../services/player";

export const create = async (req: AuthRequest, res: Response) => {
    const safeData = createSessionSchema.safeParse(req.body);
    if(!safeData.success) {
        res.status(400).json({ error: safeData.error.flatten().fieldErrors });
        return;
    };

    const user = await findById(req.userId as string);
    if(!user?.isAdmin) {
        res.status(403).json({ error: "Apenas administradores podem criar sessões" });
        return;
    };

    const session = await createSession(req.userId as string, safeData.data.title, safeData.data.date, safeData.data.maxPlayers);
    res.status(201).json({ error: null, session });
};

export const getSession = async (req: AuthRequest, res: Response) => {
    const { id } = req.params;

    const session = await findSessionById(id as string);
    if(!session) {
        res.json({ error: "Sessão não encontrada" });
        return;
    };

    res.json({ error: null, session });
};

export const getSessions = async (req: AuthRequest, res: Response) => {
    const limit = parseInt(req.query.limit as string ?? "10");
    const page = parseInt(req.query.page as string ?? "0");

    const sessions = await findAllSessions(page, limit);
    res.json({ error: null, sessions, page });
};

export const draw = async (req: AuthRequest, res: Response) => {
    const { id } = req.params;

    const safeData = drawTeamsSchema.safeParse(req.body);
    if(!safeData.success) {
        res.status(400).json({ error: safeData.error.flatten().fieldErrors });
        return;
    };

    const user = await findById(req.userId as string);
    if(!user?.isAdmin) {
        res.status(403).json({ error: "Apenas administradores podem sortear times" });
        return;
    };

    try {
        const teams = await executeDraw(id as string, safeData.data.playerIds);
        res.json({ error: null, teams });
    } catch(err: any) {
        res.status(400).json({ error: err.message });
    };
};

export const start = async (req: AuthRequest, res: Response) => {
    const { id } = req.params;

    const user = await findById(req.userId as string);
    if(!user?.isAdmin) {
        res.status(403).json({ error: "Apenas administradores podem iniciar sessões" });
        return;
    };

    try {
        const session = await startSession(id as string);
        res.json({ error: null, session });
    } catch(err: any) {
        res.status(400).json({ error: err.message });
    };
};

export const close = async (req: AuthRequest, res: Response) => {
    const { id } = req.params;

    const user = await findById(req.userId as string);
    if(!user?.isAdmin) {
        res.status(403).json({ error: "Apenas administradores podem fechar sessões" });
        return;
    };

    try {
        const session = await closeSession(id as string);
        res.json({ error: null, session });
    } catch(err: any) {
        res.status(400).json({ error: err.message });
    };
};

export const join = async (req: AuthRequest, res: Response) => {
    const id = req.params.id as string;
    const userId = req.userId as string;

    try {
        const participant = await joinSession(id, userId);
        res.json({ error: null, participant });
    } catch (err: any) {
        res.status(400).json({ error: err.message });
    }
};

export const leave = async (req: AuthRequest, res: Response) => {
    const id = req.params.id as string;
    const userId = req.userId as string;

    try {
        const result = await leaveSession(id, userId);
        res.json({ error: null, result });
    } catch (err: any) {
        res.status(400).json({ error: err.message });
    }
};

export const addManual = async (req: AuthRequest, res: Response) => {
    const id = req.params.id as string;
    const { userId } = req.body;

    if (!userId) {
        res.status(400).json({ error: "ID do jogador é obrigatório" });
        return;
    }

    const requester = await findById(req.userId as string);
    if (!requester?.isAdmin) {
        res.status(403).json({ error: "Apenas administradores podem adicionar jogadores manualmente" });
        return;
    }

    try {
        const participant = await joinSession(id, userId);
        res.json({ error: null, participant });
    } catch (err: any) {
        res.status(400).json({ error: err.message });
    }
};

export const removeManual = async (req: AuthRequest, res: Response) => {
    const id = req.params.id as string;
    const userId = req.params.userId as string;

    const requester = await findById(req.userId as string);
    if (!requester?.isAdmin) {
        res.status(403).json({ error: "Apenas administradores podem remover jogadores manualmente" });
        return;
    }

    try {
        const result = await leaveSession(id, userId);
        res.json({ error: null, result });
    } catch (err: any) {
        res.status(400).json({ error: err.message });
    }
};
