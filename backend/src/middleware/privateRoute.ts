import { NextFunction, Request, Response } from "express";
import { verifyToken } from "../utils/jwt";

export interface AuthRequest extends Request {
    userId?: string;
};

type payloadType = {
    iat: number;
    exp: number;
    userId: string;
}

export const privateRoute = async (req: AuthRequest, res: Response, next: NextFunction) => {
    const token =  req.headers.authorization?.split("Bearer ")[1];
    if(!token) {
        res.status(401).json({ error: "Token not provided" });
        return;
    };

    const result = await verifyToken(token);
    if(!result.valid) {
        res.status(401).json({ error: "Access denied" });
        return;
    }

    req.userId = (result.payload as payloadType).userId;
    next();
};
