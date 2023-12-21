import {
  IsEmail,
  IsMobilePhone,
  IsNotEmpty,
  IsString,
} from '@nestjs/class-validator';

export class CreateDoctorDto {
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
