import dataSource from "../../../database";
import { EntityManager } from "typeorm";
import throwCustomError from "../../../utils/throwCustomError";
import errorMessages from "../../error/errorMessages";
import { IUserRepository } from "../IUserRepository";
import UserModel from "../../models/User.entity";
import { User } from "../../entities/User";

export class TypeOrmUserRepository implements IUserRepository {
  async findByEmail(email: string): Promise<void> {
    const source = await dataSource

    const user = await source.getRepository(UserModel).findOne({
      where: { email }
    })

    if (user) return throwCustomError('validationError', errorMessages.USER_ALREADY_EXIST);
  }

  async save(user: User): Promise<void> {
    const source = await dataSource

    await source.transaction(async (transaction: EntityManager) => {
      await transaction
        .getRepository(UserModel)
        .save(user);
    });
  }
  
}