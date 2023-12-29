import { CanActivate, ExecutionContext, Injectable } from '@nestjs/common';
import { PassportStrategy } from '@nestjs/passport';
import { verify } from 'argon2';
import { ExtractJwt, Strategy } from 'passport-jwt';
import { Observable } from 'rxjs';
import { AuthService } from './auth.service';

@Injectable()
export class AuthGuard
  extends PassportStrategy(Strategy)
  implements CanActivate
{
  /**
   *
   */
  constructor(private readonly auth: AuthService) {
    super({
      jwtFromRequest: ExtractJwt.fromAuthHeaderAsBearerToken(),
      secretOrKey: Buffer.from(process.env.HASH_SECRET),
    });
  }

  canActivate(context: any): boolean | Promise<boolean> | Observable<boolean> {
    try {
      const HeaderbearerToken = context.args[0]['handshake']['headers'][
        'authorization'
      ] as String;
      const decoded = HeaderbearerToken.split(' ')[1];
      const bearerToken = verify(decoded, process.env.HASH_SECRET);
      const val = this.validate(bearerToken);
      return Boolean(val);
    } catch (error) {
      console.log(error.message + ',\njwt is missing');
    }
  }

  async validate(bearerToken: any) {
    const query = {
      email: bearerToken['email'],
      password: bearerToken['password'],
      type: bearerToken['type'],
    };

    const user = await this.auth.validate(bearerToken)
    return user
    /*       bearerToken.staffId !== undefined
        ? await this.staffAuth.validateUser(
            bearerToken.email,
            bearerToken.staffId,
          )
        : await this.studentAuth.validateUser(
            bearerToken.email,
            bearerToken.password,
            );
            console.log(user);
            return user
            */
  }
}
