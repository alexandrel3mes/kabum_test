import throwCustomError from "../../../utils/throwCustomError";
import { User } from "../../entities/User";
import dataSource from "../../../database";
import bcrypt = require('bcryptjs');
import jwt = require('jsonwebtoken');
import { ILoginRepository } from "../ILoginRepository";
import UserModel from "../../models/User.entity";
import errorMessages from "../../error/errorMessages";

export class TypeOrmLoginRepository implements ILoginRepository {
  async validateEmail(email: string): Promise<User> {
    const source = await dataSource

    const user = await source.getRepository(UserModel).findOne({
      where: { email },
      select: {
        password: true,
      }
    })

    if (!user) return throwCustomError('notFoundError', errorMessages.NOT_FOUND_USER);

    return user;
  }
  async validatePassword(password: string, dbPassword: string): Promise<void> {
    const passValidation = await bcrypt.compare(password, dbPassword);
    if (!passValidation) {
        return throwCustomError('unauthorizedError', errorMessages.INCORRECT_PASSWORD);
      }
  }

  login(user: User): string {
    const token = jwt.sign({data: user.id}, process.env.JWT_SECRET || 'secret')
    return token
  }
  
}