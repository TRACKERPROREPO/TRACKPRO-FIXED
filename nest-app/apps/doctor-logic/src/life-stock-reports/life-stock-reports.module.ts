import { Module } from '@nestjs/common';
import { LifeStockReportsService } from './life-stock-reports.service';
import { LifeStockReportsController } from './life-stock-reports.controller';
import { DbService } from '@app/sharedlogic/db/db.service';
import { AuthService } from '@app/sharedlogic/auth/auth.service';
import { JwtService } from '@nestjs/jwt';
import { FarmerService } from 'apps/farmer-logic/src/farmer/farmer.service';
import { DoctorService } from '../doctor/doctor.service';
import { AdminService } from 'apps/admin-logic/src/admin/admin.service';
import { FarmerRequestsService } from '../farmer-requests/farmer-requests.service';
import { QrCodeService } from 'apps/farmer-logic/src/qr-code/qr-code.service';
import { TransferService } from 'apps/farmer-logic/src/transfer/transfer.service';
import { LifestockService } from 'apps/farmer-logic/src/lifestock/lifestock.service';
import { CheckUpRequestService } from 'apps/farmer-logic/src/check-up-request/check-up-request.service';

@Module({
  providers: [
    LifeStockReportsService,
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
  ],
  controllers: [LifeStockReportsController],
})
export class LifeStockReportsModule {}
