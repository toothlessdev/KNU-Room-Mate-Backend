import { Module } from "@nestjs/common";
import { AppController } from "./app.controller";
import { AppService } from "./app.service";
import { TypeOrmModule } from "@nestjs/typeorm";
import { RoommateModule } from './roommate/roommate.module';

const RootEntities = [];

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
    imports: [TypeOrmRootModule, RoommateModule],
    controllers: [AppController],
    providers: [AppService],
})
export class AppModule {}
