import {
    AlarmType,
    CleanFrequency,
    FriendInvitationType,
    GameType,
    HomeReturnFrequency,
    InsectSensitive,
    PhoneCallType,
    ShareType,
    SleepLightType,
    SmokeType,
    StudyPlace,
    WorkoutFrequency,
    WorkoutTime,
} from "src/form/types/form.type";

import {
    Column,
    CreateDateColumn,
    Entity,
    JoinColumn,
    OneToOne,
    PrimaryGeneratedColumn,
} from "typeorm";
import { UserModel } from "../../users/entities/user.entity";

@Entity()
export class FormModel {
    @PrimaryGeneratedColumn()
    id: number;

    @Column()
    title: string;

    @Column()
    content: string;

    @OneToOne(() => UserModel, (user) => user.form)
    @JoinColumn()
    user: UserModel;

    @CreateDateColumn()
    createdAt: Date;

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
    @Column({ type: "enum", enum: SleepLightType })
    sleepLight: SleepLightType;
    @Column({ type: "enum", enum: AlarmType })
    alarmType: AlarmType;

    @Column()
    teethGrinding: boolean;
    @Column()
    snoring: boolean;
    @Column()
    sleepTalking: boolean;
    @Column()
    sleepStruggel: boolean;

    @Column()
    heatSensitive: number;
    @Column()
    coldSensitive: number;
    @Column()
    cleanliness: number;
    @Column({ type: "enum", enum: CleanFrequency })
    cleanFrequency: CleanFrequency;
    @Column()
    showerDuration: number;
    @Column({ type: "enum", enum: InsectSensitive })
    insectSensitive: InsectSensitive;

    @Column()
    relationship: number;
    @Column({ type: "enum", enum: ShareType })
    shareType: ShareType;
    @Column({ type: "enum", enum: FriendInvitationType })
    friendInvitation: FriendInvitationType;
    @Column({ type: "enum", enum: HomeReturnFrequency })
    homeReturnFrequency: HomeReturnFrequency;

    @Column({ type: "enum", enum: StudyPlace })
    studyPlace: StudyPlace;
    @Column({ type: "enum", enum: WorkoutFrequency })
    workoutFrequency: WorkoutFrequency;
    @Column({ type: "enum", enum: WorkoutTime })
    workoutTime: WorkoutTime;
    @Column({ type: "enum", enum: GameType })
    game: GameType;
    @Column({ type: "enum", enum: SmokeType })
    smoke: SmokeType;
    @Column({ type: "enum", enum: PhoneCallType })
    phoneCall: PhoneCallType;
    @Column()
    alcoholFrequency: number;
}
