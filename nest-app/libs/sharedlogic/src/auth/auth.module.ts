import { Module } from '@nestjs/common';
import { AuthService } from './auth.service';
import { AuthController } from './auth.controller';
import { DbService } from '../db/db.service';
import { ConfigModule } from '@nestjs/config';
import { FarmerService } from 'apps/farmer-logic/src/farmer/farmer.service';
import { DoctorService } from 'apps/doctor-logic/src/doctor/doctor.service';
import { JwtService } from '@nestjs/jwt';
import { AdminService } from 'apps/admin-logic/src/admin/admin.service';
import { LifeStockReportsService } from 'apps/doctor-logic/src/life-stock-reports/life-stock-reports.service';
import { FarmerRequestsService } from 'apps/doctor-logic/src/farmer-requests/farmer-requests.service';
import { QrCodeService } from 'apps/farmer-logic/src/qr-code/qr-code.service';
import { TransferService } from 'apps/farmer-logic/src/transfer/transfer.service';
import { LifestockService } from 'apps/farmer-logic/src/lifestock/lifestock.service';
import { CheckUpRequestService } from 'apps/farmer-logic/src/check-up-request/check-up-request.service';
import { HttpModule } from '@nestjs/axios';

@Module({
  imports: [
    ConfigModule.forRoot({
      envFilePath: ['.env'],
    }),
    HttpModule,
  ],
  providers: [
    AuthService,
    DbService,
    FarmerService,
    DoctorService,
    JwtService,
    AdminService,
    LifeStockReportsService,
    FarmerRequestsService,
    QrCodeService,
    TransferService,
    LifestockService,
    CheckUpRequestService,
  ],
  controllers: [AuthController],
})
export class AuthModule {}
