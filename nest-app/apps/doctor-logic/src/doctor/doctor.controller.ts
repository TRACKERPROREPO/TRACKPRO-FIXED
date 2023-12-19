import { Controller, Post } from '@nestjs/common';
import { IDoctor } from './IDoctor';
import { DoctorService } from './doctor.service';

@Controller('doctor')
export class DoctorController implements IDoctor {
  /**
   *
   */
  constructor(private readonly doctor: DoctorService) {}
  //TODO
  @Post("CreateDoctor")
  CreateDoctor() {
    throw new Error('Method not implemented.');
  }
  //TODO
  @Post("Updatefirst_name")
  Updatefirst_name(data: Map<String, any>) {
    throw new Error('Method not implemented.');
  }
  //TODO
  @Post("Updatelast_name")
  Updatelast_name(data: Map<String, any>) {
    throw new Error('Method not implemented.');
  }
  //TODO
  @Post("Updateemail")
  Updateemail(data: Map<String, any>) {
    throw new Error('Method not implemented.');
  }
  //TODO
  @Post("Updatenumber")
  Updatenumber(data: Map<String, any>) {
    throw new Error('Method not implemented.');
  }
  //TODO
  @Post("Updatepassword")
  Updatepassword(data: Map<String, any>) {
    throw new Error('Method not implemented.');
  }
  //TODO
  @Post("Updatenotifications")
  Updatenotifications(data: Map<String, any>) {
    throw new Error('Method not implemented.');
  }
  //TODO
  @Post("Updatereports")
  Updatereports(data: Map<String, any>) {
    throw new Error('Method not implemented.');
  }
  //TODO
  @Post("Updaterequests")
  Updaterequests(data: Map<String, any>) {
    throw new Error('Method not implemented.');
  }
  //TODO
  @Post("FindByid")
  FindByid(data: Map<String, any>) {
    throw new Error('Method not implemented.');
  }
  //TODO
  @Post("FindByfirst_name")
  FindByfirst_name(data: Map<String, any>) {
    throw new Error('Method not implemented.');
  }
  //TODO
  @Post("FindBylast_name")
  FindBylast_name(data: Map<String, any>) {
    throw new Error('Method not implemented.');
  }
  //TODO
  @Post("FindByemail")
  FindByemail(data: Map<String, any>) {
    throw new Error('Method not implemented.');
  }
  //TODO
  @Post("FindBynumber")
  FindBynumber(data: Map<String, any>) {
    throw new Error('Method not implemented.');
  }
  //TODO
  @Post("FindBycreatedAt")
  FindBycreatedAt(data: Map<String, any>) {
    throw new Error('Method not implemented.');
  }
  //TODO
  @Post("FindByupdatedAt")
  FindByupdatedAt(data: Map<String, any>) {
    throw new Error('Method not implemented.');
  }
  //TODO
  @Post("FindByreports")
  FindByreports(data: Map<String, any>) {
    throw new Error('Method not implemented.');
  }
  //TODO
  @Post("FindByrequests")
  FindByrequests(data: Map<String, any>) {
    throw new Error('Method not implemented.');
  }
}
