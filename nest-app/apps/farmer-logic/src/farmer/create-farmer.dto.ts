import {
  IsEmail,
  IsMobilePhone,
  IsNotEmpty,
  IsString,
} from '@nestjs/class-validator';
import { Injectable } from '@nestjs/common';
import { ApiBody, ApiProperty } from '@nestjs/swagger';
import { TPUserType } from '@prisma/client';

@Injectable()
export class CreateFarmerDto {
  @IsNotEmpty()
  @IsString()
  @ApiProperty()
  first_name;

  @IsString()
  @IsNotEmpty()
  @ApiProperty()
  last_name;

  @IsEmail()
  @IsNotEmpty()
  @ApiProperty()
  email;

  @IsMobilePhone('ng-NG')
  @IsNotEmpty()
  @ApiProperty()
  number;

  @IsNotEmpty()
  @ApiProperty()
  password;
}
