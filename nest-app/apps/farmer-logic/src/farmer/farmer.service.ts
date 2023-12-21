import { Injectable, Logger } from '@nestjs/common';
import { IFarmer } from './IFarmer';
import { DbService } from '@app/sharedlogic/db/db.service';
import { CreateFarmerDto } from './create-farmer.dto';

@Injectable()
export class FarmerService implements IFarmer {
  logger: Logger;
  constructor(private readonly db: DbService) {
    this.logger = new Logger('FarmerService Request', {
      timestamp: true,
    });
  }

  async CreateFarmer(data: CreateFarmerDto) {
    try {
      this.logger.log(data, 'Request');
      const farmer = await this.db.tPFarmer.create({
        data: {
          ...data,
          type: 'Farmer',
        },
      });
      return farmer;
    } catch (error) {
      this.logger.error(error?.message);
    }
  }

  async findByid(data: Map<String, any>) {
    try {
      this.logger.log(data);
      const farmer = await this.db.tPFarmer.findUniqueOrThrow({
        where: {
          id: data['id'],
        },
      });
      return farmer;
    } catch (error) {
      this.logger.error(error?.message);
    }
  }

  async findByfirst_name(data: Map<String, any>) {
    try {
      this.logger.log(data, 'Request');
      const farmer = await this.db.tPFarmer.findUniqueOrThrow({
        where: {
          id: data['first_name'],
        },
      });
      return farmer;
    } catch (error) {
      this.logger.error(error?.message);
    }
  }

  async findBylast_name(data: Map<String, any>) {
    try {
      this.logger.log(data, 'Request');
      const farmer = await this.db.tPFarmer.findUniqueOrThrow({
        where: {
          id: data['last_name'],
        },
      });
      return farmer;
    } catch (error) {
      this.logger.error(error?.message);
    }
  }

  async findByemail(data: Map<String, any>) {
    try {
      this.logger.log(data, 'Request');
      const farmer = await this.db.tPFarmer.findUniqueOrThrow({
        where: {
          id: data['email'],
        },
      });
      return farmer;
    } catch (error) {
      this.logger.error(error?.message);
    }
  }

  async findBynumber(data: Map<String, any>) {
    try {
      this.logger.log(data, 'Request');
      const farmer = await this.db.tPFarmer.findUniqueOrThrow({
        where: {
          id: data['number'],
        },
      });
      return farmer;
    } catch (error) {
      this.logger.error(error?.message);
    }
  }

  async findBylifestock(data: Map<String, any>) {
    try {
      this.logger.log(data, 'Request');
      const livestock = await this.db.tPLifeStock.findFirstOrThrow({
        where: {
          id: data['lifeStockId'],
        },
      });
      const farmer = await this.db.tPFarmer.findUniqueOrThrow({
        where: {
          id: livestock.tPFarmerId,
        },
      });
      return farmer;
    } catch (error) {
      this.logger.error(error?.message);
    }
  }

  async findByTPRequester(data: Map<String, any>) {
    try {
      this.logger.log(data, 'Request');
      const requester = await this.db.tPRequester.findFirstOrThrow({
        where: {
          id: data['requesterId'],
        },
      });
      const farmer = await this.db.tPFarmer.findUniqueOrThrow({
        where: {
          id: requester.tPFarmerId,
        },
      });
      return farmer;
    } catch (error) {
      this.logger.error(error?.message);
    }
  }

  async findByTPTranferFrom(data: Map<String, any>) {
    try {
      this.logger.log(data, 'Request');
      const transferfrom = await this.db.tPTranferFrom.findFirstOrThrow({
        where: {
          id: data['transferFromId'],
        },
      });
      const farmer = await this.db.tPFarmer.findUniqueOrThrow({
        where: {
          id: transferfrom.TPFarmerId,
        },
      });
      return farmer;
    } catch (error) {
      this.logger.error(error?.message);
    }
  }

  async findByTPTransferTo(data: Map<String, any>) {
    try {
      this.logger.log(data, 'Request');
      const transferfrom = await this.db.tPTranferFrom.findFirstOrThrow({
        where: {
          id: data['transferToId'],
        },
      });
      const farmer = await this.db.tPFarmer.findUniqueOrThrow({
        where: {
          id: transferfrom.TPFarmerId,
        },
      });
      return farmer;
    } catch (error) {
      this.logger.error(error?.message);
    }
  }

