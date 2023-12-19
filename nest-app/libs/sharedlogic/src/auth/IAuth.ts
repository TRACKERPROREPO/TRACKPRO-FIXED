import { Logger } from '@nestjs/common';
import { TPAdmin, TPDoctor, TPFarmer } from '@prisma/client';

export interface IAuth {
  logger: Logger;
  SignIn(data: Map<String, any>): Promise<TPAdmin | TPDoctor | TPFarmer | void>;
  ChangePassword(data: Map<String, any>): Promise<Boolean | void>;
  ForgotPassword(data: Map<String, any>): Promise<void>;
  SendOtp(data: Map<String, any>): Promise<void>;
  ResendOtp(data: Map<String, any>): Promise<void>;
  SignUp(data: Map<String, any>): Promise<TPAdmin | TPDoctor | TPFarmer | void>;
  SignOut(data: Map<String, any>): Promise<void>;
  SignUpWithFacebook(
    data: Map<String, any>,
  ): Promise<TPAdmin | TPDoctor | TPFarmer | void>;
  VerifyEmail(
    data: Map<String, any>,
  ): Promise<TPAdmin | TPDoctor | TPFarmer | void>;
}
