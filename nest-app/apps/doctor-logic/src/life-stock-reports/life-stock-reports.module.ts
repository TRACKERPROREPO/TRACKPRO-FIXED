import { Module } from '@nestjs/common';
import { LifeStockReportsService } from './life-stock-reports.service';
import { LifeStockReportsController } from './life-stock-reports.controller';
import { DbService } from '@app/sharedlogic/db/db.service';

@Module({
  providers: [LifeStockReportsService,DbService],
  controllers: [LifeStockReportsController]
})
export class LifeStockReportsModule {}
