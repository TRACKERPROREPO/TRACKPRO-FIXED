import { Controller, Logger, Post } from '@nestjs/common';
import { IReports } from './IReports';
import { LifeStockReportsService } from './life-stock-reports.service';
import { TPReport } from '@prisma/client';

@Controller('life-stock-reports')
export class LifeStockReportsController implements IReports {
  logger: Logger;
  CreateReport(data: Map<String, any>): Promise<void | TPReport> {
    throw new Error('Method not implemented.');
  }
  UpdateTPQrCodeId(data: Map<String, any>): Promise<void | TPReport> {
    throw new Error('Method not implemented.');
  }
  UpdatecreatedAt(data: Map<String, any>): Promise<void | TPReport> {
    throw new Error('Method not implemented.');
  }
  UpdateupdatedAt(data: Map<String, any>): Promise<void | TPReport> {
    throw new Error('Method not implemented.');
  }
  UpdateTPDoctorId(data: Map<String, any>): Promise<void | TPReport> {
    throw new Error('Method not implemented.');
  }
  UpdateTPLifeStock(data: Map<String, any>): Promise<void | TPReport> {
    throw new Error('Method not implemented.');
  }
  UpdateTPDoctor(data: Map<String, any>): Promise<void | TPReport> {
    throw new Error('Method not implemented.');
  }
  Updateqrcode(data: Map<String, any>): Promise<void | TPReport> {
    throw new Error('Method not implemented.');
  }
  FindByid(data: Map<String, any>): Promise<void | TPReport> {
    throw new Error('Method not implemented.');
  }
  FindByTPQrCodeId(data: Map<String, any>): Promise<void | TPReport> {
    throw new Error('Method not implemented.');
  }
  FindBycreatedAt(data: Map<String, any>): Promise<void | TPReport> {
    throw new Error('Method not implemented.');
  }
  FindByupdatedAt(data: Map<String, any>): Promise<void | TPReport> {
    throw new Error('Method not implemented.');
  }
  FindByTPDoctorId(data: Map<String, any>): Promise<void | TPReport> {
    throw new Error('Method not implemented.');
  }
  FindByTPLifeStock(data: Map<String, any>): Promise<void | TPReport> {
    throw new Error('Method not implemented.');
  }
  FindByTPDoctor(data: Map<String, any>): Promise<void | TPReport> {
    throw new Error('Method not implemented.');
  }
  FindByqrcode(data: Map<String, any>): Promise<void | TPReport> {
    throw new Error('Method not implemented.');
  }
  /**
   *
   */
}
