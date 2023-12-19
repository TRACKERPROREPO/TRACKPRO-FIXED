import { Module } from '@nestjs/common';
import { ConfigModule } from '@nestjs/config';
import { DbService } from './db.service';

@Module({
  imports: [
    ConfigModule.forRoot({
      envFilePath: ['./.env'],
      isGlobal: true,
    }),
  ],
  providers:[DbService]
})
export class DbModule {}
