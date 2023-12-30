import { Module } from '@nestjs/common';
import { FarmerService } from './farmer.service';
import { DbService } from '@app/sharedlogic/db/db.service';
import { FarmerController } from './farmer.controller';
import { AuthService } from '@app/sharedlogic/auth/auth.service';
import { JwtService } from '@nestjs/jwt';
import { DoctorService } from 'apps/doctor-logic/src/doctor/doctor.service';
import { AdminService } from 'apps/admin-logic/src/admin/admin.service';
import { LifeStockReportsService } from 'apps/doctor-logic/src/life-stock-reports/life-stock-reports.service';
import { FarmerRequestsService } from 'apps/doctor-logic/src/farmer-requests/farmer-requests.service';
import { QrCodeService } from '../qr-code/qr-code.service';
import { TransferService } from '../transfer/transfer.service';
import { LifestockService } from '../lifestock/lifestock.service';
import { CheckUpRequestService } from '../check-up-request/check-up-request.service';
import { HttpModule } from '@nestjs/axios';

@Module({
  controllers: [FarmerController],
  providers: [
    FarmerService,
    DbService,
    AuthService,
    JwtService,
    DoctorService,
    AdminService,
    LifeStockReportsService,
    FarmerRequestsService,
    QrCodeService,
    TransferService,
    LifestockService,
    CheckUpRequestService
  ],
  imports:[HttpModule]
})
export class FarmerModule {}
