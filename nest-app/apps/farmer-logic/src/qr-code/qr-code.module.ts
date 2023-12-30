import { Module } from '@nestjs/common';
import { QrCodeService } from './qr-code.service';
import { QrCodeController } from './qr-code.controller';
import { DbService } from '@app/sharedlogic/db/db.service';
import { AuthService } from '@app/sharedlogic/auth/auth.service';
import { JwtService } from '@nestjs/jwt';
import { AdminService } from 'apps/admin-logic/src/admin/admin.service';
import { DoctorService } from 'apps/doctor-logic/src/doctor/doctor.service';
import { FarmerRequestsService } from 'apps/doctor-logic/src/farmer-requests/farmer-requests.service';
import { LifeStockReportsService } from 'apps/doctor-logic/src/life-stock-reports/life-stock-reports.service';
import { CheckUpRequestService } from '../check-up-request/check-up-request.service';
import { FarmerService } from '../farmer/farmer.service';
import { LifestockService } from '../lifestock/lifestock.service';
import { TransferService } from '../transfer/transfer.service';
import { HttpService, HttpModule } from '@nestjs/axios';

@Module({
  imports: [HttpModule],
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
  controllers: [QrCodeController],
})
export class QrCodeModule {}
