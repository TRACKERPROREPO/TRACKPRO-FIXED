import { Logger } from '@nestjs/common';
import { TPTransfer } from '@prisma/client';

export interface ITransfer {
  logger: Logger;
  CreateTransfer(data: Map<String, any>): Promise<TPTransfer | void>;
  FindByid(data: Map<String, any>): Promise<TPTransfer | void>;
  FindBystate(
    data: Map<String, any>,
  ): Promise<TPTransfer[] | TPTransfer | void>;
  FindByTPTransferToId(data: Map<String, any>): Promise<TPTransfer | void>;
  FindByTPTranferFromId(data: Map<String, any>): Promise<TPTransfer | void>;
  FindBycreatedAt(
    data: Map<String, any>,
  ): Promise<TPTransfer[] | TPTransfer | void>;
  FindByupdatedAt(
    data: Map<String, any>,
  ): Promise<TPTransfer[] | TPTransfer | void>;
  FindByfrom(data: Map<String, any>): Promise<TPTransfer | void>;
  FindByto(data: Map<String, any>): Promise<TPTransfer | void>;
  Updatestate(data: Map<String, any>): Promise<TPTransfer | void>;
  UpdateTPTransferToId(data: Map<String, any>): Promise<TPTransfer | void>;
  UpdateTPTranferFromId(data: Map<String, any>): Promise<TPTransfer | void>;
  Updatefrom(data: Map<String, any>): Promise<TPTransfer | void>;
  Updateto(data: Map<String, any>): Promise<TPTransfer | void>;
}
