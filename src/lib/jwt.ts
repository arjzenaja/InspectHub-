import jwt from "jsonwebtoken";

const JWT_SECRET = process.env.JWT_SECRET || "inspecpro-dev-secret";
const JWT_REFRESH_SECRET = process.env.JWT_REFRESH_SECRET || "inspecpro-refresh-dev-secret";

export const signAccessToken = (payload: object) =>
  jwt.sign(payload, JWT_SECRET, { expiresIn: "1h" });

export const signRefreshToken = (payload: object) =>
  jwt.sign(payload, JWT_REFRESH_SECRET, { expiresIn: "7d" });

export const verifyAccessToken = (token: string) =>
  jwt.verify(token, JWT_SECRET);

export const verifyRefreshToken = (token: string) =>
  jwt.verify(token, JWT_REFRESH_SECRET);
