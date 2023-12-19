import { Logger } from '@nestjs/common';
import { TPRequest } from '@prisma/client';

export interface IFarmerRequests {
  logger: Logger;
  FindByid(data: Map<String, any>): Promise<TPRequest | void>;
  FindByTPRequesterId(data: Map<String, any>): Promise<TPRequest | void>;
  FindBylocation(data: Map<String, any>): Promise<TPRequest | void>;
  FindBystatus(data: Map<String, any>): Promise<TPRequest | void>;
  FindBycreatedAt(data: Map<String, any>): Promise<TPRequest | void>;
  FindByupdatedAt(data: Map<String, any>): Promise<TPRequest | void>;
  FindByTPDoctorId(data: Map<String, any>): Promise<TPRequest | void>;
  FindByTPDoctor(data: Map<String, any>): Promise<TPRequest | void>;
  FindByrequester(data: Map<String, any>): Promise<TPRequest | void>;
}
