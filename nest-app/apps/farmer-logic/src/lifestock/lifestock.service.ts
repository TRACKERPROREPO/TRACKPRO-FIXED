import { Injectable, Logger } from '@nestjs/common';
import { ILifestock } from './ILifestock';

@Injectable()
export class LifestockService implements ILifestock {
  logger: Logger;
  constructor() {
    this.logger = new Logger('LifestockService', {
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
  async FindByid(data: Map<String, String>) {
    try {
    } catch (error) {
      throw new Error('Method not implemented.');
    }
  }
  //TODO
  async FindBystatus(data: Map<String, String>) {
    try {
    } catch (error) {
      throw new Error('Method not implemented.');
    }
  }
  //TODO
  async FindBygender(data: Map<String, String>) {
    try {
    } catch (error) {
      throw new Error('Method not implemented.');
    }
  }
  //TODO
  async FindByage(data: Map<String, String>) {
    try {
    } catch (error) {
      throw new Error('Method not implemented.');
    }
  }
  //TODO
  async FindByTPMethodOfPossesionId(data: Map<String, String>) {
    try {
    } catch (error) {
      throw new Error('Method not implemented.');
    }
  }
  //TODO
  async FindBytPQrCodeId(data: Map<String, String>) {
    try {
    } catch (error) {
      throw new Error('Method not implemented.');
    }
  }
  //TODO
  async FindByTPReportId(data: Map<String, String>) {
    try {
    } catch (error) {
      throw new Error('Method not implemented.');
    }
  }
  //TODO
  async FindByTPVariantId(data: Map<String, String>) {
    try {
    } catch (error) {
      throw new Error('Method not implemented.');
    }
  }
  //TODO
  async FindByTPLifeStockTypeId(data: Map<String, String>) {
    try {
    } catch (error) {
      throw new Error('Method not implemented.');
    }
  }
  //TODO
  async FindByTPBreedId(data: Map<String, String>) {
    try {
    } catch (error) {
      throw new Error('Method not implemented.');
    }
  }
  //TODO
  async FindBytPFarmerId(data: Map<String, String>) {
    try {
    } catch (error) {
      throw new Error('Method not implemented.');
    }
  }
  //TODO
  async FindBybreed(data: Map<String, String>) {
    try {
    } catch (error) {
      throw new Error('Method not implemented.');
    }
  }
  //TODO
  async FindBytype(data: Map<String, String>) {
    try {
    } catch (error) {
      throw new Error('Method not implemented.');
    }
  }
  //TODO
  async FindBymop(data: Map<String, String>) {
    try {
    } catch (error) {
      throw new Error('Method not implemented.');
    }
  }
  //TODO
  async FindByReport(data: Map<String, String>) {
    try {
    } catch (error) {
      throw new Error('Method not implemented.');
    }
  }
  //TODO
  async FindByvariant(data: Map<String, String>) {
    try {
    } catch (error) {
      throw new Error('Method not implemented.');
    }
  }
  //TODO
  async FindByTPFarmer(data: Map<String, String>) {
    try {
    } catch (error) {
      throw new Error('Method not implemented.');
    }
  }
  //TODO
  async FindByqrcode(data: Map<String, String>) {
    try {
    } catch (error) {
      throw new Error('Method not implemented.');
    }
  }
  //TODO
  async Updatestatus(data: Map<String, String>) {
    try {
    } catch (error) {
      throw new Error('Method not implemented.');
    }
  }
  //TODO
  async Updategender(data: Map<String, String>) {
    try {
    } catch (error) {
      throw new Error('Method not implemented.');
    }
  }
  //TODO
  async Updateage(data: Map<String, String>) {
    try {
    } catch (error) {
      throw new Error('Method not implemented.');
    }
  }
  //TODO
  async UpdateTPMethodOfPossesionId(data: Map<String, String>) {
    try {
    } catch (error) {
      throw new Error('Method not implemented.');
    }
  }
  //TODO
  async UpdatetPQrCodeId(data: Map<String, String>) {
    try {
    } catch (error) {
      throw new Error('Method not implemented.');
    }
  }
  //TODO
  async UpdateTPReportId(data: Map<String, String>) {
    try {
    } catch (error) {
      throw new Error('Method not implemented.');
    }
  }
  //TODO
  async UpdateTPVariantId(data: Map<String, String>) {
    try {
    } catch (error) {
      throw new Error('Method not implemented.');
    }
  }
  //TODO
  async UpdateTPLifeStockTypeId(data: Map<String, String>) {
    try {
    } catch (error) {
      throw new Error('Method not implemented.');
    }
  }
  //TODO
  async UpdateTPBreedId(data: Map<String, String>) {
    try {
    } catch (error) {
      throw new Error('Method not implemented.');
    }
  }
  //TODO
  async UpdatetPFarmerId(data: Map<String, String>) {
    try {
    } catch (error) {
      throw new Error('Method not implemented.');
    }
  }
  //TODO
  async Updatebreed(data: Map<String, String>) {
    try {
    } catch (error) {
      throw new Error('Method not implemented.');
    }
  }
  //TODO
  async Updatetype(data: Map<String, String>) {
    try {
    } catch (error) {
      throw new Error('Method not implemented.');
    }
  }
  //TODO
  async Updatemop(data: Map<String, String>) {
    try {
    } catch (error) {
      throw new Error('Method not implemented.');
    }
  }
  //TODO
  async UpdateReport(data: Map<String, String>) {
    try {
    } catch (error) {
      throw new Error('Method not implemented.');
    }
  }
  //TODO
  async Updatevariant(data: Map<String, String>) {
    try {
    } catch (error) {
      throw new Error('Method not implemented.');
    }
  }
  //TODO
  async UpdateTPFarmer(data: Map<String, String>) {
    try {
    } catch (error) {
      throw new Error('Method not implemented.');
    }
  }
  //TODO
  async Updateqrcode(data: Map<String, String>) {
    try {
    } catch (error) {
      throw new Error('Method not implemented.');
    }
  }
}
