import { Controller, Logger, Post, Query, UseGuards } from '@nestjs/common';
import { ILifestock } from './ILifestock';
import { LifestockService } from './lifestock.service';
import { TPLifeStock } from '@prisma/client';
import { CreateLifestockDto } from './create-lifestock.dto';
import { AuthGuard } from '@app/sharedlogic/auth/auth.guard';


@UseGuards(AuthGuard)
@Controller('lifestock')
export class LifestockController implements ILifestock {
  /**
   *
   */
  logger: Logger;
  constructor(private readonly lifestock: LifestockService) {}

  @Post('CreateLifestock')
  async CreateLifestock(
    @Query() data: CreateLifestockDto,
  ): Promise<void | TPLifeStock> {
    return this.lifestock.CreateLifestock(data);
  }

  @Post('FindByid')
  async FindByid(@Query() data: Map<String, any>): Promise<void | TPLifeStock> {
    return this.lifestock.FindByid(data);
  }

  @Post('FindBystatus')
  async FindBystatus(
    @Query() data: Map<String, any>,
  ): Promise<void | TPLifeStock[]> {
    return this.lifestock.FindBystatus(data);
  }

  @Post('FindBygender')
  async FindBygender(
    @Query() data: Map<String, any>,
  ): Promise<void | TPLifeStock[]> {
    return this.lifestock.FindBygender(data);
  }

  @Post('FindByage')
  async FindByage(
    @Query() data: Map<String, any>,
  ): Promise<void | TPLifeStock> {
    return this.lifestock.FindByage(data);
  }

  @Post('FindByTPMethodOfPossesionId')
  async FindByTPMethodOfPossesionId(
    @Query() data: Map<String, any>,
  ): Promise<void | TPLifeStock | TPLifeStock[]> {
    return this.lifestock.FindByTPMethodOfPossesionId(data);
  }

  @Post('FindBytPQrCodeId')
  async FindBytPQrCodeId(
    @Query() data: Map<String, any>,
  ): Promise<void | TPLifeStock> {
    return this.lifestock.FindBytPQrCodeId(data);
  }

  @Post('FindByTPReportId')
  async FindByTPReportId(
    @Query() data: Map<String, any>,
  ): Promise<void | TPLifeStock> {
    return this.lifestock.FindByTPReportId(data);
  }

  @Post('FindByTPVariantId')
  async FindByTPVariantId(
    @Query() data: Map<String, any>,
  ): Promise<void | TPLifeStock> {
    return this.lifestock.FindByTPVariantId(data);
  }

  @Post('FindByTPLifeStockTypeId')
  async FindByTPLifeStockTypeId(
    @Query() data: Map<String, any>,
  ): Promise<void | TPLifeStock> {
    return this.lifestock.FindByTPLifeStockTypeId(data);
  }

  @Post('FindByTPBreedId')
  async FindByTPBreedId(
    @Query() data: Map<String, any>,
  ): Promise<void | TPLifeStock> {
    return this.lifestock.FindByTPBreedId(data);
  }

  @Post('FindBytPFarmerId')
  async FindBytPFarmerId(
    @Query() data: Map<String, any>,
  ): Promise<void | TPLifeStock> {
    return this.lifestock.FindBytPFarmerId(data);
  }

  @Post('FindBybreed')
  async FindBybreed(
    @Query() data: Map<String, any>,
  ): Promise<void | TPLifeStock | TPLifeStock[]> {
    return this.lifestock.FindBybreed(data);
  }

  @Post('FindBytype')
  async FindBytype(
    @Query() data: Map<String, any>,
  ): Promise<void | TPLifeStock> {
    return this.lifestock.FindBytype(data);
  }

  @Post('FindBymop')
  async FindBymop(
    @Query() data: Map<String, any>,
  ): Promise<void | TPLifeStock> {
    return this.lifestock.FindBymop(data);
  }

  @Post('FindByReport')
  async FindByReport(
    @Query() data: Map<String, any>,
  ): Promise<void | TPLifeStock> {
    return this.lifestock.FindByReport(data);
  }

  @Post('FindByvariant')
  async FindByvariant(
    @Query() data: Map<String, any>,
  ): Promise<void | TPLifeStock> {
    return this.lifestock.FindByvariant(data);
  }

