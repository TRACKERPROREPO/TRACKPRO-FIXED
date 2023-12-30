import { Module } from '@nestjs/common';
import { DoctorService } from './doctor.service';
import { DoctorController } from './doctor.controller';
import { DbService } from '@app/sharedlogic/db/db.service';
import { AuthService } from '@app/sharedlogic/auth/auth.service';
import { JwtService } from '@nestjs/jwt';
import { AdminService } from 'apps/admin-logic/src/admin/admin.service';
import { CheckUpRequestService } from 'apps/farmer-logic/src/check-up-request/check-up-request.service';
import { FarmerService } from 'apps/farmer-logic/src/farmer/farmer.service';
import { LifestockService } from 'apps/farmer-logic/src/lifestock/lifestock.service';
import { QrCodeService } from 'apps/farmer-logic/src/qr-code/qr-code.service';
import { TransferService } from 'apps/farmer-logic/src/transfer/transfer.service';
import { FarmerRequestsService } from '../farmer-requests/farmer-requests.service';
import { LifeStockReportsService } from '../life-stock-reports/life-stock-reports.service';
import { ConfigModule } from '@nestjs/config';
import { HttpModule } from '@nestjs/axios';

@Module({
  providers: [
    DoctorService,
    DbService,
    AuthService,
    JwtService,
    FarmerService,
    DoctorService,
    AdminService,
    FarmerRequestsService,
    QrCodeService,
    TransferService,
    LifestockService,
    CheckUpRequestService,
    LifeStockReportsService,
  ],
  controllers: [DoctorController],
  imports: [
    ConfigModule.forRoot({
      isGlobal: true,
      envFilePath: ['apps/doctor-logic/.env'],
    }),
    HttpModule
  ],
})
export class DoctorModule {}
