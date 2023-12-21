import { IsNotEmpty, IsString, IsUUID } from '@nestjs/class-validator';

export class CreateTransferDto {
  @IsNotEmpty()
  @IsUUID()
  TPTransferToId;

  @IsNotEmpty()
  @IsUUID()
  TPTranferFromId;

  @IsNotEmpty()
  @IsUUID()
  lifeStockId;
}
