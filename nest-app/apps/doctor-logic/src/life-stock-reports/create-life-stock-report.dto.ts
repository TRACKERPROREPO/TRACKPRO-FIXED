import { IsNotEmpty, IsUUID } from '@nestjs/class-validator';

export class CreateLifeStockReportDto {
  @IsNotEmpty()
  @IsUUID()
  lifestockId;
  @IsNotEmpty()
  @IsUUID()
  doctorId;

  @IsNotEmpty()
  details;
}
