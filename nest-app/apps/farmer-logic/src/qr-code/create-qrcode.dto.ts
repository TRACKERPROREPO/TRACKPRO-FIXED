import { IsNotEmpty } from '@nestjs/class-validator';

export class CreateQrcodeDto {
  @IsNotEmpty()
  link;
}
