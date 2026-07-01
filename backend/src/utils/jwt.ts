import jwt from "jsonwebtoken";

const JWT_KEY = process.env.JWT_SECRET_KEY || "my-key";

export const generatedToken = async (userId: string) => {
    return await jwt.sign({ userId }, JWT_KEY, { expiresIn: "7d" });
};

export const verifyToken = async (token: string) => {
    try{
        const payload = await jwt.verify(token, JWT_KEY);
        return { valid: true, payload };
    } catch (err) {
        return { valid: false, payload: null }
    }
};
