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
    title: string; // 제목
    birth: number; // 태어난 년도
    studentId: number; // 학번
    mbti: string; // MBTI
    sleepTimeBegin: number; // 취침시간 (시작)
    sleepTimeEnd: number; // 취침시간 (끝)
    wakeupTimeBegin: number; // 기상시간 (시작)
    wakeupTimeEnd: number; // 기상시간 (끝)
    sleepNoise: number; // 취침 소음 민감도 (0~10)
    sleepLight: SleepLightType; // 취침등 타입
    alarmType: AlarmType; // 알람 타입
    showerDuration: number; // 샤워 소요시간
    heatSensitive: number; // 더위 (0~10)
    coldSensitive: number; // 추위 (0~10)
    smellSensitive: number; // 향 민감도 (0~10)
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
