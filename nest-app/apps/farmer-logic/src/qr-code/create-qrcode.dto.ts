import { IsNotEmpty, isObject } from '@nestjs/class-validator';

export class CreateQrcodeDto {
  @IsNotEmpty()
  data;
}
