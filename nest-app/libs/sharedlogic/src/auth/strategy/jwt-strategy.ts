import { Injectable, UnauthorizedException } from '@nestjs/common';
import { ConfigService } from '@nestjs/config';
import { PassportStrategy } from '@nestjs/passport';
import { TPAdmin, TPDoctor, TPFarmer } from '@prisma/client';
import { AdminService } from 'apps/admin-logic/src/admin/admin.service';
import { DoctorService } from 'apps/doctor-logic/src/doctor/doctor.service';
import { FarmerService } from 'apps/farmer-logic/src/farmer/farmer.service';
import { ExtractJwt, Strategy } from 'passport-jwt';

@Injectable()
export class JwtStrategy extends PassportStrategy(Strategy) {
  constructor(
    configService: ConfigService,
    private readonly doctorService: DoctorService,
    private readonly farmerService: FarmerService,
    private readonly adminService: AdminService,
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

  async validate(payload: any) {
    let user: Promise<TPDoctor | TPFarmer | TPAdmin>;
    try {
    } catch (err) {
      throw new UnauthorizedException();
    }
  }
}
