import { Injectable, Logger } from '@nestjs/common';
import { DoctorService } from 'apps/doctor-logic/src/doctor/doctor.service';
import { FarmerRequestsService } from 'apps/doctor-logic/src/farmer-requests/farmer-requests.service';
import { LifeStockReportsService } from 'apps/doctor-logic/src/life-stock-reports/life-stock-reports.service';
import { CheckUpRequestService } from 'apps/farmer-logic/src/check-up-request/check-up-request.service';
import { FarmerService } from 'apps/farmer-logic/src/farmer/farmer.service';
import { LifestockService } from 'apps/farmer-logic/src/lifestock/lifestock.service';
import { QrCodeService } from 'apps/farmer-logic/src/qr-code/qr-code.service';
import { TransferService } from 'apps/farmer-logic/src/transfer/transfer.service';
import { IAdmin } from './IAdmin';
import { TPAdmin } from '@prisma/client';

@Injectable()
export class AdminService
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
    this.logger = new Logger('AdminService', {
      timestamp: true,
    });
  }
  async CreateAdmin(data: Map<String, any>): Promise<void | TPAdmin> {
    try {
      this.logger.log(data);
    } catch (error) {
      throw new Error('Method not implemented.');
    }
  }
  async FindByid(data: Map<String, any>): Promise<void | TPAdmin> {
    try {
      this.logger.log(data);
    } catch (error) {
      throw new Error('Method not implemented.');
    }
  }
  async FindByfirst_name(data: Map<String, any>): Promise<void | TPAdmin> {
    try {
      this.logger.log(data);
    } catch (error) {
      throw new Error('Method not implemented.');
    }
  }
  async FindBylast_name(data: Map<String, any>): Promise<void | TPAdmin> {
    try {
      this.logger.log(data);
    } catch (error) {
      throw new Error('Method not implemented.');
    }
  }
  async FindByemail(data: Map<String, any>): Promise<void | TPAdmin> {
    try {
      this.logger.log(data);
    } catch (error) {
      throw new Error('Method not implemented.');
    }
  }
  async FindBynumber(data: Map<String, any>): Promise<void | TPAdmin> {
    try {
      this.logger.log(data);
    } catch (error) {
      throw new Error('Method not implemented.');
    }
  }
  async FindBypassword(data: Map<String, any>): Promise<void | TPAdmin> {
    try {
      this.logger.log(data);
    } catch (error) {
      throw new Error('Method not implemented.');
    }
  }
  async FindBycreatedAt(data: Map<String, any>): Promise<void | TPAdmin> {
    try {
      this.logger.log(data);
    } catch (error) {
      throw new Error('Method not implemented.');
    }
  }
  async FindByupdatedAt(data: Map<String, any>): Promise<void | TPAdmin> {
    try {
      this.logger.log(data);
    } catch (error) {
      throw new Error('Method not implemented.');
    }
  }
  async Updatefirst_name(data: Map<String, any>): Promise<void | TPAdmin> {
    try {
      this.logger.log(data);
    } catch (error) {
      throw new Error('Method not implemented.');
    }
  }
  async Updatelast_name(data: Map<String, any>): Promise<void | TPAdmin> {
    try {
      this.logger.log(data);
    } catch (error) {
      throw new Error('Method not implemented.');
    }
  }
  async Updateemail(data: Map<String, any>): Promise<void | TPAdmin> {
    try {
      this.logger.log(data);
    } catch (error) {
      throw new Error('Method not implemented.');
    }
  }
  async Updatenumber(data: Map<String, any>): Promise<void | TPAdmin> {
    try {
      this.logger.log(data);
    } catch (error) {
      throw new Error('Method not implemented.');
    }
  }
  async Updatepassword(data: Map<String, any>): Promise<void | TPAdmin> {
    try {
      this.logger.log(data);
    } catch (error) {
      throw new Error('Method not implemented.');
    }
  }

  logger: Logger;
}
