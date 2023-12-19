import { Controller, Post } from '@nestjs/common';
import { ITransfer } from './ITransfer';
import { TransferService } from './transfer.service';

@Controller('transfer')
export class TransferController implements ITransfer {
  /**
   *
   */
  constructor(private readonly transfer: TransferService) {}
  //TODO
  @Post('CreateTransfer')
  async CreateTransfer() {
    throw new Error('Method not implemented.');
  }
  //TODO
  @Post('FindByid')
  async FindByid() {
    throw new Error('Method not implemented.');
  }
  //TODO
  @Post('FindBystate')
  async FindBystate() {
    throw new Error('Method not implemented.');
  }
  //TODO
  @Post('FindByTPTransferToId')
  async FindByTPTransferToId() {
    throw new Error('Method not implemented.');
  }
  //TODO
  @Post('FindByTPTranferFromId')
  async FindByTPTranferFromId() {
    throw new Error('Method not implemented.');
  }
  //TODO
  @Post('FindBycreatedAt')
  async FindBycreatedAt() {
    throw new Error('Method not implemented.');
  }
  //TODO
  @Post('FindByupdatedAt')
  async FindByupdatedAt() {
    throw new Error('Method not implemented.');
  }
  //TODO
  @Post('FindByfrom')
  async FindByfrom() {
    throw new Error('Method not implemented.');
  }
  //TODO
  @Post('FindByto')
  async FindByto() {
    throw new Error('Method not implemented.');
  }
  //TODO
  @Post('Updatestate')
  async Updatestate() {
    throw new Error('Method not implemented.');
  }
  //TODO
  @Post('UpdateTPTransferToId')
  async UpdateTPTransferToId() {
    throw new Error('Method not implemented.');
  }
  //TODO
  @Post('UpdateTPTranferFromId')
  async UpdateTPTranferFromId() {
    throw new Error('Method not implemented.');
  }
  //TODO
  @Post('Updatefrom')
  async Updatefrom() {
    throw new Error('Method not implemented.');
  }
  //TODO
  @Post('Updateto')
  async Updateto() {
    throw new Error('Method not implemented.');
  }
}
