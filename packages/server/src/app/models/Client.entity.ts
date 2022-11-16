import { Column, Entity, OneToMany } from 'typeorm';
import Address from './Address.entity';
import BaseTable from './BaseTable.entity';

@Entity({ name: 'client' })
export default class ClientModel extends BaseTable {
  @Column({ nullable: false })
  name: string;

  @Column({ nullable: false })
  birthday: string;

  @Column({ nullable: false, unique: true })
  cpf: string;

  @Column({ nullable: false, unique: true })
  rg: string;

  @Column({ nullable: false, unique: true })
  phone: string;

  @OneToMany(() => Address, (address) => address.client)
  addresses: Address[];
}
