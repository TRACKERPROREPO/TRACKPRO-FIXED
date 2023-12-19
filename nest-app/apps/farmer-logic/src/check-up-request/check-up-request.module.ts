import { Module } from '@nestjs/common';
import { CheckUpRequestService } from './check-up-request.service';
import { CheckUpRequestController } from './check-up-request.controller';
import { DbService } from '@app/sharedlogic/db/db.service';

@Module({
  providers: [CheckUpRequestService,DbService],
  controllers: [CheckUpRequestController]
})
export class CheckUpRequestModule {}
