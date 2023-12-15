import { Test, TestingModule } from '@nestjs/testing';
import { PayementsResolver } from './payements.resolver';
import { PayementsService } from './payements.service';

describe('PayementsResolver', () => {
  let resolver: PayementsResolver;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [PayementsResolver, PayementsService],
    }).compile();

    resolver = module.get<PayementsResolver>(PayementsResolver);
  });

  it('should be defined', () => {
    expect(resolver).toBeDefined();
  });
});
