import { Module } from '@nestjs/common';
import { SmsService } from './sms.service';
import { SmsController } from './sms.controller';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Sms } from 'src/typeorm/typeorm';

@Module({
  imports:[TypeOrmModule.forFeature([Sms])],
  providers: [SmsService],
  controllers: [SmsController],
  exports:[SmsService]
})
export class SmsModule {}
