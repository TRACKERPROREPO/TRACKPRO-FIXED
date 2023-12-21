import { Injectable, Logger } from '@nestjs/common';
import { IFarmerRequests } from './IFarmerRequests';
import { TPRequest } from '@prisma/client';
import { DbService } from '@app/sharedlogic/db/db.service';

@Injectable()
export class FarmerRequestsService implements IFarmerRequests {
  logger: Logger;
  /**
   *
   */
  constructor(private readonly db: DbService) {
    this.logger = new Logger('FarmerRequestsService Request', {
      timestamp: true,
    });
  }

  async FindByid(data: Map<String, any>): Promise<void | TPRequest> {
    try {
      const requests = await this.db.tPRequest.findFirstOrThrow({
        where: {
          id: data['id'],
        },
      });
      this.logger.log(data);
      return requests;
    } catch (error) {
      this.logger.error(error?.message);
    }
  }

  async FindByTPRequesterId(data: Map<String, any>): Promise<void | TPRequest> {
    try {
      const requests = await this.db.tPRequest.findFirstOrThrow({
        where: {
          TPRequesterId: data['TPRequesterId'],
        },
      });
      this.logger.log(data);
      return requests;
    } catch (error) {
      this.logger.error(error?.message);
    }
  }

  async FindBylocation(data: Map<String, any>): Promise<void | TPRequest> {
    try {
      const requests = await this.db.tPRequest.findFirstOrThrow({
        where: {
          location:
            data['location']['longitude'] && data['location']['latitude'],
        },
      });
      this.logger.log(data);
      return requests;
    } catch (error) {
      this.logger.error(error?.message);
    }
  }

  async FindBystatus(data: Map<String, any>): Promise<void | TPRequest> {
    try {
      const requests = await this.db.tPRequest.findFirstOrThrow({
        where: {
          status: data['status'],
        },
      });
      this.logger.log(data);
      return requests;
    } catch (error) {
      this.logger.error(error?.message);
    }
  }

  async FindBycreatedAt(data: Map<String, any>): Promise<void | TPRequest> {
    try {
      const requests = await this.db.tPRequest.findFirstOrThrow({
        where: {
          createdAt: data['createdAt'],
        },
      });
      this.logger.log(data);
      return requests;
    } catch (error) {
      this.logger.error(error?.message);
    }
  }

  async FindByupdatedAt(data: Map<String, any>): Promise<void | TPRequest> {
    try {
      const requests = await this.db.tPRequest.findFirstOrThrow({
        where: {
          updatedAt: data['updatedAt'],
        },
      });
      this.logger.log(data);
      return requests;
    } catch (error) {
      this.logger.error(error?.message);
    }
  }

  async FindByTPDoctorId(data: Map<String, any>): Promise<void | TPRequest> {
    try {
      const requests = await this.db.tPRequest.findFirstOrThrow({
        where: {
          TPDoctorId: data['TPDoctorId'],
        },
      });
      this.logger.log(data);
      return requests;
    } catch (error) {
      this.logger.error(error?.message);
    }
  }

  async FindByTPDoctor(data: Map<String, any>): Promise<void | TPRequest> {
    try {
      const requests = await this.db.tPRequest.findFirstOrThrow({
        where: {
          TPDoctor: {
            id: data['doctorId'],
          },
        },
      });
      this.logger.log(data);
      return requests;
    } catch (error) {
      this.logger.error(error?.message);
    }
  }

  async FindByrequester(data: Map<String, any>): Promise<void | TPRequest> {
    try {
      const requests = await this.db.tPRequest.findFirstOrThrow({
        where: {
          requester: {
            id: data['requesterId'],
          },
        },
      });
      this.logger.log(data);
      return requests;
    } catch (error) {
      this.logger.error(error?.message);
    }
  }
}
