import {
    CanActivate,
    ExecutionContext,
    Injectable,
    UnauthorizedException,
} from "@nestjs/common";
import { AuthService, TokenType } from "../auth.service";
import { UsersService } from "src/users/users.service";

@Injectable()
export class TokenGuard implements CanActivate {
    constructor(
        private readonly authService: AuthService,
        private readonly usersService: UsersService,
    ) {}

    public async canActivate(context: ExecutionContext): Promise<boolean> {
        const request = context.switchToHttp().getRequest();
        const headerAuthField = request.headers.authorization;

        const token = await this.authService.extractToken(headerAuthField);
        const decodedToken = await this.authService.verifyToken(token);

        const user = await this.usersService.readUserByUserId(
            decodedToken.userId,
        );

        request.user = user;
        request.token = token;
        request.tokenType = decodedToken.type;

        return true;
    }
}

@Injectable()
export class AccessTokenGuard extends TokenGuard {
    public async canActivate(context: ExecutionContext): Promise<boolean> {
        await super.canActivate(context);

        const request = context.switchToHttp().getRequest();
        if (request.tokenType !== TokenType.ACCESS)
            throw new UnauthorizedException("ACCESS TOKEN 이 아닙니다");

        return true;
    }
}

@Injectable()
export class RefreshTokenGurad extends TokenGuard {
    public async canActivate(context: ExecutionContext): Promise<boolean> {
        await super.canActivate(context);

        const request = context.switchToHttp().getRequest();
        if (request.tokenType !== TokenType.REFRESH)
            throw new UnauthorizedException("REFRESH TOKEN 이 아닙니다");

        return true;
    }
}
