import { Injectable, Logger } from '@nestjs/common';
import { IAuth } from './IAuth';
import { TPAdmin, TPDoctor, TPFarmer } from '@prisma/client';
import { DbService } from '../db/db.service';

@Injectable()
export class AuthService implements IAuth {
  logger: Logger;
  constructor(private readonly db: DbService) {
    this.logger = new Logger('AuthService Request', {
      timestamp: true,
    });
  }

  async SignIn(
    data: Map<String, any>,
  ): Promise<void | TPAdmin | TPDoctor | TPFarmer> {
    try {
      this.logger.log(data);
    } catch (error) {
      this.logger.error(error?.message);
    }
  }
  async ChangePassword(data: Map<String, any>): Promise<void | Boolean> {
    try {
      this.logger.log(data);
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
  async SignUp(
    data: Map<String, any>,
  ): Promise<void | TPAdmin | TPDoctor | TPFarmer> {
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
