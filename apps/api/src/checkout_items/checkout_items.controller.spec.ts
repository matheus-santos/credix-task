import { Test, TestingModule } from '@nestjs/testing';
import { CheckoutItemsController } from './checkout_items.controller';
import { CheckoutItemsService } from './checkout_items.service';

describe('CheckoutItemsController', () => {
  let controller: CheckoutItemsController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [CheckoutItemsController],
      providers: [CheckoutItemsService],
    }).compile();

    controller = module.get<CheckoutItemsController>(CheckoutItemsController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
