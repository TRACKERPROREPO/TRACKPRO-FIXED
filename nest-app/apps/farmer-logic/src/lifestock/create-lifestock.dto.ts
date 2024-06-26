import {
  IsEnum,
  IsNotEmpty,
  IsNumber,
  IsString,
  IsUUID,
} from '@nestjs/class-validator';
import { TPGender } from '@prisma/client';

export class CreateLifestockDto {
  @IsNotEmpty()
  @IsString()
  variant_name;
  @IsNotEmpty()
  @IsString()
  type;
  @IsNotEmpty()
  @IsString()
  breed;
  @IsNotEmpty()
  @IsUUID()
  farmerId;
  @IsNotEmpty()
  @IsString()
  details;
  @IsNotEmpty()
  @IsNumber()
  age;

  @IsNotEmpty()
  @IsEnum(TPGender)
  gender;
}
