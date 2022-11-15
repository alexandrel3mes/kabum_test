import { uuid } from 'uuidv4'
import { Address } from './Address';

export class Client {
  public readonly id: string;

  public name: string;
  public email: string;
  public password: string;
  public addresses: Address[];

  constructor(props: Omit<Client, 'id'>, id?: string) {
    Object.assign(this, props)

    if (!id) {
      this.id = uuid();
    }
  }
}