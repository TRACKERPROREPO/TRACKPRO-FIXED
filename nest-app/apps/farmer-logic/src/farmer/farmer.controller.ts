import { Controller, Logger, Post, Query } from '@nestjs/common';
import { IFarmer } from './IFarmer';
import { FarmerService } from './farmer.service';
import { CreateFarmerDto } from './create-farmer.dto';

@Controller('farmer')
export class FarmerController implements IFarmer {
  /**
   *
   */
  logger: Logger;
  constructor(private readonly farmer: FarmerService) {}

  @Post('CreateFarmer')
  async CreateFarmer(@Query() data: CreateFarmerDto) {
    return this.farmer.CreateFarmer(data);
  }

  @Post('findByid')
  async findByid(@Query() data: Map<String, any>) {
    return this.farmer.findByid(data);
  }

  @Post('findByfirst_name')
  async findByfirst_name(@Query() data: Map<String, any>) {
    return this.farmer.findByfirst_name(data);
  }

  @Post('findBylast_name')
  async findBylast_name(@Query() data: Map<String, any>) {
    return this.farmer.findBylast_name(data);
  }

  @Post('findByemail')
  async findByemail(@Query() data: Map<String, any>) {
    return this.farmer.findByemail(data);
  }

  @Post('findBynumber')
  async findBynumber(@Query() data: Map<String, any>) {
    return this.farmer.findBynumber(data);
  }

  @Post('findBylifestock')
  async findBylifestock(@Query() data: Map<String, any>) {
    return this.farmer.findBylifestock(data);
  }

  @Post('findByTPRequester')
  async findByTPRequester(@Query() data: Map<String, any>) {
    return this.farmer.findByTPRequester(data);
  }

  @Post('findByTPTranferFrom')
  async findByTPTranferFrom(@Query() data: Map<String, any>) {
    return this.farmer.findByTPTranferFrom(data);
  }

  @Post('findByTPTransferTo')
  async findByTPTransferTo(@Query() data: Map<String, any>) {
    return this.farmer.findByTPTransferTo(data);
  }

  @Post('Updatefirst_name')
  async Updatefirst_name(@Query() data: Map<String, any>) {
    return this.farmer.Updatefirst_name(data);
  }

  @Post('Updatelast_name')
  async Updatelast_name(@Query() data: Map<String, any>) {
    return this.farmer.Updatelast_name(data);
  }

  @Post('Updateemail')
  async Updateemail(@Query() data: Map<String, any>) {
    return this.farmer.Updateemail(data);
  }

  @Post('Updatenumber')
  async Updatenumber(@Query() data: Map<String, any>) {
    return this.farmer.Updatenumber(data);
  }

  @Post('Updatepassword')
  async Updatepassword(@Query() data: Map<String, any>) {
    return this.farmer.Updatepassword(data);
  }

  @Post('Updatelifestock')
  async Updatelifestock(@Query() data: Map<String, any>) {
    return this.farmer.Updatelifestock(data);
  }

  @Post('Updatenotifications')
  async Updatenotifications(@Query() data: Map<String, any>) {
    return this.farmer.Updatenotifications(data);
  }

  @Post('UpdateTPRequester')
  async UpdateTPRequester(@Query() data: Map<String, any>) {
    return this.farmer.UpdateTPRequester(data);
  }

  @Post('UpdateTPTranferFrom')
  async UpdateTPTranferFrom(@Query() data: Map<String, any>) {
    return this.farmer.UpdateTPTranferFrom(data);
  }

  @Post('UpdateTPTransferTo')
  async UpdateTPTransferTo(@Query() data: Map<String, any>) {
    return this.farmer.UpdateTPTransferTo(data);
  }
}
