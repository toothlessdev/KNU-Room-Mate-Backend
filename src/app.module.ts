import { Module } from "@nestjs/common";
import { AppController } from "./app.controller";
import { AppService } from "./app.service";
import { FormModule } from "./form/form.module";
import { AuthModule } from "./auth/auth.module";
import { UsersModule } from "./users/users.module";

import { TypeOrmRootModule } from "./config/database.config";

@Module({
    imports: [TypeOrmRootModule, FormModule, AuthModule, UsersModule],
    controllers: [AppController],
    providers: [AppService],
})
export class AppModule {}
