import { Injectable, Logger } from '@nestjs/common';
import { IFarmerRequests } from './IFarmerRequests';
import { TPRequest } from '@prisma/client';

@Injectable()
export class FarmerRequestsService implements IFarmerRequests {
  logger: Logger;
  /**
   *
   */
  constructor() {
    this.logger = new Logger('FarmerRequestsService', {
      timestamp: true,
    });
  }
  //TODO
  async FindByid(data: Map<String, any>): Promise<void | TPRequest> {
    try {
        this.logger.log(data)
    } catch (error) {
      throw new Error('Method not implemented.');
    }
  }
  //TODO
  async FindByTPRequesterId(data: Map<String, any>): Promise<void | TPRequest> {
    try {
        this.logger.log(data)
    } catch (error) {
      throw new Error('Method not implemented.');
    }
  }
  //TODO
  async FindBylocation(data: Map<String, any>): Promise<void | TPRequest> {
    try {
        this.logger.log(data)
    } catch (error) {
      throw new Error('Method not implemented.');
    }
  }
  //TODO
  async FindBystatus(data: Map<String, any>): Promise<void | TPRequest> {
    try {
        this.logger.log(data)
    } catch (error) {
      throw new Error('Method not implemented.');
    }
  }
  //TODO
  async FindBycreatedAt(data: Map<String, any>): Promise<void | TPRequest> {
    try {
        this.logger.log(data)
    } catch (error) {
      throw new Error('Method not implemented.');
    }
  }
  //TODO
  async FindByupdatedAt(data: Map<String, any>): Promise<void | TPRequest> {
    try {
        this.logger.log(data)
    } catch (error) {
      throw new Error('Method not implemented.');
    }
  }
  //TODO
  async FindByTPDoctorId(data: Map<String, any>): Promise<void | TPRequest> {
    try {
        this.logger.log(data)
    } catch (error) {
      throw new Error('Method not implemented.');
    }
  }
  //TODO
  async FindByTPDoctor(data: Map<String, any>): Promise<void | TPRequest> {
    try {
        this.logger.log(data)
    } catch (error) {
      throw new Error('Method not implemented.');
    }
  }
  //TODO
  async FindByrequester(data: Map<String, any>): Promise<void | TPRequest> {
    try {
        this.logger.log(data)
    } catch (error) {
      throw new Error('Method not implemented.');
    }
  }
}
