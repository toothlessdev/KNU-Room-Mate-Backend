import { TokenType } from "src/auth/auth.service";

export const JWT_SECRET = String(process.env.JWT_SECRET);

export const JWT_EXPIRES_IN = (type: TokenType) => {
    if (type === TokenType.ACCESS)
        return Number(process.env.JWT_ACCESS_EXPIRES_IN);
    if (type === TokenType.REFRESH)
        return Number(process.env.JWT_REFRESH_EXPIRES_IN);
};

export const HASH_ROUNDS = 10;
