import { Injectable, Logger } from '@nestjs/common';
import { IQrcode } from './IQrcode';
import { TPQrCode } from '@prisma/client';

@Injectable()
export class QrCodeService implements IQrcode {
  logger: Logger;
  constructor() {
    this.logger = new Logger('QrCodeService', {
      timestamp: true,
    });
  }
  // TODO
  async CreateQrcode(data: Map<String, any>): Promise<void | TPQrCode> {
    try {
    } catch (error) {
      throw new Error('Method not implemented.');
    }
  }
  // TODO
  async Updateid(data: Map<String, any>): Promise<void | TPQrCode> {
    try {
    } catch (error) {
      throw new Error('Method not implemented.');
    }
  }
  // TODO
  async Updatelink(data: Map<String, any>): Promise<void | TPQrCode> {
    try {
    } catch (error) {
      throw new Error('Method not implemented.');
    }
  }
  // TODO
  async UpdateTPLifeStock(data: Map<String, any>): Promise<void | TPQrCode> {
    try {
    } catch (error) {
      throw new Error('Method not implemented.');
    }
  }
  // TODO
  async UpdateTPReport(data: Map<String, any>): Promise<void | TPQrCode> {
    try {
    } catch (error) {
      throw new Error('Method not implemented.');
    }
  }
  // TODO
  async FindByid(data: Map<String, any>): Promise<void | TPQrCode> {
    try {
    } catch (error) {
      throw new Error('Method not implemented.');
    }
  }
  // TODO
  async FindBylink(data: Map<String, any>): Promise<void | TPQrCode> {
    try {
    } catch (error) {
      throw new Error('Method not implemented.');
    }
  }
  // TODO
  async FindBycreatedAt(data: Map<String, any>): Promise<void | TPQrCode> {
    try {
    } catch (error) {
      throw new Error('Method not implemented.');
    }
  }
  // TODO
  async FindByupdatedAt(data: Map<String, any>): Promise<void | TPQrCode> {
    try {
    } catch (error) {
      throw new Error('Method not implemented.');
    }
  }
  // TODO
  async FindByTPLifeStock(data: Map<String, any>): Promise<void | TPQrCode> {
    try {
    } catch (error) {
      throw new Error('Method not implemented.');
    }
  }
  // TODO
  async FindByTPReport(data: Map<String, any>): Promise<void | TPQrCode> {
    try {
    } catch (error) {
      throw new Error('Method not implemented.');
    }
  }
}
