import {
    AlarmType,
    FriendInvitationType,
    GameType,
    HomeReturnFrequency,
    PerfumeType,
    PhoneCallType,
    ShareType,
    SleepHabit,
    SleepLightType,
    StudyPlace,
    WorkoutFrequency,
    WorkoutTime,
} from "src/form/types/form.type";

export class CreateFormDto {
    title: string; // 제목
    content: string;

    mbti: string; // MBTI

    sleepTimeBegin: number; // 취침시간 (시작)
    sleepTimeEnd: number; // 취침시간 (끝)
    wakeupTimeBegin: number; // 기상시간 (시작)
    wakeupTimeEnd: number; // 기상시간 (끝)

    sleepNoise: number; // 잠귀 (0~10)
    sleepLight: SleepLightType; // 취침등 타입
    alarmType: AlarmType; // 알람 타입
    sleepHabit: SleepHabit[];

    heatSensitive: number; // 더위 (0~10)
    coldSensitive: number; // 추위 (0~10)
    cleanliness: number; // 청소
    cleanFrequency : 

    perfumeType: PerfumeType; // 향수 타입
    smoke: boolean; // 흡연
    alcohol: number; // 주량
    alcoholFrequency: number; // 음주 빈도
    game: GameType; // 컴퓨터게임
    phoneCall: PhoneCallType; // 실내통화
    friendInvitation: FriendInvitationType; // 친구 초대
    workoutFrequency: WorkoutFrequency; // 운동 빈도
    workoutTime: WorkoutTime; // 운동 시간대
    studyPlace: StudyPlace; // 공부 장소
    relationship: number; // 룸메이트와의 관계
    homeReturnFrequency: HomeReturnFrequency; // 본가 가는 주기
    shareType: ShareType; // 룸메이트와 물건공유
}
