import { Controller, Logger, Post, Query } from '@nestjs/common';
import { IAuth } from './IAuth';
import { TPAdmin, TPDoctor, TPFarmer } from '@prisma/client';
import { AuthService } from './auth.service';
import { ApiTags } from '@nestjs/swagger';

@Controller('auth')
@ApiTags('Authentication 🔐')
export class AuthController implements IAuth {
  /**
   *
   */
  constructor(private readonly auth: AuthService) {}
  logger: Logger;

  @Post('SignIn')
  async SignIn(@Query() data: Map<String, any>) {
    return this.auth.SignIn(data);
  }

  @Post('ChangePassword')
  async ChangePassword(
    @Query() data: Map<String, any>,
  ): Promise<void | Boolean> {
    return this.auth.ChangePassword(data);
  }

  @Post('ForgotPassword')
  async ForgotPassword(@Query() data: Map<String, any>): Promise<void> {
    return this.auth.ForgotPassword(data);
  }

  @Post('SendOtp')
  async SendOtp(@Query() data: Map<String, any>): Promise<void> {
    return this.auth.SendOtp(data);
  }

  @Post('ResendOtp')
  async ResendOtp(@Query() data: Map<String, any>): Promise<void> {
    return this.auth.ResendOtp(data);
  }

  @Post('SignUp')
  async SignUp(
    @Query() data: Map<String, any>,
  ): Promise<void | TPAdmin | TPDoctor | TPFarmer> {
    return this.auth.SignUp(data);
  }

  @Post('SignOut')
  async SignOut(@Query() data: Map<String, any>): Promise<void> {
    return this.auth.SignOut(data);
  }

  @Post('SignUpWithFacebook')
  async SignUpWithFacebook(
    @Query() data: Map<String, any>,
  ): Promise<void | TPAdmin | TPDoctor | TPFarmer> {
    return this.auth.SignUpWithFacebook(data);
  }

  @Post('VerifyEmail')
  async VerifyEmail(
    @Query() data: Map<String, any>,
  ): Promise<void | TPAdmin | TPDoctor | TPFarmer> {
    return this.auth.VerifyEmail(data);
  }
}
