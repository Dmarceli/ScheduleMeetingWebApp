import { Controller, Get } from '@nestjs/common';
import { MeetingService } from './meeting.service';



@Controller('meeting')
export class MeetingController {
	constructor(private meetingService: MeetingService){}

	@Get()
	async getMeeting(){
		return this.meetingService.getMeeting();
	}
}
