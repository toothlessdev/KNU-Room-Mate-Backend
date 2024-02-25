import { TokenType } from "src/auth/auth.service";

export const JWT_SECRET = "qwer1234";

export const JWT_EXPIRES_IN = (type: TokenType) => {
    if (type === TokenType.ACCESS) return 300;
    if (type === TokenType.REFRESH) return 3600;
};

export const HASH_ROUNDS = 10;
