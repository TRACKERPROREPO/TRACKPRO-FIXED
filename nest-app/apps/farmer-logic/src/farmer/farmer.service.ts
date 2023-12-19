import { Injectable, Logger } from '@nestjs/common';
import { IFarmer } from './IFarmer';
import { DbService } from '@app/sharedlogic/db/db.service';

@Injectable()
export class FarmerService implements IFarmer {
  logger: Logger;
  constructor(private readonly db: DbService) {
    this.logger = new Logger('FarmerService Request', {
      timestamp: true,
    });
  }
  // TODO
  async CreateFarmer() {
    try {
      // this.logger.log(,"Request")
    } catch (error) {
      this.logger.error(error?.message);
    }
  }
  // TODO
  async findByid(data: Map<String, any>) {
    try {
      this.logger.log(data, 'Request');
    } catch (error) {
      this.logger.error(error?.message);
    }
  }
  // TODO
  async findByfirst_name(data: Map<String, any>) {
    try {
      this.logger.log(data, 'Request');
    } catch (error) {
      this.logger.error(error?.message);
    }
  }
  // TODO
  async findBylast_name(data: Map<String, any>) {
    try {
      this.logger.log(data, 'Request');
    } catch (error) {
      this.logger.error(error?.message);
    }
  }
  // TODO
  async findByemail(data: Map<String, any>) {
    try {
      this.logger.log(data, 'Request');
    } catch (error) {
      this.logger.error(error?.message);
    }
  }
  // TODO
  async findBynumber(data: Map<String, any>) {
    try {
      this.logger.log(data, 'Request');
    } catch (error) {
      this.logger.error(error?.message);
    }
  }
  // TODO
  async findBylifestock(data: Map<String, any>) {
    try {
      this.logger.log(data, 'Request');
    } catch (error) {
      this.logger.error(error?.message);
    }
  }
  // TODO
  async findByTPRequester(data: Map<String, any>) {
    try {
      this.logger.log(data, 'Request');
    } catch (error) {
      this.logger.error(error?.message);
    }
  }
  // TODO
  async findByTPTranferFrom(data: Map<String, any>) {
    try {
      this.logger.log(data, 'Request');
    } catch (error) {
      this.logger.error(error?.message);
    }
  }
  // TODO
  async findByTPTransferTo(data: Map<String, any>) {
    try {
      this.logger.log(data, 'Request');
    } catch (error) {
      this.logger.error(error?.message);
    }
  }
  // TODO
  async Updatefirst_name(data: Map<String, any>) {
    try {
      this.logger.log(data, 'Request');
    } catch (error) {
      this.logger.error(error?.message);
    }
  }
  // TODO
  async Updatelast_name(data: Map<String, any>) {
    try {
      this.logger.log(data, 'Request');
    } catch (error) {
      this.logger.error(error?.message);
    }
  }
  // TODO
  async Updateemail(data: Map<String, any>) {
    try {
      this.logger.log(data, 'Request');
    } catch (error) {
      this.logger.error(error?.message);
    }
  }
  // TODO
  async Updatenumber(data: Map<String, any>) {
    try {
      this.logger.log(data, 'Request');
    } catch (error) {
      this.logger.error(error?.message);
    }
  }
  // TODO
  async Updatepassword(data: Map<String, any>) {
    try {
      this.logger.log(data, 'Request');
    } catch (error) {
      this.logger.error(error?.message);
    }
  }
  // TODO
  async Updatelifestock(data: Map<String, any>) {
    try {
      this.logger.log(data, 'Request');
    } catch (error) {
      this.logger.error(error?.message);
    }
  }
  // TODO
  async Updatenotifications(data: Map<String, any>) {
    try {
      this.logger.log(data, 'Request');
    } catch (error) {
      this.logger.error(error?.message);
    }
  }
  // TODO
  async UpdateTPRequester(data: Map<String, any>) {
    try {
      this.logger.log(data, 'Request');
    } catch (error) {
      this.logger.error(error?.message);
    }
  }
  // TODO
  async UpdateTPTranferFrom(data: Map<String, any>) {
    try {
      this.logger.log(data, 'Request');
    } catch (error) {
      this.logger.error(error?.message);
    }
  }
  // TODO
  async UpdateTPTransferTo(data: Map<String, any>) {
    try {
      this.logger.log(data, 'Request');
    } catch (error) {
      this.logger.error(error?.message);
    }
  }
}
