import { Module } from '@nestjs/common';
import { CheckUpRequestService } from './check-up-request.service';
import { CheckUpRequestController } from './check-up-request.controller';

@Module({
  providers: [CheckUpRequestService],
  controllers: [CheckUpRequestController]
})
export class CheckUpRequestModule {}
