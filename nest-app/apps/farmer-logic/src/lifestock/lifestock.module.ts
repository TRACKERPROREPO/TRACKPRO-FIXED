import { Module } from '@nestjs/common';
import { LifestockService } from './lifestock.service';
import { LifestockController } from './lifestock.controller';
import { DbService } from '@app/sharedlogic/db/db.service';
import { AuthService } from '@app/sharedlogic/auth/auth.service';
import { JwtService } from '@nestjs/jwt';
import { FarmerService } from '../farmer/farmer.service';
import { DoctorService } from 'apps/doctor-logic/src/doctor/doctor.service';
import { AdminService } from 'apps/admin-logic/src/admin/admin.service';
import { LifeStockReportsService } from 'apps/doctor-logic/src/life-stock-reports/life-stock-reports.service';
import { FarmerRequestsService } from 'apps/doctor-logic/src/farmer-requests/farmer-requests.service';
import { QrCodeService } from '../qr-code/qr-code.service';
import { TransferService } from '../transfer/transfer.service';
import { CheckUpRequestService } from '../check-up-request/check-up-request.service';
import { HttpModule } from '@nestjs/axios';

@Module({
  providers: [
    LifestockService,
    DbService,
    AuthService,
    JwtService,
    FarmerService,
    DoctorService,
    AdminService,
    LifeStockReportsService,
    FarmerRequestsService,
    QrCodeService,
    TransferService,
    CheckUpRequestService,
  ],
  controllers: [LifestockController],
  imports: [HttpModule],
})
export class LifestockModule {}
