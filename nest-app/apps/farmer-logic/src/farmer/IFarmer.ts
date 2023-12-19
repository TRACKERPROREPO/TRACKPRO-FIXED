import { Logger } from '@nestjs/common';
import {
  TPFarmer,
  TPLifeStock,
  TPNotification,
  TPRequester,
  TPTranferFrom,
  TPTransferTo,
} from '@prisma/client';

export interface IFarmer {
  logger:Logger
  CreateFarmer(): Promise<TPFarmer | void>;
  findByid(data: Map<String, any>): Promise<TPFarmer | void>;
  findByfirst_name(data: Map<String, any>): Promise<TPFarmer | void>;
  findBylast_name(data: Map<String, any>): Promise<TPFarmer | void>;
  findByemail(data: Map<String, any>): Promise<TPFarmer | void>;
  findBynumber(data: Map<String, any>): Promise<TPFarmer | void>;
  findBylifestock(data: Map<String, any>): Promise<TPLifeStock[] | void>;
  findByTPRequester(data: Map<String, any>): Promise<TPRequester[] | void>;
  findByTPTranferFrom(data: Map<String, any>): Promise<TPTranferFrom[] | void>;
  findByTPTransferTo(data: Map<String, any>): Promise<TPTransferTo[] | void>;
  Updatefirst_name(data: Map<String, any>): Promise<TPFarmer | void>;
  Updatelast_name(data: Map<String, any>): Promise<TPFarmer | void>;
  Updateemail(data: Map<String, any>): Promise<TPFarmer | void>;
  Updatenumber(data: Map<String, any>): Promise<TPFarmer | void>;
  Updatepassword(data: Map<String, any>): Promise<Boolean | void>;
  Updatelifestock(data: Map<String, any>): Promise<TPFarmer | void>;
  Updatenotifications(data: Map<String, any>): Promise<TPNotification | void>;
  UpdateTPRequester(data: Map<String, any>): Promise<TPRequester | void>;
  UpdateTPTranferFrom(data: Map<String, any>): Promise<TPTranferFrom | void>;
  UpdateTPTransferTo(data: Map<String, any>): Promise<TPTransferTo | void>;
}
