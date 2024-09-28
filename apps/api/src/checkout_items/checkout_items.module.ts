import { Module } from '@nestjs/common';
import { CheckoutItemsService } from './checkout_items.service';
import { CheckoutItemsController } from './checkout_items.controller';

@Module({
  controllers: [CheckoutItemsController],
  providers: [CheckoutItemsService],
})
export class CheckoutItemsModule {}
