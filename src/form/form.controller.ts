import {
    Body,
    Controller,
    Get,
    Param,
    Patch,
    Post,
    UseGuards,
} from "@nestjs/common";
import { FormService } from "./form.service";
import { CreateFormDto } from "./dto/create-form.dto";
import { AccessTokenGuard } from "src/auth/guard/token.guard";
import { User } from "src/users/decorators/user.decorator";
import { UserModel } from "src/users/entities/user.entity";
import { FormAccessGuard } from "./guard/form.guard";

@Controller("forms")
export class FormController {
    constructor(private readonly formService: FormService) {}

    @Get()
    public readAllForms() {
        return this.formService.readAllForms();
    }

    @Get(":id")
    public readFormById(@Param("id") id: string) {
        return this.formService.readFormById(Number(id));
    }

    @Post()
    @UseGuards(AccessTokenGuard)
    public createForm(
        @User() user: UserModel,
        @Body() createFormDto: CreateFormDto,
    ) {
        return this.formService.createForm(user, createFormDto);
    }

    @Patch()
    @UseGuards(AccessTokenGuard)
    @UseGuards(FormAccessGuard)
    public updateForm() {}
}
