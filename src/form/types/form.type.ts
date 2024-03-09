export enum SleepLightType {
    NONE = "NONE", // 없음
    LIGHT = "LIGHT", // 형광등
    STAND = "STAND", // 스탠드
    LAMP = "LAMP", // 무드등
}

export enum AlarmType {
    NONE = "NONE", // 안함
    PER10MIN = "PER10MIN", // 10분마다 하나
    SINGLE = "SINGLE", // 하나만
}

export enum GameType {
    NONE = "NONE", // 안함
    ALWAYS = "ALWAYS", // 매일
    OFTEN = "OFTEN", // 가끔
}

export enum PhoneCallType {
    NONE = "NONE", // 안함
    SHORT = "SHORT", // 짧은통화
    FREQUENT = "FREQUENT", // 많이함
}

export enum FriendInvitationType {
    NONE = "NONE", //싫음
    PERMISSON = "PERMISSON", // 사전허락
    UNION = "UNION", // 나도 아는 사람만
    IRRELEVANT = "IRRELEVANT", // 관계없음
}

export enum WorkoutFrequency {
    NONE = "NONE", //안함
    OFTEN = "OFTEN", //가끔함
    ALWAYS = "ALWAYS", //매일함
}

export enum WorkoutTime {
    MORNING = "MORNING", // 아침
    EVENING = "EVENING", // 저녁
}

export enum StudyPlace {
    DORMITORY = "DORMITORY", // 기숙사
    LIBRARY = "LIBRARY", // 도서관
    STUDYROOM = "STUDYROOM", // 자습실
    FLEXIBLE = "FLEXIBLE", // 유동적
}

export enum HomeReturnFrequency {
    ONVACATION = "ONVACATION",
    WEEKLY = "WEEKLY",
    MONTHLY = "MONTHLY",
}

export enum ShareType {
    NONE = "NONE", // 싫음
    PERMISSON = "PERMISSION", // 사전허락
    ALWAYS = "ALWAYS", // 상관없음
}

export enum SleepHabit {
    NONE = "NONE",
    SNORING = "SNORING",
    GRINDING = "GRINDING",
    SLEEPTALKING = "SLEEPTALKING",
    STRUGGLE = "STRUGGLE",
}

export enum CleanFrequency {
    WEEKLY = "WEEKLY",
    DAILY = "DAILY",
    TIMESAWEEK = "TIMESAWEEK",
}

export enum InsectSensitive {
    HATE = "HATE",
    UNCATCHABLE = "UNCATCHABLE",
    NORMAL = "NORMAL",
    CATCHABLE = "CATCHABLE",
    LIKE = "LIKE",
}
