import { Injectable, Logger } from '@nestjs/common';
import { ICheckUp } from './ICheckUp';
import { TPRequest } from '@prisma/client';

@Injectable()
export class CheckUpRequestService implements ICheckUp {
  logger: Logger;
  constructor() {
    this.logger = new Logger('CheckUpRequestService', {
      timestamp: true,
    });
  }
  async ScheduleCheckUp(): Promise<void | TPRequest> {
    try {
    } catch (error) {
      throw new Error('Method not implemented.');
    }
  }
  //TODO
  async FindBytime(data: Map<String, any>): Promise<void | TPRequest[]> {
    try {
    } catch (error) {
      throw new Error('Method not implemented.');
    }
  }
  //TODO
  async Updatetime(data: Map<String, any>): Promise<void | TPRequest> {
    try {
    } catch (error) {
      throw new Error('Method not implemented.');
    }
  }
  //TODO
  async FindByid(data: Map<String, any>): Promise<void | TPRequest> {
    try {
    } catch (error) {
      throw new Error('Method not implemented.');
    }
  }
  //TODO
  async FindByTPRequesterId(data: Map<String, any>): Promise<void | TPRequest> {
    try {
    } catch (error) {
      throw new Error('Method not implemented.');
    }
  }
  //TODO
  async FindByDetails(data: Map<String, any>): Promise<void | TPRequest> {
    try {
    } catch (error) {
      throw new Error('Method not implemented.');
    }
  }
  //TODO
  async FindBylocation(data: Map<String, any>): Promise<void | TPRequest> {
    try {
    } catch (error) {
      throw new Error('Method not implemented.');
    }
  }
  //TODO
  async FindBystatus(data: Map<String, any>): Promise<void | TPRequest> {
    try {
    } catch (error) {
      throw new Error('Method not implemented.');
    }
  }
  //TODO
  async FindBycreatedAt(
    data: Map<String, any>,
  ): Promise<void | TPRequest | TPRequest[]> {
    try {
    } catch (error) {
      throw new Error('Method not implemented.');
    }
  }
  //TODO
  async FindByupdatedAt(
    data: Map<String, any>,
  ): Promise<void | TPRequest | TPRequest[]> {
    try {
    } catch (error) {
      throw new Error('Method not implemented.');
    }
  }
  //TODO
  async FindByTPDoctorId(data: Map<String, any>): Promise<void | TPRequest> {
    try {
    } catch (error) {
      throw new Error('Method not implemented.');
    }
  }
  //TODO
  async FindByTPDoctor(data: Map<String, any>): Promise<void | TPRequest> {
    try {
    } catch (error) {
      throw new Error('Method not implemented.');
    }
  }
  //TODO
  async FindByrequester(data: Map<String, any>): Promise<void | TPRequest> {
    try {
    } catch (error) {
      throw new Error('Method not implemented.');
    }
  }
  //TODO
  async UpdateTPRequesterId(data: Map<String, any>): Promise<void | TPRequest> {
    try {
    } catch (error) {
      throw new Error('Method not implemented.');
    }
  }
  //TODO
  async UpdateDetails(data: Map<String, any>): Promise<void | TPRequest> {
    try {
    } catch (error) {
      throw new Error('Method not implemented.');
    }
  }
  //TODO
  async Updatelocation(data: Map<String, any>): Promise<void | TPRequest> {
    try {
    } catch (error) {
      throw new Error('Method not implemented.');
    }
  }
  //TODO
  async Updatestatus(data: Map<String, any>): Promise<void | TPRequest> {
    try {
    } catch (error) {
      throw new Error('Method not implemented.');
    }
  }
  //TODO
  async UpdateTPDoctorId(data: Map<String, any>): Promise<void | TPRequest> {
    try {
    } catch (error) {
      throw new Error('Method not implemented.');
    }
  }
  //TODO
  async UpdateTPDoctor(data: Map<String, any>): Promise<void | TPRequest> {
    try {
    } catch (error) {
      throw new Error('Method not implemented.');
    }
  }
  //TODO
  async Updaterequester(data: Map<String, any>): Promise<void | TPRequest> {
    try {
    } catch (error) {
      throw new Error('Method not implemented.');
    }
  }
}
