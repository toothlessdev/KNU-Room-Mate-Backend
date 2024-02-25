import { TypeOrmModule } from "@nestjs/typeorm";
import { CommentModel } from "src/utils/models/comment.model";
import { FormModel } from "src/utils/models/form.model";
import { UserModel } from "src/utils/models/user.model";

export const RootEntities = [UserModel, FormModel, CommentModel];

export const TypeOrmRootModule = TypeOrmModule.forRootAsync({
    useFactory: () => ({
        type: "postgres",
        host: process.env["DATABASE_HOST"],
        port: Number(process.env["DATABASE_PORT"]),
        username: process.env["DATABASE_USERNAME"],
        password: process.env["DATABASE_PASSWORD"],
        database: process.env["DATABASE_NAME"],
        synchronize: true,
        entities: RootEntities,
    }),
});
