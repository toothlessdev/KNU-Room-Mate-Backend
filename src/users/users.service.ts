import { Injectable } from "@nestjs/common";
import { InjectRepository } from "@nestjs/typeorm";
import { UserModel } from "src/utils/models/user.model";
import { Repository } from "typeorm";

import { SignUpUserDto } from "src/auth/dto/signup-user.dto";

@Injectable()
export class UsersService {
    constructor(
        @InjectRepository(UserModel)
        private readonly userRepository: Repository<UserModel>,
    ) {}

    public async readUserByUserId(userId: string, withCredentials: boolean) {
        return this.userRepository.findOne({
            where: { userId },
            select: { userPw: withCredentials },
        });
    }

    public async createUser(signUpUserDto: SignUpUserDto) {
        const newUser = await this.userRepository.create(signUpUserDto);
        return this.userRepository.save(newUser);
    }
}
