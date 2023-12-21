import { Controller, Logger, Post, Query } from '@nestjs/common';
import { IQrcode } from './IQrcode';
import { QrCodeService } from './qr-code.service';
import { TPQrCode } from '@prisma/client';
import { CreateQrcodeDto } from './create-qrcode.dto';

@Controller('qr-code')
export class QrCodeController implements IQrcode {
  /**
   *
   */
  logger: Logger;
  constructor(private readonly qrcode: QrCodeService) {}
  @Post('CreateQrcode')
  async CreateQrcode(
    @Query() data: CreateQrcodeDto,
  ): Promise<void | TPQrCode> {
    return this.qrcode.CreateQrcode(data);
  }
  @Post('Updateid')
  async Updateid(@Query() data: Map<String, any>): Promise<void | TPQrCode> {
    return this.qrcode.Updateid(data);
  }
  @Post('Updatelink')
  async Updatelink(@Query() data: Map<String, any>): Promise<void | TPQrCode> {
    return this.qrcode.Updatelink(data);
  }
  @Post('UpdateTPLifeStock')
  async UpdateTPLifeStock(
    @Query() data: Map<String, any>,
  ): Promise<void | TPQrCode> {
    return this.qrcode.UpdateTPLifeStock(data);
  }
  @Post('UpdateTPReport')
  async UpdateTPReport(
    @Query() data: Map<String, any>,
  ): Promise<void | TPQrCode> {
    return this.qrcode.UpdateTPReport(data);
  }
  @Post('FindByid')
  async FindByid(@Query() data: Map<String, any>): Promise<void | TPQrCode> {
    return this.qrcode.FindByid(data);
  }
  @Post('FindBylink')
  async FindBylink(@Query() data: Map<String, any>): Promise<void | TPQrCode> {
    return this.qrcode.FindBylink(data);
  }
  @Post('FindBycreatedAt')
  async FindBycreatedAt(
    @Query() data: Map<String, any>,
  ): Promise<void | TPQrCode> {
    return this.qrcode.FindBycreatedAt(data);
  }
  @Post('FindByupdatedAt')
  async FindByupdatedAt(
    @Query() data: Map<String, any>,
  ): Promise<void | TPQrCode> {
    return this.qrcode.FindByupdatedAt(data);
  }
  @Post('FindByTPLifeStock')
  async FindByTPLifeStock(
    @Query() data: Map<String, any>,
  ): Promise<void | TPQrCode> {
    return this.qrcode.FindByTPLifeStock(data);
  }
  @Post('FindByTPReport')
  async FindByTPReport(
    @Query() data: Map<String, any>,
  ): Promise<void | TPQrCode> {
    return this.qrcode.FindByTPReport(data);
  }
}
