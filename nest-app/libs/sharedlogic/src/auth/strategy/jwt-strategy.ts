import { Injectable, UnauthorizedException } from '@nestjs/common';
import { ConfigService } from '@nestjs/config';
import { PassportStrategy } from '@nestjs/passport';
import { ExtractJwt, Strategy } from 'passport-jwt';
import { AuthService } from '../auth.service';
import { AuthPayload } from '../AuthPayload';
import { DoctorService } from 'apps/doctor-logic/src/doctor/doctor.service';
import { FarmerService } from 'apps/farmer-logic/src/farmer/farmer.service';

@Injectable()
export class JwtStrategy extends PassportStrategy(Strategy) {
  constructor(
    configService: ConfigService,
    private readonly auth: AuthService,
  ) {
    super({
      jwtFromRequest: ExtractJwt.fromExtractors([
        (request: any) => {
          return request?.Authentication;
        },
      ]),
      secretOrKey: configService.get('JWT_SECRET'),
    });
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
