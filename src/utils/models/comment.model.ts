import {
    Column,
    CreateDateColumn,
    Entity,
    ManyToOne,
    PrimaryGeneratedColumn,
} from "typeorm";
import { FormModel } from "./form.model";

@Entity()
export class CommentModel {
    @PrimaryGeneratedColumn()
    commentId: number;

    @ManyToOne(() => FormModel, (form) => form.comments)
    form: FormModel;

    @Column()
    content: string;

    @CreateDateColumn()
    createdAt: Date;
}
