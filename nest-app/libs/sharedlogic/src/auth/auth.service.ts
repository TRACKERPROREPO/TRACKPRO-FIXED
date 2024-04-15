import {
  BadRequestException,
  Injectable,
  Logger,
  UnauthorizedException,
} from '@nestjs/common';
import { IAuth } from './IAuth';
import { TPAdmin, TPDoctor, TPFarmer } from '@prisma/client';
import { DbService } from '../db/db.service';
import { JwtService } from '@nestjs/jwt';
import { FarmerService } from 'apps/farmer-logic/src/farmer/farmer.service';
import { DoctorService } from 'apps/doctor-logic/src/doctor/doctor.service';
import { AdminService } from 'apps/admin-logic/src/admin/admin.service';
import { User } from './User';
import { AuthPayload } from './AuthPayload';
import { verify } from 'argon2';

@Injectable()
export class AuthService implements IAuth {
  logger: Logger;
  constructor(
    private readonly db: DbService,
    private readonly jwtService: JwtService,
    private readonly farmerService: FarmerService,
    private readonly doctorService: DoctorService,
    private readonly adminService: AdminService,
  ) {
    this.logger = new Logger('AuthService Request', {
      timestamp: true,
    });
  }

  async SignUp(data: Map<String, any>): Promise<any> {
    const user: User = {
      email: data['email'],
      first_name: data['first_name'],
      last_name: data['last_name'],
      number: data['number'],
      password: data['password'],
      type: data['type'],
    };
    try {
      this.logger.log(data);
      const query =
        user['type'] == 'Farmer'
          ? await this.farmerService.CreateFarmer({
              email: user['email'],
              first_name: user['first_name'],
              last_name: user['last_name'],
              number: user['number'],
              password: user['password'],
            })
          : user['type'] == 'Doctor'
          ? await this.doctorService.CreateDoctor({
              email: user['email'],
              first_name: user['first_name'],
              last_name: user['last_name'],
              number: user['number'],
              password: user['password'],
            })
          : new BadRequestException(null, 'Specify User');
      return query;
    } catch (error) {
      this.logger.error(error?.message);
    }
  }

  async validate(data: Map<string, any>) {
    const query: AuthPayload = {
      email: data['email'],
      password: data['password'],
      type: data['type'],
    };
    const user =
      query['type'] == 'Farmer'
        ? await this.farmerService.findByemail(data['email'])
        : query['type'] == 'Doctor'
        ? await this.doctorService.FindByemail(data['email'])
        : new BadRequestException();

    const verification = await verify(
      user['password'],
      Buffer.from(query['password']),
      {
        secret: Buffer.from(process.env.HASH_SECRET),
      },
    );

    if (user && verification) {
      const { ...result } = user;
      return result;
    } else {
      throw new UnauthorizedException();
    }
  }

  async SignIn(data: Map<String, any>) {
    try {
      this.logger.log(data);
      const payload: AuthPayload = {
        email: data['email'],
        password: data['password'],
        type: data['type'],
      };
      const user =
        payload['type'] == 'Farmer'
          ? await this.farmerService.findByemail(data['email'])
          : payload['type'] == 'Doctor'
          ? await this.doctorService.FindByemail(data['email'])
          : this.logger.error('specify user type');
      const verification = await verify(
        user['password'],
        Buffer.from(payload['password']),
        {
          secret: Buffer.from(process.env.HASH_SECRET),
        },
      );
      const access_token =
        verification == true
          ? {
              access_token: this.jwtService.sign(payload, {
                secret: process.env.HASH_SECRET,
              }),
            }
          : new UnauthorizedException();
      return access_token;
    } catch (error) {
      this.logger.error(error?.message);
    }
  }
  async ChangePassword(data: Map<String, any>): Promise<void | Boolean> {
    try {
      this.logger.log(data);
      const payload: AuthPayload = {
        email: data['email'],
        password: data['password'],
        type: data['type'],
      };
    } catch (error) {
      this.logger.error(error?.message);
    }
  }
  async ForgotPassword(data: Map<String, any>): Promise<void> {
    try {
      this.logger.log(data);
    } catch (error) {
      this.logger.error(error?.message);
    }
  }
  async SendOtp(data: Map<String, any>): Promise<void> {
    try {
      this.logger.log(data);
    } catch (error) {
      this.logger.error(error?.message);
    }
  }
  async ResendOtp(data: Map<String, any>): Promise<void> {
    try {
      this.logger.log(data);
    } catch (error) {
      this.logger.error(error?.message);
    }
  }
  async SignOut(data: Map<String, any>): Promise<void> {
    try {
      this.logger.log(data);
    } catch (error) {
      this.logger.error(error?.message);
    }
  }
  async SignUpWithFacebook(
    data: Map<String, any>,
  ): Promise<void | TPAdmin | TPDoctor | TPFarmer> {
    try {
      this.logger.log(data);
    } catch (error) {
      this.logger.error(error?.message);
    }
  }
  async VerifyEmail(
    data: Map<String, any>,
  ): Promise<void | TPAdmin | TPDoctor | TPFarmer> {
    try {
      this.logger.log(data);
    } catch (error) {
      this.logger.error(error?.message);
    }
  }
}
