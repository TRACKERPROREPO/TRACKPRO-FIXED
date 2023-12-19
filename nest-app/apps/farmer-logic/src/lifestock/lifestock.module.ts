import { Module } from '@nestjs/common';
import { LifestockService } from './lifestock.service';
import { LifestockController } from './lifestock.controller';
import { DbService } from '@app/sharedlogic/db/db.service';

@Module({
  providers: [LifestockService,DbService],
  controllers: [LifestockController]
})
export class LifestockModule {}
