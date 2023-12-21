import { Injectable, Logger } from '@nestjs/common';
import { ICheckUp } from './ICheckUp';
import { TPRequest } from '@prisma/client';
import { DbService } from '@app/sharedlogic/db/db.service';
import { CreateCheckUpRequestDto } from './create-check-up-request.dto';

@Injectable()
export class CheckUpRequestService implements ICheckUp {
  logger: Logger;
  constructor(private readonly db: DbService) {
    this.logger = new Logger('CheckUpRequestService Request', {
      timestamp: true,
    });
  }
  async ScheduleCheckUp(
    data: CreateCheckUpRequestDto,
  ): Promise<void | TPRequest> {
    try {
      const doctor = await this.db.tPDoctor.findFirst({
        where: {
          id: data['doctorId'],
        },
      });
      const requester = await this.db.tPRequester.create({
        data: {
          tPFarmerId: data['farmerId'],
        },
      });
      const checkup = await this.db.tPRequest.create({
        data: {
          time: data['time'],
          requester: {
            connect: {
              id: requester.id,
            },
          },
          TPDoctor: {
            connect: {
              id: doctor.id,
            },
          },
          Details: data['details']['text'] && data['details']['photo'],
          location:
            data['location']['longitude'] && data['location']['latitude'],
        },
      });
      return checkup;
    } catch (error) {
      this.logger.error(error?.message);
    }
  }
  async FindBytime(data: Map<String, any>): Promise<void | TPRequest[]> {
    try {
      this.logger.log(data);
      const request = await this.db.tPRequest.findMany({
        where: {
          time: {
            equals: data['time'],
          },
        },
      });
      return request;
    } catch (error) {
      this.logger.error(error?.message);
    }
  }
  async Updatetime(data: Map<String, any>): Promise<void | TPRequest> {
    try {
      this.logger.log(data);
      const request = await this.db.tPRequest.update({
        where: {
          id: data['requestId'],
        },
        data: {
          time: data['time'],
        },
      });
      return request;
    } catch (error) {
      this.logger.error(error?.message);
    }
  }
  async FindByid(data: Map<String, any>): Promise<void | TPRequest> {
    try {
      this.logger.log(data);
      const request = await this.db.tPRequest.findFirstOrThrow({
        where: {
          id: data['checkUpId'],
        },
      });
      return request;
    } catch (error) {
      this.logger.error(error?.message);
    }
  }
  async FindByTPRequesterId(data: Map<String, any>): Promise<void | TPRequest> {
    try {
      this.logger.log(data);
      const requester = await this.db.tPRequester.findFirstOrThrow({
        where: {
          id: data['requesterId'],
        },
      });
      const request = await this.db.tPRequest.findFirstOrThrow({
        where: {
          TPRequesterId: {
            equals: requester.id,
          },
        },
      });
      return request;
    } catch (error) {
      this.logger.error(error?.message);
    }
  }

  async FindByDetails(data: Map<String, any>): Promise<void | TPRequest> {
    try {
      this.logger.log(data);
      const request = await this.db.tPRequest.findFirstOrThrow({
        where: {
          Details: data['details']['text'] && data['details']['photo'],
        },
      });
      return request;
    } catch (error) {
      this.logger.error(error?.message);
    }
  }

