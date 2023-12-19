import { Controller, Logger, Post } from '@nestjs/common';
import { IQrcode } from './IQrcode';
import { QrCodeService } from './qr-code.service';

@Controller('qr-code')
export class QrCodeController implements IQrcode {
  /**
   *
   */
  logger: Logger;
  constructor(private readonly qrcode: QrCodeService) {}
  // TODO
  @Post('CreateQrcode')
  async CreateQrcode() {
    try {
    } catch (error) {
      throw new Error('Method not implemented.');
    }
  }
  // TODO
  @Post('Updateid')
  async Updateid() {
    try {
    } catch (error) {
      throw new Error('Method not implemented.');
    }
  }
  // TODO
  @Post('Updatelink')
  async Updatelink() {
    try {
    } catch (error) {
      throw new Error('Method not implemented.');
    }
  }
  // TODO
  @Post('UpdateTPLifeStock')
  async UpdateTPLifeStock() {
    try {
    } catch (error) {
      throw new Error('Method not implemented.');
    }
  }
  // TODO
  @Post('UpdateTPReport')
  async UpdateTPReport() {
    try {
    } catch (error) {
      throw new Error('Method not implemented.');
    }
  }
  // TODO
  @Post('FindByid')
  async FindByid() {
    try {
    } catch (error) {
      throw new Error('Method not implemented.');
    }
  }
  // TODO
  @Post('FindBylink')
  async FindBylink() {
    try {
    } catch (error) {
      throw new Error('Method not implemented.');
    }
  }
  // TODO
  @Post('FindBycreatedAt')
  async FindBycreatedAt() {
    try {
    } catch (error) {
      throw new Error('Method not implemented.');
    }
  }
  // TODO
  @Post('FindByupdatedAt')
  async FindByupdatedAt() {
    try {
    } catch (error) {
      throw new Error('Method not implemented.');
    }
  }
  // TODO
  @Post('FindByTPLifeStock')
  async FindByTPLifeStock() {
    try {
    } catch (error) {
      throw new Error('Method not implemented.');
    }
  }
  // TODO
  @Post('FindByTPReport')
  async FindByTPReport() {
    try {
    } catch (error) {
      throw new Error('Method not implemented.');
    }
  }
}
