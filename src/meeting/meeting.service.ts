import { Injectable } from '@nestjs/common';
import { MEETINGS } from './meetings.mock'

@Injectable()
export class MeetingService {
	private meetings = MEETINGS;

	public async getMeeting(){
		return this.meetings;
	}
	public async postMeeting(meeting){
		return this.meetings.push(meeting);
	}
}
