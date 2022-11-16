import { IClientRepository } from "../../repositories/IClientRepository";

export class RemoveClientUseCase {
  constructor(private clientRepo: IClientRepository) {}
  async execute(id: string) {
    await this.clientRepo.findById(id)

    await this.clientRepo.remove(id)
  }
}