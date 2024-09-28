import { Column, Entity, OneToMany, JoinColumn, OneToOne, PrimaryGeneratedColumn } from 'typeorm';

/** Utils */
import { DecimalColumnTransformer } from 'src/utils/DecimalColumnTransformer';

/** Entities */
import { CheckoutItem } from 'src/checkout_items/entities/checkout_item.entity';
import { UserInfo } from 'src/user-info/entities/user-info.entity';

/** Implementation */
@Entity('checkout', { schema: 'store' })
export class Checkout {
  @PrimaryGeneratedColumn()
  id: number;

  @Column({ type: 'int', name: 'userid' })
  userId: number;

  @Column({ type: 'int', name: 'userinfoid' })
  userInfoId: number;

  @Column('decimal', {
    precision: 10,
    scale: 2,
    transformer: new DecimalColumnTransformer(),
  })
  subtotal: number;

  @Column('decimal', {
    precision: 10,
    scale: 2,
    transformer: new DecimalColumnTransformer(),
  })
  discounts: number;

  @Column('decimal', {
    precision: 10,
    scale: 2,
    transformer: new DecimalColumnTransformer(),
  })
  tax: number;

  @Column('decimal', {
    precision: 10,
    scale: 2,
    transformer: new DecimalColumnTransformer(),
  })
  shipping: number;

  @Column('decimal', {
    precision: 10,
    scale: 2,
    transformer: new DecimalColumnTransformer(),
  })
  total: number;

  @OneToMany(() => CheckoutItem, (checkoutItem) => checkoutItem.checkout)
  items: CheckoutItem[];

  @OneToOne(() => UserInfo)
  @JoinColumn({ name: 'userinfoid', referencedColumnName: 'id' })
  shippingLocation: UserInfo
}
