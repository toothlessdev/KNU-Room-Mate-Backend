import {
    BadRequestException,
    Injectable,
    NotFoundException,
} from "@nestjs/common";
import { InjectRepository } from "@nestjs/typeorm";
import { FormModel } from "src/models/form.model";
import { Repository } from "typeorm";
import { CreateFormDto } from "./dto/create-form.dto";
import { UserModel } from "src/models/user.model";

@Injectable()
export class FormService {
    constructor(
        @InjectRepository(FormModel)
        private readonly formRepository: Repository<FormModel>,
    ) {}

    public async readAllForms() {
        return this.formRepository.find({
            select: ["id", "title", "createdAt", "birth", "studentId"],
            relations: ["user"],
        });
    }

    public async readFormById(id: number) {
        const form = this.formRepository.findOne({
            where: { id },
        });
        if (!form)
            throw new NotFoundException("해당 FORM 이 존재하지 않습니다");
        return form;
    }

    public async createForm(user: UserModel, createFormDto: CreateFormDto) {
        const formAlreadyExists = await this.formRepository.exists({
            where: { user: { userId: user.userId } },
        });
        if (formAlreadyExists)
            throw new BadRequestException(
                "이미 FORM 이 생성되었습니다. 하나 이상의 FORM 을 등록할 수 없습니다",
            );

        const newForm = this.formRepository.create({ ...createFormDto, user });
        return this.formRepository.save(newForm);
    }
}
