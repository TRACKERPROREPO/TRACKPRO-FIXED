import { Module } from '@nestjs/common';
import { DoctorModule } from './doctor/doctor.module';
import { FarmerRequestsModule } from './farmer-requests/farmer-requests.module';
import { LifeStockReportsModule } from './life-stock-reports/life-stock-reports.module';
import { ConfigModule } from '@nestjs/config';
import { AuthController } from '@app/sharedlogic/auth/auth.controller';

@Module({
  imports: [
    DoctorModule,
    FarmerRequestsModule,
    LifeStockReportsModule,
    ConfigModule.forRoot({
      isGlobal: true,
      envFilePath:["./.env"]
    }),
  ],
  controllers: [AuthController],
  providers: [],
})
export class DoctorLogicModule {}
