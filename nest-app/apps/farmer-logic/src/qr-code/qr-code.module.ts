import { Module } from '@nestjs/common';
import { QrCodeService } from './qr-code.service';
import { QrCodeController } from './qr-code.controller';
import { DbService } from '@app/sharedlogic/db/db.service';

@Module({
  providers: [QrCodeService,DbService],
  controllers: [QrCodeController]
})
export class QrCodeModule {}
