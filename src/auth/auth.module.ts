import { Module } from "@nestjs/common";
import { AuthService } from "./auth.service";
import { AuthController } from "./auth.controller";
import { JwtModule } from "@nestjs/jwt";
import { UsersModule } from "src/users/users.module";

const JWTModule = JwtModule.register({});

@Module({
    imports: [JWTModule, UsersModule],
    controllers: [AuthController],
    providers: [AuthService],
})
export class AuthModule {}
