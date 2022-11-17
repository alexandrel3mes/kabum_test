import { v4 as uuidv4 } from 'uuid';
import { Client } from './Client';

export class Address {
  public readonly id?: string;

  public zipcode: string;
  public address: string;
  public number: string;
  public complement?: string;
  public reference?: string;
  public district: string;
  public city: string;
  public state: string;
  public client?: Client;

  constructor(props: Omit<Address, 'id'>, client: Client, id?: string) {
    Object.assign(this, props)
    this.client = client

    if (!id) {
      this.id = uuidv4();
    }
  }
}