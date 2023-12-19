import { Injectable, Logger } from '@nestjs/common';
import { IDoctor } from './IDoctor';
import { DbService } from '@app/sharedlogic/db/db.service';
import { TPDoctor } from '@prisma/client';

@Injectable()
export class DoctorService implements IDoctor {
  logger: Logger;
  /**
   *
   */
  constructor(private readonly db: DbService) {
    this.logger = new Logger('DoctorService Request', {
      timestamp: true,
    });
  }
  // TODO
  async CreateDoctor() {
    try {
      // this.logger.log()
    } catch (error) {
      this.logger.error(error?.message);
    }
  }
  // TODO
  async Updatefirst_name(data: Map<String, any>): Promise<void | TPDoctor> {
    try {
      this.logger.log(data)
    } catch (error) {
      this.logger.error(error?.message);
    }
  }
  // TODO
  async Updatelast_name(data: Map<String, any>): Promise<void | TPDoctor> {
    try {
      this.logger.log(data)
    } catch (error) {
      this.logger.error(error?.message);
    }
  }
  // TODO
  async Updateemail(data: Map<String, any>): Promise<void | TPDoctor> {
    try {
      this.logger.log(data)
    } catch (error) {
      this.logger.error(error?.message);
    }
  }
  // TODO
  async Updatenumber(data: Map<String, any>): Promise<void | TPDoctor> {
    try {
      this.logger.log(data)
    } catch (error) {
      this.logger.error(error?.message);
    }
  }
  // TODO
  async Updatepassword(data: Map<String, any>): Promise<void | TPDoctor> {
    try {
      this.logger.log(data)
    } catch (error) {
      this.logger.error(error?.message);
    }
  }
  // TODO
  async Updatenotifications(data: Map<String, any>): Promise<void | TPDoctor> {
    try {
      this.logger.log(data)
    } catch (error) {
      this.logger.error(error?.message);
    }
  }
  // TODO
  async Updatereports(data: Map<String, any>): Promise<void | TPDoctor> {
    try {
      this.logger.log(data)
    } catch (error) {
      this.logger.error(error?.message);
    }
  }
  // TODO
  async Updaterequests(data: Map<String, any>): Promise<void | TPDoctor> {
    try {
      this.logger.log(data)
    } catch (error) {
      this.logger.error(error?.message);
    }
  }
  // TODO
  async FindByid(data: Map<String, any>): Promise<void | TPDoctor> {
    try {
      this.logger.log(data)
    } catch (error) {
      this.logger.error(error?.message);
    }
  }
  // TODO
  async FindByfirst_name(data: Map<String, any>): Promise<void | TPDoctor> {
    try {
      this.logger.log(data)
    } catch (error) {
      this.logger.error(error?.message);
    }
  }
  // TODO
  async FindBylast_name(data: Map<String, any>): Promise<void | TPDoctor> {
    try {
      this.logger.log(data)
    } catch (error) {
      this.logger.error(error?.message);
    }
  }
  // TODO
  async FindByemail(data: Map<String, any>): Promise<void | TPDoctor> {
    try {
      this.logger.log(data)
    } catch (error) {
      this.logger.error(error?.message);
    }
  }
  // TODO
  async FindBynumber(data: Map<String, any>): Promise<void | TPDoctor> {
    try {
      this.logger.log(data)
    } catch (error) {
      this.logger.error(error?.message);
    }
  }
  // TODO
  async FindBycreatedAt(data: Map<String, any>): Promise<void | TPDoctor> {
    try {
      this.logger.log(data)
    } catch (error) {
      this.logger.error(error?.message);
    }
  }
  // TODO
  async FindByupdatedAt(data: Map<String, any>): Promise<void | TPDoctor> {
    try {
      this.logger.log(data)
    } catch (error) {
      this.logger.error(error?.message);
    }
  }
  // TODO
  async FindByreports(data: Map<String, any>): Promise<void | TPDoctor> {
    try {
      this.logger.log(data)
    } catch (error) {
      this.logger.error(error?.message);
    }
  }
  // TODO
  async FindByrequests(data: Map<String, any>): Promise<void | TPDoctor> {
    try {
      this.logger.log(data)
    } catch (error) {
      this.logger.error(error?.message);
    }
  }
}
