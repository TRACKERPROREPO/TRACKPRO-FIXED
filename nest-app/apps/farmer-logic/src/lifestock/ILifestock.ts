import { Logger } from '@nestjs/common';
import { TPLifeStock } from '@prisma/client';

export interface ILifestock {
  logger: Logger;
  CreateLifestock(): Promise<TPLifeStock | void>;
  FindByid(data: Map<String, any>): Promise<TPLifeStock | void>;
  FindBystatus(data: Map<String, any>): Promise<TPLifeStock[] | void>;
  FindBygender(data: Map<String, any>): Promise<TPLifeStock[] | void>;
  FindByage(data: Map<String, any>): Promise<TPLifeStock | void>;
  FindByTPMethodOfPossesionId(
    data: Map<String, any>,
  ): Promise<TPLifeStock | TPLifeStock[] | void>;
  FindBytPQrCodeId(data: Map<String, any>): Promise<TPLifeStock | void>;
  FindByTPReportId(data: Map<String, any>): Promise<TPLifeStock | void>;
  FindByTPVariantId(data: Map<String, any>): Promise<TPLifeStock | void>;
  FindByTPLifeStockTypeId(data: Map<String, any>): Promise<TPLifeStock | void>;
  FindByTPBreedId(data: Map<String, any>): Promise<TPLifeStock | void>;
  FindBytPFarmerId(data: Map<String, any>): Promise<TPLifeStock | void>;
  FindBybreed(
    data: Map<String, any>,
  ): Promise<TPLifeStock | TPLifeStock[] | void>;
  FindBytype(data: Map<String, any>): Promise<TPLifeStock | void>;
  FindBymop(data: Map<String, any>): Promise<TPLifeStock | void>;
  FindByReport(data: Map<String, any>): Promise<TPLifeStock | void>;
  FindByvariant(data: Map<String, any>): Promise<TPLifeStock | void>;
  FindByTPFarmer(data: Map<String, any>): Promise<TPLifeStock | void>;
  FindByqrcode(data: Map<String, any>): Promise<TPLifeStock | void>;
  Updatestatus(data: Map<String, any>): Promise<TPLifeStock | void>;
  Updategender(data: Map<String, any>): Promise<TPLifeStock | void>;
  Updateage(data: Map<String, any>): Promise<TPLifeStock | void>;
  UpdateTPMethodOfPossesionId(
    data: Map<String, any>,
  ): Promise<TPLifeStock | void>;
  UpdatetPQrCodeId(data: Map<String, any>): Promise<TPLifeStock | void>;
  UpdateTPReportId(data: Map<String, any>): Promise<TPLifeStock | void>;
  UpdateTPVariantId(data: Map<String, any>): Promise<TPLifeStock | void>;
  UpdateTPLifeStockTypeId(data: Map<String, any>): Promise<TPLifeStock | void>;
  UpdateTPBreedId(data: Map<String, any>): Promise<TPLifeStock | void>;
  UpdatetPFarmerId(data: Map<String, any>): Promise<TPLifeStock | void>;
  Updatebreed(
    data: Map<String, any>,
  ): Promise<TPLifeStock | TPLifeStock[] | void>;
  Updatetype(
    data: Map<String, any>,
  ): Promise<TPLifeStock | TPLifeStock[] | void>;
  Updatemop(
    data: Map<String, any>,
  ): Promise<TPLifeStock | TPLifeStock[] | void>;
  UpdateReport(data: Map<String, any>): Promise<TPLifeStock | void>;
  Updatevariant(data: Map<String, any>): Promise<TPLifeStock | void>;
  UpdateTPFarmer(data: Map<String, any>): Promise<TPLifeStock | void>;
  Updateqrcode(data: Map<String, any>): Promise<TPLifeStock | void>;
}
