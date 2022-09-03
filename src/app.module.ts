import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { RabbitMQModule } from '@golevelup/nestjs-rabbitmq';
import { SmsModule } from './sms/sms.module';
import { TypeOrmModule } from '@nestjs/typeorm';
import entities from './typeorm';
@Module({
  imports: [TypeOrmModule.forRoot({
    type:"mysql",
    host:"localhost",
    port:3306,
    username:"root",
    password:"password",
    database:"sms1",
    synchronize:true,
    entities:entities,
  }),
      RabbitMQModule.forRoot(RabbitMQModule, {
        exchanges: [
          {
            name: 'exchange1',
            type: 'topic',
          },
        ],
        uri: 'amqp://guest:guest@localhost:5672',
        connectionInitOptions: { wait: false },
      }),
      SmsModule,],
  controllers: [AppController],
  providers: [AppService,],
})
export class AppModule {}
