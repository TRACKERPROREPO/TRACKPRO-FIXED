import { Module } from '@nestjs/common';
import { LifeStockReportsService } from './life-stock-reports.service';
import { LifeStockReportsController } from './life-stock-reports.controller';

@Module({
  providers: [LifeStockReportsService],
  controllers: [LifeStockReportsController]
})
export class LifeStockReportsModule {}
