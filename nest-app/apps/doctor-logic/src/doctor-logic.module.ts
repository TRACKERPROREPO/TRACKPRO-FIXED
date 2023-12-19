import { Module } from '@nestjs/common';
import { DoctorModule } from './doctor/doctor.module';
import { FarmerRequestsModule } from './farmer-requests/farmer-requests.module';
import { LifeStockReportsModule } from './life-stock-reports/life-stock-reports.module';
import { ConfigModule } from '@nestjs/config';
import { AuthModule } from '@app/sharedlogic/auth/auth.module';

@Module({
  imports: [
    AuthModule,
    DoctorModule,
    FarmerRequestsModule,
    LifeStockReportsModule,
    ConfigModule.forRoot({
      isGlobal: true,
      envFilePath:["./.env"]
    }),
  ],
  controllers: [],
  providers: [],
})
export class DoctorLogicModule {}
