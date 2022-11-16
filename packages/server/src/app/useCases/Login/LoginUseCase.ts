import { ILoginRepository } from "../../repositories/ILoginRepository";
import { ILoginRequestDTO } from "./LoginDTO";

export class LoginUseCase {
  constructor(private loginRepo: ILoginRepository) {}
  async findByEmail(email: string) {
    const user = await this.loginRepo.validateEmail(email);
    return user;
  }

  async validatePass(password: string, dbPassword: string) {
    await this.loginRepo.validatePassword(password, dbPassword);
  }

  async execute(data: ILoginRequestDTO) {
    const user = await this.findByEmail(data.email);
    await this.validatePass(data.password, user.password)

    const token = this.loginRepo.login(user)

    return token
  }
}