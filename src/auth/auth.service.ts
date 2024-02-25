import {
    BadRequestException,
    Injectable,
    UnauthorizedException,
} from "@nestjs/common";
import { JwtService } from "@nestjs/jwt";
import {
    HASH_ROUNDS,
    JWT_EXPIRES_IN,
    JWT_SECRET,
} from "src/config/auth.config";
import { UsersService } from "src/users/users.service";

import * as bcrypt from "bcrypt";

import { SignInUserDto } from "./dto/signin-user.dto";
import { SignUpUserDto } from "./dto/signup-user.dto";

export enum TokenType {
    ACCESS = "ACCESS",
    REFRESH = "REFRESH",
}
export interface IToken {
    id: number;
    userId: string;
    type: TokenType;
}

@Injectable()
export class AuthService {
    constructor(
        private readonly jwtService: JwtService,
        private readonly userService: UsersService,
    ) {}

    /**
     * UserModel PK, User Login Id 받아서 JWT 토큰을 생성
     * @param id UserModel PK
     * @param userId User Login ID
     * @param tokenType TokenType.ACCESS, TokenType.REFRESH
     * @returns token
     */
    public signToken(id: number, userId: string, tokenType: TokenType) {
        const payload = {
            id: id,
            userId: userId,
            type: tokenType,
        };

        return this.jwtService.sign(payload, {
            secret: JWT_SECRET,
            expiresIn: JWT_EXPIRES_IN(tokenType),
        });
    }

    /**
     * UserModel PK, User Login Id 받아서 access, refresh 발급하는 함수
     * @param id UserModel Primary Key
     * @param userId User Login ID
     * @returns { access, refresh }
     */
    public async getTokens(id: number, userId: string) {
        return {
            access: this.signToken(id, userId, TokenType.ACCESS),
            refresh: this.signToken(id, userId, TokenType.REFRESH),
        };
    }

    /**
     * UserID, UserPW 받아서 해당 유저 검증하는 함수
     * @param userId User Login ID
     * @param userPw User Login PW
     * @returns 아이디 비밀번호 일치하는 UserModel
     */
    public async authenticateUser(userId: string, userPw: string) {
        const user = await this.userService.readUserByUserId(userId, true);

        if (!user)
            throw new UnauthorizedException("존재하지 않는 사용자입니다");

        const isPwCorrect = await bcrypt.compare(userPw, user.userPw);
        if (!isPwCorrect)
            throw new UnauthorizedException("비밀번호가 틀렸습니다");

        return user;
    }

    public async signIn(signInUserDto: SignInUserDto) {
        const user = await this.authenticateUser(
            signInUserDto.userId,
            signInUserDto.userPw,
        );
        return this.getTokens(user.id, user.userId);
    }

    public async signUp(signUpUserDto: SignUpUserDto) {
        const hashedPw = await bcrypt.hash(signUpUserDto.userPw, HASH_ROUNDS);
        const newUser = await this.userService.createUser({
            ...signUpUserDto,
            userPw: hashedPw,
        });
        return this.getTokens(newUser.id, newUser.userId);
    }

    public async extractToken(headerAuthField: string) {
        try {
            const splittedToken = headerAuthField.split(" ");
            if (splittedToken.length !== 2) throw new Error();
            return splittedToken[1];
        } catch (err) {
            throw new UnauthorizedException(
                "토큰이 없거나 잘못된 형식의 토큰입니다",
            );
        }
    }

    public async verifyToken(token: string): Promise<IToken> {
        try {
            return this.jwtService.verify(token, {
                secret: JWT_SECRET,
            });
        } catch (err) {
            throw new BadRequestException("ACCESS 토큰이 만료되었습니다");
        }
    }

    public async reissueToken(refreshToken: string) {
        const decodedToken = await this.verifyToken(refreshToken);

        if (decodedToken.type !== TokenType.REFRESH)
            throw new BadRequestException(
                "ACCESS TOKEN 재발급은 REFRESH TOKEN 으로만 가능합니다",
            );

        return this.signToken(
            decodedToken.id,
            decodedToken.userId,
            TokenType.ACCESS,
        );
    }
}
