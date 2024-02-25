import { DocumentBuilder } from "@nestjs/swagger";

export const swaggerConfig = new DocumentBuilder()
    .setTitle("KNU Room Mate")
    .setDescription("KNU Room Mate 서버의 API Documentation 입니다")
    .setVersion("0.0")
    .build();
