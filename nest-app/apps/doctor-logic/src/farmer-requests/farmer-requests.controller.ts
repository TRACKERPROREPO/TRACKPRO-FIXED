import { Controller, Logger, Post } from '@nestjs/common';
import { IFarmerRequests } from './IFarmerRequests';
import { FarmerRequestsService } from './farmer-requests.service';
import { TPRequest } from '@prisma/client';

@Controller('farmer-requests')
export class FarmerRequestsController implements IFarmerRequests {
  logger: Logger;
  //TODO 
  @Post("FindByid")
  async FindByid(data: Map<String, any>): Promise<void | TPRequest> {
    throw new Error('Method not implemented.');
  }
  //TODO 
  @Post("FindByTPRequesterId")
  async FindByTPRequesterId(data: Map<String, any>): Promise<void | TPRequest> {
    throw new Error('Method not implemented.');
  }
  //TODO 
  @Post("FindBylocation")
  async FindBylocation(data: Map<String, any>): Promise<void | TPRequest> {
    throw new Error('Method not implemented.');
  }
  //TODO 
  @Post("FindBystatus")
  async FindBystatus(data: Map<String, any>): Promise<void | TPRequest> {
    throw new Error('Method not implemented.');
  }
  //TODO 
  @Post("FindBycreatedAt")
  async FindBycreatedAt(data: Map<String, any>): Promise<void | TPRequest> {
    throw new Error('Method not implemented.');
  }
  //TODO 
  @Post("FindByupdatedAt")
  async FindByupdatedAt(data: Map<String, any>): Promise<void | TPRequest> {
    throw new Error('Method not implemented.');
  }
  //TODO 
  @Post("FindByTPDoctorId")
  async FindByTPDoctorId(data: Map<String, any>): Promise<void | TPRequest> {
    throw new Error('Method not implemented.');
  }
  //TODO 
  @Post("FindByTPDoctor")
  async FindByTPDoctor(data: Map<String, any>): Promise<void | TPRequest> {
    throw new Error('Method not implemented.');
  }
  //TODO 
  @Post("FindByrequester")
  async FindByrequester(data: Map<String, any>): Promise<void | TPRequest> {
    throw new Error('Method not implemented.');
  }
  /**
   *
   */
}
