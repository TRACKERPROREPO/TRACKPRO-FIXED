import { Controller, Post } from '@nestjs/common';
import { IFarmerRequests } from './IFarmerRequests';
import { FarmerRequestsService } from './farmer-requests.service';

@Controller('farmer-requests')
export class FarmerRequestsController implements IFarmerRequests {
  /**
   *
   */
  constructor(private readonly requests: FarmerRequestsService) {}
  //TODO
  @Post("FindByid")
  FindByid() {
    throw new Error('Method not implemented.');
  }
  //TODO
  @Post("FindByTPRequesterId")
  FindByTPRequesterId() {
    throw new Error('Method not implemented.');
  }
  //TODO
  @Post("FindBylocation")
  FindBylocation() {
    throw new Error('Method not implemented.');
  }
  //TODO
  @Post("FindBystatus")
  FindBystatus() {
    throw new Error('Method not implemented.');
  }
  //TODO
  @Post("FindBycreatedAt")
  FindBycreatedAt() {
    throw new Error('Method not implemented.');
  }
  //TODO
  @Post("FindByupdatedAt")
  FindByupdatedAt() {
    throw new Error('Method not implemented.');
  }
  //TODO
  @Post("FindByTPDoctorId")
  FindByTPDoctorId() {
    throw new Error('Method not implemented.');
  }
  //TODO
  @Post("FindByTPDoctor")
  FindByTPDoctor() {
    throw new Error('Method not implemented.');
  }
  //TODO
  @Post("FindByrequester")
  FindByrequester() {
    throw new Error('Method not implemented.');
  }
}
