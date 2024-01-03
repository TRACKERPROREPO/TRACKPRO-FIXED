import { Injectable, Logger } from '@nestjs/common';
import { ILifestock } from './ILifestock';
import { DbService } from '@app/sharedlogic/db/db.service';
import { CreateLifestockDto } from './create-lifestock.dto';
import { QrCodeService } from '../qr-code/qr-code.service';
import { CreateQrcodeDto } from '../qr-code/create-qrcode.dto';

@Injectable()
export class LifestockService implements ILifestock {
  logger: Logger;
  constructor(
    private readonly db: DbService,
    private readonly qr: QrCodeService,
  ) {
    this.logger = new Logger('LifestockService Request', {
      timestamp: true,
    });
  }

  async CreateLifestock(data: CreateLifestockDto) {
    try {
      let farmer = await this.db.tPFarmer.findFirstOrThrow({
        where: {
          id: data['farmerId'],
        },
      });
      let mop = await this.db.tPMethodOfPossesion.create({
        data: {
          details: data['details'],
        },
      });
      let variant = await this.db.tPVariant.create({
        data: {
          name: data['variant_name'],
        },
      });
      let breed = await this.db.tPBreed.create({
        data: {
          name: data['breed'],
        },
      });
      let type = await this.db.tPLifeStockType.create({
        data: {
          name: data['type'],
        },
      });
      let qrcode = await this.qr.CreateQrcode(
        data as unknown as CreateQrcodeDto,
      );
      let lifestock = await this.db.tPLifeStock.create({
        data: {
          age: Number.parseInt(data['age']),
          gender: data['gender'] !== '' ? data['gender'] : 'Female',
          breed: {
            connect: {
              id: breed['id'],
            },
          },
          type: {
            connect: {
              id: type['id'],
            },
          },
          variant: {
            connect: {
              id: variant['id'],
            },
          },
          mop: {
            connect: {
              id: mop['id'],
            },
          },
          TPFarmer: {
            connect: {
              id: farmer['id'],
            },
          },
          qrcode: {
            connect: {
              id: qrcode['id'],
            },
          },
        },
      });
    } catch (error) {
      this.logger.error(error?.message);
    }
  }

  async FindByid(data: Map<String, any>) {
    try {
      const lifestock = await this.db.tPLifeStock.findFirstOrThrow({
        where: {
          id: {
            equals: data['id'],
          },
        },
      });
      this.logger.log(data);
    } catch (error) {
      this.logger.error(error?.message);
    }
  }

  async FindBystatus(data: Map<String, any>) {
    try {
      const lifestock = await this.db.tPLifeStock.findFirstOrThrow({
        where: {
          status: {
            equals: data['status'],
          },
        },
      });
      this.logger.log(data);
    } catch (error) {
      this.logger.error(error?.message);
    }
  }

  async FindBygender(data: Map<String, any>) {
    try {
      const lifestock = await this.db.tPLifeStock.findFirstOrThrow({
        where: {
          gender: {
            equals: data['gender'],
          },
        },
      });
      this.logger.log(data);
    } catch (error) {
      this.logger.error(error?.message);
    }
  }

  async FindByage(data: Map<String, any>) {
    try {
      const lifestock = await this.db.tPLifeStock.findFirstOrThrow({
        where: {
          age: {
            equals: data['age'],
          },
        },
      });
      this.logger.log(data);
    } catch (error) {
      this.logger.error(error?.message);
    }
  }

  async FindByTPMethodOfPossesionId(data: Map<String, any>) {
    try {
      const lifestock = await this.db.tPLifeStock.findFirstOrThrow({
        where: {
          TPMethodOfPossesionId: {
            equals: data['TPMethodOfPossesionId'],
          },
        },
      });
      this.logger.log(data);
    } catch (error) {
      this.logger.error(error?.message);
    }
  }

  async FindBytPQrCodeId(data: Map<String, any>) {
    try {
      const lifestock = await this.db.tPLifeStock.findFirstOrThrow({
        where: {
          tPQrCodeId: {
            equals: data['tPQrCodeId'],
          },
        },
      });
      this.logger.log(data);
    } catch (error) {
      this.logger.error(error?.message);
    }
  }

  async FindByTPReportId(data: Map<String, any>) {
    try {
      const lifestock = await this.db.tPLifeStock.findFirstOrThrow({
        where: {
          TPReportId: {
            equals: data['TPReportId'],
          },
        },
      });
      this.logger.log(data);
    } catch (error) {
      this.logger.error(error?.message);
    }
  }

  async FindByTPVariantId(data: Map<String, any>) {
    try {
      const lifestock = await this.db.tPLifeStock.findFirstOrThrow({
        where: {
          TPVariantId: {
            equals: data['TPVariantId'],
          },
        },
      });
      this.logger.log(data);
    } catch (error) {
      this.logger.error(error?.message);
    }
  }

