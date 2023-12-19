import { Logger } from '@nestjs/common';
import { TPRequest } from '@prisma/client';

export interface ICheckUp {
  logger: Logger;
  ScheduleCheckUp(): Promise<TPRequest | void>;
  FindBytime(data: Map<String, any>): Promise<TPRequest[] | void>;
  Updatetime(data: Map<String, any>): Promise<TPRequest | void>;
  FindByid(data: Map<String, any>): Promise<TPRequest | void>;
  FindByTPRequesterId(data: Map<String, any>): Promise<TPRequest | void>;
  FindByDetails(data: Map<String, any>): Promise<TPRequest | void>;
  FindBylocation(data: Map<String, any>): Promise<TPRequest | void>;
  FindBystatus(data: Map<String, any>): Promise<TPRequest | void>;
  FindBycreatedAt(
    data: Map<String, any>,
  ): Promise<TPRequest[] | TPRequest | void>;
  FindByupdatedAt(
    data: Map<String, any>,
  ): Promise<TPRequest[] | TPRequest | void>;
  FindByTPDoctorId(data: Map<String, any>): Promise<TPRequest | void>;
  FindByTPDoctor(data: Map<String, any>): Promise<TPRequest | void>;
  FindByrequester(data: Map<String, any>): Promise<TPRequest | void>;
  UpdateTPRequesterId(data: Map<String, any>): Promise<TPRequest | void>;
  UpdateDetails(data: Map<String, any>): Promise<TPRequest | void>;
  Updatelocation(data: Map<String, any>): Promise<TPRequest | void>;
  Updatestatus(data: Map<String, any>): Promise<TPRequest | void>;
  UpdateTPDoctorId(data: Map<String, any>): Promise<TPRequest | void>;
  UpdateTPDoctor(data: Map<String, any>): Promise<TPRequest | void>;
  Updaterequester(data: Map<String, any>): Promise<TPRequest | void>;
}
