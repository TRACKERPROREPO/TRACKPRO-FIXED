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
    this.logger = new Logger('LifeStockReportsService', {
      timestamp: true,
    });
  }
  //TODO
  async CreateReport(data: Map<String, any>): Promise<void | TPReport> {
    try {
      this.logger.log(data);
    } catch (error) {
      throw new Error('Method not implemented.');
    }
  }
  //TODO
  async UpdateTPQrCodeId(data: Map<String, any>): Promise<void | TPReport> {
    try {
      this.logger.log(data);
    } catch (error) {
      throw new Error('Method not implemented.');
    }
  }
  //TODO
  async UpdatecreatedAt(data: Map<String, any>): Promise<void | TPReport> {
    try {
      this.logger.log(data);
    } catch (error) {
      throw new Error('Method not implemented.');
    }
  }
  //TODO
  async UpdateupdatedAt(data: Map<String, any>): Promise<void | TPReport> {
    try {
      this.logger.log(data);
    } catch (error) {
      throw new Error('Method not implemented.');
    }
  }
  //TODO
  async UpdateTPDoctorId(data: Map<String, any>): Promise<void | TPReport> {
    try {
      this.logger.log(data);
    } catch (error) {
      throw new Error('Method not implemented.');
    }
  }
  //TODO
  async UpdateTPLifeStock(data: Map<String, any>): Promise<void | TPReport> {
    try {
      this.logger.log(data);
    } catch (error) {
      throw new Error('Method not implemented.');
    }
  }
  //TODO
  async UpdateTPDoctor(data: Map<String, any>): Promise<void | TPReport> {
    try {
      this.logger.log(data);
    } catch (error) {
      throw new Error('Method not implemented.');
    }
  }
  //TODO
  async Updateqrcode(data: Map<String, any>): Promise<void | TPReport> {
    try {
      this.logger.log(data);
    } catch (error) {
      throw new Error('Method not implemented.');
    }
  }
  //TODOasync
  async FindByid(data: Map<String, any>): Promise<void | TPReport> {
    try {
      this.logger.log(data);
    } catch (error) {
      throw new Error('Method not implemented.');
    }
  }
  //TODO
  async FindByTPQrCodeId(data: Map<String, any>): Promise<void | TPReport> {
    try {
      this.logger.log(data);
    } catch (error) {
      throw new Error('Method not implemented.');
    }
  }
  //TODO
  async FindBycreatedAt(data: Map<String, any>): Promise<void | TPReport> {
    try {
      this.logger.log(data);
    } catch (error) {
      throw new Error('Method not implemented.');
    }
  }
  //TODO
  async FindByupdatedAt(data: Map<String, any>): Promise<void | TPReport> {
    try {
      this.logger.log(data);
    } catch (error) {
      throw new Error('Method not implemented.');
    }
  }
  //TODO
  async FindByTPDoctorId(data: Map<String, any>): Promise<void | TPReport> {
    try {
      this.logger.log(data);
    } catch (error) {
      throw new Error('Method not implemented.');
    }
  }
  //TODO
  async FindByTPLifeStock(data: Map<String, any>): Promise<void | TPReport> {
    try {
      this.logger.log(data);
    } catch (error) {
      throw new Error('Method not implemented.');
    }
  }
  //TODO
  async FindByTPDoctor(data: Map<String, any>): Promise<void | TPReport> {
    try {
      this.logger.log(data);
    } catch (error) {
      throw new Error('Method not implemented.');
    }
  }
  //TODO
  async FindByqrcode(data: Map<String, any>): Promise<void | TPReport> {
    try {
      this.logger.log(data);
    } catch (error) {
      throw new Error('Method not implemented.');
    }
  }
}
