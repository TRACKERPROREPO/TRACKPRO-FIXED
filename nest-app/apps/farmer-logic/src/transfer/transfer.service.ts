import { Injectable, Logger } from '@nestjs/common';
import { ITransfer } from './ITransfer';
import { TPTranferFrom, TPTransfer, TPTransferTo } from '@prisma/client';
import { DbService } from '@app/sharedlogic/db/db.service';
import { CreateTransferDto } from './create-transfer.dto';

@Injectable()
export class TransferService implements ITransfer {
  logger: Logger;
  constructor(private readonly db: DbService) {
    this.logger = new Logger('TransferService Request', {
      timestamp: true,
    });
  }
  async CreateTransfer(data: CreateTransferDto): Promise<void | TPTransfer> {
    try {
      this.logger.log(data);
      const lifestock = await this.db.tPLifeStock.findFirstOrThrow({
        where: {
          id: data['lifeStockId'],
        },
      });
      const to = await this.db.tPTransferTo.create({
        data: {
          farmer: {
            connect: {
              id: data['farmerToId'],
            },
          },
        },
      });
      const from = await this.db.tPTranferFrom.create({
        data: {
          farmer: {
            connect: {
              id: data['farmerFromId'],
            },
          },
        },
      });

      const transfer = await this.db.tPFarmer.update({
        data: {
          lifestock: {
            connect: {
              id: lifestock.id,
            },
          },
        },
        where: {
          id: to.TPFarmerId,
        },
      });
      const transfer_query = await this.db.tPTransfer.create({
        data: {
          TPTranferFromId: from.id,
          TPTransferToId: to.id,
          tPLifeStockId: lifestock.id,
          state: 'Succesful',
          reciever_data: (await this.db.tPFarmer.findFirst({
            where: {
              id: to.TPFarmerId,
            },
          })) as any,
          sender_data: (await this.db.tPFarmer.findFirst({
            where: {
              id: from.TPFarmerId,
            },
          })) as any,
          lifestock_data: (await this.db.tPLifeStock.findFirst({
            where: {
              id: lifestock.id,
            },
          })) as any,
        },
      });
      return transfer_query;
    } catch (error) {
      this.logger.error(error?.message);
    }
  }
  async FindByid(data: Map<String, any>): Promise<void | TPTransfer> {
    try {
      this.logger.log(data);
      const transfer = await this.db.tPTransfer.findFirstOrThrow({
        where: {
          id: data['transferId'],
        },
      });
      return transfer;
    } catch (error) {
      this.logger.error(error?.message);
    }
  }
  async FindBystate(
    data: Map<String, any>,
  ): Promise<void | TPTransfer | TPTransfer[]> {
    try {
      this.logger.log(data);
      const transfer = await this.db.tPTransfer.findFirstOrThrow({
        where: {
          state: {
            equals: data['state'],
          },
        },
      });
      return transfer;
    } catch (error) {
      this.logger.error(error?.message);
    }
  }
  async FindByTPTransferToId(
    data: Map<String, any>,
  ): Promise<void | TPTransferTo> {
    try {
      this.logger.log(data);
      const transfer = await this.db.tPTransferTo.findFirstOrThrow({
        where: {
          id: data['transferToId'],
        },
      });
      return transfer;
    } catch (error) {
      this.logger.error(error?.message);
    }
  }
  async FindByTPTranferFromId(
    data: Map<String, any>,
  ): Promise<void | TPTranferFrom> {
    try {
      this.logger.log(data);
      const transfer = await this.db.tPTranferFrom.findFirstOrThrow({
        where: {
          id: data['transferFromId'],
        },
      });
      return transfer;
    } catch (error) {
      this.logger.error(error?.message);
    }
  }
  async FindBycreatedAt(
    data: Map<String, any>,
  ): Promise<void | TPTransfer | TPTransfer[]> {
    try {
      this.logger.log(data);
      const transfer = await this.db.tPTransfer.findMany({
        where: {
          createdAt: {
            equals: data['createAt'],
          },
        },
      });
      return transfer;
    } catch (error) {
      this.logger.error(error?.message);
    }
  }
  async FindByupdatedAt(
    data: Map<String, any>,
  ): Promise<void | TPTransfer | TPTransfer[]> {
    try {
      this.logger.log(data);
      const transfer = await this.db.tPTransfer.findMany({
        where: {
          updatedAt: {
            equals: data['UpdatedAt'],
          },
        },
      });
      return transfer;
    } catch (error) {
      this.logger.error(error?.message);
    }
  }
  async FindByfrom(data: Map<String, any>): Promise<void | TPTransfer> {
    try {
      this.logger.log(data);
      const transfer = await this.db.tPTransfer.findFirstOrThrow({
        where: {
          from: {
            TPFarmerId: data['farmerId'],
          },
        },
      });
      return transfer;
    } catch (error) {
      this.logger.error(error?.message);
    }
  }
  async FindByto(data: Map<String, any>): Promise<void | TPTransfer> {
    try {
      this.logger.log(data);
      const transfer = await this.db.tPTransfer.findFirstOrThrow({
        where: {
          to: {
            TPFarmerId: data['farmerId'],
          },
        },
      });
      return transfer;
    } catch (error) {
      this.logger.error(error?.message);
    }
  }
  async Updatestate(data: Map<String, any>): Promise<void | TPTransfer> {
    try {
      this.logger.log(data);
      const transfer = await this.db.tPTransfer.update({
        where: {
          id: data['transferId'],
        },
        data: {
          state: data['state'],
        },
      });
      return transfer;
    } catch (error) {
      this.logger.error(error?.message);
    }
  }
  async UpdateTPTransferToId(
    data: Map<String, any>,
  ): Promise<void | TPTransfer> {
    try {
      this.logger.log(data);
      const transfer = await this.db.tPTransfer.update({
        where: {
          id: data['transferId'],
        },
        data: {
          TPTransferToId: data['newTransferToId'],
        },
      });
      return transfer;
    } catch (error) {
      this.logger.error(error?.message);
    }
  }
  async UpdateTPTranferFromId(
    data: Map<String, any>,
  ): Promise<void | TPTransfer> {
    try {
      this.logger.log(data);
      const transfer = await this.db.tPTransfer.update({
        where: {
          id: data['transferId'],
        },
        data: {
          TPTranferFromId: data['newTransferFromId'],
        },
      });
      return transfer;
    } catch (error) {
      this.logger.error(error?.message);
    }
  }
  async Updatefrom(data: Map<String, any>): Promise<void | TPTransfer> {
    try {
      this.logger.log(data);
      const transfer = await this.db.tPTransfer.update({
        where: {
          id: data['transferId'],
        },
        data: {
          from: {
            update: {
              TPFarmerId: data['farmerId'],
            },
          },
        },
      });
      return transfer;
    } catch (error) {
      this.logger.error(error?.message);
    }
  }
  async Updateto(data: Map<String, any>): Promise<void | TPTransfer> {
    try {
      this.logger.log(data);
      const transfer = await this.db.tPTransfer.update({
        where: {
          id: data['transferId'],
        },
        data: {
          to: {
            update: {
              TPFarmerId: data['farmerId'],
            },
          },
        },
      });
      return transfer;
    } catch (error) {
      this.logger.error(error?.message);
    }
  }
}
