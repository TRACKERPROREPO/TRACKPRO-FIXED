import { Controller } from '@nestjs/common';
import { DoctorService } from 'apps/doctor-logic/src/doctor/doctor.service';
import { FarmerRequestsService } from 'apps/doctor-logic/src/farmer-requests/farmer-requests.service';
import { LifeStockReportsService } from 'apps/doctor-logic/src/life-stock-reports/life-stock-reports.service';
import { CheckUpRequestService } from 'apps/farmer-logic/src/check-up-request/check-up-request.service';
import { FarmerService } from 'apps/farmer-logic/src/farmer/farmer.service';
import { LifestockService } from 'apps/farmer-logic/src/lifestock/lifestock.service';
import { QrCodeService } from 'apps/farmer-logic/src/qr-code/qr-code.service';
import { TransferService } from 'apps/farmer-logic/src/transfer/transfer.service';
import { IAdmin } from './IAdmin';

@Controller('admin')
export class AdminController
  implements
    IAdmin<
      DoctorService,
      FarmerService,
      LifeStockReportsService,
      FarmerRequestsService,
      QrCodeService,
      TransferService,
      LifestockService,
      CheckUpRequestService
    >
{
  Doctor: DoctorService;
  Farmer: FarmerService;
  Report: LifeStockReportsService;
  Request: FarmerRequestsService;
  Qrcode: QrCodeService;
  Transfer: TransferService;
  Lifestock: LifestockService;
  CheckUp: CheckUpRequestService;
  /**
   *
   */
  constructor(
    private readonly doctor: DoctorService,
    private readonly farmer: FarmerService,
    private readonly report: LifeStockReportsService,
    private readonly request: FarmerRequestsService,
    private readonly qrcode: QrCodeService,
    private readonly transfer: TransferService,
    private readonly lifestock: LifestockService,
    private readonly checkUp: CheckUpRequestService,
  ) {
    this.Doctor = doctor;
    this.Farmer = farmer;
    this.Lifestock = lifestock;
    this.Report = report;
    this.Request = request;
    this.CheckUp = checkUp;
    this.Transfer = transfer;
    this.Qrcode = qrcode;
  }

  CreateAdmin() {
    throw new Error('Method not implemented.');
  }
  FindByid() {
    throw new Error('Method not implemented.');
  }
  FindByfirst_name() {
    throw new Error('Method not implemented.');
  }
  FindBylast_name() {
    throw new Error('Method not implemented.');
  }
  FindByemail() {
    throw new Error('Method not implemented.');
  }
  FindBynumber() {
    throw new Error('Method not implemented.');
  }
  FindBypassword() {
    throw new Error('Method not implemented.');
  }
  FindBycreatedAt() {
    throw new Error('Method not implemented.');
  }
  FindByupdatedAt() {
    throw new Error('Method not implemented.');
  }
  Updatefirst_name() {
    throw new Error('Method not implemented.');
  }
  Updatelast_name() {
    throw new Error('Method not implemented.');
  }
  Updateemail() {
    throw new Error('Method not implemented.');
  }
  Updatenumber() {
    throw new Error('Method not implemented.');
  }
  Updatepassword() {
    throw new Error('Method not implemented.');
  }
}
