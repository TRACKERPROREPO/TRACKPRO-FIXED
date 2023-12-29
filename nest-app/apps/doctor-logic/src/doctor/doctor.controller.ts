import { Controller, Logger, Post, Query, UseGuards } from '@nestjs/common';
import { IDoctor } from './IDoctor';
import { DoctorService } from './doctor.service';
import { TPDoctor } from '@prisma/client';
import { CreateDoctorDto } from './create-doctor.dto';
import { AuthGuard } from '@app/sharedlogic/auth/auth.guard';

@Controller('doctor')
@UseGuards(AuthGuard)
export class DoctorController implements IDoctor {
  /**
   *
   */
  constructor(private readonly doctor: DoctorService) {}
  logger: Logger;
  @Post('CreateDoctor')
  CreateDoctor(@Query() data: CreateDoctorDto) {
    return this.doctor.CreateDoctor(data);
  }
  @Post('Updatefirst_name')
  Updatefirst_name(@Query() data: Map<String, any>): Promise<void | TPDoctor> {
    return this.doctor.Updatefirst_name(data);
  }
  @Post('Updatelast_name')
  Updatelast_name(@Query() data: Map<String, any>): Promise<void | TPDoctor> {
    return this.doctor.Updatelast_name(data);
  }
  @Post('Updateemail')
  Updateemail(@Query() data: Map<String, any>): Promise<void | TPDoctor> {
    return this.doctor.Updateemail(data);
  }
  @Post('Updatenumber')
  Updatenumber(@Query() data: Map<String, any>): Promise<void | TPDoctor> {
    return this.doctor.Updatenumber(data);
  }
  @Post('Updatepassword')
  Updatepassword(@Query() data: Map<String, any>): Promise<void | TPDoctor> {
    return this.doctor.Updatepassword(data);
  }
  @Post('Updatenotifications')
  Updatenotifications(
    @Query() data: Map<String, any>,
  ): Promise<void | TPDoctor> {
    return this.doctor.Updatenotifications(data);
  }
  @Post('Updatereports')
  Updatereports(@Query() data: Map<String, any>): Promise<void | TPDoctor> {
    return this.doctor.Updatereports(data);
  }
  @Post('Updaterequests')
  Updaterequests(@Query() data: Map<String, any>): Promise<void | TPDoctor> {
    return this.doctor.Updaterequests(data);
  }
  @Post('FindByid')
  FindByid(@Query() data: Map<String, any>): Promise<void | TPDoctor> {
    return this.doctor.FindByid(data);
  }
  @Post('FindByfirst_name')
  FindByfirst_name(@Query() data: Map<String, any>): Promise<void | TPDoctor> {
    return this.doctor.FindByfirst_name(data);
  }
  @Post('FindBylast_name')
  FindBylast_name(@Query() data: Map<String, any>): Promise<void | TPDoctor> {
    return this.doctor.FindBylast_name(data);
  }
  @Post('FindByemail')
  FindByemail(@Query() data: Map<String, any>): Promise<void | TPDoctor> {
    return this.doctor.FindByemail(data);
  }
  @Post('FindBynumber')
  FindBynumber(@Query() data: Map<String, any>): Promise<void | TPDoctor> {
    return this.doctor.FindBynumber(data);
  }
  @Post('FindBycreatedAt')
  FindBycreatedAt(@Query() data: Map<String, any>): Promise<TPDoctor[]> {
    return this.doctor.FindBycreatedAt(data);
  }
  @Post('FindByupdatedAt')
  FindByupdatedAt(@Query() data: Map<String, any>): Promise<TPDoctor[]> {
    return this.doctor.FindByupdatedAt(data);
  }
  @Post('FindByreports')
  FindByreports(@Query() data: Map<String, any>): Promise<TPDoctor[]> {
    return this.doctor.FindByreports(data);
  }
  @Post('FindByrequests')
  FindByrequests(@Query() data: Map<String, any>): Promise<TPDoctor[]> {
    return this.doctor.FindByrequests(data);
  }
}
