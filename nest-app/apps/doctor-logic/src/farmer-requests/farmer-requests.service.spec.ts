import { Test, TestingModule } from '@nestjs/testing';
import { FarmerRequestsService } from './farmer-requests.service';

describe('FarmerRequestsService', () => {
  let service: FarmerRequestsService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [FarmerRequestsService],
    }).compile();

    service = module.get<FarmerRequestsService>(FarmerRequestsService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
