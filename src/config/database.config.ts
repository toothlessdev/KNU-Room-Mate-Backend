import { TypeOrmModule } from "@nestjs/typeorm";
import { FormModel } from "src/form/entities/form.entity";
import { UserModel } from "src/users/entities/user.entity";

export const RootEntities = [UserModel, FormModel];

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
