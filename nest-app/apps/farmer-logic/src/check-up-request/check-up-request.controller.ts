import { Controller, Post } from '@nestjs/common';
import { ICheckUp } from './ICheckUp';
import { CheckUpRequestService } from './check-up-request.service';
import { TPRequest } from '@prisma/client';

@Controller('check-up-request')
export class CheckUpRequestController implements ICheckUp {
  /**
   *
   */
  constructor(private readonly checkup: CheckUpRequestService) {}
  // TODO
  @Post('ScheduleCheckUp')
  async ScheduleCheckUp(): Promise<void | TPRequest> {
    throw new Error('Method not implemented.');
  }
  // TODO
  @Post('FindBytime')
  async FindBytime(data: Map<String, any>): Promise<void | TPRequest[]> {
    throw new Error('Method not implemented.');
  }
  // TODO
  @Post('Updatetime')
  async Updatetime(data: Map<String, any>): Promise<void | TPRequest> {
    throw new Error('Method not implemented.');
  }
  // TODO
  @Post('FindByid')
  async FindByid(data: Map<String, any>): Promise<void | TPRequest> {
    throw new Error('Method not implemented.');
  }
  // TODO
  @Post('FindByTPRequesterId')
  async FindByTPRequesterId(data: Map<String, any>): Promise<void | TPRequest> {
    throw new Error('Method not implemented.');
  }
  // TODO
  @Post('FindByDetails')
  async FindByDetails(data: Map<String, any>): Promise<void | TPRequest> {
    throw new Error('Method not implemented.');
  }
  // TODO
  @Post('FindBylocation')
  async FindBylocation(data: Map<String, any>): Promise<void | TPRequest> {
    throw new Error('Method not implemented.');
  }
  // TODO
  @Post('FindBystatus')
  async FindBystatus(data: Map<String, any>): Promise<void | TPRequest> {
    throw new Error('Method not implemented.');
  }
  // TODO
  @Post('FindBycreatedAt')
  async FindBycreatedAt(
    data: Map<String, any>,
  ): Promise<void | TPRequest | TPRequest[]> {
    throw new Error('Method not implemented.');
  }
  // TODO
  @Post('FindByupdatedAt')
  async FindByupdatedAt(
    data: Map<String, any>,
  ): Promise<void | TPRequest | TPRequest[]> {
    throw new Error('Method not implemented.');
  }
  // TODO
  @Post('FindByTPDoctorId')
  async FindByTPDoctorId(data: Map<String, any>): Promise<void | TPRequest> {
    throw new Error('Method not implemented.');
  }
  // TODO
  @Post('FindByTPDoctor')
  async FindByTPDoctor(data: Map<String, any>): Promise<void | TPRequest> {
    throw new Error('Method not implemented.');
  }
  // TODO
  @Post('FindByrequester')
  async FindByrequester(data: Map<String, any>): Promise<void | TPRequest> {
    throw new Error('Method not implemented.');
  }
  // TODO
  @Post('UpdateTPRequesterId')
  async UpdateTPRequesterId(data: Map<String, any>): Promise<void | TPRequest> {
    throw new Error('Method not implemented.');
  }
  // TODO
  @Post('UpdateDetails')
  async UpdateDetails(data: Map<String, any>): Promise<void | TPRequest> {
    throw new Error('Method not implemented.');
  }
  // TODO
  @Post('Updatelocation')
  async Updatelocation(data: Map<String, any>): Promise<void | TPRequest> {
    throw new Error('Method not implemented.');
  }
  // TODO
  @Post('Updatestatus')
  async Updatestatus(data: Map<String, any>): Promise<void | TPRequest> {
    throw new Error('Method not implemented.');
  }
  // TODO
  @Post('UpdateTPDoctorId')
  async UpdateTPDoctorId(data: Map<String, any>): Promise<void | TPRequest> {
    throw new Error('Method not implemented.');
  }
  // TODO
  @Post('UpdateTPDoctor')
  async UpdateTPDoctor(data: Map<String, any>): Promise<void | TPRequest> {
    throw new Error('Method not implemented.');
  }
  // TODO
  @Post('Updaterequester')
  async Updaterequester(data: Map<String, any>): Promise<void | TPRequest> {
    throw new Error('Method not implemented.');
  }
}
