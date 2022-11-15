import { BeforeInsert, Column, Entity, OneToMany } from 'typeorm';
import bcrypt from 'bcryptjs';
import BaseTable from './BaseTable.entity';

@Entity({ name: 'user' })
export default class User extends BaseTable {
  @Column({ nullable: false })
  name: string;

  @Column({ nullable: false, unique: true })
  email: string;

  @Column({ nullable: false, unique: false, select: false })
  password: string;

  @BeforeInsert()
  hashPassword(): void {
    this.password = bcrypt.hashSync(this.password, 10);
  }
}