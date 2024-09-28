import { Column, Entity, PrimaryGeneratedColumn } from 'typeorm';

/** Implementation */
@Entity('orders', { schema: 'store' })
export class Order {
  @PrimaryGeneratedColumn()
  id: number;

  @Column({ type: 'int', name: 'checkoutid' })
  checkoutId: number;

  @Column({ type: 'int', name: 'userid' })
  userId: number;

  @Column({ type: 'int', name: 'userinfoid' })
  userInfoId: number;
}
