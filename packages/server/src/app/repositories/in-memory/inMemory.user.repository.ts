import { User } from "../../entities/User";
import { IUserRepository } from "../IUserRepository";

export class InMemoryUserRepository implements IUserRepository {
  public items: User[] = []

  async findByEmail(email: string): Promise<void> {
    const finder = this.items.find((item) => {
      return item.email === email
    })

    if (finder) throw new Error('Email já cadastrado')
  }
  async save(user: User): Promise<void> {
    this.items.push(user)
  }
  
}