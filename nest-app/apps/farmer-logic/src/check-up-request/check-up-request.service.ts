import { Injectable, Logger } from '@nestjs/common';
import { ICheckUp } from './ICheckUp';
import { TPRequest } from '@prisma/client';
import { DbService } from '@app/sharedlogic/db/db.service';

@Injectable()
export class CheckUpRequestService implements ICheckUp {
  logger: Logger;
  constructor(private readonly db: DbService) {
    this.logger = new Logger('CheckUpRequestService Request', {
      timestamp: true,
    });
  }
  async ScheduleCheckUp(): Promise<void | TPRequest> {
    try {
    } catch (error) {
      this.logger.error(error?.message);
    }
  }
  //TODO
  async FindBytime(data: Map<String, any>): Promise<void | TPRequest[]> {
    try {
      this.logger.log(data);
    } catch (error) {
      this.logger.error(error?.message);
    }
  }
  //TODO
  async Updatetime(data: Map<String, any>): Promise<void | TPRequest> {
    try {
      this.logger.log(data);
    } catch (error) {
      this.logger.error(error?.message);
    }
  }
  //TODO
  async FindByid(data: Map<String, any>): Promise<void | TPRequest> {
    try {
      this.logger.log(data);
    } catch (error) {
      this.logger.error(error?.message);
    }
  }
  //TODO
  async FindByTPRequesterId(data: Map<String, any>): Promise<void | TPRequest> {
    try {
      this.logger.log(data);
    } catch (error) {
      this.logger.error(error?.message);
    }
  }
  //TODO
  async FindByDetails(data: Map<String, any>): Promise<void | TPRequest> {
    try {
      this.logger.log(data);
    } catch (error) {
      this.logger.error(error?.message);
    }
  }
  //TODO
  async FindBylocation(data: Map<String, any>): Promise<void | TPRequest> {
    try {
      this.logger.log(data);
    } catch (error) {
      this.logger.error(error?.message);
    }
  }
  //TODO
  async FindBystatus(data: Map<String, any>): Promise<void | TPRequest> {
    try {
      this.logger.log(data);
    } catch (error) {
      this.logger.error(error?.message);
    }
  }
  //TODO
  async FindBycreatedAt(
    data: Map<String, any>,
  ): Promise<void | TPRequest | TPRequest[]> {
    try {
      this.logger.log(data);
    } catch (error) {
      this.logger.error(error?.message);
    }
  }
  //TODO
  async FindByupdatedAt(
    data: Map<String, any>,
  ): Promise<void | TPRequest | TPRequest[]> {
    try {
      this.logger.log(data);
    } catch (error) {
      this.logger.error(error?.message);
    }
  }
  //TODO
  async FindByTPDoctorId(data: Map<String, any>): Promise<void | TPRequest> {
    try {
      this.logger.log(data);
    } catch (error) {
      this.logger.error(error?.message);
    }
  }
  //TODO
  async FindByTPDoctor(data: Map<String, any>): Promise<void | TPRequest> {
    try {
      this.logger.log(data);
    } catch (error) {
      this.logger.error(error?.message);
    }
  }
  //TODO
  async FindByrequester(data: Map<String, any>): Promise<void | TPRequest> {
    try {
      this.logger.log(data);
    } catch (error) {
      this.logger.error(error?.message);
    }
  }
  //TODO
  async UpdateTPRequesterId(data: Map<String, any>): Promise<void | TPRequest> {
    try {
      this.logger.log(data);
    } catch (error) {
      this.logger.error(error?.message);
    }
  }
  //TODO
  async UpdateDetails(data: Map<String, any>): Promise<void | TPRequest> {
    try {
      this.logger.log(data);
    } catch (error) {
      this.logger.error(error?.message);
    }
  }
  //TODO
  async Updatelocation(data: Map<String, any>): Promise<void | TPRequest> {
    try {
      this.logger.log(data);
    } catch (error) {
      this.logger.error(error?.message);
    }
  }
  //TODO
  async Updatestatus(data: Map<String, any>): Promise<void | TPRequest> {
    try {
      this.logger.log(data);
    } catch (error) {
      this.logger.error(error?.message);
    }
  }
  //TODO
  async UpdateTPDoctorId(data: Map<String, any>): Promise<void | TPRequest> {
    try {
      this.logger.log(data);
    } catch (error) {
      this.logger.error(error?.message);
    }
  }
  //TODO
  async UpdateTPDoctor(data: Map<String, any>): Promise<void | TPRequest> {
    try {
      this.logger.log(data);
    } catch (error) {
      this.logger.error(error?.message);
    }
  }
  //TODO
  async Updaterequester(data: Map<String, any>): Promise<void | TPRequest> {
    try {
      this.logger.log(data);
    } catch (error) {
      this.logger.error(error?.message);
    }
  }
}
