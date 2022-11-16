import { Column, Entity, JoinColumn, ManyToOne } from 'typeorm';
import BaseTable from './BaseTable.entity';
import Client from './Client.entity';

@Entity({ name: 'address' })
export default class AddressModel extends BaseTable {
  @Column({ nullable: false })
  zipcode: string;

  @Column({ nullable: false })
  address: string;

  @Column({ nullable: false })
  number: string;

  @Column({ nullable: true })
  complement: string;

  @Column({ nullable: true })
  reference: string;

  @Column({ nullable: false })
  district: string;

  @Column({ nullable: false })
  city: string;

  @Column({ nullable: false })
  state: string;

  @ManyToOne(() => Client, (client) => client.addresses)
  @JoinColumn({ name: 'client_id' })
  client: Client;
}
