import { Module } from "@nestjs/common";
import { AppController } from "./app.controller";
import { AppService } from "./app.service";
import { TypeOrmModule } from "@nestjs/typeorm";
import { FormModule } from "./form/form.module";
import { UserModel } from "./models/user.model";
import { FormModel } from "./models/form.model";
import { CommentModel } from "./models/comment.model";

const RootEntities = [UserModel, FormModel, CommentModel];

const TypeOrmRootModule = TypeOrmModule.forRoot({
    type: "postgres",
    host: "localhost",
    port: 5432,
    username: "knu-room-mate",
    password: "knu-room-mate",
    database: "knu-room-mate",
    synchronize: true,

    entities: RootEntities,
});

@Module({
    imports: [TypeOrmRootModule, FormModule],
    controllers: [AppController],
    providers: [AppService],
})
export class AppModule {}