  @Post('FindByTPFarmer')
  async FindByTPFarmer(
    @Query() data: Map<String, any>,
  ): Promise<void | TPLifeStock> {
    return this.lifestock.FindByTPFarmer(data);
  }

  @Post('FindByqrcode')
  async FindByqrcode(
    @Query() data: Map<String, any>,
  ): Promise<void | TPLifeStock> {
    return this.lifestock.FindByqrcode(data);
  }

  @Post('Updatestatus')
  async Updatestatus(
    @Query() data: Map<String, any>,
  ): Promise<void | TPLifeStock> {
    return this.lifestock.Updatestatus(data);
  }

  @Post('Updategender')
  async Updategender(
    @Query() data: Map<String, any>,
  ): Promise<void | TPLifeStock> {
    return this.lifestock.Updategender(data);
  }

  @Post('Updateage')
  async Updateage(
    @Query() data: Map<String, any>,
  ): Promise<void | TPLifeStock> {
    return this.lifestock.Updateage(data);
  }

  @Post('UpdateTPMethodOfPossesionId')
  async UpdateTPMethodOfPossesionId(
    @Query() data: Map<String, any>,
  ): Promise<void | TPLifeStock> {
    return this.lifestock.UpdateTPMethodOfPossesionId(data);
  }

  @Post('UpdatetPQrCodeId')
  async UpdatetPQrCodeId(
    @Query() data: Map<String, any>,
  ): Promise<void | TPLifeStock> {
    return this.lifestock.UpdatetPQrCodeId(data);
  }

  @Post('UpdateTPReportId')
  async UpdateTPReportId(
    @Query() data: Map<String, any>,
  ): Promise<void | TPLifeStock> {
    return this.lifestock.UpdateTPReportId(data);
  }

  @Post('UpdateTPVariantId')
  async UpdateTPVariantId(
    @Query() data: Map<String, any>,
  ): Promise<void | TPLifeStock> {
    return this.lifestock.UpdateTPVariantId(data);
  }

  @Post('UpdateTPLifeStockTypeId')
  async UpdateTPLifeStockTypeId(
    @Query() data: Map<String, any>,
  ): Promise<void | TPLifeStock> {
    return this.lifestock.UpdateTPLifeStockTypeId(data);
  }

  @Post('UpdateTPBreedId')
  async UpdateTPBreedId(
    @Query() data: Map<String, any>,
  ): Promise<void | TPLifeStock> {
    return this.lifestock.UpdateTPBreedId(data);
  }

  @Post('UpdatetPFarmerId')
  async UpdatetPFarmerId(
    @Query() data: Map<String, any>,
  ): Promise<void | TPLifeStock> {
    return this.lifestock.UpdatetPFarmerId(data);
  }

  @Post('Updatebreed')
  async Updatebreed(
    @Query() data: Map<String, any>,
  ): Promise<void | TPLifeStock | TPLifeStock[]> {
    return this.lifestock.Updatebreed(data);
  }

  @Post('Updatetype')
  async Updatetype(
    @Query() data: Map<String, any>,
  ): Promise<void | TPLifeStock | TPLifeStock[]> {
    return this.lifestock.Updatetype(data);
  }

  @Post('Updatemop')
  async Updatemop(
    @Query() data: Map<String, any>,
  ): Promise<void | TPLifeStock | TPLifeStock[]> {
    return this.lifestock.Updatemop(data);
  }

  @Post('UpdateReport')
  async UpdateReport(
    @Query() data: Map<String, any>,
  ): Promise<void | TPLifeStock> {
    return this.lifestock.UpdateReport(data);
  }

  @Post('Updatevariant')
  async Updatevariant(
    @Query() data: Map<String, any>,
  ): Promise<void | TPLifeStock> {
    return this.lifestock.Updatevariant(data);
  }

  @Post('UpdateTPFarmer')
  async UpdateTPFarmer(
    @Query() data: Map<String, any>,
  ): Promise<void | TPLifeStock> {
    return this.lifestock.UpdateTPFarmer(data);
  }

  @Post('Updateqrcode')
  async Updateqrcode(
    @Query() data: Map<String, any>,
  ): Promise<void | TPLifeStock> {
    return this.lifestock.Updateqrcode(data);
  }
}
