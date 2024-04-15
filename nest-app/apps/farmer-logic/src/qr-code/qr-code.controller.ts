import {
  Controller,
  Get,
  Logger,
  Post,
  Query,
  UseGuards,
} from '@nestjs/common';
import { IQrcode } from './IQrcode';
import { QrCodeService } from './qr-code.service';
import { TPQrCode } from '@prisma/client';
import { CreateQrcodeDto } from './create-qrcode.dto';
import { AuthGuard } from '@app/sharedlogic/auth/auth.guard';
import { ApiTags } from '@nestjs/swagger';

@Controller('qr-code')
@ApiTags('qr-code')
// @UseGuards(AuthGuard)
export class QrCodeController implements IQrcode {
  /**
   *
   */
  logger: Logger;
  constructor(private readonly qrcode: QrCodeService) {}
  @Post('CreateQrcode')
  async CreateQrcode(@Query() data: CreateQrcodeDto): Promise<void | TPQrCode> {
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
  @Get('FindByid')
  async FindByid(@Query() data: Map<String, any>): Promise<void | TPQrCode> {
    return this.qrcode.FindByid(data);
  }
  @Get('FindBylink')
  async FindBylink(@Query() data: Map<String, any>): Promise<void | TPQrCode> {
    return this.qrcode.FindBylink(data);
  }
  @Get('FindBycreatedAt')
  async FindBycreatedAt(
    @Query() data: Map<String, any>,
  ): Promise<void | TPQrCode> {
    return this.qrcode.FindBycreatedAt(data);
  }
  @Get('FindByupdatedAt')
  async FindByupdatedAt(
    @Query() data: Map<String, any>,
  ): Promise<void | TPQrCode> {
    return this.qrcode.FindByupdatedAt(data);
  }
  @Get('FindByTPLifeStock')
  async FindByTPLifeStock(
    @Query() data: Map<String, any>,
  ): Promise<void | TPQrCode> {
    return this.qrcode.FindByTPLifeStock(data);
  }
  @Get('FindByTPReport')
  async FindByTPReport(
    @Query() data: Map<String, any>,
  ): Promise<void | TPQrCode> {
    return this.qrcode.FindByTPReport(data);
  }
}
