import { Test, TestingModule } from '@nestjs/testing';
import { LifestockService } from './lifestock.service';

describe('LifestockService', () => {
  let service: LifestockService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [LifestockService],
    }).compile();

    service = module.get<LifestockService>(LifestockService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
