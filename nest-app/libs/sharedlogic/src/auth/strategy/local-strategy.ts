import { Injectable } from '@nestjs/common';
import { PassportStrategy } from '@nestjs/passport';
import { Strategy } from 'passport-jwt';
import { AuthService } from '../auth.service';
import { User } from '../User';
import { AuthPayload } from '../AuthPayload';

@Injectable()
export class LocalStrategy extends PassportStrategy(Strategy) {
  /**
   *
   */
  constructor(private readonly auth: AuthService) {
    super({});
  }

  async validate(data: Map<string, any>) {
    let user = {
      email: data['email'],
      password: data['password'],
      type: data['type'],
    };
    const validate = await this.auth.validate(data)
    return validate
  }
}
