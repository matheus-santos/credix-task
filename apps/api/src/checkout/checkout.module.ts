import { TypeOrmModule } from '@nestjs/typeorm';
import { Module } from '@nestjs/common';

/** Checkout */
import { CheckoutService } from './checkout.service';
import { CheckoutController } from './checkout.controller';
import { Checkout } from './entities/checkout.entity';

/** Implementation */
@Module({
  imports: [TypeOrmModule.forFeature([Checkout])],
  controllers: [CheckoutController],
  providers: [CheckoutService],
  exports: [CheckoutService]
})
export class CheckoutModule {}
