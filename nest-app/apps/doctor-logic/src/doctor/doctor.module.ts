import { Module } from '@nestjs/common';
import { DoctorService } from './doctor.service';
import { DoctorController } from './doctor.controller';
import { DbService } from '@app/sharedlogic/db/db.service';

@Module({
  providers: [DoctorService,DbService],
  controllers: [DoctorController]
})
export class DoctorModule {}
