import { Module } from "@nestjs/common";
import { FormService } from "./form.service";
import { FormController } from "./form.controller";
import { TypeOrmModule } from "@nestjs/typeorm";
import { FormModel } from "src/utils/models/form.model";
import { AuthModule } from "src/auth/auth.module";
import { UsersModule } from "src/users/users.module";

@Module({
    imports: [TypeOrmModule.forFeature([FormModel]), AuthModule, UsersModule],
    controllers: [FormController],
    providers: [FormService],
})
export class FormModule {}