  async Updatefirst_name(data: Map<String, any>) {
    try {
      this.logger.log(data, 'Request');
      const farmer = await this.db.tPFarmer.update({
        where: {
          id: data['farmerId'],
        },
        data: {
          first_name: {
            set: data['newFirstName'],
          },
        },
      });
      return farmer;
    } catch (error) {
      this.logger.error(error?.message);
    }
  }

  async Updatelast_name(data: Map<String, any>) {
    try {
      this.logger.log(data, 'Request');
      const farmer = await this.db.tPFarmer.update({
        where: {
          id: data['farmerId'],
        },
        data: {
          last_name: {
            set: data['newLastName'],
          },
        },
      });
      return farmer;
    } catch (error) {
      this.logger.error(error?.message);
    }
  }

  async Updateemail(data: Map<String, any>) {
    try {
      this.logger.log(data, 'Request');
      const farmer = await this.db.tPFarmer.update({
        where: {
          id: data['farmerId'],
        },
        data: {
          email: {
            set: data['newEmail'],
          },
        },
      });
      return farmer;
    } catch (error) {
      this.logger.error(error?.message);
    }
  }

  async Updatenumber(data: Map<String, any>) {
    try {
      this.logger.log(data, 'Request');
      const farmer = await this.db.tPFarmer.update({
        where: {
          id: data['farmerId'],
        },
        data: {
          number: {
            set: data['newPhoneNumber'],
          },
        },
      });
      return farmer;
    } catch (error) {
      this.logger.error(error?.message);
    }
  }
  //TODO take from auth module
  async Updatepassword(data: Map<String, any>) {
    try {
      this.logger.log(data, 'Request');
    } catch (error) {
      this.logger.error(error?.message);
    }
  }

  async Updatelifestock(data: Map<String, any>) {
    try {
      this.logger.log(data, 'Request');
      const lifestock = await this.db.tPLifeStock.findFirstOrThrow({
        where: {
          id: data['lifeStockId'],
        },
      });
      const farmer = await this.db.tPFarmer.update({
        where: {
          id: data['farmerId'],
        },
        data: {
          lifestock: {
            set: {
              id: lifestock.tPFarmerId,
            },
          },
        },
      });
      return farmer;
    } catch (error) {
      this.logger.error(error?.message);
    }
  }

  async Updatenotifications(data: Map<String, any>) {
    try {
      this.logger.log(data, 'Request');
      const notification = await this.db.tPNotification.findFirstOrThrow({
        where: {
          id: data['notificationId'],
        },
      });
      const farmer = await this.db.tPFarmer.update({
        where: {
          id: data['farmerId'],
        },
        data: {
          notifications: {
            set: {
              id: notification.TPFarmerId,
            },
          },
        },
      });
      return farmer;
    } catch (error) {
      this.logger.error(error?.message);
    }
  }

  async UpdateTPRequester(data: Map<String, any>) {
    try {
      this.logger.log(data, 'Request');
      const farmer = await this.db.tPFarmer.findFirstOrThrow({
        where: {
          id: data['FarmerId'],
        },
      });
      const requester = await this.db.tPRequester.update({
        where: {
          id: data['requesterId'],
        },
        data: {
          tPFarmerId: {
            set: farmer.id,
          },
        },
      });
      return requester;
    } catch (error) {
      this.logger.error(error?.message);
    }
  }

  async UpdateTPTranferFrom(data: Map<String, any>) {
    try {
      this.logger.log(data, 'Request');
      const farmer = await this.db.tPFarmer.findFirstOrThrow({
        where: {
          id: data['FarmerId'],
        },
      });
      const requester = await this.db.tPTranferFrom.update({
        where: {
          id: data['transferFromId'],
        },
        data: {
          TPFarmerId: farmer.id,
        },
      });
      return requester;
    } catch (error) {
      this.logger.error(error?.message);
    }
  }

  async UpdateTPTransferTo(data: Map<String, any>) {
    try {
      this.logger.log(data, 'Request');
      const farmer = await this.db.tPFarmer.findFirstOrThrow({
        where: {
          id: data['FarmerId'],
        },
      });
      const requester = await this.db.tPTranferFrom.update({
        where: {
          id: data['transferToId'],
        },
        data: {
          TPFarmerId: farmer.id,
        },
      });
      return requester;
    } catch (error) {
      this.logger.error(error?.message);
    }
  }
}
