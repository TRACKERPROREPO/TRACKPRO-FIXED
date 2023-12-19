import { Injectable, Logger } from '@nestjs/common';
import { IQrcode } from './IQrcode';
import { TPQrCode } from '@prisma/client';
import { DbService } from '@app/sharedlogic/db/db.service';

@Injectable()
export class QrCodeService implements IQrcode {
  logger: Logger;
  constructor(private readonly db: DbService) {
    this.logger = new Logger('QrCodeService Request', {
      timestamp: true,
    });
  }
  // TODO
  async CreateQrcode(data: Map<String, any>): Promise<void | TPQrCode> {
    try {
      this.logger.log(data);
    } catch (error) {
      this.logger.error(error?.message, undefined, 'ERROR');
    }
  }
  // TODO
  async Updateid(data: Map<String, any>): Promise<void | TPQrCode> {
    try {
      this.logger.log(data);
    } catch (error) {
      this.logger.error(error?.message, undefined, 'ERROR');
    }
  }
  // TODO
  async Updatelink(data: Map<String, any>): Promise<void | TPQrCode> {
    try {
      this.logger.log(data);
    } catch (error) {
      this.logger.error(error?.message, undefined, 'ERROR');
    }
  }
  // TODO
  async UpdateTPLifeStock(data: Map<String, any>): Promise<void | TPQrCode> {
    try {
      this.logger.log(data);
    } catch (error) {
      this.logger.error(error?.message, undefined, 'ERROR');
    }
  }
  // TODO
  async UpdateTPReport(data: Map<String, any>): Promise<void | TPQrCode> {
    try {
      this.logger.log(data);
    } catch (error) {
      this.logger.error(error?.message, undefined, 'ERROR');
    }
  }
  // TODO
  async FindByid(data: Map<String, any>): Promise<void | TPQrCode> {
    try {
      this.logger.log(data);
    } catch (error) {
      this.logger.error(error?.message, undefined, 'ERROR');
    }
  }
  // TODO
  async FindBylink(data: Map<String, any>): Promise<void | TPQrCode> {
    try {
      this.logger.log(data);
    } catch (error) {
      this.logger.error(error?.message, undefined, 'ERROR');
    }
  }
  // TODO
  async FindBycreatedAt(data: Map<String, any>): Promise<void | TPQrCode> {
    try {
      this.logger.log(data);
    } catch (error) {
      this.logger.error(error?.message, undefined, 'ERROR');
    }
  }
  // TODO
  async FindByupdatedAt(data: Map<String, any>): Promise<void | TPQrCode> {
    try {
      this.logger.log(data);
    } catch (error) {
      this.logger.error(error?.message, undefined, 'ERROR');
    }
  }
  // TODO
  async FindByTPLifeStock(data: Map<String, any>): Promise<void | TPQrCode> {
    try {
      this.logger.log(data);
    } catch (error) {
      this.logger.error(error?.message, undefined, 'ERROR');
    }
  }
  // TODO
  async FindByTPReport(data: Map<String, any>): Promise<void | TPQrCode> {
    try {
      this.logger.log(data);
    } catch (error) {
      this.logger.error(error?.message, undefined, 'ERROR');
    }
  }
}