  async FindBylocation(data: Map<String, any>): Promise<void | TPRequest> {
    try {
      this.logger.log(data);
      const request = await this.db.tPRequest.findFirstOrThrow({
        where: {
          Details:
            data['location']['longitude'] && data['location']['latitude'],
        },
      });
      return request;
    } catch (error) {
      this.logger.error(error?.message);
    }
  }
  //TODO
  async FindBystatus(data: Map<String, any>): Promise<void | TPRequest> {
    try {
      this.logger.log(data);
      const request = await this.db.tPRequest.findFirstOrThrow({
        where: {
          status: data['status'],
        },
      });
      return request;
    } catch (error) {
      this.logger.error(error?.message);
    }
  }
  //TODO
  async FindBycreatedAt(
    data: Map<String, any>,
  ): Promise<void | TPRequest | TPRequest[]> {
    try {
      this.logger.log(data);
      const request = await this.db.tPRequest.findMany({
        where: {
          createdAt: data['createdAt'],
        },
      });
      return request;
    } catch (error) {
      this.logger.error(error?.message);
    }
  }
  //TODO
  async FindByupdatedAt(
    data: Map<String, any>,
  ): Promise<void | TPRequest | TPRequest[]> {
    try {
      this.logger.log(data);
      const request = await this.db.tPRequest.findMany({
        where: {
          updatedAt: data['updatedAt'],
        },
      });
      return request;
    } catch (error) {
      this.logger.error(error?.message);
    }
  }
  //TODO
  async FindByTPDoctorId(data: Map<String, any>): Promise<void | TPRequest> {
    try {
      this.logger.log(data);
      const request = await this.db.tPRequest.findFirstOrThrow({
        where: {
          TPDoctorId: data['doctorId'],
        },
      });
      return request;
    } catch (error) {
      this.logger.error(error?.message);
    }
  }
  //TODO
  async FindByTPDoctor(data: Map<String, any>): Promise<void | TPRequest> {
    try {
      this.logger.log(data);
      const request = await this.db.tPRequest.findFirstOrThrow({
        where: {
          TPDoctor: {
            first_name: {
              equals: data['doctor_name'],
            },
          },
        },
      });
      return request;
    } catch (error) {
      this.logger.error(error?.message);
    }
  }
  //TODO
  async FindByrequester(data: Map<String, any>): Promise<void | TPRequest> {
    try {
      this.logger.log(data);
      const request = await this.db.tPRequest.findFirstOrThrow({
        where: {
          TPRequesterId: {
            equals: data['requesterId'],
          },
        },
      });
      return request;
    } catch (error) {
      this.logger.error(error?.message);
    }
  }
  //TODO
  async UpdateTPRequesterId(data: Map<String, any>): Promise<void | TPRequest> {
    try {
      this.logger.log(data);
      const request = await this.db.tPRequest.findFirstOrThrow({
        where: {
          TPRequesterId: {
            equals: data['requesterId'],
          },
        },
      });
      return request;
    } catch (error) {
      this.logger.error(error?.message);
    }
  }
  //TODO
  async UpdateDetails(data: Map<String, any>): Promise<void | TPRequest> {
    try {
      this.logger.log(data);
      const request = await this.db.tPRequest.update({
        data: {
          Details: data['details']['text'],
        },
        where: {
          id: data['requestId'],
        },
      });
      return request;
    } catch (error) {
      this.logger.error(error?.message);
    }
  }
  //TODO
  async Updatelocation(data: Map<String, any>): Promise<void | TPRequest> {
    try {
      this.logger.log(data);
      const request = await this.db.tPRequest.update({
        data: {
          location:
            data['location']['longitude'] && data['location']['latitude'],
        },
        where: {
          id: data['requestId'],
        },
      });
      return request;
    } catch (error) {
      this.logger.error(error?.message);
    }
  }
  //TODO
  async Updatestatus(data: Map<String, any>): Promise<void | TPRequest> {
    try {
      this.logger.log(data);
      const request = await this.db.tPRequest.update({
        data: {
          status: data['status'],
        },
        where: {
          id: data['requestId'],
        },
      });
      return request;
    } catch (error) {
      this.logger.error(error?.message);
    }
  }
  //TODO
  async UpdateTPDoctorId(data: Map<String, any>): Promise<void | TPRequest> {
    try {
      this.logger.log(data);
      const request = await this.db.tPRequest.update({
        data: {
          TPDoctorId: data['new_DoctorId'],
        },
        where: {
          id: data['requestId'],
        },
      });
      return request;
    } catch (error) {
      this.logger.error(error?.message);
    }
  }
  //TODO
  async UpdateTPDoctor(data: Map<String, any>): Promise<void | TPRequest> {
    try {
      this.logger.log(data);
      const request = await this.db.tPRequest.update({
        data: {
          TPDoctorId: data['new_DoctorId'],
        },
        where: {
          id: data['requestId'],
        },
      });
      return request;
    } catch (error) {
      this.logger.error(error?.message);
    }
  }
  //TODO
  async Updaterequester(data: Map<String, any>): Promise<void | TPRequest> {
    try {
      this.logger.log(data);
      const request = await this.db.tPRequest.update({
        data: {
          TPRequesterId: data['new_RequesterId'],
        },
        where: {
          id: data['requestId'],
        },
      });
      return request;
    } catch (error) {
      this.logger.error(error?.message);
    }
  }
}
