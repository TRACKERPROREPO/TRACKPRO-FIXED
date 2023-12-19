import { Injectable, Logger } from '@nestjs/common';
import { ITransfer } from './ITransfer';

@Injectable()
export class TransferService implements ITransfer {
  logger: Logger;
  constructor() {
    this.logger = new Logger('TransferService', {
      timestamp: true,
    });
  }
  //TODO
  async CreateTransfer() {
    try {
    } catch (error) {
      throw new Error('Method not implemented.');
    }
  }
  //TODO
  async FindByid() {
    try {
    } catch (error) {
      throw new Error('Method not implemented.');
    }
  }
  //TODO
  async FindBystate() {
    try {
    } catch (error) {
      throw new Error('Method not implemented.');
    }
  }
  //TODO
  async FindByTPTransferToId() {
    try {
    } catch (error) {
      throw new Error('Method not implemented.');
    }
  }
  //TODO
  async FindByTPTranferFromId() {
    try {
    } catch (error) {
      throw new Error('Method not implemented.');
    }
  }
  //TODO
  async FindBycreatedAt() {
    try {
    } catch (error) {
      throw new Error('Method not implemented.');
    }
  }
  //TODO
  async FindByupdatedAt() {
    try {
    } catch (error) {
      throw new Error('Method not implemented.');
    }
  }
  //TODO
  async FindByfrom() {
    try {
    } catch (error) {
      throw new Error('Method not implemented.');
    }
  }
  //TODO
  async FindByto() {
    try {
    } catch (error) {
      throw new Error('Method not implemented.');
    }
  }
  //TODO
  async Updatestate() {
    try {
    } catch (error) {
      throw new Error('Method not implemented.');
    }
  }
  //TODO
  async UpdateTPTransferToId() {
    try {
    } catch (error) {
      throw new Error('Method not implemented.');
    }
  }
  //TODO
  async UpdateTPTranferFromId() {
    try {
    } catch (error) {
      throw new Error('Method not implemented.');
    }
  }
  //TODO
  async Updatefrom() {
    try {
    } catch (error) {
      throw new Error('Method not implemented.');
    }
  }
  //TODO
  async Updateto() {
    try {
    } catch (error) {
      throw new Error('Method not implemented.');
    }
  }
}
