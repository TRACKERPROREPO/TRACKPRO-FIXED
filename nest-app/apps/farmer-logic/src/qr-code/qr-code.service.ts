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
  async CreateQrcode(data: Map<String, any>): Promise<void | TPQrCode> {
    try {
    } catch (error) {
      throw new Error('Method not implemented.');
    }
  }
  async Updateid(data: Map<String, any>): Promise<void | TPQrCode> {
    try {
    } catch (error) {
      throw new Error('Method not implemented.');
    }
  }
  async Updatelink(data: Map<String, any>): Promise<void | TPQrCode> {
    try {
    } catch (error) {
      throw new Error('Method not implemented.');
    }
  }
  async UpdateTPLifeStock(data: Map<String, any>): Promise<void | TPQrCode> {
    try {
    } catch (error) {
      throw new Error('Method not implemented.');
    }
  }
  async UpdateTPReport(data: Map<String, any>): Promise<void | TPQrCode> {
    try {
    } catch (error) {
      throw new Error('Method not implemented.');
    }
  }
  async FindByid(data: Map<String, any>): Promise<void | TPQrCode> {
    try {
    } catch (error) {
      throw new Error('Method not implemented.');
    }
  }
  async FindBylink(data: Map<String, any>): Promise<void | TPQrCode> {
    try {
    } catch (error) {
      throw new Error('Method not implemented.');
    }
  }
  async FindBycreatedAt(data: Map<String, any>): Promise<void | TPQrCode> {
    try {
    } catch (error) {
      throw new Error('Method not implemented.');
    }
  }
  async FindByupdatedAt(data: Map<String, any>): Promise<void | TPQrCode> {
    try {
    } catch (error) {
      throw new Error('Method not implemented.');
    }
  }
  async FindByTPLifeStock(data: Map<String, any>): Promise<void | TPQrCode> {
    try {
    } catch (error) {
      throw new Error('Method not implemented.');
    }
  }
  async FindByTPReport(data: Map<String, any>): Promise<void | TPQrCode> {
    try {
    } catch (error) {
      throw new Error('Method not implemented.');
    }
  }
}
