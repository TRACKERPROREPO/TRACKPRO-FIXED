import { Logger } from '@nestjs/common';
import { DoctorService } from 'apps/doctor-logic/src/doctor/doctor.service';
import { FarmerRequestsService } from 'apps/doctor-logic/src/farmer-requests/farmer-requests.service';
import { LifeStockReportsService } from 'apps/doctor-logic/src/life-stock-reports/life-stock-reports.service';
import { CheckUpRequestService } from 'apps/farmer-logic/src/check-up-request/check-up-request.service';
import { FarmerService } from 'apps/farmer-logic/src/farmer/farmer.service';
import { LifestockService } from 'apps/farmer-logic/src/lifestock/lifestock.service';
import { QrCodeService } from 'apps/farmer-logic/src/qr-code/qr-code.service';
import { TransferService } from 'apps/farmer-logic/src/transfer/transfer.service';

export interface IAdmin<
  T extends DoctorService,
  U extends FarmerService,
  V extends LifeStockReportsService,
  W extends FarmerRequestsService,
  X extends QrCodeService,
  Y extends TransferService,
  Z extends LifestockService,
  A extends CheckUpRequestService,
> {
  Doctor: T;
  Farmer: U;
  Report: V;
  Request: W;
  Qrcode: X;
  Transfer: Y;
  Lifestock: Z;
  CheckUp: A;
  logger: Logger;
  CreateAdmin();
  FindByid();
  FindByfirst_name();
  FindBylast_name();
  FindByemail();
  FindBynumber();
  FindBypassword();
  FindBycreatedAt();
  FindByupdatedAt();
  Updatefirst_name();
  Updatelast_name();
  Updateemail();
  Updatenumber();
  Updatepassword();
}
