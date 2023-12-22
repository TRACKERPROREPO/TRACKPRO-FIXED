import { Injectable, Logger } from '@nestjs/common';
import { IReports } from './IReports';
import { TPReport } from '@prisma/client';
import { DbService } from '@app/sharedlogic/db/db.service';
import { CreateCheckUpRequestDto } from 'apps/farmer-logic/src/check-up-request/create-check-up-request.dto';

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

  async CreateReport(data: CreateCheckUpRequestDto): Promise<void | TPReport> {
    try {
      const report = await this.db.tPReport;
      this.logger.log(data);
    } catch (error) {
      this.logger.error(error?.message);
    }
  }

  async UpdateTPQrCodeId(data: Map<String, any>): Promise<void | TPReport> {
    try {
      const report = await this.db.tPReport.update({
        data: {
          TPQrCodeId: data['new_TPQrCodeId'],
        },
        where: {
          id: data['id'],
        },
      });
      this.logger.log(data);
      return report;
    } catch (error) {
      this.logger.error(error?.message);
    }
  }

  async UpdateTPDoctorId(data: Map<String, any>): Promise<void | TPReport> {
    try {
      const report = await this.db.tPReport.update({
        data: {
          TPQrCodeId: data['new_TPDoctorId'],
        },
        where: {
          id: data['id'],
        },
      });
      this.logger.log(data);
      return report;
    } catch (error) {
      this.logger.error(error?.message);
    }
  }

  async UpdateTPLifeStock(data: Map<String, any>): Promise<void | TPReport> {
    try {
      const report = await this.db.tPReport.update({
        data: {
          TPLifeStock: {
            connect: {
              id: data['new_lifeStockId'],
            },
          },
        },
        where: {
          id: data['id'],
        },
      });
      this.logger.log(data);
      return report;
    } catch (error) {
      this.logger.error(error?.message);
    }
  }

  async UpdateTPDoctor(data: Map<String, any>): Promise<void | TPReport> {
    try {
      const report = await this.db.tPReport.update({
        data: {
          TPDoctor: {
            connect: {
              id: data['new_doctorId'],
            },
          },
        },
        where: {
          id: data['id'],
        },
      });
      this.logger.log(data);
      return report;
    } catch (error) {
      this.logger.error(error?.message);
    }
  }

  async Updateqrcode(data: Map<String, any>): Promise<void | TPReport> {
    try {
      const report = await this.db.tPReport.update({
        data: {
          qrcode: {
            connect: {
              id: data['new_qrcodeId'],
            },
          },
        },
        where: {
          id: data['id'],
        },
      });
      this.logger.log(data);
      return report;
    } catch (error) {
      this.logger.error(error?.message);
    }
  }

  async;
  async FindByid(data: Map<String, any>): Promise<void | TPReport> {
    try {
      const report = await this.db.tPReport.findFirstOrThrow({
        where: {
          id: data['id'],
        },
      });
      this.logger.log(data);
      return report;
    } catch (error) {
      this.logger.error(error?.message);
    }
  }

  async FindByTPQrCodeId(data: Map<String, any>): Promise<void | TPReport> {
    try {
      const report = await this.db.tPReport.findFirstOrThrow({
        where: {
          TPQrCodeId: data['TPQrCodeId'],
        },
      });
      this.logger.log(data);
      return report;
    } catch (error) {
      this.logger.error(error?.message);
    }
  }

  async FindBycreatedAt(data: Map<String, any>): Promise<void | TPReport> {
    try {
      const report = await this.db.tPReport.findFirstOrThrow({
        where: {
          createdAt: data['createdAt'],
        },
      });
      this.logger.log(data);
      return report;
    } catch (error) {
      this.logger.error(error?.message);
    }
  }

  async FindByupdatedAt(data: Map<String, any>): Promise<void | TPReport> {
    try {
      const report = await this.db.tPReport.findFirstOrThrow({
        where: {
          updatedAt: data['updatedAt'],
        },
      });
      this.logger.log(data);
      return report;
    } catch (error) {
      this.logger.error(error?.message);
    }
  }

  async FindByTPDoctorId(data: Map<String, any>): Promise<void | TPReport> {
    try {
      const report = await this.db.tPReport.findFirstOrThrow({
        where: {
          TPDoctorId: data['TPDoctorId'],
        },
      });
      this.logger.log(data);
      return report;
    } catch (error) {
      this.logger.error(error?.message);
    }
  }

  async FindByTPLifeStock(data: Map<String, any>): Promise<void | TPReport> {
    try {
      const report = await this.db.tPReport.findFirstOrThrow({
        where: {
          TPLifeStock: data['TPLifeStock'],
        },
      });
      this.logger.log(data);
      return report;
    } catch (error) {
      this.logger.error(error?.message);
    }
  }

  async FindByTPDoctor(data: Map<String, any>): Promise<void | TPReport> {
    try {
      const report = await this.db.tPReport.findFirstOrThrow({
        where: {
          TPDoctor: data['TPDoctor'],
        },
      });
      this.logger.log(data);
      return report;
    } catch (error) {
      this.logger.error(error?.message);
    }
  }

  async FindByqrcode(data: Map<String, any>): Promise<void | TPReport> {
    try {
      const report = await this.db.tPReport.findFirstOrThrow({
        where: {
          qrcode: data['qrcode'],
        },
      });
      this.logger.log(data);
      return report;
    } catch (error) {
      this.logger.error(error?.message);
    }
  }
}
