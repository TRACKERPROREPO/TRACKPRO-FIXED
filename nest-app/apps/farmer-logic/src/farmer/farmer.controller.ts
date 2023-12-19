import { Body, Controller, Logger, Post } from '@nestjs/common';
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
    try {
    } catch (error) {
      throw new Error('Method not implemented.');
    }
  }
  //TODO
  @Post('findByid')
  async findByid(data: Map<String, any>) {
    try {
    } catch (error) {
      throw new Error('Method not implemented.');
    }
  }
  //TODO
  @Post('findByfirst_name')
  async findByfirst_name(data: Map<String, any>) {
    try {
    } catch (error) {
      throw new Error('Method not implemented.');
    }
  }
  //TODO
  @Post('findBylast_name')
  async findBylast_name(data: Map<String, any>) {
    try {
    } catch (error) {
      throw new Error('Method not implemented.');
    }
  }
  //TODO
  @Post('findByemail')
  async findByemail(data: Map<String, any>) {
    try {
    } catch (error) {
      throw new Error('Method not implemented.');
    }
  }
  //TODO
  @Post('findBynumber')
  async findBynumber(data: Map<String, any>) {
    try {
    } catch (error) {
      throw new Error('Method not implemented.');
    }
  }
  //TODO
  @Post('findBylifestock')
  async findBylifestock(data: Map<String, any>) {
    try {
    } catch (error) {
      throw new Error('Method not implemented.');
    }
  }
  //TODO
  @Post('findByTPRequester')
  async findByTPRequester(data: Map<String, any>) {
    try {
    } catch (error) {
      throw new Error('Method not implemented.');
    }
  }
  //TODO
  @Post('findByTPTranferFrom')
  async findByTPTranferFrom(data: Map<String, any>) {
    try {
    } catch (error) {
      throw new Error('Method not implemented.');
    }
  }
  //TODO
  @Post('findByTPTransferTo')
  async findByTPTransferTo(data: Map<String, any>) {
    try {
    } catch (error) {
      throw new Error('Method not implemented.');
    }
  }
  //TODO
  @Post('Updatefirst_name')
  async Updatefirst_name(data: Map<String, any>) {
    try {
    } catch (error) {
      throw new Error('Method not implemented.');
    }
  }
  //TODO
  @Post('Updatelast_name')
  async Updatelast_name(data: Map<String, any>) {
    try {
    } catch (error) {
      throw new Error('Method not implemented.');
    }
  }
  //TODO
  @Post('Updateemail')
  async Updateemail(data: Map<String, any>) {
    try {
    } catch (error) {
      throw new Error('Method not implemented.');
    }
  }
  //TODO
  @Post('Updatenumber')
  async Updatenumber(data: Map<String, any>) {
    try {
    } catch (error) {
      throw new Error('Method not implemented.');
    }
  }
  //TODO
  @Post('Updatepassword')
  async Updatepassword(data: Map<String, any>) {
    try {
    } catch (error) {
      throw new Error('Method not implemented.');
    }
  }
  //TODO
  @Post('Updatelifestock')
  async Updatelifestock(data: Map<String, any>) {
    try {
    } catch (error) {
      throw new Error('Method not implemented.');
    }
  }
  //TODO
  @Post('Updatenotifications')
  async Updatenotifications(data: Map<String, any>) {
    try {
    } catch (error) {
      throw new Error('Method not implemented.');
    }
  }
  //TODO
  @Post('UpdateTPRequester')
  async UpdateTPRequester(data: Map<String, any>) {
    try {
    } catch (error) {
      throw new Error('Method not implemented.');
    }
  }
  //TODO
  @Post('UpdateTPTranferFrom')
  async UpdateTPTranferFrom(data: Map<String, any>) {
    try {
    } catch (error) {
      throw new Error('Method not implemented.');
    }
  }
  //TODO
  @Post('UpdateTPTransferTo')
  async UpdateTPTransferTo(data: Map<String, any>) {
    try {
    } catch (error) {
      throw new Error('Method not implemented.');
    }
  }
}
