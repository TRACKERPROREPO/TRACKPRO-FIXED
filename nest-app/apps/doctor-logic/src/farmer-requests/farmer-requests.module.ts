import { Module } from '@nestjs/common';
import { FarmerRequestsService } from './farmer-requests.service';
import { FarmerRequestsController } from './farmer-requests.controller';
import { DbService } from '@app/sharedlogic/db/db.service';
import { AuthService } from '@app/sharedlogic/auth/auth.service';
import { JwtService } from '@nestjs/jwt';
import { AdminService } from 'apps/admin-logic/src/admin/admin.service';
import { CheckUpRequestService } from 'apps/farmer-logic/src/check-up-request/check-up-request.service';
import { FarmerService } from 'apps/farmer-logic/src/farmer/farmer.service';
import { LifestockService } from 'apps/farmer-logic/src/lifestock/lifestock.service';
import { QrCodeService } from 'apps/farmer-logic/src/qr-code/qr-code.service';
import { TransferService } from 'apps/farmer-logic/src/transfer/transfer.service';
import { DoctorService } from '../doctor/doctor.service';
import { LifeStockReportsService } from '../life-stock-reports/life-stock-reports.service';

@Module({
  providers: [
    FarmerRequestsService,
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
  controllers: [FarmerRequestsController],
})
export class FarmerRequestsModule {}
