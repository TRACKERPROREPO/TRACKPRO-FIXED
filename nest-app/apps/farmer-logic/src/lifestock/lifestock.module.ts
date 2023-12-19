import { Module } from '@nestjs/common';
import { LifestockService } from './lifestock.service';
import { LifestockController } from './lifestock.controller';

@Module({
  providers: [LifestockService],
  controllers: [LifestockController]
})
export class LifestockModule {}
