import { Test, TestingModule } from '@nestjs/testing';
import { LifeStockReportsService } from './life-stock-reports.service';

describe('LifeStockReportsService', () => {
  let service: LifeStockReportsService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [LifeStockReportsService],
    }).compile();

    service = module.get<LifeStockReportsService>(LifeStockReportsService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
