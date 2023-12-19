import { Controller, Logger, Post } from '@nestjs/common';
import { ILifestock } from './ILifestock';
import { LifestockService } from './lifestock.service';
import { TPLifeStock } from '@prisma/client';

@Controller('lifestock')
export class LifestockController implements ILifestock {
  /**
   *
   */
  logger: Logger;
  constructor(private readonly lifestock: LifestockService) {}
  // TODO
  @Post('CreateLifestock')
  async CreateLifestock(): Promise<void | TPLifeStock> {
    throw new Error('Method not implemented.');
  }
  // TODO
  @Post('FindByid')
  async FindByid(data: Map<String, any>): Promise<void | TPLifeStock> {
    throw new Error('Method not implemented.');
  }
  // TODO
  @Post('FindBystatus')
  async FindBystatus(data: Map<String, any>): Promise<void | TPLifeStock[]> {
    throw new Error('Method not implemented.');
  }
  // TODO
  @Post('FindBygender')
  async FindBygender(data: Map<String, any>): Promise<void | TPLifeStock[]> {
    throw new Error('Method not implemented.');
  }
  // TODO
  @Post('FindByage')
  async FindByage(data: Map<String, any>): Promise<void | TPLifeStock> {
    throw new Error('Method not implemented.');
  }
  // TODO
  @Post('FindByTPMethodOfPossesionId')
  async FindByTPMethodOfPossesionId(
    data: Map<String, any>,
  ): Promise<void | TPLifeStock | TPLifeStock[]> {
    throw new Error('Method not implemented.');
  }
  // TODO
  @Post('FindBytPQrCodeId')
  async FindBytPQrCodeId(data: Map<String, any>): Promise<void | TPLifeStock> {
    throw new Error('Method not implemented.');
  }
  // TODO
  @Post('FindByTPReportId')
  async FindByTPReportId(data: Map<String, any>): Promise<void | TPLifeStock> {
    throw new Error('Method not implemented.');
  }
  // TODO
  @Post('FindByTPVariantId')
  async FindByTPVariantId(data: Map<String, any>): Promise<void | TPLifeStock> {
    throw new Error('Method not implemented.');
  }
  // TODO
  @Post('FindByTPLifeStockTypeId')
  async FindByTPLifeStockTypeId(
    data: Map<String, any>,
  ): Promise<void | TPLifeStock> {
    throw new Error('Method not implemented.');
  }
  // TODO
  @Post('FindByTPBreedId')
  async FindByTPBreedId(data: Map<String, any>): Promise<void | TPLifeStock> {
    throw new Error('Method not implemented.');
  }
  // TODO
  @Post('FindBytPFarmerId')
  async FindBytPFarmerId(data: Map<String, any>): Promise<void | TPLifeStock> {
    throw new Error('Method not implemented.');
  }
  // TODO
  @Post('FindBybreed')
  async FindBybreed(
    data: Map<String, any>,
  ): Promise<void | TPLifeStock | TPLifeStock[]> {
    throw new Error('Method not implemented.');
  }
  // TODO
  @Post('FindBytype')
  async FindBytype(data: Map<String, any>): Promise<void | TPLifeStock> {
    throw new Error('Method not implemented.');
  }
  // TODO
  @Post('FindBymop')
  async FindBymop(data: Map<String, any>): Promise<void | TPLifeStock> {
    throw new Error('Method not implemented.');
  }
  // TODO
  @Post('FindByReport')
  async FindByReport(data: Map<String, any>): Promise<void | TPLifeStock> {
    throw new Error('Method not implemented.');
  }
  // TODO
  @Post('FindByvariant')
  async FindByvariant(data: Map<String, any>): Promise<void | TPLifeStock> {
    throw new Error('Method not implemented.');
  }
  // TODO
  @Post('FindByTPFarmer')
  async FindByTPFarmer(data: Map<String, any>): Promise<void | TPLifeStock> {
    throw new Error('Method not implemented.');
  }
  // TODO
  @Post('FindByqrcode')
  async FindByqrcode(data: Map<String, any>): Promise<void | TPLifeStock> {
    throw new Error('Method not implemented.');
  }
  // TODO
  @Post('Updatestatus')
  async Updatestatus(data: Map<String, any>): Promise<void | TPLifeStock> {
    throw new Error('Method not implemented.');
  }
  // TODO
  @Post('Updategender')
  async Updategender(data: Map<String, any>): Promise<void | TPLifeStock> {
    throw new Error('Method not implemented.');
  }
  // TODO
  @Post('Updateage')
  async Updateage(data: Map<String, any>): Promise<void | TPLifeStock> {
    throw new Error('Method not implemented.');
  }
  // TODO
  @Post('UpdateTPMethodOfPossesionId')
  async UpdateTPMethodOfPossesionId(
    data: Map<String, any>,
  ): Promise<void | TPLifeStock> {
    throw new Error('Method not implemented.');
  }
  // TODO
  @Post('UpdatetPQrCodeId')
  async UpdatetPQrCodeId(data: Map<String, any>): Promise<void | TPLifeStock> {
    throw new Error('Method not implemented.');
  }
  // TODO
  @Post('UpdateTPReportId')
  async UpdateTPReportId(data: Map<String, any>): Promise<void | TPLifeStock> {
    throw new Error('Method not implemented.');
  }
  // TODO
  @Post('UpdateTPVariantId')
  async UpdateTPVariantId(data: Map<String, any>): Promise<void | TPLifeStock> {
    throw new Error('Method not implemented.');
  }
  // TODO
  @Post('UpdateTPLifeStockTypeId')
  async UpdateTPLifeStockTypeId(
    data: Map<String, any>,
  ): Promise<void | TPLifeStock> {
    throw new Error('Method not implemented.');
  }
  // TODO
  @Post('UpdateTPBreedId')
  async UpdateTPBreedId(data: Map<String, any>): Promise<void | TPLifeStock> {
    throw new Error('Method not implemented.');
  }
  // TODO
  @Post('UpdatetPFarmerId')
  async UpdatetPFarmerId(data: Map<String, any>): Promise<void | TPLifeStock> {
    throw new Error('Method not implemented.');
  }
  // TODO
  @Post('Updatebreed')
  async Updatebreed(
    data: Map<String, any>,
  ): Promise<void | TPLifeStock | TPLifeStock[]> {
    throw new Error('Method not implemented.');
  }
  // TODO
  @Post('Updatetype')
  async Updatetype(
    data: Map<String, any>,
  ): Promise<void | TPLifeStock | TPLifeStock[]> {
    throw new Error('Method not implemented.');
  }
  // TODO
  @Post('Updatemop')
  async Updatemop(
    data: Map<String, any>,
  ): Promise<void | TPLifeStock | TPLifeStock[]> {
    throw new Error('Method not implemented.');
  }
  // TODO
  @Post('UpdateReport')
  async UpdateReport(data: Map<String, any>): Promise<void | TPLifeStock> {
    throw new Error('Method not implemented.');
  }
  // TODO
  @Post('Updatevariant')
  async Updatevariant(data: Map<String, any>): Promise<void | TPLifeStock> {
    throw new Error('Method not implemented.');
  }
  // TODO
  @Post('UpdateTPFarmer')
  async UpdateTPFarmer(data: Map<String, any>): Promise<void | TPLifeStock> {
    throw new Error('Method not implemented.');
  }
  // TODO
  @Post('Updateqrcode')
  async Updateqrcode(data: Map<String, any>): Promise<void | TPLifeStock> {
    throw new Error('Method not implemented.');
  }
  // TODO
}
