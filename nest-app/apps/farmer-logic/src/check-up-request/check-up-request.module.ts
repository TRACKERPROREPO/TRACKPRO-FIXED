import { Module } from '@nestjs/common';
import { CheckUpRequestService } from './check-up-request.service';
import { CheckUpRequestController } from './check-up-request.controller';
import { DbService } from '@app/sharedlogic/db/db.service';
import { AuthService } from '@app/sharedlogic/auth/auth.service';
import { JwtService } from '@nestjs/jwt';
import { AdminService } from 'apps/admin-logic/src/admin/admin.service';
import { DoctorService } from 'apps/doctor-logic/src/doctor/doctor.service';
import { FarmerRequestsService } from 'apps/doctor-logic/src/farmer-requests/farmer-requests.service';
import { LifeStockReportsService } from 'apps/doctor-logic/src/life-stock-reports/life-stock-reports.service';
import { FarmerService } from '../farmer/farmer.service';
import { LifestockService } from '../lifestock/lifestock.service';
import { QrCodeService } from '../qr-code/qr-code.service';
import { TransferService } from '../transfer/transfer.service';

@Module({
  providers: [
    
    CheckUpRequestService,
    DbService,
    FarmerRequestsService,
    QrCodeService,
    TransferService,
    FarmerService,
    AuthService,
    JwtService,
    DoctorService,
    AdminService,
    LifeStockReportsService,
    TransferService,
    LifestockService,
  ],
  controllers: [CheckUpRequestController],
})
export class CheckUpRequestModule {}
