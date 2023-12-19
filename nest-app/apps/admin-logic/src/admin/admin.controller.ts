import { Controller, Logger, Post } from '@nestjs/common';
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
  logger: Logger;
  // TODO
  @Post('CreateAdmin')
  async CreateAdmin(data: Map<String, any>): Promise<void | TPAdmin> {
    try {
    } catch (error) {
      throw new Error('Method not implemented.');
    }
  }
  // TODO
  @Post('FindByid')
  async FindByid(data: Map<String, any>): Promise<void | TPAdmin> {
    try {
    } catch (error) {
      throw new Error('Method not implemented.');
    }
  }
  // TODO
  @Post('FindByfirst_name')
  async FindByfirst_name(data: Map<String, any>): Promise<void | TPAdmin> {
    try {
    } catch (error) {
      throw new Error('Method not implemented.');
    }
  }
  // TODO
  @Post('FindBylast_name')
  async FindBylast_name(data: Map<String, any>): Promise<void | TPAdmin> {
    try {
    } catch (error) {
      throw new Error('Method not implemented.');
    }
  }
  // TODO
  @Post('FindByemail')
  async FindByemail(data: Map<String, any>): Promise<void | TPAdmin> {
    try {
    } catch (error) {
      throw new Error('Method not implemented.');
    }
  }
  // TODO
  @Post('FindBynumber')
  async FindBynumber(data: Map<String, any>): Promise<void | TPAdmin> {
    try {
    } catch (error) {
      throw new Error('Method not implemented.');
    }
  }
  // TODO
  @Post('FindBypassword')
  async FindBypassword(data: Map<String, any>): Promise<void | TPAdmin> {
    try {
    } catch (error) {
      throw new Error('Method not implemented.');
    }
  }
  // TODO
  @Post('FindBycreatedAt')
  async FindBycreatedAt(data: Map<String, any>): Promise<void | TPAdmin> {
    try {
    } catch (error) {
      throw new Error('Method not implemented.');
    }
  }
  // TODO
  @Post('FindByupdatedAt')
  async FindByupdatedAt(data: Map<String, any>): Promise<void | TPAdmin> {
    try {
    } catch (error) {
      throw new Error('Method not implemented.');
    }
  }
  // TODO
  @Post('Updatefirst_name')
  async Updatefirst_name(data: Map<String, any>): Promise<void | TPAdmin> {
    try {
    } catch (error) {
      throw new Error('Method not implemented.');
    }
  }
  // TODO
  @Post('Updatelast_name')
  async Updatelast_name(data: Map<String, any>): Promise<void | TPAdmin> {
    try {
    } catch (error) {
      throw new Error('Method not implemented.');
    }
  }
  // TODO
  @Post('Updateemail')
  async Updateemail(data: Map<String, any>): Promise<void | TPAdmin> {
    try {
    } catch (error) {
      throw new Error('Method not implemented.');
    }
  }
  // TODO
  @Post('Updatenumber')
  async Updatenumber(data: Map<String, any>): Promise<void | TPAdmin> {
    try {
    } catch (error) {
      throw new Error('Method not implemented.');
    }
  }
  // TODO
  @Post('Updatepassword')
  async Updatepassword(data: Map<String, any>): Promise<void | TPAdmin> {
    try {
    } catch (error) {
      throw new Error('Method not implemented.');
    }
  }
}
