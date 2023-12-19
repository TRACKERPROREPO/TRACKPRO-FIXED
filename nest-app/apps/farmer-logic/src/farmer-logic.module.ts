import { Module } from '@nestjs/common';
import { FarmerModule } from './farmer/farmer.module';
import { LifestockModule } from './lifestock/lifestock.module';
import { TransferModule } from './transfer/transfer.module';
import { QrCodeModule } from './qr-code/qr-code.module';
import { CheckUpRequestModule } from './check-up-request/check-up-request.module';
import { ConfigModule } from '@nestjs/config';
import { DbService } from '@app/sharedlogic/db/db.service';
import { AuthController } from '@app/sharedlogic/auth/auth.controller';

@Module({
  imports: [
    FarmerModule,
    LifestockModule,
    TransferModule,
    QrCodeModule,
    CheckUpRequestModule,
    ConfigModule.forRoot({
      isGlobal: true,
      envFilePath: ['./.env'],
    }),
  ],
  controllers: [AuthController],
  providers: [],
})
export class FarmerLogicModule {}
