import { User } from "../entities/User";

export interface ILoginRepository {
  validateEmail(email: string): Promise<User>;
  validatePassword(password: string, dbPassword: string): Promise<void>;
  login(user: User): string;
} 