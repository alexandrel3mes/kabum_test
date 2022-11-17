import { v4 as uuidv4 } from 'uuid';
import bcrypt from 'bcryptjs';

export class User {
  public readonly id?: string;

  public name: string;
  public email: string;
  public password: string;

  constructor(props: Omit<User, 'id'>, id?: string) {
    Object.assign(this, props)
    this.password = bcrypt.hashSync(props.password, 10);

    if (!id) {
      this.id = uuidv4();
    }
  }
}