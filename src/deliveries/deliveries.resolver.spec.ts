import { Test, TestingModule } from '@nestjs/testing';
import { DeliveriesResolver } from './deliveries.resolver';
import { DeliveriesService } from './deliveries.service';

describe('DeliveriesResolver', () => {
  let resolver: DeliveriesResolver;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [DeliveriesResolver, DeliveriesService],
    }).compile();

    resolver = module.get<DeliveriesResolver>(DeliveriesResolver);
  });

  it('should be defined', () => {
    expect(resolver).toBeDefined();
  });
});
