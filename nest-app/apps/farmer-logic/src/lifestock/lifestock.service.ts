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
      this.logger.error(error?.message)
    }
  }
  //TODO
  async FindByid(data: Map<String, any>) {
    try {
      this.logger.log(data);
    } catch (error) {
      this.logger.error(error?.message)
    }
  }
  //TODO
  async FindBystatus(data: Map<String, any>) {
    try {
      this.logger.log(data);
    } catch (error) {
      this.logger.error(error?.message)
    }
  }
  //TODO
  async FindBygender(data: Map<String, any>) {
    try {
      this.logger.log(data);
    } catch (error) {
      this.logger.error(error?.message)
    }
  }
  //TODO
  async FindByage(data: Map<String, any>) {
    try {
      this.logger.log(data);
    } catch (error) {
      this.logger.error(error?.message)
    }
  }
  //TODO
  async FindByTPMethodOfPossesionId(data: Map<String, any>) {
    try {
      this.logger.log(data);
    } catch (error) {
      this.logger.error(error?.message)
    }
  }
  //TODO
  async FindBytPQrCodeId(data: Map<String, any>) {
    try {
      this.logger.log(data);
    } catch (error) {
      this.logger.error(error?.message)
    }
  }
  //TODO
  async FindByTPReportId(data: Map<String, any>) {
    try {
      this.logger.log(data);
    } catch (error) {
      this.logger.error(error?.message)
    }
  }
  //TODO
  async FindByTPVariantId(data: Map<String, any>) {
    try {
      this.logger.log(data);
    } catch (error) {
      this.logger.error(error?.message)
    }
  }
  //TODO
  async FindByTPLifeStockTypeId(data: Map<String, any>) {
    try {
      this.logger.log(data);
    } catch (error) {
      this.logger.error(error?.message)
    }
  }
  //TODO
  async FindByTPBreedId(data: Map<String, any>) {
    try {
      this.logger.log(data);
    } catch (error) {
      this.logger.error(error?.message)
    }
  }
  //TODO
  async FindBytPFarmerId(data: Map<String, any>) {
    try {
      this.logger.log(data);
    } catch (error) {
      this.logger.error(error?.message)
    }
  }
  //TODO
  async FindBybreed(data: Map<String, any>) {
    try {
      this.logger.log(data);
    } catch (error) {
      this.logger.error(error?.message)
    }
  }
  //TODO
  async FindBytype(data: Map<String, any>) {
    try {
      this.logger.log(data);
    } catch (error) {
      this.logger.error(error?.message)
    }
  }
  //TODO
  async FindBymop(data: Map<String, any>) {
    try {
      this.logger.log(data);
    } catch (error) {
      this.logger.error(error?.message)
    }
  }
  //TODO
  async FindByReport(data: Map<String, any>) {
    try {
      this.logger.log(data);
    } catch (error) {
      this.logger.error(error?.message)
    }
  }
  //TODO
  async FindByvariant(data: Map<String, any>) {
    try {
      this.logger.log(data);
    } catch (error) {
      this.logger.error(error?.message)
    }
  }
  //TODO
  async FindByTPFarmer(data: Map<String, any>) {
    try {
      this.logger.log(data);
    } catch (error) {
      this.logger.error(error?.message)
    }
  }
  //TODO
  async FindByqrcode(data: Map<String, any>) {
    try {
      this.logger.log(data);
    } catch (error) {
      this.logger.error(error?.message)
    }
  }
  //TODO
  async Updatestatus(data: Map<String, any>) {
    try {
      this.logger.log(data);
    } catch (error) {
      this.logger.error(error?.message)
    }
  }
  //TODO
  async Updategender(data: Map<String, any>) {
    try {
      this.logger.log(data);
    } catch (error) {
      this.logger.error(error?.message)
    }
  }
  //TODO
  async Updateage(data: Map<String, any>) {
    try {
      this.logger.log(data);
    } catch (error) {
      this.logger.error(error?.message)
    }
  }
  //TODO
  async UpdateTPMethodOfPossesionId(data: Map<String, any>) {
    try {
      this.logger.log(data);
    } catch (error) {
      this.logger.error(error?.message)
    }
  }
  //TODO
  async UpdatetPQrCodeId(data: Map<String, any>) {
    try {
      this.logger.log(data);
    } catch (error) {
      this.logger.error(error?.message)
    }
  }
  //TODO
  async UpdateTPReportId(data: Map<String, any>) {
    try {
      this.logger.log(data);
    } catch (error) {
      this.logger.error(error?.message)
    }
  }
  //TODO
  async UpdateTPVariantId(data: Map<String, any>) {
    try {
      this.logger.log(data);
    } catch (error) {
      this.logger.error(error?.message)
    }
  }
  //TODO
  async UpdateTPLifeStockTypeId(data: Map<String, any>) {
    try {
      this.logger.log(data);
    } catch (error) {
      this.logger.error(error?.message)
    }
  }
  //TODO
  async UpdateTPBreedId(data: Map<String, any>) {
    try {
      this.logger.log(data);
    } catch (error) {
      this.logger.error(error?.message)
    }
  }
  //TODO
  async UpdatetPFarmerId(data: Map<String, any>) {
    try {
      this.logger.log(data);
    } catch (error) {
      this.logger.error(error?.message)
    }
  }
  //TODO
  async Updatebreed(data: Map<String, any>) {
    try {
      this.logger.log(data);
    } catch (error) {
      this.logger.error(error?.message)
    }
  }
  //TODO
  async Updatetype(data: Map<String, any>) {
    try {
      this.logger.log(data);
    } catch (error) {
      this.logger.error(error?.message)
    }
  }
  //TODO
  async Updatemop(data: Map<String, any>) {
    try {
      this.logger.log(data);
    } catch (error) {
      this.logger.error(error?.message)
    }
  }
  //TODO
  async UpdateReport(data: Map<String, any>) {
    try {
      this.logger.log(data);
    } catch (error) {
      this.logger.error(error?.message)
    }
  }
  //TODO
  async Updatevariant(data: Map<String, any>) {
    try {
      this.logger.log(data);
    } catch (error) {
      this.logger.error(error?.message)
    }
  }
  //TODO
  async UpdateTPFarmer(data: Map<String, any>) {
    try {
      this.logger.log(data);
    } catch (error) {
      this.logger.error(error?.message)
    }
  }
  //TODO
  async Updateqrcode(data: Map<String, any>) {
    try {
      this.logger.log(data);
    } catch (error) {
      this.logger.error(error?.message)
    }
  }
}
