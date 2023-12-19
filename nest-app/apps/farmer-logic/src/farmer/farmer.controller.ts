import { Controller, Logger, Post, Query } from '@nestjs/common';
import { IFarmer } from './IFarmer';
import { FarmerService } from './farmer.service';

@Controller('farmer')
export class FarmerController implements IFarmer {
  /**
   *
   */
  logger: Logger;
  constructor(private readonly farmer: FarmerService) {}
  //TODO
  @Post('CreateFarmer')
  async CreateFarmer() {
    return this.farmer.CreateFarmer();
  }
  //TODO
  @Post('findByid')
  async findByid(@Query() data: Map<String, any>) {
    return this.farmer.findByid(data);
  }
  //TODO
  @Post('findByfirst_name')
  async findByfirst_name(@Query() data: Map<String, any>) {
    return this.farmer.findByfirst_name(data);
  }
  //TODO
  @Post('findBylast_name')
  async findBylast_name(@Query() data: Map<String, any>) {
    return this.farmer.findBylast_name(data);
  }
  //TODO
  @Post('findByemail')
  async findByemail(@Query() data: Map<String, any>) {
    return this.farmer.findByemail(data);
  }
  //TODO
  @Post('findBynumber')
  async findBynumber(@Query() data: Map<String, any>) {
    return this.farmer.findBynumber(data);
  }
  //TODO
  @Post('findBylifestock')
  async findBylifestock(@Query() data: Map<String, any>) {
    return this.farmer.findBylifestock(data);
  }
  //TODO
  @Post('findByTPRequester')
  async findByTPRequester(@Query() data: Map<String, any>) {
    return this.farmer.findByTPRequester(data);
  }
  //TODO
  @Post('findByTPTranferFrom')
  async findByTPTranferFrom(@Query() data: Map<String, any>) {
    return this.farmer.findByTPTranferFrom(data);
  }
  //TODO
  @Post('findByTPTransferTo')
  async findByTPTransferTo(@Query() data: Map<String, any>) {
    return this.farmer.findByTPTransferTo(data);
  }
  //TODO
  @Post('Updatefirst_name')
  async Updatefirst_name(@Query() data: Map<String, any>) {
    return this.farmer.Updatefirst_name(data);
  }
  //TODO
  @Post('Updatelast_name')
  async Updatelast_name(@Query() data: Map<String, any>) {
    return this.farmer.Updatelast_name(data);
  }
  //TODO
  @Post('Updateemail')
  async Updateemail(@Query() data: Map<String, any>) {
    return this.farmer.Updateemail(data);
  }
  //TODO
  @Post('Updatenumber')
  async Updatenumber(@Query() data: Map<String, any>) {
    return this.farmer.Updatenumber(data);
  }
  //TODO
  @Post('Updatepassword')
  async Updatepassword(@Query() data: Map<String, any>) {
    return this.farmer.Updatepassword(data);
  }
  //TODO
  @Post('Updatelifestock')
  async Updatelifestock(@Query() data: Map<String, any>) {
    return this.farmer.Updatelifestock(data);
  }
  //TODO
  @Post('Updatenotifications')
  async Updatenotifications(@Query() data: Map<String, any>) {
    return this.farmer.Updatenotifications(data);
  }
  //TODO
  @Post('UpdateTPRequester')
  async UpdateTPRequester(@Query() data: Map<String, any>) {
    return this.farmer.UpdateTPRequester(data);
  }
  //TODO
  @Post('UpdateTPTranferFrom')
  async UpdateTPTranferFrom(@Query() data: Map<String, any>) {
    return this.farmer.UpdateTPTranferFrom(data);
  }
  //TODO
  @Post('UpdateTPTransferTo')
  async UpdateTPTransferTo(@Query() data: Map<String, any>) {
    return this.farmer.UpdateTPTransferTo(data);
  }
}
