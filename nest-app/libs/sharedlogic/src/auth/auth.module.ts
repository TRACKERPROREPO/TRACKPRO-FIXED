import { Module } from '@nestjs/common';
import { AuthService } from './auth.service';
import { AuthController } from './auth.controller';
import { DbService } from '../db/db.service';
import { ConfigModule } from '@nestjs/config';
import { FarmerService } from 'apps/farmer-logic/src/farmer/farmer.service';
import { DoctorService } from 'apps/doctor-logic/src/doctor/doctor.service';

@Module({
  imports: [
    ConfigModule.forRoot({
      envFilePath: ['.env'],
    }),
  ],
  providers: [AuthService, DbService,FarmerService,DoctorService],
  controllers: [AuthController],
})
export class AuthModule {}
