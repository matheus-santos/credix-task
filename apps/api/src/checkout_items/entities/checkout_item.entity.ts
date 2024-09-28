import {
  Column,
  Entity,
  JoinColumn,
  ManyToOne,
  PrimaryGeneratedColumn,
} from 'typeorm';

/** Utils */
import { DecimalColumnTransformer } from 'src/utils/DecimalColumnTransformer';

/** Entities */
import { Checkout } from 'src/checkout/entities/checkout.entity';

/** Implementation */
@Entity('checkout_items', { schema: 'store' })
export class CheckoutItem {
  @PrimaryGeneratedColumn()
  id: number;

  @Column({ type: 'int', name: 'checkoutid' })
  checkoutId: number;

  @Column({ type: 'int', name: 'productid' })
  productId: number;

  @Column({ type: 'varchar', name: 'productname' })
  productName: string;

  @Column({ type: 'varchar', name: 'imagehref' })
  imageHref: string;

  @Column({ type: 'int' })
  quantity: number;

  @Column('decimal', {
    precision: 10,
    scale: 2,
    transformer: new DecimalColumnTransformer(),
  })
  total: number;

  @ManyToOne(() => Checkout, (checkout) => checkout.items)
  @JoinColumn({ name: 'checkoutid', referencedColumnName: 'id' })
  checkout: Checkout;
}
