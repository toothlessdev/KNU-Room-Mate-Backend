import { Body, Controller, Get, Param, Post, UseGuards } from "@nestjs/common";
import { FormService } from "./form.service";
import { CreateFormDto } from "./dto/create-form.dto";
import { AccessTokenGuard } from "src/auth/guard/token.guard";
import { User } from "src/decorators/user.decorator";
import { UserModel } from "src/models/user.model";

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
}
