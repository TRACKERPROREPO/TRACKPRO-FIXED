import { Controller, Logger, Post, Query, UseGuards } from '@nestjs/common';
import { IFarmerRequests } from './IFarmerRequests';
import { FarmerRequestsService } from './farmer-requests.service';
import { TPRequest } from '@prisma/client';
import { AuthGuard } from '@app/sharedlogic/auth/auth.guard';

@Controller('farmer-requests')
@UseGuards(AuthGuard)
export class FarmerRequestsController implements IFarmerRequests {
  logger: Logger;
  /**
   *
   */
  constructor(private readonly farmerrequest: FarmerRequestsService) {}
  @Post('FindByid')
  FindByid(@Query() data: Map<String, any>): Promise<void | TPRequest> {
    return this.farmerrequest.FindByid(data);
  }
  @Post('FindByTPRequesterId')
  FindByTPRequesterId(
    @Query() data: Map<String, any>,
  ): Promise<void | TPRequest> {
    return this.farmerrequest.FindByTPRequesterId(data);
  }
  @Post('FindBylocation')
  FindBylocation(@Query() data: Map<String, any>): Promise<void | TPRequest> {
    return this.farmerrequest.FindBylocation(data);
  }
  @Post('FindBystatus')
  FindBystatus(@Query() data: Map<String, any>): Promise<void | TPRequest> {
    return this.farmerrequest.FindBystatus(data);
  }
  @Post('FindBycreatedAt')
  FindBycreatedAt(@Query() data: Map<String, any>): Promise<void | TPRequest> {
    return this.farmerrequest.FindBycreatedAt(data);
  }
  @Post('FindByupdatedAt')
  FindByupdatedAt(@Query() data: Map<String, any>): Promise<void | TPRequest> {
    return this.farmerrequest.FindByupdatedAt(data);
  }
  @Post('FindByTPDoctorId')
  FindByTPDoctorId(@Query() data: Map<String, any>): Promise<void | TPRequest> {
    return this.farmerrequest.FindByTPDoctorId(data);
  }
  @Post('FindByTPDoctor')
  FindByTPDoctor(@Query() data: Map<String, any>): Promise<void | TPRequest> {
    return this.farmerrequest.FindByTPDoctor(data);
  }
  @Post('FindByrequester')
  FindByrequester(@Query() data: Map<String, any>): Promise<void | TPRequest> {
    return this.farmerrequest.FindByrequester(data);
  }
}
