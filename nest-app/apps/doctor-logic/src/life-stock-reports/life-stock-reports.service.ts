import { Injectable, Logger } from '@nestjs/common';
import { IReports } from './IReports';
import { TPReport } from '@prisma/client';
import { DbService } from '@app/sharedlogic/db/db.service';

@Injectable()
export class LifeStockReportsService implements IReports {
  logger: Logger;
  /**
   *
   */
  constructor(private readonly db: DbService) {
    this.logger = new Logger('LifeStockReportsService Request', {
      timestamp: true,
    });
  }
  //TODO
  async CreateReport(data: Map<String, any>): Promise<void | TPReport> {
    try {
      this.logger.log(data);
    } catch (error) {
      this.logger.error(error?.message);
    }
  }
  //TODO
  async UpdateTPQrCodeId(data: Map<String, any>): Promise<void | TPReport> {
    try {
      this.logger.log(data);
    } catch (error) {
      this.logger.error(error?.message);
    }
  }
  //TODO
  async UpdateTPDoctorId(data: Map<String, any>): Promise<void | TPReport> {
    try {
      this.logger.log(data);
    } catch (error) {
      this.logger.error(error?.message);
    }
  }
  //TODO
  async UpdateTPLifeStock(data: Map<String, any>): Promise<void | TPReport> {
    try {
      this.logger.log(data);
    } catch (error) {
      this.logger.error(error?.message);
    }
  }
  //TODO
  async UpdateTPDoctor(data: Map<String, any>): Promise<void | TPReport> {
    try {
      this.logger.log(data);
    } catch (error) {
      this.logger.error(error?.message);
    }
  }
  //TODO
  async Updateqrcode(data: Map<String, any>): Promise<void | TPReport> {
    try {
      this.logger.log(data);
    } catch (error) {
      this.logger.error(error?.message);
    }
  }
  //TODOasync
  async FindByid(data: Map<String, any>): Promise<void | TPReport> {
    try {
      this.logger.log(data);
    } catch (error) {
      this.logger.error(error?.message);
    }
  }
  //TODO
  async FindByTPQrCodeId(data: Map<String, any>): Promise<void | TPReport> {
    try {
      this.logger.log(data);
    } catch (error) {
      this.logger.error(error?.message);
    }
  }
  //TODO
  async FindBycreatedAt(data: Map<String, any>): Promise<void | TPReport> {
    try {
      this.logger.log(data);
    } catch (error) {
      this.logger.error(error?.message);
    }
  }
  //TODO
  async FindByupdatedAt(data: Map<String, any>): Promise<void | TPReport> {
    try {
      this.logger.log(data);
    } catch (error) {
      this.logger.error(error?.message);
    }
  }
  //TODO
  async FindByTPDoctorId(data: Map<String, any>): Promise<void | TPReport> {
    try {
      this.logger.log(data);
    } catch (error) {
      this.logger.error(error?.message);
    }
  }
  //TODO
  async FindByTPLifeStock(data: Map<String, any>): Promise<void | TPReport> {
    try {
      this.logger.log(data);
    } catch (error) {
      this.logger.error(error?.message);
    }
  }
  //TODO
  async FindByTPDoctor(data: Map<String, any>): Promise<void | TPReport> {
    try {
      this.logger.log(data);
    } catch (error) {
      this.logger.error(error?.message);
    }
  }
  //TODO
  async FindByqrcode(data: Map<String, any>): Promise<void | TPReport> {
    try {
      this.logger.log(data);
    } catch (error) {
      this.logger.error(error?.message);
    }
  }
}
