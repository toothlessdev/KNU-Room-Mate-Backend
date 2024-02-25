import {
    Column,
    Entity,
    JoinColumn,
    OneToOne,
    PrimaryGeneratedColumn,
} from "typeorm";
import { FormModel } from "./form.model";

@Entity()
export class UserModel {
    @PrimaryGeneratedColumn()
    id: number;

    @Column()
    userId: string;

    @Column()
    userPw: string;

    @Column()
    gender: boolean;

    @Column()
    college: string;

    @OneToOne(() => FormModel, (form) => form.form)
    @JoinColumn()
    form: FormModel;
}
