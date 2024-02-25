import { Body, Controller, Post, Headers, UseGuards } from "@nestjs/common";
import { AuthService } from "./auth.service";
import { SignUpUserDto } from "./dto/signup-user.dto";
import { SignInUserDto } from "./dto/signin-user.dto";
// import { RefreshTokenGurad } from "./guard/token.guard";

@Controller("auth")
export class AuthController {
    constructor(private readonly authService: AuthService) {}

    @Post("/signup")
    public signUp(@Body() signUpUserDto: SignUpUserDto) {
        return this.authService.signUp(signUpUserDto);
    }

    @Post("/signin")
    public signIn(@Body() signInUserDto: SignInUserDto) {
        return this.authService.signIn(signInUserDto);
    }

    @Post("/reissue-token")
    public async reissueToken(
        @Headers("authorization") headerAuthField: string,
    ) {
        const refreshToken =
            await this.authService.extractToken(headerAuthField);
        const newAccessToken =
            await this.authService.reissueToken(refreshToken);
        return { access: newAccessToken };
    }
}
