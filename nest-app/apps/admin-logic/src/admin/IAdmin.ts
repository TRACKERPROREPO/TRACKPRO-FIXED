import { Logger } from '@nestjs/common';
import { TPAdmin } from '@prisma/client';
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
  CreateAdmin(data: Map<String, any>): Promise<TPAdmin | void>;
  FindByid(data: Map<String, any>): Promise<TPAdmin | void>;
  FindByfirst_name(data: Map<String, any>): Promise<TPAdmin | void>;
  FindBylast_name(data: Map<String, any>): Promise<TPAdmin | void>;
  FindByemail(data: Map<String, any>): Promise<TPAdmin | void>;
  FindBynumber(data: Map<String, any>): Promise<TPAdmin | void>;
  FindBypassword(data: Map<String, any>): Promise<TPAdmin | void>;
  FindBycreatedAt(data: Map<String, any>): Promise<TPAdmin | void>;
  FindByupdatedAt(data: Map<String, any>): Promise<TPAdmin | void>;
  Updatefirst_name(data: Map<String, any>): Promise<TPAdmin | void>;
  Updatelast_name(data: Map<String, any>): Promise<TPAdmin | void>;
  Updateemail(data: Map<String, any>): Promise<TPAdmin | void>;
  Updatenumber(data: Map<String, any>): Promise<TPAdmin | void>;
  Updatepassword(data: Map<String, any>): Promise<TPAdmin | void>;
}
