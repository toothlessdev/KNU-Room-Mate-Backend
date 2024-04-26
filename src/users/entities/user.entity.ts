import { Column, Entity, OneToOne, PrimaryGeneratedColumn } from "typeorm";
import { FormModel } from "../../form/entities/form.entity";

@Entity()
export class UserModel {
    @PrimaryGeneratedColumn()
    id: number;

    @Column()
    userId: string;

    @Column({ select: false })
    userPw: string;

    @Column()
    gender: boolean; //TODO : enum

    @Column()
    college: string;

    @Column()
    nickname: string;

    @Column()
    birth: number;

    @Column()
    studentId: number;

    @OneToOne(() => FormModel, (form) => form.user)
    form: FormModel;
}
