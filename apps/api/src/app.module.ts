import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';

/** Controllers */
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { CheckoutModule } from './checkout/checkout.module';
import { Checkout } from './checkout/entities/checkout.entity';
import { CheckoutItemsModule } from './checkout_items/checkout_items.module';
import { CheckoutItem } from './checkout_items/entities/checkout_item.entity';
import { OrdersModule } from './orders/orders.module';
import { UserInfoModule } from './user-info/user-info.module';
import { UserInfo } from './user-info/entities/user-info.entity';

@Module({
  imports: [
    TypeOrmModule.forRoot({
      type: 'postgres',
      host: 'localhost',
      port: 5432,
      password: 'root',
      username: 'root',
      entities: [Checkout, CheckoutItem, UserInfo],
      database: 'postgres',
      // synchronize: true,
      logging: true,
    }),
    CheckoutModule,
    CheckoutItemsModule,
    OrdersModule,
    UserInfoModule,
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
