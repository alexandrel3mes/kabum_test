// Registra o primeiro usuário
import User from '../../app/models/User.entity';
import { EntityManager } from 'typeorm';
import IUserPayload from '../../app/interfaces/User/IUserPayload';
import firstUser from './FirstUser';

class DumpUser {
  public async toSave(transaction: EntityManager): Promise<void> {
    await transaction
      .getRepository(User)
      .save(this.userFactory(firstUser));
  }

  private userFactory(payload: IUserPayload): User {
    const user: User = new User();

    user.name = payload.name;
    user.email = payload.email;
    user.password = payload.password;

    return user;
  }
}

export default new DumpUser();
