import { Injectable, Logger } from '@nestjs/common';
import { ITransfer } from './ITransfer';
import { TPTransfer } from '@prisma/client';
import { DbService } from '@app/sharedlogic/db/db.service';

@Injectable()
export class TransferService implements ITransfer {
  logger: Logger;
  constructor(private readonly db: DbService) {
    this.logger = new Logger('TransferService Request', {
      timestamp: true,
    });
  }
  async CreateTransfer(data: Map<String, any>): Promise<void | TPTransfer> {
    try {
      this.logger.log(data);
    } catch (error) {
      this.logger.error(error?.message);
    }
  }
  async FindByid(data: Map<String, any>): Promise<void | TPTransfer> {
    try {
      this.logger.log(data);
    } catch (error) {
      this.logger.error(error?.message);
    }
  }
  async FindBystate(
    data: Map<String, any>,
  ): Promise<void | TPTransfer | TPTransfer[]> {
    try {
      this.logger.log(data);
    } catch (error) {
      this.logger.error(error?.message);
    }
  }
  async FindByTPTransferToId(
    data: Map<String, any>,
  ): Promise<void | TPTransfer> {
    try {
      this.logger.log(data);
    } catch (error) {
      this.logger.error(error?.message);
    }
  }
  async FindByTPTranferFromId(
    data: Map<String, any>,
  ): Promise<void | TPTransfer> {
    try {
      this.logger.log(data);
    } catch (error) {
      this.logger.error(error?.message);
    }
  }
  async FindBycreatedAt(
    data: Map<String, any>,
  ): Promise<void | TPTransfer | TPTransfer[]> {
    try {
      this.logger.log(data);
    } catch (error) {
      this.logger.error(error?.message);
    }
  }
  async FindByupdatedAt(
    data: Map<String, any>,
  ): Promise<void | TPTransfer | TPTransfer[]> {
    try {
      this.logger.log(data);
    } catch (error) {
      this.logger.error(error?.message);
    }
  }
  async FindByfrom(data: Map<String, any>): Promise<void | TPTransfer> {
    try {
      this.logger.log(data);
    } catch (error) {
      this.logger.error(error?.message);
    }
  }
  async FindByto(data: Map<String, any>): Promise<void | TPTransfer> {
    try {
      this.logger.log(data);
    } catch (error) {
      this.logger.error(error?.message);
    }
  }
  async Updatestate(data: Map<String, any>): Promise<void | TPTransfer> {
    try {
      this.logger.log(data);
    } catch (error) {
      this.logger.error(error?.message);
    }
  }
  async UpdateTPTransferToId(
    data: Map<String, any>,
  ): Promise<void | TPTransfer> {
    try {
      this.logger.log(data);
    } catch (error) {
      this.logger.error(error?.message);
    }
  }
  async UpdateTPTranferFromId(
    data: Map<String, any>,
  ): Promise<void | TPTransfer> {
    try {
      this.logger.log(data);
    } catch (error) {
      this.logger.error(error?.message);
    }
  }
  async Updatefrom(data: Map<String, any>): Promise<void | TPTransfer> {
    try {
      this.logger.log(data);
    } catch (error) {
      this.logger.error(error?.message);
    }
  }
  async Updateto(data: Map<String, any>): Promise<void | TPTransfer> {
    try {
      this.logger.log(data);
    } catch (error) {
      this.logger.error(error?.message);
    }
  }
}
