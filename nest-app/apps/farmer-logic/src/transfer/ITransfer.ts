import { Logger } from '@nestjs/common';
import { TPTransfer } from '@prisma/client';

export interface ITransfer {
  logger: Logger;
  CreateTransfer(): Promise<TPTransfer | void>;
  FindByid(): Promise<TPTransfer | void>;
  FindBystate(): Promise<TPTransfer[] | TPTransfer | void>;
  FindByTPTransferToId(): Promise<TPTransfer | void>;
  FindByTPTranferFromId(): Promise<TPTransfer | void>;
  FindBycreatedAt(): Promise<TPTransfer[] | TPTransfer | void>;
  FindByupdatedAt(): Promise<TPTransfer[] | TPTransfer | void>;
  FindByfrom(): Promise<TPTransfer | void>;
  FindByto(): Promise<TPTransfer | void>;
  Updatestate(): Promise<TPTransfer | void>;
  UpdateTPTransferToId(): Promise<TPTransfer | void>;
  UpdateTPTranferFromId(): Promise<TPTransfer | void>;
  Updatefrom(): Promise<TPTransfer | void>;
  Updateto(): Promise<TPTransfer | void>;
}
