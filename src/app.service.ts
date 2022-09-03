import { Injectable } from '@nestjs/common';
import { RabbitSubscribe } from '@golevelup/nestjs-rabbitmq';
import { SmsService } from './sms/sms.service';
import { SmsDto } from './sms/dto/sms.dto';


@Injectable()
export class AppService {
  constructor(private readonly smsService:SmsService){}
  getHello(): string {
    return 'Hello World!';
  }
  @RabbitSubscribe({
    exchange: 'exchange2',
    routingKey: 'subscribe-route',
    queue: 'queue1',
  })
  public async competingPubSubHandler(msg:SmsDto) {
    console.log(`Received message: ${JSON.stringify(msg)}`);
   this.smsService.createSms(msg);
  }
}
