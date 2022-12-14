import { User } from "../entities/User";

export interface IUserRepository {
  findByEmail(email: string): Promise<void>;
  save(user: User): Promise<void>;
} 