import { Module } from '@nestjs/common';
import { FarmerRequestsService } from './farmer-requests.service';
import { FarmerRequestsController } from './farmer-requests.controller';

@Module({
  providers: [FarmerRequestsService],
  controllers: [FarmerRequestsController]
})
export class FarmerRequestsModule {}
