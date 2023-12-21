import { Logger } from '@nestjs/common';
import { TPTranferFrom, TPTransfer, TPTransferTo } from '@prisma/client';
import { CreateTransferDto } from './create-transfer.dto';

export interface ITransfer {
  logger: Logger;
  CreateTransfer(data:CreateTransferDto): Promise<TPTransfer | void>;
  FindByid(data: Map<String, any>): Promise<TPTransfer | void>;
  FindBystate(
    data: Map<String, any>,
  ): Promise<TPTransfer[] | TPTransfer | void>;
  FindByTPTransferToId(data: Map<String, any>): Promise<TPTransferTo | void>;
  FindByTPTranferFromId(data: Map<String, any>): Promise<TPTranferFrom | void>;
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
