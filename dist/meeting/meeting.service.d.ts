export declare class MeetingService {
    private meetings;
    getMeeting(): Promise<{
        id: string;
        room_id: string;
        name: string;
        user: string;
        email: string;
        nb_people: string;
        day: string;
        hour_start: string;
        hour_end: string;
        notes: string;
    }[]>;
}
