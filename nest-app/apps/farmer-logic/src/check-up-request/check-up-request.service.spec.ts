import { Test, TestingModule } from '@nestjs/testing';
import { CheckUpRequestService } from './check-up-request.service';

describe('CheckUpRequestService', () => {
  let service: CheckUpRequestService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [CheckUpRequestService],
    }).compile();

    service = module.get<CheckUpRequestService>(CheckUpRequestService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
