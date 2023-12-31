import { Injectable, Logger } from '@nestjs/common';
import { IQrcode } from './IQrcode';
import { TPQrCode } from '@prisma/client';
import { DbService } from '@app/sharedlogic/db/db.service';
import { CreateQrcodeDto } from './create-qrcode.dto';
import { HttpService } from '@nestjs/axios';

@Injectable()
export class QrCodeService implements IQrcode {
  logger: Logger;
  constructor(private readonly db: DbService,
    private readonly client:HttpService) {
    this.logger = new Logger('QrCodeService Request', {
      timestamp: true,
    });
  }
  // TODO genrate link and proxy to qrcode server
  async CreateQrcode(data: CreateQrcodeDto): Promise<void | TPQrCode> {
    try {
      this.logger.log(data);
      const proxy = (await this.client.axiosRef({
        url: 'http://Tracker-Pro-Qr-Code:8080?data='+data as string,
        method: 'get',
      })) as any;

      const thing = proxy['data'] as any

      console.log(proxy);

      // const qrcode = await this.db.tPQrCode.create({
      //   data: {
      //     link: '',
      //     TPLifeStock: {
      //       connect: {
      //         id: data['lifestockId'],
      //       },
      //     },
      //     TPReport: {
      //       connect: {
      //         id: data['reportId'],
      //       },
      //     },
      //   },
      // });
      return thing;
    } catch (error) {
      this.logger.error(error?.message, undefined, 'ERROR');
    }
  }

  async Updateid(data: Map<String, any>): Promise<void | TPQrCode> {
    try {
      this.logger.log(data);
      const qrcode = await this.db.tPQrCode.update({
        data: {
          id: data['new_id'],
        },
        where: {
          id: data['id'],
        },
      });
      return qrcode;
    } catch (error) {
      this.logger.error(error?.message, undefined, 'ERROR');
    }
  }

  async Updatelink(data: Map<String, any>): Promise<void | TPQrCode> {
    try {
      this.logger.log(data);
      const qrcode = await this.db.tPQrCode.update({
        data: {
          link: data['new_link'],
        },
        where: {
          id: data['id'],
        },
      });
      return qrcode;
    } catch (error) {
      this.logger.error(error?.message, undefined, 'ERROR');
    }
  }

  async UpdateTPLifeStock(data: Map<String, any>): Promise<void | TPQrCode> {
    try {
      this.logger.log(data);
      const qrcode = await this.db.tPQrCode.update({
        data: {
          TPLifeStock: {
            connect: {
              id: data['new_lifestockId'],
            },
          },
        },
        where: {
          id: data['id'],
        },
      });
      return qrcode;
    } catch (error) {
      this.logger.error(error?.message, undefined, 'ERROR');
    }
  }

  async UpdateTPReport(data: Map<String, any>): Promise<void | TPQrCode> {
    try {
      this.logger.log(data);
      const qrcode = await this.db.tPQrCode.update({
        data: {
          TPReport: {
            connect: {
              id: data['new_reportId'],
            },
          },
        },
        where: {
          id: data['id'],
        },
      });
      return qrcode;
    } catch (error) {
      this.logger.error(error?.message, undefined, 'ERROR');
    }
  }

  async FindByid(data: Map<String, any>): Promise<void | TPQrCode> {
    try {
      this.logger.log(data);
      const qrcode = await this.db.tPQrCode.findFirstOrThrow({
        where: {
          id: {
            equals: data['id'],
          },
        },
      });
      return qrcode;
    } catch (error) {
      this.logger.error(error?.message, undefined, 'ERROR');
    }
  }

  async FindBylink(data: Map<String, any>): Promise<void | TPQrCode> {
    try {
      this.logger.log(data);
      const qrcode = await this.db.tPQrCode.findFirstOrThrow({
        where: {
          link: {
            equals: data['link'],
          },
        },
      });
      return qrcode;
    } catch (error) {
      this.logger.error(error?.message, undefined, 'ERROR');
    }
  }

  async FindBycreatedAt(data: Map<String, any>): Promise<void | TPQrCode> {
    try {
      this.logger.log(data);
      const qrcode = await this.db.tPQrCode.findFirstOrThrow({
        where: {
          createdAt: {
            equals: data['createdAt'],
          },
        },
      });
      return qrcode;
    } catch (error) {
      this.logger.error(error?.message, undefined, 'ERROR');
    }
  }

  async FindByupdatedAt(data: Map<String, any>): Promise<void | TPQrCode> {
    try {
      this.logger.log(data);
      const qrcode = await this.db.tPQrCode.findFirstOrThrow({
        where: {
          updatedAt: {
            equals: data['updatedAt'],
          },
        },
      });
      return qrcode;
    } catch (error) {
      this.logger.error(error?.message, undefined, 'ERROR');
    }
  }

  async FindByTPLifeStock(data: Map<String, any>): Promise<void | TPQrCode> {
    try {
      this.logger.log(data);
      const qrcode = await this.db.tPQrCode.findFirstOrThrow({
        where: {
          TPLifeStock: {
            every: {
              id: data['lifestockId'],
            },
          },
        },
      });
      return qrcode;
    } catch (error) {
      this.logger.error(error?.message, undefined, 'ERROR');
    }
  }

  async FindByTPReport(data: Map<String, any>): Promise<void | TPQrCode> {
    try {
      this.logger.log(data);
      const qrcode = await this.db.tPQrCode.findFirstOrThrow({
        where: {
          TPReport: {
            every: {
              id: data['reportId'],
            },
          },
        },
      });
      return qrcode;
    } catch (error) {
      this.logger.error(error?.message, undefined, 'ERROR');
    }
  }
}
