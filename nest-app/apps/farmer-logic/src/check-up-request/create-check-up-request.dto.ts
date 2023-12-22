import {
  IsDateString,
  IsEnum,
  IsJSON,
  IsNotEmpty,
  IsUUID,
} from '@nestjs/class-validator';
import { TPRequestStatus } from '@prisma/client';

export class CreateCheckUpRequestDto {
  @IsNotEmpty()
  @IsUUID()
  RequesterId;
  @IsNotEmpty()
  @IsDateString()
  time;
  @IsNotEmpty()
  Details;
  @IsNotEmpty()
  location;
  @IsNotEmpty()
  @IsEnum(TPRequestStatus)
  status;
  @IsNotEmpty()
  @IsUUID()
  Doctor;
}
