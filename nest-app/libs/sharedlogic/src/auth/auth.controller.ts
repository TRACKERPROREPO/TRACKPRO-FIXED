import { Controller, Logger, Post } from '@nestjs/common';
import { IAuth } from './IAuth';
import { TPAdmin, TPDoctor, TPFarmer } from '@prisma/client';

@Controller('auth')
export class AuthController implements IAuth {
  /**
   *
   */
  constructor() {}
  logger: Logger;
  // TODO
  @Post("SignIn")
  async SignIn(data: Map<String, any>): Promise<void | TPAdmin | TPDoctor | TPFarmer> {
    throw new Error('Method not implemented.');
  }
  // TODO
  @Post("ChangePassword")
  async ChangePassword(data: Map<String, any>): Promise<void | Boolean> {
    throw new Error('Method not implemented.');
  }
  // TODO
  @Post("ForgotPassword")
  async ForgotPassword(data: Map<String, any>): Promise<void> {
    throw new Error('Method not implemented.');
  }
  // TODO
  @Post("SendOtp")
  async SendOtp(data: Map<String, any>): Promise<void> {
    throw new Error('Method not implemented.');
  }
  // TODO
  @Post("ResendOtp")
  async ResendOtp(data: Map<String, any>): Promise<void> {
    throw new Error('Method not implemented.');
  }
  // TODO
  @Post("SignUp")
  async SignUp(data: Map<String, any>): Promise<void | TPAdmin | TPDoctor | TPFarmer> {
    throw new Error('Method not implemented.');
  }
  // TODO
  @Post("SignOut")
  async SignOut(data: Map<String, any>): Promise<void> {
    throw new Error('Method not implemented.');
  }
  // TODO
  @Post("SignUpWithFacebook")
  async SignUpWithFacebook(data: Map<String, any>): Promise<void | TPAdmin | TPDoctor | TPFarmer> {
    throw new Error('Method not implemented.');
  }
  // TODO
  @Post("VerifyEmail")
  async VerifyEmail(data: Map<String, any>): Promise<void | TPAdmin | TPDoctor | TPFarmer> {
    throw new Error('Method not implemented.');
  }
}
