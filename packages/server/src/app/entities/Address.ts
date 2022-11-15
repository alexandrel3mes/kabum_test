import { uuid } from 'uuidv4'
import { Client } from './Client';

export class Address {
  public readonly id: string;

  public zipcode: string;
  public address: string;
  public number: string;
  public complement?: string;
  public reference?: string;
  public district: string;
  public city: string;
  public state: string;
  public client: Client;

  constructor(props: Omit<Address, 'id'>, id?: string) {
    Object.assign(this, props)

    if (!id) {
      this.id = uuid();
    }
  }
}