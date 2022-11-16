import { IAddressRepository } from "../../../repositories/IAddressRepository";

export class RemoveAddressUseCase {
  constructor(private addressRepo: IAddressRepository) {}
  async execute(id: string) {
    await this.addressRepo.findById(id)

    await this.addressRepo.remove(id)
  }
}