## KNU RoomMate Backend

<p align="center">경북대학교 룸메이트 매칭 서비스 NestJS 서버입니다</p>

<div align="center">

![nest](https://img.shields.io/badge/Nest_JS-202020?style=for-the-badge&logo=nestjs&logoColor=E0234E)
![typeorm](https://img.shields.io/badge/TypeORM-202020?style=for-the-badge&logo=nestjs&logoColor=E0234E)
![postgresql](https://img.shields.io/badge/PostgreSQL-202020?style=for-the-badge&logo=postgresql&logoColor=4169E1)
<br/>
![docker](https://img.shields.io/badge/DOCKER_COMPOSE-202020?style=for-the-badge&logo=docker&logoColor=2496ED)
![jwt](https://img.shields.io/badge/JSON_WEB_TOKEN-202020?style=for-the-badge&logo=jsonwebtokens&logoColor=eeeeee)

</div>

---

### 1. 의존성 패키지 설치

```bash
$ npm install
```

### 2. .env 파일 작성

docker-compose.yaml 파일의 데이터베이스 연결 정보와 동일하게 설정

```js
# .env

DATABASE_HOST=localhost
DATABASE_PORT=5432
DATABASE_USERNAME=knu-room-mate
DATABASE_PASSWORD=knu-room-mate
DATABASE_NAME=knu-room-mate

JWT_SECRET=test
JWT_ACCESS_EXPIRES_IN=300
JWT_REFRESH_EXPIRES_IN=3600
```

### 3. Docker Postgres DB 실행

```bash
$ sudo docker-compose up
```

### 4. Nest JS 실행

```bash
$ npm run start:dev
```
