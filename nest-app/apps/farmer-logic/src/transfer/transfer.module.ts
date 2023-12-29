import { Module } from '@nestjs/common';
import { TransferService } from './transfer.service';
import { DbService } from '@app/sharedlogic/db/db.service';
import { TransferController } from './transfer.controller';
import { AuthService } from '@app/sharedlogic/auth/auth.service';
import { JwtService } from '@nestjs/jwt';
import { AdminService } from 'apps/admin-logic/src/admin/admin.service';
import { DoctorService } from 'apps/doctor-logic/src/doctor/doctor.service';
import { FarmerRequestsService } from 'apps/doctor-logic/src/farmer-requests/farmer-requests.service';
import { LifeStockReportsService } from 'apps/doctor-logic/src/life-stock-reports/life-stock-reports.service';
import { CheckUpRequestService } from '../check-up-request/check-up-request.service';
import { LifestockService } from '../lifestock/lifestock.service';
import { QrCodeService } from '../qr-code/qr-code.service';
import { FarmerService } from '../farmer/farmer.service';

@Module({
  providers: [
    QrCodeService,
    DbService,
    TransferService,
    FarmerService,
    AuthService,
    JwtService,
    DoctorService,
    AdminService,
    LifeStockReportsService,
    FarmerRequestsService,
    TransferService,
    LifestockService,
    CheckUpRequestService,
  ],
  controllers: [TransferController],
})
export class TransferModule {}
