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
    userId: number;

    @Column()
    id: string;

    @Column()
    pw: string;

    @OneToOne(() => FormModel, (form) => form.id)
    @JoinColumn()
    form: FormModel;
}