  async FindByTPLifeStockTypeId(data: Map<String, any>) {
    try {
      const lifestock = await this.db.tPLifeStock.findFirstOrThrow({
        where: {
          TPLifeStockTypeId: {
            equals: data['TPLifeStockTypeId'],
          },
        },
      });
      this.logger.log(data);
    } catch (error) {
      this.logger.error(error?.message);
    }
  }

  async FindByTPBreedId(data: Map<String, any>) {
    try {
      const lifestock = await this.db.tPLifeStock.findFirstOrThrow({
        where: {
          TPBreedId: {
            equals: data['TPBreedId'],
          },
        },
      });
      this.logger.log(data);
    } catch (error) {
      this.logger.error(error?.message);
    }
  }

  async FindBytPFarmerId(data: Map<String, any>) {
    try {
      const lifestock = await this.db.tPLifeStock.findFirstOrThrow({
        where: {
          tPFarmerId: {
            equals: data['tPFarmerId'],
          },
        },
      });
      this.logger.log(data);
    } catch (error) {
      this.logger.error(error?.message);
    }
  }

  async FindBybreed(data: Map<String, any>) {
    try {
      const lifestock = await this.db.tPLifeStock.findFirstOrThrow({
        where: {
          breed: {
            id: data['breedId'],
          },
        },
      });
      this.logger.log(data);
    } catch (error) {
      this.logger.error(error?.message);
    }
  }

  async FindBytype(data: Map<String, any>) {
    try {
      const lifestock = await this.db.tPLifeStock.findFirstOrThrow({
        where: {
          type: data['type'],
        },
      });
      this.logger.log(data);
    } catch (error) {
      this.logger.error(error?.message);
    }
  }

  async FindBymop(data: Map<String, any>) {
    try {
      const lifestock = await this.db.tPLifeStock.findFirstOrThrow({
        where: {
          mop: {
            id: data['mopId'],
          },
        },
      });
      this.logger.log(data);
    } catch (error) {
      this.logger.error(error?.message);
    }
  }

  async FindByReport(data: Map<String, any>) {
    try {
      const lifestock = await this.db.tPLifeStock.findFirstOrThrow({
        where: {
          Report: {
            id: data['reportId'],
          },
        },
      });
      this.logger.log(data);
    } catch (error) {
      this.logger.error(error?.message);
    }
  }

  async FindByvariant(data: Map<String, any>) {
    try {
      const lifestock = await this.db.tPLifeStock.findFirstOrThrow({
        where: {
          variant: {
            id: data['variantId'],
          },
        },
      });
      this.logger.log(data);
    } catch (error) {
      this.logger.error(error?.message);
    }
  }

  async FindByTPFarmer(data: Map<String, any>) {
    try {
      const lifestock = await this.db.tPLifeStock.findFirstOrThrow({
        where: {
          TPFarmer: {
            id: data['farmerId'],
          },
        },
      });
      this.logger.log(data);
    } catch (error) {
      this.logger.error(error?.message);
    }
  }

  async FindByqrcode(data: Map<String, any>) {
    try {
      const lifestock = await this.db.tPLifeStock.findFirstOrThrow({
        where: {
          qrcode: {
            id: data['qrcodeId'],
          },
        },
      });
      this.logger.log(data);
    } catch (error) {
      this.logger.error(error?.message);
    }
  }

  async Updatestatus(data: Map<String, any>) {
    try {
      const lifestock = await this.db.tPLifeStock.update({
        data: {
          status: data['new_status'],
        },
        where: {
          id: data['lifestockId'],
        },
      });
      this.logger.log(data);
      return lifestock;
    } catch (error) {
      this.logger.error(error?.message);
    }
  }

  async Updategender(data: Map<String, any>) {
    try {
      const lifestock = await this.db.tPLifeStock.update({
        data: {
          gender: data['new_gender'],
        },
        where: {
          id: data['lifestockId'],
        },
      });
      this.logger.log(data);
      return lifestock;
    } catch (error) {
      this.logger.error(error?.message);
    }
  }

  async Updateage(data: Map<String, any>) {
    try {
      const lifestock = await this.db.tPLifeStock.update({
        data: {
          age: data['new_age'],
        },
        where: {
          id: data['lifestockId'],
        },
      });
      this.logger.log(data);
      return lifestock;
    } catch (error) {
      this.logger.error(error?.message);
    }
  }

  async UpdateTPMethodOfPossesionId(data: Map<String, any>) {
    try {
      const lifestock = await this.db.tPLifeStock.update({
        data: {
          TPMethodOfPossesionId: data['new_TPMethodOfPossesionId'],
        },
        where: {
          id: data['lifestockId'],
        },
      });
      this.logger.log(data);
      return lifestock;
    } catch (error) {
      this.logger.error(error?.message);
    }
  }

