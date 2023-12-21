import { Logger } from '@nestjs/common';
import { TPDoctor } from '@prisma/client';
import { CreateDoctorDto } from './create-doctor.dto';

export interface IDoctor {
  logger: Logger;
  CreateDoctor(data: CreateDoctorDto): Promise<TPDoctor | void>;
  Updatefirst_name(data: Map<String, any>): Promise<TPDoctor | void>;
  Updatelast_name(data: Map<String, any>): Promise<TPDoctor | void>;
  Updateemail(data: Map<String, any>): Promise<TPDoctor | void>;
  Updatenumber(data: Map<String, any>): Promise<TPDoctor | void>;
  Updatepassword(data: Map<String, any>): Promise<TPDoctor | void>;
  Updatenotifications(data: Map<String, any>): Promise<TPDoctor | void>;
  Updatereports(data: Map<String, any>): Promise<TPDoctor | void>;
  Updaterequests(data: Map<String, any>): Promise<TPDoctor | void>;
  FindByid(data: Map<String, any>): Promise<TPDoctor | void>;
  FindByfirst_name(data: Map<String, any>): Promise<TPDoctor | void>;
  FindBylast_name(data: Map<String, any>): Promise<TPDoctor | void>;
  FindByemail(data: Map<String, any>): Promise<TPDoctor | void>;
  FindBynumber(data: Map<String, any>): Promise<TPDoctor | void>;
  FindBycreatedAt(
    data: Map<String, any>,
  ): Promise<TPDoctor | TPDoctor[] | void>;
  FindByupdatedAt(
    data: Map<String, any>,
  ): Promise<TPDoctor | TPDoctor[] | void>;
  FindByreports(data: Map<String, any>): Promise<TPDoctor | TPDoctor[] | void>;
  FindByrequests(data: Map<String, any>): Promise<TPDoctor | TPDoctor[] | void>;
}
