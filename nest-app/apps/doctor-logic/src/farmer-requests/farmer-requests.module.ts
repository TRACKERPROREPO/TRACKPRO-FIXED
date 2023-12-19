import { Module } from '@nestjs/common';
import { FarmerRequestsService } from './farmer-requests.service';
import { FarmerRequestsController } from './farmer-requests.controller';
import { DbService } from '@app/sharedlogic/db/db.service';

@Module({
  providers: [FarmerRequestsService,DbService],
  controllers: [FarmerRequestsController]
})
export class FarmerRequestsModule {}
