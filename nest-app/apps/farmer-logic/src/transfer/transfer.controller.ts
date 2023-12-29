import { Controller, Logger, Post, Query, UseGuards } from '@nestjs/common';
import { ITransfer } from './ITransfer';
import { TransferService } from './transfer.service';
import { TPTranferFrom, TPTransfer, TPTransferTo } from '@prisma/client';
import { CreateTransferDto } from './create-transfer.dto';
import { AuthGuard } from '@app/sharedlogic/auth/auth.guard';

@Controller('transfer')
@UseGuards(AuthGuard)
export class TransferController implements ITransfer {
  /**
   *
   */
  logger: Logger;
  constructor(private readonly transfer: TransferService) {}
  @Post('CreateTransfer')
  async CreateTransfer(
    @Query() data: CreateTransferDto,
  ): Promise<void | TPTransfer> {
    return this.transfer.CreateTransfer(data);
  }
  @Post('FindByid')
  async FindByid(@Query() data: Map<String, any>): Promise<void | TPTransfer> {
    return this.transfer.FindByid(data);
  }
  @Post('FindBystate')
  async FindBystate(
    @Query() data: Map<String, any>,
  ): Promise<void | TPTransfer | TPTransfer[]> {
    return this.transfer.FindBystate(data);
  }
  @Post('FindByTPTransferToId')
  async FindByTPTransferToId(
    @Query() data: Map<String, any>,
  ): Promise<void | TPTransferTo> {
    return this.transfer.FindByTPTransferToId(data);
  }
  @Post('FindByTPTranferFromId')
  async FindByTPTranferFromId(
    @Query() data: Map<String, any>,
  ): Promise<void | TPTranferFrom> {
    return this.transfer.FindByTPTranferFromId(data);
  }
  @Post('FindBycreatedAt')
  async FindBycreatedAt(
    @Query() data: Map<String, any>,
  ): Promise<void | TPTransfer | TPTransfer[]> {
    return this.transfer.FindBycreatedAt(data);
  }
  @Post('FindByupdatedAt')
  async FindByupdatedAt(
    @Query() data: Map<String, any>,
  ): Promise<void | TPTransfer | TPTransfer[]> {
    return this.transfer.FindByupdatedAt(data);
  }
  @Post('FindByfrom')
  async FindByfrom(
    @Query() data: Map<String, any>,
  ): Promise<void | TPTransfer> {
    return this.transfer.FindByfrom(data);
  }
  @Post('FindByto')
  async FindByto(@Query() data: Map<String, any>): Promise<void | TPTransfer> {
    return this.transfer.FindByto(data);
  }
  @Post('Updatestate')
  async Updatestate(
    @Query() data: Map<String, any>,
  ): Promise<void | TPTransfer> {
    return this.transfer.Updatestate(data);
  }
  @Post('UpdateTPTransferToId')
  async UpdateTPTransferToId(
    @Query() data: Map<String, any>,
  ): Promise<void | TPTransfer> {
    return this.transfer.UpdateTPTransferToId(data);
  }
  @Post('UpdateTPTranferFromId')
  async UpdateTPTranferFromId(
    @Query() data: Map<String, any>,
  ): Promise<void | TPTransfer> {
    return this.transfer.UpdateTPTranferFromId(data);
  }
  @Post('Updatefrom')
  async Updatefrom(
    @Query() data: Map<String, any>,
  ): Promise<void | TPTransfer> {
    return this.transfer.Updatefrom(data);
  }
  @Post('Updateto')
  async Updateto(@Query() data: Map<String, any>): Promise<void | TPTransfer> {
    return this.transfer.Updateto(data);
  }
}