  async UpdatetPQrCodeId(data: Map<String, any>) {
    try {
      const lifestock = await this.db.tPLifeStock.update({
        data: {
          tPQrCodeId: data['new_tPQrCodeId'],
        },
        where: {
          id: data['lifestockId'],
        },
      });
      this.logger.log(data);
      return lifestock;
    } catch (error) {
      this.logger.error(error?.message);
    }
  }

  async UpdateTPReportId(data: Map<String, any>) {
    try {
      const lifestock = await this.db.tPLifeStock.update({
        data: {
          TPReportId: data['new_TPReportId'],
        },
        where: {
          id: data['lifestockId'],
        },
      });
      this.logger.log(data);
      return lifestock;
    } catch (error) {
      this.logger.error(error?.message);
    }
  }

  async UpdateTPVariantId(data: Map<String, any>) {
    try {
      const lifestock = await this.db.tPLifeStock.update({
        data: {
          TPVariantId: data['new_TPVariantId'],
        },
        where: {
          id: data['lifestockId'],
        },
      });
      this.logger.log(data);
      return lifestock;
    } catch (error) {
      this.logger.error(error?.message);
    }
  }

  async UpdateTPLifeStockTypeId(data: Map<String, any>) {
    try {
      const lifestock = await this.db.tPLifeStock.update({
        data: {
          TPLifeStockTypeId: data['new_TPLifeStockTypeId'],
        },
        where: {
          id: data['lifestockId'],
        },
      });
      this.logger.log(data);
      return lifestock;
    } catch (error) {
      this.logger.error(error?.message);
    }
  }

  async UpdateTPBreedId(data: Map<String, any>) {
    try {
      const lifestock = await this.db.tPLifeStock.update({
        data: {
          TPBreedId: data['new_TPBreedId'],
        },
        where: {
          id: data['lifestockId'],
        },
      });
      this.logger.log(data);
      return lifestock;
    } catch (error) {
      this.logger.error(error?.message);
    }
  }

  async UpdatetPFarmerId(data: Map<String, any>) {
    try {
      const lifestock = await this.db.tPLifeStock.update({
        data: {
          tPFarmerId: data['new_tPFarmerId'],
        },
        where: {
          id: data['lifestockId'],
        },
      });
      this.logger.log(data);
      return lifestock;
    } catch (error) {
      this.logger.error(error?.message);
    }
  }

  async Updatebreed(data: Map<String, any>) {
    try {
      const lifestock = await this.db.tPLifeStock.update({
        data: {
          breed: data['new_breed'],
        },
        where: {
          id: data['lifestockId'],
        },
      });
      this.logger.log(data);
      return lifestock;
    } catch (error) {
      this.logger.error(error?.message);
    }
  }

  async Updatetype(data: Map<String, any>) {
    try {
      const lifestock = await this.db.tPLifeStock.update({
        data: {
          type: data['new_type'],
        },
        where: {
          id: data['lifestockId'],
        },
      });
      this.logger.log(data);
      return lifestock;
    } catch (error) {
      this.logger.error(error?.message);
    }
  }

  async Updatemop(data: Map<String, any>) {
    try {
      const lifestock = await this.db.tPLifeStock.update({
        data: {
          mop: data['new_mop'],
        },
        where: {
          id: data['lifestockId'],
        },
      });
      this.logger.log(data);
      return lifestock;
    } catch (error) {
      this.logger.error(error?.message);
    }
  }

  async UpdateReport(data: Map<String, any>) {
    try {
      const lifestock = await this.db.tPLifeStock.update({
        data: {
          Report: data['new_Report'],
        },
        where: {
          id: data['lifestockId'],
        },
      });
      this.logger.log(data);
      return lifestock;
    } catch (error) {
      this.logger.error(error?.message);
    }
  }

  async Updatevariant(data: Map<String, any>) {
    try {
      const lifestock = await this.db.tPLifeStock.update({
        data: {
          variant: data['new_variant'],
        },
        where: {
          id: data['lifestockId'],
        },
      });
      this.logger.log(data);
      return lifestock;
    } catch (error) {
      this.logger.error(error?.message);
    }
  }

  async UpdateTPFarmer(data: Map<String, any>) {
    try {
      const lifestock = await this.db.tPLifeStock.update({
        data: {
          TPFarmer: data['new_TPFarmer'],
        },
        where: {
          id: data['lifestockId'],
        },
      });
      this.logger.log(data);
      return lifestock;
    } catch (error) {
      this.logger.error(error?.message);
    }
  }

  async Updateqrcode(data: Map<String, any>) {
    try {
      const lifestock = await this.db.tPLifeStock.update({
        data: {
          qrcode: data['new_qrcode'],
        },
        where: {
          id: data['lifestockId'],
        },
      });
      this.logger.log(data);
      return lifestock;
    } catch (error) {
      this.logger.error(error?.message);
    }
  }
}
