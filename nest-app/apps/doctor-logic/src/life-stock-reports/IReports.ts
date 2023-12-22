import { Logger } from '@nestjs/common';
import { TPReport } from '@prisma/client';
import { CreateLifeStockReportDto } from './create-life-stock-report.dto';

export interface IReports {
  logger: Logger;
  CreateReport(data: CreateLifeStockReportDto): Promise<TPReport | void>;
  UpdateTPQrCodeId(data: Map<String, any>): Promise<TPReport | void>;
  UpdateTPDoctorId(data: Map<String, any>): Promise<TPReport | void>;
  UpdateTPLifeStock(data: Map<String, any>): Promise<TPReport | void>;
  UpdateTPDoctor(data: Map<String, any>): Promise<TPReport | void>;
  Updateqrcode(data: Map<String, any>): Promise<TPReport | void>;
  FindByid(data: Map<String, any>): Promise<TPReport | void>;
  FindByTPQrCodeId(data: Map<String, any>): Promise<TPReport | void>;
  FindBycreatedAt(data: Map<String, any>): Promise<TPReport | void>;
  FindByupdatedAt(data: Map<String, any>): Promise<TPReport | void>;
  FindByTPDoctorId(data: Map<String, any>): Promise<TPReport | void>;
  FindByTPLifeStock(data: Map<String, any>): Promise<TPReport | void>;
  FindByTPDoctor(data: Map<String, any>): Promise<TPReport | void>;
  FindByqrcode(data: Map<String, any>): Promise<TPReport | void>;
}
