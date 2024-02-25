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

export class CreateFormDto {
    title: string;
    birth: number;
    studentId: number;
    mbti: string;
    sleepTimeBegin: number;
    sleepTimeEnd: number;
    wakeupTimeBegin: number;
    wakeupTimeEnd: number;
    sleepNoise: number;
    sleepLight: SleepLightType;
    alarmType: AlarmType;
    showerTime: number;
    showerDuration: number;
    heatSensitive: number;
    coldSensitive: number;
    smellSensitive: number;
    perfumeType: PerfumeType;
    smoke: boolean;
    alcohol: number;
    alcoholFrequency: number;
    game: GameType;
    phoneCall: PhoneCallType;
    friendInvitation: FriendInvitationType;
    workoutFrequency: WorkoutFrequency;
    workoutTime: WorkoutTime;
    studyPlace: StudyPlace;
    relationship: number;
    homeReturnFrequency: HomeReturnFrequency;
    shareType: ShareType;
}
