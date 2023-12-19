import { Injectable, Logger } from '@nestjs/common';
import { ILifestock } from './ILifestock';
import { DbService } from '@app/sharedlogic/db/db.service';

@Injectable()
export class LifestockService implements ILifestock {
  logger: Logger;
  constructor(private readonly db: DbService) {
    this.logger = new Logger('LifestockService Request', {
      timestamp: true,
    });
  }

  //TODO
  async CreateLifestock() {
    try {
    } catch (error) {
      throw new Error('Method not implemented.');
    }
  }
  //TODO
  async FindByid(data: Map<String, any>) {
    try {
      this.logger.log(data);
    } catch (error) {
      throw new Error('Method not implemented.');
    }
  }
  //TODO
  async FindBystatus(data: Map<String, any>) {
    try {
      this.logger.log(data);
    } catch (error) {
      throw new Error('Method not implemented.');
    }
  }
  //TODO
  async FindBygender(data: Map<String, any>) {
    try {
      this.logger.log(data);
    } catch (error) {
      throw new Error('Method not implemented.');
    }
  }
  //TODO
  async FindByage(data: Map<String, any>) {
    try {
      this.logger.log(data);
    } catch (error) {
      throw new Error('Method not implemented.');
    }
  }
  //TODO
  async FindByTPMethodOfPossesionId(data: Map<String, any>) {
    try {
      this.logger.log(data);
    } catch (error) {
      throw new Error('Method not implemented.');
    }
  }
  //TODO
  async FindBytPQrCodeId(data: Map<String, any>) {
    try {
      this.logger.log(data);
    } catch (error) {
      throw new Error('Method not implemented.');
    }
  }
  //TODO
  async FindByTPReportId(data: Map<String, any>) {
    try {
      this.logger.log(data);
    } catch (error) {
      throw new Error('Method not implemented.');
    }
  }
  //TODO
  async FindByTPVariantId(data: Map<String, any>) {
    try {
      this.logger.log(data);
    } catch (error) {
      throw new Error('Method not implemented.');
    }
  }
  //TODO
  async FindByTPLifeStockTypeId(data: Map<String, any>) {
    try {
      this.logger.log(data);
    } catch (error) {
      throw new Error('Method not implemented.');
    }
  }
  //TODO
  async FindByTPBreedId(data: Map<String, any>) {
    try {
      this.logger.log(data);
    } catch (error) {
      throw new Error('Method not implemented.');
    }
  }
  //TODO
  async FindBytPFarmerId(data: Map<String, any>) {
    try {
      this.logger.log(data);
    } catch (error) {
      throw new Error('Method not implemented.');
    }
  }
  //TODO
  async FindBybreed(data: Map<String, any>) {
    try {
      this.logger.log(data);
    } catch (error) {
      throw new Error('Method not implemented.');
    }
  }
  //TODO
  async FindBytype(data: Map<String, any>) {
    try {
      this.logger.log(data);
    } catch (error) {
      throw new Error('Method not implemented.');
    }
  }
  //TODO
  async FindBymop(data: Map<String, any>) {
    try {
      this.logger.log(data);
    } catch (error) {
      throw new Error('Method not implemented.');
    }
  }
  //TODO
  async FindByReport(data: Map<String, any>) {
    try {
      this.logger.log(data);
    } catch (error) {
      throw new Error('Method not implemented.');
    }
  }
  //TODO
  async FindByvariant(data: Map<String, any>) {
    try {
      this.logger.log(data);
    } catch (error) {
      throw new Error('Method not implemented.');
    }
  }
  //TODO
  async FindByTPFarmer(data: Map<String, any>) {
    try {
      this.logger.log(data);
    } catch (error) {
      throw new Error('Method not implemented.');
    }
  }
  //TODO
  async FindByqrcode(data: Map<String, any>) {
    try {
      this.logger.log(data);
    } catch (error) {
      throw new Error('Method not implemented.');
    }
  }
  //TODO
  async Updatestatus(data: Map<String, any>) {
    try {
      this.logger.log(data);
    } catch (error) {
      throw new Error('Method not implemented.');
    }
  }
  //TODO
  async Updategender(data: Map<String, any>) {
    try {
      this.logger.log(data);
    } catch (error) {
      throw new Error('Method not implemented.');
    }
  }
  //TODO
  async Updateage(data: Map<String, any>) {
    try {
      this.logger.log(data);
    } catch (error) {
      throw new Error('Method not implemented.');
    }
  }
  //TODO
  async UpdateTPMethodOfPossesionId(data: Map<String, any>) {
    try {
      this.logger.log(data);
    } catch (error) {
      throw new Error('Method not implemented.');
    }
  }
  //TODO
  async UpdatetPQrCodeId(data: Map<String, any>) {
    try {
      this.logger.log(data);
    } catch (error) {
      throw new Error('Method not implemented.');
    }
  }
  //TODO
  async UpdateTPReportId(data: Map<String, any>) {
    try {
      this.logger.log(data);
    } catch (error) {
      throw new Error('Method not implemented.');
    }
  }
  //TODO
  async UpdateTPVariantId(data: Map<String, any>) {
    try {
      this.logger.log(data);
    } catch (error) {
      throw new Error('Method not implemented.');
    }
  }
  //TODO
  async UpdateTPLifeStockTypeId(data: Map<String, any>) {
    try {
      this.logger.log(data);
    } catch (error) {
      throw new Error('Method not implemented.');
    }
  }
  //TODO
  async UpdateTPBreedId(data: Map<String, any>) {
    try {
      this.logger.log(data);
    } catch (error) {
      throw new Error('Method not implemented.');
    }
  }
  //TODO
  async UpdatetPFarmerId(data: Map<String, any>) {
    try {
      this.logger.log(data);
    } catch (error) {
      throw new Error('Method not implemented.');
    }
  }
  //TODO
  async Updatebreed(data: Map<String, any>) {
    try {
      this.logger.log(data);
    } catch (error) {
      throw new Error('Method not implemented.');
    }
  }
  //TODO
  async Updatetype(data: Map<String, any>) {
    try {
      this.logger.log(data);
    } catch (error) {
      throw new Error('Method not implemented.');
    }
  }
  //TODO
  async Updatemop(data: Map<String, any>) {
    try {
      this.logger.log(data);
    } catch (error) {
      throw new Error('Method not implemented.');
    }
  }
  //TODO
  async UpdateReport(data: Map<String, any>) {
    try {
      this.logger.log(data);
    } catch (error) {
      throw new Error('Method not implemented.');
    }
  }
  //TODO
  async Updatevariant(data: Map<String, any>) {
    try {
      this.logger.log(data);
    } catch (error) {
      throw new Error('Method not implemented.');
    }
  }
  //TODO
  async UpdateTPFarmer(data: Map<String, any>) {
    try {
      this.logger.log(data);
    } catch (error) {
      throw new Error('Method not implemented.');
    }
  }
  //TODO
  async Updateqrcode(data: Map<String, any>) {
    try {
      this.logger.log(data);
    } catch (error) {
      throw new Error('Method not implemented.');
    }
  }
}
