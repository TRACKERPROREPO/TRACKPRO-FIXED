import { Module } from '@nestjs/common';
import { FarmerModule } from './farmer/farmer.module';
import { LifestockModule } from './lifestock/lifestock.module';
import { TransferModule } from './transfer/transfer.module';
import { QrCodeModule } from './qr-code/qr-code.module';
import { CheckUpRequestModule } from './check-up-request/check-up-request.module';
import { ConfigModule } from '@nestjs/config';
import { AuthModule } from '@app/sharedlogic/auth/auth.module';

@Module({
  imports: [
    AuthModule,
    FarmerModule,
    LifestockModule,
    TransferModule,
    QrCodeModule,
    CheckUpRequestModule,
    ConfigModule.forRoot({
      isGlobal: true,
      envFilePath: ['apps/farmer-logic/.env'],
    }),
  ],
  controllers: [],
  providers: [],
})
export class FarmerLogicModule {}
