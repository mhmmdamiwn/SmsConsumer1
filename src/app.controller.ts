import { Controller, Get } from '@nestjs/common';
import { AppService } from './app.service';
import { AmqpConnection } from '@golevelup/nestjs-rabbitmq';
@Controller()
export class AppController {
  constructor(private readonly appService: AppService,private readonly amqpConnection: AmqpConnection) {}

  @Get()
  getHello(): string {
    this.amqpConnection.publish('exchange2','subscribe-route', { msg: 'hello world' });
    return this.appService.getHello();
  }
}
