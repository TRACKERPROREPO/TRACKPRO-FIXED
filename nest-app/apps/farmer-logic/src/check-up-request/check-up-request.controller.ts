import { Controller, Logger, Post, Query } from '@nestjs/common';
import { ICheckUp } from './ICheckUp';
import { CheckUpRequestService } from './check-up-request.service';
import { TPRequest } from '@prisma/client';
import { CreateCheckUpRequestDto } from './create-check-up-request.dto';

@Controller('check-up-request')
export class CheckUpRequestController implements ICheckUp {
  /**
   *
   */
  logger: Logger;
  constructor(private readonly checkup: CheckUpRequestService) {}

  @Post('ScheduleCheckUp')
  async ScheduleCheckUp(data:CreateCheckUpRequestDto): Promise<void | TPRequest> {
    return this.checkup.ScheduleCheckUp(data);
  }

  @Post('FindBytime')
  async FindBytime(
    @Query() data: Map<String, any>,
  ): Promise<void | TPRequest[]> {
    return this.checkup.FindBytime(data);
  }

  @Post('Updatetime')
  async Updatetime(@Query() data: Map<String, any>): Promise<void | TPRequest> {
    return this.checkup.Updatetime(data);
  }

  @Post('FindByid')
  async FindByid(@Query() data: Map<String, any>): Promise<void | TPRequest> {
    return this.checkup.FindByid(data);
  }

  @Post('FindByTPRequesterId')
  async FindByTPRequesterId(
    @Query() data: Map<String, any>,
  ): Promise<void | TPRequest> {
    return this.checkup.FindByTPRequesterId(data);
  }

  @Post('FindByDetails')
  async FindByDetails(
    @Query() data: Map<String, any>,
  ): Promise<void | TPRequest> {
    return this.checkup.FindByDetails(data);
  }

  @Post('FindBylocation')
  async FindBylocation(
    @Query() data: Map<String, any>,
  ): Promise<void | TPRequest> {
    return this.checkup.FindBylocation(data);
  }

  @Post('FindBystatus')
  async FindBystatus(
    @Query() data: Map<String, any>,
  ): Promise<void | TPRequest> {
    return this.checkup.FindBystatus(data);
  }

  @Post('FindBycreatedAt')
  async FindBycreatedAt(
    @Query() data: Map<String, any>,
  ): Promise<void | TPRequest | TPRequest[]> {
    return this.checkup.FindBycreatedAt(data);
  }

  @Post('FindByupdatedAt')
  async FindByupdatedAt(
    @Query() data: Map<String, any>,
  ): Promise<void | TPRequest | TPRequest[]> {
    return this.checkup.FindByupdatedAt(data);
  }

  @Post('FindByTPDoctorId')
  async FindByTPDoctorId(
    @Query() data: Map<String, any>,
  ): Promise<void | TPRequest> {
    return this.checkup.FindByTPDoctorId(data);
  }

  @Post('FindByTPDoctor')
  async FindByTPDoctor(
    @Query() data: Map<String, any>,
  ): Promise<void | TPRequest> {
    return this.checkup.FindByTPDoctor(data);
  }

  @Post('FindByrequester')
  async FindByrequester(
    @Query() data: Map<String, any>,
  ): Promise<void | TPRequest> {
    return this.checkup.FindByrequester(data);
  }

  @Post('UpdateTPRequesterId')
  async UpdateTPRequesterId(
    @Query() data: Map<String, any>,
  ): Promise<void | TPRequest> {
    return this.checkup.UpdateTPRequesterId(data);
  }

  @Post('UpdateDetails')
  async UpdateDetails(
    @Query() data: Map<String, any>,
  ): Promise<void | TPRequest> {
    return this.checkup.UpdateDetails(data);
  }

  @Post('Updatelocation')
  async Updatelocation(
    @Query() data: Map<String, any>,
  ): Promise<void | TPRequest> {
    return this.checkup.Updatelocation(data);
  }

  @Post('Updatestatus')
  async Updatestatus(
    @Query() data: Map<String, any>,
  ): Promise<void | TPRequest> {
    return this.checkup.Updatestatus(data);
  }

  @Post('UpdateTPDoctorId')
  async UpdateTPDoctorId(
    @Query() data: Map<String, any>,
  ): Promise<void | TPRequest> {
    return this.checkup.UpdateTPDoctorId(data);
  }

  @Post('UpdateTPDoctor')
  async UpdateTPDoctor(
    @Query() data: Map<String, any>,
  ): Promise<void | TPRequest> {
    return this.checkup.UpdateTPDoctor(data);
  }

  @Post('Updaterequester')
  async Updaterequester(
    @Query() data: Map<String, any>,
  ): Promise<void | TPRequest> {
    return this.checkup.Updaterequester(data);
  }
}
