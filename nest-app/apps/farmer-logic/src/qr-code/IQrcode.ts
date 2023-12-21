import { Logger } from '@nestjs/common';
import { TPQrCode } from '@prisma/client';
import { CreateQrcodeDto } from './create-qrcode.dto';

export interface IQrcode {
  logger: Logger;
  CreateQrcode(data: CreateQrcodeDto): Promise<TPQrCode | void>;
  Updateid(data: Map<String, any>): Promise<TPQrCode | void>;
  Updatelink(data: Map<String, any>): Promise<TPQrCode | void>;
  UpdateTPLifeStock(data: Map<String, any>): Promise<TPQrCode | void>;
  UpdateTPReport(data: Map<String, any>): Promise<TPQrCode | void>;
  FindByid(data: Map<String, any>): Promise<TPQrCode | void>;
  FindBylink(data: Map<String, any>): Promise<TPQrCode | void>;
  FindBycreatedAt(data: Map<String, any>): Promise<TPQrCode | void>;
  FindByupdatedAt(data: Map<String, any>): Promise<TPQrCode | void>;
  FindByTPLifeStock(data: Map<String, any>): Promise<TPQrCode | void>;
  FindByTPReport(data: Map<String, any>): Promise<TPQrCode | void>;
}
