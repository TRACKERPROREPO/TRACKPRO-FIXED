import {
  IsEmail,
  IsMobilePhone,
  IsNotEmpty,
  IsString,
} from '@nestjs/class-validator';
import { Injectable } from '@nestjs/common';
import { TPUserType } from '@prisma/client';

@Injectable()
export class CreateFarmerDto {
  @IsNotEmpty()
  @IsString()
  first_name;

  @IsString()
  @IsNotEmpty()
  last_name;

  @IsEmail()
  @IsNotEmpty()
  email;

  @IsMobilePhone('ng-NG')
  @IsNotEmpty()
  number;

  @IsNotEmpty()
  password;
}
