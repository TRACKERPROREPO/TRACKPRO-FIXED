import { Injectable, Logger } from '@nestjs/common';
import { IDoctor } from './IDoctor';
import { DbService } from '@app/sharedlogic/db/db.service';
import { TPDoctor } from '@prisma/client';
import { CreateDoctorDto } from './create-doctor.dto';

@Injectable()
export class DoctorService implements IDoctor {
  logger: Logger;
  /**
   *
   */
  constructor(private readonly db: DbService) {
    this.logger = new Logger('DoctorService Request', {
      timestamp: true,
    });
  }

  async CreateDoctor(data: CreateDoctorDto) {
    try {
      this.logger.log(data);
      const doctor = await this.db.tPDoctor.create({
        data: {
          first_name: data['first_name'],
          last_name: data['last_name'],
          email: data['email'],
          password: data['password'],
          number: data['number'],
          type: 'Doctor',
        },
      });
      return doctor;
    } catch (error) {
      this.logger.error(error?.message);
    }
  }

  async Updatefirst_name(data: Map<String, any>): Promise<void | TPDoctor> {
    try {
      this.logger.log(data);
      const doctor = await this.db.tPDoctor.update({
        data: {
          first_name: {
            set: data['new_first_name'],
          },
        },
        where: {
          id: data['id'],
        },
      });
      return doctor;
    } catch (error) {
      this.logger.error(error?.message);
    }
  }

  async Updatelast_name(data: Map<String, any>): Promise<void | TPDoctor> {
    try {
      this.logger.log(data);
      const doctor = await this.db.tPDoctor.update({
        data: {
          last_name: {
            set: data['new_last_name'],
          },
        },
        where: {
          id: data['id'],
        },
      });
      return doctor;
    } catch (error) {
      this.logger.error(error?.message);
    }
  }

  async Updateemail(data: Map<String, any>): Promise<void | TPDoctor> {
    try {
      this.logger.log(data);
      const doctor = await this.db.tPDoctor.update({
        data: {
          email: {
            set: data['new_email'],
          },
        },
        where: {
          id: data['id'],
        },
      });
      return doctor;
    } catch (error) {
      this.logger.error(error?.message);
    }
  }

  async Updatenumber(data: Map<String, any>): Promise<void | TPDoctor> {
    try {
      this.logger.log(data);
      const doctor = await this.db.tPDoctor.update({
        data: {
          number: {
            set: data['new_number'],
          },
        },
        where: {
          id: data['id'],
        },
      });
      return doctor;
    } catch (error) {
      this.logger.error(error?.message);
    }
  }

  async Updatepassword(data: Map<String, any>): Promise<void | TPDoctor> {
    try {
      this.logger.log(data);
      const doctor = await this.db.tPDoctor.update({
        data: {
          password: {
            set: data['new_password'],
          },
        },
        where: {
          id: data['id'],
        },
      });
      return doctor;
    } catch (error) {
      this.logger.error(error?.message);
    }
  }

  async Updatenotifications(data: Map<String, any>): Promise<void | TPDoctor> {
    try {
      this.logger.log(data);
      const doctor = await this.db.tPDoctor.update({
        data: {
          notifications: {
            connect: {
              id: data['newNotificationId'],
            },
          },
        },
        where: {
          id: data['id'],
        },
      });
      return doctor;
    } catch (error) {
      this.logger.error(error?.message);
    }
  }

  async Updatereports(data: Map<String, any>): Promise<void | TPDoctor> {
    try {
      this.logger.log(data);
      const doctor = await this.db.tPDoctor.update({
        data: {
          reports: {
            connect: {
              id: data['newReportId'],
            },
          },
        },
        where: {
          id: data['id'],
        },
      });
      return doctor;
    } catch (error) {
      this.logger.error(error?.message);
    }
  }

  async Updaterequests(data: Map<String, any>): Promise<void | TPDoctor> {
    try {
      this.logger.log(data);
      const doctor = await this.db.tPDoctor.update({
        data: {
          requests: {
            connect: {
              id: data['newRequestId'],
            },
          },
        },
        where: {
          id: data['id'],
        },
      });
      return doctor;
    } catch (error) {
      this.logger.error(error?.message);
    }
  }

  async FindByid(data: Map<String, any>): Promise<void | TPDoctor> {
    try {
      this.logger.log(data);
      const doctor = await this.db.tPDoctor.findFirstOrThrow({
        where: {
          id: data['id'],
        },
      });
      return doctor;
    } catch (error) {
      this.logger.error(error?.message);
    }
  }

  async FindByfirst_name(data: Map<String, any>): Promise<void | TPDoctor> {
    try {
      this.logger.log(data);
      const doctor = await this.db.tPDoctor.findFirstOrThrow({
        where: {
          first_name: data['first_name'],
        },
      });
      return doctor;
    } catch (error) {
      this.logger.error(error?.message);
    }
  }

  async FindBylast_name(data: Map<String, any>): Promise<void | TPDoctor> {
    try {
      this.logger.log(data);
      const doctor = await this.db.tPDoctor.findFirstOrThrow({
        where: {
          last_name: data['last_name'],
        },
      });
      return doctor;
    } catch (error) {
      this.logger.error(error?.message);
    }
  }

  async FindByemail(data: Map<String, any>): Promise<void | TPDoctor> {
    try {
      this.logger.log(data);
      const doctor = await this.db.tPDoctor.findFirstOrThrow({
        where: {
          email: data['email'],
        },
      });
      return doctor;
    } catch (error) {
      this.logger.error(error?.message);
    }
  }

  async FindBynumber(data: Map<String, any>): Promise<void | TPDoctor> {
    try {
      this.logger.log(data);
      const doctor = await this.db.tPDoctor.findFirstOrThrow({
        where: {
          number: data['number'],
        },
      });
      return doctor;
    } catch (error) {
      this.logger.error(error?.message);
    }
  }

  async FindBycreatedAt(data: Map<String, any>): Promise<TPDoctor[]> {
    try {
      this.logger.log(data);
      const doctor = await this.db.tPDoctor.findMany({
        where: {
          createdAt: data['createdAt'],
        },
      });
      return doctor;
    } catch (error) {
      this.logger.error(error?.message);
    }
  }

  async FindByupdatedAt(data: Map<String, any>): Promise<TPDoctor[]> {
    try {
      this.logger.log(data);
      const doctor = await this.db.tPDoctor.findMany({
        where: {
          updatedAt: data['updatedAt'],
        },
      });
      return doctor;
    } catch (error) {
      this.logger.error(error?.message);
    }
  }

  async FindByreports(data: Map<String, any>): Promise<TPDoctor[]> {
    try {
      this.logger.log(data);
      const doctor = await this.db.tPDoctor.findMany({
        where: {
          reports: {
            every: {
              TPDoctorId: data['doctorId'],
            },
          },
        },
      });
      return doctor;
    } catch (error) {
      this.logger.error(error?.message);
    }
  }

  async FindByrequests(data: Map<String, any>): Promise<TPDoctor[]> {
    try {
      this.logger.log(data);
      const doctor = await this.db.tPDoctor.findMany({
        where: {
          requests: {
            every: {
              TPDoctorId: data['doctorId'],
            },
          },
        },
      });
      return doctor;
    } catch (error) {
      this.logger.error(error?.message);
    }
  }
}
