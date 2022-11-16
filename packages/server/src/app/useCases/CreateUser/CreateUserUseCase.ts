import { IUserRepository } from "../../repositories/IUserRepository";
import { User } from "../../entities/User";
import { ICreateUserRequestDTO } from "./CreateUserDTO";

export class CreateUserUseCase {
  constructor(private userRepo: IUserRepository) {}
  async userExistsByEmail(email: string) {
    await this.userRepo.findByEmail(email);
  }
  async execute(data: ICreateUserRequestDTO) {
    await this.userExistsByEmail(data.email);

    const user = new User(data);

    await this.userRepo.save(user)
  }
}