import { CanActivate, ExecutionContext, Injectable } from "@nestjs/common";
import { UsersService } from "src/users/users.service";

@Injectable()
export class FormAccessGuard implements CanActivate {
    constructor(private readonly userService: UsersService) {}

    public async canActivate(context: ExecutionContext): Promise<boolean> {
        const request = context.switchToHttp().getRequest();
        request.user;

        return true;
    }
}
