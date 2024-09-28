import { Column, Entity, PrimaryGeneratedColumn } from 'typeorm';

/** Implementation */
@Entity('user_info', { schema: 'store' })
export class UserInfo {
  @PrimaryGeneratedColumn()
  id: number;

  @Column({ type: 'int', name: 'userid'})
  userId: number;

  @Column({ type: 'varchar', name: 'address1'})
  address1: string;

  @Column({ type: 'varchar', name: 'address2'})
  address2: string;

  @Column({ type: 'varchar', name: 'city'})
  city: string;

  @Column({ type: 'varchar', name: 'region'})
  region: string;

  @Column({ type: 'varchar', name: 'postalcode'})
  postalCode: string;

  @Column({ type: 'varchar', name: 'country'})
  country: string;
}
