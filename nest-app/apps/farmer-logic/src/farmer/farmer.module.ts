import { Module } from '@nestjs/common';
import { FarmerService } from './farmer.service';
import { DbService } from '@app/sharedlogic/db/db.service';
import { FarmerController } from './farmer.controller';

@Module({
  controllers: [FarmerController],
  providers: [FarmerService,DbService],
})
export class FarmerModule {}
