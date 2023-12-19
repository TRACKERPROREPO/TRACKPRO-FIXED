import { Module } from '@nestjs/common';
import { AdminService } from './admin.service';
import { DoctorService } from 'apps/doctor-logic/src/doctor/doctor.service';
import { AdminController } from './admin.controller';
import { FarmerRequestsService } from 'apps/doctor-logic/src/farmer-requests/farmer-requests.service';
import { LifeStockReportsService } from 'apps/doctor-logic/src/life-stock-reports/life-stock-reports.service';
import { CheckUpRequestService } from 'apps/farmer-logic/src/check-up-request/check-up-request.service';
import { FarmerService } from 'apps/farmer-logic/src/farmer/farmer.service';
import { LifestockService } from 'apps/farmer-logic/src/lifestock/lifestock.service';
import { QrCodeService } from 'apps/farmer-logic/src/qr-code/qr-code.service';
import { TransferService } from 'apps/farmer-logic/src/transfer/transfer.service';
import { DbService } from '@app/sharedlogic/db/db.service';

@Module({
  providers: [AdminService,DbService,DoctorService,
    FarmerService,
    LifeStockReportsService,
    FarmerRequestsService,
    QrCodeService,
    TransferService,
    LifestockService,
    CheckUpRequestService],
  controllers: [AdminController]
})
export class AdminModule {}
