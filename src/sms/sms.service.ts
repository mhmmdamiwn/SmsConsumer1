import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Sms } from 'src/typeorm/typeorm';
import { Repository } from 'typeorm';
import { SmsDto } from './dto/sms.dto';
@Injectable()
export class SmsService {
    constructor(@InjectRepository(Sms) private smsRepo:Repository<Sms>){}
    createSms(msg:SmsDto){
        const newMsg=this.smsRepo.create();
        newMsg.date=new Date();
        const stringMessage=msg.msg
        newMsg.sms_text=stringMessage;
        return this.smsRepo.save(newMsg);
    }
}
