import { Module } from '@nestjs/common';
import { OrdersService } from './orders.service';
import { OrdersController } from './orders.controller';
import { CheckoutModule } from 'src/checkout/checkout.module';

@Module({
  imports: [CheckoutModule],
  controllers: [OrdersController],
  providers: [OrdersService],
})
export class OrdersModule {}
