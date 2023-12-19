import { Injectable } from '@nestjs/common';
import { IAuth } from './IAuth';

@Injectable()
export class AuthService implements IAuth {
  //TODO
  async SignIn() {
    try {
    } catch (error) {
      throw new Error('Method not implemented.');
    }
  }
  //TODO
  async ChangePassword(data: Map<String, any>) {
    try {
    } catch (error) {
      throw new Error('Method not implemented.');
    }
  }
  //TODO
  async ForgotPassword(data: Map<String, any>) {
    try {
    } catch (error) {
      throw new Error('Method not implemented.');
    }
  }
  //TODO
  async SendOtp(data: Map<String, any>) {
    try {
    } catch (error) {
      throw new Error('Method not implemented.');
    }
  }
  //TODO
  async ResendOtp(data: Map<String, any>) {
    try {
    } catch (error) {
      throw new Error('Method not implemented.');
    }
  }
  //TODO
  async SignUp(data: Map<String, any>) {
    try {
    } catch (error) {
      throw new Error('Method not implemented.');
    }
  }
  //TODO
  async SignOut(data: Map<String, any>) {
    try {
    } catch (error) {
      throw new Error('Method not implemented.');
    }
  }
  //TODO
  async SignUpWithFacebook(data: Map<String, any>) {
    try {
    } catch (error) {
      throw new Error('Method not implemented.');
    }
  }
  //TODO
  async VerifyEmail(data: Map<String, any>) {
    try {
    } catch (error) {
      throw new Error('Method not implemented.');
    }
  }
}
