import { Module } from '@nestjs/common';
import { TransferService } from './transfer.service';
import { DbService } from '@app/sharedlogic/db/db.service';
import { TransferController } from './transfer.controller';

@Module({
  providers: [TransferService,DbService],
  controllers: [TransferController]
})
export class TransferModule {}
