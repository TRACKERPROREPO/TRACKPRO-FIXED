import { Controller, Post } from '@nestjs/common';
import { IReports } from './IReports';
import { LifeStockReportsService } from './life-stock-reports.service';

@Controller('life-stock-reports')
export class LifeStockReportsController implements IReports {
  /**
   *
   */
  constructor(private readonly reports: LifeStockReportsService) {}
  // TODO
  @Post("CreateReport")
  CreateReport() {
    throw new Error('Method not implemented.');
  }
  // TODO
  @Post("UpdateTPQrCodeId")
  UpdateTPQrCodeId() {
    throw new Error('Method not implemented.');
  }
  // TODO
  @Post("UpdatecreatedAt")
  UpdatecreatedAt() {
    throw new Error('Method not implemented.');
  }
  // TODO
  @Post("UpdateupdatedAt")
  UpdateupdatedAt() {
    throw new Error('Method not implemented.');
  }
  // TODO
  @Post("UpdateTPDoctorId")
  UpdateTPDoctorId() {
    throw new Error('Method not implemented.');
  }
  // TODO
  @Post("UpdateTPLifeStock")
  UpdateTPLifeStock() {
    throw new Error('Method not implemented.');
  }
  // TODO
  @Post("UpdateTPDoctor")
  UpdateTPDoctor() {
    throw new Error('Method not implemented.');
  }
  // TODO
  @Post("Updateqrcode")
  Updateqrcode() {
    throw new Error('Method not implemented.');
  }
  // TODO
  @Post("FindByid")
  FindByid() {
    throw new Error('Method not implemented.');
  }
  // TODO
  @Post("FindByTPQrCodeId")
  FindByTPQrCodeId() {
    throw new Error('Method not implemented.');
  }
  // TODO
  @Post("FindBycreatedAt")
  FindBycreatedAt() {
    throw new Error('Method not implemented.');
  }
  // TODO
  @Post("FindByupdatedAt")
  FindByupdatedAt() {
    throw new Error('Method not implemented.');
  }
  // TODO
  @Post("FindByTPDoctorId")
  FindByTPDoctorId() {
    throw new Error('Method not implemented.');
  }
  // TODO
  @Post("FindByTPLifeStock")
  FindByTPLifeStock() {
    throw new Error('Method not implemented.');
  }
  // TODO
  @Post("FindByTPDoctor")
  FindByTPDoctor() {
    throw new Error('Method not implemented.');
  }
  // TODO
  @Post("FindByqrcode")
  FindByqrcode() {
    throw new Error('Method not implemented.');
  }
}
