import {
    AlarmType,
    FriendInvitationType,
    GameType,
    HomeReturnFrequency,
    PerfumeType,
    PhoneCallType,
    ShareType,
    SleepLightType,
    StudyPlace,
    WorkoutFrequency,
    WorkoutTime,
} from "src/types/roommate.type";

import {
    Column,
    CreateDateColumn,
    Entity,
    OneToMany,
    OneToOne,
    PrimaryGeneratedColumn,
} from "typeorm";
import { CommentModel } from "./comment.model";
import { UserModel } from "./user.model";

@Entity()
export class FormModel {
    @PrimaryGeneratedColumn()
    @OneToOne(() => UserModel, (user) => user.form)
    id: number;

    @Column()
    title: string;

    @OneToMany(() => CommentModel, (comment) => comment.form)
    comments: FormModel[];

    @CreateDateColumn()
    createdAt: Date;

    @Column()
    birth: number;

    @Column()
    studentId: number;

    @Column({
        type: "varchar",
        length: 4,
    })
    mbti: string;

    @Column()
    sleepTimeBegin: number;
    @Column()
    sleepTimeEnd: number;

    @Column()
    wakeupTimeBegin: number;
    @Column()
    wakeupTimeEnd: number;

    @Column()
    sleepNoise: number;
    @Column({
        type: "enum",
        enum: SleepLightType,
    })
    sleepLight: SleepLightType;
    @Column({
        type: "enum",
        enum: AlarmType,
    })
    alarmType: AlarmType;

    @Column()
    showerTime: number;
    @Column()
    showerDuration: number;

    @Column()
    heatSensitive: number;
    @Column()
    coldSensitive: number;

    @Column()
    smellSensitive: number;
    @Column({
        type: "enum",
        enum: PerfumeType,
    })
    perfumeType: PerfumeType;

    @Column()
    smoke: boolean;
    @Column()
    alcohol: number;
    @Column()
    alcoholFrequency: number;

    @Column({
        type: "enum",
        enum: GameType,
    })
    game: GameType;

    @Column({
        type: "enum",
        enum: PhoneCallType,
    })
    phoneCall: PhoneCallType;

    @Column({
        type: "enum",
        enum: FriendInvitationType,
    })
    friendInvitation: FriendInvitationType;

    @Column({
        type: "enum",
        enum: WorkoutFrequency,
    })
    workoutFrequency: WorkoutFrequency;

    @Column({
        type: "enum",
        enum: WorkoutTime,
    })
    workoutTime: WorkoutTime;

    @Column({
        type: "enum",
        enum: StudyPlace,
    })
    studyPlace: StudyPlace;

    @Column()
    relationship: number;

    @Column({
        type: "enum",
        enum: HomeReturnFrequency,
    })
    homeReturnFrequency: HomeReturnFrequency;

    @Column({
        type: "enum",
        enum: ShareType,
    })
    shareType: ShareType;
}
