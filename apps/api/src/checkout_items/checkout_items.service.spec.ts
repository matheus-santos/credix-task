import { Test, TestingModule } from '@nestjs/testing';
import { CheckoutItemsService } from './checkout_items.service';

describe('CheckoutItemsService', () => {
  let service: CheckoutItemsService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [CheckoutItemsService],
    }).compile();

    service = module.get<CheckoutItemsService>(CheckoutItemsService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
