import { Logger } from '@nestjs/common';
import { TPDoctor } from '@prisma/client';

export interface IDoctor {
  logger: Logger;
  CreateDoctor(): TPDoctor | void | Error;
  Updatefirst_name(data: Map<String, any>): TPDoctor | Error | void;
  Updatelast_name(data: Map<String, any>): TPDoctor | Error | void;
  Updateemail(data: Map<String, any>): TPDoctor | Error | void;
  Updatenumber(data: Map<String, any>): TPDoctor | Error | void;
  Updatepassword(data: Map<String, any>): TPDoctor | Error | void;
  Updatenotifications(data: Map<String, any>): TPDoctor | Error | void;
  Updatereports(data: Map<String, any>): TPDoctor | Error | void;
  Updaterequests(data: Map<String, any>): TPDoctor | Error | void;
  FindByid(data: Map<String, any>): TPDoctor | void | Error;
  FindByfirst_name(data: Map<String, any>): TPDoctor | void | Error;
  FindBylast_name(data: Map<String, any>): TPDoctor | void | Error;
  FindByemail(data: Map<String, any>): TPDoctor | void | Error;
  FindBynumber(data: Map<String, any>): TPDoctor | void | Error;
  FindBycreatedAt(data: Map<String, any>): TPDoctor | void | Error;
  FindByupdatedAt(data: Map<String, any>): TPDoctor | void | Error;
  FindByreports(data: Map<String, any>): TPDoctor | void | Error;
  FindByrequests(data: Map<String, any>): TPDoctor | void | Error;
}
