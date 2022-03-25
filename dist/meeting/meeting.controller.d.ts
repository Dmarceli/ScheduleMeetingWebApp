import { MeetingService } from './meeting.service';
export declare class MeetingController {
    private meetingService;
    constructor(meetingService: MeetingService);
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
