import { TypeOrmModule } from "@nestjs/typeorm";
import { CommentModel } from "src/models/comment.model";
import { FormModel } from "src/models/form.model";
import { UserModel } from "src/models/user.model";

export const RootEntities = [UserModel, FormModel, CommentModel];

export const TypeOrmRootModule = TypeOrmModule.forRoot({
    type: "postgres",
    host: "localhost",
    port: 5432,
    username: "knu-room-mate",
    password: "knu-room-mate",
    database: "knu-room-mate",
    synchronize: true,

    entities: RootEntities,
});
